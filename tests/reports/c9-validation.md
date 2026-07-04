# Change 009 Validation

Date: 2026-07-03

Status: conditionally accepted to proceed to C10.

## Scope

Validate the redesigned C9 template after the first visual direction was rejected for low information density, weak responsiveness, code-like equations and excessive empty space.

## What Changed In The Redo

- Rebuilt the visual language as dense information boards.
- Replaced sparse title/closing slides with multi-card grids.
- Reworked the technical slide into two bands: physics/result cards above, rendered equations and evidence cards below.
- Kept equations as browser-rendered MathML placeholders for C9; final compiled LaTeX/SVG assets remain assigned to Change 011.
- Preserved a legible minimum slide width on small review viewports instead of compressing columns until the content breaks.
- Kept controls outside the slide content area.
- After user feedback, increased card/body typography and restored a stronger section background gradient.

## Prototype Slides

- Title/dossier board.
- Index/route board.
- Formation and Aveiro/CICECO timeline.
- Books and teaching board with cover figure.
- UFF infrastructure figure board.
- Technical Tsallis equation board.
- Impact dashboard.
- Future/closing agenda board.

## Tests Run

- `node --check src/deck/scripts/main.js`: passed.
- `node --check src/deck/content/template-prototypes.js`: passed.
- `node --check src/tools/validate-c9-template.mjs`: passed.
- `node --check src/tools/audit-c9-template.mjs`: passed.
- `node src/tools/validate-c9-template.mjs`: passed.
- `node src/tools/audit-c9-template.mjs`: passed.

## Visual Audit Result

Artifacts:

- `tests/reports/c9-audit/summary.json`
- `tests/reports/c9-audit/desktop-1366-slide-01.png`
- `tests/reports/c9-audit/desktop-1366-slide-06.png`
- `tests/reports/c9-audit/desktop-1366-slide-08.png`
- `tests/reports/c9-audit/landscape-small-slide-06.png`

Automated summary:

- Desktop low-density slides: 0.
- Mobile overflow count: 0.
- Equation text/code slides: 0.
- Narrow-text slides: 0.

## Review URL

Open:

`file:///Users/marioreis/Library/CloudStorage/Dropbox/Mac%20(6)/Documents/GitHub/titular/src/deck/index.html?template=1`

## Decision Needed

Final visual approval is still required after real memorial content is inserted. The user allowed the project to proceed to C10 while keeping equation formatting for C11.
