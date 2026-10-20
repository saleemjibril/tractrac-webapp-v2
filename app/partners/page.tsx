import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CountUp from "@/components/ui/CountUp";
import Hero from "@/components/ui/Hero";
import Photo from "@/components/ui/Photo";
import { PARTNER_LOGOS } from "@/content/home";
import { asset } from "@/lib/asset";
import "@/styles/partners.css";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "TracTrac works with organisations across agriculture, finance, government and development to make mechanisation more accessible and sustainable.",
  openGraph: { images: [asset("uploads/DSC02281.jpg")] },
};

const PARTNER_TYPES = [
  {
    number: "01",
    title: "Development partners",
    body: "Programmes, funding and technical support that extend access and inclusion.",
    names: "Mastercard Foundation",
  },
  {
    number: "02",
    title: "Government & public institutions",
    body: "Policy, systems and programmes that support agricultural mechanisation.",
    names:
      "Federal Ministry of Agriculture and Food Security · National Centre for Agricultural Mechanization",
  },
  {
    number: "03",
    title: "Farmer & community organisations",
    body: "Local networks that connect mechanisation to real farmer demand.",
    names: "Women in Mechanized Agriculture (WIMA)",
  },
  {
    number: "04",
    title: "Implementation partners",
    body: "Organisations involved in delivering programme activity on the ground, including the ISSAM equipment distribution.",
    names: "The ETK Group · WIMA · Sane Konsult",
  },
];

const STORIES = [
  {
    number: "01",
    kicker: "ISSAM × Mastercard Foundation",
    title: "Building youth-led mechanisation services.",
    paragraphs: [
      "ISSAM is a strategic partnership between TracTrac Mechanisation Services Limited and the Mastercard Foundation.",
      "The partnership supports TracTrac’s ISSAM programme to improve access to small-scale mechanisation for smallholder farmers while building the capacity of youth-led Mechanisation Service Providers.",
    ],
    image: "img/prog-3.jpg",
    alt: "Trainees in ISSAM coveralls and helmets during practical equipment training",
    details: [
      ["Where", "Nasarawa and Kaduna states"],
      ["Who", "Youth aged 18–35; 50% women, 50% men; 5% persons with disabilities"],
      [
        "Model",
        "Youth-led MSPs, technical skills, small-scale equipment and cooperative structures",
      ],
    ],
    link: { label: "Explore ISSAM", href: "/programmes/issam" },
  },
  {
    number: "02",
    kicker: "Equipment distribution",
    title: "Getting equipment to farmer cooperatives.",
    paragraphs: [
      "In September 2025, the ISSAM equipment distribution delivered Tryctors, disc ploughs, harrows, planters and tractor buckets to farmer cooperatives in Nasarawa and Kaduna States.",
    ],
    image: "img/prog-11.jpg",
    alt: "An MSP operating a tryctor with a disc plough attached",
    details: [
      ["When", "September 2025"],
      ["Equipment", "Tryctors, disc ploughs, harrows, planters and tractor buckets"],
      ["Where", "Farmer cooperatives in Nasarawa and Kaduna States"],
      ["Implementation partners", "The ETK Group · Women in Mechanized Agriculture (WIMA) · Sane Consults"],
    ],
    link: null,
  },
  {
    number: "03",
    kicker: "Government & policy",
    title: "Contributing to national mechanisation policy.",
    paragraphs: [
      "Through ISSAM, TracTrac engaged public institutions across agriculture, mechanisation, research, investment and policy implementation.",
    ],
    image: "uploads/DSC04179.jpg",
    alt: "A speaker addressing delegates at a national mechanisation policy event",
    details: [
      ["Who", "10+ key government institutions"],
      ["Discussed", "2 high-level national policy dialogues; 8 investment promotion engagements"],
      [
        "Produced",
        "NAMP 2026, reviewed by 70+ stakeholders in 4 thematic groups and ratified at an event with 500+ delegates",
      ],
      [
        "TracTrac’s role",
        "Support to the development of NAMP 2026 and the Mechanisation Investment Strategy Document",
      ],
    ],
    link: null,
  },
];

const IMPACT = [
  { count: 146170, label: "Farmers registered and onboarded" },
  { count: 5012, label: "Young people trained as certified MSPs" },
  { count: 2987, label: "MSPs currently earning" },
  { count: 566, label: "Cooperatives formed" },
  { count: 3396, label: "Pieces of equipment deployed" },
];

