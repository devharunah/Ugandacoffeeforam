# Kawa — Web Design Specification

> **Version 1.0** · Marketing site (`Kawa Website.html` + `kawasite.css`)
> Companion to `KawaScan Design Spec.md` (the product/app system). Where the app is the *product* surface, this is the *brand* surface. Both share the same green token family and flat, hierarchy-first philosophy — the web layer is deliberately **bolder and higher-contrast**.

Kawa is positioned as a company building **digital solutions for coffee farmers and agriculture**, with **KawaScan** as the flagship app. The website must read as a confident software brand, not a coffee shop or a generic marketplace.

---

## 0. Component provenance — **non-negotiable**

To stop the UI drifting into arbitrary, inconsistent one-off components, **every component on this site must be modeled on one of two reference libraries**. We do not copy any company's product, brand, or proprietary assets — we adopt their *open component patterns and structure* and re-skin them in Kawa's tokens.

| Library | What we take from it | Applied to |
|---|---|---|
| **Sanity UI** | Flat cards, hairline borders, editorial type rhythm, restrained neutral surfaces, generous whitespace, mono micro-labels | Section structure, solution cards, FAQ, footer, type system |
| **Material You (M3)** | Pill/full-radius action buttons, **tonal** (tinted) container surfaces, 13–16px container radius, segmented selection | Buttons, tonal cards, badges, the rounded "stage" panels |

