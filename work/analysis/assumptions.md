# Assumptions And Open Questions

Date: 2026-07-03

## Assumptions

- The final presentation language is Portuguese.
- The presentation duration is 50 minutes.
- The primary factual source is `memorial.pdf`.
- The existing example presentation is a structural reference, not an authoritative source for quantitative claims.
- The final MVP target remains HTML plus PDF export unless the user requests PPTX.
- GitHub Pages is the preferred deployment path if the final HTML/PDF can be served directly from the repository.
- The memorial material is public and may live in Git when file sizes are practical.
- The presentation should feel like a professor titular memorial: concise, evidence-backed, and senior in tone.
- The user prefers slides that are full of organized information; excessive white space is a design failure for this deck.
- The rejected C9 prototype must be replaced by a denser information-board visual system before moving to figures or implementation.
- The C4 deck is a superseded prototype and should not be committed as the final content direction.
- Change 007 should produce review artifacts only; the deck implementation should not be edited until Change 008 or later.
- Change 008 should rebuild the slide architecture from the audit, not merely patch the current slide order.
- The trajectory section must explicitly include the pre-UFF international phase in Aveiro: doctoral sandwich, postdoctoral work, and Pesquisador Auxiliar at CICECO.
- The physics/results section must be substantially more detailed than the trajectory sections, with technical content, formulas or figures where useful, and clear references.
- Extracted text is not a substitute for visual PDF verification, especially for tables, figures, dates, and metrics.
- Equations in the technical slides should be compiled/typeset in Change 011, not shown as raw LaTeX source or rough placeholder text.

## Open Questions

- Should the final deck include speaker notes, or should dense telegraphic slide cards carry all speaking cues?
- Personal/family biographical material should remain mostly optional spoken context unless later requested.
- Should the deck use institutional visual identity from UFF or IF-UFF?
- Should the Dropbox folder be mirrored into the Git project during the figure/source phase, or are the local files sufficient?
- Final quantitative score tables should remain backup-only.
- The literary book `As Viagens de ibn Hakim` should remain in the visual deck for now and can be removed later if needed.
- The Aveiro sandwich should be displayed as 2001-2002; the candidate returned to Brazil and defended the thesis at CBPF in 2003.
- The rebuilt deck can be denser than C4; C8 currently proposes 59 core slides including fast section/title slides.
- Physica B wording confirmed by user: Editor since 2016; Editor-in-Chief since 2025.
- Confirm the final supervision counts to display: the memorial scoring table supports 4 master's supervisions, 5 doctoral supervisions as advisor, and 1 doctoral co-supervision; the example presentation uses larger approximate counts.

## User Decisions

- Technical physics slides should show the main equations visibly.
- Technical references should appear as compact footers on the relevant slides.
- No final reference-list slide is needed.

## Source Risks

- Some PDF text extraction contains line breaks and hyphenation artifacts.
- Some quantitative table values require visual confirmation before appearing on final slides.
- Bibliometric values should be treated as a dated snapshot from the memorial, not as live/current metrics.
