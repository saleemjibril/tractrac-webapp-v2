import { createElement } from "react";
import type { LegalDocument } from "@/content/legal";

export default function LegalPage({ document }: { document: LegalDocument }) {
  return (
    <main id="main" className="pageMain legalPage">
      <section className="legalHero">
        <div className="wrap">
          <p className="eyebrow">Legal</p>
          <h1 className="display2 legalHero__title">{document.title}</h1>
          <p className="legalHero__updated">Last updated: {document.updated}</p>
        </div>
      </section>

      <section className="legalBody">
        <div className="wrap legalBody__inner">
          {document.blocks.map((block, index) =>
            createElement(block.tag, {
              key: index,
              dangerouslySetInnerHTML: { __html: block.html },
            }),
          )}
        </div>
      </section>
    </main>
  );
}
