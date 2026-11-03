"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

const FIELDS = [
  {
    name: "name",
    label: "Name",
    type: "text",
    required: true,
    autoComplete: "name",
    maxLength: 200,
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    required: true,
    autoComplete: "email",
    maxLength: 200,
  },
  {
    name: "organization",
    label: "Organization",
    type: "text",
    autoComplete: "organization",
    maxLength: 200,
  },
  {
    name: "position",
    label: "Position in the Organization",
    type: "text",
    autoComplete: "organization-title",
    maxLength: 200,
  },
  {
    name: "phone",
    label: "Phone number",
    type: "tel",
    autoComplete: "tel",
    maxLength: 30,
  },
] as const;

type Values = Record<string, string>;

const EMPTY: Values = Object.fromEntries(FIELDS.map((field) => [field.name, ""])) as Values;

export default function ProgrammeContactForm() {
  const pathname = usePathname();
  const [values, setValues] = useState<Values>({ ...EMPTY, message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");
  const [sent, setSent] = useState(false);

  const update = (name: string, value: string) => {
    setValues((current) => ({ ...current, [name]: value }));
    if (errors[name]) setErrors((current) => ({ ...current, [name]: "" }));
    if (status === "error") {
      setStatus("idle");
      setServerMessage("");
    }
  };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
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

    setStatus("sending");
    setServerMessage("");

    const programme = pathname.split("/").filter(Boolean).pop() ?? null;

    try {
      const response = await fetch("/api/enquiries/programme", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, programme }),
      });
      const data = (await response.json().catch(() => null)) as
        | { status?: string; message?: string }
        | null;

      if (!response.ok || data?.status === "error") {
        setStatus("error");
        setServerMessage(
          data?.message ?? "We could not send your message. Please try again.",
        );
        return;
      }

      setSent(true);
    } catch {
      setStatus("error");
      setServerMessage("We could not send your message. Please try again.");
    }
  };

  if (sent) {
    return (
      <div className="programmeForm__success" role="status">
        <p>Thank you — your message has been sent.</p>
        <p>The TracTrac team will get back to you shortly.</p>
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
            maxLength={field.maxLength}
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
          maxLength={5000}
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
      {status === "error" && serverMessage ? (
        <p className="programmeForm__error" role="alert">
          {serverMessage}
        </p>
      ) : null}
      <div className="programmeForm__submit">
        <button
          className="btn btn--primary btn--noHover"
          type="submit"
          disabled={status === "sending"}
          aria-busy={status === "sending"}
        >
          {status === "sending" ? "Sending…" : "Submit"}
        </button>
      </div>
    </form>
  );
}
