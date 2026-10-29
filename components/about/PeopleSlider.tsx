"use client";

import { useEffect, useState } from "react";
import Photo from "@/components/ui/Photo";
import type { AboutPeoplePhoto } from "@/content/about-people";

const INTERVAL = 5200;

export default function PeopleSlider({ photos }: { photos: AboutPeoplePhoto[] }) {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [tabHidden, setTabHidden] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const onVisibilityChange = () => setTabHidden(document.hidden);
    onVisibilityChange();
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  const paused = reducedMotion || userPaused || hovered || focused || tabHidden;

  useEffect(() => {
    if (paused || photos.length < 2) return;
    const timer = window.setTimeout(() => {
      setIndex((current) => (current + 1) % photos.length);
    }, INTERVAL);
    return () => window.clearTimeout(timer);
  }, [paused, index, photos.length]);

  if (!photos.length) return null;

  const go = (next: number) => {
    const total = photos.length;
    setIndex(((next % total) + total) % total);
  };

  return (
    <div
      className="peopleSlider"
      role="region"
      aria-roledescription="carousel"
      aria-label="TracTrac people at work"
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setFocused(false);
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          go(index - 1);
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          go(index + 1);
        }
      }}
    >
      <div className="peopleSlider__viewport">
        <div
          className="peopleSlider__track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {photos.map((photo, i) => (
            <figure className="peopleSlider__slide" key={photo.src} aria-hidden={i !== index}>
              <Photo
                src={photo.src}
                alt={photo.alt}
                sizes="(max-width: 880px) 100vw, 88vw"
                priority={i === 0}
              />
            </figure>
          ))}
        </div>
      </div>

      <div className="peopleSlider__bar">
        <div className="peopleSlider__dots">
          {photos.map((photo, i) => (
            <button
              key={photo.src}
              type="button"
              className="peopleSlider__dot"
              aria-label={`Go to photo ${i + 1} of ${photos.length}`}
              aria-current={i === index ? "true" : undefined}
              onClick={() => go(i)}
            />
          ))}
        </div>

        <div className="peopleSlider__controls">
          <button type="button" aria-label="Previous photo" onClick={() => go(index - 1)}>
            <span aria-hidden="true">←</span>
          </button>
          {!reducedMotion ? (
            <button
              type="button"
              aria-label={userPaused ? "Play slideshow" : "Pause slideshow"}
              aria-pressed={userPaused}
              onClick={() => setUserPaused((value) => !value)}
            >
              <span aria-hidden="true">{userPaused ? "▶" : "❚❚"}</span>
            </button>
          ) : null}
          <button type="button" aria-label="Next photo" onClick={() => go(index + 1)}>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <p className="srOnly" aria-live={paused ? "polite" : "off"}>
        Photo {index + 1} of {photos.length}
      </p>
    </div>
  );
}
