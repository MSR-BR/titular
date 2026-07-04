# Change 004 - Implement Core Feature 2: Polished Memorial Deck

## Status

Superseded after user review.

The Change 004 prototype was useful as a first rendered deck, but the user rejected the content direction on 2026-07-03. It must not be treated as the final memorial structure. The rebuild path is now defined by Changes 007-013.

## Objective

Build the actual memorial presentation from the verified narrative outline and evidence registry.

## Requirements

- Create the final slide sequence.
- Use the evidence registry for all factual claims.
- Include speaker notes when needed for dense context.
- Use a mature visual system appropriate for a professor titular memorial.
- Rework the example presentation only where it improves the final argument.
- Design for a 50-minute presentation.
- Include an explicit pre-UFF international section on Aveiro: doutorado sanduiche, pos-doc, and CICECO Pesquisador Auxiliar.
- Make the physics/results section the most technically detailed portion of the deck.
- Add technical references for physics result slides as compact slide footers.
- Do not create a final reference-list slide unless the user later asks for one.
- Include a future vision section grounded in the memorial and user-approved direction.
- Keep the deck concise enough for the target presentation duration once that duration is known.

## Acceptance Criteria

- The deck has a coherent memorial thesis.
- Every factual slide claim maps to at least one source.
- The deck includes trajectory, research, teaching, mentoring, service, integration, future vision, and closing.
- The trajectory includes the pre-UFF Aveiro/CICECO period before the UFF consolidation section.
- Physics/result slides include technical detail and reference mapping.
- Main equations are visible on technical physics slides.
- Compact references appear in the footer of technical physics slides.
- Slides are visually readable at 16:9 projection size.
- The final deck does not contain placeholder text.
- Any remaining uncertainties are clearly listed for user review.

## Files Modified

- `src/deck/content/slides.js`
- `src/deck/assets/figures/`
- `src/deck/scripts/main.js`
- `src/deck/styles/theme.css`
- `src/deck/styles/layouts.css`
- `src/deck/styles/base.css`
- `src/tools/validate-c4-deck.mjs`
- `.gitignore`
- `work/reviews/content-review.md`
- `tests/reports/c4-validation.md`

## Tests To Run

- Citation audit.
- Placeholder scan.
- Visual smoke test at 16:9.
- Language consistency review.
- Manual source spot-check for high-risk claims.

## Completion Checklist

- [x] User approval received.
- [x] Slide sequence drafted.
- [x] Claims linked to sources.
- [x] Visual system applied.
- [x] Speaker notes added where useful.
- [x] Placeholder text removed.
- [x] User review package prepared.
