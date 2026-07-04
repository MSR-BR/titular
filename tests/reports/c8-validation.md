# Change 008 Validation

Date: 2026-07-03

## Scope

Validate the rebuilt slide architecture before visual redesign or deck implementation.

## Requirements Checked

- Change 008 was approved by the user before execution.
- The deck implementation was not rebuilt in this change.
- A new architecture file was created at `src/deck/content/rebuild-outline.md`.
- The architecture uses the macro-sections: Abertura, Formacao, UFF, Resultados, Impacto, Internacionalizacao, Futuro.
- Each planned slide has a section, title, output type, density target, purpose/content role, source basis, visual/equation slots, and speaker role.
- Section divider slides are explicitly marked.
- The physics/results section has the highest technical density and includes figure/equation slots.
- Backup slides are separated from the core sequence.

## Section Balance Review

Core sequence:

- Abertura: 4 slides.
- Formacao: 8 slides.
- UFF: 13 slides.
- Resultados: 21 slides.
- Impacto: 6 slides.
- Internacionalizacao: 3 slides.
- Futuro: 4 slides.

Total: 59 core slides, including 7 fast title/section/closing slides and 52 effective content slides.

## Source Coverage Review

- Formation and pre-UFF international arc: E003, E004, E005, E018, E030.
- UFF, teaching, people, books, laboratories, innovation and projects: E006-E016, E031-E033.
- Physics/results: E017-E023, E034-E035.
- Impact, editorial leadership and internationalization: E024-E026, E034.
- Future agenda: E027, E036.

## Narrative Continuity Review

The architecture follows this chain:

`formation method -> pre-UFF international autonomy -> UFF institutional construction -> technical physics results -> documented impact -> international networks -> titular responsibility`.

## Open Review Items

- Confirm whether 59 core slides is acceptable for the 50-minute talk.
- Confirm Aveiro wording: `2001-2002, with doctorate conclusion in 2003` versus `2001-2003`.
- Confirm `As Viagens de ibn Hakim` remains backup-only.
- Confirm score tables remain backup-only.
- Confirm visible Physica B wording: `Editor desde 2016; Editor-in-Chief desde 2025`.

## Result

Passed for phase completion. Change 009 can start after user approval.
