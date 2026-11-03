"""Готовит подложку и подпись из исходного скана грамоты.

Запуск: python3 certificates/tools/build_assets.py путь/к/шаблону.webp
Результат: certificates/assets/background.png, certificates/assets/signature.png
"""
import sys
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter

OUT = Path(__file__).resolve().parent.parent / "assets"

src = Image.open(sys.argv[1]).convert("RGB")
W, H = src.size  # 1240 x 1748
a = np.asarray(src).astype(np.float32)
lum = a @ np.array([0.299, 0.587, 0.114], dtype=np.float32)

# --- подпись: тёмные штрихи в зоне подписи -> прозрачный PNG ---
sx0, sy0, sx1, sy1 = 630, 1345, 915, 1480
sig_l = lum[sy0:sy1, sx0:sx1]
alpha = np.clip((200 - sig_l) / 140, 0, 1)
alpha[alpha < 0.08] = 0
rgba = np.zeros((sy1 - sy0, sx1 - sx0, 4), dtype=np.uint8)
rgba[..., :3] = 20
rgba[..., 3] = (alpha * 255).astype(np.uint8)
sig = Image.fromarray(rgba, "RGBA")
sig = sig.crop(sig.getbbox())
sig.save(OUT / "signature.png")

# --- маска текста, который нужно убрать с подложки ---
zones = [
    (0, 290, W, 1335),        # весь смысловой блок
    (80, 1370, 630, 1460),    # должность
    (620, 1340, 930, 1485),   # подпись и белая заплатка под ней
    (960, 1380, 1180, 1430),  # ФИО
    (520, 1540, 770, 1600),   # дата
]
zone = np.zeros((H, W), bool)
for x0, y0, x1, y1 in zones:
    zone[y0:y1, x0:x1] = True

sat = a.max(axis=2) - a.min(axis=2)
ink = (lum < 175) | ((sat > 40) & (lum < 200))
mask = ink & zone
# белая прямоугольная заплатка за подписью тоже заменяется
patch = np.zeros_like(zone)
patch[1340:1485, 620:930] = True
mask |= patch

m_img = Image.fromarray((mask * 255).astype(np.uint8)).filter(ImageFilter.MaxFilter(9))
mask = np.asarray(m_img) > 0

# --- заполнение нормированной свёрткой (многоуровневое) ---
filled = a.copy()
known = (~mask).astype(np.float32)
for radius in (6, 14, 30, 60):
    w = Image.fromarray((known * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(radius))
    w = np.asarray(w).astype(np.float32) / 255
    acc = np.zeros_like(a)
    for c in range(3):
        ch = Image.fromarray(np.clip(filled[..., c] * known, 0, 255).astype(np.uint8))
        acc[..., c] = np.asarray(ch.filter(ImageFilter.GaussianBlur(radius))).astype(np.float32)
    est = acc / np.maximum(w, 1e-4)[..., None]
    upd = mask & (known < 0.5) & (w > 0.02)
    filled[upd] = est[upd]
    known = np.where(upd, 1.0, known)

# лёгкое осветление центральной зоны, чтобы новый текст читался
out = Image.fromarray(np.clip(filled, 0, 255).astype(np.uint8))
soft = Image.fromarray(np.clip(filled, 0, 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(1.2))
out = Image.composite(soft, out, Image.fromarray((mask * 255).astype(np.uint8)))
out.save(OUT / "background.png", optimize=True)
print("ok", sig.size)
