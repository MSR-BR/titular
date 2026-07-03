# Change 002 - Implement MVP Foundation

## Objective

Create the minimal technical foundation for a reproducible presentation build, without adding final memorial content.

## Requirements

- Select and document the final MVP rendering stack.
- Add package/build configuration only if needed.
- Create a placeholder deck shell with neutral sample slides clearly marked as placeholders.
- Add base visual theme files for academic presentation use.
- Add scripts for local preview and export planning.
- Keep presentation content separate from templates and styles.

## Acceptance Criteria

- The deck shell can be opened or served locally.
- Placeholder content is clearly marked and cannot be mistaken for final memorial content.
- The project has a documented build command or manual open path.
- The style system supports title, section, content, image, timeline, and closing slide layouts.
- No factual memorial claims are introduced.

## Files To Modify

- `package.json` if a Node build is approved.
- `src/deck/index.html`
- `src/deck/content/slides.yml` or equivalent slide source.
- `src/deck/styles/base.css`
- `src/deck/styles/theme.css`
- `src/deck/scripts/main.js`
- `src/tools/README.md`
- `README.md`

## Tests To Run

- Static open or local preview smoke test.
- HTML validity check where practical.
- CSS visual sanity check at 16:9 ratio.
- Confirm no source claims exist in placeholder slides.

## Completion Checklist

- [ ] User approval received.
- [ ] Rendering stack documented.
- [ ] Deck shell created.
- [ ] Placeholder slides marked.
- [ ] Local preview verified.
- [ ] No factual content added.
