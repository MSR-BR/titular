# Architecture - Memorial Mario Reis 2026

## Purpose

Prepare a high-level memorial presentation for the professor titular examination at Instituto de Fisica da UFF, using the provided memorial material as the only factual base unless new sources are explicitly approved.

## Current Status

This repository is in a controlled rebuild mode. Changes 001-003 created the project foundation, MVP renderer, and source analysis. Change 004 produced a first prototype, but the user rejected its content direction on 2026-07-03. The final deck must now follow the rebuild path in Changes 007-013.

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
- The user confirmed the material can be public and may live in Git.

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
- Equation rendering: LaTeX sources committed to Git, rendered either with local KaTeX/MathJax or generated SVG assets.
- Repository hosting: Git/GitHub should contain source files, public source materials, figures, equation sources, and rendered static deck assets.

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
4. Change 004 - First rendered prototype. Superseded after user review.
5. Change 005 - Original testing and validation. Deferred until rebuild.
6. Change 006 - Original export or deployment. Deferred until rebuild.
7. Change 007 - Audit memorial content.
8. Change 008 - Rebuild slide architecture.
9. Change 009 - Redesign template system.
10. Change 010 - Build figure and evidence library.
11. Change 011 - Implement compiled LaTeX equations.
12. Change 012 - Rebuild deck section by section.
13. Change 013 - Final validation and export.

## Rebuild Architecture

The rebuild path adds a stricter editorial pipeline before implementation:

1. Content audit: convert the memorial into dense, slide-ready content units.
2. Architecture: define every slide and transition before visual implementation.
3. Template system: approve a denser and more attractive visual language.
4. Figure library: extract and register figures from approved sources.
5. Equation system: render equations as compiled LaTeX-quality output.
6. Section rebuild: implement and review one section at a time.
7. Final validation: validate and export only after user approval.

The C4 prototype may be mined for reusable renderer code, but it is not the final content model.

## Testing Strategy

- Structure checks: required folders and files exist.
- Build checks: the deck can be rendered from source without manual steps.
- Citation checks: every factual slide claim maps to a source.
- Anti-hallucination checks: unsourced claims are flagged before delivery.
- Visual checks: title, charts, images, and text fit at desktop and presentation aspect ratios.
- Density checks: slides contain enough memorial information to support the oral presentation.
- Section checks: major section changes are visually and narratively explicit.
- Equation checks: equations are compiled/rendered, not shown as raw LaTeX source.
- Figure checks: every figure has provenance and a documented intended use.
- Export checks: generated PDF opens, has the expected slide count, and preserves layout.
- Review checks: final deck is checked against the target audience and memorial objective.

## Deployment Strategy

Default delivery is Git-backed local artifact delivery:

- `outputs/html/`: static presentation.
- `outputs/pdf/`: final PDF.
- `outputs/pptx/`: optional editable export if requested.

Preferred deployment:

- GitHub Pages, served from the repository after final user approval.
- GitHub Actions may be used only if a build/export step becomes necessary.
- If all files are static and buildless, GitHub Pages should serve the static HTML directly.

Fallback deployment:

- Vercel can be used only if GitHub Pages cannot meet the project need.

Repository size policy:

- Keep ordinary HTML, CSS, JS, Markdown, YAML, LaTeX, SVG, PNG/JPG/WebP, and normal PDFs in Git.
- Use Git LFS or exclude only files that exceed practical GitHub limits, especially assets near or above 100 MB.

## Open Questions

- Target presentation duration.
- Preferred final format: PDF, HTML, PPTX, or a combination.
- Whether the final deck should include speaker notes.
- Whether external biographical or publication metadata may be used beyond the supplied memorial.
- Whether the presentation should follow a UFF or IF-UFF visual identity.
- Whether article figures beyond the memorial may be extracted from external/online sources.
- Whether the final public URL should be GitHub Pages only or also mirrored elsewhere.
