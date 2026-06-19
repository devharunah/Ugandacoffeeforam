# Kawa — design context pack

Hand this whole folder to an AI as context for building the Kawa website.

## Build these
- **Kawa Website.html** — the finished landing page (the design to match/build).
- **kawasite.css** — the website's design system: ALL tokens live in `:root`. Source of truth for color, type, radius, spacing, components.
- **image-slot.js** — user-fillable photo placeholders used on the page.

## Read these for rules (IMPORTANT)
- **Kawa Website Tech Spec.md** — how to implement it: stack, fonts, tokens, per-component build notes, responsive, accessibility.
- **Kawa Web Design Spec.md** — the visual system + the component-provenance rule.
- **Kawa Website Design Spec.html** — a LIVE visual spec (open in a browser); renders real components from kawasite.css. Needs `spec.css` + `kawasite.css` beside it.

### The one rule that matters most
Every component must be modeled on a documented pattern from **Sanity UI** (flat cards, hairline borders, editorial type, FAQ, footer) or **Material You** (pill buttons, tonal tinted surfaces, rounded panels), then re-skinned in Kawa tokens. Do NOT invent generic one-off components. Re-skin only — never copy any company's branding, fonts, icons, or assets.

## Reference (the app shown on the site)
- **KawaScan Redesign.html** + **kawascan.css** — the KawaScan app screens. The site shows these as phone mockups.
- **mockups/** — 6 PNG renders of the app screens (sign-in, home, history, account, pay, processing) for use in the site/decks.

## Brand in one line
Kawa builds **digital solutions for coffee farmers and agriculture**. KawaScan is the flagship app. Bold, high-contrast, editorial. One green accent: `#15683C`. Font: Inter.
