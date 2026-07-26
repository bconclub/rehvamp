"""Build a branded story cover for Aarav matching Elena's treatment:
purple eagle backdrop + subject cut out of the video frame + soft glow."""
from PIL import Image, ImageFilter, ImageDraw
from rembg import remove

FRAME = r"C:\Users\user\Rehvamp Foundation\.tmp_frame.jpg"
BG = r"C:\Users\user\Rehvamp Foundation\public\images\gaza\hero-bg-eagle.webp"
OUT = r"C:\Users\user\Rehvamp Foundation\public\images\stories\aarav-cover.webp"

W, H = 1400, 788  # 16:9

# 1) Background: brand eagle backdrop
bg = Image.open(BG).convert("RGBA").resize((W, H), Image.LANCZOS)

# 2) Soft radial glow behind where the subject will stand
glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
gd = ImageDraw.Draw(glow)
cx, cy = W // 2, int(H * 0.52)
for i in range(28, 0, -1):
    r = int(i * 15)
    a = int(4 + (28 - i) * 1.6)
    gd.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(150, 90, 220, a))
glow = glow.filter(ImageFilter.GaussianBlur(45))
bg = Image.alpha_composite(bg, glow)

# 3) Subject cutout from the video frame
subj = remove(Image.open(FRAME).convert("RGBA"))
bbox = subj.split()[-1].getbbox()
if bbox:
    subj = subj.crop(bbox)

# Scale so he occupies ~86% of the height, anchored to the bottom
target_h = int(H * 0.86)
ratio = target_h / subj.height
subj = subj.resize((int(subj.width * ratio), target_h), Image.LANCZOS)

# Feather the matte edges slightly so it doesn't look cut out
r, g, b, a = subj.split()
a = a.filter(ImageFilter.GaussianBlur(0.9))
subj = Image.merge("RGBA", (r, g, b, a))

# 4) Composite, centered horizontally, sitting on the bottom edge
x = (W - subj.width) // 2
y = H - subj.height
layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
layer.paste(subj, (x, y), subj)
out = Image.alpha_composite(bg, layer)

out.convert("RGB").save(OUT, "WEBP", quality=88, method=6)
print("saved", OUT, out.size)
