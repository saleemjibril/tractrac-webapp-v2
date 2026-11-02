import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ProgrammeContactForm from "@/components/programmes/ProgrammeContactForm";
import CountUp from "@/components/ui/CountUp";
import Hero from "@/components/ui/Hero";
import Photo from "@/components/ui/Photo";
import { PARTNER_LOGOS } from "@/content/home";
import { asset } from "@/lib/asset";
import "@/styles/programmes.css";
import "@/styles/partners.css";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "TracTrac works with organisations across agriculture, finance, government and development to make mechanization more accessible and sustainable.",
  openGraph: { images: [asset("uploads/DSC02281.jpg")] },
};

const PARTNER_TYPES = [
  {
    number: "01",
    title: "Development partners",
    body: "Programs, funding and technical support that extend access and inclusion.",
    names: "Mastercard Foundation",
  },
  {
    number: "02",
    title: "Government & public institutions",
    body: "Policy, systems and programs that support agricultural mechanization.",
    names:
      "Federal Ministry of Agriculture and Food Security · National Centre for Agricultural Mechanization",
  },
  {
    number: "03",
    title: "Farmer & community organisations",
    body: "Local networks that connect mechanization to real farmer demand.",
    names: "Women in Mechanized Agriculture (WIMA)",
  },
  {
    number: "04",
    title: "Implementation partners",
    body: "Organisations involved in delivering program activity on the ground, including the ISSAM equipment distribution.",
    names: "The ETK Group · WIMA · Sane Konsult",
  },
];

const WAYS_TO_PARTNER = [
  {
    id: "work-with-us",
    number: "01",
    kicker: "Work With Us",
    title: "Reach farmers through a working service network.",
    body: "Equipment companies, agricultural organisations and service providers partner with TracTrac to reach farmers through our network of mechanization service providers, booking agents and the TracTrac platform.",
    points: ["Equipment supply and distribution", "Operator training and skills", "Service and maintenance networks"],
    cta: { label: "Start a conversation", href: "#contact" },
  },
  {
    id: "finance",
    number: "02",
    kicker: "Finance and Investment",
    title: "Capital for the businesses behind mechanization.",
    body: "Mechanization services need capital: equipment finance for service providers, working capital for operations and long-term investment in the platform. We work with financial institutions and investors to put that capital to work.",
    points: ["Equipment finance for service providers", "Investment in TracTrac", "Blended finance programs"],
    cta: { label: "Talk to our team", href: "#contact" },
  },
  {
    id: "development-partners",
    number: "03",
    kicker: "Development Partners",
    title: "Programs that extend access and inclusion.",
    body: "Foundations, donors and multilateral organisations work with TracTrac to design and deliver programs such as ISSAM, delivered with Mastercard Foundation, that bring mechanization to young people, women and smallholder farmers.",
    points: ["Program design and delivery", "Youth and women inclusion", "Monitoring and impact reporting"],
    cta: { label: "See our programs", href: "/programmes" },
  },
];

const STORIES = [
  {
    number: "01",
    kicker: "ISSAM × Mastercard Foundation",
    title: "Building youth-led mechanization services.",
    paragraphs: [
      "ISSAM is a strategic partnership between TracTrac Mechanization Services Limited and the Mastercard Foundation.",
      "The partnership supports TracTrac’s ISSAM program to improve access to small-scale mechanization for smallholder farmers while building the capacity of youth-led Mechanization Service Providers.",
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
    title: "Contributing to national mechanization policy.",
    paragraphs: [
      "Through ISSAM, TracTrac engaged public institutions across agriculture, mechanization, research, investment and policy implementation.",
    ],
    image: "uploads/DSC04179.jpg",
    alt: "A speaker addressing delegates at a national mechanization policy event",
    details: [
      ["Who", "10+ key government institutions"],
      ["Discussed", "2 high-level national policy dialogues; 8 investment promotion engagements"],
      [
        "Produced",
        "NAMP 2026, reviewed by 70+ stakeholders in 4 thematic groups and ratified at an event with 500+ delegates",
      ],
      [
        "TracTrac’s role",
        "Led the development of the NAMP 2026 and the Mechanization Investment Document in collaboration with the Federal Government",
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
        imageAlt="TracTrac and Mastercard Foundation program team at a mechanization service provider onboarding event"
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
          to make mechanization more accessible and sustainable.
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
                system around mechanization.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="partnersWays">
        <div className="wrap">
          <p className="eyebrow">Ways to partner</p>
          <h2 className="h2 partnersWays__title">Three ways to build the system with us.</h2>
          <div className="partnersWays__grid">
            {WAYS_TO_PARTNER.map((way, index) => (
              <article
                className="partnersWay"
                id={way.id}
                key={way.id}
                data-reveal
                data-delay={index * 80}
              >
                <p className="partnersWay__kicker">
                  <span>{way.number}</span>
                  {way.kicker}
                </p>
                <h3>{way.title}</h3>
                <p className="partnersWay__body">{way.body}</p>
                <ul>
                  {way.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                {way.cta.href.startsWith("#") ? (
                  <a className="linkUnderline" href={way.cta.href}>
                    {way.cta.label}
                  </a>
                ) : (
                  <Link className="linkUnderline" href={way.cta.href}>
                    {way.cta.label}
                  </Link>
                )}
              </article>
            ))}
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
            Mechanizing Africa requires bold collaborations.
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
              Figures from the ISSAM program, delivered by TracTrac in partnership with the
              Mastercard Foundation. These are program outcomes, not company-wide totals.
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
                "https://api.tractrac.co/media/images/654949b2-9925-4f5b-8f32-95e9bec92a3d.jpg",
                "Officials holding copies of the National Agricultural Mechanization Policy 2026 at its launch",
                "National Agricultural Mechanization Policy 2026 launch",
              ],
              [
                "img/prog-2.jpg",
                "ISSAM trainees during practical training",
                "ISSAM practical training",
              ],
              [
                "https://api.tractrac.co/media/images/1b53475c-3399-4aa5-8579-7c7d820eaf23.jpg",
                "TracTrac staff and guests on stage at the TracTrac Investment Roadshow 2026",
                "TracTrac Investment Roadshow 2026",
              ],
            ].map(([src, alt, caption], index) => (
              <figure key={src} data-reveal data-delay={index * 100}>
                <div className="media media--rounded partnersPeople__image">
                  <Photo src={src.startsWith("http") ? src : asset(src)} alt={alt} sizes="30vw" />
                </div>
                <figcaption>{caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="partnersCta" id="contact">
        <div className="partnersCta__bg">
          <Photo
            src={asset("uploads/DSC02329.jpg")}
            alt="TracTrac staff and participants working together"
            sizes="100vw"
          />
        </div>
        <div className="partnersCta__shade" aria-hidden="true" />
        <div className="wrap partnersCta__inner">
          <div className="partnersCta__grid">
            <div>
              <p className="eyebrow" data-reveal>
                Work with TracTrac
              </p>
              <h2 data-reveal data-delay="80">
                Mechanization needs more than machines.
              </h2>
              <p className="partnersCta__lede" data-reveal data-delay="140">
                It needs organisations willing to build the system around them.
              </p>
            </div>
            <ProgrammeContactForm />
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
