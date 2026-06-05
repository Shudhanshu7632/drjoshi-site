# Dr. Joshi's Website — Design System

## Colours

| Role | Value | Usage |
|------|-------|-------|
| Primary blue | `#2E5B9A` | Buttons, eyebrow text, interactive links, icon accents |
| Deep navy | `#1B3A6B` | Headings, bold text, select accent spans |
| Forest green | `#2D6A4F` | CTA accent, italic heading spans, divider lines, checkmark icons. Never a background. |
| Light green (dark bg) | `#52B788` | Green text on dark/navy sections only |
| Glow green | `#8BC34A` | Background blur/glow effects only. Never on UI elements. |
| Text dark | `#0a1b32` | Primary heading text |
| Text body | `#1a2a3a` | Body copy, paragraph text |
| Text muted | `#6b7f97` | Labels, eyebrows, stat labels, supporting text |
| Text faint | `#9bafc5` | Footnotes, captions |

---

## Typography

**Display / H1**
- Font: Cormorant Garamond
- Weight: font-light (300)
- First line: `#0a1b32` (near black)
- Accent line: `#2D6A4F` (forest green) — italic

**Section H2**
- Font: Inter
- Weight: font-light
- Size: 38–54px
- Pattern: plain line + italic Cormorant green accent

**Body copy**
- Font: Inter
- Size: 16–17px
- Line height: 1.7–1.8
- Colour: `#1a2a3a`

**Eyebrow labels**
- Size: 12px
- Uppercase, tracking-[0.22em], font-medium
- Colour: `#6b7f97` (muted grey)
- No icons, no pills, no symbols — plain text only

---

## Glass Card System

**Section containers (outer)**
- `rounded-[38px]`
- `bg-white/55 backdrop-blur-2xl`
- `border border-white/70`
- `shadow-[0_30px_80px_rgba(46,91,154,0.10)]`

**Inner cards**
- `rounded-[30px]`
- `bg-white/60 backdrop-blur-xl`
- `border border-white/80`
- `shadow-[0_18px_50px_rgba(46,91,154,0.08)]`

**Form / feature cards**
- `rounded-[28px]`

---

## Section Background

All light sections use:
```
bg-[#eef4fb]
bg-gradient-to-br from-[#edf4fb] via-[#dbe6f2] to-[#c7d8ea]
```

Dark sections (success stories, biomarker scroll) use:
```
bg-[#0a1b32]
bg-gradient-to-br from-[#0f2340] via-[#0a1b32] to-[#061422]
```

---

## Buttons

All buttons are `rounded-full` (pill shape).

**Primary (navy)**
```
bg-[#2E5B9A] text-white px-8 py-4
shadow-[0_14px_40px_rgba(46,91,154,0.24)]
hover:bg-[#244b82] hover:scale-[1.03]
```

**Secondary (ghost)**
```
bg-white/55 backdrop-blur-xl border border-[#d1deef] text-[#1f3d63] px-8 py-4
hover:bg-white/75
```

---

## Accent Divider Line

```
h-[1.5px] bg-gradient-to-r from-[#2E5B9A] via-[#3a8f6b] to-[#2D6A4F]
```

---

## Dark Section Typography

On dark/navy backgrounds, text becomes:
- Headings: `text-white`
- Body: `text-white/65`
- Muted: `text-white/35`–`text-white/40`
- Accent: `text-[#52B788]` (lighter green for dark bg)

---

## Hover Image Cards (pillar cards)

- Default: full-bleed image, dark gradient overlay at bottom, title + subtitle in white
- Hover: `bg-black/50 backdrop-blur-md rounded-[30px]` overlaid on the always-visible image
- Text on hover: white with opacity variations

---

## Spacing

- Section outer padding: `py-10`
- Container inner padding: `px-8 md:px-16 py-16 md:py-20`
- Header to content gap: `mb-14`–`mb-16`
- Card grid gap: `gap-5`–`gap-8`

---

## What Not To Do

- No orange anywhere
- No `#8BC34A` on text, borders, or UI elements (glow only)
- No letter-avatar circles on patient names
- No pill tags inside cards for categorisation — use eyebrow text style instead
- No "Continue Process" or repetitive inline CTAs on every card
- No identical tags across multiple cards — make them context-specific
- No em dashes in body copy
