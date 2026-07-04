# C12 Validation - First Visual Rebuild Pass

Date: 2026-07-04

Status: first full-deck visual pass implemented; section-by-section user approval pending.

## Scope

- Integrated explicit section labels across the deck.
- Added compiled equation assets to the main technical slides.
- Added figure assets from the C10 figure library to representative technical, impact, editorial, books, lab, L3D, and innovation slides.
- Corrected Aveiro chronology to 2001-2002, return to Brazil, and thesis defense at CBPF in 2003.
- Improved technical layout behavior so equation/figure panels use available slide width when no secondary panel exists.

## Validation Commands

- `node --check src/deck/scripts/main.js`
- `node --check src/deck/content/slides.js`
- `node --check src/tools/build-c11-equations.mjs`
- `node --check src/tools/validate-equations.mjs`
- `node src/tools/validate-equations.mjs`
- `node src/tools/validate-c4-deck.mjs`
- `node src/tools/validate-c10-figures.mjs`
- `node src/tools/validate-c12-deck.mjs`

## Visual QA

- Browser validation covered 41 slides.
- No overflow detected.
- No broken figure or equation images detected.
- Technical slides use SVG equation assets.
- Screenshots saved in `tests/reports/c12-visual/`.

## Review Focus

- Confirm equation size/appearance on technical slides.
- Confirm density and connection of the Results section.
- Confirm whether the current title/section hierarchy is closer to the desired memorial style.
- Approve or request changes section by section before C13 final export.
