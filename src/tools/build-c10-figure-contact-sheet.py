from pathlib import Path

from PIL import Image, ImageDraw


SOURCE_DIR = Path("src/deck/assets/figures")
OUTPUT = Path("tests/reports/c10-figure-contact-sheet.png")

THUMB_WIDTH = 260
THUMB_HEIGHT = 170
MARGIN = 20
LABEL_HEIGHT = 42
COLS = 3


def main() -> None:
    files = sorted(SOURCE_DIR.glob("*.png"))
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
        draw.text((x, y + THUMB_HEIGHT + 5), path.name, fill=(0, 0, 0))

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    sheet.save(OUTPUT)


if __name__ == "__main__":
    main()
