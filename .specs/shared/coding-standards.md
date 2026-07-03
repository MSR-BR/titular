# Coding Standards

## Development Style

- Follow Specification-Driven Development.
- Implement only the approved change folder.
- Keep each change small, reviewable, and reversible.
- Prefer plain, durable files over hidden generated state.
- Do not implement future features during the MVP.

## Repository Hygiene

- Do not move, rename, compress, or delete original user materials without approval.
- Generated outputs must live under `outputs/` or `work/`.
- Human-authored specifications and content must live under `.specs/` or `src/deck/content/`.
- Avoid committing temporary caches, system files, or large duplicated assets unless required.

## Code Style

- Prefer simple Node.js scripts for extraction, build, validation, and export.
- Keep scripts single-purpose and named by action, such as `extract-sources`, `validate-citations`, and `export-pdf`.
- Use structured data formats for content and evidence registries.
- Avoid fragile string parsing when a structured parser is available.
- Keep CSS modular: base, theme, layout, and print/export rules.
- Keep presentation templates separate from memorial content.

## Content Style

- Write slide text in polished Portuguese unless instructed otherwise.
- Prefer concise slide claims supported by richer speaker notes.
- Use exact names, dates, titles, and metrics only when verified from source material.
- Mark uncertain content as `needs_review` rather than smoothing it over.

## Accessibility And Legibility

- Use high contrast text and backgrounds.
- Maintain consistent font sizes for projected readability.
- Avoid overcrowded slides.
- Provide descriptive alt text or internal descriptions for important images.
- Do not rely on color alone to distinguish categories.

## Validation Expectations

Each implemented change should state:

- What was changed.
- Which files were modified.
- Which tests or checks were run.
- Which risks remain.
