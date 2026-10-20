"use client";

import { useEffect, useRef } from "react";
import Photo from "@/components/ui/Photo";
import { JOB_STEPS } from "@/content/technology";

function clamp(value: number) {
  return Math.max(0, Math.min(1, value));
}

function smoothstep(value: number) {
  const t = clamp(value);
  return t * t * (3 - 2 * t);
}

export default function JobSequence() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const stage = stageRef.current;
    if (!wrap || !stage) return;

    const screens = Array.from(wrap.querySelectorAll<HTMLElement>("[data-job-screen]"));
    const rows = Array.from(wrap.querySelectorAll<HTMLElement>("[data-job-row]"));
    const nums = Array.from(wrap.querySelectorAll<HTMLElement>("[data-job-num]"));
    const caps = Array.from(wrap.querySelectorAll<HTMLElement>("[data-job-cap]"));
    const n = screens.length;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      screens.forEach((screen, index) => {
        screen.style.opacity = index === 0 ? "1" : "0";
        screen.style.visibility = index === 0 ? "visible" : "hidden";
      });
      nums.forEach((num, index) => {
        num.style.transform = `translateY(${index * 100}%)`;
        num.style.opacity = index === 0 ? "1" : "0";
      });
      caps.forEach((cap, index) => {
        cap.style.opacity = index === 0 ? "1" : "0";
        cap.style.visibility = index === 0 ? "visible" : "hidden";
      });
      rows.forEach((row) => {
        row.style.opacity = "1";
        const bar = row.querySelector<HTMLElement>("[data-job-bar]");
        if (bar) bar.style.width = "100%";
      });
      return;
    }

    let frame = 0;
    const update = () => {
      const rect = wrap.getBoundingClientRect();
      const viewport = window.innerHeight || stage.offsetHeight;
      const total = wrap.offsetHeight - Math.min(stage.offsetHeight, viewport);
      const progress = total > 0 ? clamp(-rect.top / total) : 0;
      const position = progress * (n - 1);
      const seg = Math.min(n - 1, Math.floor(position));
      const k = seg >= n - 1 ? 0 : smoothstep((position - seg - 0.55) / 0.45);
      const f = seg + k;

      screens.forEach((screen, index) => {
        const opacity = index === seg ? 1 : index === seg + 1 ? k : 0;
        const y = index === seg + 1 ? (1 - k) * 9 : 0;
        screen.style.opacity = opacity.toFixed(3);
        screen.style.transform = `translate3d(0,${y.toFixed(2)}%,0)`;
        screen.style.visibility = opacity > 0.002 ? "visible" : "hidden";
      });

      nums.forEach((num, index) => {
        const distance = index - f;
        num.style.transform = `translate3d(0,${(distance * 100).toFixed(2)}%,0)`;
        num.style.opacity = clamp(1 - Math.abs(distance)).toFixed(3);
      });

      caps.forEach((cap, index) => {
        const distance = index - f;
        cap.style.transform = `translate3d(0,${(distance * 22).toFixed(2)}px,0)`;
        cap.style.opacity = clamp(1 - Math.abs(distance) * 1.8).toFixed(3);
        cap.style.visibility = Math.abs(distance) < 0.6 ? "visible" : "hidden";
      });

      rows.forEach((row, index) => {
        const weight = index === seg ? 1 - k : index === seg + 1 ? k : 0;
        row.style.opacity = (0.36 + 0.64 * weight).toFixed(3);
        const bar = row.querySelector<HTMLElement>("[data-job-bar]");
        if (bar) bar.style.width = `${(clamp(position - index + 1) * 100).toFixed(2)}%`;
      });
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("load", onScroll);
    update();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("load", onScroll);
    };
  }, []);

  return (
    <section id="job" className="techJob">
      <div className="wrap techJob__wrap" ref={wrapRef}>
        <div className="techJob__stage" ref={stageRef}>
          <div className="techJob__left">
            <div>
              <p className="eyebrow">One job, start to finish</p>
              <h2>See how the work moves.</h2>
            </div>
            <div className="techJob__rows">
              {JOB_STEPS.map((step, index) => (
                <div data-job-row={index} key={step.label}>
                  <div className="techJob__rowLabel">
                    <span>{step.number}</span>
                    <span>{step.label}</span>
                  </div>
                  <div className="techJob__barTrack">
                    <div data-job-bar />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="techJob__phone">
            {JOB_STEPS.map((step, index) => (
              <div data-job-screen={index} key={step.label}>
                <Photo src={step.screen} alt={step.alt} sizes="(max-width: 980px) 60vw, 32vw" priority={index === 0} />
              </div>
            ))}
            <div className="techPhone__notch" aria-hidden="true" />
          </div>

          <div className="techJob__right">
            <div className="techJob__numRow">
              <div className="techJob__numWindow">
                {JOB_STEPS.map((step, index) => (
                  <span
                    data-job-num={index}
                    key={step.label}
                    style={{ transform: `translateY(${index * 100}%)` }}
                  >
                    {step.number}
                  </span>
                ))}
              </div>
              <span className="techJob__of">/ 05</span>
            </div>
            <div className="techJob__captions">
              {JOB_STEPS.map((step, index) => (
                <div data-job-cap={index} key={step.label}>
                  <p className="techJob__capTitle">{step.label}</p>
                  <p className="techJob__capBody">{step.short}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="techJob__spacer" aria-hidden="true" />
      </div>
    </section>
  );
}
