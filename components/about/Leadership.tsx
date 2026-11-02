"use client";

import { useState } from "react";
import PersonDialog from "@/components/team/PersonDialog";
import Photo from "@/components/ui/Photo";
import PortraitPlaceholder from "@/components/ui/PortraitPlaceholder";
import { LEADERSHIP, personAlt, type TeamMember } from "@/content/team";

function Portrait({ person }: { person: TeamMember }) {
  if (person.photo) {
    return <Photo src={person.photo} alt={personAlt(person)} sizes="(max-width: 880px) 90vw, 30vw" />;
  }
  return <PortraitPlaceholder person={person} />;
}

export default function Leadership() {
  const [selected, setSelected] = useState<TeamMember | null>(null);
  const [ceo, ...leaders] = LEADERSHIP;
  const total = String(LEADERSHIP.length).padStart(2, "0");
  const selectedIndex = selected ? LEADERSHIP.findIndex((person) => person.id === selected.id) : -1;

  if (!ceo) return null;

  return (
    <div>
      <article className="aboutCeo">
        <div className="aboutCeo__media">
          <div className="aboutCeo__backdrop" aria-hidden="true">
            <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
              <g fill="none" stroke="rgba(246,242,236,0.2)" strokeWidth="1">
                <path d="M0 118 L182 92 L400 136" />
                <path d="M0 304 L148 278 L262 322 L400 294" />
                <path d="M182 92 L148 278 L128 500" />
                <path d="M262 322 L296 0" />
                <path d="M262 322 L244 500" />
                <path d="M0 420 L128 404" />
              </g>
              <g fill="#F36A02">
                <circle cx="182" cy="92" r="3" />
                <circle cx="148" cy="278" r="3" />
                <circle cx="262" cy="322" r="3" />
                <circle cx="128" cy="404" r="3" />
              </g>
            </svg>
            <span>01 / {total}</span>
          </div>
          <div className="aboutCeo__portrait">
            <Portrait person={ceo} />
          </div>
        </div>
        <div className="aboutCeo__copy">
          <p className="aboutCeo__title">{ceo.title}</p>
          <h3 className="aboutCeo__name">{ceo.name}</h3>
          <p className="aboutCeo__lead">{ceo.bio[0]}</p>
          <div className="aboutCeo__rest">
            {ceo.bio.slice(1).map((paragraph) => (
              <p className="prose muted" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
          {ceo.linkedin ? (
            <a
              className="aboutLinkedin"
              href={ceo.linkedin}
              target="_blank"
              rel="noopener"
              aria-label={`${ceo.name} on LinkedIn (opens in a new tab)`}
            >
              <span aria-hidden="true">in</span>LinkedIn
            </a>
          ) : null}
        </div>
      </article>

      <div className="aboutLeadersHead">
        <h3>Leadership team</h3>
      </div>

      <ul className="aboutLeaders">
        {leaders.map((person, index) => {
          const rest = person.bio.slice(1);
          return (
            <li key={person.id}>
              <article className="aboutLeader">
                <div className="aboutLeader__portrait">
                  <Portrait person={person} />
                </div>
                <div className="aboutLeader__meta">
                  <span>{String(index + 2).padStart(2, "0")}</span>
                  {person.linkedin ? (
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener"
                      aria-label={`${person.name} on LinkedIn (opens in a new tab)`}
                    >
                      in
                    </a>
                  ) : null}
                </div>
                <h4>{person.name}</h4>
                <p className="aboutLeader__title">{person.title}</p>
                <p className="aboutLeader__lead">{person.bio[0]}</p>
                {rest.length ? (
                  <button
                    type="button"
                    className="aboutLeader__more"
                    aria-haspopup="dialog"
                    aria-label={`Read the full bio of ${person.name}`}
                    onClick={() => setSelected(person)}
                  >
                    Read full bio
                    <span aria-hidden="true">+</span>
                  </button>
                ) : null}
              </article>
            </li>
          );
        })}
      </ul>

      <PersonDialog
        person={selected}
        index={selectedIndex}
        total={LEADERSHIP.length}
        onClose={() => setSelected(null)}
      />
    </div>
  );
}
