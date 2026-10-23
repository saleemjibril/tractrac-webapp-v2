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

    const update = () => {
      const rect = wrap.getBoundingClientRect();
      const stageRect = stage.getBoundingClientRect();
      const viewport = window.innerHeight || stageRect.height;
      const total = rect.height - Math.min(stageRect.height, viewport);
      const enter = clamp((viewport - rect.top) / (viewport * 0.85));
      const progress = total > 0 ? clamp(-rect.top / total) : 0;
      // One scroll segment per mockup, so the last mockup gets a full turn.
      const position = progress * n;
      const seg = Math.min(n - 1, Math.floor(position));
      const local = clamp(position - seg);
      const transition = seg >= n - 1 ? 0 : smoothstep((local - 0.9) / 0.1);
      const mobile = mobileQuery.matches;

      items.forEach((item, index) => {
        const active = mobile ? 1 : index === seg ? 1 - transition : index === seg + 1 ? transition : 0;
        const rise = mobile ? 0 : (1 - smoothstep(enter * 1.5 - index * 0.2)) * 56;
        item.style.opacity = (0.42 + 0.58 * active).toFixed(3);
        item.style.transform = `translate3d(0,${rise.toFixed(1)}px,0) scale(${(0.94 + 0.06 * active).toFixed(4)})`;
        const bar = item.querySelector<HTMLElement>("[data-ag-bar]");
        if (bar) {
          bar.style.width = `${(mobile ? 100 : clamp(position - index) * 100).toFixed(2)}%`;
        }
      });

      videos.forEach((video, index) => {
        if (!video) return;

        if (mobile) {
          if (visible) {
            if (video.paused) void video.play().catch(() => {});
          } else if (!video.paused) {
            video.pause();
          }
          return;
        }

        if (!video.paused) video.pause();
        if (!visible) return;

        const duration = video.duration;
        if (!Number.isFinite(duration) || duration <= 0) return;

        // Scroll drives the recording: the active video plays through as its
        // segment is scrolled, then holds its final frame. Only the active and
        // next videos are seeked, so reverse scrubbing isn't competing with
        // background seeks on the other recordings.
        if (index !== seg && index !== seg + 1) return;
        // Let the current seek finish before issuing another one; otherwise
        // rapid scrolling (especially upward) aborts each seek mid-flight.
        if (video.seeking) return;

        const end = Math.max(0, duration - 0.04);
        const target = index === seg ? local * end : 0;
        if (Math.abs(video.currentTime - target) > 0.02) {
          video.currentTime = target;
        }
      });
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

    videos.forEach((video) => {
      video?.addEventListener("loadedmetadata", onScroll);
      video?.addEventListener("loadeddata", onScroll);
      video?.addEventListener("seeked", onScroll);
    });

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      videos.forEach((video) => {
        video?.removeEventListener("loadedmetadata", onScroll);
        video?.removeEventListener("loadeddata", onScroll);
        video?.removeEventListener("seeked", onScroll);
        video?.pause();
      });
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
                    preload="auto"
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
