import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import EquipmentRail from "@/components/home/EquipmentRail";
import FaqSection from "@/components/home/FaqSection";
import HeroVideo from "@/components/home/HeroVideo";
import ProgrammeShowcase from "@/components/home/ProgrammeShowcase";
import TechnologySteps from "@/components/home/TechnologySteps";
import CountUp from "@/components/ui/CountUp";
import Icon from "@/components/ui/Icon";
import Photo from "@/components/ui/Photo";
import { asset } from "@/lib/asset";
import {
  formatPostDate,
  getBlogPosts,
  plainExcerpt,
  postHref,
  postImage,
  postImageAlt,
} from "@/lib/blog";
import {
  ECOSYSTEM_ROLES,
  ENABLING_ENVIRONMENT,
  EQUIPMENT,
  HERO_POSTER,
  HOME_INSIGHTS,
  HOME_STATS,
  MARQUEE_ITEMS,
  PARTNER_LOGOS,
  STORY_CARDS,
  TECH_STEPS,
} from "@/content/home";
import "@/styles/home.css";

export const metadata: Metadata = {
  title: {
    absolute: "TracTrac — The right farm machinery, within reach.",
  },
  description:
    "TracTrac helps farmers find tractors and other equipment when they need them, while giving equipment owners, agents and service providers the tools to keep those machines working.",
};

export const revalidate = 60;

