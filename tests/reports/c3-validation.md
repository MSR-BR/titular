# Change 003 Validation

Date: 2026-07-03

## Extraction Checks

- `memorial.pdf`: extracted to `work/extracted/memorial-text.md`.
- Memorial page count from `pdfinfo`: 416.
- Memorial page sections extracted: 416, checked with `node src/tools/validate-c3-analysis.mjs`.
- `Defesa_de_Memorial_para_Professor_Titular.pdf`: extracted to `work/extracted/example-presentation-text.md`.
- Example presentation page count from `pdfinfo`: 20.
- Example HTML pages extracted: 20.
- Example PDF slide sections extracted: 20.

## Content Checks

- Source registry created.
- Evidence registry created.
- Narrative outline created.
- Deck outline created.
- Assumptions and open questions documented.
- Evidence registry validation passed: 30 evidence entries with allowed statuses only.
- Python extraction scripts passed `py_compile`.
- C3 validator passed with expected page and slide counts.
- User feedback incorporated: target duration is 50 minutes; pre-UFF Aveiro phase must be explicit; physics/results section must be more technically detailed and referenced.
- User feedback incorporated: main equations visible on technical slides; compact references in slide footers; no final reference-list slide.

## Review Notes

- The existing presentation is useful for structure but not authoritative for final numbers.
- The example presentation reports supervision numbers that differ from the memorial scoring tables.
- The Physica B Editor-in-Chief date needs confirmation before final slide use.
- Score totals should be visually checked before use because one extracted table label appears inconsistent.
- Extracted text files under `work/extracted/` are intentionally ignored by Git as private/generated artifacts.
- Change 004 should allocate the most detailed technical treatment to the physics/results section.
