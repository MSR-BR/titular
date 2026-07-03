import fs from "node:fs";

const requiredFiles = [
  "work/extracted/memorial-text.md",
  "work/extracted/example-presentation-text.md",
  "work/analysis/source-registry.yml",
  "work/analysis/evidence-registry.yml",
  "work/analysis/narrative-outline.md",
  "work/analysis/assumptions.md",
  "src/deck/content/outline.md"
];

for (const file of requiredFiles) {
  if (!fs.existsSync(file)) {
    throw new Error(`Missing required C3 file: ${file}`);
  }
}

const memorial = fs.readFileSync("work/extracted/memorial-text.md", "utf8");
const example = fs.readFileSync("work/extracted/example-presentation-text.md", "utf8");
const evidence = fs.readFileSync("work/analysis/evidence-registry.yml", "utf8");
const narrative = fs.readFileSync("work/analysis/narrative-outline.md", "utf8");
const outline = fs.readFileSync("src/deck/content/outline.md", "utf8");

const memorialPages = (memorial.match(/^## Page /gm) || []).length;
const examplePdfSlides = (example.match(/^### PDF Slide /gm) || []).length;
const exampleHtmlPages = (example.match(/^### HTML Page /gm) || []).length;
const evidenceIds = [...evidence.matchAll(/^\s+- id: "(E\d+)"/gm)].map((match) => match[1]);
const invalidStatuses = [...evidence.matchAll(/^\s+status: "([^"]+)"/gm)]
  .map((match) => match[1])
  .filter((status) => !["verified", "needs_review", "rejected"].includes(status));

if (memorialPages !== 416) {
  throw new Error(`Expected 416 memorial pages, found ${memorialPages}.`);
}

if (examplePdfSlides !== 20) {
  throw new Error(`Expected 20 PDF slides, found ${examplePdfSlides}.`);
}

if (exampleHtmlPages !== 20) {
  throw new Error(`Expected 20 HTML pages, found ${exampleHtmlPages}.`);
}

if (evidenceIds.length < 20) {
  throw new Error(`Expected at least 20 evidence entries, found ${evidenceIds.length}.`);
}

if (invalidStatuses.length > 0) {
  throw new Error(`Invalid evidence statuses: ${invalidStatuses.join(", ")}`);
}

for (const id of ["E001", "E017", "E024", "E027"]) {
  if (!narrative.includes(id) || !outline.includes(id)) {
    throw new Error(`Narrative and deck outline must both reference ${id}.`);
  }
}

console.log(
  `Validated C3: ${memorialPages} memorial pages, ${examplePdfSlides} PDF slides, ${exampleHtmlPages} HTML pages, ${evidenceIds.length} evidence entries.`
);
