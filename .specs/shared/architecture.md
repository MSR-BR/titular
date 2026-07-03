# Architecture - Memorial Mario Reis 2026

## Purpose

Prepare a high-level memorial presentation for the professor titular examination at Instituto de Fisica da UFF, using the provided memorial material as the only factual base unless new sources are explicitly approved.

## Current Status

This repository is in specification mode. The `.specs` system exists to define the work before implementation. Change 001 was approved and executed on 2026-07-03. Later changes require user approval before implementation.

## Local Source Material Currently Visible

- `memorial.pdf`: full memorial PDF.
- `Defesa_de_Memorial_para_Professor_Titular.pdf`: existing example presentation.
- `Defesa_de_Memorial_para_Professor_Titular/`: HTML pages exported from the example presentation.
- Dropbox folder link supplied by the user: external source package, not yet ingested by the project pipeline.

## Core Assumptions

- Primary delivery should be a polished presentation, with HTML and PDF as the first target outputs.
- PPTX can be considered only if the user explicitly prefers editable PowerPoint.
- The presentation language is Portuguese unless the user asks otherwise.
- The audience is the banca named in the blueprint. No claims about individual banca members may be added unless sourced or approved.
- The source memorial and example presentation are authoritative inputs. Any extracted claim must remain traceable.
- No public deployment should happen without user approval.

## Proposed Folder Structure

To be created only after Change 001 is approved:

```text
.
  .specs/
    shared/
    changes/
  inputs/
    source/
    references/
  work/
    extracted/
    analysis/
    reviews/
  src/
    deck/
      content/
      assets/
      styles/
      scripts/
    tools/
  outputs/
    html/
    pdf/
    pptx/
  tests/
    fixtures/
    reports/
```

## System Architecture

The project uses a source-first presentation pipeline:

1. Source ingestion: register all provided PDFs, HTML exports, images, tables, and optional external sources.
2. Extraction: extract text, slide images, figures, and metadata into `work/extracted/`.
3. Evidence mapping: convert extracted material into a traceable evidence registry.
4. Narrative design: build a memorial outline from the evidence registry, not from memory.
5. Slide source: maintain slide content in structured files under `src/deck/content/`.
6. Rendering: render the deck to a static HTML presentation and export to PDF.
7. Validation: run citation, completeness, visual, language, and export checks.
8. Delivery: place final artifacts in `outputs/`.

## Recommended Technology

- Source of truth: structured Markdown/YAML plus HTML slide templates.
- Presentation renderer: static HTML presentation, likely Reveal.js or equivalent.
- Build tools: Node.js scripts kept small and local to `src/tools/`.
- Export: browser-based HTML to PDF export. PPTX export remains optional.
- Visual QA: browser screenshot checks where available.

This stack keeps the project reproducible and flexible while avoiding a heavyweight app that is not needed for the MVP.

## Content Model

Each factual content item should be represented by:

- `id`: stable source or evidence identifier.
- `source`: file or external source name.
- `location`: page, slide, section, table, or figure.
- `claim`: concise factual statement.
- `usage`: slide number or planned slide section.
- `status`: extracted, verified, needs_review, or rejected.

## Implementation Roadmap

1. Change 001 - Create project structure.
2. Change 002 - Implement MVP foundation.
3. Change 003 - Implement source extraction and narrative architecture.
4. Change 004 - Implement the polished memorial deck.
5. Change 005 - Run testing and validation.
6. Change 006 - Export or deploy final presentation artifacts.

## Testing Strategy

- Structure checks: required folders and files exist.
- Build checks: the deck can be rendered from source without manual steps.
- Citation checks: every factual slide claim maps to a source.
- Anti-hallucination checks: unsourced claims are flagged before delivery.
- Visual checks: title, charts, images, and text fit at desktop and presentation aspect ratios.
- Export checks: generated PDF opens, has the expected slide count, and preserves layout.
- Review checks: final deck is checked against the target audience and memorial objective.

## Deployment Strategy

Default delivery is local artifact delivery:

- `outputs/html/`: static presentation.
- `outputs/pdf/`: final PDF.
- `outputs/pptx/`: optional editable export if requested.

Optional deployment:

- Static hosting can be used only after approval.
- Any hosted version must avoid exposing private source material unless explicitly approved.

## Open Questions

- Target presentation duration.
- Preferred final format: PDF, HTML, PPTX, or a combination.
- Whether the final deck should include speaker notes.
- Whether external biographical or publication metadata may be used beyond the supplied memorial.
- Whether the presentation should follow a UFF or IF-UFF visual identity.
