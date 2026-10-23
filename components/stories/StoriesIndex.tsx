"use client";

import Link from "next/link";
import { useState } from "react";
import Photo from "@/components/ui/Photo";
import { STORIES, STORY_INDEX_ORDER } from "@/content/stories";

const ORDERED = STORY_INDEX_ORDER.map((slug) => STORIES.find((story) => story.slug === slug))
  .filter((story): story is (typeof STORIES)[number] => Boolean(story));

const CATEGORIES = [
  "All",
  ...Array.from(new Set(ORDERED.map((story) => story.category))),
];

export default function StoriesIndex() {
  const [category, setCategory] = useState("All");
  const visible =
    category === "All" ? ORDERED : ORDERED.filter((story) => story.category === category);

  return (
    <>
      <div className="storiesToolbar">
        <div className="storiesFilters" role="group" aria-label="Filter stories">
          {CATEGORIES.map((item) => (
            <button
              type="button"
              key={item}
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <p className="storiesCount" aria-live="polite">
          {visible.length} {visible.length === 1 ? "story" : "stories"}
        </p>
      </div>

      <div className="storiesGrid">
        {visible.map((story, index) => (
          <article className="storyCard" key={story.slug} data-reveal data-delay={index * 80}>
            <Link className="storyCard__media" href={`/stories/${story.slug}`}>
              <Photo src={story.heroImage} alt={story.heroAlt} sizes="(max-width: 880px) 90vw, 30vw" />
            </Link>
            <div className="storyCard__body">
              <p className="storyCard__category">{story.category}</p>
              <h2>
                <Link href={`/stories/${story.slug}`}>{story.title}</Link>
              </h2>
              <p className="storyCard__standfirst">{story.standfirst}</p>
              <div className="storyCard__foot">
                <span>{story.location}</span>
                <span>{story.readTime}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
