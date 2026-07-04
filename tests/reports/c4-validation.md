# Change 004 Validation

Date: 2026-07-03

## Scope

Validate the first real memorial deck implementation.

## Requirements Checked

- Target duration: 50 minutes.
- Real slide content replaces placeholder deck.
- Pre-UFF Aveiro/CICECO phase is explicit.
- Physics/results section is technically detailed.
- Main equations appear on technical physics slides.
- Technical equations are rendered as typographic HTML/Unicode, not visible LaTeX-like code.
- Technical slides use compact reference footers.
- No final reference-list slide is included.
- Title slide uses only `Mario Reis` as the visible name.
- Index slide names the memorial sections: Formacao, UFF, Resultados, Impacto.
- Index slide does not show presentation timing.
- Slides 12, 15, and 16 include real figure assets extracted from the memorial.

## Checks

- `node --check src/deck/scripts/main.js`: passed.
- `node --check src/tools/validate-c4-deck.mjs`: passed.
- `node src/tools/validate-c4-deck.mjs`: passed.
- HTTP smoke test via local server on port 8766: `index.html`, `slides.js`, `layouts.css`, and `main.js` returned 200.
- Placeholder/reference-list scan: passed; no deck placeholder text or final reference-list slide found.
- Playwright visual smoke test: passed for slides 1, 3, 7, 8, 9, 12, 15, 16, 20, and 23; no console errors and no slide overflow.

## Result

Validated C4 deck: 41 slides, 12 technical slides, 3 Aveiro/CICECO slides.

## Visual Review Note

Automated in-app browser inspection was blocked earlier by the browser automation connection, but an independent local Playwright smoke test succeeded after the revision requested by the user. Manual/user review remains required before committing C4.
