import fs from "node:fs";
import { chromium } from "playwright";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";

const reportDir = "tests/reports/c12-visual";
fs.mkdirSync(reportDir, { recursive: true });

const deckUrl = pathToFileURL(resolve("src/deck/index.html")).href;
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1366, height: 768 } });
const consoleErrors = [];

page.on("console", (message) => {
  if (message.type() === "error") {
    consoleErrors.push(message.text());
  }
});

page.on("pageerror", (error) => {
  consoleErrors.push(error.message);
});

await page.goto(deckUrl, { waitUntil: "load" });

const totalText = await page.locator(".slide-counter").textContent();
const totalMatch = totalText?.match(/\/\s*(\d+)/);
const totalSlides = totalMatch ? Number.parseInt(totalMatch[1], 10) : 0;
if (totalSlides !== 41) {
  throw new Error(`Expected 41 slides in rebuilt deck, saw counter: ${totalText}`);
}

const screenshots = new Set([1, 3, 6, 21, 23, 27, 31, 36, 38, 39]);
const results = [];

for (let index = 0; index < totalSlides; index += 1) {
  await page
    .waitForFunction(() => [...document.images].every((image) => image.complete), null, { timeout: 5000 })
    .catch(() => {});

  const result = await page.evaluate(() => {
    const slide = document.querySelector(".slide");
    const slideBox = slide?.getBoundingClientRect();
    if (!slide || !slideBox) {
      return { ok: false, reason: "missing slide" };
    }

    const contentSelectors = [
      ".slide-header",
      ".slide-body",
      ".info-card",
      ".metric-item",
      ".timeline-item",
      ".equation-stack",
      ".deck-figure",
      ".comparison-column",
    ];

    const elements = [...slide.querySelectorAll(contentSelectors.join(","))]
      .filter((element) => {
        const box = element.getBoundingClientRect();
        return box.width > 1 && box.height > 1;
      });

    const union = elements.reduce(
      (box, element) => {
        const rect = element.getBoundingClientRect();
        return {
          left: Math.min(box.left, rect.left),
          top: Math.min(box.top, rect.top),
          right: Math.max(box.right, rect.right),
          bottom: Math.max(box.bottom, rect.bottom),
        };
      },
      { left: slideBox.right, top: slideBox.bottom, right: slideBox.left, bottom: slideBox.top }
    );

    const unionArea = Math.max(0, union.right - union.left) * Math.max(0, union.bottom - union.top);
    const contentAreaRatio = unionArea / (slideBox.width * slideBox.height);
    const overflowing =
      slide.scrollWidth > slide.clientWidth + 1 || slide.scrollHeight > slide.clientHeight + 1;

    const clipped = [...slide.querySelectorAll("*")]
      .filter((element) => {
        const box = element.getBoundingClientRect();
        if (box.width < 1 || box.height < 1) {
          return false;
        }

        return (
          box.left < slideBox.left - 2 ||
          box.right > slideBox.right + 2 ||
          box.top < slideBox.top - 2 ||
          box.bottom > slideBox.bottom + 2
        );
      })
      .map((element) => element.className || element.tagName)
      .slice(0, 6);

    const brokenImages = [...slide.querySelectorAll("img")]
      .filter((image) => image.naturalWidth < 2 || image.naturalHeight < 2)
      .map((image) => image.getAttribute("src"))
      .slice(0, 6);

    const technical = slide.classList.contains("layout-technical");
    const equationFrames = [...slide.querySelectorAll(".equation-line")];
    const equationAssets = [...slide.querySelectorAll(".equation-asset")];
    const nonAssetEquations = technical
      ? equationFrames.filter((frame) => !frame.querySelector(".equation-asset")).length
      : 0;

    return {
      ok: !overflowing && clipped.length === 0 && brokenImages.length === 0 && nonAssetEquations === 0,
      title: slide.querySelector(".slide-title")?.textContent?.trim() || "",
      className: slide.className,
      overflowing,
      clipped,
      brokenImages,
      nonAssetEquations,
      equationAssets: equationAssets.length,
      contentAreaRatio: Number(contentAreaRatio.toFixed(3)),
    };
  });

  results.push({ slide: index + 1, ...result });

  if (screenshots.has(index + 1)) {
    await page.screenshot({
      path: `${reportDir}/slide-${String(index + 1).padStart(2, "0")}.png`,
      fullPage: true,
    });
  }

  if (index < totalSlides - 1) {
    await page.keyboard.press("ArrowRight");
  }
}

await browser.close();

const failed = results.filter((result) => !result.ok);
const lowDensity = results
  .filter((result) => !/layout-(title|section|closing)/.test(result.className))
  .filter((result) => result.contentAreaRatio < 0.42)
  .map((result) => ({ slide: result.slide, title: result.title, ratio: result.contentAreaRatio }));

fs.writeFileSync(
  `${reportDir}/summary.json`,
  `${JSON.stringify({ totalSlides, failed, lowDensity, results }, null, 2)}\n`
);

if (consoleErrors.length) {
  throw new Error(`Console/page errors found: ${consoleErrors.join(" | ")}`);
}

if (failed.length) {
  throw new Error(`C12 visual validation failed: ${JSON.stringify(failed.slice(0, 3))}`);
}

if (lowDensity.length) {
  throw new Error(`C12 low-density slides found: ${JSON.stringify(lowDensity.slice(0, 5))}`);
}

console.log(`Validated C12 deck visually: ${totalSlides} slides, no overflow, no broken images, screenshots saved to ${reportDir}.`);
