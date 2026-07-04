from pathlib import Path

from PIL import Image


for path in sorted(Path("tmp/c10-pages").glob("memorial-*.png")):
    image = Image.open(path)
    print(path.name, image.size)
