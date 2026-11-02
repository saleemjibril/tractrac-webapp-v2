import type { Metadata } from "next";
import Link from "next/link";
import TalentPoolForm from "@/components/careers/TalentPoolForm";
import "@/styles/careers.css";
import "@/styles/talent-pool.css";

export const metadata: Metadata = {
  title: "Join our talent pool",
  description:
    "Submit an open application to join the TracTrac talent pool and be considered for future opportunities.",
};

export default function TalentPoolPage() {
  return (
    <main id="main" className="pageMain talentPage">
      <section className="talentHero">
        <div className="wrap">
          <Link className="talentHero__back" href="/careers">
            ← Back to careers
          </Link>
          <p className="eyebrow">Careers</p>
          <h1 className="display2 talentHero__title">Join our talent pool</h1>
          <p className="talentHero__lede">
            TracTrac welcomes talented people from diverse fields. Share your details and we will
            reach out when a matching opportunity opens.
          </p>
        </div>
      </section>

      <section className="talentBody">
        <div className="wrap talentBody__grid">
          <div className="talentIntro" data-reveal>
            <p className="eyebrow">Open application</p>
            <h2>There is more work to do.</h2>
            <p>
              Are you passionate about making a difference and contributing your skills to
              meaningful work in agricultural mechanization? TracTrac welcomes talented
              professionals from diverse fields to join our network.
            </p>
            <p>
              By submitting your application, you will be considered for future opportunities to
              collaborate with us and drive impactful initiatives that create lasting change for
              smallholder farmers.
            </p>
            <p>
              Apply today and take the first step toward being part of a dynamic team shaping the
              future of mechanization in Nigeria and across Africa.
            </p>
          </div>

          <TalentPoolForm />
        </div>
      </section>
    </main>
  );
}
