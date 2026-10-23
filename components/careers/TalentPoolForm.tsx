"use client";

import Link from "next/link";
import { useCallback, useRef, useState } from "react";

const DEGREE_OPTIONS = ["First Class", "Second Class Upper", "Second Class Lower"] as const;
const FILE_TYPES = [".pdf", ".doc", ".docx"];
const MAX_FILE_BYTES = 10 * 1024 * 1024;

function getExtension(name: string) {
  const dot = name.lastIndexOf(".");
  return dot >= 0 ? name.slice(dot).toLowerCase() : "";
}

function isAllowedType(file: File) {
  return FILE_TYPES.includes(getExtension(file.name));
}

function validateFile(file: File | null) {
  if (!file) return "Please upload a file.";
  if (!isAllowedType(file)) return "File must be PDF, DOC or DOCX.";
  if (file.size > MAX_FILE_BYTES) return "File must be 10 MB or less.";
  return null;
}

type FileFieldProps = {
  id: string;
  label: string;
  hint: string;
  file: File | null;
  error?: string;
  onChange: (file: File | null) => void;
  onError: (message: string) => void;
};

function FileField({ id, label, hint, file, error, onChange, onError }: FileFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);

  const pick = useCallback(
    (picked: File | null) => {
      if (!picked) {
        onChange(null);
        return;
      }
      const problem = validateFile(picked);
      if (problem) {
        onError(problem);
        onChange(null);
        return;
      }
      onChange(picked);
    },
    [onChange, onError],
  );

  return (
    <div className="talentField">
      <label className="talentLabel" htmlFor={id}>
        {label} <span className="talentRequired">*</span>
      </label>
      <div
        className="talentDropzone"
        data-dragover={dragOver ? "true" : "false"}
        data-has-file={file ? "true" : "false"}
        role="button"
        tabIndex={0}
        onClick={() => inputRef.current?.click()}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            inputRef.current?.click();
          }
        }}
        onDragOver={(event) => {
          event.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(event) => {
          event.preventDefault();
          setDragOver(false);
          pick(event.dataTransfer.files[0] ?? null);
        }}
      >
        <span className="talentDropzone__title">Drop file here or click to upload</span>
        <span className="talentDropzone__hint">{hint}</span>
        <span className="talentDropzone__meta">PDF, DOC or DOCX · max 10 MB</span>
        {file ? <span className="talentDropzone__file">{file.name}</span> : null}
      </div>
      <input
        ref={inputRef}
        id={id}
        type="file"
        className="talentHidden"
        accept={FILE_TYPES.join(",")}
        onChange={(event) => pick(event.target.files?.[0] ?? null)}
      />
      {error ? <p className="talentError">{error}</p> : null}
    </div>
  );
}

