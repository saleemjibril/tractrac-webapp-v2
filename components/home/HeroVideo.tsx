"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function HeroVideo({ src, poster }: { src: string; poster: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const reveal = () => {
      video.style.opacity = "0.66";
      setReady(true);
    };

    if (reduced) {
      video.pause();
      reveal();
      return;
    }

    if (video.readyState >= 2) reveal();
    else video.addEventListener("loadeddata", reveal, { once: true });
    void video.play().catch(() => {});

    return () => video.removeEventListener("loadeddata", reveal);
  }, []);

  return (
    <>
      {ready ? null : (
        <Image
          className="homeHero__poster"
          src={poster}
          alt=""
          fill
          sizes="100vw"
          priority
        />
      )}
      <video
        ref={ref}
        className="homeHero__video"
        src={src}
        poster={poster}
        preload="auto"
        autoPlay
        loop
        muted
        playsInline
        aria-label="TracTrac operators preparing farmland with tractors"
      />
    </>
  );
}
