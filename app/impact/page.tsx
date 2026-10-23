import type { Metadata } from "next";
import Link from "next/link";
import { Fragment } from "react";
import CountUp from "@/components/ui/CountUp";
import Hero from "@/components/ui/Hero";
import Icon, { type AnyIconName } from "@/components/ui/Icon";
import Photo from "@/components/ui/Photo";
import { asset } from "@/lib/asset";
import "@/styles/impact.css";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "From farmers getting access to machinery, to young people building mechanisation businesses. The impact is in the people, machines, land and systems involved.",
  openGraph: { images: [asset("img/prog-5.jpg")] },
};

const FARMER_STATS: Array<{
  icon: AnyIconName;
  count: number;
  suffix?: string;
  label: string;
}> = [
  {
    icon: "megaphone",
    count: 300000,
    suffix: "+",
    label: "Smallholder farmers sensitised at community level",
  },
  {
    icon: "phone",
    count: 146170,
    label: "Smallholder farmers registered and onboarded",
  },
  {
    icon: "chat",
    count: 8577,
    label: "Smallholder farmers requested services",
  },
  {
    icon: "plant",
    count: 4740,
    label: "Unique farmers serviced",
  },
];

const PEOPLE_STATS = [
  { count: 5012, label: "Young people trained as MSPs", accent: false },
  { count: 2987, label: "MSPs currently earning", accent: true },
  { count: 2424, label: "Women trained", accent: false },
  { count: 579, label: "MSP operators trained", accent: false },
  { count: 14, label: "Mechanics given on-the-job training", accent: false },
];

const IMPACT_PANEL_STATS: Array<{
  count: number;
  prefix?: string;
  suffix?: string;
  label: string;
  icon: AnyIconName;
  accent?: boolean;
}> = [
  { count: 500, suffix: "K+", label: "Farmers reached", icon: "sprout" },
  { count: 6000, suffix: "+", label: "People trained", icon: "book" },
  { count: 3000, suffix: "+", label: "Jobs created", icon: "wrench" },
  { count: 566, label: "Cooperatives established", icon: "people" },
  {
    count: 2,
    prefix: "₦",
    suffix: "B+",
    label: "Investment catalysed",
    icon: "banknote",
    accent: true,
  },
];

const MACHINE_LISTS = [
  {
    count: 566,
    items: [
      { icon: "fertilizer" as AnyIconName, label: "Fertiliser applicators" },
      { icon: "sprayer" as AnyIconName, label: "Knapsack sprayers" },
    ],
  },
  {
    count: 283,
    items: [
      { icon: "tractor" as AnyIconName, label: "Tractors" },
      { icon: "planter" as AnyIconName, label: "Planters" },
      { icon: "harrow" as AnyIconName, label: "Harrows" },
      { icon: "disc" as AnyIconName, label: "Disc ploughs" },
      { icon: "trailer" as AnyIconName, label: "Trailer buckets" },
      { icon: "thresher" as AnyIconName, label: "Threshers" },
      { icon: "treadle" as AnyIconName, label: "Treadle pumps" },
      { icon: "soil" as AnyIconName, label: "Soil testing kits" },
    ],
  },
];

const LGA_GROUPS = [
  {
    state: "Kaduna",
    areas: ["Zaria", "Lere", "Kachia", "Igabi", "Chikun", "Ikara", "Soba", "Sabon Gari", "Kauru", "Makarfi", "Kubau", "Zango Kataf"],
  },
  {
    state: "Nasarawa",
    areas: ["Kokona", "Akwanga", "Wamba", "Nasarawa", "Karu", "Nasarawa Eggon", "Awe", "Obi", "Keana", "Lafia", "Doma"],
  },
];

