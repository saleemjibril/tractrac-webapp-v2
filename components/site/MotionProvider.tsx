"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const EASE = "cubic-bezier(.22,.61,.36,1)";

function formatValue(el: HTMLElement, value: number) {
  const decimals = Number(el.dataset.decimals ?? 0);
  const formatted = value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
  el.textContent = `${el.dataset.prefix ?? ""}${formatted}${el.dataset.suffix ?? ""}`;
}

/**
 * Applies the design's scroll behaviour to server-rendered markup:
 * reveal-on-scroll, staggered entrances and count-ups.
 * Server-rendered text always holds the final value, so no-JS is complete.
 */
export default function MotionProvider() {
  const pathname = usePathname();

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observers: IntersectionObserver[] = [];

    if (!reduced && !document.hidden) {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            const el = entry.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "none";
            revealObserver.unobserve(el);
          }
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
      );
      observers.push(revealObserver);

      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        const delay = Number(el.dataset.delay ?? 0);
        const kind = el.dataset.reveal;
        const parent = el.parentElement;
        if (parent && getComputedStyle(parent).overflow === "visible") {
          parent.style.overflow = "hidden";
        }
        el.style.opacity = "0";
        el.style.transform =
          kind === "img" ? "scale(1.04)" : kind === "x" ? "scaleX(0)" : "translateY(18px)";
        if (kind === "x") el.style.transformOrigin = "left";
        el.style.transition = `opacity 700ms ${EASE} ${delay}ms, transform ${
          kind === "img" ? 1200 : 800
        }ms ${EASE} ${delay}ms`;
        revealObserver.observe(el);
      });
    }

    const counters = Array.from(
      document.querySelectorAll<HTMLElement>("[data-count]"),
    );
    if (!reduced) {
      counters.forEach((el) => {
        el.textContent = `${el.dataset.prefix ?? ""}0${el.dataset.suffix ?? ""}`;
      });
      const counterObserver = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            const el = entry.target as HTMLElement;
            if (el.dataset.done === "1") continue;
            el.dataset.done = "1";
            const target = Number(el.dataset.count ?? 0);
            const duration = 1400;
            const start = performance.now();
            const tick = (now: number) => {
              const progress = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - progress, 3);
              formatValue(el, target * eased);
              if (progress < 1) {
                requestAnimationFrame(tick);
              } else {
                formatValue(el, target);
              }
            };
            requestAnimationFrame(tick);
            counterObserver.unobserve(el);
          }
        },
        { threshold: 0.4 },
      );
      observers.push(counterObserver);
      counters.forEach((el) => counterObserver.observe(el));
    }

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [pathname]);

  return null;
}
