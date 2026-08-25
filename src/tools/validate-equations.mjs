import fs from "node:fs";
import vm from "node:vm";
import { equations } from "../deck/equations/equations.mjs";

const assetDir = "src/deck/assets/equations";
const manifestPath = `${assetDir}/manifest.json`;

if (!fs.existsSync(manifestPath)) {
  throw new Error("Equation manifest is missing. Run node src/tools/build-c11-equations.mjs first.");
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
const manifestIds = new Set((manifest.equations || []).map((equation) => equation.id));

for (const equation of equations) {
  const assetPath = `${assetDir}/${equation.id}.svg`;
  if (!manifestIds.has(equation.id)) {
    throw new Error(`Equation missing from manifest: ${equation.id}`);
  }

  if (!fs.existsSync(assetPath)) {
    throw new Error(`Rendered SVG missing: ${assetPath}`);
  }

  const svg = fs.readFileSync(assetPath, "utf8");
  if (!svg.includes("<svg") || svg.length < 1000) {
    throw new Error(`Rendered SVG looks invalid or empty: ${assetPath}`);
  }
}

const source = fs.readFileSync("src/deck/content/slides.js", "utf8");
const context = { window: {} };

vm.createContext(context);
vm.runInContext(source, context, { filename: "slides.js" });

const slides = context.window.MemorialDeckSlides;
if (!Array.isArray(slides) || slides.length === 0) {
  throw new Error("Deck must define slides before equation validation.");
}

const visibleRawPattern = /\\[a-zA-Z]+|\\begin|\\end|_\{|\\\^|\$\$/;
const usedEquationIds = new Set();
let technicalSlidesWithAssets = 0;

for (const slide of slides) {
  const equationEntries = Array.isArray(slide.equations) ? slide.equations : [];
  if (slide.layout === "technical" && equationEntries.length === 0) {
    throw new Error(`Technical slide has no equations: ${slide.id}`);
  }

  let slideUsesAsset = false;
  for (const equation of equationEntries) {
    if (typeof equation === "string") {
      throw new Error(`Equation string would render as raw text on slide ${slide.id}: ${equation}`);
    }

    if (equation?.html && slide.layout === "technical") {
      throw new Error(`Technical slide still uses HTML equation instead of SVG asset: ${slide.id}`);
    }

    if (equation?.html && visibleRawPattern.test(equation.html)) {
      throw new Error(`Visible raw LaTeX-like equation found on slide ${slide.id}: ${equation.html}`);
    }

    if (equation?.src) {
      const match = equation.src.match(/assets\/equations\/([^/]+)\.svg$/);
      if (!match) {
        throw new Error(`Equation asset path has unexpected shape on slide ${slide.id}: ${equation.src}`);
      }

      const id = match[1];
      const assetPath = `src/deck/${equation.src}`;
      if (!fs.existsSync(assetPath)) {
        throw new Error(`Slide references missing equation asset: ${assetPath}`);
      }

      usedEquationIds.add(id);
      slideUsesAsset = true;
    }
  }

  if (slide.layout === "technical" && slideUsesAsset) {
    technicalSlidesWithAssets += 1;
  }
}

if (technicalSlidesWithAssets < 9) {
  throw new Error(`Expected at least 9 technical slides with rendered equation assets, found ${technicalSlidesWithAssets}.`);
}

if (usedEquationIds.size < 12) {
  throw new Error(`Expected at least 12 rendered equation assets used in the deck, found ${usedEquationIds.size}.`);
}

console.log(
  `Validated C11 equations: ${equations.length} generated assets, ${usedEquationIds.size} used assets, ${technicalSlidesWithAssets} technical slides with rendered equations.`
);
