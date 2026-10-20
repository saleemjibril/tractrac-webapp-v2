import type { TeamMember } from "@/content/team";

export default function PortraitPlaceholder({ person }: { person: TeamMember }) {
  return (
    <div
      className="portraitPlaceholder"
      role="img"
      aria-label={`Portrait of ${person.name} needed`}
    >
      <span className="portraitPlaceholder__ring" aria-hidden="true" />
      <div className="portraitPlaceholder__empty" aria-hidden="true">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="m21 15-5-5L5 21" />
        </svg>
        <span>Portrait of {person.name} needed</span>
      </div>
    </div>
  );
}
