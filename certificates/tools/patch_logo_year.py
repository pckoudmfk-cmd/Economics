"""Меняет год в логотипе шапки: 2021 -> 2026 (заменяется последняя цифра).

Запуск после build_assets.py:  python3 certificates/tools/patch_logo_year.py
"""
from pathlib import Path
import numpy as np
from PIL import Image, ImageDraw, ImageFont, ImageFilter

P = Path(__file__).resolve().parent.parent / "assets" / "background.png"
im = Image.open(P).convert("RGB")
a = np.asarray(im).astype(np.float32)

# цифра «1» в «2021»: x 244..251, y 131..141 (координаты скана 1240 x 1748)
x0, y0, x1, y1 = 243, 129, 253, 143
lum = a[..., :3].mean(axis=2)
# цвет плашки и цвет цифр берём из соседних пикселей
ring = a[126:146, 236:256].reshape(-1, 3)
rl = ring.mean(axis=1)
teal = np.median(ring[rl < np.percentile(rl, 35)], axis=0)
glyph = a[131:142, 236:244].reshape(-1, 3)
gl = glyph.mean(axis=1)
ink = np.median(glyph[gl > np.percentile(gl, 85)], axis=0)

a[y0:y1, x0:x1] = teal
out = Image.fromarray(np.clip(a, 0, 255).astype(np.uint8))

# рисуем «6» с суперсэмплингом и накладываем по маске
S = 8
font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 15 * S)
m = Image.new("L", (12 * S, 16 * S), 0)
d = ImageDraw.Draw(m)
bb = d.textbbox((0, 0), "6", font=font)
gw, gh = bb[2] - bb[0], bb[3] - bb[1]
target_h, target_w = 11 * S, 7 * S
g = Image.new("L", (gw, gh), 0)
ImageDraw.Draw(g).text((-bb[0], -bb[1]), "6", font=font, fill=255)
g = g.resize((target_w, target_h), Image.LANCZOS)
m.paste(g, (0, 0))
m = m.resize((12, 16), Image.LANCZOS).filter(ImageFilter.GaussianBlur(0.35))
color = Image.new("RGB", m.size, tuple(int(c) for c in ink))
out.paste(color, (244, 131), m)
out.save(P, optimize=True)
print("teal", teal.astype(int), "ink", ink.astype(int))
