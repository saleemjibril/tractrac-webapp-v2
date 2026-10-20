/**
 * Route smoke test against a running server.
 * Usage: npm run verify-routes [baseUrl]
 */
const base = process.argv[2] ?? "http://localhost:3000";

const routes = [
  ["/", "Getting the right farm machinery"],
  ["/about", "We are building the systems"],
  ["/team", "One team. Different strengths."],
  ["/impact", "What happens when access changes."],
  ["/careers", "Join the Humans of TracTrac"],
  ["/insights", "What we’re learning, building"],
  ["/partners", "We do more when we build together."],
  ["/programmes", "Building mechanisation where farmers are."],
  ["/programmes/issam", "ISSAM"],
  ["/programmes/young-people-in-mechanisation", "Young People in Mechanisation"],
  ["/programmes/traxcellerate", "Building the Human Infrastructure"],
  ["/programmes/tracinvest", "Accelerating Mechanisation Investment"],
  ["/programmes/h2o", "Empowering Youth and Women"],
  ["/programmes/rise7", "Empowering Seven to Scale"],
  ["/technology", "Technology that moves the work."],
];

const legacy = [
  ["/TracTrac Homepage v2.dc.html", "/"],
  ["/TracTrac About.dc.html", "/about"],
  ["/TracTrac Team.dc.html", "/team"],
  ["/TracTrac Impact.dc.html", "/impact"],
  ["/TracTrac Careers.dc.html", "/careers"],
  ["/TracTrac Insights.dc.html", "/insights"],
  ["/TracTrac Partners.dc.html", "/partners"],
  ["/TracTrac Programmes.dc.html", "/programmes"],
  ["/TracTrac Technology.dc.html", "/technology"],
  ["/Programme - ISSAM.dc.html", "/programmes/issam"],
  ["/Programme - Young People in Mechanisation.dc.html", "/programmes/young-people-in-mechanisation"],
  ["/Programme - TRAxCelerate.dc.html", "/programmes/traxcellerate"],
  ["/Programme - TRACINVEST.dc.html", "/programmes/tracinvest"],
  ["/Programme - H2O.dc.html", "/programmes/h2o"],
  ["/Programme - Rise7.dc.html", "/programmes/rise7"],
  ["/TracTrac Programs.dc.html", "/programmes"],
];

let failures = 0;

for (const [route, expected] of routes) {
  const response = await fetch(`${base}${route}`);
  const html = await response.text();
  const ok = response.ok && html.includes(expected);
  if (!ok) failures += 1;
  console.log(`${ok ? "ok  " : "FAIL"} ${response.status} ${route}`);
}

for (const [route, destination] of legacy) {
  const response = await fetch(`${base}${encodeURI(route)}`, { redirect: "manual" });
  const location = response.headers.get("location");
  const ok =
    (response.status === 308 || response.status === 307) &&
    Boolean(location?.endsWith(destination));
  if (!ok) failures += 1;
  console.log(`${ok ? "ok  " : "FAIL"} ${response.status} ${route} -> ${location ?? "(none)"}`);
}

if (failures) {
  console.error(`\n${failures} route check(s) failed`);
  process.exit(1);
}
console.log("\nAll route checks passed");
