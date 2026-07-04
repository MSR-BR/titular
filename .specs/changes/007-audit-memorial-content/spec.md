# Change 007 - Audit Memorial Content

## Objective

Create a dense, source-traceable content map from `memorial.pdf` and the existing HTML presentation before rebuilding any slides.

## Requirements

- Do not edit the deck implementation in this change.
- Read the memorial as the primary source, not as a loose reference.
- Organize content into the required macro-sections: Formacao, UFF, Resultados, Impacto, Internacionalizacao, Futuro.
- Capture almost all relevant information from the memorial, but convert it into slide-ready telegraphic units.
- Identify which information should become a card, figure, equation, metric, timeline, transition slide, or speaker cue.
- Identify missing or weak evidence in the current C4 prototype.
- Explicitly list assumptions and user decisions needed before slide reconstruction.

## Acceptance Criteria

- A content audit file exists under `work/analysis/`.
- The audit maps memorial sections/pages to proposed slide uses.
- The audit distinguishes factual content, interpretation, figure candidates, equation candidates, and review questions.
- The audit names the expected section transitions.
- The user can approve or reject the audit before Change 008 starts.

## Files To Modify

- `work/analysis/memorial-content-audit.md`
- `work/analysis/evidence-registry.yml`
- `work/analysis/assumptions.md`
- `tests/reports/c7-validation.md`

## Tests To Run

- Source coverage check against the memorial table of contents.
- Placeholder/unsourced-claim scan.
- Manual spot-check of high-risk claims against `memorial.pdf`.

## Completion Checklist

- [x] User approval received for Change 007.
- [x] Memorial sections audited.
- [x] Existing HTML presentation audited for reusable content.
- [x] Figure/equation candidates listed.
- [x] Dense card-ready content units created.
- [x] Review questions listed.
- [x] User review package prepared.
