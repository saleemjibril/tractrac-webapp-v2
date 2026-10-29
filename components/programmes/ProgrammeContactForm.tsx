"use client";

import Link from "next/link";
import { useState } from "react";

const FIELDS = [
  { name: "name", label: "Name", type: "text", required: true, autoComplete: "name" },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    required: true,
    autoComplete: "email",
  },
  {
    name: "organization",
    label: "Organization",
    type: "text",
    autoComplete: "organization",
  },
  {
    name: "position",
    label: "Position in the Organization",
    type: "text",
    autoComplete: "organization-title",
  },
  {
    name: "phone",
    label: "Phone number",
    type: "tel",
    autoComplete: "tel",
  },
] as const;

type Values = Record<string, string>;

const EMPTY: Values = Object.fromEntries(FIELDS.map((field) => [field.name, ""])) as Values;

export default function ProgrammeContactForm() {
  const [values, setValues] = useState<Values>({ ...EMPTY, message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const update = (name: string, value: string) => {
    setValues((current) => ({ ...current, [name]: value }));
    if (errors[name]) setErrors((current) => ({ ...current, [name]: "" }));
  };

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next: Record<string, string> = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) next.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!values.message.trim()) next.message = "Please add a short message.";
    setErrors(next);
    if (Object.keys(next).length) return;

    // No backend yet: this is the single integration point for a CRM or email service.
    setSent(true);
  };

  if (sent) {
    return (
      <div className="programmeForm__success" role="status">
        <p>Thank you — your message is ready for the TracTrac team.</p>
        <p>
          Online delivery is not connected yet. To reach the team now, use the{" "}
          <Link href="/contact">contact page</Link>.
        </p>
      </div>
    );
  }

  return (
    <form className="programmeForm" onSubmit={submit} noValidate>
      {FIELDS.map((field) => (
        <label className="programmeForm__field" key={field.name}>
          <span>{field.label}</span>
          <input
            name={field.name}
            type={field.type}
            autoComplete={"autoComplete" in field ? field.autoComplete : undefined}
            value={values[field.name] ?? ""}
            onChange={(event) => update(field.name, event.target.value)}
            aria-invalid={Boolean(errors[field.name])}
            aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
          />
          {errors[field.name] ? (
            <small className="programmeForm__error" id={`${field.name}-error`}>
              {errors[field.name]}
            </small>
          ) : null}
        </label>
      ))}
      <label className="programmeForm__field programmeForm__field--wide">
        <span>Message</span>
        <textarea
          name="message"
          rows={5}
          value={values.message ?? ""}
          onChange={(event) => update("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message ? (
          <small className="programmeForm__error" id="message-error">
            {errors.message}
          </small>
        ) : null}
      </label>
      <div className="programmeForm__submit">
        <button className="btn btn--primary btn--noHover" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}
