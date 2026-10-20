"use client";

import { useEffect, useRef, useState } from "react";
import Photo from "@/components/ui/Photo";
import type { TECH_STEPS } from "@/content/home";

type Step = (typeof TECH_STEPS)[number];

export default function TechnologySteps({ steps }: { steps: Step[] }) {
  const [active, setActive] = useState(0);
  const refs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          setActive(Number((entry.target as HTMLElement).dataset.index ?? 0));
        }
      },
      { rootMargin: "-42% 0px -42% 0px" },
    );
    refs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="homeTech">
      <div className="homeTechSticky">
        <div className="homeTechPhone">
          {steps.map((step, index) => (
            <div className="homeTechScreen" data-active={index === active} key={step.number}>
              <Photo src={step.screen} alt={step.screenAlt} sizes="340px" priority={index === 0} />
            </div>
          ))}
        </div>
        <div className="homeTechDots" aria-hidden="true">
          {steps.map((step, index) => (
            <span data-active={index === active} key={step.number} />
          ))}
        </div>
      </div>

      <div className="homeTechSteps">
        {steps.map((step, index) => (
          <div
            className="homeTechStep"
            data-active={index === active}
            data-index={index}
            key={step.number}
            ref={(el) => {
              refs.current[index] = el;
            }}
          >
            <p className="eyebrow homeTechKicker">{step.kicker}</p>
            <h3>{step.title}</h3>
            <p className="homeTechLead">{step.lead}</p>
            <p className="homeTechBody">{step.body}</p>
            {index === 1 ? (
              <svg
                aria-hidden="true"
                viewBox="0 0 120 40"
                className="homeTechSketch"
              >
                <path
                  d="M6 30 L34 8 L82 12 L112 26 L96 36 L26 34 Z"
                  fill="none"
                  stroke="var(--orange)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
                <circle cx="34" cy="8" r="2.4" fill="var(--orange)" />
                <circle cx="112" cy="26" r="2.4" fill="var(--orange)" />
              </svg>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
