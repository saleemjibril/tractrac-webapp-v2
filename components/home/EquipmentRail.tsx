"use client";

import { useEffect, useRef } from "react";
import Photo from "@/components/ui/Photo";
import type { EQUIPMENT } from "@/content/home";

type Item = (typeof EQUIPMENT)[number];

export default function EquipmentRail({ items }: { items: Item[] }) {
  const rail = useRef<HTMLDivElement>(null);

  const scroll = (direction: number) => {
    const el = rail.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.55, behavior: "smooth" });
  };

  useEffect(() => {
    const el = rail.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let paused = false;
    let visible = false;
    const advance = () => {
      if (!visible || paused || document.hidden) return;
      const first = el.querySelector<HTMLElement>(".homeRailFigure");
      if (!first) return;
      const gap = Number.parseFloat(getComputedStyle(el).columnGap) || 0;
      const step = first.offsetWidth + gap;
      const max = el.scrollWidth - el.clientWidth;
      if (max <= 4) return;
      if (el.scrollLeft >= max - 4) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: Math.min(step, max - el.scrollLeft), behavior: "smooth" });
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0.25 },
    );
    observer.observe(el);

    const timer = window.setInterval(advance, 4500);
    const pause = () => {
      paused = true;
    };
    const resume = () => {
      paused = false;
    };
    const onFocusOut = (event: FocusEvent) => {
      if (!el.contains(event.relatedTarget as Node | null)) paused = false;
    };

    el.addEventListener("pointerenter", pause);
    el.addEventListener("pointerleave", resume);
    el.addEventListener("focusin", pause);
    el.addEventListener("focusout", onFocusOut);

    return () => {
      window.clearInterval(timer);
      observer.disconnect();
      el.removeEventListener("pointerenter", pause);
      el.removeEventListener("pointerleave", resume);
      el.removeEventListener("focusin", pause);
      el.removeEventListener("focusout", onFocusOut);
    };
  }, []);

  return (
    <>
      <div
        className="homeRail"
        id="eq-rail"
        role="region"
        aria-label="Types of mechanization work"
        tabIndex={0}
        ref={rail}
      >
        {items.map((item) => (
          <figure className="homeRailFigure" key={item.title}>
            <div className="media homeRailMedia">
              <Photo src={item.image} alt={item.alt} sizes="(max-width: 880px) 90vw, 44vw" />
            </div>
            <figcaption>
              <p className="homeRailTitle">{item.title}</p>
              <p className="homeRailBody">{item.body}</p>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="wrap homeRailBtns">
        <button type="button" aria-label="Previous equipment" onClick={() => scroll(-1)}>
          ←
        </button>
        <button type="button" aria-label="Next equipment" onClick={() => scroll(1)}>
          →
        </button>
      </div>
    </>
  );
}
