# Change 004 Content Review

Date: 2026-07-03

## Review Package

The first real memorial deck has been implemented in `src/deck/content/slides.js` with rendering support in `src/deck/scripts/main.js` and the deck stylesheets.

## What Changed

- Built a 41-slide sequence for a 50-minute presentation.
- Added the missing pre-UFF international period: doutorado sanduiche, pos-doc, and Pesquisador Auxiliar at CICECO/Aveiro.
- Expanded the physics/results section into 12 technical slides.
- Added visible equations to the main technical physics slides, rendered as typographic HTML/Unicode rather than LaTeX-like code.
- Added compact technical references in slide footers.
- Removed the final reference-list slide from the plan, per user decision.
- Revised the title slide to show only `Mario Reis`.
- Reworked the index slide around Formacao, UFF, Resultados, and Impacto, with no time labels.
- Added real figure assets extracted from the memorial for books, Laboratorio de Magnetismo, and L3D.
- Increased visible text density and added stronger speaking orientation on Aveiro/CICECO and infrastructure slides.

## Review Focus

- Confirm whether the 50-minute balance feels right.
- Check whether the physics/result sequence should be more selective or more detailed.
- Confirm that each compact footer reference is acceptable for presentation style.
- Review whether the future agenda should be more institutional, scientific, or laboratory-centered.

## Known Pending Item

Human visual review is still needed before committing C4.