const SYSTEM_STATS = [
  { count: 500, suffix: "+", label: "Delegates and attendees at the NAMP 2026 ratification" },
  {
    count: 70,
    suffix: "+",
    label: "Stakeholders in the NAMP 2026 draft review, across 4 thematic groups",
  },
  {
    count: 10,
    suffix: "+",
    label:
      "Key government institutions engaged across agriculture, mechanisation, research, investment and policy",
  },
  { count: 2, label: "High-level national policy dialogues convened" },
  {
    count: 8,
    label: "Investment promotion engagements, with 10 government stakeholders",
  },
];

const TIMELINE = [
  {
    date: "Year 1",
    accent: true,
    title: "ISSAM begins in Kaduna and Nasarawa",
    body: "Mobilisation, training cohorts and the first cooperatives across Year 1 LGAs.",
  },
  {
    date: "Year 2",
    accent: false,
    title: "ISSAM expands",
    body: "Year 2 LGAs added. Lessons from Year 1 shape how demand is turned into work.",
  },
  {
    date: "June 2026",
    accent: true,
    title: "Young People in Mechanisation launches in Abuja",
    body: "A pilot to train 36,000 young Nigerians over six months.",
  },
  {
    date: "September 2026",
    accent: false,
    title: "NAMP 2026",
    body: "The National Agricultural Mechanisation Policy 2026 is officially ratified by government.",
  },
];

const STORIES = [
  {
    category: "ISSAM",
    title: "Turning Lessons and Demand Into Impact: Inside the ISSAM Project Year 2",
    image: "img/prog-7.jpg",
    alt: "Trainees working on tablets in a training hall",
  },
  {
    category: "Enterprise",
    title: "Local Youth-Led Mechanisation Enterprises for Global Impact",
    image: "img/ypim-3.jpg",
    alt: "Young people in TracTrac shirts in front of an FMAFS and TracTrac banner",
  },
  {
    category: "Equipment",
    title:
      "Beyond Tractors: How ISSAM Project Is Powering Rural Farming with Labour-Saving Devices",
    image: "img/prog-4.jpg",
    alt: "A woman MSP using a knapsack sprayer",
  },
  {
    category: "Policy",
    title: "The National Agricultural Mechanisation Policy 2026 journey",
    image: "img/ypim-6.jpg",
    alt: "Young participants seated at the NAMP 2026 ratification event",
  },
];

