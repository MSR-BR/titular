# Change 010 - Build Figure And Evidence Library

Status: ready for user review.

## Objective

Extract, organize, and document figures from the memorial and related article/source material for use in the rebuilt deck.

## Requirements

- Use `memorial.pdf` and approved local materials first.
- Extract figures, covers, tables, article graphics, lab photos, institutional screenshots, and result plots when present.
- Preserve provenance for every asset: source file, page/figure number, caption, and intended slide use.
- Do not use unsourced decorative imagery.
- Do not download external article figures unless the user explicitly approves external source use.
- Keep raw/intermediate extraction files out of final outputs.

## Acceptance Criteria

- A figure registry exists under `work/analysis/`.
- Deck-ready figure assets exist under `src/deck/assets/figures/`.
- Every figure has provenance and usage guidance.
- The user can approve which figures should enter the final deck.

## Files To Modify

- `src/deck/assets/figures/`
- `work/analysis/figure-registry.yml`
- `work/analysis/source-registry.yml`
- `tests/reports/c10-validation.md`
- `.gitignore`

## Tests To Run

- Asset existence check.
- Figure provenance check.
- Visual crop quality review.
- Copyright/privacy review before export.

## Completion Checklist

- [x] User approval received for Change 010.
- [x] Figure candidates extracted.
- [x] Figure registry created.
- [x] Crops reviewed for quality.
- [ ] User approves figure set for deck use.
