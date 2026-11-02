import type { IconName } from "@/content/programmes";

type HomeIcon =
  | "sprout"
  | "book"
  | "wrench"
  | "people"
  | "banknote"
  | "megaphone"
  | "phone"
  | "chat"
  | "plant"
  | "fertilizer"
  | "sprayer"
  | "planter"
  | "harrow"
  | "disc"
  | "trailer"
  | "thresher"
  | "treadle"
  | "soil"
  | "women"
  | "demand"
  | "fulfilled";
export type AnyIconName = IconName | HomeIcon;

const ICONS: Record<AnyIconName, React.ReactNode> = {
  sprout: (
    <>
      <path d="M4 27h24" />
      <path d="M16 27V14" />
      <path d="M16 15c-4.4 0-7-2.4-7-6.4 4.4 0 7 2.4 7 6.4z" />
      <path d="M16 18c4.4 0 7-2.4 7-6.4-4.4 0-7 2.4-7 6.4z" />
    </>
  ),
  book: (
    <>
      <path d="M16 10.5v15" />
      <path d="M16 10.5C13.5 8.6 10.4 7.7 6 7.7v14.6c4.4 0 7.5.9 10 2.8" />
      <path d="M16 10.5c2.5-1.9 5.6-2.8 10-2.8v14.6c-4.4 0-7.5.9-10 2.8" />
    </>
  ),
  wrench: (
    <>
      <rect x="3" y="8" width="26" height="17" rx="2" />
      <path d="M11 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
    </>
  ),
  people: (
    <>
      <circle cx="16" cy="9" r="3.4" />
      <circle cx="7" cy="19.5" r="3" />
      <circle cx="25" cy="19.5" r="3" />
      <path d="M11.2 18.6a5.6 5.6 0 0 1 9.6 0" />
      <path d="M2.6 28a4.9 4.9 0 0 1 8.8 0" />
      <path d="M20.6 28a4.9 4.9 0 0 1 8.8 0" />
    </>
  ),
  banknote: (
    <>
      <rect x="3.5" y="9" width="25" height="14" rx="1" />
      <circle cx="16" cy="16" r="3.4" />
      <path d="M8 13v6M24 13v6" />
    </>
  ),
  megaphone: (
    <>
      <path d="M6 13v6l14 6V7z" />
      <path d="M6 13H4v6h2" />
      <path d="M10 20.5V26h3v-4" />
      <path d="M24 12a5 5 0 010 8" />
    </>
  ),
  phone: (
    <>
      <rect x="8" y="3" width="16" height="26" rx="2.5" />
      <path d="M14 25h4" />
      <circle cx="16" cy="12" r="3" />
      <path d="M11 20a5 5 0 0110 0" />
    </>
  ),
  chat: (
    <>
      <path d="M6 7h20v14H14l-6 5v-5H6z" />
      <path d="M11 12h10M11 16h6" />
    </>
  ),
  plant: (
    <>
      <path d="M4 22c4-2 8-2 12 0s8 2 12 0" />
      <path d="M4 27c4-2 8-2 12 0s8 2 12 0" />
      <path d="M16 17V7" />
      <path d="M16 11c0-3-2.5-5-6-5 0 3 2.5 5 6 5zM16 9c0-2.5 2-4 5-4 0 2.5-2 4-5 4z" />
    </>
  ),
  fertilizer: (
    <>
      <path d="M9 6h10v6l3 3v11H6V15l3-3z" />
      <path d="M9 6V4h10v2" />
      <path d="M22 18h3l2 3" />
      <circle cx="26" cy="25" r=".6" />
      <circle cx="23" cy="27" r=".6" />
      <circle cx="27" cy="28" r=".6" />
    </>
  ),
  sprayer: (
    <>
      <rect x="7" y="7" width="11" height="17" rx="3" />
      <path d="M10 7V5h5v2" />
      <path d="M18 20h4l5-8" />
      <path d="M27 12l1.5-1.5M27 12l2 .5M27 12l.5-2" />
      <path d="M9 24v3M16 24v3" />
    </>
  ),
  planter: (
    <>
      <path d="M16 28V16" />
      <path d="M16 18c0-5-3.5-8-9-8 0 5 3.5 8 9 8z" />
      <path d="M16 15c0-4 3-7 8-7 0 4-3 7-8 7z" />
      <path d="M8 28h16" />
    </>
  ),
  harrow: (
    <>
      <path d="M4 10h24" />
      <path d="M8 10v12l-1.5 3M14 10v12l-1.5 3M20 10v12l-1.5 3M26 10v12l-1.5 3" />
      <path d="M4 16h24" />
    </>
  ),
  disc: (
    <>
      <circle cx="11" cy="21" r="6" />
      <circle cx="22" cy="21" r="6" />
      <path d="M11 15V7h11v8" />
      <path d="M5 7h22" />
    </>
  ),
  trailer: (
    <>
      <path d="M5 10h19l-2 11H7z" />
      <circle cx="10" cy="25" r="2.5" />
      <circle cx="19" cy="25" r="2.5" />
      <path d="M24 17h4" />
    </>
  ),
  thresher: (
    <>
      <path d="M16 28V6" />
      <path d="M16 10c-2-1-3-3-3-5M16 10c2-1 3-3 3-5M16 16c-3-1-4-3-4-6M16 16c3-1 4-3 4-6M16 22c-3-1-4.5-3-4.5-6M16 22c3-1 4.5-3 4.5-6" />
    </>
  ),
  treadle: (
    <>
      <path d="M6 26h20" />
      <path d="M9 26l3-9h8l3 9" />
      <path d="M16 17V8" />
      <path d="M12 8h8" />
      <path d="M24 12c1.5 2 1.5 3.5 0 5-1.5-1.5-1.5-3 0-5z" />
    </>
  ),
  soil: (
    <>
      <path d="M13 4h6M14 4v9l-7 12a2 2 0 002 3h14a2 2 0 002-3l-7-12V4" />
      <path d="M10 21h12" />
    </>
  ),
  women: (
    <>
      <circle cx="16" cy="11" r="6" />
      <path d="M16 17v11M12 24h8" />
    </>
  ),
  demand: (
    <>
      <path d="M5 25l7-7 5 5 10-11" />
      <path d="M21 12h6v6" />
    </>
  ),
  fulfilled: (
    <>
      <circle cx="16" cy="16" r="12" />
      <path d="M11 16.5l3.5 3.5 7-8" />
    </>
  ),
  recruitment: (
    <>
      <circle cx="14" cy="14" r="8" />
      <path d="M20 20l7 7" />
      <circle cx="14" cy="12" r="2.6" />
      <path d="M9.6 18.4a5 5 0 0 1 8.8 0" />
    </>
  ),
  training: (
    <>
      <path d="M16 10.5v15" />
      <path d="M16 10.5C13.5 8.6 10.4 7.7 6 7.7v14.6c4.4 0 7.5.9 10 2.8" />
      <path d="M16 10.5c2.5-1.9 5.6-2.8 10-2.8v14.6c-4.4 0-7.5.9-10 2.8" />
    </>
  ),
  certificate: (
    <>
      <circle cx="16" cy="12" r="7" />
      <path d="M12.8 12l2.2 2.2 4.2-4.4" />
      <path d="M11.5 17.5L9.5 28l6.5-3.5 6.5 3.5-2-10.5" />
    </>
  ),
  network: (
    <>
      <circle cx="16" cy="9" r="3.4" />
      <circle cx="7" cy="19.5" r="3" />
      <circle cx="25" cy="19.5" r="3" />
      <path d="M11.2 18.6a5.6 5.6 0 0 1 9.6 0" />
      <path d="M2.6 28a4.9 4.9 0 0 1 8.8 0" />
      <path d="M20.6 28a4.9 4.9 0 0 1 8.8 0" />
    </>
  ),
  "phone-check": (
    <>
      <rect x="9" y="3.5" width="14" height="25" rx="2" />
      <path d="M14 24.5h4" />
      <path d="M12.5 13.5l2.6 2.6 4.6-4.8" />
    </>
  ),
  chart: (
    <>
      <path d="M4 27h24" />
      <path d="M7 27v-6M13 27v-10M19 27v-8M25 27V11" />
      <path d="M5 16l7-6 6 4 9-8" />
      <path d="M22 6h5v5" />
    </>
  ),
  eye: (
    <>
      <path d="M3 16s5-8.5 13-8.5S29 16 29 16s-5 8.5-13 8.5S3 16 3 16z" />
      <circle cx="16" cy="16" r="4" />
    </>
  ),
  tractor: (
    <>
      <circle cx="9" cy="22" r="5" />
      <circle cx="24.5" cy="23.5" r="3.5" />
      <path d="M4.5 17V11h9l2.5 6h7l3 3.5" />
      <path d="M13.5 11V6.5h-4" />
      <path d="M14 22h7" />
    </>
  ),
  factory: (
    <>
      <rect x="4" y="10" width="24" height="16" />
      <path d="M12 10V6h8v4" />
      <path d="M4 17h24" />
      <path d="M14.5 17v3h3v-3" />
    </>
  ),
  land: (
    <>
      <path d="M3 24l6-4 7 3 7-4 6 3" />
      <path d="M3 28l6-4 7 3 7-4 6 3" />
      <path d="M16 17V7" />
      <path d="M16 11c-3 0-5-2-5-5 3 0 5 2 5 5zM16 11c3 0 5-2 5-5-3 0-5 2-5 5z" />
    </>
  ),
  home: (
    <>
      <path d="M4 15L16 5l12 10" />
      <path d="M7 13v14h18V13" />
      <circle cx="13" cy="19" r="2.4" />
      <circle cx="19" cy="19" r="2.4" />
      <path d="M10 27a3 3 0 0 1 6 0M16 27a3 3 0 0 1 6 0" />
    </>
  ),
  briefcase: (
    <>
      <rect x="4" y="10" width="24" height="16" />
      <path d="M12 10V6h8v4" />
      <path d="M4 17h24" />
      <path d="M14.5 17v3h3v-3" />
    </>
  ),
};

export default function Icon({
  name,
  className,
  size = "1em",
}: {
  name: AnyIconName;
  className?: string;
  size?: number | string;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
      className={className ? `ttIcon ${className}` : "ttIcon"}
      style={{ width: size, height: size }}
    >
      {ICONS[name]}
    </svg>
  );
}
