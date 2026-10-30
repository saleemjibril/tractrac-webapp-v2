import type { Article } from "@/content/insights";

const BLOG_API_BASE = (
  process.env.BLOG_API_URL ??
  process.env.NEXT_PUBLIC_BLOG_API_URL ??
  "https://blogapi.tractrac.co/api/v1"
).replace(/\/+$/, "");

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  featuredImage?: {
    node?: {
      sourceUrl?: string;
      altText?: string;
    };
  };
};

export type BlogPostDetail = BlogPost & {
  content: string;
  author?: {
    node?: {
      name?: string;
    };
  };
};

type BlogResponse = {
  status?: string;
  data?: BlogPost[];
  pagination?: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
  };
};

type BlogDetailResponse = {
  status?: string;
  data?: BlogPostDetail;
};

/** Blog titles and excerpts occasionally use US spelling; the site uses British. */
function britishSpelling(value: string) {
  return value
    .replace(/Mechanization/g, "Mechanisation")
    .replace(/mechanization/g, "mechanisation");
}

/** Fetch the published blog feed. Returns an empty list if the API is down. */
export async function getBlogPosts(limit = 100): Promise<BlogPost[]> {
  try {
    const response = await fetch(`${BLOG_API_BASE}/blog?limit=${limit}&page=1`, {
      next: { revalidate: 60 },
    });
    if (!response.ok) return [];
    const json: BlogResponse = await response.json();
    if (!Array.isArray(json.data)) return [];
    const timestamp = (post: BlogPost) => {
      const time = new Date(post.date).getTime();
      return Number.isNaN(time) ? 0 : time;
    };
    return json.data
      .filter((post) => post?.slug && post?.title)
      .map((post) => ({
        ...post,
        title: britishSpelling(post.title),
        excerpt: britishSpelling(post.excerpt ?? ""),
      }))
      .sort((a, b) => timestamp(b) - timestamp(a));
  } catch {
    return [];
  }
}

export function postHref(post: BlogPost) {
  return `/blog/${post.slug}`;
}

/** The canonical post on the legacy blog site. */
export function postExternalHref(post: BlogPost) {
  return `https://tractrac.co/blog/${post.slug}`;
}

/** Turn links to legacy blog posts into links within this site. */
function internalizeBlogLinks(html: string) {
  return html.replace(
    /https?:\/\/(?:www\.)?tractrac\.co\/blog\//gi,
    "/blog/",
  );
}

/** Strip script tags and inline event handlers from CMS HTML. */
function sanitizeBlogHtml(html: string) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/\son\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "");
}

export function blogContent(html: string) {
  let content = sanitizeBlogHtml(internalizeBlogLinks(html)).replace(
    />([^<]+)</g,
    (match, text: string) => `>${britishSpelling(text)}<`,
  );

  // Give the first paragraph that carries text the larger lead treatment.
  let leadAdded = false;
  content = content.replace(
    /<p(\s[^>]*)?>([\s\S]*?)<\/p>/gi,
    (match, attrs: string | undefined, inner: string) => {
      if (leadAdded) return match;
      const text = inner.replace(/<[^>]+>/g, " ").replace(/&nbsp;/gi, " ").trim();
      if (!text) return match;
      leadAdded = true;
      const tagAttrs = attrs ?? "";
      const classMatch = tagAttrs.match(/\bclass=("([^"]*)"|'([^']*)')/i);
      if (classMatch) {
        const quote = classMatch[1][0];
        const classes = (classMatch[2] ?? classMatch[3] ?? "").trim();
        return `<p${tagAttrs.replace(classMatch[0], `class=${quote}${classes} blogLead${quote}`)}>${inner}</p>`;
      }
      return `<p class="blogLead"${tagAttrs}>${inner}</p>`;
    },
  );

  return content;
}

export async function getBlogPost(slug: string): Promise<BlogPostDetail | null> {
  try {
    const response = await fetch(`${BLOG_API_BASE}/blog/${encodeURIComponent(slug)}`, {
      next: { revalidate: 60 },
    });
    if (!response.ok) return null;
    const json: BlogDetailResponse = await response.json();
    if (!json.data?.slug) return null;
    return {
      ...json.data,
      title: britishSpelling(json.data.title),
      excerpt: britishSpelling(json.data.excerpt ?? ""),
      content: blogContent(json.data.content ?? ""),
    };
  } catch {
    return null;
  }
}

export function postImage(post: BlogPost) {
  const src = post.featuredImage?.node?.sourceUrl ?? null;
  // The old WordPress host serves multi-megabyte PNGs that the image
  // optimizer times out on, which leaves blank cards. Omit them for now.
  return src && !src.includes("msps.tractrac.co") ? src : null;
}

export function postImageAlt(post: BlogPost) {
  return post.featuredImage?.node?.altText || post.title;
}

export function formatPostDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

/** Blog excerpts are HTML; render them as clean text in cards. */
export function plainExcerpt(value: string) {
  return value
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#0?39;|&apos;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/\s+/g, " ")
    .trim();
}

/** Rough reading time for an article, based on 200 words per minute. */
export function readingTime(html: string) {
  const text = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  const words = text ? text.split(" ").length : 0;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
}

function normalizeTitle(value: string) {
  return value
    .toLowerCase()
    .replace(/[’‘]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function slugFromHref(href: string) {
  return href.match(/\/blog\/([^/?#]+)/)?.[1] ?? null;
}

/**
 * Keep the curated /insights sections and categories, but replace each
 * article's content with the current post from the blog API.
 */
export function withLiveData(article: Article, posts: BlogPost[]): Article {
  const bySlug = new Map(posts.map((post) => [post.slug, post]));
  const slug = slugFromHref(article.href);
  const target = normalizeTitle(article.title);

  const match =
    (slug ? bySlug.get(slug) : undefined) ??
    posts.find((post) => normalizeTitle(post.title) === target);

  if (!match) return article;

  return {
    ...article,
    title: match.title,
    excerpt: plainExcerpt(match.excerpt) || article.excerpt,
    date: article.date ? formatPostDate(match.date) : article.date,
    href: postHref(match),
    image: postImage(match) ?? article.image,
    alt: postImageAlt(match) || article.alt,
  };
}
