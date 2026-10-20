import type { Metadata } from "next";
import Link from "next/link";
import CountUp from "@/components/ui/CountUp";
import Hero from "@/components/ui/Hero";
import Icon, { type AnyIconName } from "@/components/ui/Icon";
import Photo from "@/components/ui/Photo";
import { asset } from "@/lib/asset";
import "@/styles/programmes.css";
import "@/styles/issam.css";

export const metadata: Metadata = {
  title: "ISSAM",
  description:
    "A strategic partnership between TracTrac Mechanisation Services Limited and the Mastercard Foundation, designed to improve how smallholder farmers in Nigeria access affordable and reliable mechanisation services.",
  openGraph: { images: [asset("img/prog-1.jpg")] },
};

const GLANCE: Array<{
  icon: AnyIconName;
  count: number;
  suffix?: string;
  label: string;
  accent?: boolean;
}> = [
  { icon: "people", count: 5012, label: "Young people trained" },
  { icon: "banknote", count: 2987, label: "MSPs currently earning" },
  { icon: "women", count: 566, suffix: "+", label: "Cooperatives established" },
  { icon: "tractor", count: 3396, label: "Pieces of equipment deployed" },
  {
    icon: "plant",
    count: 135000,
    label: "Five-year target: farmers reached with mechanisation services",
    accent: true,
  },
];

const OBJECTIVES = [
  {
    title: "Create jobs",
    body: "Empower cooperatives to deliver mechanisation services within their communities.",
  },
  {
    title: "Bridge inclusion gaps",
    body: "Actively involve women, youth and persons with disabilities in mechanisation opportunities.",
  },
  {
    title: "Strengthen agricultural resilience",
    body: "Combine technology, affordability and hands-on training to strengthen local mechanisation capacity.",
  },
];

const JOURNEY = [
  {
    title: "Advocacy",
    body: "Stakeholder engagement with traditional rulers, LGA chairpersons and district heads.",
  },
  {
    title: "Sensitisation",
    body: "Community awareness through religious houses, marketplaces and digital channels.",
  },
  {
    title: "Mobilisation",
    body: "25,000+ potential MSPs mobilised and screened across 2 states and 22 LGAs.",
  },
  {
    title: "Training",
    body: "18 cohorts across two years in agribusiness, leadership, machine use and maintenance.",
  },
  {
    title: "Work Enabling Outreach",
    body: "5,012 youths and women graduated as certified MSPs and received IT tools.",
  },
  {
    title: "Enterprises",
    body: "566 youth- and women-led cooperatives formed and elections conducted.",
  },
  { title: "Youth in Work", body: "2,987 MSPs currently earning." },
  {
    title: "Equipment",
    body: "Labour-saving devices, tryctors and implements deployed.",
  },
];

const EQUIPMENT_ITEMS: Array<{ icon: AnyIconName; count: number; label: string }> = [
  { icon: "fertilizer", count: 566, label: "Fertiliser applicators" },
  { icon: "sprayer", count: 566, label: "Knapsack sprayers" },
  { icon: "tractor", count: 283, label: "Tractors" },
  { icon: "planter", count: 283, label: "Planters" },
  { icon: "harrow", count: 283, label: "Harrows" },
  { icon: "disc", count: 283, label: "Disc ploughs" },
  { icon: "trailer", count: 283, label: "Trailer buckets" },
  { icon: "thresher", count: 283, label: "Threshers" },
  { icon: "treadle", count: 283, label: "Treadle pumps" },
  { icon: "soil", count: 283, label: "Soil testing kits" },
];

const STATES = [
  {
    state: "Kaduna",
    year1: ["Zaria", "Lere", "Kachia", "Igabi", "Chikun", "Ikara", "Soba"],
    year2: ["Sabon Gari", "Kauru", "Makarfi", "Kubau", "Zango Kataf"],
  },
  {
    state: "Nasarawa",
    year1: ["Kokona", "Akwanga", "Wamba", "Nasarawa", "Karu", "Nasarawa Eggon"],
    year2: ["Awe", "Obi", "Keana", "Lafia", "Doma"],
  },
];

