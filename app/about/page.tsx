import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Leadership from "@/components/about/Leadership";
import PeopleSlider from "@/components/about/PeopleSlider";
import Hero from "@/components/ui/Hero";
import Photo from "@/components/ui/Photo";
import { ABOUT_PEOPLE } from "@/content/about-people";
import { asset } from "@/lib/asset";
import "@/styles/about.css";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "TracTrac is a Nigerian agricultural mechanisation company connecting smallholder farmers to affordable tractor services through equipment, technology, private investment and the people who deliver the work.",
  openGraph: { images: [asset("uploads/DSC07701.jpg")] },
};

const PRINCIPLES = [
  {
    number: "01",
    title: "Access",
    body: "Make mechanisation easier to reach, closer to the farm and at the time it is needed.",
  },
  {
    number: "02",
    title: "Technology",
    body: "Use practical digital tools to coordinate requests, equipment and payments.",
  },
  {
    number: "03",
    title: "People",
    body: "Build the skills and small businesses needed to run mechanisation services.",
  },
  {
    number: "04",
    title: "Capital",
    body: "Create pathways for equipment financing and investment.",
  },
  {
    number: "05",
    title: "Partnerships",
    body: "Work with organisations that can extend the model further.",
  },
];

const VALUES = [
  {
    title: "Inclusion",
    body: "Create opportunities for farmers regardless of size or resources.",
  },
  {
    title: "Innovation",
    body: "Develop practical technology that improves agricultural mechanisation.",
  },
  {
    title: "Accountability",
    body: "Take responsibility for commitments and maintain trust.",
  },
  {
    title: "Sustainability",
    body: "Support long-term agricultural productivity and responsible practices.",
  },
  {
    title: "Collaboration",
    body: "Work with farmers, investors and stakeholders to build the system together.",
  },
  {
    title: "Respect",
    body: "Value farmers and the people who make food production possible.",
  },
];

const MILESTONES = [
  {
    date: "October 2023",
    title: "ISSAM begins",
    body: "TracTrac and the Mastercard Foundation start the ISSAM project, planned to run to 2028 across two phases.",
  },
  {
    date: "September 2025",
    title: "Equipment to cooperatives",
    body: "ISSAM distributes Tryctors, ploughs, harrows, planters and tractor buckets to farmer cooperatives in Nasarawa and Kaduna.",
  },
  {
    date: "March 2026",
    title: "Inclusive mechanisation strategy",
    body: "TracTrac launches its Inclusive Agricultural Mechanisation Strategy at a convening aligned with International Women’s Day.",
  },
  {
    date: "August 2026",
    title: "National policy ratified",
    body: "TracTrac and the Federal Ministry of Agriculture and Food Security convene the High-Level National Policy Dialogue, where NAMP 2026 is ratified.",
  },
];

const BUILT = [
  {
    title: "TracTrac Plus",
    body: "The app farmers use to request tractors and mechanisation services.",
    href: "/technology",
  },
  {
    title: "TracTrac Agent",
    body: "The tool booking agents use to take requests, manage bookings and track work in their communities.",
    href: "/technology#agent",
  },
  {
    title: "MSP networks",
    body: "Youth-led Mechanisation Service Providers trained and equipped to deliver services locally.",
    href: "/programmes/issam",
  },
  {
    title: "Cooperative structures",
    body: "MSPs organised into cooperatives that share equipment and run as businesses.",
    href: "/programmes/issam",
  },
  {
    title: "Equipment deployment",
    body: "Tractors, implements and labour-saving devices placed where farmers need them.",
    href: "/programmes/issam",
  },
  {
    title: "Financing pathways",
    body: "Models that enable equipment owners and investors to put machines to work.",
    href: "/programmes/tracinvest",
  },
  {
    title: "Programs",
    body: "Structured initiatives including ISSAM, Young People in Mechanisation and TRAxCelerate.",
    href: "/programmes",
  },
];

