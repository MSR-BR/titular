# Change 013 - Final Validation And Export

## Objective

Validate the rebuilt memorial deck end to end and export final presentation artifacts.

## Requirements

- Run validation only after the user approves the rebuilt deck from Change 012.
- Validate source traceability, figure provenance, equation rendering, visual fit, and export fidelity.
- Export to the final user-approved format: PDF, HTML, PPTX, or combination.
- If deployment is requested, prefer GitHub Pages from the Git repository.
- Keep source materials in Git unless file size requires Git LFS or exclusion.
- Publish only after explicit approval of the final deck and final deploy target.

## Acceptance Criteria

- Final deck passes all validation checks.
- PDF/HTML export opens locally and preserves layout.
- Slide count, section transitions, figures, equations, references, and speaker orientation are verified.
- User receives final artifact paths.
- Optional commit/export/deployment happens only after approval.
- Optional GitHub Pages URL is verified before delivery if deployment is approved.

## Files To Modify

- `outputs/html/`
- `outputs/pdf/`
- `outputs/pptx/` if requested.
- `src/tools/export-deck.mjs`
- `.github/workflows/` if GitHub Pages needs an automated build/deploy workflow.
- `tests/reports/c13-validation.md`
- `README.md`

## Tests To Run

- Full source audit.
- Full visual screenshot pass.
- PDF render review.
- Safari/local browser smoke test.
- GitHub Pages smoke test if deployed.
- Final artifact open check.

## Completion Checklist

- [ ] User approval received for Change 013.
- [ ] Full validation passed.
- [ ] Final export generated.
- [ ] Final artifact reviewed.
- [ ] GitHub Pages deploy skipped or completed after approval.
- [ ] User approval received for commit or delivery.
