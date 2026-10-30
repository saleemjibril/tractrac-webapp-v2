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
  readingTime,
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
  const author = post.author?.node?.name;

  return (
    <main id="main" className="pageMain blogPostPage">
      <section className="blogPostHero">
        {image ? (
          <div className="blogPostHero__bg">
            <Photo src={image} alt={postImageAlt(post)} sizes="100vw" priority />
          </div>
        ) : null}
        <div className="blogPostHero__shade" aria-hidden="true" />
        <div className="wrap blogPostHero__inner">
          <Link className="blogPostHero__back" href="/blog">
            <span aria-hidden="true">←</span>
            <span>Back to the blog</span>
          </Link>

          <div className="blogPostHero__content">
            <p className="eyebrow">Blog</p>
            <h1>{post.title}</h1>
            {post.excerpt ? (
              <p className="blogPostHero__standfirst">{plainExcerpt(post.excerpt)}</p>
            ) : null}
            <div className="blogPostHero__meta">
              <div>
                <span>Published</span>
                <p>{formatPostDate(post.date)}</p>
              </div>
              <div>
                <span>Reading time</span>
                <p>{readingTime(post.content)}</p>
              </div>
              {author ? (
                <div>
                  <span>Written by</span>
                  <p>{author}</p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

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
