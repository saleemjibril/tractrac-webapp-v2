"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { FAQS } from "@/content/faqs";

const STOP_WORDS = new Set(
  "a an and are can do does for from how i in is it my of on or the to what where who why with you your tractrac plus".split(
    " ",
  ),
);

function words(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 2 && !STOP_WORDS.has(word));
}

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);
  const [query, setQuery] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [results, setResults] = useState<number[]>([]);
  const [copyStatus, setCopyStatus] = useState("");
  const questionRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = query.trim();
    if (value.length < 5) {
      setInvalid(true);
      setSubmitted(false);
      setCopyStatus("");
      inputRef.current?.focus();
      return;
    }

    setInvalid(false);
    setSubmitted(true);
    setCopyStatus("");
    try {
      sessionStorage.setItem("tt-faq-question", value);
    } catch {
      // Storage can be unavailable in private modes; the search still works.
    }

    const queryWords = words(value);
    const scored = FAQS.map((faq, index) => {
      const faqWords = words(`${faq.question} ${faq.answer}`);
      const score = queryWords.reduce(
        (total, word) =>
          total + (faqWords.some((candidate) => candidate.startsWith(word) || word.startsWith(candidate)) ? 1 : 0),
        0,
      );
      return { index, score };
    })
      .filter((result) => result.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map((result) => result.index);

    setResults(scored);
  };

  const jumpTo = (index: number) => {
    setOpen(index);
    const button = questionRefs.current[index];
    if (!button) return;
    window.scrollTo({
      top: button.getBoundingClientRect().top + window.scrollY - 110,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
    button.focus({ preventScroll: true });
  };

  const copyQuestion = async () => {
    try {
      await navigator.clipboard.writeText(query.trim());
      setCopyStatus("Copied.");
    } catch {
      setCopyStatus("Copy failed. Please select and copy the text in the box.");
    }
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
                      ref={(el) => {
                        questionRefs.current[index] = el;
                      }}
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
          </div>

          <form className="faqAsk" onSubmit={submit} noValidate>
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
                placeholder="Type your question here…"
                aria-describedby="faq-msg"
                aria-invalid={invalid}
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  if (invalid) setInvalid(false);
                  if (submitted) {
                    setSubmitted(false);
                    setResults([]);
                    setCopyStatus("");
                  }
                }}
              />
              <button type="submit" aria-label="Submit your question">
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
                <p className="faqAsk__error">
                  Please type your question before submitting.
                </p>
              ) : null}

              {submitted ? (
                <div className="faqAsk__results">
                  {results.length ? (
                    <>
                      <p className="faqAsk__resultsTitle">These answers may help:</p>
                      <div className="faqAsk__suggestions">
                        {results.map((index) => (
                          <button type="button" key={index} onClick={() => jumpTo(index)}>
                            {FAQS[index].question}
                          </button>
                        ))}
                      </div>
                    </>
                  ) : null}
                  <p>
                    {results.length ? "If not, " : "We could not find an answer to this in the FAQ. "}
                    the TracTrac team can help. There is no online question form yet, so copy your
                    question and bring it to the team through Contact Us.
                  </p>
                  <div className="faqAsk__actions">
                    <button type="button" className="faqAsk__copy" onClick={copyQuestion}>
                      Copy my question
                    </button>
                    <Link className="btn btn--primary btn--noHover" href="/#final">
                      Contact Us
                    </Link>
                    <span aria-live="polite" className="faqAsk__copyStatus">
                      {copyStatus}
                    </span>
                  </div>
                </div>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
