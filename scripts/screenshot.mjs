/**
 * Screenshot a route for visual QA.
 * Usage: node scripts/screenshot.mjs <url> <out> [width] [height] [full]
 */
import puppeteer from "puppeteer-core";

const [url = "http://localhost:3000/", out = "/tmp/shot.png", width = "1440", height = "900", full = "true"] =
  process.argv.slice(2);

const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
  args: ["--hide-scrollbars", "--autoplay-policy=no-user-gesture-required"],
});

const page = await browser.newPage();
await page.setViewport({ width: Number(width), height: Number(height), deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: "networkidle2", timeout: 60000 });
await page.evaluate(() => {
  document.querySelectorAll("img").forEach((img) => {
    img.loading = "eager";
  });
});
await page.evaluate(async () => {
  await new Promise((resolve) => {
    let y = 0;
    const step = () => {
      y += window.innerHeight * 0.5;
      window.scrollTo(0, y);
      if (y < document.body.scrollHeight) setTimeout(step, 180);
      else {
        window.scrollTo(0, 0);
        setTimeout(resolve, 2000);
      }
    };
    step();
  });
});
await new Promise((resolve) => setTimeout(resolve, 1200));
await page.screenshot({ path: out, fullPage: full === "true" });
await browser.close();
console.log(`saved ${out}`);
