# Change 006 - Export Or Deployment

## Objective

Create the final shareable presentation artifacts and, if approved, deploy the static presentation.

## Requirements

- Export final HTML presentation to `outputs/html/`.
- Export final PDF presentation to `outputs/pdf/`.
- Export PPTX only if requested and technically reliable.
- Include a final README describing how to open and present the deck.
- Keep raw source materials separate from final outputs.
- Deploy only with explicit user approval.

## Acceptance Criteria

- Final HTML artifact opens correctly.
- Final PDF artifact opens correctly and preserves layout.
- Final artifacts are named clearly.
- The user receives exact artifact paths.
- Any deployment URL is shared only after approval and successful verification.

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
- Confirm source/private files are not bundled unintentionally.
- If deployed, run a hosted URL smoke test.

## Completion Checklist

- [ ] User approval received.
- [ ] HTML exported.
- [ ] PDF exported.
- [ ] Optional PPTX handled if requested.
- [ ] Final artifact paths documented.
- [ ] Deployment skipped or completed with approval.
