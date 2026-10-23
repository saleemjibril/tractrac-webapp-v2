import type { Metadata } from "next";
import Hero from "@/components/ui/Hero";
import StoriesIndex from "@/components/stories/StoriesIndex";
import { STORIES_HERO } from "@/content/stories";
import "@/styles/stories.css";

export const metadata: Metadata = {
  title: "Stories from the Field",
  description:
    "Conversations with farmers, equipment owners, booking agents and service providers across Nasarawa State.",
  openGraph: { images: [STORIES_HERO.image] },
};

export default function StoriesPage() {
  return (
    <main id="main" className="pageMain">
      <Hero
        image={STORIES_HERO.image}
        imageAlt={STORIES_HERO.alt}
        priority
        size="tall"
        className="storiesHero"
      >
        <p className="eyebrow" data-reveal>
          Stories from the field
        </p>
        <h1 className="display1 storiesHero__title" data-reveal data-delay="80">
          {STORIES_HERO.title}
        </h1>
        <p className="storiesHero__lede" data-reveal data-delay="180">
          {STORIES_HERO.lede}
        </p>
      </Hero>

      <section className="storiesIndex">
        <div className="wrap">
          <StoriesIndex />
        </div>
      </section>
    </main>
  );
}
