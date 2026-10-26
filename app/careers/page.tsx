import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/ui/Hero";
import Photo from "@/components/ui/Photo";
import { asset } from "@/lib/asset";
import "@/styles/careers.css";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build technology and partnerships that put mechanization in reach of smallholder farmers across Nigeria and Sub-Saharan Africa.",
  openGraph: { images: [asset("uploads/DSC02329.jpg")] },
};

const WHY_JOIN = [
  {
    title: "Mission & Impact",
    items: [
      {
        strong: "Be part of food security solutions:",
        text: "contribute to transforming smallholder farming across Africa through technology and mechanization.",
      },
      {
        strong: "Inclusive innovation:",
        text: "work on projects that empower women, youths, persons with disabilities, and internally displaced persons in agriculture.",
      },
    ],
  },
  {
    title: "Growth & Learning",
    items: [
      {
        strong: "Continuous training:",
        text: "access workshops, certifications, and learning resources in agri-tech, digital tools, and leadership.",
      },
      {
        strong: "Career advancement:",
        text: "clear growth paths and mentorship from industry experts.",
      },
      { text: "Exposure to global development partners." },
    ],
  },
  {
    title: "Beyond Work",
    items: [
      {
        strong: "Purpose-driven brand:",
        text: "your daily work directly contributes to transforming livelihoods.",
      },
      {
        text: "Networking opportunities with leaders in agriculture, technology, and development.",
      },
      {
        text: "Employee recognition celebrating innovation, commitment, and excellence.",
      },
    ],
  },
];

