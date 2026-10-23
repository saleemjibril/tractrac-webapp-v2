import type { Metadata } from "next";
import Link from "next/link";
import ProgrammeContactForm from "@/components/programmes/ProgrammeContactForm";
import CountUp from "@/components/ui/CountUp";
import Hero from "@/components/ui/Hero";
import Photo from "@/components/ui/Photo";
import { asset } from "@/lib/asset";
import "@/styles/programmes.css";
import "@/styles/ypim.css";

export const metadata: Metadata = {
  title: "Young People in Mechanisation",
  description:
    "Nigeria's first youth-focused mechanisation movement, a flagship initiative powered by TracTrac.",
  openGraph: { images: [asset("img/ypim-1.jpg")] },
};

const PILOT_STATS = [
  { count: 1000, label: "Young people from each state", accent: false },
  { count: 36, label: "States of the federation", accent: false },
  { value: "18–35", label: "Age range, young women and men", accent: true },
  {
    count: 9919,
    label: "Applications received so far (YPiM portal, September 2026)",
    accent: true,
  },
];

const OFFERS = [
  { label: "Mechanisation", accent: false },
  { label: "Entrepreneurship", accent: true },
  { label: "Innovation", accent: false },
  { label: "Leadership", accent: true },
  { label: "Advocacy", accent: false },
];

const VISION = [
  "Mechanisation service providers",
  "Entrepreneurs",
  "Innovators",
  "Providers of sector intelligence",
  "Contributors to policy development",
];

export default function YoungPeoplePage() {
  return (
    <main id="main" className="pageMain">
      <Hero
        variant="left"
        size="tall"
        image={asset("img/ypim-1.jpg")}
        imageAlt="Young people in orange and green shirts cheering with Youth in Mechanization signs"
        imagePosition="60% 40%"
        priority
        className="ypimHero"
        innerClassName="programmeHero__inner"
      >
        <Link className="programmeHero__back" href="/programmes">
          ← Programmes
        </Link>
        <h1 className="display2 programmeHero__title" data-reveal data-delay="80">
          Young People in Mechanisation
        </h1>
        <p className="programmeHero__lede" data-reveal data-delay="180">
          Nigeria&apos;s first youth-focused mechanisation movement, a flagship initiative powered
          by TracTrac.
        </p>
        <div className="programmeHero__cta" data-reveal data-delay="260">
          <a
            className="btn btn--ypim btn--lg"
            href="https://www.ypim.africa/"
            target="_blank"
            rel="noopener"
          >
            Visit ypim.africa
          </a>
        </div>
      </Hero>

      <section className="ypimWhy">
        <div className="wrap">
          <div className="programmeIntro">
            <div>
              <p className="eyebrow">Why it exists</p>
              <h2 className="h2">A shortage of technical skills and low youth participation.</h2>
            </div>
            <p className="prose muted">
              YPiM was created to address the mechanisation sector&apos;s shortage of skilled people
              and to raise a new generation of mechanisation service providers and industry leaders.
            </p>
          </div>
        </div>
      </section>

      <section className="ypimPilot on-dark">
        <div className="wrap">
          <p className="eyebrow">The pilot · launched in Abuja, June 2026</p>
          <p className="ypimPilot__number">
            <CountUp count={36000} />
          </p>
          <p className="ypimPilot__lead">young Nigerians to be trained over six months.</p>
          <div className="ypimPilot__stats">
            {PILOT_STATS.map((stat, index) => (
              <div
                className={stat.accent ? "isAccent" : undefined}
                key={stat.label}
                data-reveal
                data-delay={index * 80}
              >
                <p>
                  {"value" in stat ? (
                    stat.value
                  ) : (
                    <CountUp count={stat.count as number} />
                  )}
                </p>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ypimOffers">
        <div className="wrap">
          <p className="eyebrow">
            Practical skills, mentorship and access to opportunities in
          </p>
          <div className="ypimOffers__list">
            {OFFERS.map((offer, index) => (
              <p
                className={offer.accent ? "isAccent" : undefined}
                key={offer.label}
                data-reveal
                data-delay={index * 60}
              >
                {offer.label}
              </p>
            ))}
          </div>
          <p className="ypimOffers__copy" data-reveal>
            Helping young people build sustainable livelihoods while contributing to agricultural
            transformation and food security.
          </p>
        </div>
      </section>

      <section className="ypimGallery">
        {[
          ["img/ypim-4.jpg", "Participants holding signs reading Young, Skilled and Mechanising Nigeria and I am a Youth in Mechanization"],
          ["img/ypim-5.jpg", "Three young people in a TracTrac photo frame holding mechanisation signs"],
          ["img/ypim-6.jpg", "Young participants in orange and green shirts seated at the NAMP 2026 ratification event"],
          ["img/ypim-3.jpg", "A group of young people in TracTrac shirts in front of an FMAFS and TracTrac banner"],
        ].map(([src, alt], index) => (
          <div key={src} data-reveal="img" data-delay={index * 100}>
            <Photo src={asset(src)} alt={alt} sizes="25vw" />
          </div>
        ))}
      </section>

      <section className="ypimVision on-dark">
        <div className="wrap">
          <div className="ypimVision__grid">
            <div>
              <p className="eyebrow">The vision</p>
              <h2>
                Not only operators of machinery, but leaders of agricultural transformation.
              </h2>
              <p className="ypimVision__copy">
                A nationwide, youth-led movement that increases young people&apos;s participation,
                leadership and access to opportunities in Nigeria&apos;s mechanisation ecosystem.
              </p>
            </div>
            <ol>
              {VISION.map((item, index) => (
                <li key={item} data-reveal data-delay={index * 80}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="ypimNote">
        <div className="wrap">
          <p>
            Content taken from TracTrac&apos;s statements at the YPiM launch in Abuja, June 2026, as
            reported by NAN, Daily Trust and Tribune. Confirm against ypim.africa before publishing.
          </p>
        </div>
      </section>

      <section className="ypimCta">
        <div className="ypimCta__bg">
          <Photo
            src={asset("img/ypim-4.jpg")}
            alt="Participants holding signs at a youth mechanisation event"
            sizes="100vw"
          />
        </div>
        <div className="ypimCta__shade" aria-hidden="true" />
        <div className="wrap ypimCta__inner">
          <div className="ypimCta__grid">
            <div>
              <h2 data-reveal>Join Nigeria&apos;s youth mechanisation movement.</h2>
              <div className="ypimCta__actions" data-reveal data-delay="100">
                <a
                  className="btn btn--ypim btn--lg"
                  href="https://www.ypim.africa/"
                  target="_blank"
                  rel="noopener"
                >
                  Apply on ypim.africa
                </a>
              </div>
            </div>
            <ProgrammeContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
