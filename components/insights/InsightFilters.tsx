"use client";

import { useState } from "react";
import Photo from "@/components/ui/Photo";
import type { Article } from "@/content/insights";

type Props = {
  categories: string[];
  featured: Article[];
  list: Article[];
};

export default function InsightFilters({ categories, featured, list }: Props) {
  const [filter, setFilter] = useState("All");
  const visible = (article: Article) => filter === "All" || article.category === filter;
  const featuredVisible = featured.filter(visible);
  const listVisible = list.filter(visible);
  const empty = featuredVisible.length + listVisible.length === 0;

  return (
    <>
      <div className="grid2 insightsSectionHead insightsGuides__head">
        <div>
          <p className="eyebrow">For farmers &amp; operators</p>
          <h2 className="h2">Practical guides.</h2>
        </div>
        <div className="insightFilters" role="group" aria-label="Filter articles">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              aria-pressed={filter === category}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {empty ? (
        <p className="insightEmpty">No articles in this category yet.</p>
      ) : (
        <>
          <div className="insightGuideFeatured">
            {featuredVisible.map((article) => (
              <a
                href={article.href}
                target="_blank"
                rel="noopener"
                className="insightGuideCard"
                key={article.title}
              >
                <div className="media media--rounded insightGuideCard__media">
                  <Photo src={article.image ?? ""} alt={article.alt ?? ""} sizes="45vw" />
                </div>
                <p className="insightMeta">
                  <span>{article.category}</span>
                  {article.date ? <span>{article.date}</span> : null}
                </p>
                <h3>{article.title}</h3>
                {article.excerpt ? <p className="insightExcerpt">{article.excerpt}</p> : null}
                <span className="insightRead">Read article</span>
              </a>
            ))}
          </div>

          <div className="insightGuideList">
            {listVisible.map((article) => (
              <a
                href={article.href}
                target="_blank"
                rel="noopener"
                className="insightRow"
                key={article.title}
              >
                <span>{article.category}</span>
                <h3>{article.title}</h3>
                <p>{article.excerpt ?? " "}</p>
              </a>
            ))}
          </div>
        </>
      )}
    </>
  );
}
