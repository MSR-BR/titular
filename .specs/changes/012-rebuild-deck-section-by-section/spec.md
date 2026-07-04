# Change 012 - Rebuild Deck Section By Section

## Objective

Rebuild the full memorial deck one approved section at a time, using the approved audit, slide architecture, template, figure library, and equation rendering system.

## Requirements

- Do not rebuild all sections in one pass.
- Work section by section and ask the user for approval after each section.
- Use dense, telegraphic cards instead of prose-heavy paragraphs.
- Include strong connection slides between sections.
- Include figures and equations where they support the argument.
- Keep compact references in footers.
- Preserve source traceability for all factual claims.

## Section Order

1. Formacao.
2. UFF.
3. Resultados.
4. Impacto.
5. Internacionalizacao.
6. Futuro e fechamento.

## Acceptance Criteria

- Each section is reviewed and approved before the next one starts.
- The final deck has coherent transitions and a clear memorial thesis.
- The deck is much denser than the C4 prototype while remaining readable.
- Technical result slides include compiled equations and figures when useful.
- The user confirms the full rebuilt deck before Change 013.

## Files To Modify

- `src/deck/content/slides.js`
- `src/deck/content/rebuild-outline.md`
- `src/deck/assets/figures/`
- `src/deck/assets/equations/`
- `src/deck/scripts/main.js`
- `src/deck/styles/`
- `work/reviews/section-review-*.md`
- `tests/reports/c12-validation.md`

## Tests To Run

- Per-section source coverage check.
- Per-section visual overflow check.
- Per-section user review.
- Full deck placeholder scan.
- Full deck source mapping check.

## Completion Checklist

- [x] User approval received for Change 012.
- [ ] Formacao rebuilt and approved.
- [ ] UFF rebuilt and approved.
- [ ] Resultados rebuilt and approved.
- [ ] Impacto rebuilt and approved.
- [ ] Internacionalizacao rebuilt and approved.
- [ ] Futuro/fechamento rebuilt and approved.
- [x] Full deck review package prepared.

## Implementation Notes

- First full visual pass implemented on 2026-07-04.
- Section approvals remain pending because this change is intended to be reviewed section by section.
- Review package: `work/reviews/section-review-c12-pass-1.md`.
- Validation report: `tests/reports/c12-validation.md`.
