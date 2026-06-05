# Dr. Joshi's Website — Build Rules

Project: drjoshis.in | Next.js 14 App Router + TypeScript + Tailwind + Framer Motion

## Design System (locked)

**Colors:**
- Primary blue: `#2E5B9A` — buttons, eyebrows, text highlights
- Deep navy: `#1B3A6B` — headings, bold text, h1 second line
- Forest green: `#2D6A4F` — CTA accent, divider lines, pill borders. NEVER a section background.
- Glow green: `#8BC34A` — background blur/glow effects ONLY. Never text, borders, or UI elements.
- Text dark: `#0a1b32` — primary heading text
- Text body: `#3a5470` — body copy
- Text muted: `#6b7f97` — labels, eyebrows, stat labels
- No orange anywhere.

**Section backgrounds:** `bg-[#eef4fb]` base + `bg-gradient-to-br from-[#edf4fb] via-[#dbe6f2] to-[#c7d8ea]` overlay. Consistent across all home sections.

**Glass cards (section containers):**
- `rounded-[38px]` — outer section card
- `rounded-[30px]` — inner cards within a section
- `bg-white/55 backdrop-blur-2xl`
- `border border-white/70`
- Shadow: `shadow-[0_30px_80px_rgba(46,91,154,0.10)]`

**Glass cards (form/feature cards):**
- `rounded-[28px]`
- `bg-white/60 backdrop-blur-xl`
- Shadow: `shadow-[0_18px_50px_rgba(46,91,154,0.08)]`

**Accent divider line:** `h-[1.5px] bg-gradient-to-r from-[#2E5B9A] via-[#3a8f6b] to-[#2D6A4F]`

**Typography:**
- H1/display: Cormorant Garamond, `font-light`, heading text `#0a1b32`, accent second line `#1B3A6B`
- Section H2: Inter, `font-light`, 48–64px
- Body: Inter, 16–17px, `leading-[1.7]`, `text-[#3a5470]`
- Eyebrow: 11–13px, uppercase, `tracking-[0.18em]`, `text-[#2E5B9A]`

**Buttons:** All `rounded-full`. Primary: `bg-[#2E5B9A]` navy. Secondary: `bg-white/55 border-[#d1deef]`. Never inline styles — use consistent classes.

**Animation:** FadeIn component for scroll sections. Framer `motion.` for load animations.

**Images:** Always `next/image`. Always Unsplash with verified 200 status. No duplicate photo IDs.

## Pages (SOW)

| Status | Path | Description |
|--------|------|-------------|
| ✅ | `/` | Home (12 sections) |
| ✅ | `/about` | About Dr. Joshi |
| ✅ | `/treatments` | Treatments listing with filter |
| ✅ | `/treatments/[slug]` | Individual treatment pages (6 slugs) |
| ✅ | `/success-stories` | Patient stories + video grid |
| ✅ | `/blog` | Blog listing |
| ✅ | `/blog/[slug]` | Blog post (4 posts) |
| ✅ | `/faqs` | FAQs with tab categories |
| ✅ | `/overseas` | Overseas patients |
| ✅ | `/contact` | Contact + booking form |
| ✅ | `/ckd-kidney-treatment` | SEO: CKD landing page |
| ✅ | `/cancer-ayurveda` | SEO: Cancer landing page |
| ✅ | `/lifestyle-disorders` | SEO: Lifestyle landing page |
| ✅ | `/integrative-recovery` | SEO: Integrative landing page |
| ✅ | `/privacy` | Privacy Policy shell |
| ✅ | `/terms` | Terms of Use shell |

## Per-Page Checklist
- [ ] Metadata (title, description, keywords, OG)
- [ ] Mobile-first layout
- [ ] FadeIn on all scroll sections
- [ ] Ends with FinalCTA (or CTA section)
- [ ] Images verified 200, no duplicates
- [ ] Green used as accent only
- [ ] Matches SOW requirements (§4 functional modules)

## Shared Layout
Navbar + Footer + WhatsAppWidget already in `app/layout.tsx`. Every page gets these automatically.

## Key Phone / WhatsApp
+91 90753 90753 → `https://wa.me/919075390753`

## Component Reuse
- `FinalCTA` — reuse on every page as last section
- `FadeIn` — wrap every scroll section block
- `eyebrow-pill` / `eyebrow-pill--light` — section labels
- Card types: **Type A** (service/treatment — image top, btn-navy full-width), **Type B** (dark explainer — photo bg + checklist), **Type C** (minimal light — icon + large title). See DESIGN_PRINCIPLES.md §IV for full specs.

## Design Reference
Full design system, content principles, section templates, and component specs: `DESIGN_PRINCIPLES.md`

## Pending Builds (approved, not yet built)
- Philosophy page (`/philosophy`) — dark hero + pillars + CTA
- `TreatmentCard` component (Type A) — replaces current slider/grid cards
- `TreatmentExplainer` section — Type B/C horizontal scroll with hover reveal
