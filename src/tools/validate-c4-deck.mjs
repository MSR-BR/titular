import fs from "node:fs";
import vm from "node:vm";

const source = fs.readFileSync("src/deck/content/slides.js", "utf8");
const context = { window: {} };

vm.createContext(context);
vm.runInContext(source, context, { filename: "slides.js" });

const slides = context.window.MemorialDeckSlides;

if (!Array.isArray(slides) || slides.length === 0) {
  throw new Error("Deck must define slides.");
}

const text = JSON.stringify(slides).toLowerCase();
if (text.includes("placeholder") || text.includes("tbd")) {
  throw new Error("Deck still contains placeholder/TBD text.");
}

if (text.includes("reference appendix") || text.includes("lista de referencias")) {
  throw new Error("Deck must not include a final reference-list slide.");
}

if (slides.length < 35 || slides.length > 42) {
  throw new Error(`Expected 35-42 core slides for 50 minutes, found ${slides.length}.`);
}

if (slides[0]?.title !== "Mario Reis") {
  throw new Error("Title slide must use only 'Mario Reis' as the visible name.");
}

const indexSlide = slides.find((slide) => slide.id === "s03-map");
if (!indexSlide) {
  throw new Error("Deck must include the section index slide.");
}

if (/min/i.test(`${indexSlide.title} ${indexSlide.eyebrow || ""} ${JSON.stringify(indexSlide.cards || [])}`)) {
  throw new Error("Index slide must not show presentation timing.");
}

for (const keyword of ["Formacao", "UFF", "Resultados", "Impacto"]) {
  if (!JSON.stringify(indexSlide).includes(keyword)) {
    throw new Error(`Index slide must name the ${keyword} section.`);
  }
}

for (const slideId of ["s12-books", "s15-lab-magnetism", "s16-l3d"]) {
  const slide = slides.find((candidate) => candidate.id === slideId);
  if (!slide?.figure?.src) {
    throw new Error(`${slideId} must include a real figure asset.`);
  }
}

for (const [index, slide] of slides.entries()) {
  const number = index + 1;
  if (!slide.id || !slide.title || !slide.layout) {
    throw new Error(`Slide ${number} must include id, title, and layout.`);
  }

  if (!Array.isArray(slide.sourceRefs) || slide.sourceRefs.length === 0) {
    throw new Error(`Slide ${number} (${slide.id}) must include sourceRefs.`);
  }

  if (!slide.footerRefs) {
    throw new Error(`Slide ${number} (${slide.id}) must include compact footerRefs.`);
  }

  if (slide.layout === "technical" && (!Array.isArray(slide.equations) || slide.equations.length === 0)) {
    throw new Error(`Technical slide ${number} (${slide.id}) must include visible equations.`);
  }
}

const technicalSlides = slides.filter((slide) => slide.layout === "technical");
if (technicalSlides.length < 10) {
  throw new Error(`Expected at least 10 technical slides, found ${technicalSlides.length}.`);
}

const equationText = technicalSlides
  .flatMap((slide) => slide.equations || [])
  .map((equation) => (typeof equation === "string" ? equation : equation?.html || ""))
  .join(" ");

if (/\\[a-zA-Z]+|int_|sum_|mu_B|Delta [ST]|\\^/.test(equationText)) {
  throw new Error("Technical equations must be rendered as typographic HTML/Unicode, not LaTeX-like code.");
}

const aveiroSlides = slides.filter((slide) => /aveiro|ciceco/i.test(`${slide.title} ${slide.eyebrow || ""}`));
if (aveiroSlides.length < 3) {
  throw new Error("Deck must include explicit Aveiro/CICECO pre-UFF slides.");
}

console.log(`Validated C4 deck: ${slides.length} slides, ${technicalSlides.length} technical slides, ${aveiroSlides.length} Aveiro/CICECO slides.`);
