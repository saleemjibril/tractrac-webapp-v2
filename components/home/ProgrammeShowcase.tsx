"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Photo from "@/components/ui/Photo";
import { SHOWCASES } from "@/content/home";

const ROTATE_MS = 9000;
const SLIDE_MS = 3600;

export default function ProgrammeShowcase() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [slide, setSlide] = useState(0);

  const go = (direction: number) => {
    setSlide(0);
    setActive((current) => (current + direction + SHOWCASES.length) % SHOWCASES.length);
  };

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(
      () => setActive((current) => (current === 0 ? 1 : 0)),
      ROTATE_MS,
    );
    return () => window.clearInterval(timer);
  }, [paused]);

  useEffect(() => {
    if (active !== 0 || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(
      () => setSlide((current) => (current + 1) % SHOWCASES[0].slides.length),
      SLIDE_MS,
    );
    return () => window.clearInterval(timer);
  }, [active, paused]);

  return (
    <div
      className="programmeShowcase"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPaused(false);
      }}
    >
      <div className="programmePanes">
        {SHOWCASES.map((showcase, index) => (
          <article
            className="programmePane"
            data-active={active === index}
            aria-hidden={active !== index}
            inert={active !== index}
            key={showcase.name}
          >
            <div className="programmeCopy">
              <p className="programmeName">{showcase.name}</p>
              <h3 className="h3">{showcase.title}</h3>
              <p className="programmeSubtitle">{showcase.subtitle}</p>
              {showcase.paragraphs.map((paragraph) => (
                <p className="prose muted programmePara" key={paragraph}>
                  {paragraph}
                </p>
              ))}
              {showcase.flow.length ? (
                <div className="programmeFlow" key={active}>
                  {showcase.flow.map((item, flowIndex) => (
                    <span className="programmeFlowItem" key={item}>
                      <span
                        className={
                          flowIndex === showcase.flow.length - 1 ? "isAccent" : undefined
                        }
                      >
                        {item}
                      </span>
                      {flowIndex < showcase.flow.length - 1 ? (
                        <span aria-hidden="true" className="programmeFlowArrow">
                          →
                        </span>
                      ) : null}
                    </span>
                  ))}
                </div>
              ) : null}
              <Link className="btn btn--primary btn--inkHover" href={showcase.href}>
                {showcase.cta}
              </Link>
            </div>

            <div className="programmeMedia">
              {showcase.slides.length > 1 ? (
                <div className="programmeSlides">
                  {showcase.slides.map((item, slideIndex) => (
                    <div
                      className="programmeSlide"
                      data-active={slide === slideIndex}
                      key={item.image}
                    >
                      <Photo
                        src={item.image}
                        alt={item.alt}
                        sizes="(max-width: 880px) 90vw, 45vw"
                      />
                    </div>
                  ))}
                  <div className="programmeSlideDots">
                    {showcase.slides.map((item, slideIndex) => (
                      <button
                        type="button"
                        aria-label={`Show photograph ${slideIndex + 1}`}
                        data-active={slide === slideIndex}
                        key={item.image}
                        onClick={() => setSlide(slideIndex)}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="media media--rounded programmeSingle">
                  <Photo
                    src={showcase.slides[0].image}
                    alt={showcase.slides[0].alt}
                    sizes="(max-width: 880px) 90vw, 45vw"
                  />
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="programmeNav">
        <button type="button" aria-label="Previous featured program" onClick={() => go(-1)}>
          <span aria-hidden="true">←</span>
        </button>
        <button type="button" aria-label="Next featured program" onClick={() => go(1)}>
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}
