"use client";

import type { MouseEvent, ReactNode } from "react";

type SectionLinkProps = {
  href: `#${string}`;
  className?: string;
  children: ReactNode;
};

/**
 * In-page link that scrolls every time it is clicked. A plain hash link does
 * nothing on a second click because the URL hash has not changed.
 */
export default function SectionLink({ href, className, children }: SectionLinkProps) {
  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const target = document.getElementById(href.slice(1));
    if (!target) return;

    event.preventDefault();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
    if (window.location.hash !== href) {
      window.history.replaceState(null, "", href);
    }
  };

  return (
    <a className={className} href={href} onClick={onClick}>
      {children}
    </a>
  );
}
