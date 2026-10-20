import Image from "next/image";
import Link from "next/link";
import { BRAND, FOOTER_COLUMNS, LEGAL_LINKS, SOCIAL_LINKS } from "@/content/site";

export default function Footer() {
  return (
    <footer className="siteFooter">
      <div className="wrap siteFooter__top">
        <div className="siteFooter__intro">
          <Link href="/" aria-label="TracTrac home">
            <Image src={BRAND.logo} alt="TracTrac" width={129} height={36} />
          </Link>
          <p>{BRAND.blurb}</p>
        </div>
        <div className="siteFooter__app">
          <p className="siteFooter__label">Get the app</p>
          <div className="siteFooter__badges">
            <Image src={BRAND.googlePlay} alt="Get it on Google Play" width={155} height={46} />
            <span className="siteFooter__appStore">
              <span>Download on the</span>
              <strong>App Store</strong>
            </span>
          </div>
        </div>
      </div>

      <div className="wrap siteFooter__columns">
        {FOOTER_COLUMNS.map((column) => (
          <div key={column.title}>
            <p className="siteFooter__label siteFooter__label--dark">{column.title}</p>
            {column.links.map((link) => (
              <Link className="siteFooter__link" href={link.href} key={link.label}>
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="wrap siteFooter__bottom">
        <div className="siteFooter__legal">
          {LEGAL_LINKS.map((link) => (
            <Link href={link.href} key={link.label}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="siteFooter__social">
          {SOCIAL_LINKS.map((link) => (
            <Link href={link.href} key={link.label}>
              {link.label}
            </Link>
          ))}
        </div>
        <p className="siteFooter__copy">© 2026 TracTrac. All rights reserved.</p>
      </div>
    </footer>
  );
}
