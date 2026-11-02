import type { Metadata } from "next";
import Link from "next/link";
import TeamDirectory from "@/components/team/TeamDirectory";
import Hero from "@/components/ui/Hero";
import { asset } from "@/lib/asset";
import "@/styles/team.css";
import "@/styles/profile-dialog.css";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the people working across TracTrac to connect agriculture, technology and mechanization.",
  openGraph: { images: [asset("img/prog-1.jpg")] },
};

export default function TeamPage() {
  return (
    <main id="main" className="pageMain">
      <Hero
        size="auto"
        className="teamHero"
        innerClassName="teamHero__inner"
        decoration={
          <svg
            aria-hidden="true"
            viewBox="0 0 800 400"
            preserveAspectRatio="xMaxYMid slice"
            className="teamHero__lines"
          >
            <g fill="none" stroke="rgba(246,242,236,0.12)" strokeWidth="1">
              <path d="M420 400 L470 210 L520 0" />
              <path d="M470 210 L640 240 L800 196" />
              <path d="M640 240 L612 400" />
              <path d="M640 240 L700 0" />
              <path d="M520 0 L560 120 L800 92" />
              <path d="M560 120 L470 210" />
            </g>
            <g fill="#F36A02">
              <circle cx="470" cy="210" r="2.5" />
              <circle cx="640" cy="240" r="2.5" />
              <circle cx="560" cy="120" r="2.5" />
            </g>
          </svg>
        }
      >
        <Link className="teamHero__back" href="/about#team">
          <span aria-hidden="true">←</span> About TracTrac
        </Link>
        <p className="eyebrow eyebrow--light">Our people</p>
        <h1 className="teamHero__title">Our people - Powering food systems</h1>
        <p className="teamHero__lede">
          Meet the people working across TracTrac to connect agriculture, technology and
          mechanization.
        </p>
      </Hero>

      <section id="team" className="teamDirectory">
        <div className="wrap">
          <TeamDirectory />
        </div>
      </section>
    </main>
  );
}
