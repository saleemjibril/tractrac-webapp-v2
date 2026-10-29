"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FAQS } from "@/content/faqs";

const STORAGE_KEY = "tt-faq-history-v1";

type FaqEntry = {
  id: string;
  question: string;
  answer: string;
  createdAt: string;
};

function createId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`;
}

function isFaqEntry(value: unknown): value is FaqEntry {
  if (!value || typeof value !== "object") return false;
  const entry = value as Partial<FaqEntry>;
  return (
    typeof entry.id === "string" &&
    typeof entry.question === "string" &&
    typeof entry.answer === "string" &&
    typeof entry.createdAt === "string"
  );
}

const FALLBACK_COPY =
  "We could not find an answer to this in the FAQ. The TracTrac team can help. Send your question to the team through the contact page.";

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);
  const [query, setQuery] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [pending, setPending] = useState<string | null>(null);
  const [history, setHistory] = useState<FaqEntry[]>([]);
  const [failedQuestion, setFailedQuestion] = useState<string | null>(null);
  const [openAsked, setOpenAsked] = useState<Set<string>>(new Set());
  const [hydrated, setHydrated] = useState(false);
  const [copyStatus, setCopyStatus] = useState<{ id: string; text: string } | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Deferred so hydration finishes before localStorage state is applied.
    const timer = window.setTimeout(() => {
      try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed: unknown = JSON.parse(raw);
          if (Array.isArray(parsed)) setHistory(parsed.filter(isFaqEntry));
        }
      } catch {
        // Storage can be unavailable in private modes.
      }
      setHydrated(true);
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
    } catch {
      // If storage is full or blocked, the thread still works for this visit.
    }
  }, [history, hydrated]);

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = query.trim();

    if (value.length < 5) {
      setInvalid(true);
      inputRef.current?.focus();
      return;
    }
    if (pending) return;

    setInvalid(false);
    setFailedQuestion(null);
    setPending(value);
    setCopyStatus(null);

    let answered = false;

    try {
      const response = await fetch("/api/faq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: value }),
      });
      const data = await response.json().catch(() => ({}));
      const answer =
        data?.available && typeof data.answer === "string" ? data.answer.trim() : "";

      if (answer) {
        answered = true;
        const entry: FaqEntry = {
          id: createId(),
          question: value,
          answer,
          createdAt: new Date().toISOString(),
        };
        setHistory((current) => [...current, entry]);
        // Only the answer that was just received starts expanded.
        setOpenAsked(new Set([entry.id]));
      } else {
        setFailedQuestion(value);
      }
    } catch {
      setFailedQuestion(value);
    } finally {
      setPending(null);
      if (answered) setQuery("");
      inputRef.current?.focus();
    }
  };

  const toggleAsked = (id: string) => {
    setOpenAsked((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const copyQuestion = async (question: string, id: string) => {
    try {
      await navigator.clipboard.writeText(question);
      setCopyStatus({ id, text: "Copied." });
    } catch {
      setCopyStatus({
        id,
        text: "Copy failed. Please select and copy your question.",
      });
    }
    window.setTimeout(() => setCopyStatus(null), 2500);
  };

  return (
    <section id="faq" className="homeFaq">
      <div className="wrap homeFaq__inner">
        <div className="homeFaq__intro">
          <p className="eyebrow">FAQ</p>
          <h2 className="homeFaq__title">Got questions?</h2>
          <p className="prose muted">
            Find answers to common questions about TracTrac Plus and how it helps connect farmers
            to mechanisation services.
          </p>
        </div>

        <div>
          <div className="faqList">
            {FAQS.map((faq, index) => {
              const isOpen = open === index;
              return (
                <div className="faqItem" key={faq.question}>
                  <h3>
                    <button
                      type="button"
                      id={`faq-q${index}`}
                      className="faqQuestion"
                      aria-expanded={isOpen}
                      aria-controls={`faq-a${index}`}
                      onClick={() => setOpen(isOpen ? null : index)}
                    >
                      <span>{faq.question}</span>
                      <svg
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                        data-open={isOpen}
                        className="faqIcon"
                      >
                        <path
                          d="M3.5 6 L8 10.5 L12.5 6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </h3>
                  <div
                    id={`faq-a${index}`}
                    role="region"
                    aria-labelledby={`faq-q${index}`}
                    className="faqAnswer"
                    data-open={isOpen}
                  >
                    <div>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            {history.map((entry) => {
              const isOpen = openAsked.has(entry.id);
              const questionId = `faq-asked-q-${entry.id}`;
              const answerId = `faq-asked-a-${entry.id}`;
              return (
                <div className="faqItem faqItem--asked" key={entry.id}>
                  <h3>
                    <button
                      type="button"
                      id={questionId}
                      className="faqQuestion"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => toggleAsked(entry.id)}
                    >
                      <span>{entry.question}</span>
                      <svg
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                        data-open={isOpen}
                        className="faqIcon"
                      >
                        <path
                          d="M3.5 6 L8 10.5 L12.5 6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </h3>
                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={questionId}
                    className="faqAnswer"
                    data-open={isOpen}
                  >
                    <div>
                      <p>{entry.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            {pending ? (
              <div className="faqItem faqItem--asked" aria-busy="true">
                <h3 className="faqQuestion faqQuestion--pending">{pending}</h3>
                <div className="faqAnswer" data-open="true">
                  <div>
                    <p className="faqThinking">Looking for an answer…</p>
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          <form className="faqAsk" onSubmit={submit} noValidate aria-busy={pending !== null}>
            <p className="faqAsk__title">Still have a question?</p>
            <p className="faqAsk__lede">
              Ask us something else and we&rsquo;ll help you find the right information.
            </p>
            <label className="srOnly" htmlFor="faq-input">
              Your question
            </label>
            <div className="faqAsk__field">
              <input
                id="faq-input"
                ref={inputRef}
                name="question"
                type="text"
                autoComplete="off"
                maxLength={500}
                placeholder={pending ? "Looking for an answer…" : "Type your question here…"}
                aria-describedby="faq-msg"
                aria-invalid={invalid}
                value={query}
                disabled={pending !== null}
                onChange={(event) => {
                  setQuery(event.target.value);
                  if (invalid) setInvalid(false);
                  if (failedQuestion) {
                    setFailedQuestion(null);
                    setCopyStatus(null);
                  }
                }}
              />
              <button
                type="submit"
                aria-label="Submit your question"
                disabled={pending !== null}
              >
                <svg viewBox="0 0 16 16" aria-hidden="true">
                  <path
                    d="M8 13 V3 M3.5 7.5 L8 3 L12.5 7.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div id="faq-msg" aria-live="polite" className="faqAsk__msg">
              {invalid ? (
                <p className="faqAsk__error">Please type your question before submitting.</p>
              ) : null}
            </div>

            {failedQuestion ? (
              <div className="faqAsk__results" aria-live="polite">
                <p>{FALLBACK_COPY}</p>
                <div className="faqAsk__actions">
                  <button
                    type="button"
                    className="faqAsk__copy"
                    onClick={() => copyQuestion(failedQuestion, "failed")}
                  >
                    Copy my question
                  </button>
                  <Link className="btn btn--primary btn--noHover" href="/contact">
                    Contact Us
                  </Link>
                  <span aria-live="polite" className="faqAsk__copyStatus">
                    {copyStatus?.id === "failed" ? copyStatus.text : ""}
                  </span>
                </div>
              </div>
            ) : null}
          </form>

        </div>
      </div>
    </section>
  );
}
