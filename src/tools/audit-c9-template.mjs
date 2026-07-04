import fs from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { chromium } from "playwright";

const outDir = resolve("tests/reports/c9-audit");
fs.mkdirSync(outDir, { recursive: true });

const deckUrl = `${pathToFileURL(resolve("src/deck/index.html")).href}?template=1`;
const viewports = [
  { name: "desktop-1366", width: 1366, height: 768 },
  { name: "wide-1920", width: 1920, height: 1080 },
  { name: "landscape-small", width: 844, height: 390 },
  { name: "portrait-small", width: 390, height: 844 },
];

const browser = await chromium.launch({ headless: true });
const summary = [];

for (const viewport of viewports) {
  const page = await browser.newPage({ viewport: { width: viewport.width, height: viewport.height } });
  await page.goto(deckUrl, { waitUntil: "load" });

  for (let index = 0; index < 8; index += 1) {
    const metrics = await page.evaluate(() => {
      const slide = document.querySelector(".slide");
      const body = document.querySelector(".slide-body");
      const title = document.querySelector(".slide-title");
      const equations = [...document.querySelectorAll(".equation-line")];
      const contentSelectors = [
        ".slide-header",
        ".slide-body",
        ".info-card",
        ".metric-item",
        ".timeline-item",
        ".comparison-column",
        ".equation-stack",
        ".deck-figure",
        ".slide-tags",
      ];
      const contentElements = [...document.querySelectorAll(contentSelectors.join(","))]
        .filter((element) => {
          const box = element.getBoundingClientRect();
          return box.width > 1 && box.height > 1;
        });

      const slideBox = slide.getBoundingClientRect();
      const bodyBox = body?.getBoundingClientRect();
      const union = contentElements.reduce(
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

      const unionArea =
        Math.max(0, union.right - union.left) * Math.max(0, union.bottom - union.top);
      const slideArea = slideBox.width * slideBox.height;
      const bodyArea = bodyBox ? bodyBox.width * bodyBox.height : 0;
      const contentAreaRatio = slideArea ? unionArea / slideArea : 0;
      const overflowing =
        slide.scrollWidth > slide.clientWidth + 1 ||
        slide.scrollHeight > slide.clientHeight + 1;

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
        .slice(0, 8);

      const equationRenderer = equations.length
        ? equations.every((element) => element.querySelector("math, svg, img"))
          ? "rendered-math"
          : "inline-html-text"
        : "none";

      const narrowText = [...slide.querySelectorAll("li, .info-card-text, .timeline-item-text")]
        .filter((element) => {
          const text = element.textContent.trim();
          const box = element.getBoundingClientRect();
          return text.length > 24 && box.width < 95 && box.height > 42;
        })
        .map((element) => element.textContent.trim().slice(0, 40))
        .slice(0, 4);

      return {
        title: title?.textContent || "",
        slideWidth: Math.round(slideBox.width),
        slideHeight: Math.round(slideBox.height),
        scrollWidth: slide.scrollWidth,
        scrollHeight: slide.scrollHeight,
        overflowing,
        clipped,
        bodyArea: Math.round(bodyArea),
        contentAreaRatio: Number(contentAreaRatio.toFixed(3)),
        equationCount: equations.length,
        equationRenderer,
        narrowText,
      };
    });

    const filename = `${viewport.name}-slide-${String(index + 1).padStart(2, "0")}.png`;
    await page.screenshot({ path: resolve(outDir, filename), fullPage: true });
    summary.push({ viewport: viewport.name, slide: index + 1, screenshot: filename, ...metrics });

    if (index < 7) {
      await page.keyboard.press("ArrowRight");
    }
  }

  await page.close();
}

await browser.close();

fs.writeFileSync(resolve(outDir, "summary.json"), JSON.stringify(summary, null, 2));

const desktop = summary.filter((item) => item.viewport === "desktop-1366");
const lowDensity = desktop.filter((item) => item.contentAreaRatio < 0.48);
const mobileOverflow = summary.filter(
  (item) => item.viewport.includes("small") && (item.overflowing || item.clipped.length)
);
const equationTextSlides = summary.filter((item) => item.equationRenderer === "inline-html-text");
const narrowTextSlides = summary.filter((item) => item.viewport === "desktop-1366" && item.narrowText.length);

console.log(JSON.stringify({
  screenshots: outDir,
  desktopLowDensitySlides: lowDensity.map((item) => ({
    slide: item.slide,
    title: item.title,
    contentAreaRatio: item.contentAreaRatio,
  })),
  mobileOverflowCount: mobileOverflow.length,
  equationTextSlides: [...new Set(equationTextSlides.map((item) => item.slide))],
  narrowTextSlides: narrowTextSlides.map((item) => ({
    slide: item.slide,
    title: item.title,
    examples: item.narrowText,
  })),
}, null, 2));
