#!/usr/bin/env python3
"""Extract the example presentation from PDF pages and exported HTML pages."""

from __future__ import annotations

import argparse
import logging
import re
from datetime import date
from html.parser import HTMLParser
from pathlib import Path

import pdfplumber

logging.getLogger("pdfminer").setLevel(logging.ERROR)


class TextCollector(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self._skip_depth = 0
        self.parts: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if tag in {"script", "style"}:
            self._skip_depth += 1

    def handle_endtag(self, tag: str) -> None:
        if tag in {"script", "style"} and self._skip_depth:
            self._skip_depth -= 1

    def handle_data(self, data: str) -> None:
        if self._skip_depth:
            return
        text = re.sub(r"\s+", " ", data).strip()
        if text:
            self.parts.append(text)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("input_pdf", type=Path)
    parser.add_argument("input_html_dir", type=Path)
    parser.add_argument("output_md", type=Path)
    return parser.parse_args()


def clean_text(text: str | None) -> str:
    if not text:
        return "[no extractable text]"
    text = text.replace("\x00", "")
    return "\n".join(line.rstrip() for line in text.splitlines()).strip() or "[no extractable text]"


def page_number(path: Path) -> int:
    match = re.search(r"page_(\d+)\.html$", path.name)
    if not match:
        return 0
    return int(match.group(1))


def extract_html_text(path: Path) -> str:
    parser = TextCollector()
    parser.feed(path.read_text(encoding="utf-8", errors="replace"))
    return "\n".join(parser.parts).replace("\x00", "") or "[no extractable text]"


def main() -> None:
    args = parse_args()
    args.output_md.parent.mkdir(parents=True, exist_ok=True)

    parts = [
        "# Example Presentation Extraction",
        "",
        "- Source ID PDF: `EXPDF-local`",
        "- Source ID HTML: `EXHTML-local`",
        f"- PDF source file: `{args.input_pdf}`",
        f"- HTML source directory: `{args.input_html_dir}`",
        f"- Extraction date: {date.today().isoformat()}",
        "",
        "## PDF Slides",
        "",
    ]

    with pdfplumber.open(args.input_pdf) as pdf:
        pdf_page_count = len(pdf.pages)
        parts.append(f"- PDF page count: {pdf_page_count}")
        parts.append("")
        for index, page in enumerate(pdf.pages, start=1):
            parts.extend([f"### PDF Slide {index}", "", clean_text(page.extract_text()), ""])

    html_pages = sorted(args.input_html_dir.glob("page_*.html"), key=page_number)
    parts.extend(["## HTML Export Pages", "", f"- HTML page count: {len(html_pages)}", ""])

    for path in html_pages:
        number = page_number(path)
        parts.extend([f"### HTML Page {number}", "", extract_html_text(path), ""])

    args.output_md.write_text("\n".join(parts), encoding="utf-8")
    print(f"Wrote {args.output_md} with {pdf_page_count} PDF pages and {len(html_pages)} HTML pages.")


if __name__ == "__main__":
    main()
