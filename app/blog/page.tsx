import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/ui/Hero";
import Photo from "@/components/ui/Photo";
import {
  formatPostDate,
  getBlogPosts,
  plainExcerpt,
  postHref,
  postImage,
  postImageAlt,
} from "@/lib/blog";
import "@/styles/insights.css";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Stories, ideas and practical insights from the work of making agricultural mechanization more accessible.",
  openGraph: {
    images: [
      "https://api.tractrac.co/media/images/f56cc36b-27b4-42d4-879c-92fbc77430d0.jpg",
    ],
  },
};

export default async function InsightsPage() {
  const posts = await getBlogPosts();

  return (
    <main id="main" className="pageMain">
      <Hero
        image="https://api.tractrac.co/media/images/f56cc36b-27b4-42d4-879c-92fbc77430d0.jpg"
        imageAlt="A TracTrac field officer speaking with a group of farmers in a village"
        priority
        size="medium"
        className="insightsHero"
      >
        <p className="eyebrow" data-reveal>
          Blog
        </p>
        <h1 className="display1 insightsHero__title" data-reveal data-delay="80">
          What we&rsquo;re learning, building and seeing in the field.
        </h1>
        <p className="insightsHero__lede" data-reveal data-delay="180">
          Stories, ideas and practical insights from the work of making agricultural mechanization
          more accessible.
        </p>
      </Hero>

      {posts.length ? (
        <section className="insightsAll">
          <div className="wrap">
            <div className="grid2 insightsSectionHead insightsAll__head">
              <div>
                <p className="eyebrow">All posts</p>
                <h2 className="h2">Every story from the blog.</h2>
              </div>
              <p className="insightsAll__count">
                {posts.length} {posts.length === 1 ? "article" : "articles"}
              </p>
            </div>

            <div className="insightsGrid">
              {posts.map((post, index) => {
                const image = postImage(post);
                return (
                  <Link
                    className="insightsCard"
                    href={postHref(post)}
                    key={post.id}
                    data-reveal
                    data-delay={Math.min(index * 40, 360)}
                  >
                    {image ? (
                      <div className="media insightsCard__media">
                        <Photo
                          src={image}
                          alt={postImageAlt(post)}
                          sizes="(max-width: 880px) 90vw, 30vw"
                        />
                      </div>
                    ) : null}
                    <div className="insightsCard__body">
                      <p className="insightMeta">
                        <span>{formatPostDate(post.date)}</span>
                      </p>
                      <h3>{post.title}</h3>
                      <p className="insightExcerpt">{plainExcerpt(post.excerpt)}</p>
                      <span className="insightRead">Read article</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
