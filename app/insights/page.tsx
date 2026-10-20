import type { Metadata } from "next";
import Link from "next/link";
import InsightFilters from "@/components/insights/InsightFilters";
import Hero from "@/components/ui/Hero";
import Photo from "@/components/ui/Photo";
import type { Article } from "@/content/insights";
import { INSIGHTS } from "@/content/insights";
import { asset } from "@/lib/asset";
import "@/styles/insights.css";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Stories, ideas and practical insights from the work of making agricultural mechanisation more accessible.",
  openGraph: {
    images: [
      asset(
        "https://api.tractrac.co/media/blog-images/ab4eaf45-0af6-4dc1-94ed-fe8bccafb4c0.webp",
      ),
    ],
  },
};

function Meta({ article }: { article: Article }) {
  return (
    <p className="insightMeta">
      <span>{article.category}</span>
      {article.date ? <span>{article.date}</span> : null}
    </p>
  );
}

export default function InsightsPage() {
  return (
    <main id="main" className="pageMain">
      <Hero
        image={INSIGHTS.heroImage}
        imageAlt={INSIGHTS.heroAlt}
        priority
        size="medium"
        className="insightsHero"
      >
        <p className="eyebrow" data-reveal>
          Insights
        </p>
        <h1 className="display1 insightsHero__title" data-reveal data-delay="80">
          What we&rsquo;re learning, building and seeing in the field.
        </h1>
        <p className="insightsHero__lede" data-reveal data-delay="180">
          Stories, ideas and practical insights from the work of making agricultural mechanisation
          more accessible.
        </p>
      </Hero>

      <section className="insightsFeatured">
        <div className="wrap">
          <p className="eyebrow insightsFeatured__eyebrow">Featured</p>
          <a
            className="insightsFeature"
            href={INSIGHTS.featured.href}
            target="_blank"
            rel="noopener"
          >
            <div className="media media--rounded insightMediaWide" data-reveal="img">
              <Photo
                src={INSIGHTS.featured.image ?? ""}
                alt={INSIGHTS.featured.alt ?? ""}
                sizes="45vw"
              />
            </div>
            <div data-reveal data-delay="120">
              <Meta article={INSIGHTS.featured} />
              <h2>{INSIGHTS.featured.title}</h2>
              <p className="insightExcerpt">{INSIGHTS.featured.excerpt}</p>
              <span className="btn btn--primary btn--noHover">Read article</span>
            </div>
          </a>
        </div>
      </section>

      <section className="insightsProgrammes">
        <div className="wrap">
          <div className="grid2 insightsSectionHead">
            <div>
              <p className="eyebrow">Programmes &amp; impact</p>
              <h2 className="h2">Inside the ISSAM project.</h2>
            </div>
            <div>
              <Link className="linkUnderline" href="/programmes/issam">
                Explore the ISSAM programme
              </Link>
            </div>
          </div>

          <div className="insightsSplit">
            <a
              className="insightsLead"
              href={INSIGHTS.programmeLead.href}
              target="_blank"
              rel="noopener"
              data-reveal
            >
              <div className="media media--rounded ratio-16-10 insightMediaWide">
                <Photo
                  src={INSIGHTS.programmeLead.image ?? ""}
                  alt={INSIGHTS.programmeLead.alt ?? ""}
                  sizes="50vw"
                />
              </div>
              <Meta article={INSIGHTS.programmeLead} />
              <h3>{INSIGHTS.programmeLead.title}</h3>
              <p className="insightExcerpt">{INSIGHTS.programmeLead.excerpt}</p>
              <span className="insightRead">Read article</span>
            </a>
            <div className="insightsList">
              {INSIGHTS.programmeList.map((article, index) => (
                <a
                  href={article.href}
                  target="_blank"
                  rel="noopener"
                  key={article.title}
                  data-reveal
                  data-delay={80 + index * 80}
                >
                  <Meta article={article} />
                  <h3>{article.title}</h3>
                  {article.excerpt ? <p className="insightExcerpt">{article.excerpt}</p> : null}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="insightsPeople on-dark">
        <div className="wrap">
          <p className="eyebrow">People</p>
          <h2 className="h2 insightsPeople__title">The people behind the machines.</h2>
          <a
            className="insightsPersonLead"
            href={INSIGHTS.peopleLead.href}
            target="_blank"
            rel="noopener"
            data-reveal
          >
            <div className="grid2 insightsPersonLead__grid">
              <div>
                <Meta article={INSIGHTS.peopleLead} />
                <h3>{INSIGHTS.peopleLead.title}</h3>
              </div>
              <div>
                <p className="insightsPersonLead__copy">{INSIGHTS.peopleLead.excerpt}</p>
                <span className="insightRead">Read Abigail&rsquo;s story</span>
              </div>
            </div>
          </a>
          <div className="grid2 insightsPeople__list">
            {INSIGHTS.peopleList.map((article, index) => (
              <a
                href={article.href}
                target="_blank"
                rel="noopener"
                key={article.title}
                data-reveal
                data-delay={index * 80}
              >
                <Meta article={article} />
                <h3>{article.title}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="insightsGuides">
        <div className="wrap">
          <InsightFilters
            categories={INSIGHTS.guides.categories}
            featured={INSIGHTS.guides.featured}
            list={INSIGHTS.guides.list}
          />
        </div>
      </section>

      <section className="insightsPolicy">
        <div className="wrap">
          <p className="eyebrow">Policy &amp; industry</p>
          <h2 className="h2 insightsPolicy__title">The national picture.</h2>
          <div className="insightsPolicy__grid">
            <a
              href={INSIGHTS.policyLead.href}
              target="_blank"
              rel="noopener"
              className="insightsLead"
              data-reveal
            >
              <div className="media media--rounded ratio-16-10 insightMediaWide">
                <Photo
                  src={INSIGHTS.policyLead.image ?? ""}
                  alt={INSIGHTS.policyLead.alt ?? ""}
                  sizes="50vw"
                />
              </div>
              <Meta article={INSIGHTS.policyLead} />
              <h3>{INSIGHTS.policyLead.title}</h3>
              <p className="insightExcerpt">{INSIGHTS.policyLead.excerpt}</p>
              <span className="insightRead">Read article</span>
            </a>
            <div className="insightsList">
              {INSIGHTS.policyList.map((article, index) => (
                <a
                  href={article.href}
                  target="_blank"
                  rel="noopener"
                  key={article.title}
                  data-reveal
                  data-delay={80 + index * 80}
                >
                  <Meta article={article} />
                  <h3>{article.title}</h3>
                  {article.excerpt ? <p className="insightExcerpt">{article.excerpt}</p> : null}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="insightsCta">
        <div className="insightsCta__bg">
          <Photo
            src={asset("img/prog-5.jpg")}
            alt="An MSP driving a tryctor across an open field"
            sizes="100vw"
          />
        </div>
        <div className="insightsCta__shade" aria-hidden="true" />
        <div className="wrap insightsCta__inner">
          <p className="eyebrow" data-reveal>
            Keep exploring
          </p>
          <h2 data-reveal data-delay="80">
            See the programmes, technology and work behind the stories.
          </h2>
          <div className="insightsCta__actions" data-reveal data-delay="160">
            <Link className="btn btn--primary btn--lg" href="/programmes">
              Explore Programmes
            </Link>
            <Link className="btn btn--outlineLight btn--lg" href="/impact">
              See Our Impact
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
