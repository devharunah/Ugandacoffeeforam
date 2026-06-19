# Kawa Website — Technical Specification

> **Version 1.0** · Implementation guide for `Kawa Website.html` + `kawasite.css`
> Audience: the engineer (or coding agent) building the Kawa marketing site. This is the *how to build it* companion to `Kawa Web Design Spec.md` (the *what it looks like* doc). Read both.

---

## 1. Stack & architecture

| Concern | Decision |
|---|---|
| Markup | Static, semantic HTML5. One document, section-per-block. |
| Styling | A single hand-authored stylesheet, `kawasite.css`. **All design decisions are CSS custom properties** declared in `:root`. No inline styles except a few one-off overlay positions. |
| JS | None required for the current build — the site is fully static. `<details>` drives the FAQ natively. Add JS only if you introduce a menu/carousel. |
| Icons | One inline SVG sprite (`<svg><defs><g id="w-*">`), referenced via `<use href="#w-name">`. Inherits `currentColor`. |
| Images | User photography goes through `<image-slot>` (`image-slot.js`) — drag-and-drop, persists to a sidecar. The product is shown via **native CSS phone mockups**, not images. |
| Fonts | Inter via Google Fonts (see §3). |
| Build | None needed. To ship: minify CSS, self-host fonts (below), inline the SVG sprite (already inline). Framework port notes in §8. |

**File map**
```
Kawa Website.html      ← the page
kawasite.css           ← the design system + components
image-slot.js          ← user-fillable photo placeholders
assets/mockups/*.png   ← downloadable KawaScan screen renders (§7)
Kawa Web Design Spec.md ← visual system + component provenance
Kawa Website Tech Spec.md ← this file
```

---

## 2. The anti-generic mandate — components come from named libraries

**This is the core rule of the build and must survive every future change.** To keep the UI from drifting into generic, arbitrary "AI-looking" components, **every component is modeled on a documented pattern from one of two open UI libraries**, then re-skinned in Kawa tokens. We adopt their *structure and interaction patterns only* — never their proprietary branding, fonts, icons, or assets, and we do not clone any company's product.

| Library | Pattern we adopt | Where it's used in the build |
|---|---|---|
| **Sanity UI** | Flat surfaces, hairline 1px borders, editorial type rhythm, restrained neutrals, generous whitespace, monospace micro-labels | `.scard` (flat), `.faq details`, `footer`, section scaffolding, `.eyebrow` |
| **Material You (M3)** | Pill / full-radius buttons, **tonal** (tinted) containers, 13–16px container radius, segmented selection, lifted FAB | `.wbtn` (all variants), `.scard.tonal`, badges/tags, the rounded `.stage` panel, the phone's camera FAB |

