import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import "@/styles/contact.css";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to TracTrac about partnerships, programmes, equipment or agent support. Email info@tractrac.co or send the team a message.",
};

export default function ContactPage() {
  return (
    <main id="main" className="pageMain contactPage">
      <section className="contactHero">
        <div className="wrap contactHero__inner">
          <p className="eyebrow eyebrow--light">Contact</p>
          <h1>Let&rsquo;s Talk</h1>
          <p className="contactHero__lede">
            TracTrac is open to partnerships with organisations that share our vision of a more
            mechanised and sustainable Nigeria.
          </p>
        </div>
      </section>

      <section className="contactBody">
        <div className="wrap contactBody__grid">
          <div className="contactDetails">
            <p className="eyebrow">Reach us</p>
            <p className="contactDetails__intro">
              For partnerships, programme enquiries, equipment or agent support, send the team a
              message and we will get back to you.
            </p>

            <div className="contactDetail">
              <p className="contactDetail__label">Email</p>
              <a className="contactDetail__value" href="mailto:info@tractrac.co">
                info@tractrac.co
              </a>
            </div>

            <div className="contactDetail">
              <p className="contactDetail__label">Phone Number</p>
              <a className="contactDetail__value" href="tel:+2348064648720">
                0806 464 8720
              </a>
            </div>
          </div>

          <div className="contactFormCard">
            <h2>Send a message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
