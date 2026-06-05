# Dr. Joshi's Website — Design Principles & Guidelines

> This document governs all UI, content, and component decisions for drjoshis.in.
> When in doubt: come here first. It saves a rewrite.

---

## The Brand in One Line

**Serious medicine. Quiet authority. Human warmth.**

Dr. Joshi does not shout. He doesn't need to. The site should feel like stepping into a well-lit consultation room — calm, confident, knowledgeable. Every visual and copy decision earns trust, not attention.

---

## I. Design Tokens (Never Override These)

### Colors

| Token | Hex | Role |
|---|---|---|
| `--navy` | `#1B3A6B` | Primary. Structure, buttons, headings on light. |
| `--navy-light` | `#2B52A0` | Navy hover state only. |
| `--navy-dark` | `#0F2347` | Deep navy for dark section overlays. |
| `--forest` | `#2D6A4F` | Accent. CTA buttons, highlights, tags, checkmarks. |
| `--forest-light` | `#3A9E72` | Highlight text on dark backgrounds. |
| `--forest-muted` | `#E8F5EE` | Subtle green tint for light-bg accent areas. |
| `--parchment` | `#F7F3EC` | Default page background. Warm, not clinical. |
| `--parchment-dark` | `#EDE9E1` | Section dividers, card borders, subtle depth. |
| `--parchment-border` | `#E0DAD0` | Borders on white cards. |
| `--ink` | `#1A1A1A` | All headings. |
| `--ink-body` | `#3D3D3D` | All body text. |

### Color Rules (Hard)

- Forest is **accent only** — never a full section background
- No orange. Anywhere. Ever.
- Navy fills are for CTAs and dark hero sections only
- Parchment is the default background. Sections alternate parchment/white. Never two parchment sections adjacent.

---

## II. Typography

### Typefaces

| Use | Font | Weight |
|---|---|---|
| H1 only | Cormorant Garamond | 700 |
| H2, H3, labels, body | Inter | 400-700 |
| Eyebrow labels | Inter | 600, uppercase, tracking-[0.15em] |

### Size Hierarchy

```
H1:     clamp(46px, 5.5vw, 72px)  Cormorant  hero only
H2:     clamp(32px, 3.5vw, 48px)  Inter 700  section titles
H3:     22-26px                   Inter 700  card titles, subsection headers
Eyebrow: 11px uppercase tracking-[0.15em]    always above H2
Body:   16-17px, line-height 1.65  Inter 400
Button: 12-13px uppercase tracking-[0.1em]   Inter 700
```

### Typography Rules

- H1 is always Cormorant. No exceptions.
- H2 onward is Inter. No exceptions.
- Eyebrows always precede H2s in sections.
- No em dashes. Use a period or restructure the sentence.
- No more than 65 characters per line in body copy.

---

## III. Spacing and Layout

### Grid

- Max content width: `max-w-site` (~1200px)
- Page gutters: `px-8` mobile, `px-12` desktop
- Section vertical padding: `py-20 lg:py-28`
- Card gap: `gap-6` default, `gap-8` for large card grids

### Layout Principles

- **One focal point per section.** H2 OR image dominant, never both at equal weight.
- **Alternating rhythm.** Sequence: parchment, white, parchment, dark, parchment.
- **Left-right tension.** On two-column layouts, one side always dominates.

---

## IV. Component System

### Buttons

All buttons are `rounded-full` (pill shape). No square corners.

```
.btn-navy        Navy filled.          Primary CTA on light backgrounds.
.btn-forest      Forest filled.        Primary CTA for green-tinted sections.
.btn-ghost-navy  Navy outline/white.   Secondary on light bg.
.btn-ghost-white White outline.        Secondary on dark/navy bg.
```

**Rules:**
- Button text is uppercase, centered, no decorative suffixes
- Never more than two buttons in one CTA group
- Navy + ghost-white pair on dark sections
- Navy + ghost-navy pair on light sections
- Buttons inside cards: `btn-navy` full-width, centered

