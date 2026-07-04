# Tools

Local scripts for extraction, validation, preview, and export live here.

## Change 002 Preview

The MVP deck foundation has no dependency installation step.

Preview options:

- Open `src/deck/index.html` directly in a browser.
- Or run `python3 -m http.server 8000` from the repository root and open `http://127.0.0.1:8000/src/deck/`.

## Export Plan

PDF export will be implemented later, after real sourced slides exist. The expected path is browser print/export from the HTML deck into `outputs/pdf/`.

## Change 004 Validation

Run `node src/tools/validate-c4-deck.mjs` to check that the real deck has no placeholders, includes explicit source mappings, includes technical equations, and follows the compact-reference decision.
