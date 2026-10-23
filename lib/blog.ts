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

type BlogResponse = {
  status?: string;
  data?: BlogPost[];
  pagination?: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
  };
};

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
      .sort((a, b) => timestamp(b) - timestamp(a));
  } catch {
    return [];
  }
}

export function postHref(post: BlogPost) {
  return `https://tractrac.co/blog/${post.slug}`;
}

export function postImage(post: BlogPost) {
  return post.featuredImage?.node?.sourceUrl ?? null;
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