---

### Cards — The Brand Card System

The card is the most reused pattern on the site. Three canonical types.

#### Type A — Treatment/Service Card (Standard)
White bg, image top (4:3, `rounded-2xl`), title, 1-line description, full-width `btn-navy` at base.
Apply: `card-shadow card-shadow-hover`

```
[IMAGE  4:3  rounded-2xl]
[Title  Inter H3]
[1-line description  body muted]
[VIEW DETAILS  btn-navy full-width centered]
```

Use on: /treatments, homepage TreatmentsSlider, any service grid.

#### Type B — Explainer Card (Dark Feature)
Dark photo background with gradient overlay. Category tag top-left, icon top-right, checklist bottom.
Use as the first card in any explainer slider.

```
[PHOTO BG with gradient overlay]
[Category tag  eyebrow-pill--light]    [Icon  top right]
[Title  white, large]
[checkmark Item 1]
[checkmark Item 2]
[checkmark Item 3]
```

#### Type C — Minimal Explainer Card (Light)
Parchment bg, icon top-left, large title bottom. Hover reveals 1-line description.
Use for cards 2-N in an explainer slider.

```
[Icon  top left]
[Large title  bottom, H2 size]
```

#### Stat Card
Number large (Cormorant, forest green), label below (Inter 13px muted). No border, shadow only.

```
[10,000+]      Cormorant, forest green
[Recoveries]   Inter 13px muted
```

---

### Shadows

```
.card-shadow        Subtle.   Cards on parchment bg.
.card-shadow-lg     Stronger. Feature cards, modals, comparison tables.
.card-shadow-hover  Lift on hover. Always pair with card-shadow or card-shadow-lg.
```

All shadows are navy-tinted `rgba(27,58,107,...)`. Never generic grey shadows.

---

### Eyebrow Pills

Labels above section H2s. Always forest-tinted.

```
.eyebrow-pill         Light background sections
.eyebrow-pill--green  Forest-tinted sections
.eyebrow-pill--light  Dark/navy background sections (white border)
```

Structure: `<Lucide icon size={11}> + <span className="eyebrow-text">LABEL</span>`

---

### Text Highlights

One or two words max per heading. Use sparingly.

```
.text-highlight        Forest green (#2D6A4F)  on light/parchment backgrounds
.text-highlight--light #52B788                 on dark/navy backgrounds
```

---

### Animations

**On scroll:** `<FadeIn direction="up" delay={0.1}>` from `components/ui/FadeIn.tsx`

**On load (hero only):** Framer motion
- Initial: `opacity: 0, y: 24-32`
- Duration: `0.7-0.8s`
- Ease: `[0.22, 1, 0.36, 1]`
- Stagger: `0.1s` between elements

**Never animate:** body text, labels, separators, footers.

---

## V. Section Templates

Identify which skeleton applies before building.

### A — Centered Editorial
```
[parchment bg]
[eyebrow-pill  centered]
[H2  centered, max-w-[600px] mx-auto]
[body  centered, max-w-[520px] mx-auto, muted]
[cards / grid / list below]
```
Use for: Philosophy, FAQs, Success Stories, Blog listing.

### B — Split (Text | Media)
```
[white or parchment bg]
[left: eyebrow + H2 + body + CTA]
[right: image or card stack]
```
Use for: About, Process, OriginStory, CircleAbout.

### C — Dark Hero
```
[full-bleed dark photo or navy bg + gradient overlay]
[centered: eyebrow-pill--light + H1 (Cormorant) + sub + buttons]
```
Use for: main Hero, Philosophy page hero, SEO page heroes.

### D — Card Grid / Slider
```
[parchment or white bg]
[eyebrow + H2 left or centered]
[horizontal scroll or 3-col grid of Type A cards]
```
Use for: Treatments, Services, Blog.

### E — Stats Row
```
[navy bg or parchment]
[4-5 stat cards in a row: number large + label muted]
```

---

