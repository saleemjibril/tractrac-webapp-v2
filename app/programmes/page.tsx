import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/ui/Hero";
import Photo from "@/components/ui/Photo";
import { PROGRAMMES } from "@/content/programmes";
import { asset } from "@/lib/asset";
import "@/styles/programmes.css";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "TracTrac's programs train young people, organise them into service businesses and put small-scale equipment to work for smallholder farmers.",
  openGraph: { images: [asset("img/prog-2.jpg")] },
};

export default function ProgrammesPage() {
  return (
    <main id="main" className="pageMain">
      <Hero
        image={asset("img/prog-2.jpg")}
        imageAlt="ISSAM trainees in orange coveralls and helmets learning to handle equipment"
        imagePosition="50% 30%"
        priority
        size="medium"
        className="programmesHero"
      >
        <p className="eyebrow" data-reveal>
          Programs
        </p>
        <h1 className="display2 programmesHero__title" data-reveal data-delay="80">
          Building mechanisation where farmers are.
        </h1>
        <p className="programmesHero__lede" data-reveal data-delay="180">
          TracTrac&apos;s programs train young people, organise them into service businesses and
          put small-scale equipment to work for smallholder farmers.
        </p>
      </Hero>

      <section className="programmesIndex">
        <div className="wrap">
          <div className="grid2 programmesIndex__head">
            <div>
              <p className="eyebrow">Our programs</p>
              <h2 className="display3 programmesIndex__title">
                Programs built around the people who make mechanisation work.
              </h2>
            </div>
            <p className="prose muted">
              From farmers and young people to service providers, cooperatives and investors, each
              program tackles a different part of the mechanisation system.
            </p>
          </div>

          <div className="programmeCardGrid">
            {PROGRAMMES.map((programme) => (
              <article className="programmeCard" key={programme.slug}>
                <Link
                  className="programmeCard__media"
                  href={`/programmes/${programme.slug}`}
                  aria-label={`View ${programme.name}`}
                >
                  <Photo
                    src={programme.image}
                    alt={programme.alt}
                    sizes="(max-width: 880px) 90vw, 30vw"
                  />
                </Link>
                <div className="programmeCard__body">
                  <p className="programmeCard__category">{programme.category}</p>
                  <h3 className="programmeCard__title">{programme.name}</h3>
                  <p className="programmeCard__copy">{programme.description}</p>
                  <Link
                    className="programmeCard__link"
                    href={`/programmes/${programme.slug}`}
                  >
                    View program
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="programmesCta">
        <div className="programmesCta__bg">
          <Photo
            src={asset("img/prog-4.jpg")}
            alt="A woman MSP in ISSAM coveralls using a knapsack sprayer"
            sizes="100vw"
          />
        </div>
        <div className="programmesCta__shade" aria-hidden="true" />
        <div className="wrap programmesCta__inner">
          <h2 data-reveal>Partner with TracTrac on a program.</h2>
          <Link className="btn btn--primary btn--lg" href="/partners#contact" data-reveal data-delay="80">
            Partner With Us
          </Link>
        </div>
      </section>
    </main>
  );
}
