import { readFileSync, statSync } from "node:fs";

const registry = readFileSync("work/analysis/figure-registry.yml", "utf8");
const paths = [...registry.matchAll(/path: "([^"]+\.png)"/g)].map((match) => match[1]);

if (paths.length < 12) {
  throw new Error(`Expected at least 12 figure assets, found ${paths.length}`);
}

for (const path of paths) {
  const stats = statSync(path);
  if (!stats.isFile()) {
    throw new Error(`Missing figure asset: ${path}`);
  }

  if (stats.size < 10_000) {
    throw new Error(`Figure asset appears too small or empty: ${path}`);
  }
}

const required = [
  "tests/reports/c10-figure-contact-sheet.png",
  "src/tools/build-c10-figure-crops.py",
  "src/tools/build-c10-figure-contact-sheet.py",
];

for (const path of required) {
  const stats = statSync(path);
  if (!stats.isFile() || stats.size === 0) {
    throw new Error(`Missing required C10 artifact: ${path}`);
  }
}

console.log(`Validated C10 figure registry: ${paths.length} assets with existing PNG files.`);
