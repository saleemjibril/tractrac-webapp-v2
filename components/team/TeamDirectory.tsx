"use client";

import { useEffect, useRef, useState } from "react";
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
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (selected && !dialog.open) dialog.showModal();
    if (!selected && dialog.open) dialog.close();
  }, [selected]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onClose = () => setSelected(null);
    dialog.addEventListener("close", onClose);
    return () => dialog.removeEventListener("close", onClose);
  }, []);

  const count = String(TEAM.length).padStart(2, "0");
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
                      {person.bio.length ? <span>Profile +</span> : null}
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

      <dialog
        ref={dialogRef}
        className="teamDialog"
        aria-labelledby="dlg-name"
        onClick={(event) => {
          if (event.target === event.currentTarget) setSelected(null);
        }}
      >
        {selected ? (
          <div className="teamDialog__inner">
            <div className="teamDialog__bar">
              <span>
                {String(selectedIndex + 1).padStart(2, "0")} / {count}
              </span>
              <button
                type="button"
                aria-label="Close profile"
                onClick={() => setSelected(null)}
              >
                ×
              </button>
            </div>
            <div className="teamDialog__body">
              <div className="teamDialog__portrait">
                {selected.photo ? (
                  <Photo src={selected.photo} alt={personAlt(selected)} sizes="300px" />
                ) : (
                  <PortraitPlaceholder person={selected} />
                )}
              </div>
              {selected.title ? <p className="teamDialog__role">{selected.title}</p> : null}
              <h2 id="dlg-name">{selected.name}</h2>
              <div className="teamDialog__bio">
                {selected.bio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {selected.linkedin ? (
                <a
                  className="teamDialog__linkedin"
                  href={selected.linkedin}
                  target="_blank"
                  rel="noopener"
                  aria-label={`${selected.name} on LinkedIn (opens in a new tab)`}
                >
                  <span aria-hidden="true">in</span>LinkedIn
                </a>
              ) : null}
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