export default function CareersPage() {
  return (
    <main id="main" className="pageMain">
      <Hero
        image={asset("uploads/DSC02329.jpg")}
        imageAlt="TracTrac staff and participants working together in the field"
        priority
        size="full"
      >
        <p className="careersHero__eyebrow" data-reveal>
          Careers at TracTrac
        </p>
        <h1 className="display1 careersHero__title" data-reveal data-delay="80">
          Join the Humans of TracTrac
        </h1>
        <p className="careersHero__lede" data-reveal data-delay="180">
          Build technology and partnerships that put mechanization in reach of smallholder farmers
          across Nigeria and Sub-Saharan Africa.
        </p>
        <div className="careersHero__cta" data-reveal data-delay="260">
          <Link className="btn btn--primary btn--lg btn--whiteHover" href="#roles">
            See open roles <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Hero>

      <section id="roles" className="careersRoles">
        <div className="wrap">
          <p className="eyebrow">How to join TracTrac</p>
          <div className="careersRoles__grid">
            <div data-reveal>
              <h2>Job Listings</h2>
              <p className="careersRoles__lede">
                Explore current openings and find a role where your skills advance mechanization
                for smallholder farmers.
              </p>
              <div className="careersRoleList">
                <a
                  href="https://tractrac.co/careers"
                  target="_blank"
                  rel="noopener"
                  className="careersRole"
                >
                  <span>
                    <strong>Content Writer &amp; Storyteller</strong>
                    <span>Junior Level · Abuja (On-site)</span>
                    <span>
                      Develop clear, compelling narratives that communicate impact, learning, and
                      value across multiple audiences.
                    </span>
                  </span>
                  <span className="careersRole__arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              </div>
            </div>

            <div className="careersTalent" data-reveal data-delay="100">
              <h2>Join our talent pool</h2>
              <p>
                Don&rsquo;t see the right role today? Share your CV and areas of interest—we&rsquo;ll
                reach out when a matching opportunity opens.
              </p>
              <ul>
                <li>Stay connected for future roles across programs and locations</li>
                <li>Ideal for specialists in agri-tech, operations, M&amp;E, and comms</li>
                <li>Send your CV with a short note on what you&rsquo;d like to contribute</li>
              </ul>
              <Link className="btn btn--primary btn--inkHover" href="/careers/talent-pool">
                Join the talent pool <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="careersMission">
        <div className="wrap">
          <div className="careersMission__grid">
            <div className="media media--rounded careersMission__media" data-reveal="img">
              <Photo
                src="https://api.tractrac.co/media/images/ea0cc4a4-520c-49e9-9ce9-d582a1849e31.jpg"
                alt="TracTrac team and partners at the TracTrac Investment Roadshow 2026"
                sizes="(max-width: 880px) 90vw, 45vw"
              />
            </div>
            <div data-reveal data-delay="100">
              <p className="eyebrow">Our mission</p>
              <h2 className="careersMission__title">
                All of us at TracTrac are on the same mission.
              </h2>
              <p className="careersMission__quote">
                To improve farmers’ access to mechanisation, create opportunities for investors and
                enterprising young people, increase the number of tractors available and use
                technology to make better use of every machine.
              </p>
              <div className="careersMission__body">
                <p>
                  Currently, our work spans across Nigeria and we have offices in the FCT Abuja and
                  Nasarawa State.
                </p>
                <p>
                  The people are at the heart of this transforming work we do to improve
                  productivity for farmers and secure Nigeria&apos;s food security.
                </p>
              </div>
              <div className="careersMission__cta">
                <p>Ready to do work you care about with people who care?</p>
                <Link className="btn btn--ink" href="#roles">
                  See open roles <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="careersWhy on-dark">
        <div className="wrap">
          <p className="eyebrow" data-reveal>
            Humans of TracTrac
          </p>
          <h2 className="careersWhy__title" data-reveal data-delay="80">
            Why Join the Humans of TracTrac?
          </h2>
          <div className="careersWhy__grid">
            {WHY_JOIN.map((group) => (
              <div key={group.title} data-reveal>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.text}>
                      <span aria-hidden="true" className="careersWhy__dot" />
                      <span>
                        {item.strong ? <strong>{item.strong} </strong> : null}
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="careersWhy__cta" data-reveal>
            <Link className="btn btn--primary btn--lg btn--whiteHover" href="#roles">
              See open roles <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="careersLife">
        <div className="wrap">
          <div className="careersLife__head" data-reveal>
            <span className="careersLife__pill">Culture</span>
            <h2>Life at TracTrac</h2>
            <p>Field days, workshops, and the people powering mechanization across Africa.</p>
          </div>
          <div className="careersLife__top">
            <div className="media media--rounded careersLife__big" data-reveal="img">
              <Photo
                src={asset("uploads/WhatsApp Image 2026-09-24 at 14.35.20.jpeg")}
                alt="TracTrac team members celebrating with placards at a youth in mechanisation event"
                sizes="(max-width: 880px) 90vw, 50vw"
                style={{ objectPosition: "50% 45%" }}
              />
            </div>
            <div className="careersLife__stack">
              <div className="media media--rounded" data-reveal="img" data-delay="100">
                <Photo
                  src={asset("uploads/DSC02281.jpg")}
                  alt="TracTrac team posing together at an MSP training and onboarding day"
                  sizes="25vw"
                  style={{ objectPosition: "56% 62%" }}
                />
              </div>
              <div className="media media--rounded" data-reveal="img" data-delay="180">
                <Photo
                  src={asset("uploads/WhatsApp Image 2026-09-24 at 14.36.33.jpeg")}
                  alt="TracTrac team and participants holding mechanisation placards"
                  sizes="25vw"
                  style={{ objectPosition: "50% 40%" }}
                />
              </div>
            </div>
          </div>
          <div className="careersLife__bottom">
            {[
              [
                "uploads/WhatsApp Image 2026-09-24 at 14.35.40.jpeg",
                "TracTrac team members standing together at a youth in mechanisation event",
                "50% 70%",
              ],
              [
                "uploads/IMG-20260824-WA0154.jpg",
                "A TracTrac team member interviewing a service provider during a field visit",
                "50% 65%",
              ],
              [
                "uploads/DSC07136.jpg",
                "A trainee driving an ISSAM tryctor with an instructor during a field day",
                "52% 40%",
              ],
              [
                "uploads/WhatsApp Image 2026-09-24 at 14.37.22.jpeg",
                "Participants in TracTrac shirts at a national mechanisation policy workshop",
                "55% 55%",
              ],
            ].map(([src, alt, position], index) => (
              <div
                className="media media--rounded careersLife__tile"
                key={src}
                data-reveal="img"
                data-delay={index * 80}
              >
                <Photo
                  src={asset(src)}
                  alt={alt}
                  sizes="22vw"
                  style={{ objectPosition: position }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
