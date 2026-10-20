"use client";

import { useRef } from "react";
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

  return (
    <>
      <div
        className="homeRail"
        id="eq-rail"
        role="region"
        aria-label="Types of mechanisation work"
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
