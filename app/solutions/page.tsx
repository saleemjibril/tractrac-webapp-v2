import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/ui/Hero";
import Photo from "@/components/ui/Photo";
import { SOLUTIONS, SOLUTIONS_HERO } from "@/content/solutions";
import { asset } from "@/lib/asset";
import "@/styles/solutions.css";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "One network, four ways in: TracTrac for farmers, equipment owners, booking agents and mechanisation service providers.",
  openGraph: { images: [asset("uploads/DSC07701.jpg")] },
};

export default function SolutionsPage() {
  return (
    <main id="main" className="pageMain">
      <Hero
        image={SOLUTIONS_HERO.image}
        imageAlt={SOLUTIONS_HERO.alt}
        priority
        size="tall"
        className="solutionsHero"
      >
        <p className="eyebrow" data-reveal>
          Solutions
        </p>
        <h1 className="display1 solutionsHero__title" data-reveal data-delay="80">
          {SOLUTIONS_HERO.title}
        </h1>
        <p className="solutionsHero__lede" data-reveal data-delay="180">
          {SOLUTIONS_HERO.lede}
        </p>
        <div className="solutionsHero__links" data-reveal data-delay="240">
          {SOLUTIONS.map((path) => (
            <a className="solutionsHero__link" href={`#${path.id}`} key={path.id}>
              <span>{path.number}</span>
              {path.label}
            </a>
          ))}
        </div>
      </Hero>

      <section className="solutionsPaths">
        {SOLUTIONS.map((path, index) => (
          <article
            className="solutionPath"
            id={path.id}
            data-flip={index % 2 === 1 ? "true" : "false"}
            key={path.id}
          >
            <div className="wrap solutionPath__grid">
              <div className="solutionPath__media" data-reveal="img">
                <Photo src={path.image} alt={path.alt} sizes="(max-width: 880px) 90vw, 46vw" />
              </div>
              <div className="solutionPath__copy">
                <p className="eyebrow">
                  {path.number} · {path.label}
                </p>
                <h2 className="h2">{path.title}</h2>
                <p className="solutionPath__lede">{path.lede}</p>
                <ol className="solutionPath__steps">
                  {path.steps.map((step, stepIndex) => (
                    <li key={step}>
                      <span>{String(stepIndex + 1).padStart(2, "0")}</span>
                      <p>{step}</p>
                    </li>
                  ))}
                </ol>
                <Link className="btn btn--primary" href={path.cta.href}>
                  {path.cta.label}
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="solutionsCta">
        <div className="wrap solutionsCta__inner">
          <p className="eyebrow">Not sure where you fit?</p>
          <h2>Talk to us and we&rsquo;ll point you to the right place in the network.</h2>
          <Link className="btn btn--primary btn--lg" href="/#final">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
