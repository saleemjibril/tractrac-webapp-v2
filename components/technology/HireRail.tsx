"use client";

import { useEffect, useRef } from "react";
import Photo from "@/components/ui/Photo";
import { HIRE_ITEMS } from "@/content/technology";

export default function HireRail() {
  const rail = useRef<HTMLDivElement>(null);

  const move = (direction: number) => {
    const el = rail.current;
    if (!el) return;
    const figures = Array.from(el.querySelectorAll<HTMLElement>("figure"));
    if (!figures.length) return;
    const current = el.scrollLeft;
    const targets = figures.map((figure) => figure.offsetLeft - el.offsetLeft);
    let next =
      direction > 0
        ? targets.find((target) => target > current + 4)
        : [...targets].reverse().find((target) => target < current - 4);
    if (next === undefined) next = direction > 0 ? el.scrollWidth : 0;
    el.scrollTo({ left: Math.max(0, next) });
  };

  useEffect(() => {
    const el = rail.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let paused = false;
    let visible = false;
    const advance = () => {
      if (!visible || paused || document.hidden) return;
      if (el.scrollWidth - el.clientWidth <= 4) return;
      const figures = Array.from(el.querySelectorAll<HTMLElement>("figure"));
      if (!figures.length) return;
      const current = el.scrollLeft;
      const targets = figures.map((figure) => figure.offsetLeft - el.offsetLeft);
      const next = targets.find((target) => target > current + 4);
      el.scrollTo({ left: Math.max(0, next ?? 0), behavior: "smooth" });
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
    <section id="hire" className="techHire">
      <div className="wrap techHire__head">
        <div>
          <p className="eyebrow">What you can hire</p>
          <h2>Machinery for the job you need done.</h2>
        </div>
        <p>
          From tractors and farm implements to labour-saving devices, find what you need for every
          season.
        </p>
      </div>
      <div
        className="techHire__rail"
        id="hire-rail"
        role="region"
        aria-label="What you can hire through TracTrac"
        tabIndex={0}
        ref={rail}
      >
        {HIRE_ITEMS.map((item) => (
          <figure key={item.title}>
            <div className="media techHire__media">
              <Photo src={item.image} alt={item.alt} sizes="(max-width: 880px) 80vw, 36vw" />
            </div>
            <figcaption>
              <p>{item.kicker}</p>
              <p>{item.title}</p>
              <p>{item.body}</p>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="wrap techHire__buttons">
        <button type="button" aria-label="Previous category" onClick={() => move(-1)}>
          ←
        </button>
        <button type="button" aria-label="Next category" onClick={() => move(1)}>
          →
        </button>
      </div>
    </section>
  );
}
