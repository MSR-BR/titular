# Change 004 - Implement Core Feature 2: Polished Memorial Deck

## Objective

Build the actual memorial presentation from the verified narrative outline and evidence registry.

## Requirements

- Create the final slide sequence.
- Use the evidence registry for all factual claims.
- Include speaker notes when needed for dense context.
- Use a mature visual system appropriate for a professor titular memorial.
- Rework the example presentation only where it improves the final argument.
- Include a future vision section grounded in the memorial and user-approved direction.
- Keep the deck concise enough for the target presentation duration once that duration is known.

## Acceptance Criteria

- The deck has a coherent memorial thesis.
- Every factual slide claim maps to at least one source.
- The deck includes trajectory, research, teaching, mentoring, service, integration, future vision, and closing.
- Slides are visually readable at 16:9 projection size.
- The final deck does not contain placeholder text.
- Any remaining uncertainties are clearly listed for user review.

## Files To Modify

- `src/deck/content/slides.yml` or equivalent.
- `src/deck/content/speaker-notes.md`
- `src/deck/assets/`
- `src/deck/styles/theme.css`
- `src/deck/styles/layouts.css`
- `work/analysis/evidence-registry.yml`
- `work/reviews/content-review.md`

## Tests To Run

- Citation audit.
- Placeholder scan.
- Visual smoke test at 16:9.
- Language consistency review.
- Manual source spot-check for high-risk claims.

## Completion Checklist

- [ ] User approval received.
- [ ] Slide sequence drafted.
- [ ] Claims linked to sources.
- [ ] Visual system applied.
- [ ] Speaker notes added where useful.
- [ ] Placeholder text removed.
- [ ] User review package prepared.
