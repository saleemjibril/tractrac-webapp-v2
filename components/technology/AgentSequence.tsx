"use client";

import { useEffect, useRef } from "react";
import { AGENT_ITEMS } from "@/content/technology";

function clamp(value: number) {
  return Math.max(0, Math.min(1, value));
}

function smoothstep(value: number) {
  const t = clamp(value);
  return t * t * (3 - 2 * t);
}

export default function AgentSequence() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const stage = stageRef.current;
    if (!wrap || !stage) return;

    const items = Array.from(wrap.querySelectorAll<HTMLElement>("[data-ag-item]"));
    const videos = items.map((item) => item.querySelector<HTMLVideoElement>("video"));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobileQuery = window.matchMedia("(max-width: 980px)");
    const n = items.length;

    videos.forEach((video) => {
      if (!video) return;
      video.muted = true;
      video.defaultMuted = true;
      video.loop = true;
      video.playsInline = true;
    });

    if (reduced) {
      videos.forEach((video) => video?.pause());
      items.forEach((item) => {
        item.style.opacity = "1";
        item.style.transform = "none";
        const bar = item.querySelector<HTMLElement>("[data-ag-bar]");
        if (bar) bar.style.width = "100%";
      });
      return;
    }

    let frame = 0;
    let visible = true;
    let lastKey = "";

    const playActive = (key: string) => {
      if (key === lastKey) return;
      lastKey = key;
      videos.forEach((video, index) => {
        if (!video) return;
        if (key === "all" || key === String(index)) {
          void video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    };

    const update = () => {
      const rect = wrap.getBoundingClientRect();
      const viewport = window.innerHeight || stage.offsetHeight;
      const total = wrap.offsetHeight - Math.min(stage.offsetHeight, viewport);
      const enter = clamp((viewport - rect.top) / (viewport * 0.85));
      const progress = total > 0 ? clamp(-rect.top / total) : 0;
      const position = progress * (n - 1);
      const seg = Math.min(n - 1, Math.floor(position));
      const k = seg >= n - 1 ? 0 : smoothstep((position - seg - 0.55) / 0.45);
      const mobile = mobileQuery.matches;

      items.forEach((item, index) => {
        const active = mobile ? 1 : index === seg ? 1 - k : index === seg + 1 ? k : 0;
        const rise = mobile ? 0 : (1 - smoothstep(enter * 1.5 - index * 0.2)) * 56;
        item.style.opacity = (0.42 + 0.58 * active).toFixed(3);
        item.style.transform = `translate3d(0,${rise.toFixed(1)}px,0) scale(${(0.94 + 0.06 * active).toFixed(4)})`;
        const bar = item.querySelector<HTMLElement>("[data-ag-bar]");
        if (bar) bar.style.width = `${(mobile ? 100 : clamp(position - index + 1) * 100).toFixed(2)}%`;
      });

      const key = !visible ? "none" : mobile ? "all" : String(k > 0.5 ? seg + 1 : seg);
      playActive(key);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visible = entry.isIntersecting;
          if (!visible) {
            videos.forEach((video) => video?.pause());
          }
          onScroll();
        }
      },
      { rootMargin: "10% 0px 10% 0px" },
    );
    observer.observe(wrap);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      videos.forEach((video) => video?.pause());
    };
  }, []);

  return (
    <section id="agent" className="techAgent">
      <div className="wrap techAgent__wrap" ref={wrapRef}>
        <div className="techAgent__stage" ref={stageRef}>
          <div className="techAgent__head">
            <div>
              <p className="eyebrow">TracTrac Agent</p>
              <h2>The operational side of the job.</h2>
            </div>
            <p>
              For agents and equipment owners running the work once a booking comes in.
            </p>
          </div>
          <div className="techAgent__row">
            {AGENT_ITEMS.map((item, index) => (
              <figure data-ag-item={index} key={item.title}>
                <div className="techAgent__phone">
                  <video
                    src={item.video}
                    preload="metadata"
                    muted
                    loop
                    playsInline
                    aria-label={item.alt}
                  />
                  <div className="techPhone__notch" aria-hidden="true" />
                </div>
                <figcaption>
                  <div className="techAgent__barTrack">
                    <div data-ag-bar />
                  </div>
                  <p>
                    <span>{item.number}</span>
                    <span>{item.title}</span>
                  </p>
                  <p>{item.body}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
        <div className="techAgent__spacer" aria-hidden="true" />
      </div>
    </section>
  );
}
