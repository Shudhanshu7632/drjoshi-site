# For Sudanshu — Dr. Joshi's Website

Hey — this doc is a quick handoff on where the home page design landed and what that means for the rest of the site. Read the DESIGN_SYSTEM.md for the exact specs. This is more about the thinking.

---

## What changed on the home page and why

The overall direction moved toward something cleaner and more premium. Less startup-y, more like a serious medical practice. The glass card system stayed (the rounded frosted cards on the blue gradient background) because it works and feels right for the brand — but we tightened a lot of the details.

**Typography:** The main heading pattern on the home page is Inter light for the first line, Cormorant Garamond for an accent second line. The accent line is always in forest green (`#2D6A4F`) — not blue. Most headings were too blue before. The rule now is: black/dark for headings, blue only for small interactive elements like eyebrows and links, green for a single accent moment per section.

**Eyebrows:** Every section label is plain uppercase muted grey text — no pills, no icons, nothing decorative. Just the text.

**Success stories:** These became outcome-led cards. The medical result (like "4.1 → 1.8 creatinine") is the headline of each card, then the quote, then the patient name as plain text. No letter avatars or icon badges — just name and session count.

**Biomarkers section:** This is a full-width dark navy section where the biomarker names scroll through the center of the screen as you scroll. One name highlighted in green at a time. Heading at top, CTA at bottom. That's the whole thing.

**Patient story cards:** The condition label (CKD Stage 3, Cancer Support, etc.) is just the eyebrow text style — 12px uppercase muted — not a pill or badge.

---

## What this means for other pages

The inner pages (About, Treatments, individual treatment pages, FAQs, etc.) haven't been touched yet. When you build or update them, the same principles apply:

- Use the glass card container on every section (same rounded-[38px] outer wrapper with the white/55 glass)
- Headings in Inter light + Cormorant italic green — same pattern as home
- Eyebrows always as plain muted uppercase text, never pills
- Green (#2D6A4F) for one accent per section — a highlighted word, a divider line, a stat number. Don't overuse it.
- Body text in `#1a2a3a`, not blue
- Tags or categorisation labels inside cards should follow the eyebrow text pattern, not be wrapped in pill/badge components
- Stats should be displayed large and clean — just the number and a label below it, no decorative wrappers around them

The general feel to aim for: premium and clinical, not flashy. When in doubt, remove something rather than add it. The design works best when it's restrained.

---

## A few specific things to keep in mind

Patient names never get letter avatars or icon circles next to them. Just the name in semibold and a line of context below it.

If a section has cards that reveal content on hover (like the three pillars section), the hover state uses a dark glass overlay on the still-visible image — `bg-black/50 backdrop-blur-md` — with white text. Not a white card replacing the image.

The two dark sections (success stories, biomarker scroll) are intentional breaks from the light blue glass aesthetic. They create contrast and rhythm in the page. Don't convert them back to light.

The accent gradient line (blue to green) that separates the stats from the content in the hero card — that's a deliberate brand element. Worth carrying into other sections that have a divider.

---

## Files to reference

- `DESIGN_SYSTEM.md` — exact colour values, spacing, shadow specs, component patterns
- `CLAUDE.md` — original build rules, page inventory, component list
- `components/sections/` — all home page sections are implemented and can be referenced

---

Let me know if anything's unclear.
