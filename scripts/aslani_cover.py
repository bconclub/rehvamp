"""Build the wide (desktop) memorial header for Dr Alexander Aslani's tribute
from the supplied portrait memorial card.

The portrait card itself is used as-is for mobile and the blog cards. For the
wide version we lift the photo (with its own soft lavender mist) off the card,
lay it on the left of a matching lavender canvas, and reset the
"In Loving Memory" lockup + eagle mark on the right.

Usage: python scripts/aslani_cover.py <serif-font.ttf>
"""
import random
import sys

from PIL import Image, ImageChops, ImageDraw, ImageFilter, ImageFont, ImageStat

FONT = sys.argv[1]
CARD = "scripts/source/aslani-memorial-card.png"
LOGO = "public/assets/logo-white.webp"
OUT_WIDE = "public/images/blog/dr-alexander-aslani-wide.webp"
OUT_PORTRAIT = "public/images/blog/dr-alexander-aslani-portrait.webp"

W, H = 2400, 960  # ~2.5:1, matches the blog post header box on desktop
INK = (38, 24, 74)
EAGLE = (61, 44, 141)

card = Image.open(CARD).convert("RGB")
card.save(OUT_PORTRAIT, "WEBP", quality=92, method=6)

# 1) Photo region off the card (head to mist)
photo = card.crop((0, 0, card.width, 900))

scale = H * 1.12 / photo.height
photo = photo.resize((int(photo.width * scale), int(photo.height * scale)), Image.LANCZOS)

# 2) Backdrop tinted to the card's own sky
# sample the sky right around his head so the photo edges don't show
samples = [ImageStat.Stat(card.crop(b)).mean for b in [(150, 120, 330, 330), (800, 250, 1100, 520), (40, 400, 200, 650)]]
base = tuple(int(sum(c) / len(samples)) for c in zip(*samples))
bg = Image.new("RGB", (W, H), base).convert("RGBA")
clouds = Image.new("RGBA", (W, H), (0, 0, 0, 0))
cd = ImageDraw.Draw(clouds)
random.seed(7)
for _ in range(60):
    x, y = random.randint(-200, W), random.randint(-200, H)
    rx, ry = random.randint(150, 520), random.randint(90, 300)
    col = random.choice([(255, 255, 255, 45), (215, 205, 240, 45), (232, 226, 248, 55)])
    cd.ellipse([x - rx, y - ry, x + rx, y + ry], fill=col)
bg = Image.alpha_composite(bg, clouds.filter(ImageFilter.GaussianBlur(90)))

# 3) Feathered mask so the photo's edges melt into the canvas
mask = Image.new("L", photo.size, 0)
md = ImageDraw.Draw(mask)
pad = 120
md.rounded_rectangle([pad, -400, photo.width - pad, photo.height - pad], radius=400, fill=255)
mask = mask.filter(ImageFilter.GaussianBlur(110))
# drop the card's own eagle (top right of the card) out of the photo, after
# feathering so the blur can't bleed it back in
knock = Image.new("L", photo.size, 255)
ImageDraw.Draw(knock).rectangle([int(780 * scale), 0, photo.width, int(200 * scale)], fill=0)
knock = knock.filter(ImageFilter.GaussianBlur(30))
mask = ImageChops.multiply(mask, knock)

px = int(W * 0.29) - photo.width // 2
py = H - photo.height + int(H * 0.06)
bg.paste(photo, (px, py), mask)
img = bg

# 4) Eagle mark, recoloured to brand purple
logo = Image.open(LOGO).convert("RGBA")
la = logo.split()[-1].point(lambda v: 255 if v > 40 else 0).filter(ImageFilter.MinFilter(5))
logo = logo.crop(la.getbbox())
lw = 300
logo = logo.resize((lw, int(logo.height * lw / logo.width)), Image.LANCZOS)
tint = Image.new("RGBA", logo.size, EAGLE + (255,))
tint.putalpha(logo.split()[-1])
img.alpha_composite(tint, (W - lw - 110, 80))

# 5) Text lockup, centred in the right half
d = ImageDraw.Draw(img)


def font(size, weight):
    f = ImageFont.truetype(FONT, size)
    try:
        f.set_variation_by_axes([weight])
    except Exception:
        pass
    return f


def spaced(text, f, cx, y, tracking, fill):
    widths = [d.textlength(ch, font=f) for ch in text]
    total = sum(widths) + tracking * (len(text) - 1)
    x = cx - total / 2
    for ch, w in zip(text, widths):
        d.text((x, y), ch, font=f, fill=fill)
        x += w + tracking


cx = int(W * 0.70)
spaced("IN LOVING MEMORY", font(46, 500), cx, 300, 14, INK)
name_f = font(150, 500)
name = "Dr. Alexander Aslani"
d.text((cx - d.textlength(name, font=name_f) / 2, 390), name, font=name_f, fill=INK)
spaced("PLASTIC SURGEON", font(40, 500), cx, 610, 9, INK)
spaced("FOUNDER, CIRUMED CLINIC  MARBELLA", font(40, 500), cx, 675, 9, INK)

img.convert("RGB").save(OUT_WIDE, "WEBP", quality=92, method=6)
print("saved", OUT_WIDE, img.size, "and", OUT_PORTRAIT, card.size)
