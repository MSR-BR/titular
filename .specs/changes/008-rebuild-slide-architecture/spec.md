# Change 008 - Rebuild Slide Architecture

## Objective

Design a new end-to-end slide sequence from the Change 007 audit, before changing the visual template or deck files.

## Requirements

- Do not implement the full deck in this change.
- Build a logical memorial narrative with clear section changes.
- Use the macro-sections: Formacao, UFF, Resultados, Impacto, Internacionalizacao, Futuro.
- Define each slide as a purpose, content density target, visual type, source references, and speaker role.
- Prefer telegraphic cards, figures, metrics, and equations over prose paragraphs.
- Ensure the physics/results section has the richest technical detail.
- Explicitly mark where section divider slides should appear.
- Include a review gate before any template redesign.

## Acceptance Criteria

- A new slide architecture file exists under `src/deck/content/`.
- The architecture covers the whole presentation from opening to closing.
- Each planned slide has a section, title, content role, source basis, and output type.
- The sequence shows clear idea connections between sections.
- The user can approve or request reordering before Change 009 starts.

## Files To Modify

- `src/deck/content/rebuild-outline.md`
- `work/analysis/memorial-content-audit.md`
- `tests/reports/c8-validation.md`

## Tests To Run

- Section balance review.
- Source coverage review.
- Narrative continuity review.
- User-facing review of the proposed sequence.

## Completion Checklist

- [x] User approval received for Change 008.
- [x] Full sequence drafted.
- [x] Section transitions named.
- [x] Slide density targets defined.
- [x] Figure/equation/metric slots assigned.
- [x] User review package prepared.
