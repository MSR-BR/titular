# Change 005 - Testing And Validation

## Status

Deferred.

This original validation change is superseded by the rebuild path. Final validation should happen through Change 013 after Changes 007-012 are approved and completed.

## Objective

Validate the memorial deck for accuracy, coherence, visual quality, and export readiness.

## Requirements

- Run citation audit across the deck.
- Check all high-risk factual claims.
- Check slide readability and visual layout.
- Check language, tone, and narrative flow.
- Validate the deck against the output format rules.
- Produce a review report with blockers, warnings, and approved items.

## Acceptance Criteria

- No unsourced factual claims remain.
- No placeholders remain.
- No slide has obvious text overflow or unreadable contrast.
- Export path is tested before final delivery.
- Review report identifies any remaining user decisions.

## Files To Modify

- `tests/reports/citation-audit.md`
- `tests/reports/visual-review.md`
- `tests/reports/export-check.md`
- `tests/reports/final-validation.md`
- `work/reviews/final-content-review.md`
- Deck files only if validation requires fixes.

## Tests To Run

- Citation audit.
- Source spot-check.
- Placeholder scan.
- Link and asset check.
- Browser render check.
- PDF export smoke test.

## Completion Checklist

- [ ] User approval received.
- [ ] Citation audit complete.
- [ ] Visual review complete.
- [ ] Export check complete.
- [ ] Issues fixed or documented.
- [ ] Final validation report created.
