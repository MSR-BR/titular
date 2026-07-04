from pathlib import Path

from PIL import Image, ImageOps


PAGE_DIR = Path("tmp/c10-pages")
FIGURE_DIR = Path("src/deck/assets/figures")


FIGURES = [
    {
        "source": "memorial-p012-012.png",
        "output": "formation-erice-2004.png",
        "box": (320, 170, 1248, 820),
    },
    {
        "source": "memorial-p021-021.png",
        "output": "sample-for-science-app.png",
        "box": (165, 170, 1385, 895),
    },
    {
        "source": "memorial-p025-025.png",
        "output": "tsallis-manganite-mh.png",
        "box": (385, 180, 1172, 748),
    },
    {
        "source": "memorial-p028-028.png",
        "output": "molecular-chain-na2cu5si4o14.png",
        "box": (250, 1010, 1305, 1422),
    },
    {
        "source": "memorial-p029-029.png",
        "output": "molecular-chit-fit-na2cu5si4o14.png",
        "box": (350, 500, 1240, 1038),
    },
    {
        "source": "memorial-p030-030.png",
        "output": "entanglement-witness.png",
        "box": (450, 1065, 1175, 1600),
    },
    {
        "source": "memorial-p032-032.png",
        "output": "graphene-entropy-oscillation.png",
        "box": (430, 205, 1228, 720),
    },
    {
        "source": "memorial-p035-035.png",
        "output": "impact-citations-trends.png",
        "box": (165, 665, 1350, 1335),
    },
    {
        "source": "memorial-p036-036.png",
        "output": "impact-scival-percentiles.png",
        "box": (220, 585, 1365, 1325),
    },
    {
        "source": "memorial-p038-038.png",
        "output": "impact-scopus-subjects.png",
        "box": (330, 220, 1268, 745),
    },
    {
        "source": "memorial-p038-038.png",
        "output": "impact-summary-box.png",
        "box": (170, 950, 1375, 1855),
    },
    {
        "source": "memorial-p039-039.png",
        "output": "books-academic-covers.png",
        "box": (160, 1125, 1360, 1672),
    },
    {
        "source": "memorial-p041-041.png",
        "output": "ibn-hakim-cover.png",
        "box": (875, 575, 1320, 1148),
    },
    {
        "source": "memorial-p043-043.png",
        "output": "physica-b-cover-2026.png",
        "box": (870, 845, 1340, 1395),
    },
]


def crop_figure(spec: dict[str, object]) -> None:
    source = PAGE_DIR / str(spec["source"])
    output = FIGURE_DIR / str(spec["output"])
    box = tuple(int(value) for value in spec["box"])

    image = Image.open(source).convert("RGB")
    crop = image.crop(box)
    crop = ImageOps.expand(crop, border=8, fill="white")
    output.parent.mkdir(parents=True, exist_ok=True)
    crop.save(output, optimize=True)


def main() -> None:
    for figure in FIGURES:
        crop_figure(figure)


if __name__ == "__main__":
    main()