export default function PartnersPage() {
  return (
    <main id="main" className="pageMain">
      <Hero
        image={asset("uploads/DSC02281.jpg")}
        imageAlt="TracTrac and Mastercard Foundation programme team at a mechanisation service provider onboarding event"
        priority
        size="tall"
        className="partnersHero"
      >
        <p className="eyebrow" data-reveal>
          Partners
        </p>
        <h1 className="display1 partnersHero__title" data-reveal data-delay="80">
          We do more when we build together.
        </h1>
        <p className="partnersHero__lede" data-reveal data-delay="180">
          TracTrac works with organisations across agriculture, finance, government and development
          to make mechanisation more accessible and sustainable.
        </p>
      </Hero>

      <section className="partnersWhy">
        <div className="wrap">
          <div className="grid2 partnersWhy__grid">
            <div>
              <p className="eyebrow" data-reveal>
                Why we partner
              </p>
              <h2 className="h2" data-reveal data-delay="80">
                Scaling access takes more than equipment.
              </h2>
            </div>
            <div>
              <p className="prose muted" data-reveal>
                It takes finance, skills, service networks, policy and long term investment.
              </p>
              <p className="prose muted partnersWhy__para" data-reveal data-delay="80">
                TracTrac works with government, financial institutions, development partners,
                investors, equipment companies and agricultural organisations to strengthen the
                system around mechanisation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="partnersTypes">
        <div className="wrap">
          <p className="eyebrow">Who we work with</p>
          <h2 className="h2 partnersTypes__title">
            Different organisations for different parts of the system.
          </h2>
          <div className="partnersTypes__list">
            {PARTNER_TYPES.map((type, index) => (
              <div
                className="partnersType"
                key={type.number}
                data-reveal
                data-delay={index * 80}
              >
                <span>{type.number}</span>
                <div>
                  <h3>{type.title}</h3>
                  <p className="prose muted">{type.body}</p>
                </div>
                <p>{type.names}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="partnersLogos">
        <div className="wrap">
          <p className="partnersLogos__title">
            Working with organisations that want mechanisation to work.
          </p>
          <div className="partnersLogos__grid">
            {PARTNER_LOGOS.map((logo, index) => (
              <div key={logo.name} data-reveal data-delay={index * 70}>
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  style={{
                    maxHeight: "100%",
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="partnersStories">
        <div className="wrap">
          <p className="eyebrow">What partnerships make possible</p>
          <h2 className="h2 partnersStories__title">
            Partnerships, measured by the work they make happen.
          </h2>
          {STORIES.map((story, index) => {
            const flip = index === 1;
            return (
              <article
                className="partnersStory"
                key={story.number}
                data-reveal
              >
                {flip ? (
                  <StoryCopy story={story} />
                ) : (
                  <div className="media media--rounded partnersStory__media">
                    <Photo
                      src={asset(story.image)}
                      alt={story.alt}
                      sizes="(max-width: 880px) 90vw, 45vw"
                      style={
                        story.image === "uploads/DSC04179.jpg"
                          ? { objectPosition: "70% 65%" }
                          : undefined
                      }
                    />
                  </div>
                )}
                {flip ? (
                  <div className="media media--rounded partnersStory__media">
                    <Photo src={asset(story.image)} alt={story.alt} sizes="45vw" />
                  </div>
                ) : (
                  <StoryCopy story={story} />
                )}
              </article>
            );
          })}
        </div>
      </section>

      <section className="partnersImpact on-dark">
        <div className="wrap">
          <div className="grid2 partnersImpact__head">
            <div>
              <p className="eyebrow">Impact</p>
              <h2 className="h2">What the ISSAM partnership has delivered.</h2>
            </div>
            <p className="partnersImpact__lede">
              Figures from the ISSAM programme, delivered by TracTrac in partnership with the
              Mastercard Foundation. These are programme outcomes, not company-wide totals.
            </p>
          </div>
          <div className="partnersImpact__stats">
            {IMPACT.map((stat, index) => (
              <div key={stat.label} data-reveal data-delay={index * 80}>
                <p>
                  <CountUp count={stat.count} />
                </p>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="partnersPeople">
        <div className="wrap">
          <p className="eyebrow">People working together</p>
          <h2 className="h2 partnersPeople__title">
            Partnership happens in rooms, in training and in the field.
          </h2>
          <div className="partnersPeople__grid">
            {[
              [
                "uploads/WhatsApp Image 2026-09-24 at 14.35.20.jpeg",
                "Young people at a TracTrac and Federal Ministry of Agriculture and Food Security youth event",
                "Youth in mechanisation event with the Federal Ministry of Agriculture and Food Security",
              ],
              [
                "img/prog-2.jpg",
                "ISSAM trainees during practical training",
                "ISSAM practical training",
              ],
              [
                "uploads/IMG-20260824-WA0147.jpg",
                "A TracTrac team member interviewing an MSP",
                "Field engagement with an MSP",
              ],
            ].map(([src, alt, caption], index) => (
              <figure key={src} data-reveal data-delay={index * 100}>
                <div className="media media--rounded partnersPeople__image">
                  <Photo src={asset(src)} alt={alt} sizes="30vw" />
                </div>
                <figcaption>{caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="partnersCta">
        <div className="partnersCta__bg">
          <Photo
            src={asset("uploads/DSC02329.jpg")}
            alt="TracTrac staff and participants working together"
            sizes="100vw"
          />
        </div>
        <div className="partnersCta__shade" aria-hidden="true" />
        <div className="wrap partnersCta__inner">
          <p className="eyebrow" data-reveal>
            Work with TracTrac
          </p>
          <h2 data-reveal data-delay="80">
            Mechanisation needs more than machines.
          </h2>
          <p className="partnersCta__lede" data-reveal data-delay="140">
            It needs organisations willing to build the system around them.
          </p>
          <div className="partnersCta__actions" data-reveal data-delay="200">
            <Link className="btn btn--primary btn--lg" href="/#final">
              Partner With TracTrac
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function StoryCopy({ story }: { story: (typeof STORIES)[number] }) {
  return (
    <div className="partnersStory__copy">
      <p className="partnersStory__kicker">
        <span>{story.number}</span>
        <span>{story.kicker}</span>
      </p>
      <h3>{story.title}</h3>
      {story.paragraphs.map((paragraph) => (
        <p className="prose muted" key={paragraph}>
          {paragraph}
        </p>
      ))}
      <dl className="partnersStory__details">
        {story.details.map(([term, description]) => (
          <div key={term}>
            <dt>{term}</dt>
            <dd>{description}</dd>
          </div>
        ))}
      </dl>
      {story.link ? (
        <Link className="btn btn--primary btn--inkHover" href={story.link.href}>
          {story.link.label}
        </Link>
      ) : null}
    </div>
  );
}