export default function ImpactPage() {
  return (
    <main id="main" className="pageMain">
      <Hero
        image={asset("img/prog-5.jpg")}
        imageAlt="An MSP driving a tryctor across an open field"
        priority
        size="full"
        className="impactHero"
      >
        <p className="eyebrow" data-reveal>
          Impact
        </p>
        <h1 className="display1 impactHero__title" data-reveal data-delay="80">
          What happens when access changes.
        </h1>
        <p className="impactHero__lede" data-reveal data-delay="180">
          From farmers getting access to machinery, to young people building mechanisation
          businesses. The impact is in the people, machines, land and systems involved.
        </p>
      </Hero>

      <section className="impactNumbers">
        <div className="wrap">
          <div className="impactPanel">
            <div className="impactPanel__bg">
              <Photo
                src={asset("uploads/DSC07701.jpg")}
                alt="An operator ploughing a field with a TracTrac ISSAM tractor"
                sizes="100vw"
              />
            </div>
            <div className="impactPanel__shade" aria-hidden="true" />
            <div className="impactPanel__intro" data-reveal>
              <p className="eyebrow">The work so far</p>
              <h2>
                More farmers served. More machines working. More opportunities created.
              </h2>
              <p>
                Better access to mechanisation can change how quickly work gets done, how many
                farmers a machine can serve and how many people can build livelihoods around the
                sector.
              </p>
            </div>
            <div className="impactPanel__statsWrap">
              <div className="impactPanel__stats">
                {IMPACT_PANEL_STATS.map((stat) => (
                  <div className="impactPanel__stat" key={stat.label}>
                    <Icon
                      name={stat.icon}
                      size="clamp(38px,4.2vw,62px)"
                      className="impactPanel__statIcon"
                    />
                    <p data-accent={stat.accent ? "true" : undefined}>
                      <CountUp count={stat.count} prefix={stat.prefix} suffix={stat.suffix} />
                    </p>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="impactFarmers">
        <div className="wrap">
          <div className="grid2 impactFarmers__grid">
            <div className="media media--rounded impactFarmers__image" data-reveal="img">
              <Photo
                src={asset("img/prog-1.jpg")}
                alt="An operator ploughing with an orange ISSAM tryctor"
                sizes="(max-width: 880px) 90vw, 45vw"
                style={{ objectPosition: "30% 60%" }}
              />
            </div>
            <div>
              <p className="impactNumberEyebrow" data-reveal>
                <span>01</span>
                <span>Farmers</span>
              </p>
              <h2 className="h2" data-reveal data-delay="80">
                From hearing about mechanisation to getting the work done.
              </h2>
              <p className="prose muted impactFarmers__lede" data-reveal data-delay="140">
                Through ISSAM, farmers are reached in stages. Each figure below is a different
                group: sensitised, registered, requesting and serviced.
              </p>
              <div className="impactFarmers__stats">
                {FARMER_STATS.map((stat, index) => (
                  <div key={stat.label} data-reveal data-delay={index * 80}>
                    <Icon name={stat.icon} size={40} />
                    <p className="impactBig">
                      <CountUp count={stat.count} suffix={stat.suffix} />
                    </p>
                    <p className="impactCaption">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="impactFarmers__band" data-reveal>
                <p>
                  <CountUp count={91.8} decimals={1} suffix="%" />
                </p>
                <p>Demand fulfilment rate. 7,872 of 8,577 service requests fulfilled.</p>
              </div>
              <p className="impactNote">ISSAM programme figures.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="impactPeople on-dark">
        <div className="wrap">
          <p className="impactNumberEyebrow" data-reveal>
            <span>02</span>
            <span>People</span>
          </p>
          <div className="grid2 impactPeople__head">
            <h2 className="h2" data-reveal data-delay="80">
              The people behind the numbers.
            </h2>
            <p className="impactPeople__lede" data-reveal data-delay="140">
              The impact is not just equipment deployed. It is people working, earning and building
              businesses around mechanisation.
            </p>
          </div>
          <div className="impactPeople__gallery">
            {[
              ["img/prog-9.jpg", "A woman MSP in a white cap driving an orange tryctor", "A woman MSP at work on an ISSAM tryctor."],
              ["img/prog-2.jpg", "ISSAM trainees in orange coveralls and helmets learning to handle equipment", "Practical equipment training for ISSAM trainees."],
              ["img/ypim-1.jpg", "Young people cheering with Youth in Mechanization signs", "Young People in Mechanisation participants."],
            ].map(([src, alt, caption], index) => (
              <figure key={src} data-reveal data-delay={index * 100}>
                <div className="media media--rounded ratio-3-4">
                  <Photo src={asset(src)} alt={alt} sizes="30vw" />
                </div>
                <figcaption>{caption}</figcaption>
              </figure>
            ))}
          </div>
          <div className="impactPeople__stats">
            {PEOPLE_STATS.map((stat, index) => (
              <div key={stat.label} data-reveal data-delay={index * 80}>
                <p className={stat.accent ? "impactBig impactBig--accent" : "impactBig"}>
                  <CountUp count={stat.count} />
                </p>
                <p className="impactCaption">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="impactTagWrap">
            <span className="impactTag">ISSAM programme</span>
          </div>
        </div>
      </section>

      <section className="impactMachines">
        <div className="wrap">
          <div className="grid2 impactMachines__grid">
            <div>
              <p className="impactNumberEyebrow" data-reveal>
                <span>03</span>
                <span>Machines</span>
              </p>
              <p className="impactGiant" data-reveal data-delay="80">
                <CountUp count={3396} />
              </p>
              <p className="impactLead" data-reveal data-delay="140">
                pieces of equipment deployed to MSPs, across 10 types of tools.
              </p>
              <p className="prose muted impactMachines__copy" data-reveal data-delay="200">
                Small-scale machines and labour-saving devices placed with youth- and women-led
                MSPs, so the work can happen in the community.
              </p>
              <p className="impactCaption impactMachines__tag">ISSAM programme</p>
            </div>
            <div className="media media--rounded impactMachines__image" data-reveal="img">
              <Photo
                src={asset("img/prog-11.jpg")}
                alt="An MSP operating a tryctor with a disc plough attached"
                sizes="(max-width: 880px) 90vw, 45vw"
              />
            </div>
          </div>

          <div className="impactMachineTable">
            {MACHINE_LISTS.map((group, groupIndex) => (
              <div key={group.count} data-reveal data-delay={groupIndex * 100}>
                <div className="impactMachineTable__count">
                  <p className="impactBig">
                    <CountUp count={group.count} />
                  </p>
                  <p className="impactCaption">of each</p>
                </div>
                <div className="impactMachineTable__items">
                  {group.items.map((item) => (
                    <div key={item.label}>
                      <Icon name={item.icon} size={36} />
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="impactLand">
        <div className="wrap">
          <p className="impactNumberEyebrow" data-reveal>
            <span>04</span>
            <span>Land and place</span>
          </p>
          <p className="impactLand__value" data-reveal data-delay="80">
            <CountUp count={8720} /> ha
          </p>
          <p className="impactLead" data-reveal data-delay="140">
            of farmland worked by ISSAM MSPs.
          </p>
          <div className="impactLand__flow">
            {[
              ["Nigeria", "Country"],
              ["2", "States"],
              ["23", "LGAs"],
              ["146,170", "Farmers registered"],
            ].map(([value, label], index) => (
              <Fragment key={label}>
                <div className="impactLand__flowItem" data-reveal data-delay={index * 120}>
                  <p>{value}</p>
                  <span>{label}</span>
                </div>
                {index < 3 ? (
                  <span className="impactLand__arrow" aria-hidden="true">
                    →
                  </span>
                ) : null}
              </Fragment>
            ))}
          </div>
          <div className="impactLand__lgas">
            {LGA_GROUPS.map((group) => (
              <div key={group.state}>
                <h3>{group.state}</h3>
                <div>
                  {group.areas.map((area, index) => (
                    <span key={area} data-reveal data-delay={Math.min(index * 40, 440)}>
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="impactNote impactLand__note">
            ISSAM coverage only. 23 LGAs are listed in the ISSAM source pack, while mobilisation is
            reported across 22. To confirm before publishing.
          </p>
        </div>
      </section>

      <section className="impactBusinesses">
        <div className="wrap">
          <div className="grid2 impactBusinesses__grid">
            <div>
              <p className="impactNumberEyebrow" data-reveal>
                <span>05</span>
                <span>Businesses</span>
              </p>
              <p className="impactGiant" data-reveal data-delay="80">
                <CountUp count={566} />
              </p>
              <p className="impactLead" data-reveal data-delay="140">
                youth- and women-led cooperatives formed, with elections conducted.
              </p>
              <div className="impactTagWrap" data-reveal>
                <span className="impactTag impactTag--cream">ISSAM programme</span>
              </div>
            </div>
            <div className="impactBusinesses__stats">
              <div className="impactBusinesses__statGrid">
                {[
                  { icon: "women" as AnyIconName, count: 338, label: "Women-led cooperatives", note: "60% of 566" },
                  { icon: "demand" as AnyIconName, count: 220, label: "Cooperatives generating demand", note: "39% of 566" },
                  { icon: "fulfilled" as AnyIconName, count: 191, label: "Cooperatives fulfilling demand", note: "34% of 566" },
                ].map((stat, index) => (
                  <div key={stat.label} data-reveal data-delay={index * 100}>
                    <Icon name={stat.icon} size={40} />
                    <p className="impactBig">
                      <CountUp count={stat.count} />
                    </p>
                    <p>{stat.label}</p>
                    <span className="impactCaption">{stat.note}</span>
                  </div>
                ))}
              </div>
              <p className="impactNote">
                Shares are of the 566 cooperatives formed through ISSAM.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="impactSystems on-dark">
        <div className="wrap">
          <div className="grid2 impactSystems__head">
            <div>
              <p className="impactNumberEyebrow" data-reveal>
                <span>06</span>
                <span>Systems</span>
              </p>
              <h2 className="h2" data-reveal data-delay="80">
                Beyond the farm: policy and investment.
              </h2>
            </div>
            <p className="impactSystems__lede" data-reveal data-delay="140">
              Through ISSAM, TracTrac supported the development of the National Agricultural
              Mechanisation Policy (NAMP) 2026 and the Mechanisation Investment Strategy Document.
              NAMP 2026 has been officially ratified by government.
            </p>
          </div>
        </div>
        <div className="grid2 impactSystems__body">
          <div className="media media--rounded impactSystems__image" data-reveal="img">
            <Photo
              src={asset("img/ypim-6.jpg")}
              alt="Young participants seated at the NAMP 2026 ratification event"
              sizes="(max-width: 880px) 100vw, 50vw"
            />
          </div>
          <div className="impactSystems__stats">
            {SYSTEM_STATS.map((stat, index) => (
              <div key={stat.label} data-reveal data-delay={index * 80}>
                <p>
                  <CountUp count={stat.count} suffix={stat.suffix} />
                </p>
                <span>{stat.label}</span>
              </div>
            ))}
            <div className="impactTagWrap">
              <span className="impactTag">ISSAM programme</span>
            </div>
          </div>
        </div>
      </section>

      <section className="impactTimeline">
        <div className="wrap">
          <p className="eyebrow" data-reveal>
            Over time
          </p>
          <h2 className="h2 impactTimeline__title" data-reveal data-delay="80">
            How the work has grown.
          </h2>
          <div className="impactTimeline__list">
            {TIMELINE.map((item, index) => (
              <div key={item.date} data-reveal data-delay={index * 120}>
                <p className={item.accent ? "isAccent" : undefined}>{item.date}</p>
                <div>
                  <h3>{item.title}</h3>
                  <p className="prose muted">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="impactNote">
            Only milestones documented in the current material. Company founding and earlier
            milestones to be added once dates are confirmed.
          </p>
        </div>
      </section>

      <section className="impactStories">
        <div className="wrap">
          <p className="eyebrow" data-reveal>
            Stories from the field
          </p>
          <h2 className="h2 impactStories__title" data-reveal data-delay="80">
            Real stories from the field.
          </h2>
          <div className="impactStories__grid">
            {STORIES.map((story, index) => (
              <a
                href="https://tractrac.co/blog"
                target="_blank"
                rel="noopener"
                className="impactStoryCard"
                key={story.title}
                data-reveal
                data-delay={index * 100}
              >
                <div className="media impactStoryCard__media">
                  <Photo src={asset(story.image)} alt={story.alt} sizes="25vw" />
                </div>
                <div className="impactStoryCard__body">
                  <p>{story.category}</p>
                  <h3>{story.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="impactCta">
        <div className="impactCta__bg">
          <Photo
            src={asset("img/prog-3.jpg")}
            alt="Trainees in ISSAM coveralls and helmets during practical equipment training"
            sizes="100vw"
          />
        </div>
        <div className="impactCta__shade" aria-hidden="true" />
        <div className="wrap impactCta__inner">
          <h2 data-reveal>See the work behind the numbers.</h2>
          <div className="impactCta__actions" data-reveal data-delay="100">
            <Link className="btn btn--primary btn--lg" href="/programmes">
              Explore Our Programmes
            </Link>
            <Link className="btn btn--outlineLight btn--lg" href="/#partnership">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
