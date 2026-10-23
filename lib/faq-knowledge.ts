import { FAQS } from "@/content/faqs";
import { EQUIPMENT, HOME_STATS, PARTNER_LOGOS, SHOWCASES } from "@/content/home";
import { PROGRAMMES } from "@/content/programmes";
import { BRAND, CTAS, SITE } from "@/content/site";
import { NETWORK_POINTS } from "@/content/technology";
import { TEAM } from "@/content/team";

let cached: string | null = null;

/**
 * Everything the FAQ assistant is allowed to know. Built from the website's
 * own content modules, with a few page-level facts that live in JSX.
 */
export function getFaqKnowledgeBase(): string {
  if (cached) return cached;

  const stats = HOME_STATS.map(
    (stat) => `${stat.prefix ?? ""}${stat.count}${stat.suffix ?? ""} ${stat.label}`,
  ).join("; ");

  const programmes = PROGRAMMES.map(
    (programme) => `- ${programme.name} (${programme.category}): ${programme.description}`,
  ).join("\n");

  const equipment = EQUIPMENT.map((item) => `- ${item.title}: ${item.body}`).join("\n");

  const showcases = SHOWCASES.map(
    (showcase) => `- ${showcase.name}: ${showcase.title} ${showcase.subtitle}`,
  ).join("\n");

  const partners = PARTNER_LOGOS.map((partner) => partner.name).join(", ");

  const leadership = TEAM.filter((person) => person.leadership)
    .map((person) => `${person.name} — ${person.title}`)
    .join("; ");

  const faqs = FAQS.map((faq, index) => `Q${index + 1}: ${faq.question}\nA: ${faq.answer}`).join(
    "\n\n",
  );

  cached = `# TracTrac website knowledge base

## Who we are
${SITE.name}: ${SITE.description}
${BRAND.blurb}

TracTrac is a Nigerian agricultural mechanisation company. We connect smallholder farmers to affordable tractor and equipment services by bringing together machinery, technology, private investment and the people who deliver the work.

## Contact and links
- General enquiries: info@tractrac.co
- Phone: +2348064648720
- Address: 11 Vanern Crescent, Wuse, FCT 904101, Nigeria
- Careers: jobs@tractrac.co
- Talent pool / open application: /careers/talent-pool
- Blog: /blog
- Privacy Policy: /privacy-policy (last updated March 27, 2026)
- Terms and Conditions: /terms-and-conditions (last updated June 2, 2025)
- TracTrac Plus on Google Play: ${BRAND.googlePlayUrl}
- TracTrac Plus on the App Store: ${BRAND.appStoreUrl}

## Website pages
Home /, About /about, Team /team, Impact /impact, Careers /careers, Blog /blog, Partners /partners, Programmes /programmes, Technology /technology, Privacy Policy /privacy-policy, Terms /terms-and-conditions.
Primary website calls to action: ${CTAS.primary.label} and ${CTAS.secondary.label}.

## Impact at a glance
${stats}.
ISSAM MSPs have worked 8,720 hectares of farmland.
ISSAM coverage is reported across Kaduna and Nasarawa states, 23 LGAs and about 146,170 registered farmers.

## Programmes
${programmes}
Featured programme stories:
${showcases}

## Equipment and services
${equipment}
Typical services include land preparation, planting, spraying, irrigation and fertiliser application, harvesting and post-harvest work, and haulage.

## Technology
TracTrac Plus helps farmers find machinery, measure and map farmland, choose a service, book it, pay and receive completion notifications.
TracTrac Agent helps agents and equipment owners manage bookings, track tractors, and see completed work and earnings.
How the network works:
${NETWORK_POINTS.map((point) => `- ${point}`).join("\n")}

## Partners
${partners}

## Leadership team
${leadership}

## Frequently asked questions
${faqs}
`;

  return cached;
}
