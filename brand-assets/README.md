# TeachBack AI — Brand Assets

These are standalone logo files exported from the actual logo used on the
live landing page. They do **not** depend on any project code and were
generated without modifying the running application.

## Files in this folder

| File                  | Format | Size            | Background  | Use it for                                  |
| --------------------- | ------ | --------------- | ----------- | ------------------------------------------- |
| `logo.svg`            | SVG    | 360 × 100 vbox  | Transparent | Web, scalable, any size (loads Sora via Google Fonts) |
| `logo-mark-only.svg`  | SVG    |  64 × 64  vbox  | Transparent | App icon, favicon source, watermark         |
| `logo@2x.png`         | PNG    | 724 × 128 px    | Transparent | Slides, docs, README headers                |
| `logo@3x.png`         | PNG    | 1095 × 200 px   | Transparent | Press kits, hi-DPI displays                 |
| `logo-mark@2x.png`    | PNG    | 128 × 128 px    | Transparent | Small badges, OG image overlays             |
| `logo-mark@3x.png`    | PNG    | 192 × 192 px    | Transparent | App icon raster, social avatars             |

Helper previews (safe to delete):

| File                          | Purpose                              |
| ----------------------------- | ------------------------------------ |
| `_preview-all-on-dark.png`    | Composite preview on dark background |
| `_preview-on-dark-logo.png`   | Full logo on dark, to verify clarity |
| `_preview-on-dark-mark.png`   | Mark-only on dark, to verify clarity |

## Brand specs

- **Background reference:** Deep black `#05070D`
- **Accent / icon / "AI" wordmark:** Cyan `#00E5FF`
- **Wordmark "TeachBack":** Pure white `#FFFFFF`
- **Typography:** Sora 700 (Google Fonts), letter-spacing −0.025em
- **Mark geometry:** 64 × 64 viewBox, rounded square `rx=16`,
  3 horizontal lines (lengths 30 / 23 / 15 px) at y = 22 / 32 / 42

## Important notes about backgrounds

- The PNGs are **transparent** — perfect for placing the logo on dark
  backgrounds (the brand context). The "TeachBack" wordmark is pure white,
  so it will be invisible on white pages. If you need a dark-on-light
  version, ping me and I'll generate a "dark wordmark" variant.
- The `logo.svg` file pulls the Sora font from Google Fonts at render time.
  This works perfectly in any browser. For offline / print / Adobe usage,
  prefer the PNG files.

## How to get them out of the box

All files live at `/app/brand-assets/`. To pull them locally:

```bash
# everything in one zip
cd /app && zip -r brand-assets.zip brand-assets
# then download brand-assets.zip however you usually pull files from the env
```
