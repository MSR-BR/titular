# Change 010 Validation

Date: 2026-07-03

Status: figure/evidence library ready for user review.

## Scope

Build a local figure library from `memorial.pdf` and existing deck assets. No external downloads were used.

## Assets Produced

- Rendered candidate pages into `tmp/c10-pages/`.
- Generated deck-ready PNG crops under `src/deck/assets/figures/`.
- Created figure registry at `work/analysis/figure-registry.yml`.
- Created visual review sheet at `tests/reports/c10-figure-contact-sheet.png`.

## Coverage

The registry covers:

- Formation/international trajectory.
- UFF teaching, L3D and laboratory infrastructure.
- Sample for Science.
- Technical physics figures: Tsallis/manganites, molecular complexes, entanglement witness and graphene entropy oscillation.
- Scientific impact charts and summary box.
- Academic book covers.
- Physica B editorial role.
- Optional Ibn Hakim cover retained for later decision.

## Tests Run

- `node src/tools/validate-c9-template.mjs`: passed after C9 typography/gradient adjustments.
- `python3 src/tools/build-c10-figure-crops.py`: passed.
- `python3 src/tools/build-c10-figure-contact-sheet.py`: passed.
- `node --check src/tools/validate-c10-figures.mjs`: passed.
- `node src/tools/validate-c10-figures.mjs`: passed.

## Review Artifact

Open:

`tests/reports/c10-figure-contact-sheet.png`

## Remaining Decision

The user still needs to approve which C10 figures enter the rebuilt deck. The current recommendation is to use all `primary` assets, keep `secondary` assets where density helps, and treat optional/fallback assets case by case.
