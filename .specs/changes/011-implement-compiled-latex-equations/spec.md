# Change 011 - Implement Compiled LaTeX Equations

## Objective

Render technical equations as compiled LaTeX-quality equations, not plain text or LaTeX source code.

## Requirements

- Choose an offline-safe equation rendering method.
- Preferred options: local KaTeX/MathJax bundle or generated SVG equation assets.
- Equations must display correctly in Safari and exported PDF.
- Equation source must remain editable and traceable.
- Technical slides must never show raw LaTeX code.
- Equation rendering must be validated with screenshots.

## Acceptance Criteria

- The deck can render compiled equations offline.
- At least the major technical slides show equations with subscripts, superscripts, integrals, sums, Greek symbols, and brackets correctly.
- Equation source and rendered output are both maintained.
- Safari/browser visual smoke test passes.

## Files To Modify

- `src/deck/equations/`
- `src/deck/assets/equations/`
- `src/deck/scripts/main.js`
- `src/deck/styles/layouts.css`
- `src/tools/validate-equations.mjs`
- `tests/reports/c11-validation.md`

## Tests To Run

- Equation render test.
- Raw-LaTeX visibility scan.
- Browser screenshot check.
- PDF export spot-check after Change 013.

## Completion Checklist

- [x] User approval received for Change 011.
- [x] Rendering approach selected.
- [x] Equation source model created.
- [x] Main technical equations rendered.
- [x] Raw-code scan passed.
- [ ] User approves equation appearance.

## Implementation Notes

- Implemented with local `pdflatex` plus `pdftocairo`.
- Equation sources live in `src/deck/equations/equations.mjs`.
- Rendered SVG assets live in `src/deck/assets/equations/`.
- Validation report: `tests/reports/c11-validation.md`.
