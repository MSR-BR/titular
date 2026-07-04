# Memorial - Mario Reis - 2026

Project for preparing the memorial presentation for the professor titular examination at Instituto de Fisica da UFF.

## Current Phase

The project is being restructured for a full deck rebuild. The Change 004 prototype was reviewed and rejected for insufficient content density and weak memorial structure.

The rebuild path is now Changes 007-013. The next phase is Change 007: audit memorial content.

## Specification System

The project follows Specification-Driven Development.

- Shared rules live in `.specs/shared/`.
- Approved implementation phases live in `.specs/changes/`.
- Only the currently approved change should be implemented.
- The rebuild protocol lives in `.specs/shared/rebuild-protocol.md`.

## Directory Map

- `.specs/`: architecture, rules, and change specs.
- `inputs/`: source materials and approved references.
- `work/`: extraction, analysis, and review working files.
- `src/`: future presentation source, templates, styles, and tools.
- `outputs/`: generated presentation artifacts.
- `tests/`: validation fixtures and reports.

## MVP Deck Foundation

Rendering stack: static HTML, CSS, and vanilla JavaScript. No external dependencies are required for Change 002.

Preview options:

- Open `src/deck/index.html` directly in a browser.
- Or serve the repository root with `python3 -m http.server 8000` and open `http://127.0.0.1:8000/src/deck/`.

The current deck is a superseded prototype. It may be useful for renderer code, but it is not the final content direction.

## Source Analysis

Change 003 extracted the local memorial and example presentation into `work/extracted/`, then created source, evidence, assumption, and narrative outline files under `work/analysis/`.

The extracted text files are generated working artifacts and remain ignored by Git unless later needed for review. The evidence and outline files are intended to guide the next approved implementation phase.

Current presentation direction:

- Much denser slides with telegraphic information organized in attractive cards.
- Clear section changes: Formacao, UFF, Resultados, Impacto, Internacionalizacao, Futuro.
- More figures from the memorial and approved article/source material.
- Compiled LaTeX-quality equations, not raw equation code.
- Step-by-step rebuild with user approval after each phase.

## Git Status

This folder was initialized as a local Git repository in Change 001.

Remote linking is pending. GitHub Pages is now the preferred deployment target once the rebuilt deck is approved and a remote repository exists.

## Privacy Note

The user confirmed the project material can be public and can live in Git. Use Git LFS or exclusion only for files that exceed practical GitHub size limits.
