"""Build the memorial headers for Dr Alexander Aslani's tribute, matching the
supplied portrait card: soft lavender sky, subject faded into it,
"In Loving Memory" serif lockup and the purple eagle mark.

Usage: python scripts/aslani_cover.py scripts/source/dr-alexander-aslani.webp <serif-font.ttf> [wide|portrait]
  wide     -> desktop header (2400x960)
  portrait -> mobile header (1122x1402)
"""
import random
import sys

from PIL import Image, ImageDraw, ImageFilter, ImageFont
from rembg import remove

PHOTO, FONT = sys.argv[1], sys.argv[2]
MODE = sys.argv[3] if len(sys.argv) > 3 else "wide"
LOGO = "public/assets/logo-white.webp"
OUT = f"public/images/blog/dr-alexander-aslani-{MODE}.webp"

L = {
    # ~2.5:1, matches the blog post header box on desktop
    "wide": dict(size=(2400, 960), subj_h=1.04, subj_cx=0.30, mist=(0.55, 1.0),
                 logo_w=300, logo_xy=(110, 80), text_cx=0.70,
                 text_y=(300, 390, 610, 675), sizes=(46, 150, 40), track=(14, 9)),
    "portrait": dict(size=(1122, 1402), subj_h=0.66, subj_cx=0.50, mist=(0.40, 0.66),
                     logo_w=250, logo_xy=(48, 44), text_cx=0.50,
                     text_y=(925, 1000, 1160, 1215), sizes=(36, 112, 30), track=(11, 6)),
}[MODE]
W, H = L["size"]
INK = (38, 24, 74)
EAGLE = (61, 44, 141)

# 1) Lavender "cloud" backdrop
bg = Image.new("RGB", (W, H), (234, 228, 246))
clouds = Image.new("RGBA", (W, H), (0, 0, 0, 0))
cd = ImageDraw.Draw(clouds)
random.seed(7)
for _ in range(70):
    x, y = random.randint(-200, W), random.randint(-200, H)
    rx, ry = random.randint(150, 520), random.randint(90, 300)
    col = random.choice([(255, 255, 255, 70), (214, 202, 240, 80), (200, 186, 236, 55)])
    cd.ellipse([x - rx, y - ry, x + rx, y + ry], fill=col)
clouds = clouds.filter(ImageFilter.GaussianBlur(90))
bg = Image.alpha_composite(bg.convert("RGBA"), clouds)

# 2) Subject cut out, cropped to head and shoulders
subj = remove(Image.open(PHOTO).convert("RGBA"))
bbox = subj.split()[-1].getbbox()
subj = subj.crop(bbox)
subj = subj.crop((0, 0, subj.width, int(subj.height * 0.78)))
target_h = int(H * L["subj_h"])
ratio = target_h / subj.height
subj = subj.resize((int(subj.width * ratio), target_h), Image.LANCZOS)

# Soft matte edge + long fade at the bottom so he dissolves into the sky
r, g, b, a = subj.split()
a = a.filter(ImageFilter.GaussianBlur(1.2))
fade = Image.new("L", subj.size, 255)
fd = ImageDraw.Draw(fade)
start = int(subj.height * 0.70)
for yy in range(start, subj.height):
    t = (yy - start) / (subj.height - start)
    fd.line([(0, yy), (subj.width, yy)], fill=int(255 * (1 - t) ** 1.2))
fade = fade.filter(ImageFilter.GaussianBlur(25))
a = Image.composite(a, Image.new("L", subj.size, 0), fade)
subj = Image.merge("RGBA", (r, g, b, a))

sx = int(W * L["subj_cx"]) - subj.width // 2
layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
# Top of the head runs off the canvas: the source photo crops his hair flat
layer.paste(subj, (sx, -12), subj)
img = Image.alpha_composite(bg, layer)

# Lavender mist rising from the bottom so the shirt dissolves softly
mist = Image.new("RGBA", (W, H), (238, 233, 248, 0))
md = ImageDraw.Draw(mist)
m0, m1 = int(H * L["mist"][0]), int(H * L["mist"][1])
for yy in range(m0, H):
    t = min(1, (yy - m0) / (m1 - m0))
    md.line([(0, yy), (W, yy)], fill=(238, 233, 248, int(255 * min(1, t ** 1.5 * 1.1))))
img = Image.alpha_composite(img, mist)

# 3) Eagle mark, recoloured to brand purple
logo = Image.open(LOGO).convert("RGBA")
la = logo.split()[-1].point(lambda v: 255 if v > 40 else 0).filter(ImageFilter.MinFilter(5))
logo = logo.crop(la.getbbox())
lw = L["logo_w"]
logo = logo.resize((lw, int(logo.height * lw / logo.width)), Image.LANCZOS)
tint = Image.new("RGBA", logo.size, EAGLE + (255,))
tint.putalpha(logo.split()[-1])
img.alpha_composite(tint, (W - lw - L["logo_xy"][0], L["logo_xy"][1]))

# 4) Text lockup
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


cx = int(W * L["text_cx"])
y1, y2, y3, y4 = L["text_y"]
s_kicker, s_name, s_role = L["sizes"]
t_kicker, t_role = L["track"]
spaced("IN LOVING MEMORY", font(s_kicker, 500), cx, y1, t_kicker, INK)
name_f = font(s_name, 500)
name = "Dr. Alexander Aslani"
d.text((cx - d.textlength(name, font=name_f) / 2, y2), name, font=name_f, fill=INK)
spaced("PLASTIC SURGEON", font(s_role, 500), cx, y3, t_role, INK)
spaced("FOUNDER, CIRUMED CLINIC  MARBELLA", font(s_role, 500), cx, y4, t_role, INK)

img.convert("RGB").save(OUT, "WEBP", quality=90, method=6)
print("saved", OUT, img.size)
