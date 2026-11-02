"use client";

import { useEffect, useRef } from "react";
import Photo from "@/components/ui/Photo";
import PortraitPlaceholder from "@/components/ui/PortraitPlaceholder";
import { personAlt, type TeamMember } from "@/content/team";

type PersonDialogProps = {
  person: TeamMember | null;
  index?: number;
  total?: number;
  onClose: () => void;
};

export default function PersonDialog({ person, index, total, onClose }: PersonDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (person && !dialog.open) dialog.showModal();
    if (!person && dialog.open) dialog.close();
  }, [person]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const handleClose = () => onClose();
    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, [onClose]);

  const showCounter = index !== undefined && total !== undefined;

  return (
    <dialog
      ref={dialogRef}
      className="teamDialog"
      aria-labelledby={person ? "dlg-name" : undefined}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      {person ? (
        <div className="teamDialog__inner">
          <div className={`teamDialog__bar${showCounter ? "" : " teamDialog__bar--plain"}`}>
            {showCounter ? (
              <span>
                {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
            ) : null}
            <button type="button" aria-label="Close profile" onClick={onClose}>
              ×
            </button>
          </div>
          <div className="teamDialog__body">
            <div className="teamDialog__portrait">
              {person.photo ? (
                <Photo src={person.photo} alt={personAlt(person)} sizes="300px" />
              ) : (
                <PortraitPlaceholder person={person} />
              )}
            </div>
            {person.title ? <p className="teamDialog__role">{person.title}</p> : null}
            <h2 id="dlg-name">{person.name}</h2>
            <div className="teamDialog__bio">
              {person.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </dialog>
  );
}
