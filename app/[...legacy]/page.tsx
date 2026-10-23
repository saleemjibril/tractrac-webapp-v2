import { notFound, permanentRedirect } from "next/navigation";

const LEGACY: Record<string, string> = {
  "TracTrac Homepage v2.dc.html": "/",
  "TracTrac About.dc.html": "/about",
  "TracTrac Team.dc.html": "/team",
  "TracTrac Impact.dc.html": "/impact",
  "TracTrac Careers.dc.html": "/careers",
  "TracTrac Insights.dc.html": "/blog",
  "TracTrac Partners.dc.html": "/partners",
  "TracTrac Programmes.dc.html": "/programmes",
  "TracTrac Programs.dc.html": "/programmes",
  "TracTrac Technology.dc.html": "/technology",
  "Programme - ISSAM.dc.html": "/programmes/issam",
  "Programme - Young People in Mechanisation.dc.html":
    "/programmes/young-people-in-mechanisation",
  "Programme - TRAxCelerate.dc.html": "/programmes/traxcellerate",
  "Programme - TRACINVEST.dc.html": "/programmes/tracinvest",
  "Programme - H2O.dc.html": "/programmes/h2o",
  "Programme - Rise7.dc.html": "/programmes/rise7",
};

type Props = {
  params: Promise<{ legacy: string[] }>;
};

/**
 * Serves permanent redirects for the old design-export URLs
 * (e.g. /TracTrac%20About.dc.html -> /about) and a normal 404 otherwise.
 */
export default async function LegacyPage({ params }: Props) {
  const { legacy } = await params;
  const raw = legacy.join("/");
  const path = decodeURIComponent(raw);
  const destination = LEGACY[path] ?? LEGACY[raw];
  if (destination) permanentRedirect(destination);
  notFound();
}