export default function TalentPoolForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [degreeClass, setDegreeClass] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [resume, setResume] = useState<File | null>(null);
  const [certificate, setCertificate] = useState<File | null>(null);
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const clearError = (field: string) => {
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const validate = () => {
    const next: Record<string, string> = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (fullName.trim().length < 2) next.fullName = "Please enter your full name.";
    if (!emailRegex.test(email.trim())) next.email = "Please enter a valid email.";
    if (phone.trim().length < 7) next.phone = "Please enter a valid phone number.";
    if (!degreeClass) next.degreeClass = "Please select your class of degree.";
    if (coverLetter.trim().length < 30)
      next.coverLetter = "Cover letter must be at least 30 characters.";
    const resumeProblem = validateFile(resume);
    if (resumeProblem) next.resume = resumeProblem;
    const certificateProblem = validateFile(certificate);
    if (certificateProblem) next.certificate = certificateProblem;
    if (!consent) next.consent = "You must agree before submitting.";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("idle");
    setMessage("");
    if (!validate() || !resume || !certificate) return;

    const body = new FormData();
    body.append("fullName", fullName.trim());
    body.append("email", email.trim());
    body.append("phone", phone.trim());
    body.append("degreeClass", degreeClass);
    body.append("coverLetter", coverLetter.trim());
    body.append("resume", resume);
    body.append("certificate", certificate);
    body.append("consent", "true");

    setSubmitting(true);
    try {
      const response = await fetch("/api/careers/talent-pool", { method: "POST", body });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        setStatus("error");
        setMessage(
          data.message ?? "Something went wrong. Please try again or email jobs@tractrac.co.",
        );
        return;
      }
      setStatus("success");
      setMessage(
        data.message ?? "Thank you! Your application has been submitted. Our team will be in touch.",
      );
      setFullName("");
      setEmail("");
      setPhone("");
      setDegreeClass("");
      setCoverLetter("");
      setResume(null);
      setCertificate(null);
      setConsent(false);
      setErrors({});
    } catch {
      setStatus("error");
      setMessage("Unable to submit right now. Please try again or email jobs@tractrac.co.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="talentForm">
      <h2 className="talentForm__title">Apply to join our talent pool</h2>

      {status === "success" ? (
        <p className="talentAlert" data-tone="success" role="status">
          {message}
        </p>
      ) : null}
      {status === "error" ? (
        <p className="talentAlert" data-tone="error" role="alert">
          {message}
        </p>
      ) : null}

      <form className="talentForm__body" onSubmit={submit} noValidate>
        <div className="talentField">
          <label className="talentLabel" htmlFor="talent-full-name">
            Full name <span className="talentRequired">*</span>
          </label>
          <input
            id="talent-full-name"
            className="talentInput"
            value={fullName}
            autoComplete="name"
            aria-invalid={errors.fullName ? "true" : undefined}
            onChange={(event) => {
              setFullName(event.target.value);
              clearError("fullName");
            }}
          />
          {errors.fullName ? <p className="talentError">{errors.fullName}</p> : null}
        </div>

        <div className="talentField">
          <label className="talentLabel" htmlFor="talent-email">
            Email <span className="talentRequired">*</span>
          </label>
          <input
            id="talent-email"
            className="talentInput"
            type="email"
            value={email}
            autoComplete="email"
            aria-invalid={errors.email ? "true" : undefined}
            onChange={(event) => {
              setEmail(event.target.value);
              clearError("email");
            }}
          />
          {errors.email ? <p className="talentError">{errors.email}</p> : null}
        </div>

        <div className="talentField">
          <label className="talentLabel" htmlFor="talent-phone">
            Phone <span className="talentRequired">*</span>
          </label>
          <input
            id="talent-phone"
            className="talentInput"
            type="tel"
            value={phone}
            autoComplete="tel"
            aria-invalid={errors.phone ? "true" : undefined}
            onChange={(event) => {
              setPhone(event.target.value);
              clearError("phone");
            }}
          />
          {errors.phone ? <p className="talentError">{errors.phone}</p> : null}
        </div>

        <div className="talentField">
          <label className="talentLabel" htmlFor="talent-degree">
            Class of degree <span className="talentRequired">*</span>
          </label>
          <select
            id="talent-degree"
            className="talentInput talentSelect"
            value={degreeClass}
            aria-invalid={errors.degreeClass ? "true" : undefined}
            onChange={(event) => {
              setDegreeClass(event.target.value);
              clearError("degreeClass");
            }}
          >
            <option value="">Select class of degree</option>
            {DEGREE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.degreeClass ? <p className="talentError">{errors.degreeClass}</p> : null}
        </div>

        <div className="talentField">
          <label className="talentLabel" htmlFor="talent-cover">
            Cover letter <span className="talentRequired">*</span>
          </label>
          <textarea
            id="talent-cover"
            className="talentInput talentTextarea"
            value={coverLetter}
            aria-invalid={errors.coverLetter ? "true" : undefined}
            onChange={(event) => {
              setCoverLetter(event.target.value);
              clearError("coverLetter");
            }}
          />
          {errors.coverLetter ? <p className="talentError">{errors.coverLetter}</p> : null}
        </div>

        <FileField
          id="talent-resume"
          label="Upload CV / resume"
          hint="Maximum file size: 10 MB"
          file={resume}
          error={errors.resume}
          onChange={(file) => {
            setResume(file);
            clearError("resume");
          }}
          onError={(text) => setErrors((current) => ({ ...current, resume: text }))}
        />

        <FileField
          id="talent-certificate"
          label="Upload certificate / statement of result"
          hint="Maximum file size: 10 MB"
          file={certificate}
          error={errors.certificate}
          onChange={(file) => {
            setCertificate(file);
            clearError("certificate");
          }}
          onError={(text) => setErrors((current) => ({ ...current, certificate: text }))}
        />

        <label className="talentConsent">
          <input
            type="checkbox"
            checked={consent}
            onChange={(event) => {
              setConsent(event.target.checked);
              clearError("consent");
            }}
          />
          <span>
            I agree to TracTrac storing and handling my data as described in the{" "}
            <Link href="/privacy-policy">Privacy Policy</Link>.{" "}
            <span className="talentRequired">*</span>
          </span>
        </label>
        {errors.consent ? <p className="talentError">{errors.consent}</p> : null}

        <button type="submit" className="btn btn--primary talentSubmit" disabled={submitting}>
          {submitting ? "Submitting…" : "Submit application"}
        </button>
      </form>
    </div>
  );
}