## VI. Content Principles

### Voice

Clinical but human. Write like Dr. Joshi speaks: authority without arrogance.

- Use condition names precisely: CKD, creatinine, HbA1c, Nadi pariksha, Panchkarma, Rasayana
- Use outcome language: "creatinine dropped from 4.1 to 1.8", not "improved kidney function"
- "We" means Dr. Joshi and the protocol, not a generic clinic
- Cut on sight: "comprehensive", "holistic approach", "passionate about", "journey"

### Copy Hierarchy

```
Eyebrow  frames the context (5 words max, uppercase)
H2       the claim or promise (one strong, specific sentence)
Body     the proof or mechanism (2-3 sentences, no padding)
CTA      the action (verb + noun, no decoration)
```

### Headline Patterns That Work

- Contrast: "When medicine stops working, Ayurveda goes deeper."
- Specificity: "35 years. One mission. 10,000 recoveries."
- Challenge: "Most chronic disease is treated as a lifelong condition to manage. We disagree."
- Outcome-first: "Creatinine from 4.1 to 1.8. Without dialysis."

### Headline Patterns to Avoid

- Vague claims: "Ancient wisdom meets modern care" (no proof, no hook)
- Generic virtue: "We care about your health journey"
- Passive voice: "Ayurveda has been practised for centuries"

### FAQ / GEO Copy Rules

- Write questions as the user types them into Google or ChatGPT
- First sentence = direct answer (no preamble)
- Include: condition name, treatment name, measurable outcome, timeframe
- Target: featured snippets and AI answer boxes

---

## VII. Imagery

### Style

High-end, warm, Indian-oriented. No generic stock.

**Use:** Consultation moments, subtle herb close-ups, hands-on treatment, calm indoor clinical spaces, warm light, Indian aesthetic.

**Avoid:** Western patients, generic "doctor at camera", food photography, spice/vegetable imagery, abstract health visuals.

### Technical Rules

- Always `next/image` with `fill` or explicit dimensions
- Verify Unsplash URL before using: `curl -s -o /dev/null -w "%{http_code}" -L [url]`
- No duplicate photo IDs across the site
- All images need meaningful `alt` text
- Append `?w=1200&auto=format&fit=crop&q=80` for performance

---

## VIII. Per-Page Checklist

Every page must have:

- [ ] `generateMetadata()` with title, description, keywords, OG
- [ ] Mobile-first layout (`flex-col` default, `lg:flex-row` for desktop)
- [ ] `<FadeIn>` on every scroll section
- [ ] `<FinalCTA>` as last section
- [ ] No inline button styles — use `.btn-*` classes only

---

## IX. What This Site Is Not

- Not a spa or wellness brand. Forest green is clinical, not decorative.
- Not a general Ayurveda directory. One doctor, one practice.
- Not an educational resource. The site converts.
- Not a visual portfolio. Every image serves a claim.

---

## X. Quick Reference

| Situation | Answer |
|---|---|
| Primary CTA on parchment bg | `btn-navy` |
| Primary CTA on dark/navy bg | `btn-forest` or `btn-ghost-white` |
| Secondary CTA on light bg | `btn-ghost-navy` |
| Green accent on dark bg heading | `.text-highlight--light` (#52B788) |
| Green accent on light bg heading | `.text-highlight` (--forest) |
| Card on parchment | `card-shadow` |
| Feature card or modal | `card-shadow-lg` |
| Card that lifts on hover | add `card-shadow-hover` |
| Treatment/service card | Type A |
| Service explainer (dark, with checklist) | Type B |
| Service explainer (minimal, light) | Type C |
| Section intro label | `eyebrow-pill` + `.eyebrow-text` |
| Load animation | Framer motion, ease `[0.22, 1, 0.36, 1]` |
| Scroll animation | `<FadeIn direction="up" delay={0.1}>` |
| H1 font | Cormorant Garamond 700 |
| Everything else | Inter |
| Em dash in copy | Delete. Restructure. |
