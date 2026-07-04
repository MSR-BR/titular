import { chromium } from "playwright";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";

const deckUrl = `${pathToFileURL(resolve("src/deck/index.html")).href}?template=1`;
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

const totalSlides = await page.locator(".slide-counter").textContent();
if (!/1 \/ 8/.test(totalSlides || "")) {
  throw new Error(`Expected template prototype deck with 8 slides, saw counter: ${totalSlides}`);
}

for (let index = 0; index < 8; index += 1) {
    const result = await page.evaluate(() => {
      const slide = document.querySelector(".slide");
      if (!slide) {
        return { ok: false, reason: "missing slide" };
      }

      const slideBox = slide.getBoundingClientRect();
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
      const contentElements = [...slide.querySelectorAll(contentSelectors.join(","))]
        .filter((element) => {
          const box = element.getBoundingClientRect();
          return box.width > 1 && box.height > 1;
        });
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
      const contentAreaRatio = unionArea / (slideBox.width * slideBox.height);
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
      .slice(0, 5);

      const narrowText = [...slide.querySelectorAll("li, .info-card-text, .timeline-item-text")]
        .filter((element) => {
          const text = element.textContent.trim();
          const box = element.getBoundingClientRect();
          return text.length > 24 && box.width < 95 && box.height > 42;
        })
        .map((element) => element.textContent.trim().slice(0, 40))
        .slice(0, 4);

      const equationLines = [...slide.querySelectorAll(".equation-line")];
      const nonRenderedEquations = equationLines.filter((element) => !element.querySelector("math, svg, img"));

      return {
        ok:
          !overflowing &&
          clipped.length === 0 &&
          contentAreaRatio >= 0.62 &&
          narrowText.length === 0 &&
          nonRenderedEquations.length === 0,
        overflowing,
        clipped,
        contentAreaRatio: Number(contentAreaRatio.toFixed(3)),
        narrowText,
        nonRenderedEquations: nonRenderedEquations.length,
      };
    });

  if (!result.ok) {
    throw new Error(`Template slide ${index + 1} overflows: ${JSON.stringify(result)}`);
  }

  if (index < 7) {
    await page.keyboard.press("ArrowRight");
  }
}

await page.setViewportSize({ width: 844, height: 390 });
await page.goto(deckUrl, { waitUntil: "load" });
const mobileResult = await page.evaluate(() => {
  const slide = document.querySelector(".slide");
  return {
    width: slide?.clientWidth || 0,
    height: slide?.clientHeight || 0,
    overflowing:
      !!slide &&
      (slide.scrollWidth > slide.clientWidth + 1 ||
        slide.scrollHeight > slide.clientHeight + 1),
  };
});

await browser.close();

if (consoleErrors.length) {
  throw new Error(`Console/page errors found: ${consoleErrors.join(" | ")}`);
}

const mobileNote = mobileResult.overflowing
  ? ` Mobile landscape loaded but overflowed at small physical size: ${JSON.stringify(mobileResult)}.`
  : " Mobile landscape sanity check passed.";

console.log(`Validated C9 template prototypes: 8 slides, desktop overflow check passed.${mobileNote}`);
