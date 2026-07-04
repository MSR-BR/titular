# Change 009 - Redesign Template System

Status: conditionally accepted to proceed; visual refinements continue during content insertion.

## Objective

Create a more attractive, dense, academic visual system before rebuilding the full deck.

## Requirements

- Redesign the template for information-rich memorial slides.
- Support beautiful telegraphic cards, section dividers, timelines, metrics, figure-heavy slides, technical equation slides, and comparison grids.
- Reduce empty space while preserving 16:9 readability.
- Create strong visual differences between major sections.
- Use real figures where available; do not rely on decorative placeholders.
- Produce only a small set of representative prototype slides first.
- Ask the user for approval before applying the template to the full deck.

## Acceptance Criteria

- The prototype includes 5-8 representative slide types.
- The prototype has a denser visual language than C4.
- Text is readable in Safari and browser screenshots.
- The template can support compiled LaTeX equations from Change 011.
- The user approves the visual direction before Change 010 or 012 implementation.

## Files To Modify

- `src/deck/styles/theme.css`
- `src/deck/styles/layouts.css`
- `src/deck/styles/base.css`
- `src/deck/scripts/main.js`
- `src/deck/content/template-prototypes.js`
- `tests/reports/c9-validation.md`

## Tests To Run

- Browser screenshot check at 16:9.
- Overflow scan.
- Mobile/non-primary viewport sanity check if needed.
- Manual user review of template prototypes.

## Completion Checklist

- [x] User approval received for Change 009.
- [x] Visual direction drafted.
- [x] 5-8 prototype slides created.
- [x] Section visual identities defined.
- [x] Overflow checks passed.
- [x] First sparse prototype rejected and audited.
- [x] Dense information-board redo implemented.
- [x] Redo visual validation passed for desktop and small review viewports.
- [x] User allowed the project to proceed to Change 010.
- [ ] User gives final visual approval after real memorial content is inserted.

## Rejection History

The user rejected the prototype because it is too sparse, responsive behavior is weak, equations look like code/text, and the layout does not fill the screen with enough information. See `tests/reports/c9-template-audit.md`.

The redo keeps the rejection audit as historical evidence and introduces a denser template system. Current validation is documented in `tests/reports/c9-redo-validation.md`.

## Conditional Acceptance Note

The user allowed the project to advance while noting that equations are still out of final format, card/text typography was too small, and the background gradient had become too subtle. In response, typography was increased and a stronger section gradient was restored. Equation finalization remains assigned to Change 011.
