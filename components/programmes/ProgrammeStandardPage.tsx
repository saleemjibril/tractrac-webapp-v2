import Link from "next/link";
import ProgrammeContactForm from "@/components/programmes/ProgrammeContactForm";
import CountUp from "@/components/ui/CountUp";
import Hero from "@/components/ui/Hero";
import Icon from "@/components/ui/Icon";
import Photo from "@/components/ui/Photo";
import { asset } from "@/lib/asset";
import type { ProgrammeSection, StandardProgramme, Stat } from "@/content/programmes";

function Value({ stat }: { stat: Stat }) {
  if (stat.count === undefined) return <>{stat.value}</>;
  return (
    <CountUp
      count={stat.count}
      prefix={stat.prefix}
      suffix={stat.suffix}
      decimals={stat.decimals}
      value={stat.value}
    />
  );
}

function Intro({
  eyebrow,
  title,
  intro,
  className,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  className?: string;
}) {
  return (
    <div className={className ? `programmeIntro ${className}` : "programmeIntro"}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="h2">{title}</h2>
      </div>
      {intro ? <p className="prose muted">{intro}</p> : null}
    </div>
  );
}

function Section({ section }: { section: ProgrammeSection }) {
  if (section.kind === "contact") return <Contact />;

  const background = section.kind === "statPanel" ? "white" : section.background ?? "white";
  const className = `programmeSection programmeSection--${background}`;

  if (section.kind === "cards") {
    return (
      <section className={className}>
        <div className="wrap">
          <Intro eyebrow={section.eyebrow} title={section.title} intro={section.intro} />
          <div
            className={`programmeCards programmeCards--${section.columns ?? 4} programmeCards--${
              section.cardSize ?? "roomy"
            } programmeCards--body${section.bodyWidth ?? 40}`}
          >
            {section.items.map((item, index) => (
              <article key={item.title} data-reveal data-delay={index * 80}>
                <Icon name={item.icon} size="clamp(44px,4vw,56px)" />
                <h3>{item.title}</h3>
                <p className="prose muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (section.kind === "rows") {
    return (
      <section className={className}>
        <div className="wrap">
          <Intro
            eyebrow={section.eyebrow}
            title={section.title}
            intro={section.intro}
            className={section.introSpacing === "compact" ? "programmeIntro--compact" : undefined}
          />
          <div className="programmeRows">
            {section.items.map((item, index) => (
              <div key={item.title} data-reveal data-delay={index * 60}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p className="prose muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (section.kind === "statPair") {
    return (
      <section className={className}>
        <div className="wrap">
          <div className="programmeIntro programmeIntro--pair">
            <div>
              <p className="eyebrow">{section.eyebrow}</p>
              <h2 className="h2">{section.title}</h2>
            </div>
            <div className="programmeStatPair">
              {section.stats.map((stat) => (
                <div key={stat.label}>
                  <p>
                    <Value stat={stat} />
                  </p>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (section.kind === "statPanel") {
    return (
      <section className={className}>
        <div className="wrap">
          <div className="programmePanelHead">
            <p className="eyebrow">{section.eyebrow}</p>
            <h2 className="h2">{section.title}</h2>
            <p className="prose muted">{section.intro}</p>
          </div>
          <div className="programmeStatPanel">
            <div className="programmeStatPanel__big">
              <p>
                <Value stat={section.big} />
              </p>
              <span className="programmeStatPanel__label">{section.big.label}</span>
              {section.big.note ? <p>{section.big.note}</p> : null}
            </div>
            <div>
              {section.items.map((item) => (
                <div key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={className}>
      <div className="wrap">
        <Intro eyebrow={section.eyebrow} title={section.title} intro={section.intro} />
        <div className="programmeBenefits">
          {section.items.map((item, index) => (
            <div key={item.term} data-reveal data-delay={index * 60}>
              <p>{item.term}</p>
              <p className="prose muted">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="programmeContact">
      <div className="programmeContact__bg">
        <Photo
          src={asset("uploads/DSC02329.jpg")}
          alt="TracTrac staff and participants working together in the field"
          sizes="100vw"
        />
      </div>
      <div className="programmeContact__shade" aria-hidden="true" />
      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="programmeContact__lines"
      >
        <path
          d="M4 92 C22 78 34 84 48 68 C60 55 74 58 96 40"
          fill="none"
          stroke="#F36A02"
          strokeWidth="0.16"
          strokeDasharray="1.3 1.3"
        />
        <circle cx="48" cy="68" r="0.7" fill="#F36A02" />
        <circle cx="96" cy="40" r="0.7" fill="#F36A02" />
      </svg>
      <div className="wrap programmeContact__inner">
        <h2>Join us to build the workforce</h2>
        <ProgrammeContactForm />
      </div>
    </section>
  );
}

export default function ProgrammeStandardPage({ programme }: { programme: StandardProgramme }) {
  return (
    <>
      <Hero
        variant="left"
        size="tall"
        image={programme.heroImage}
        imageAlt={programme.heroAlt}
        priority
        className="programmeHero"
        innerClassName="programmeHero__inner"
      >
        <Link className="programmeHero__back" href="/programmes">
          ← Programs
        </Link>
        <p className="eyebrow" data-reveal>
          {programme.eyebrow}
        </p>
        <h1 className="display2 programmeHero__title" data-reveal data-delay="80">
          {programme.title}
        </h1>
        <p className="programmeHero__lede" data-reveal data-delay="180">
          {programme.subtitle}
        </p>
        <div className="programmeHero__cta" data-reveal data-delay="260">
          <Link className="btn btn--primary btn--lg" href={programme.cta.href}>
            {programme.cta.label}
          </Link>
        </div>
      </Hero>
      {programme.sections.map((section, index) => (
        <Section section={section} key={`${section.kind}-${index}`} />
      ))}
    </>
  );
}