**Enforcement rules**
1. A new component **must** map to a pattern in Sanity UI or Material You. If it maps to neither, do not invent one — compose from existing patterns.
2. Re-skin only: take structure/behavior from the library; take **color, radius, type, spacing from Kawa tokens** (§4).
3. One governing library per component. Never blend (e.g. don't give a Sanity flat card a Material tonal blob shape and a third radius).
4. No third-party brand assets: icons are Kawa's own line set; the only font is Inter.

> Put this section in front of anyone (human or agent) before they add UI. It is the reason the site looks intentional rather than templated.

---

## 3. Typography & fonts

**Family:** Inter (one family, whole site). Loaded from Google Fonts in `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;550;600;650;700;750;800&display=swap" rel="stylesheet">
```

**Weights shipped:** 400 (body) · 500 (nav/labels) · 550 (small strong) · 600 (buttons, links) · 650 (emphasis) · 700 (section heads) · 750 (hero/brand) · 800 (step numerals).

**Mono** (eyebrows only): the system mono stack — `ui-monospace, "SF Mono", "JetBrains Mono", "Roboto Mono", monospace`. No web-font download needed.

**Type scale** (all in `kawasite.css`):

| Role | Declaration | Weight / tracking |
|---|---|---|
| Hero H1 | `clamp(46px, 6vw, 78px)` | 750 / −0.035em |
| Section H2 | `clamp(32px, 4vw, 46px)` | 700 / −0.025em |
| Band statement | `clamp(34px, 4.6vw, 58px)` | 700 / −0.03em |
| Lead paragraph | 18–20px | 400 / 1.55–1.6 line-height |
| Body | 14.5–15.5px | 400 |
| Card title | 19–21px | 700 / −0.02em |
| Eyebrow | 12.5px **mono** | 500 / +0.12em / UPPERCASE |
| Step numeral | 56px | 800 / −0.04em / color `--tint-deep` |

**Production note:** for performance and offline, self-host Inter (woff2, weights above) and swap the `<link>` for a local `@font-face` block. Keep `font-display: swap`.

---

## 4. Design tokens (`:root` in `kawasite.css`)

Everything themable is a custom property. Do not hard-code hex in component rules.

```css
:root {
  /* brand */
  --accent:#15683C; --accent-press:#0F5430; --accent-bright:#2FA968;
  --tint:#E9F1EC; --tint-deep:#D5E7DC;
  /* ink ramp (bold/high-contrast) */
  --ink:#0E1311; --muted:#51585B; --faint:#8A9094;
  --line:#E4E7E6; --line-strong:#D3D7D6;
  /* surfaces */
  --bg:#FFFFFF; --bg-soft:#F6F8F7;
  --dark:#0E1311; --dark-2:#161D1A;
  --on-dark:#FFFFFF; --on-dark-muted:#A7AFAC; --on-dark-line:#283230;
  /* radius */
  --r-pill:999px; --r-card:16px; --r-tile:13px; --r-sm:10px;
  /* layout */
  --maxw:1200px; --gut:40px;
}
```

**Rules**
- Green on a dark band uses `--accent-bright`, never `--accent` (contrast).
- Section vertical rhythm: 104px desktop / 72px ≤720px.
- Container: `.container { max-width:var(--maxw); margin:0 auto; padding:0 var(--gut) }`.

---

## 5. Component build notes

| Component | Class | Build spec |
|---|---|---|
| Button | `.wbtn` + `-primary` / `-ghost` / `-on-dark` / `-dark-ghost` / `.sm` | 50px (sm 42px), pill, 600. Press = `translateY(1px)`. One primary per region. |
| Eyebrow | `.eyebrow` (`.on-dark`, `.plain`) | Mono caps + 22px leading rule via `::before`. |
| Nav | `.nav` | Sticky, `backdrop-filter: blur(14px)`, hairline bottom. Links hide ≤720px (add a menu if needed). |
| Hero | `.hero` | 2-col grid (`1.05fr .95fr`), collapses to 1-col ≤1000px. Headline payoff phrase wrapped in `<em>` (non-italic, accent). |
| Stage | `.stage` | Material tonal panel: radial tint bg, faint grid `::before`, floating `.badge`. Houses the phone. |
| Phone mockup | `.phone` | Scoped re-skin of real KawaScan screens. **Namespaced under `.phone`** so it never collides with `kawascan.css`. Device bezel is the one place the web layer uses a drop shadow (chrome, not content). |
| Solution card | `.scard` / `.scard.tonal` | Sanity flat (white, hairline) with hover lift; `.tonal` fills `--tint` for the lead (KawaScan) card. |
| Reposition band | `.band-dark .reposition` | Dark band, big statement + 3 mono-numbered columns. |
| Field banner | `<image-slot id="kawa-field">` | Full-width user photo + gradient scrim + overlaid statement (`pointer-events:none` on the overlay). |
| Steps | `.steps .step` | Oversized `--tint-deep` numeral behind a short title. |
| FAQ | `.faq details` | Native disclosure; circular `+` marker rotates 45° + fills accent on `[open]`. |
| CTA band | `.cta-band` | Solid `--accent`; stacked white/ghost buttons. |
| Footer | `footer` | Dark; 4-col → 2-col → 1-col. Real social links + Kawa line icons. |

**Layout primitives:** every multi-item row uses `display:flex`/`grid` with `gap` — never inline-block + whitespace.

---

## 6. Responsive

| Breakpoint | Changes |
|---|---|
| `≤1000px` | Hero, flagship, FAQ, CTA → 1 column. Reposition/solutions/steps grids → 1 column. Second flagship phone shows. |
| `≤720px` | Gutter → 22px. Section rhythm → 72px. Nav links hidden. Second flagship phone hidden. Footer → 1 column. |

Targets are fluid via `clamp()` on every display size, so there is no fixed desktop-only layout. Test at 1280 / 1000 / 720 / 390 widths.

---

## 7. Downloadable app mockups

The KawaScan screens are rendered as PNG product shots for use in decks, app-store listings, social, and the field-photo slot.

**Location:** `assets/mockups/`
```
01-sign-in.png    02-home.png      03-history.png
04-account.png    05-pay.png       06-processing.png
```
Each is the real app screen (from `kawascan.css`) in a device bezel on a branded tonal backdrop.

**How they were generated (repeatable):** `KawaScan Mockups.html` renders all six screens; `window.show(i)` isolates one; each is captured to `assets/mockups/`. To regenerate after an app change, re-open that file and re-capture.

**To drop one into the site:** the "In the field" banner is an `<image-slot>` — drag any mockup (or real photo) onto it. For a screens gallery, place the PNGs in a grid of `<img>` inside a new `.solutions`-style section.

---

## 8. Porting to a framework (optional)

- **Tokens →** expose the `:root` block as CSS variables (or a theme object). Do **not** map them onto framework defaults (e.g. Tailwind's gray scale) — keep Kawa's ramp so the brand survives.
- **Components →** one component per `.scard`, `.wbtn`, `.faq details`, phone screen. Keep the Sanity/Material You provenance note in the component library README.
- **Icons →** move the sprite to an `Icon` component reading `name`.
- **Images →** replace `<image-slot>` with your CMS image field; keep the gradient-scrim overlay pattern.
- **Phone mockups →** keep them as a self-contained, namespaced component; they intentionally mirror the app build.

---

## 9. Accessibility & performance

- Contrast: ink/muted clear AA on white; on the dark band use `--on-dark` / `--accent-bright`. Don't place `--accent` text on `--dark`.
- All interactive targets ≥44px (buttons 50px, nav generous).
- `<details>`/`<summary>` give the FAQ keyboard + screen-reader semantics for free; keep them.
- Honour `prefers-reduced-motion` if you add scroll/hover motion (current build has none beyond a 1px button press).
- Perf: self-host Inter, lazy-load below-the-fold imagery, keep the single small stylesheet. No JS bundle to ship.

---

## 10. Do & don't (build)

**Do** — map every component to Sanity or Material You · keep all design values in tokens · use `gap`-based flex/grid · one primary button per region · `--accent-bright` for green on dark · regenerate mockups from `KawaScan Mockups.html`.

**Don't** — invent components that match neither library · hard-code hex in component CSS · use `--accent` as text on dark · add drop shadows to cards/FAQ/bands (device bezels excepted) · reintroduce "coffee marketplace" as the headline identity · pull in third-party brand assets, icons, or fonts.
