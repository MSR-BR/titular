from pathlib import Path

from PIL import Image, ImageDraw


SOURCE_DIR = Path("tmp/c10-pages")
OUTPUT = SOURCE_DIR / "contact-sheet.png"

THUMB_WIDTH = 280
THUMB_HEIGHT = 396
MARGIN = 22
LABEL_HEIGHT = 34
COLS = 4


def main() -> None:
    files = sorted(path for path in SOURCE_DIR.glob("*.png") if path.name != OUTPUT.name)
    rows = (len(files) + COLS - 1) // COLS
    sheet = Image.new(
        "RGB",
        (
            COLS * (THUMB_WIDTH + MARGIN) + MARGIN,
            rows * (THUMB_HEIGHT + LABEL_HEIGHT + MARGIN) + MARGIN,
        ),
        "white",
    )
    draw = ImageDraw.Draw(sheet)

    for index, path in enumerate(files):
        image = Image.open(path).convert("RGB")
        image.thumbnail((THUMB_WIDTH, THUMB_HEIGHT))
        x = MARGIN + (index % COLS) * (THUMB_WIDTH + MARGIN)
        y = MARGIN + (index // COLS) * (THUMB_HEIGHT + LABEL_HEIGHT + MARGIN)
        sheet.paste(image, (x + (THUMB_WIDTH - image.width) // 2, y))
        draw.text((x, y + THUMB_HEIGHT + 4), path.name, fill=(0, 0, 0))

    sheet.save(OUTPUT)


if __name__ == "__main__":
    main()
