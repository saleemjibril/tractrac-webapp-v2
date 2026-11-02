"use client";

import { useState } from "react";
import PersonDialog from "@/components/team/PersonDialog";
import Photo from "@/components/ui/Photo";
import PortraitPlaceholder from "@/components/ui/PortraitPlaceholder";
import {
  TEAM,
  TEAM_DEPARTMENTS,
  personAlt,
  personAnchor,
  type TeamMember,
} from "@/content/team";

export default function TeamDirectory() {
  const [selected, setSelected] = useState<TeamMember | null>(null);

  const selectedIndex = selected ? TEAM.findIndex((person) => person.id === selected.id) : -1;
  const groups = TEAM_DEPARTMENTS.map((dept) => ({
    dept,
    people: TEAM.filter((person) => person.dept === dept),
  })).filter((group) => group.people.length > 0);

  return (
    <>
      <div className="teamDirectory__groups">
        {groups.map(({ dept, people }) => (
          <section
            className="teamDept"
            id={dept.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
            key={dept}
          >
            <h2 className="teamDept__title">{dept}</h2>
            <ul className="teamGrid">
              {people.map((person) => (
                <li id={personAnchor(person)} className="teamCard" key={person.id}>
                  <button
                    type="button"
                    className="teamCard__button"
                    aria-haspopup="dialog"
                    aria-label={`${person.name}${person.title ? `, ${person.title}` : ""}. View profile`}
                    onClick={() => setSelected(person)}
                  >
                    <span className="teamCard__portrait">
                      {person.photo ? (
                        <Photo
                          src={person.photo}
                          alt={personAlt(person)}
                          sizes="(max-width: 880px) 45vw, 22vw"
                        />
                      ) : (
                        <PortraitPlaceholder person={person} />
                      )}
                    </span>
                    <span className="teamCard__name">{person.name}</span>
                    {person.title ? (
                      <span className="teamCard__title">{person.title}</span>
                    ) : null}
                    <span className="srOnly">View profile</span>
                  </button>
                  {person.bio.length || person.linkedin ? (
                    <div className="teamCard__foot">
                      {person.bio.length ? (
                        <button
                          type="button"
                          className="teamCard__profile"
                          aria-haspopup="dialog"
                          aria-label={`View ${person.name}’s profile`}
                          onClick={() => setSelected(person)}
                        >
                          Profile <span aria-hidden="true">+</span>
                        </button>
                      ) : null}
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
                  ) : null}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <PersonDialog
        person={selected}
        index={selectedIndex}
        total={TEAM.length}
        onClose={() => setSelected(null)}
      />
    </>
  );
}