**Rules**
1. A new component must map to a documented pattern in one of the two libraries above. If it maps to neither, it is not built — adapt an existing pattern instead.
2. Re-skin only: structure and interaction come from the library pattern; **color, radius, type, and spacing come from Kawa tokens** (below).
3. Never mix the two within a single element (e.g. don't put a Sanity flat card behavior inside a Material tonal blob and a third radius). Pick the governing library per component and stay consistent.
4. No proprietary icons, logos, fonts, or brand assets from either library. Icons are Kawa's own line set (24px grid, 2px stroke).

---

## 1. Tokens (`:root` in `kawasite.css`)

### Color
| Token | Value | Role |
|---|---|---|
| `--accent` | `#15683C` | Primary actions, links, active — shared with the app |
| `--accent-press` | `#0F5430` | Button hover/press |
| `--accent-bright` | `#2FA968` | Accent **on dark surfaces** only (legibility) |
| `--tint` | `#E9F1EC` | Material You tonal container fill |
| `--tint-deep` | `#D5E7DC` | Oversized step numerals, deep tonal |
| `--ink` | `#0E1311` | Headlines, body (bold/high-contrast) |
| `--muted` | `#51585B` | Secondary text |
| `--faint` | `#8A9094` | Captions, idle |
| `--line` / `--line-strong` | `#E4E7E6` / `#D3D7D6` | Hairlines / control borders |
| `--bg` / `--bg-soft` | `#FFFFFF` / `#F6F8F7` | Page / alternate band |
| `--dark` / `--dark-2` | `#0E1311` / `#161D1A` | Contrast bands, footer |
| `--on-dark` / `--on-dark-muted` | `#FFFFFF` / `#A7AFAC` | Text on dark |
| `--on-dark-line` | `#283230` | Hairlines on dark |

> **High-contrast mandate:** the site alternates white and near-black `#0E1311` bands. The dark band uses `--accent-bright` for accents so green stays legible. Never use `--accent` (#15683C) as text on the dark band.

### Radius
| Token | Value | Use |
|---|---|---|
| `--r-pill` | `999px` | Buttons, badges (Material You) |
| `--r-card` | `16px` | Solution/step cards, banners (Material tonal) |
| `--r-tile` | `13px` | Icon tiles |
| `--r-sm` | `10px` | Small chips/insets |

### Layout
`--maxw: 1200px` content width · `--gut: 40px` gutter (22px ≤720px) · section vertical rhythm **104px** (72px on mobile).

---

## 2. Typography

One family — **Inter** (400–800). Bold, tightly-tracked display type is the primary brand device.

| Role | Size | Weight | Tracking |
|---|---|---|---|
| Hero H1 | `clamp(46–78px)` | 750 | −0.035em |
| Section H2 | `clamp(32–46px)` | 700–750 | −0.025 to −0.03em |
| Big band statement | `clamp(34–58px)` | 700 | −0.03em |
| Card title | 19–21px | 700 | −0.02em |
| Lead | 18–20px | 400 | 0 |
| Body | 14.5–15.5px | 400 | 0 |
| **Eyebrow** | 12.5px | 500 | +0.12em, UPPERCASE, **mono**, accent, leading rule |
| Step numeral | 56px | 800 | −0.04em, `--tint-deep` |

The **mono uppercase eyebrow with a short leading rule** (Sanity-style) opens every section. The hero headline puts the emotional payoff phrase in `--accent` via `<em>` (non-italic).

---

## 3. Components

### Buttons — `.wbtn` (Material You pill)
50px tall (42px `.sm`), pill radius, 600 weight. Variants: `wbtn-primary` (green), `wbtn-ghost` (outline), `wbtn-on-dark` (white on green/dark), `wbtn-dark-ghost` (outline on dark). One primary per view region. Press = `translateY(1px)`.

### Eyebrow — `.eyebrow`
Mono caps + leading rule. `.on-dark` switches to `--accent-bright`; `.plain` drops the rule.

### Solution card — `.scard` (Sanity flat) / `.scard.tonal` (Material tonal)
Flat: white, 1px `--line`, 16px radius, hover lifts 3px + border darkens. Tonal variant fills `--tint` with no border — reserved for the flagship (KawaScan) card so it leads the grid. Anatomy: icon tile → mono flag → title → body → arrow link.

### Phone mockup — `.phone`
A faithful, **scoped** re-skin of the real KawaScan screens (bold theme), namespaced under `.phone` so it never collides with the app CSS. Used in the hero (Home) and flagship (Home + Pay, overlapped). Dark bezel, 40px frame radius, soft drop shadow (the one place the web layer uses elevation, as device chrome).

### FAQ — `.faq details` (Sanity flat list)
Native `<details>`; hairline dividers; circular `+` marker rotates 45° and fills accent when open. No shadows, no nested cards.

### Bands
- **Dark reposition band** — the mission statement; `--dark` bg, big statement with `--accent-bright` highlight, 3 mono-numbered columns.
- **Field photo banner** — full-width `image-slot` (user-fillable) with a bottom gradient scrim + overlaid statement. The site's one large photographic moment.
- **CTA band** — solid `--accent`, white type, stacked white buttons.

---

## 4. Page structure

`Nav → Hero → Reposition band (dark) → Solutions (3 cards) → KawaScan flagship spotlight → Field photo banner → How it works (3 steps) → FAQ → CTA band → Footer`

Narrative: **who we are now** (digital solutions, not just a marketplace) → **what we build** (toolkit) → **the flagship** (KawaScan, deep) → **proof + human** → **how to act** → **convert**.

---

## 5. Imagery

- Photography drops into `<image-slot>` placeholders (drag-and-drop, persists). Use real farmer/field photography — warm, documentary, Uganda. One hero-scale banner; avoid stocky studio shots.
- The product is shown through the **native phone mockups**, not screenshots, so it stays crisp at any zoom and on-brand with the app.
- Icons: Kawa line set only. No emoji except the single "Made with ❤ in Uganda" footer mark carried over from the original brand.

---

## 6. Do & don't

**Do**
- Open every section with the mono eyebrow + rule.
- Keep one tonal (green) card per grid as the lead.
- Alternate white and dark bands for contrast rhythm.
- Map each component to Sanity **or** Material You and re-skin in tokens.
- Use `--accent-bright` for green on dark.

**Don't**
- Invent a component that maps to neither reference library.
- Put drop shadows on cards, FAQ, or bands (device bezels excepted).
- Use `--accent` as text on the dark band.
- Reintroduce "coffee marketplace" as the headline identity — it is one solution, not the brand.
- Mix radius scales within one component or add new radii.
