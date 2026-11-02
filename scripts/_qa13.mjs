import puppeteer from "puppeteer-core";

const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
  args: ["--hide-scrollbars"],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
await page.goto("http://localhost:3101/technology", { waitUntil: "networkidle2" });
await new Promise((r) => setTimeout(r, 800));

const hero = await page.evaluate(() => {
  const el = document.querySelector("#download");
  const imgs = [...document.querySelectorAll(".techHero__badge img")];
  return {
    heroSectionClass: el?.className,
    isHero: el?.classList.contains("techHero"),
    badgeCount: imgs.length,
    badges: imgs.map((i) => ({
      src: i.getAttribute("src"),
      natural: [i.naturalWidth, i.naturalHeight],
      box: [Math.round(i.getBoundingClientRect().width), Math.round(i.getBoundingClientRect().height)],
    })),
    downloadSectionId: document.querySelector(".techDownload")?.id,
  };
});
console.log(hero);

await page.evaluate(() => window.scrollTo(0, 0));
await new Promise((r) => setTimeout(r, 300));
await page.screenshot({ path: "/tmp/tech-hero.png" });

// Check #download anchors land on the hero.
await page.goto("http://localhost:3101/technology#download", { waitUntil: "networkidle2" });
await new Promise((r) => setTimeout(r, 600));
console.log("scrollY after #download:", await page.evaluate(() => window.scrollY));

// Home heading.
await page.goto("http://localhost:3101/", { waitUntil: "networkidle2" });
const homeText = await page.evaluate(() => document.body.innerText);
console.log({
  newImpactHeading: homeText.includes("Our work is already transforming mechanisation across Africa"),
  oldImpactHeading: homeText.includes("More farmers served. More machines working."),
});

await browser.close();
console.log("done");
