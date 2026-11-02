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
    const row = wrap.querySelector<HTMLElement>(".techAgent__row");
    const phones = items.map((item) =>
      item.querySelector<HTMLElement>(".techAgent__phone"),
    );
    const videos = items.map((item) => item.querySelector<HTMLVideoElement>("video"));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobileQuery = window.matchMedia("(max-width: 980px)");
    const n = items.length;
    let mobileIndex = 0;

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
      const mobile = mobileQuery.matches;
      let seg = 0;
      let local = 0;
      let transition = 0;
      let enter = 0;
      let progress = 0;

      if (mobile) {
        // On mobile the row is a one-at-a-time carousel; the figure nearest
        // the centre of the viewport is the one playing.
        if (row) {
          const rowRect = row.getBoundingClientRect();
          const centre = rowRect.left + rowRect.width / 2;
          let closest = Number.POSITIVE_INFINITY;
          items.forEach((item, index) => {
            const rect = item.getBoundingClientRect();
            const distance = Math.abs(rect.left + rect.width / 2 - centre);
            if (distance < closest) {
              closest = distance;
              mobileIndex = index;
            }
          });
        }
      } else {
        const rect = wrap.getBoundingClientRect();
        const stageRect = stage.getBoundingClientRect();
        const viewport = window.innerHeight || stageRect.height;
        const total = rect.height - Math.min(stageRect.height, viewport);
        enter = clamp((viewport - rect.top) / (viewport * 0.85));
        progress = total > 0 ? clamp(-rect.top / total) : 0;
        // One scroll segment per mockup, so the last mockup gets a full turn.
        const position = progress * n;
        seg = Math.min(n - 1, Math.floor(position));
        local = clamp(position - seg);
        transition = seg >= n - 1 ? 0 : smoothstep((local - 0.9) / 0.1);
      }

      items.forEach((item, index) => {
        const active = mobile ? 1 : index === seg ? 1 - transition : index === seg + 1 ? transition : 0;
        const rise = mobile ? 0 : (1 - smoothstep(enter * 1.5 - index * 0.2)) * 56;
        item.style.opacity = (mobile ? (index === mobileIndex ? 1 : 0.55) : 0.42 + 0.58 * active).toFixed(3);
        item.style.transform = `translate3d(0,${rise.toFixed(1)}px,0)`;
        const phone = phones[index];
        if (phone) {
          phone.style.transform = `scale(${(mobile ? 1 : 0.86 + 0.26 * active).toFixed(4)})`;
        }
        const bar = item.querySelector<HTMLElement>("[data-ag-bar]");
        if (bar) {
          bar.style.width = mobile
            ? index === mobileIndex
              ? "100%"
              : "0%"
            : `${(clamp(progress - index) * 100).toFixed(2)}%`;
        }
      });

      videos.forEach((video) => {
        if (video) video.loop = !mobile;
      });

      if (mobile) {
        videos.forEach((video, index) => {
          if (!video) return;
          if (!visible) {
            if (!video.paused) video.pause();
            return;
          }
          if (index === mobileIndex) {
            if (video.ended) video.currentTime = 0;
            if (video.paused) void video.play().catch(() => {});
          } else if (!video.paused) {
            video.pause();
          }
        });
        return;
      }

      videos.forEach((video, index) => {
        if (!video) return;

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

    const scrollToIndex = (index: number) => {
      const figure = items[index];
      if (!row || !figure) return;
      const rowRect = row.getBoundingClientRect();
      const figureRect = figure.getBoundingClientRect();
      row.scrollTo({
        left: row.scrollLeft + figureRect.left - rowRect.left,
        behavior: "smooth",
      });
    };

    const onEnded = (event: Event) => {
      if (!mobileQuery.matches || !visible) return;
      const video = event.currentTarget as HTMLVideoElement;
      const index = videos.indexOf(video);
      if (index !== mobileIndex) return;
      scrollToIndex((index + 1) % n);
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
      video?.addEventListener("ended", onEnded);
    });

    row?.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      row?.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      videos.forEach((video) => {
        video?.removeEventListener("loadedmetadata", onScroll);
        video?.removeEventListener("loadeddata", onScroll);
        video?.removeEventListener("seeked", onScroll);
        video?.removeEventListener("ended", onEnded);
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
