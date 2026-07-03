# Change 003 - Implement Core Feature 1: Source Extraction And Narrative Architecture

## Objective

Extract and organize the supplied memorial material into a verified evidence registry and narrative outline.

## Requirements

- Extract text from `memorial.pdf`.
- Extract usable structure from the example presentation PDF and HTML pages.
- Register all source files with stable identifiers.
- Create an evidence registry for factual claims.
- Draft a narrative outline for the final memorial deck.
- Explicitly list assumptions and open questions.
- Do not build polished final slides in this change.

## Acceptance Criteria

- Source extraction outputs exist under `work/extracted/`.
- Evidence registry maps claims to source locations.
- Narrative outline covers the expected memorial arc.
- Each planned section identifies required evidence.
- Unclear or missing items are marked `needs_review`.
- No unsupported factual claims are promoted to final slide content.

## Files To Modify

- `work/extracted/memorial-text.md`
- `work/extracted/example-presentation-text.md`
- `work/analysis/source-registry.yml`
- `work/analysis/evidence-registry.yml`
- `work/analysis/narrative-outline.md`
- `work/analysis/assumptions.md`
- `src/deck/content/outline.md`

## Tests To Run

- Check extracted page counts against source PDFs.
- Sample-check extracted text against the original PDFs.
- Validate evidence registry schema.
- Confirm every outline section references evidence or a `needs_review` marker.

## Completion Checklist

- [ ] User approval received.
- [ ] Memorial PDF extracted.
- [ ] Example presentation extracted.
- [ ] Evidence registry created.
- [ ] Narrative outline created.
- [ ] Assumptions documented.
- [ ] Review summary provided.
