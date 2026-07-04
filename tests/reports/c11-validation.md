# C11 Validation - Compiled Equation Assets

Date: 2026-07-04

Status: implemented and ready for visual user review.

## Rendering Method

- Source model: `src/deck/equations/equations.mjs`.
- Build script: `src/tools/build-c11-equations.mjs`.
- Output assets: `src/deck/assets/equations/*.svg`.
- Toolchain: local `pdflatex` plus `pdftocairo`.
- Method: each equation is compiled by LaTeX into a measured PDF box and converted to SVG for offline deck rendering.

## Validation

- `node src/tools/build-c11-equations.mjs`
  - Rendered 15 equation assets.
- `node src/tools/validate-equations.mjs`
  - Validated 15 generated assets.
  - Validated 15 assets used in the deck.
  - Validated 11 technical slides with rendered equation assets.
- `node src/tools/validate-c12-deck.mjs`
  - Browser visual smoke test passed after C12 integration.

## Notes

- Technical slides now reference SVG assets instead of visible LaTeX or hand-written HTML formulas.
- Equation source remains editable and traceable in `src/deck/equations/equations.mjs`.
- Final approval of visual equation appearance remains a user-review item.
