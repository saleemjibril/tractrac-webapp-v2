import type { Metadata } from "next";
import Image from "next/image";
import AgentSequence from "@/components/technology/AgentSequence";
import HireRail from "@/components/technology/HireRail";
import JobSequence from "@/components/technology/JobSequence";
import Photo from "@/components/ui/Photo";
import SectionLink from "@/components/ui/SectionLink";
import { FIELD_POINTS, NETWORK_POINTS, PLUS_STEPS } from "@/content/technology";
import { BRAND } from "@/content/site";
import { asset } from "@/lib/asset";
import "@/styles/technology.css";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "TracTrac connects farmers, machines and the people who keep the work moving, from finding equipment to getting the job done.",
  openGraph: { images: [asset("uploads/DSC07156.jpg")] },
};

export default function TechnologyPage() {
  return (
    <main id="main" className="pageMain">
      <section className="techHero">
        <div className="techHero__bg">
          <Photo
            src={asset("uploads/DSC07156.jpg")}
            alt="A TracTrac operator working farmland with a tractor"
            sizes="100vw"
            priority
          />
        </div>
        <div className="techHero__shade" aria-hidden="true" />
        <div className="wrap techHero__inner">
          <div className="techHero__top">
            <div>
              <Image
                className="techHero__phones"
                src={asset("uploads/hero-phones-final.png")}
                alt="Two phones showing TracTrac Plus: the machinery filter and the Hire a Tractor screen with nearby machines"
                width={1164}
                height={1351}
                priority
              />
              <div className="techHero__text">
                <p className="eyebrow">TracTrac Plus</p>
                <h1>Technology that moves the work.</h1>
                <p>
                  TracTrac connects farmers, machines and the people who keep the work moving, from
                  finding equipment to getting the job done.
                </p>
              </div>
            </div>
            <div className="techHero__num">
              <p>
                <span data-count="500">500</span>K+
              </p>
              <p>Farmers reached</p>
            </div>
          </div>
        </div>
      </section>

      <JobSequence />

      <section id="plus" className="techPlus">
        <div className="wrap techPlus__inner">
          <div className="techPlus__head">
            <div>
              <p className="eyebrow">TracTrac Plus</p>
              <h2>The farmer&apos;s side of the job.</h2>
            </div>
            <p>Machinery discovery, farm measurement and the state of the job, in one app.</p>
          </div>
          <div className="techPlus__body">
            <div className="techPlus__band" aria-hidden="true" />
            <div className="techPlus__stair">
              {PLUS_STEPS.map((step) => (
                <figure key={step.number}>
                  <div className="techPlus__figureHead">
                    <span>{step.number}</span>
                    <p>{step.title}</p>
                  </div>
                  <p className="techPlus__copy">{step.body}</p>
                  <div className="techPhoneFrame techPhoneFrame--plus">
                    <div className="techPhoneFrame__inner media">
                      <Photo src={step.screen} alt={step.alt} sizes="(max-width: 880px) 60vw, 26vw" />
                    </div>
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <HireRail />

      <AgentSequence />

      <section id="network" className="techNetwork">
        <div className="wrap techNetwork__inner">
          <div className="techPlus__head">
            <div>
              <p className="eyebrow">Two products</p>
              <h2>One network. Different paths.</h2>
            </div>
            <p>
              TracTrac Plus is how farmers request the work. TracTrac Agent manages what happens
              next.
            </p>
          </div>
          <div className="techNetwork__row">
            {NETWORK_POINTS.map((point) => (
              <div key={point}>
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="techField">
        <div className="techField__bg">
          <Photo
            src={asset("uploads/Copy of DSC08709.jpg")}
            alt="An operator working farmland with a TracTrac tractor and disc plough"
            sizes="100vw"
          />
        </div>
        <div className="techField__shade" aria-hidden="true" />
        <div className="wrap techField__inner">
          <p className="eyebrow">Built for the field</p>
          <h2>The technology has to work where the work happens.</h2>
          <div className="techField__band">
            {FIELD_POINTS.map((point) => (
              <div key={point.title}>
                <p>{point.title}</p>
                <p>{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="download" className="techDownload" aria-labelledby="download-title">
        <div className="wrap techDownload__inner">
          <div>
            <p className="eyebrow">Get TracTrac Plus</p>
            <h2 id="download-title">Download the app. Put the network to work.</h2>
            <p className="techDownload__lede">
              Enlist your equipment, get a tractor to your farm or become an agent — from your
              phone.
            </p>
          </div>
          <div className="techDownload__actions">
            <div className="techDownload__badges">
              <a
                className="techDownload__badge"
                href={BRAND.googlePlayUrl}
                target="_blank"
                rel="noopener"
                aria-label="Get TracTrac Plus on Google Play"
              >
                <Image
                  src={BRAND.googlePlay}
                  alt="Get it on Google Play"
                  width={983}
                  height={291}
                  unoptimized
                />
              </a>
              <a
                className="techDownload__badge"
                href={BRAND.appStoreUrl}
                target="_blank"
                rel="noopener"
                aria-label="Download TracTrac Plus on the App Store"
              >
                <Image
                  src={BRAND.appStore}
                  alt="Download on the App Store"
                  width={983}
                  height={291}
                  unoptimized
                />
              </a>
            </div>
            <p className="techDownload__note">Free to download. Available on iOS and Android.</p>
          </div>
        </div>
      </section>

      <section id="final" className="techFinal">
        <div className="techFinal__bg">
          <Photo
            src={asset("uploads/DSC07090.jpg")}
            alt="Two TracTrac operators on a tryctor at the edge of a field"
            sizes="100vw"
          />
        </div>
        <div className="techFinal__shade" aria-hidden="true" />
        <div className="wrap techFinal__inner">
          <h2>Technology should make access easier.</h2>
          <div className="techFinal__actions">
            <SectionLink className="btn btn--primary btn--lg" href="#download">
              Find Mechanisation
            </SectionLink>
            <SectionLink
              className="btn btn--outlineLight btn--outlineFaint btn--lg"
              href="#download"
            >
              Enlist Your Equipment
            </SectionLink>
            <SectionLink
              className="btn btn--outlineLight btn--outlineFaint btn--lg"
              href="#download"
            >
              Become a Booking Agent
            </SectionLink>
          </div>
        </div>
      </section>
    </main>
  );
}
