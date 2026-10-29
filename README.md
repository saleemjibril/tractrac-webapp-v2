# TracTrac website

The TracTrac marketing site, rebuilt as a Next.js application from the original design-tool export.

- **Framework:** Next.js 16 (App Router), React 19, TypeScript
- **Styling:** hand-written design-system CSS (tokens, primitives, page styles) — no Tailwind
- **Content:** typed modules under `content/`
- **Assets:** optimised with `next/image`; only referenced assets are published

## Commands

```bash
npm install
npm run dev            # http://localhost:3000
npm run build          # production build
npm run start          # serve the production build
npm run lint           # ESLint
npm run verify-routes  # smoke-test every route + legacy redirects (needs a running server)
npm run screenshot -- <url> <out.png> [width] [height] [full]
```

## Structure

```
app/                 routes and page composition
  [...legacy]/       permanent redirects for old *.dc.html URLs
  programmes/        hub, two custom programme pages, four data-driven pages
components/
  site/              header, footer, motion provider
  ui/                image, hero, icons, counters, portrait placeholder
  home/              home-page interaction islands
  technology/        pinned scroll sequences and rail
  team/, about/, insights/, programmes/
content/             typed copy, navigation, team, FAQs, assets manifest
styles/              global primitives + one stylesheet per page
public/media/        published copies of every referenced asset
design-source/       original design export (reference only, not served)
scripts/             asset import, route checks, screenshots
```

## Content

Edit the files in `content/`:

- `site.ts` — navigation, footer, CTAs, brand assets
- `programmes.ts` — programme cards + the standard detail-page content
- `team.ts` — staff directory and leadership
- `faqs.ts` — homepage FAQ
- `insights.ts` — article cards, categories and links
- `home.ts` / `technology.ts` — homepage and technology section data

Copy is ported verbatim from the export. A few editorial notes in the source (for example
“To confirm before publishing” in Impact and YPiM) are intentionally retained and should be
resolved with the content owner before launch.

## Assets

`public/media/` is generated from the export by:

```bash
npm run import-assets
```

The script scans `design-source/*.dc.html`, copies referenced local images/videos with
URL-safe names, downloads the five remote Insights images once, and writes
`content/assets.json`. `lib/asset.ts` resolves original paths at build time. If you add a
new image, add it to `design-source/` and re-run the script, or place it directly in
`public/media/` and reference it by URL.

All images and videos are served from the TracTrac media API. Upload them with:

```bash
npm run upload-images
npm run upload-videos
```

The uploaders are resumable and write each public URL to
`content/uploaded-assets.json` and `content/uploaded-videos.json`;
`content/assets.json` points at those URLs. Add `https://api.tractrac.co` to
`images.remotePatterns` in `next.config.ts` for any new host. Re-running
`npm run import-assets` keeps the uploaded URLs in place.

## Forms

The programme contact forms are client-side only: they validate and show a success state
without sending anything. `components/programmes/ProgrammeContactForm.tsx` contains the single
submit function to wire to an email service, CRM or server action later.

The `/contact` page form posts to `/api/contact`, which forwards the name, email and message to
the TracTrac backend's `/collaborate` endpoint. Set `CONTACT_API_URL` (defaults to
`https://tractracplus-backend-v6.onrender.com/api/v1`) to override it.

The homepage FAQ assistant posts to `/api/faq`, which asks DeepSeek using a website-only
knowledge base built in `lib/faq-knowledge.ts`. Set `DEEPSEEK_API_KEY` in `.env` (optionally
`DEEPSEEK_MODEL`, default `deepseek-flash`). Thinking mode is explicitly disabled because FAQ
answers are retrieved from the knowledge base; this keeps responses fast and cheap. If the key
is missing or the AI cannot answer from the knowledge base, the UI shows the contact fallback. Each visitor's question/answer thread is
kept in `localStorage`.

## Brand rules

- **No green.** The palette is ink `#14110F`, orange `#F36A02`, cream `#F6F2EC`, grey
  `#6E6A65`, line `#DCD6CD` and white. The original export's green token and the YPiM
  green accents were removed.
- Weight and colour are set through tokens/primitives in `styles/primitives.css`.

## Legacy URLs

The old `*.dc.html` URLs return `308` redirects to the new routes via
`app/[...legacy]/page.tsx`. Add new mappings there if the export gains pages.

## Known content follow-ups

- Team portraits were not supplied. The site renders the same dashed empty-portrait state used by
  the original `image-slot` component until `photo` is filled in `content/team.ts`.
- Privacy Policy, Terms, social profile links and app-store destinations are placeholders in the
  original export and still point at `/`. Replace them in `content/site.ts` when the real URLs
  exist.
- Editorial notes such as “To confirm before publishing” were kept verbatim from the export.
- The core brand palette is ink, orange, cream and white. The YPiM page intentionally keeps its
  supplied green system (`#037A55`, `#04A472`, hover `#026446`) exactly as designed.
- Automated accessibility checks (`axe-core`) flag the brand orange against white/cream for
  small text and white-on-orange buttons. This is inherited from the supplied design and was
  intentionally left unchanged.
- The original export fixes the homepage FAQ at two columns on phones via an inline grid
  declaration; this build collapses it to one column below 880px so the accordion remains usable.
- The header and mobile navigation are unified across all routes; the export used three desktop
  navigation variants and two mobile-menu variants. Dropdowns are also operable by keyboard,
  unlike the hover-only original.
- The header is sticky only across the first viewport, exactly like the export runtime
  (`#dc-root` is 100svh tall): it stays over the hero, turns white after 90px, then scrolls away
  with the hero and returns when the page is scrolled back to the top.

## Deployment notes

- Set `NEXT_PUBLIC_SITE_URL` to the production origin so `sitemap.xml`, `robots.txt` and
  Open Graph URLs are absolute (defaults to `https://tractrac.co`).
- The blog feed is fetched server-side from `BLOG_API_URL` (defaults to
  `https://blogapi.tractrac.co/api/v1`) and revalidated every 60 seconds. `/` and `/blog`
  are ISR pages; set `BLOG_API_URL` only to override the API host.
- Set `DEEPSEEK_API_KEY` for the AI FAQ. Without it, every question returns the
  contact fallback instead of an AI answer.
- The remaining pages are static except the legacy-redirect catch-all; deploy to a Next.js host
  that supports ISR.
