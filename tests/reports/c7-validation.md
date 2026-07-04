# Change 007 Validation

Date: 2026-07-03

## Scope

Validate the content audit phase before any deck rebuild.

## Requirements Checked

- Change 007 was approved by the user before execution.
- Deck implementation files were not edited in this change.
- `memorial.pdf` remained the primary factual source.
- The existing example HTML/PDF presentation was treated as structural reference only.
- The audit maps content to the required macro-sections: Formacao, UFF, Resultados, Impacto, Internacionalizacao, Futuro.
- The audit distinguishes slide-ready facts, interpretation, figure candidates, equation candidates, transitions, and review questions.
- High-risk claims are marked for visual or user review.

## Source Coverage Check

Covered memorial sections:

- Chapter 1: opening thesis and memorial scope.
- Chapter 2: academic formation, CBPF, doctoral sandwich, postdoc and CICECO.
- Chapter 3: UFF entry, teaching, supervision, laboratories, Sample for Science, projects and administration.
- Chapter 4: six technical research lines and main equation/figure candidates.
- Chapter 5: production and impact metrics.
- Chapter 6: books, covers and ISBNs.
- Chapter 7: editorial leadership.
- Chapter 8: internationalization.
- Chapter 9: future agenda.
- Catalog sections 10-16: teaching/supervision details, books, intellectual production, grants/projects and scoring context.
- References section: compact technical footer references for research lines.

## Review Artifacts

- `work/analysis/memorial-content-audit.md`: created.
- `work/analysis/evidence-registry.yml`: updated with E031-E036.
- `work/analysis/assumptions.md`: updated with C7/C8 assumptions and review questions.
- `.specs/changes/007-audit-memorial-content/spec.md`: checklist updated.

## High-Risk Items Still Open

- Physica B Editor-in-Chief final wording/date should be confirmed by the user.
- Aveiro sandwich visible date range should be confirmed: narrative text supports 2001-2002; chapter summary supports 2001-2003.
- Some equations, especially MEM Eq. 4.13-4.15, require visual PDF or article-level confirmation before compilation.
- Supervision counts should use the memorial scoring table unless the user chooses a different visible summary.
- Score tables should remain backup-only unless the user requests a visible score slide.

## Result

Passed for phase completion. Change 008 can start after user approval.
