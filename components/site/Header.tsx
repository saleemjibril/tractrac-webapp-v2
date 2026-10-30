"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from "react";
import { BRAND, CTAS, NAV, type NavItem } from "@/content/site";

const ACTIVE_PREFIX: Record<string, string> = {
  Solutions: "/solutions",
  Technology: "/technology",
  Programs: "/programmes",
  Partners: "/partners",
};

function isLinkActive(label: string, href: string, pathname: string) {
  const path = href.split("#")[0];
  if (!path || path === "/") return false;
  if (pathname === path) return true;
  return path !== "/technology" && pathname.startsWith(`${path}/`);
}

function isGroupActive(item: NavItem, pathname: string) {
  if (item.label === "Company") {
    return ["/about", "/careers", "/contact"].some(
      (path) => pathname === path || pathname.startsWith(`${path}/`),
    );
  }
  if (item.label === "Resources") {
    return ["/blog", "/resources"].some(
      (path) => pathname === path || pathname.startsWith(`${path}/`),
    );
  }
  const prefix = item.href ?? ACTIVE_PREFIX[item.label];
  if (!prefix) return false;
  if (prefix === "/") return false;
  return pathname === prefix || pathname.startsWith(`${prefix}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const mobileRef = useRef<HTMLDivElement>(null);

  const forceSolid = pathname === "/programmes/h2o";
  const mobileForcesSolid = mobileOpen && pathname !== "/" && pathname !== "/technology";
  const solid = scrolled || mobileForcesSolid || forceSolid;
  const shadow = pathname === "/" || pathname === "/technology";

  const onPrimaryCtaClick = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    const [path, hash] = CTAS.primary.href.split("#");
    if (!hash || pathname !== path) return;
    const target = document.getElementById(hash);
    if (!target) return;
    event.preventDefault();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
    if (window.location.hash !== `#${hash}`) {
      window.history.replaceState(null, "", `#${hash}`);
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 90);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpenMenu(null);
      setMobileOpen(false);
    };
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Element | null;
      if (!target?.closest(".siteHeader__item")) setOpenMenu(null);
    };
    const onPopState = () => {
      setMobileOpen(false);
      setOpenMenu(null);
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("popstate", onPopState);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("popstate", onPopState);
    };
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    mobileRef.current?.querySelector<HTMLElement>("button, a")?.focus();
    return () => {
      document.body.style.overflow = original;
    };
  }, [mobileOpen]);

  return (
    <div className="siteHeaderHost">
    <header
      className="siteHeader"
      data-solid={solid ? "true" : "false"}
      data-shadow={shadow && solid ? "true" : "false"}
    >
      <div className="wrap siteHeader__bar">
        <Link
          className="siteHeader__logo"
          href="/"
          aria-label="TracTrac home"
          onClick={() => setMobileOpen(false)}
        >
          <Image src={BRAND.logo} alt="TracTrac" width={123} height={34} priority />
        </Link>

        <nav className="siteHeader__nav" aria-label="Main">
          {NAV.map((item) => {
            if (!item.links) {
              return (
                <div className="siteHeader__item" key={item.label}>
                  <Link
                    className="siteHeader__link"
                    href={item.href ?? "/"}
                    aria-current={
                      isLinkActive(item.label, item.href ?? "", pathname) ? "page" : undefined
                    }
                  >
                    {item.label}
                  </Link>
                </div>
              );
            }

            const open = openMenu === item.label;
            return (
              <div
                className="siteHeader__item"
                key={item.label}
                data-open={open ? "true" : "false"}
                onPointerEnter={() => setOpenMenu(item.label)}
                onPointerLeave={() => setOpenMenu(null)}
                onFocus={() => setOpenMenu(item.label)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                    setOpenMenu(null);
                  }
                }}
              >
                {item.href ? (
                  <Link
                    className="siteHeader__button"
                    href={item.href}
                    aria-haspopup="true"
                    aria-expanded={open}
                    aria-current={isGroupActive(item, pathname) ? "page" : undefined}
                    onClick={() => setOpenMenu(null)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    type="button"
                    className="siteHeader__button"
                    aria-haspopup="true"
                    aria-expanded={open}
                    aria-current={isGroupActive(item, pathname) ? "page" : undefined}
                    onClick={() => setOpenMenu(open ? null : item.label)}
                  >
                    {item.label}
                  </button>
                )}
                <div
                  className={`siteHeader__menu${item.wide ? " siteHeader__menu--wide" : ""}`}
                >
                  {item.wide && item.feature ? (
                    <Link
                      className="siteHeader__feature"
                      href={item.feature.href}
                      onClick={() => setOpenMenu(null)}
                    >
                      <span className="siteHeader__featureEyebrow">
                        {item.feature.description}
                      </span>
                      <span>{item.feature.label}</span>
                    </Link>
                  ) : null}
                  <div className={item.wide ? "siteHeader__menuGrid" : undefined}>
                    {item.links.map((link) => (
                      <Link
                        className="siteHeader__menuLink"
                        href={link.href}
                        key={link.label}
                        onClick={() => setOpenMenu(null)}
                      >
                        <span>{link.label}</span>
                        {link.description ? <small>{link.description}</small> : null}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        <div className="siteHeader__ctas">
          <Link className="siteHeader__partner" href={CTAS.secondary.href}>
            {CTAS.secondary.label}
          </Link>
          <Link className="btn btn--primary" href={CTAS.primary.href} onClick={onPrimaryCtaClick}>
            {CTAS.primary.label}
          </Link>
        </div>

        <button
          type="button"
          className="siteHeader__mobBtn"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="tt-mob"
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span aria-hidden="true" />
        </button>
      </div>

      {mobileOpen ? (
        <div className="siteMobile" id="tt-mob" ref={mobileRef}>
          <div className="wrap siteMobile__inner">
            {NAV.filter((item) => item.links).map((item) => {
              const expanded = mobileSection === item.label;
              return (
                <div className="siteMobile__group" key={item.label}>
                  <button
                    type="button"
                    className="siteMobile__groupBtn"
                    aria-expanded={expanded}
                    onClick={() => setMobileSection(expanded ? null : item.label)}
                  >
                    <span>{item.label}</span>
                    <span aria-hidden="true">{expanded ? "–" : "+"}</span>
                  </button>
                  {expanded ? (
                    <div className="siteMobile__panel">
                      {item.wide ? (
                        <Link
                          className="siteMobile__sub"
                          href="/programmes"
                          onClick={() => setMobileOpen(false)}
                        >
                          All programs
                        </Link>
                      ) : null}
                      {(item.links ?? []).map((link) => (
                        <Link
                          className="siteMobile__sub"
                          href={link.href}
                          key={link.label}
                          onClick={() => setMobileOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
            {NAV.filter((item) => !item.links).map((item) => (
              <Link
                className="siteMobile__flat"
                href={item.href ?? "/"}
                key={item.label}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="siteMobile__ctas">
              <Link
                className="btn btn--primary btn--noHover"
                href={CTAS.primary.href}
                onClick={(event) => {
                  onPrimaryCtaClick(event);
                  setMobileOpen(false);
                }}
              >
                {CTAS.primary.label}
              </Link>
              <Link
                className="btn btn--outline btn--noHover"
                href={CTAS.secondary.href}
                onClick={() => setMobileOpen(false)}
              >
                {CTAS.secondary.label}
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
    </div>
  );
}
