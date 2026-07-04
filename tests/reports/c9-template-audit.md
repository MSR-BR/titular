# C9 Template Audit - Rejected Visual Direction

Date: 2026-07-03

Status: failed visual audit after user review.

## Executive Finding

The C9 template should not be used as the visual basis for the memorial deck.

It technically loads and passes a narrow desktop overflow check, but it fails the actual presentation requirement: information density. It also fails the user's review criteria: responsiveness feels broken, technical equations look like code/text, and large areas of the slide remain unused.

## Evidence Collected

Generated audit artifacts:

- `tests/reports/c9-audit/summary.json`
- `tests/reports/c9-audit/desktop-1366-slide-06.png`
- `tests/reports/c9-audit/desktop-1366-slide-08.png`
- `tests/reports/c9-audit/landscape-small-slide-06.png`

Automated summary:

- Desktop 16:9 had no hard overflow, but that only means content did not escape the slide box.
- Small landscape/portrait viewports overflowed on 16 checks.
- Slide 6 uses `inline-html-text` equations, not compiled equation assets.
- Slide 8 content area ratio was only 0.384, confirming excessive unused space.

## P0 Failures

### 1. Technical Slide Layout Collapses Text

Screenshot: `tests/reports/c9-audit/desktop-1366-slide-06.png`

Problem:

- The technical slide puts the text into a narrow left column.
- Words break vertically, which is worse than overflow because it technically fits but is unreadable.
- The center/right area has large unused space while the explanatory text is cramped.

Cause:

- The technical layout is built as a two-column composition with weak constraints.
- The renderer places `technical-body` directly in the slide grid instead of a more controlled full-width slide body.
- Text, equations, and cards compete for space instead of using a dense technical board.

Required fix:

- Replace the current technical layout with a full-slide technical board:
  - top compact title strip;
  - left or top equation block rendered as compiled asset;
  - central figure/result area;
  - right/bottom mechanism/result cards;
  - footer references.

### 2. Equations Are Not Acceptable

Screenshot: `tests/reports/c9-audit/desktop-1366-slide-06.png`

Problem:

- Equations are inline HTML text inside `.equation-line`.
- They are not compiled LaTeX/MathML/SVG assets.
- They look like code or temporary approximations.

Required fix:

- Stop using inline HTML equations as the visible final style.
- Either move equation rendering earlier or make C9 equation placeholders look like final rendered assets.
- Final technical slides must use compiled equation assets from C11.

### 3. Responsiveness Is Not Real

Screenshot: `tests/reports/c9-audit/landscape-small-slide-06.png`

Problem:

- At smaller viewport sizes, content is clipped/hidden.
- Navigation controls cover slide content.
- The template shrinks the whole 16:9 canvas without preserving readability.

Required fix:

- Define explicit supported presentation viewports:
  - primary: 16:9 desktop/projection;
  - secondary: Safari/desktop window;
  - review-only: small screens.
- For small screens, use a minimum slide width with horizontal fit/scroll or a rotate/desktop-review mode.
- Keep controls outside the content region or hide them during review/export.

### 4. Information Density Is Too Low

Screenshot: `tests/reports/c9-audit/desktop-1366-slide-08.png`

Problem:

- The closing slide has too much unused white space.
- Several prototype slides use one large title plus a few chips/cards where the user expects information-rich boards.
- The design still feels like a sparse keynote template, not a dense titular memorial board.

Required fix:

- Treat every non-cover slide as an information board.
- Section dividers should include a mini-map, key claims, or upcoming evidence, not just a title.
- Closing should include future agenda cards or a compact synthesis grid.

## P1 Failures

### 5. Visual Identity Is Not Strong Enough

Problem:

- Section color changes exist, but they do not create a clear enough change of chapter.
- The top/left bars feel decorative rather than structural.

Required fix:

- Use stronger section-specific compositions:
  - Formacao: timeline/dossier layout.
  - UFF: institutional evidence board.
  - Resultados: technical blackboard/data board.
  - Impacto: dashboard.
  - Internacionalizacao: network/map board.
  - Futuro: agenda board.

### 6. Typography Does Not Match Dense Academic Slides

Problem:

- Large headings consume too much vertical space.
- The serif title style makes some slides feel editorial but not efficient.
- Body type becomes too small or too narrow in technical contexts.

Required fix:

- Use compact academic typography:
  - smaller H1;
  - dense but readable body;
  - fixed minimum line widths;
  - no narrow text columns for prose.

### 7. Validation Criteria Were Too Weak

Problem:

- `validate-c9-template.mjs` passed desktop overflow but did not detect bad density or poor line wrapping.
- The validation treated mobile overflow as non-blocking, which hid a user-visible issue.

Required fix:

- Add validation checks for:
  - minimum content area occupancy per slide type;
  - maximum line breaks inside words;
  - no inline HTML equations in final technical mode;
  - no cramped text columns;
  - controls not covering content.

## New C9 Redesign Criteria

The replacement C9 must follow these rules:

- Dense by default: non-cover slides should target 70-85% useful content occupancy.
- Full information boards: no large decorative blank regions.
- Technical slides: equations, figures, model assumptions, parameters and references on the same board.
- Equations: no inline-code look; use compiled assets or realistic rendered placeholders until C11.
- Responsiveness: define and test real review modes, not only "does not overflow desktop".
- Section changes: each section must feel structurally different, not just a color swap.
- Controls: do not cover slide content in review mode.

## Recommended Decision

Reject the current C9 template and redo C9 before C10.

Do not move to the figure/evidence library or full deck implementation until the visual system is rebuilt around dense information boards.
