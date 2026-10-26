import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Photo from "@/components/ui/Photo";
import { STORIES, getStory } from "@/content/stories";
import "@/styles/stories.css";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return STORIES.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) return {};
  return {
    title: story.title,
    description: story.standfirst,
    openGraph: { images: [story.heroImage] },
  };
}

export default async function StoryPage({ params }: PageProps) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) notFound();
  const next = getStory(story.nextSlug);

  return (
    <main id="main" className="pageMain">
      <section className="storyArticleHero">
        <div className="storyArticleHero__bg">
          <Photo src={story.heroImage} alt={story.heroAlt} sizes="100vw" priority />
        </div>
        <div className="storyArticleHero__shade" aria-hidden="true" />
        <div className="wrap storyArticleHero__inner">
          <Link className="storyArticleHero__back" href="/stories">
            <span aria-hidden="true">←</span>
            <span>Stories from the field</span>
          </Link>
          <div className="storyArticleHero__content">
            <p className="eyebrow">{story.category}</p>
            <h1 className="storyArticleHero__title">{story.title}</h1>
            <p className="storyArticleHero__standfirst">{story.standfirst}</p>
            <div className="storyArticleHero__meta">
              <div>
                <span>Location</span>
                <p>{story.location}</p>
              </div>
              <div>
                <span>In conversation with</span>
                <p>{story.person}</p>
              </div>
              <div>
                <span>Reading time</span>
                <p>{story.readTime}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="storyArticle">
        <div className="wrap storyArticle__body">
          {story.body.map((block, index) => {
            if (block.type === "quote") {
              return (
                <figure className="storyQuote" key={index}>
                  <span className="storyQuote__mark" aria-hidden="true">
                    “
                  </span>
                  <blockquote>{block.text}</blockquote>
                  <figcaption>{story.person.split(",")[0]}</figcaption>
                </figure>
              );
            }
            if (block.type === "image") {
              return (
                <figure className="storyWide" key={index}>
                  <div className="storyWide__media">
                    <Photo src={block.src} alt={block.alt} sizes="(max-width: 880px) 90vw, 70vw" />
                  </div>
                  <figcaption>{block.caption}</figcaption>
                </figure>
              );
            }
            return (
              <p className={index === 0 ? "storyLead" : undefined} key={index}>
                {block.text}
              </p>
            );
          })}
        </div>
      </article>

      <section className="storyGallery">
        <div className="wrap">
          <div className="storyGallery__head">
            <div>
              <p className="eyebrow">Gallery</p>
              <h2>From the visit</h2>
            </div>
            <p>{story.location}</p>
          </div>
          <div className="storyGallery__grid">
            {story.gallery.map((image) => (
              <figure key={image.src}>
                <Photo src={image.src} alt={image.alt} sizes="(max-width: 640px) 90vw, 45vw" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {next ? (
        <section className="storyNext">
          <div className="wrap">
            <Link className="storyNext__card" href={`/stories/${next.slug}`}>
              <div className="storyNext__media">
                <Photo src={next.heroImage} alt={next.heroAlt} sizes="(max-width: 980px) 90vw, 45vw" />
              </div>
              <div className="storyNext__copy">
                <p className="storyNext__eyebrow">
                  Next story · <span>{next.category}</span>
                </p>
                <h2>{next.title}</h2>
                <p>{next.standfirst}</p>
                <span className="storyNext__link">Read the story →</span>
              </div>
            </Link>
          </div>
        </section>
      ) : null}
    </main>
  );
}
