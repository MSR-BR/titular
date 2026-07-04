# Project Rules

## Scope Rules

- The MVP is the memorial presentation, not a general-purpose app.
- The work must support the professor titular memorial defense.
- The example presentation may be used as a starting point, but the final output must be elevated to titular memorial level.
- Future features must remain out of scope until explicitly approved.

## Approval Rules

- Change 001 was approved by the user on 2026-07-03.
- Change 002 was approved by the user on 2026-07-03.
- Change 003 was approved by the user on 2026-07-03.
- Change 004 was approved by the user on 2026-07-03.
- Change 004 was later rejected as a content direction and must be treated as a superseded prototype, not a final deck.
- Change 007 was approved by the user on 2026-07-03 and is an audit/review phase only.
- Change 008 was approved by the user on 2026-07-03 and is a slide-architecture/review phase only.
- Change 009 was approved by the user on 2026-07-03 and is a visual-template prototype phase only.
- The first Change 009 prototype was rejected by the user and must not be used as the final visual direction.
- Changes 007-013 define the approved rebuild structure, but each change still requires explicit user approval before implementation.
- During Change 012, each section requires user approval before the next section is rebuilt.
- Public deployment, external data use, and source-file restructuring require explicit approval.

## Source Rules

- The supplied memorial PDF and example presentation are primary sources.
- Dropbox material must be ingested or mirrored into the local source registry before being cited.
- Any external source must be named, linked, dated, and approved.
- No result, publication count, award, date, role, or title may be invented.

## Publication Rules

- The user confirmed the memorial material can be public and can live in Git.
- Source material, extracted figures, deck source, rendered equation assets, and final outputs may be versioned when file sizes are practical.
- Use Git LFS or exclusion only for oversized files that exceed practical GitHub limits.
- Keep temporary caches, screenshots, and intermediate render folders out of Git unless explicitly needed for review.

## Quality Rules

- The deck must be coherent as a memorial narrative, not a list of CV items.
- The deck must be designed for a senior academic audience.
- The deck must be dense enough to contain most relevant memorial information in organized, telegraphic form.
- Slides should use beautiful cards, figures, metrics, timelines, section dividers, and compiled equations instead of long prose.
- Section transitions must be clear and named.
- Claims must be backed by the evidence registry.
- Visuals must support the argument and not behave as decoration.
- The final export must be tested in the same format the banca will receive.

## Rebuild Rules

- Follow `.specs/shared/rebuild-protocol.md`.
- Do not implement the full rebuilt deck in one pass.
- Do not start a new rebuild phase without user approval.
- Each phase must produce a review artifact.
- Do not commit the current C4 prototype as the final deck.

## Language Rules

- Default language: Portuguese.
- Academic tone: precise, confident, and sober.
- Avoid inflated language that the sources do not support.
- Avoid jokes, informal phrasing, or claims aimed at flattery.
