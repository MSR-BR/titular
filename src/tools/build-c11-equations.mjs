import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { equations } from "../deck/equations/equations.mjs";

const root = process.cwd();
const buildRoot = path.join(root, "work/c11-equations");
const assetRoot = path.join(root, "src/deck/assets/equations");

function ensureDirectory(directory) {
  fs.mkdirSync(directory, { recursive: true });
}

function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: options.cwd || root,
    encoding: "utf8",
  });

  if (result.status !== 0) {
    throw new Error(
      [
        `${command} ${args.join(" ")} failed with exit code ${result.status}`,
        result.stdout,
        result.stderr,
      ]
        .filter(Boolean)
        .join("\n")
    );
  }

  return result;
}

function latexDocument(equation) {
  return String.raw`\documentclass{article}
\usepackage[T1]{fontenc}
\usepackage{amsmath,amssymb,bm}
\pagestyle{empty}
\newbox\eqbox
\newdimen\eqwidth
\newdimen\eqheight
\begin{document}
\setbox\eqbox=\hbox{\Large$\displaystyle ` + equation.tex + String.raw`$}
\eqwidth=\dimexpr\wd\eqbox+10pt\relax
\eqheight=\dimexpr\ht\eqbox+\dp\eqbox+10pt\relax
\pdfpagewidth=\eqwidth
\pdfpageheight=\eqheight
\hoffset=-1in
\voffset=-1in
\shipout\vbox to \pdfpageheight{\vfil\hbox to \pdfpagewidth{\hfil\copy\eqbox\hfil}\vfil}
\end{document}
`;
}

ensureDirectory(buildRoot);
ensureDirectory(assetRoot);

const manifest = [];

for (const equation of equations) {
  const equationBuildDir = path.join(buildRoot, equation.id);
  ensureDirectory(equationBuildDir);

  const texPath = path.join(equationBuildDir, `${equation.id}.tex`);
  const pdfPath = path.join(equationBuildDir, `${equation.id}.pdf`);
  const svgPath = path.join(assetRoot, `${equation.id}.svg`);

  fs.writeFileSync(texPath, latexDocument(equation));

  run("pdflatex", [
    "-interaction=nonstopmode",
    "-halt-on-error",
    "-output-directory",
    equationBuildDir,
    texPath,
  ]);

  run("pdftocairo", ["-svg", pdfPath, svgPath]);

  if (!fs.existsSync(svgPath)) {
    throw new Error(`Expected SVG asset was not created: ${svgPath}`);
  }

  manifest.push({
    id: equation.id,
    title: equation.title,
    sourceRefs: equation.sourceRefs,
    sourceFile: "src/deck/equations/equations.mjs",
    asset: path.relative(root, svgPath),
  });
}

fs.writeFileSync(
  path.join(assetRoot, "manifest.json"),
  `${JSON.stringify({ generatedAt: new Date().toISOString(), equations: manifest }, null, 2)}\n`
);

console.log(`Rendered ${manifest.length} C11 equation assets to ${path.relative(root, assetRoot)}.`);
