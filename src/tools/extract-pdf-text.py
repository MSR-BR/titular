#!/usr/bin/env python3
"""Extract page-by-page PDF text into a Markdown file."""

from __future__ import annotations

import argparse
from datetime import date
from pathlib import Path

import pdfplumber


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("input_pdf", type=Path)
    parser.add_argument("output_md", type=Path)
    parser.add_argument("--title", required=True)
    parser.add_argument("--source-id", required=True)
    return parser.parse_args()


def clean_text(text: str | None) -> str:
    if not text:
        return "[no extractable text]"
    text = text.replace("\x00", "")
    lines = [line.rstrip() for line in text.splitlines()]
    return "\n".join(lines).strip() or "[no extractable text]"


def main() -> None:
    args = parse_args()
    args.output_md.parent.mkdir(parents=True, exist_ok=True)

    with pdfplumber.open(args.input_pdf) as pdf:
        page_count = len(pdf.pages)
        parts = [
            f"# {args.title}",
            "",
            f"- Source ID: `{args.source_id}`",
            f"- Source file: `{args.input_pdf}`",
            f"- Extraction date: {date.today().isoformat()}",
            f"- Page count: {page_count}",
            "- Method: pdfplumber text extraction, one section per PDF page.",
            "",
        ]

        for index, page in enumerate(pdf.pages, start=1):
            parts.extend(
                [
                    f"## Page {index}",
                    "",
                    clean_text(page.extract_text()),
                    "",
                ]
            )

    args.output_md.write_text("\n".join(parts), encoding="utf-8")
    print(f"Wrote {args.output_md} with {page_count} pages.")


if __name__ == "__main__":
    main()