export default async function HomePage() {
  const posts = await getBlogPosts(3);
  const homeInsights = posts.length
    ? posts.map((post) => ({
        category: formatPostDate(post.date),
        title: post.title,
        excerpt: plainExcerpt(post.excerpt),
        image: postImage(post) ?? HOME_INSIGHTS[0].image,
        position: "50% 45%",
        alt: postImageAlt(post),
        href: postHref(post),
      }))
    : HOME_INSIGHTS;

  return (
    <main id="main" className="pageMain">
      <section className="homeHero">
        <HeroVideo src={asset("uploads/vvvvvv.mp4")} poster={HERO_POSTER} />
        <div className="homeHero__shade" aria-hidden="true" />
        <svg
          aria-hidden="true"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="homeHero__lines"
        >
          <path
            d="M62 96 L70 66 L88 58 L97 72"
            fill="none"
            stroke="#F36A02"
            strokeWidth="0.18"
            strokeDasharray="1.4 1.4"
          />
          <circle cx="70" cy="66" r="0.7" fill="#F36A02" />
          <circle cx="88" cy="58" r="0.7" fill="#F36A02" />
        </svg>
        <div className="wrap homeHero__inner">
          <div className="homeHero__text">
            <p className="eyebrow" data-reveal data-delay="0">
              Making mechanisation easier to access
            </p>
            <h1 className="homeHero__title" data-reveal data-delay="90">
              The right farm machinery, within reach.
            </h1>
            <p className="homeHero__lede" data-reveal data-delay="180">
              TracTrac helps farmers find tractors and other equipment when they need them, while
              giving equipment owners, agents and service providers the tools to keep those
              machines working.
            </p>
            <div className="homeHero__ctas" data-reveal data-delay="270">
              <Link className="btn btn--primary btn--lg btn--whiteHover" href="/technology#download">
                Find Mechanisation
              </Link>
              <Link className="btn btn--outlineLight btn--lg" href="#tech">
                See How TracTrac Works
              </Link>
              <Link className="homeHero__textLink" href="/solutions#owners">
                Own equipment? Enlist it
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="impact" className="homeImpact">
        <div className="wrap">
          <div className="homeImpact__panel">
            <div className="media homeImpact__bg">
              <Photo
                src={asset("uploads/DSC07701.jpg")}
                alt="An operator ploughing a field with a TracTrac ISSAM tractor"
                sizes="100vw"
              />
            </div>
            <div className="homeImpact__shade" aria-hidden="true" />
            <div className="homeImpact__intro" data-reveal>
              <p className="eyebrow">The work so far</p>
              <h2 className="homeImpact__title">
                More farmers served. More machines working. More opportunities created.
              </h2>
              <p className="homeImpact__lede">
                Better access to mechanisation can change how quickly work gets done, how many
                farmers a machine can serve and how many people can build livelihoods around the
                sector.
              </p>
            </div>
            <div className="homeImpact__statsWrap">
              <div className="homeStats">
                {HOME_STATS.map((stat) => (
                  <div className="homeStat" key={stat.label}>
                    <Icon name={stat.icon} size="clamp(38px,4.2vw,62px)" className="homeStat__icon" />
                    <p className="homeStat__value" data-accent={stat.accent ? "true" : undefined}>
                      <CountUp
                        count={stat.count}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                        decimals={stat.decimals}
                      />
                    </p>
                    <p className="homeStat__label">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="homeWhy">
        <div className="wrap homeWhy__intro">
          <div className="grid2 homeWhy__grid">
            <div>
              <p className="eyebrow" data-reveal>
                Why this matters
              </p>
              <h2 className="display3" data-reveal data-delay="80">
                Farmers need the work done. They do not always need to own the machine.
              </h2>
            </div>
            <div className="homeWhy__copy" data-reveal data-delay="160">
              <p>
                Buying a tractor or labour-saving devices (threshers, knapsack sprayers, fertiliser
                applicators) is out of reach for many farmers.
              </p>
              <p>
                Even when machinery is available, it may be too far away, unavailable when the farm
                is ready, or difficult to find.
              </p>
              <p>
                At the same time, equipment owners need steady demand to keep their machines
                productive.
              </p>
              <p className="homeWhy__strong">TracTrac helps bring those needs together.</p>
            </div>
          </div>
        </div>
        <div className="homeWhy__band">
          <div className="homeWhy__bandMedia" data-reveal="img">
            <Photo
              src={asset("uploads/WhatsApp Image 2026-10-15 at 13.10.08.jpeg")}
              alt="An ISSAM operator in TracTrac overalls demonstrating a motorised thresher"
              sizes="100vw"
            />
          </div>
          <div className="homeWhy__bandShade" aria-hidden="true" />
          <div className="wrap homeWhy__bandText">
            <p>We help farmers find machines, and we help machines find work.</p>
          </div>
        </div>
      </section>

      <section id="ecosystem" className="homeEcosystem">
        <div className="wrap homeEcosystem__intro">
          <div className="grid2 homeEcosystem__grid">
            <div>
              <p className="eyebrow" data-reveal>
                How TracTrac works
              </p>
              <h2 className="display3" data-reveal data-delay="80">
                It takes more than a tractor to make mechanisation work.
              </h2>
            </div>
            <div data-reveal data-delay="160">
              <ul className="homeEcoList">
                <li>Farmers need machinery.</li>
                <li>Equipment owners need demand.</li>
                <li>Service providers need customers.</li>
                <li>Young people need opportunities.</li>
                <li>The sector needs skills, finance and strong partnerships.</li>
              </ul>
              <p className="homeEcoList__strong">TracTrac helps connect the pieces.</p>
            </div>
          </div>
        </div>

        <div className="wrap homeEcoMap" id="eco-map">
          <div className="grid2 homeEcoMap__head">
            <div>
              <p className="eyebrow">Core service network</p>
              <h3 className="homeEcoMap__title">
                TracTrac connects the four roles that move machinery from the farmer who needs it
                to the field where the work happens.
              </h3>
            </div>
            <p className="prose muted homeEcoMap__optical">
              Each one depends on the others. The network is what turns scattered demand into work
              that actually gets done.
            </p>
          </div>

          <div className="homeEcoRule" aria-hidden="true">
            <p>Demand</p>
            <span />
            <p>Delivery</p>
          </div>

          <div className="homeEcoRoles">
            {ECOSYSTEM_ROLES.map((role, index) => (
              <div
                className="homeEcoRole"
                key={role.title}
                data-reveal
                data-delay={index * 150}
              >
                <p className="homeEcoRole__num">{role.number}</p>
                <h3>{role.title}</h3>
                <p className="homeEcoRole__body">{role.body}</p>
                {index < ECOSYSTEM_ROLES.length - 1 ? (
                  <span className="homeEcoRole__arrow" aria-hidden="true">
                    <svg viewBox="0 0 12 12">
                      <path
                        d="M4 2 L8 6 L4 10"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                ) : null}
              </div>
            ))}
          </div>

          <div className="homeEnabling">
            <div className="grid2 homeEnabling__head">
              <h3 className="homeEnabling__title">The Enabling environment</h3>
              <p className="prose muted">The wider system that lets the network work at scale.</p>
            </div>
            <div className="homeEnabling__grid">
              {ENABLING_ENVIRONMENT.map((item) => (
                <div key={item.title}>
                  <p className="homeEnabling__name">{item.title}</p>
                  <p className="prose muted">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="pathways" className="homePathways">
        <div className="homePathways__band">
          <div className="wrap homePathways__bandInner">
            <p className="eyebrow eyebrow--light">Start with what you need</p>
            <h2 className="homePathways__title">What brings you to TracTrac?</h2>
          </div>
        </div>

        <div className="homePathways__cards">
          <article className="homePathway">
            <div className="homePathway__media">
              <Photo
                src={asset("uploads/Copy of DSC08691.jpg")}
                alt="An operator working farmland with a TracTrac tractor and disc plough"
                sizes="(max-width: 880px) 100vw, 50vw"
              />
            </div>
            <div className="homePathway__shade" aria-hidden="true" />
            <div className="homePathway__body">
              <p className="homePathway__kicker">Farmers</p>
              <h3 className="homePathway__heading">Get the machinery your farm needs.</h3>
              <p className="homePathway__copy">
                Find mechanisation services around you without having to buy and maintain expensive
                equipment yourself.
              </p>
              <Link className="btn btn--primary btn--whiteHover" href="/technology#download">
                Find Mechanisation
              </Link>
            </div>
          </article>
          <article className="homePathway">
            <div className="homePathway__media">
              <Photo
                src={asset("uploads/Copy of DSC07693.jpg")}
                alt="Close up of a disc plough turning soil behind a TracTrac tractor"
                sizes="(max-width: 880px) 100vw, 50vw"
              />
            </div>
            <div className="homePathway__shade" aria-hidden="true" />
            <div className="homePathway__body">
              <p className="homePathway__kicker">Equipment Owners</p>
              <h3 className="homePathway__heading">Put your machinery to work.</h3>
              <p className="homePathway__copy">
                Enlist your equipment, complete verification and connect your machines to farmer
                demand.
              </p>
              <Link className="btn btn--outlineLight btn--outlineSolid" href="/solutions#owners">
                Enlist Your Equipment
              </Link>
            </div>
          </article>
        </div>

        <div className="wrap homePathways__secondary">
          <div className="grid2 homePathways__secondaryGrid">
            <div>
              <p className="homePathways__label">Booking Agents</p>
              <h3 className="homePathways__subtitle">
                Help farmers around you get connected.
              </h3>
              <p className="prose muted homePathways__subCopy">
                Bring farmer demand together, connect communities to available services and earn
                while supporting the people around you.
              </p>
              <Link className="linkUnderline" href="/solutions#agents">
                Become a Booking Agent
              </Link>
            </div>
            <div>
              <p className="homePathways__label">Mechanisation Service Providers</p>
              <h3 className="homePathways__subtitle">
                Build a business around the work farmers need done.
              </h3>
              <p className="prose muted homePathways__subCopy">
                Develop your skills, reach more farmers and grow a business providing mechanisation
                services.
              </p>
              <Link className="linkUnderline" href="/solutions#msp">
                Explore MSP Opportunities
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="tech" className="homeTechSection on-dark">
        <div className="wrap homeTechSection__intro">
          <div className="grid2 homeTechSection__grid">
            <div>
              <p className="eyebrow" data-reveal>
                Technology built for the work on the ground
              </p>
              <h2 className="display3" data-reveal data-delay="80">
                From finding a machine to finishing the job.
              </h2>
            </div>
            <div className="prose homeTechSection__copy" data-reveal data-delay="160">
              <p>
                TracTrac brings the steps around mechanisation into one connected experience.
              </p>
              <p className="homeTechSection__soft">
                Farmers can find equipment, measure their farms and request services. Equipment
                owners and agents can manage machines, demand and field activity.
              </p>
            </div>
          </div>
        </div>

        <div className="wrap homeTechSection__body">
          <TechnologySteps steps={TECH_STEPS} />
        </div>

        <div className="homeMarquee">
          <div className="homeMarquee__track">
            {[0, 1].map((copy) => (
              <div className="homeMarquee__group" aria-hidden={copy === 1} key={copy}>
                {MARQUEE_ITEMS.map((item) => (
                  <span key={item}>
                    {item}
                    <span className="homeMarquee__slash">/</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="equipment" className="homeEquipment">
        <div className="homeEquipment__band">
          <div className="homeEquipment__bg">
            <Photo
              src={asset("uploads/DSC03905.jpg")}
              alt="A young operator ploughing farmland with a TracTrac tractor and disc plough"
              sizes="100vw"
            />
          </div>
          <div className="homeEquipment__shade" aria-hidden="true" />
          <div className="wrap homeEquipment__text">
            <p className="eyebrow eyebrow--light">More ways to get the work done</p>
            <h2 className="homeEquipment__title">
              The job changes. So does the equipment.
            </h2>
            <div className="grid2 homeEquipment__cols">
              <p>
                A farmer may need one machine for land preparation and a completely different tool
                later in the season.
              </p>
              <p>
                TracTrac is being built around the work farmers need to get done, not around one
                type of machine.
              </p>
            </div>
          </div>
        </div>
        <EquipmentRail items={EQUIPMENT} />
      </section>

      <section id="programmes" className="homeProgrammes">
        <div className="wrap homeProgrammes__intro">
          <div className="grid2 homeProgrammes__grid">
            <div>
              <p className="eyebrow">The people behind mechanisation</p>
              <h2 className="h2 homeProgrammes__title">
                Mechanisation needs skilled people too.
              </h2>
            </div>
            <div>
              <p className="prose muted">
                A machine is only useful when people can operate it, maintain it, organise demand
                and build a reliable service around it.
              </p>
              <p className="prose muted homeProgrammes__para">
                TracTrac invests in practical training and opportunities for young people, women
                and mechanisation service providers so more communities have the people needed to
                keep machinery working.
              </p>
              <Link className="linkUnderline" href="/programmes">
                Explore Our Programs
              </Link>
            </div>
          </div>
        </div>

        <div className="homeProgrammes__photo">
          <Photo
            src={asset("uploads/Copy of DSC08709.jpg")}
            alt="A woman operating a TracTrac tractor while other trainees look on"
            sizes="100vw"
          />
        </div>

        <div className="wrap homeProgrammes__body" id="prog-loop">
          <p className="eyebrow">Featured programs</p>
          <ProgrammeShowcase />
        </div>
      </section>

      <section id="stories" className="homeStories">
        <div className="wrap homeStories__intro">
          <div className="grid2 homeStories__grid">
            <div>
              <p className="eyebrow">Stories from the field</p>
              <h2 className="h2 homeStories__title">
                What changes when access gets easier?
              </h2>
            </div>
            <p className="prose muted">
              The clearest way to understand mechanisation is through the people using it &mdash;
              the farmers, operators and communities putting better access to work.
            </p>
          </div>
        </div>

        <div className="wrap homeStories__feature">
          <div className="grid2 homeStories__featureGrid">
            <div className="media media--rounded ratio-16-10" data-reveal="img">
              <Photo
                src={asset("uploads/IMG-20260824-WA0025 (1).jpg")}
                alt="A TracTrac field researcher interviewing an elderly farmer seated beside his maize plot"
                sizes="(max-width: 880px) 90vw, 45vw"
                style={{ objectPosition: "50% 35%" }}
              />
            </div>
            <div data-reveal data-delay="100">
              <p className="eyebrow">Featured story</p>
              <h3 className="homeStories__featureTitle">
                Before we build anything, we sit down and ask.
              </h3>
              <p className="prose muted">
                Across Nasarawa State, our field teams spend their days with farmers, operators and
                service providers &mdash; asking how they get machinery today, what it costs them
                and what goes wrong.
              </p>
              <p className="homeStories__strong">
                Every feature in TracTrac starts in a conversation like this one.
              </p>
            </div>
          </div>
        </div>

        <div className="wrap homeStories__cardsWrap">
          <div className="homeStoryGrid">
            {STORY_CARDS.map((story) => (
              <Link className="homeStoryCard" href={story.href} key={story.title}>
                <div className="media homeStoryCard__media">
                  <Photo
                    src={story.image}
                    alt={story.alt}
                    sizes="(max-width: 880px) 90vw, 25vw"
                    style={{ objectPosition: story.position }}
                  />
                </div>
                <div className="homeStoryCard__body">
                  <p className="homeStoryCard__category">{story.category}</p>
                  <h3 className="homeStoryCard__title">{story.title}</h3>
                  <p className="homeStoryCard__excerpt">{story.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="homeStories__cta">
            <Link className="btn btn--outline" href="/stories">
              View All Stories
            </Link>
          </div>
        </div>
      </section>

      <section id="insights" className="homeInsights">
        <div className="wrap homeInsights__inner">
          <div className="grid2 homeInsights__head">
            <div>
              <p className="eyebrow">Blog</p>
              <h2 className="h2 homeInsights__title">
                From the field and the wider mechanisation sector
              </h2>
            </div>
            <p className="prose muted">
              Research, program updates and perspectives published by our team as the work
              develops.
            </p>
          </div>

          <div className="homeInsightGrid">
            {homeInsights.map((article) => (
              <article className="homeInsightCard" key={article.title}>
                <div className="media homeInsightCard__media">
                  <Photo
                    src={article.image}
                    alt={article.alt}
                    sizes="33vw"
                    style={{ objectPosition: article.position }}
                  />
                </div>
                <div className="homeInsightCard__body">
                  <p className="homeInsightCard__category">{article.category}</p>
                  <h3 className="homeInsightCard__title">{article.title}</h3>
                  <p className="homeInsightCard__excerpt">{article.excerpt}</p>
                  <a
                    className="linkUnderline homeInsightCard__link"
                    href={article.href}
                    target="_blank"
                    rel="noopener"
                  >
                    Read story
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="homeInsights__cta">
            <Link className="btn btn--outline" href="/blog">
              View all blog posts
            </Link>
          </div>
        </div>
      </section>

      <section id="partnership" className="homePartnership">
        <div className="wrap homePartnership__inner">
          <div className="grid2 homePartnership__grid">
            <div>
              <p className="eyebrow">Partnership</p>
              <h2 className="h2 homePartnership__title">
                Scaling access takes more than equipment.
              </h2>
              <p className="prose muted">
                It takes finance, skills, service networks, policy and long term investment.
              </p>
              <p className="prose muted homePartnership__para">
                TracTrac works with government, financial institutions, development partners,
                investors, equipment companies and agricultural organisations to strengthen the
                system around mechanisation.
              </p>
              <p className="homePartnership__quote">
                From field delivery to national conversations, the goal is the same: make
                mechanisation work for more people.
              </p>
              <div className="homePartnership__ctas">
                <Link className="btn btn--primary btn--inkHover" href="/partners#contact">
                  Partner With TracTrac
                </Link>
                <Link className="btn btn--outline" href="/partners#finance">
                  Explore Investment Opportunities
                </Link>
              </div>
            </div>
            <div>
              <div className="media media--rounded homePartnership__media">
                <Photo
                  src={asset("uploads/DSC02281.jpg")}
                  alt="TracTrac and Mastercard Foundation program team at a mechanisation service provider onboarding event"
                  sizes="(max-width: 880px) 90vw, 45vw"
                />
              </div>
              <p className="prose muted homePartnership__partners">
                Government and regulators. Commercial banks. Development finance institutions.
                Investors. Development partners. Equipment manufacturers. Agricultural
                organisations.
              </p>
              <div className="homePartnership__beyond">
                <p className="eyebrow">Beyond service delivery</p>
                <h3 className="homePartnership__beyondTitle">
                  Better access also depends on better systems.
                </h3>
                <p className="prose muted">
                  TracTrac brings stakeholders together, contributes to industry and policy
                  conversations and helps turn ideas into practical action.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="wrap homePartnership__logosWrap">
          <p className="homePartnership__logosTitle">
            Working with organisations that want mechanisation to work.
          </p>
          <div className="homePartnerLogos">
            {PARTNER_LOGOS.map((logo) => (
              <div className="homePartnerLogo" key={logo.name}>
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  style={{
                    maxHeight: logo.maxHeight,
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

      <FaqSection />

      <section id="final" className="homeFinal">
        <div className="homeFinal__bg">
          <Photo
            src={asset("uploads/DSC02329.jpg")}
            alt="TracTrac staff and participants working together in the field"
            sizes="100vw"
          />
        </div>
        <div className="homeFinal__shade" aria-hidden="true" />
        <svg
          aria-hidden="true"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="homeFinal__lines"
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
        <div className="wrap homeFinal__inner">
          <h2 className="homeFinal__title">
            There is more work to do. Let&rsquo;s get more machines working.
          </h2>
          <p className="homeFinal__lede">
            Whether you need machinery, own equipment, work with farmers or want to invest in
            agricultural mechanisation, there is a place for you in the TracTrac network.
          </p>
          <Link className="btn btn--primary btn--whiteHover homeFinal__button" href="/technology#download">
            Find Mechanisation
          </Link>
          <div className="homeFinal__links">
            <Link href="/solutions#owners">Enlist Your Equipment</Link>
            <Link href="/solutions#agents">Become a Booking Agent</Link>
            <Link href="/partners#contact">Partner With Us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
