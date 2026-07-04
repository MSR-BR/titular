# Change 006 - Export Or Deployment

## Status

Deferred.

This original export/deployment change is superseded by the rebuild path. Final export should happen through Change 013 after the rebuilt deck is approved.

## Objective

Create the final shareable presentation artifacts and, if approved, deploy the static presentation.

## Requirements

- Export final HTML presentation to `outputs/html/`.
- Export final PDF presentation to `outputs/pdf/`.
- Export PPTX only if requested and technically reliable.
- Include a final README describing how to open and present the deck.
- Keep raw source materials separate from final outputs.
- Prefer GitHub Pages for deployment if a public URL is needed.
- Use Vercel only as fallback if GitHub Pages is insufficient.
- Deploy only after explicit user approval of the final deck.

## Acceptance Criteria

- Final HTML artifact opens correctly.
- Final PDF artifact opens correctly and preserves layout.
- Final artifacts are named clearly.
- The user receives exact artifact paths.
- Any deployment URL is shared only after approval and successful verification.
- GitHub Pages is documented as the preferred deploy target.

## Files To Modify

- `outputs/html/`
- `outputs/pdf/`
- `outputs/pptx/` if requested.
- `outputs/README.md`
- `tests/reports/export-check.md`
- `README.md`

## Tests To Run

- Open exported HTML locally.
- Open exported PDF locally.
- Confirm slide count and order.
- Confirm temporary/cache files are not bundled unintentionally.
- If deployed, run a GitHub Pages URL smoke test.

## Completion Checklist

- [ ] User approval received.
- [ ] HTML exported.
- [ ] PDF exported.
- [ ] Optional PPTX handled if requested.
- [ ] Final artifact paths documented.
- [ ] Deployment skipped or completed with approval.