const PLATFORM_STATS = [
  { icon: "megaphone" as AnyIconName, count: 300000, suffix: "+", label: "Smallholder farmers sensitised at community level" },
  { icon: "phone" as AnyIconName, count: 146170, label: "Smallholder farmers registered and onboarded" },
  { icon: "chat" as AnyIconName, count: 8577, label: "Smallholder farmers requested services" },
  { icon: "fulfilled" as AnyIconName, count: 7872, label: "Demand requests fulfilled" },
  { icon: "plant" as AnyIconName, count: 4740, label: "Unique farmers serviced" },
];

const ENABLING = [
  { count: 500, suffix: "+", label: "Stakeholders engaged across the agricultural ecosystem" },
  {
    count: 10,
    suffix: "+",
    label:
      "Key government institutions engaged across agriculture, mechanisation, research, investment and policy",
  },
  { count: 2, label: "High-level national policy dialogues convened" },
  {
    count: 70,
    suffix: "+",
    label: "Stakeholders in the NAMP 2026 draft review, across 4 thematic groups",
  },
  {
    count: 8,
    label: "Investment promotion engagements, with 10 government stakeholders",
  },
];

export default function IssamPage() {
  return (
    <main id="main" className="pageMain">
      <Hero
        variant="left"
        size="tall"
        image={asset("img/prog-1.jpg")}
        imageAlt="An ISSAM operator ploughing farmland with an orange tryctor"
        imagePosition="40% 60%"
        priority
        className="issamHero"
        innerClassName="issamHero__inner"
      >
        <Link className="programmeHero__back" href="/programmes">
          ← Programmes
        </Link>
        <h1 className="display2" data-reveal data-delay="80">
          ISSAM
        </h1>
        <p className="issamHero__subtitle" data-reveal data-delay="160">
          Improving Smallholder Farmers&apos; Access to Small-Scale Mechanisation Services
        </p>
        <p className="issamHero__copy" data-reveal data-delay="240">
          A strategic partnership between TracTrac Mechanisation Services Limited and the
          Mastercard Foundation, designed to improve how smallholder farmers in Nigeria access
          affordable and reliable mechanisation services.
        </p>
        <dl className="issamHero__meta" data-reveal data-delay="320">
          <div>
            <dt>Partner</dt>
            <dd>Mastercard Foundation</dd>
          </div>
          <div>
            <dt>States</dt>
            <dd>Kaduna and Nasarawa</dd>
          </div>
          <div>
            <dt>Duration</dt>
            <dd>Five-year programme</dd>
          </div>
        </dl>
      </Hero>

      <section className="issamGlance on-dark">
        <div className="wrap">
          <p className="eyebrow">ISSAM at a glance</p>
          <div className="issamGlance__grid">
            {GLANCE.map((stat, index) => (
              <div key={stat.label} data-reveal data-delay={index * 80}>
                <Icon
                  name={stat.icon}
                  size={44}
                  className={stat.accent ? "issamGlance__accent" : undefined}
                />
                <p className={stat.accent ? "issamGlance__big isAccent" : "issamGlance__big"}>
                  <CountUp count={stat.count} suffix={stat.suffix} />
                </p>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="issamObjectives">
        <div className="wrap">
          <div className="issamObjectives__grid">
            <div className="issamObjectives__intro">
              <p className="eyebrow">Five-year objectives</p>
              <h2>A people-first model for mechanisation.</h2>
              <p className="prose muted">
                Youth-led Mechanisation Service Providers, a strong focus on women and persons with
                disabilities, technical skills, small-scale equipment and cooperative structures.
              </p>
            </div>
            <div>
              {OBJECTIVES.map((objective, index) => (
                <div className="issamObjective" key={objective.title} data-reveal>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{objective.title}</h3>
                    <p className="prose muted">{objective.body}</p>
                  </div>
                </div>
              ))}
              <div className="issamObjectiveStats">
                <div>
                  <p>
                    <CountUp count={6054} />
                  </p>
                  <span>Jobs to be created</span>
                </div>
                <div>
                  <p>
                    <CountUp count={135000} />
                  </p>
                  <span>Smallholder farmers to be reached across Kaduna and Nasarawa</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="issamJourney on-dark">
        <div className="wrap">
          <p className="eyebrow">The ISSAM journey</p>
          <h2>From community advocacy to equipment in the field.</h2>
          <div className="issamJourney__scroll">
            {[0, 4].map((start) => (
              <ol key={start} start={start + 1}>
                <div className="issamJourney__line" aria-hidden="true" data-reveal="x" />
                {JOURNEY.slice(start, start + 4).map((step, index) => (
                  <li key={step.title} data-reveal data-delay={(start + index) * 80 + 100}>
                    <span className="issamJourney__dot" aria-hidden="true" />
                    <p className="issamJourney__num">
                      {String(start + index + 1).padStart(2, "0")}
                    </p>
                    <h3>{step.title}</h3>
                    <p className="issamJourney__body">{step.body}</p>
                  </li>
                ))}
              </ol>
            ))}
          </div>
        </div>
      </section>

      <section className="issamPhotos">
        {[["img/prog-6.jpg", "ISSAM trainees working on tablets in a classroom session"], ["img/prog-3.jpg", "Trainees in ISSAM coveralls and helmets during practical equipment training"]].map(
          ([src, alt], index) => (
            <div key={src} data-reveal="img" data-delay={index * 120}>
              <Photo src={asset(src)} alt={alt} sizes="50vw" />
            </div>
          ),
        )}
      </section>

      <section className="issamInclusion">
        <div className="wrap">
          <div className="issamInclusion__grid">
            <div>
              <p className="eyebrow">Inclusion by design</p>
              <h2>Half the participants are women.</h2>
              <p className="prose muted issamInclusion__copy">
                Participant profile: youth aged 18–35, 50% women and 50% men, 5% persons with
                disabilities.
              </p>
              <p className="issamInclusion__label">Trained · Work Enabling Outreach</p>
              <div className="issamInclusion__stats">
                {[
                  [2424, "Women"],
                  [249, "Internally displaced persons"],
                  [172, "Persons with disabilities"],
                ].map(([count, label]) => (
                  <div key={label as string}>
                    <span>
                      <CountUp count={count as number} />
                    </span>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
              <p className="issamInclusion__label">Placed in work · Youth in Work</p>
              <div className="issamInclusion__stats">
                {[
                  [1250, "Women placed in work"],
                  [338, "Women-led cooperatives"],
                  [123, "IDPs placed in work"],
                  [84, "Persons with disabilities placed in work"],
                ].map(([count, label]) => (
                  <div key={label as string}>
                    <span>
                      <CountUp count={count as number} />
                    </span>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="issamInclusion__image" data-reveal="img">
              <Photo
                src={asset("img/prog-12.jpg")}
                alt="A woman MSP driving an orange tryctor"
                sizes="45vw"
                style={{ objectPosition: "70% 50%" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="issamWhere">
        <div className="wrap">
          <div className="issamWhere__head">
            <div>
              <p className="eyebrow">Where it is happening</p>
              <h2>Two states, expanding across two years.</h2>
            </div>
            <div className="issamWhere__legend">
              <span>
                <i className="issamWhere__swatch issamWhere__swatch--ink" /> Year 1
              </span>
              <span>
                <i className="issamWhere__swatch issamWhere__swatch--orange" /> Year 2
              </span>
            </div>
          </div>
          <div className="issamWhere__grid">
            {STATES.map((state, stateIndex) => (
              <div key={state.state}>
                <h3>{state.state}</h3>
                <div className="issamWhere__chips">
                  {state.year1.map((area, index) => (
                    <span
                      className="issamWhere__chip issamWhere__chip--ink"
                      key={area}
                      data-reveal
                      data-delay={index * 60}
                    >
                      {area}
                    </span>
                  ))}
                  {state.year2.map((area, index) => (
                    <span
                      className="issamWhere__chip issamWhere__chip--orange"
                      key={area}
                      data-reveal
                      data-delay={(stateIndex + index) * 60 + 360}
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="issamWhere__note">
            LGAs as listed in the ISSAM source pack. Mobilisation figure (20 or 22 LGAs) to be
            confirmed.
          </p>
        </div>
      </section>

      <section className="issamEquipment on-dark">
        <div className="wrap">
          <div className="issamEquipment__grid">
            <div>
              <p className="eyebrow">Equipment and technical capacity</p>
              <h2>10 types of tools and equipment deployed to MSPs.</h2>
              <div className="issamEquipment__image" data-reveal="img">
                <Photo
                  src={asset("img/prog-11.jpg")}
                  alt="An MSP operating a tryctor with a disc plough attached"
                  sizes="45vw"
                />
              </div>
              <div className="issamEquipment__pair">
                <div>
                  <p>
                    <CountUp count={579} />
                  </p>
                  <span>MSP operators trained</span>
                </div>
                <div>
                  <p>
                    <CountUp count={14} />
                  </p>
                  <span>Mechanics given on-the-job training</span>
                </div>
              </div>
            </div>
            <div className="issamEquipment__items">
              {EQUIPMENT_ITEMS.map((item, index) => (
                <div key={item.label} data-reveal data-delay={index * 40}>
                  <Icon
                    name={item.icon}
                    size={index < 2 ? "clamp(44px,4vw,56px)" : 40}
                  />
                  <p>
                    <CountUp count={item.count} />
                  </p>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="issamPlatform">
        <div className="wrap">
          <p className="eyebrow">Farmers, platform and last-mile delivery</p>
          <h2 className="issamPlatform__title">
            From community awareness to work done on the farm.
          </h2>
          <div className="issamPlatform__stats">
            {PLATFORM_STATS.map((stat, index) => (
              <div key={stat.label} data-reveal data-delay={index * 80}>
                <Icon name={stat.icon} size={44} />
                <p>
                  <CountUp count={stat.count} suffix={stat.suffix} />
                </p>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
          <div className="issamPlatform__boxes">
            {[
              { count: 91.8, decimals: 1, suffix: "%", label: "Demand fulfilment rate", accent: true },
              { count: 8719.88, suffix: " ha", label: "Farmland worked by MSPs", accent: false },
              { count: 220, label: "Cooperatives generating demand", accent: false, extra: "191" },
              { count: 5192, label: "TracTrac app installs · 5,000+ active users", accent: false },
            ].map((box, index) => (
              <div
                className={box.accent ? "issamPlatform__box issamPlatform__box--accent" : "issamPlatform__box"}
                key={box.label}
                data-reveal
                data-delay={index * 80}
              >
                <p>
                  <CountUp count={box.count} decimals={box.decimals} suffix={box.suffix} />
                  {box.extra ? (
                    <>
                      <span className="issamPlatform__muted"> / </span>
                      <CountUp count={Number(box.extra)} />
                    </>
                  ) : null}
                </p>
                <span>{box.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="issamEnabling on-dark">
        <div className="wrap">
          <div className="issamEnabling__grid">
            <div>
              <p className="eyebrow">Policy and investment</p>
              <h2>Shaping the enabling environment.</h2>
              <p className="issamEnabling__copy">
                Support to the development of NAMP 2026 and the Mechanisation Investment Strategy
                Document.
              </p>
              <div className="issamEnabling__box">
                <p>NAMP 2026</p>
                <p>Officially ratified by government, with 500+ delegates and attendees.</p>
              </div>
            </div>
            <div>
              {ENABLING.map((stat) => (
                <div className="issamEnabling__row" key={stat.label} data-reveal>
                  <span>
                    <CountUp count={stat.count} suffix={stat.suffix} />
                  </span>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="issamCta">
        <div className="issamCta__bg">
          <Photo
            src={asset("img/prog-4.jpg")}
            alt="A woman MSP in ISSAM coveralls using a knapsack sprayer"
            sizes="100vw"
          />
        </div>
        <div className="issamCta__shade" aria-hidden="true" />
        <div className="wrap issamCta__inner">
          <p className="eyebrow">Delivered in partnership with the Mastercard Foundation</p>
          <h2 data-reveal>Work with TracTrac to take the model further.</h2>
          <div className="issamCta__actions" data-reveal data-delay="100">
            <Link className="btn btn--primary btn--lg" href="/#partnership">
              Partner With Us
            </Link>
            <Link className="btn btn--outlineLight btn--lg" href="/programmes">
              All programmes
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
