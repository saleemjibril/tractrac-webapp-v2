"use client";

import { useRef } from "react";
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

  return (
    <section id="hire" className="techHire">
      <div className="wrap techHire__head">
        <div>
          <p className="eyebrow">What you can hire</p>
          <h2>Machinery for the job you need done.</h2>
        </div>
        <p>
          From land preparation to planting and crop protection, find the machinery and services
          you need for the work ahead.
        </p>
      </div>
      <div className="wrap techHire__intro">
        <div>
          <p>Tractors and mechanisation services</p>
          <p>
            Hire a Tractor lists machines by type, brand, capacity and location &mdash; utility,
            compact, row crop, 4WD, crawler, orchard, rotary tiller and garden tractors, from 50 to
            135 HP.
          </p>
        </div>
        <div>
          <p>Agro-tools, implements and other services</p>
          <p>
            Other Services covers the smaller equipment booked the same way: sprayers, applicators,
            planters, threshers and the implements matched to a tractor.
          </p>
        </div>
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
