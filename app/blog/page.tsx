import type { Metadata } from "next";
import Link from "next/link";
import InsightFilters from "@/components/insights/InsightFilters";
import Hero from "@/components/ui/Hero";
import Photo from "@/components/ui/Photo";
import type { Article } from "@/content/insights";
import { INSIGHTS } from "@/content/insights";
import { asset } from "@/lib/asset";
import {
  formatPostDate,
  getBlogPosts,
  plainExcerpt,
  postHref,
  postImage,
  postImageAlt,
  withLiveData,
} from "@/lib/blog";
import "@/styles/insights.css";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog",
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

export default async function InsightsPage() {
  const posts = await getBlogPosts();

  const newest = posts[0];
  const featured: Article = newest
    ? {
        category: "Latest post",
        date: formatPostDate(newest.date),
        title: newest.title,
        excerpt: plainExcerpt(newest.excerpt),
        href: postHref(newest),
        image: postImage(newest) ?? INSIGHTS.featured.image,
        alt: postImageAlt(newest),
      }
    : INSIGHTS.featured;

  const programmeLead = withLiveData(INSIGHTS.programmeLead, posts);
  const programmeList = INSIGHTS.programmeList.map((article) =>
    withLiveData(article, posts),
  );
  const peopleLead = withLiveData(INSIGHTS.peopleLead, posts);
  const peopleList = INSIGHTS.peopleList.map((article) => withLiveData(article, posts));
  const guideFeatured = INSIGHTS.guides.featured.map((article) =>
    withLiveData(article, posts),
  );
  const guideList = INSIGHTS.guides.list.map((article) => withLiveData(article, posts));
  const policyLead = withLiveData(INSIGHTS.policyLead, posts);
  const policyList = INSIGHTS.policyList.map((article) => withLiveData(article, posts));

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
          Blog
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
            href={featured.href}
            target="_blank"
            rel="noopener"
          >
            <div className="media media--rounded insightMediaWide" data-reveal="img">
              <Photo
                src={featured.image ?? ""}
                alt={featured.alt ?? ""}
                sizes="45vw"
              />
            </div>
            <div data-reveal data-delay="120">
              <Meta article={featured} />
              <h2>{featured.title}</h2>
              <p className="insightExcerpt">{featured.excerpt}</p>
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
              href={programmeLead.href}
              target="_blank"
              rel="noopener"
              data-reveal
            >
              <div className="media media--rounded ratio-16-10 insightMediaWide">
                <Photo
                  src={programmeLead.image ?? ""}
                  alt={programmeLead.alt ?? ""}
                  sizes="50vw"
                />
              </div>
              <Meta article={programmeLead} />
              <h3>{programmeLead.title}</h3>
              <p className="insightExcerpt">{programmeLead.excerpt}</p>
              <span className="insightRead">Read article</span>
            </a>
            <div className="insightsList">
              {programmeList.map((article, index) => (
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
            href={peopleLead.href}
            target="_blank"
            rel="noopener"
            data-reveal
          >
            <div className="grid2 insightsPersonLead__grid">
              <div>
                <Meta article={peopleLead} />
                <h3>{peopleLead.title}</h3>
              </div>
              <div>
                <p className="insightsPersonLead__copy">{peopleLead.excerpt}</p>
                <span className="insightRead">Read Abigail&rsquo;s story</span>
              </div>
            </div>
          </a>
          <div className="grid2 insightsPeople__list">
            {peopleList.map((article, index) => (
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
            featured={guideFeatured}
            list={guideList}
          />
        </div>
      </section>

      <section className="insightsPolicy">
        <div className="wrap">
          <p className="eyebrow">Policy &amp; industry</p>
          <h2 className="h2 insightsPolicy__title">The national picture.</h2>
          <div className="insightsPolicy__grid">
            <a
              href={policyLead.href}
              target="_blank"
              rel="noopener"
              className="insightsLead"
              data-reveal
            >
              <div className="media media--rounded ratio-16-10 insightMediaWide">
                <Photo
                  src={policyLead.image ?? ""}
                  alt={policyLead.alt ?? ""}
                  sizes="50vw"
                />
              </div>
              <Meta article={policyLead} />
              <h3>{policyLead.title}</h3>
              <p className="insightExcerpt">{policyLead.excerpt}</p>
              <span className="insightRead">Read article</span>
            </a>
            <div className="insightsList">
              {policyList.map((article, index) => (
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
                  <a
                    className="insightsCard"
                    href={postHref(post)}
                    target="_blank"
                    rel="noopener"
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
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}

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