export default function AboutPage() {
  return (
    <main id="main" className="pageMain">
      <Hero
        image={asset("uploads/DSC07701.jpg")}
        imageAlt="An operator ploughing a field with a TracTrac tractor"
        priority
        size="full"
        className="aboutHero"
      >
        <p className="eyebrow eyebrow--light" data-reveal>
          About TracTrac
        </p>
        <h1 className="display1 aboutHero__title" data-reveal data-delay="80">
          We are building the systems that make mechanisation work.
        </h1>
        <p className="aboutHero__lede" data-reveal data-delay="180">
          TracTrac is a Nigerian agricultural mechanisation company. We connect smallholder farmers
          to affordable tractor services by bringing together equipment, technology, private
          investment and the people who deliver the work.
        </p>
      </Hero>

      <section className="aboutWhy">
        <div className="wrap">
          <div className="grid2 aboutWhy__grid">
            <div>
              <p className="eyebrow" data-reveal>
                Why we exist
              </p>
              <h2 className="aboutWhy__title" data-reveal data-delay="80">
                For too many farmers, the machine they need is too far away, too expensive or too
                hard to book.
              </h2>
              <p className="aboutWhy__strong" data-reveal data-delay="160">
                TracTrac exists to change that.
              </p>
            </div>
            <div data-reveal data-delay="100">
              <p className="prose muted aboutWhy__copy">
                We work to improve the lives of smallholder farmers by bringing private-sector
                investment, mechanisation and technology together, so affordable tractor services
                reach more farms across Africa. That means connecting five things:
              </p>
              <div className="aboutWhy__list">
                {[
                  ["Farmers", "who need machines at the right time in the season"],
                  ["Machines", "tractors, implements and labour-saving devices"],
                  ["Technology", "apps that match requests to equipment and track the work"],
                  ["Capital", "financing that connects equipment to the people who use it"],
                  ["People", "operators, agents and service providers who run the work"],
                ].map(([title, body]) => (
                  <div key={title}>
                    <span>{title}</span>
                    <span>{body}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="aboutBuilt">
        <div className="wrap">
          <p className="eyebrow" data-reveal>
            What we have built
          </p>
          <h2 className="aboutBuilt__title" data-reveal data-delay="80">
            A connected system for getting machines, people and capital to where the work happens.
          </h2>
          <div className="aboutBuilt__grid">
            <div className="aboutBuilt__media">
              <div className="media media--rounded aboutBuilt__main" data-reveal="img">
                <Photo
                  src={asset("img/prog-11.jpg")}
                  alt="An MSP operating a tryctor with a disc plough attached"
                  sizes="(max-width: 880px) 90vw, 45vw"
                />
              </div>
              <div className="aboutBuilt__mediaRow">
                <div className="media media--rounded" data-reveal="img">
                  <Photo
                    src={asset("img/prog-3.jpg")}
                    alt="Trainees in ISSAM coveralls during practical equipment training"
                    sizes="25vw"
                  />
                </div>
                <div className="aboutBuilt__phones media media--rounded" data-reveal="img">
                  <Image
                    src={asset("uploads/hero-phones-final.png")}
                    alt="TracTrac Plus and TracTrac Agent apps on two phones"
                    width={1164}
                    height={1351}
                    sizes="25vw"
                    style={{
                      position: "absolute",
                      inset: "8% 6% 0",
                      width: "88%",
                      height: "92%",
                      objectFit: "contain",
                      objectPosition: "bottom",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="aboutBuilt__links">
              {BUILT.map((item, index) => (
                <Link
                  href={item.href}
                  className="aboutBuilt__link"
                  key={item.title}
                  data-reveal
                  data-delay={index * 70}
                >
                  <span className="aboutBuilt__num">{String(index + 1).padStart(2, "0")}</span>
                  <span>
                    <strong>{item.title}</strong>
                    <small>{item.body}</small>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="aboutMilestones">
        <div className="wrap">
          <div className="grid2 aboutMilestones__head">
            <h2 className="display3">Recent milestones.</h2>
            <p className="prose muted">
              A selection of documented milestones from TracTrac’s program and policy work.
            </p>
          </div>
          <div className="aboutMilestones__grid">
            {MILESTONES.map((milestone, index) => (
              <div key={milestone.date} data-reveal data-delay={index * 100}>
                <span className="aboutMilestones__date">{milestone.date}</span>
                <span className="aboutMilestones__title">{milestone.title}</span>
                <span className="aboutMilestones__body">{milestone.body}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="aboutPrinciples">
        <div className="wrap">
          <p className="eyebrow">How we work</p>
          <h2 className="display3 aboutPrinciples__title">Five principles behind the work.</h2>
          <div className="aboutPrinciples__list">
            {PRINCIPLES.map((principle) => (
              <div className="aboutPrinciple" key={principle.number}>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p className="prose muted">{principle.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="aboutVision on-dark">
        <div className="aboutVision__bg">
          <Photo
            src={asset("img/prog-5.jpg")}
            alt="An MSP driving a tryctor across an open field"
            sizes="100vw"
          />
        </div>
        <div className="aboutVision__shade" aria-hidden="true" />
        <div className="wrap aboutVision__inner">
          <p className="eyebrow">Our vision</p>
          <p className="aboutVision__statement">Leading a mechanisation revolution in Africa.</p>
          <div className="grid2 aboutVision__mission">
            <p className="eyebrow">Our mission</p>
            <p>
              To improve farmers’ access to mechanisation, create opportunities for investors and
              enterprising young people, increase the number of tractors available and use
              technology to make better use of every machine.
            </p>
          </div>
        </div>
      </section>

      <section className="aboutValues">
        <div className="wrap">
          <div className="aboutValues__grid">
            <div className="aboutValues__intro">
              <p className="eyebrow">Our values</p>
              <h2>What we hold ourselves to.</h2>
            </div>
            <div className="aboutValues__list">
              {VALUES.map((value) => (
                <div key={value.title}>
                  <h3>{value.title}</h3>
                  <p className="prose muted">{value.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="aboutPeopleIntro">
        <div className="wrap">
          <div className="grid2 aboutPeopleIntro__head">
            <div>
              <p className="eyebrow">The people</p>
              <h2>The people behind the work.</h2>
            </div>
            <p className="prose muted">
              TracTrac’s team works across technology, field operations, programs, partnerships
              and mechanisation services, alongside the operators, agents and MSPs who deliver the
              work on the ground.
            </p>
          </div>
          <PeopleSlider photos={ABOUT_PEOPLE} />
        </div>
      </section>

      <section id="team" className="aboutTeam">
        <div className="wrap">
          <div className="grid2 aboutTeam__head">
            <div>
              <p className="eyebrow">Our people</p>
              <h2 className="aboutTeam__title">The people behind the movement.</h2>
            </div>
            <p className="prose muted">
              Meet the people bringing together technology, agricultural expertise and partnerships
              to expand access to mechanisation.
            </p>
          </div>
          <Leadership />
          <Link className="aboutTeam__all" href="/team">
            <span>Meet the entire team</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="aboutField">
        <div className="aboutField__grid">
          {[
            ["img/prog-1.jpg", "An operator ploughing with an orange ISSAM tryctor"],
            ["img/prog-9.jpg", "A woman MSP in the field"],
            ["img/ypim-1.jpg", "Young people in mechanisation"],
            ["uploads/IMG-20260824-WA0147.jpg", "A TracTrac team member interviewing an MSP"],
            [
              "uploads/WhatsApp Image 2026-09-03 at 11.09.37 (1).jpeg",
              "A solar-powered knapsack sprayer distributed through ISSAM",
            ],
          ].map(([src, alt], index) => (
            <div
              className={index === 0 ? "aboutField__wide" : undefined}
              key={src}
              data-reveal="img"
              data-delay={index * 80}
            >
              <Photo src={asset(src)} alt={alt} sizes={index === 0 ? "60vw" : "30vw"} />
            </div>
          ))}
        </div>
        <p className="aboutField__label">TracTrac in the field</p>
      </section>

      <section className="aboutCta">
        <div className="wrap">
          <p className="eyebrow" data-reveal>
            Let’s build the future of mechanisation
          </p>
          <h2 data-reveal data-delay="80">
            Whether you are a farmer, investor, partner, service provider or organisation working
            in agriculture, there is a place to work with TracTrac.
          </h2>
          <div className="aboutCta__actions" data-reveal data-delay="160">
            <Link className="btn btn--primary btn--inkHover" href="/partners">
              Partner With Us
            </Link>
            <Link className="btn btn--outline" href="/programmes">
              Explore Our Programs
            </Link>
            <Link className="btn btn--outline" href="/technology#download">
              Find Mechanisation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
