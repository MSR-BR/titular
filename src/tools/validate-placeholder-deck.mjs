import fs from "node:fs";
import vm from "node:vm";

const sourcePath = new URL("../deck/content/slides.js", import.meta.url);
const source = fs.readFileSync(sourcePath, "utf8");
const context = { window: {} };

vm.createContext(context);
vm.runInContext(source, context, { filename: "slides.js" });

const slides = context.window.MemorialDeckSlides;

if (!Array.isArray(slides) || slides.length === 0) {
  throw new Error("Deck placeholder source must define at least one slide.");
}

const requiredLayouts = new Set(["title", "section", "content", "image", "timeline", "closing"]);
const observedLayouts = new Set();

for (const slide of slides) {
  if (!slide.placeholder) {
    throw new Error(`Slide ${slide.id || "(missing id)"} is not marked as a placeholder.`);
  }

  if (!slide.id || !slide.title || !slide.layout) {
    throw new Error("Each placeholder slide must include id, title, and layout.");
  }

  observedLayouts.add(slide.layout);
}

for (const layout of requiredLayouts) {
  if (!observedLayouts.has(layout)) {
    throw new Error(`Missing required placeholder layout: ${layout}`);
  }
}

console.log(`Validated ${slides.length} placeholder slides across ${observedLayouts.size} layouts.`);
