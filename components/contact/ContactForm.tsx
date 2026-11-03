"use client";

import { useState } from "react";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const EMPTY: FormValues = { name: "", email: "", message: "" };

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  const update = (name: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [name]: value }));
    if (errors[name]) setErrors((current) => ({ ...current, [name]: "" }));
    if (status === "error") setStatus("idle");
  };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next: Partial<Record<keyof FormValues, string>> = {};
    if (values.name.trim().length < 3) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (values.message.trim().length < 15) {
      next.message = "Please add a little more detail to your message.";
    }
    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus("sending");
    setServerMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const json = (await response.json().catch(() => null)) as
        | { status?: string; message?: string }
        | null;

      if (!response.ok || json?.status === "error") {
        setStatus("error");
        setServerMessage(
          json?.message ?? "We could not send your message. Please try again.",
        );
        return;
      }

      setStatus("sent");
      setValues(EMPTY);
    } catch {
      setStatus("error");
      setServerMessage("We could not send your message. Please try again.");
    }
  };

  if (status === "sent") {
    return (
      <div className="contactFormSuccess" role="status">
        <p className="contactFormSuccess__title">Thank you — your message has been sent.</p>
        <p>The TracTrac team will get back to you shortly.</p>
        <p>
          For anything urgent, email{" "}
          <a href="mailto:info@tractrac.co">info@tractrac.co</a>.
        </p>
      </div>
    );
  }

  return (
    <form className="contactForm" onSubmit={submit} noValidate>
      <label className="contactForm__field">
        <span>Name</span>
        <input
          name="name"
          type="text"
          autoComplete="name"
          maxLength={200}
          value={values.name}
          onChange={(event) => update("name", event.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
        />
        {errors.name ? (
          <small className="contactForm__error" id="contact-name-error">
            {errors.name}
          </small>
        ) : null}
      </label>

      <label className="contactForm__field">
        <span>Email Address</span>
        <input
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(event) => update("email", event.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
        />
        {errors.email ? (
          <small className="contactForm__error" id="contact-email-error">
            {errors.email}
          </small>
        ) : null}
      </label>

      <label className="contactForm__field">
        <span>Message</span>
        <textarea
          name="message"
          rows={6}
          maxLength={5000}
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
        />
        {errors.message ? (
          <small className="contactForm__error" id="contact-message-error">
            {errors.message}
          </small>
        ) : null}
      </label>

      {status === "error" && serverMessage ? (
        <p className="contactForm__serverError" role="alert">
          {serverMessage}
        </p>
      ) : null}

      <button
        className="btn btn--primary contactForm__submit"
        type="submit"
        disabled={status === "sending"}
        aria-busy={status === "sending"}
      >
        {status === "sending" ? "Sending…" : "Send"}
      </button>
    </form>
  );
}
