import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Photo from "@/components/ui/Photo";
import {
  formatPostDate,
  getBlogPost,
  getBlogPosts,
  plainExcerpt,
  postImage,
  postImageAlt,
} from "@/lib/blog";
import "@/styles/blog-post.css";

export const revalidate = 60;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return { title: "Story not found" };

  const image = postImage(post);
  return {
    title: post.title,
    description: plainExcerpt(post.excerpt).slice(0, 160),
    ...(image ? { openGraph: { images: [image] } } : {}),
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();

  const image = postImage(post);

  return (
    <main id="main" className="pageMain blogPostPage">
      <header className="blogPostHero">
        <div className="wrap blogPostHero__inner">
          <Link className="blogPostHero__back" href="/blog">
            <span aria-hidden="true">←</span> Back to the blog
          </Link>
          <p className="eyebrow eyebrow--light">Blog</p>
          <h1>{post.title}</h1>
          <p className="blogPostHero__meta">{formatPostDate(post.date)}</p>
          {post.excerpt ? (
            <p className="blogPostHero__lede">{plainExcerpt(post.excerpt)}</p>
          ) : null}
        </div>
      </header>

      {image ? (
        <div className="wrap blogPostMedia">
          <Photo
            src={image}
            alt={postImageAlt(post)}
            sizes="(max-width: 880px) 100vw, 86vw"
            priority
          />
        </div>
      ) : null}

      <article
        className="wrap blogPostBody"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <footer className="wrap blogPostFoot">
        <Link className="btn btn--primary btn--lg" href="/technology#download">
          Get TracTrac Plus
        </Link>
        <Link className="linkUnderline" href="/blog">
          Back to all stories
        </Link>
      </footer>
    </main>
  );
}
