import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/ui/Hero";
import Photo from "@/components/ui/Photo";
import { RESOURCES } from "@/content/resources";
import "@/styles/insights.css";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Research, guides and practical resources from TracTrac's work making agricultural mechanisation more accessible.",
  openGraph: {
    images: [
      "https://api.tractrac.co/media/images/f56cc36b-27b4-42d4-879c-92fbc77430d0.jpg",
    ],
  },
};

export default function ResourcesPage() {
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
          Resources
        </p>
        <h1 className="display1 insightsHero__title" data-reveal data-delay="80">
          Research, guides and practical resources.
        </h1>
        <p className="insightsHero__lede" data-reveal data-delay="180">
          Publications and practical material from the work of making agricultural mechanisation
          more accessible.
        </p>
      </Hero>

      <section className="insightsAll">
        <div className="wrap">
          <div className="grid2 insightsSectionHead insightsAll__head">
            <div>
              <p className="eyebrow">Downloads</p>
              <h2 className="h2">Every resource from TracTrac.</h2>
            </div>
            {RESOURCES.length ? (
              <p className="insightsAll__count">
                {RESOURCES.length} {RESOURCES.length === 1 ? "resource" : "resources"}
              </p>
            ) : null}
          </div>

          {RESOURCES.length ? (
            <div className="insightsGrid">
              {RESOURCES.map((resource, index) => (
                <a
                  className="insightsCard"
                  href={`/api/resources/${resource.slug}`}
                  download={resource.fileName}
                  type="application/pdf"
                  key={resource.slug}
                  data-reveal
                  data-delay={Math.min(index * 40, 360)}
                >
                  <div className="media insightsCard__media insightsCard__media--resource">
                    <Photo
                      src={resource.image}
                      alt={resource.imageAlt}
                      sizes="(max-width: 880px) 90vw, 30vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="insightsCard__body">
                    <p className="insightMeta">
                      <span>{resource.eyebrow}</span>
                    </p>
                    <h3>{resource.title}</h3>
                    <p className="insightExcerpt">{resource.description}</p>
                    <span className="insightRead">Download</span>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <p className="prose muted">
              Resources will be published here shortly. In the meantime, read the latest stories on
              the <Link className="linkUnderline" href="/blog">blog</Link>.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
