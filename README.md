# Memorial - Mario Reis - 2026

Project for preparing the memorial presentation for the professor titular examination at Instituto de Fisica da UFF.

## Current Phase

Change 003 has been executed: source extraction and narrative architecture.

No final factual memorial slides have been drafted yet.

## Specification System

The project follows Specification-Driven Development.

- Shared rules live in `.specs/shared/`.
- Approved implementation phases live in `.specs/changes/`.
- Only the currently approved change should be implemented.

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

The current deck contains placeholder slides only. Factual memorial content begins in later approved changes after source extraction and evidence mapping.

## Source Analysis

Change 003 extracted the local memorial and example presentation into `work/extracted/`, then created source, evidence, assumption, and narrative outline files under `work/analysis/`.

The extracted text files are private/generated working artifacts and remain ignored by Git. The evidence and outline files are intended to guide the next approved implementation phase.

Current presentation direction:

- Target duration: 50 minutes.
- Include a clear pre-UFF Aveiro phase: doutorado sanduiche, pos-doc, and CICECO.
- Make the physics/results section the most technically detailed part of the talk.
- Show main equations on technical physics slides.
- Include compact references in technical slide footers, without a final reference-list slide.

## Git Status

This folder was initialized as a local Git repository in Change 001.

Remote linking is pending. Do not add a GitHub or other remote until the user provides or approves the remote URL.

## Privacy Note

Treat the memorial source files as private by default. Do not upload, publish, or deploy source material without explicit approval.
