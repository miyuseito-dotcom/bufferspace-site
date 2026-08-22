---
name: visual-local-seo-article
description: Create conversion-focused, visually readable local SEO articles for location-based businesses such as rental spaces, studios, shops, clinics, and local services. Use when the user needs researched blog articles that incorporate their own Google Drive photos, optional generated visuals, reader-friendly document layouts, and organized Google Drive delivery.
---

# Visual Local SEO Article

Create local SEO articles that answer a genuine local search intent and give readers a clear path to inquiry, booking, or visit. Do not deliver a wall of text. Treat the article as a **reader experience**: a clear promise, short lead, scannable sections, authentic photos, useful tables, and an explicit next action.

## Use this workflow

### 1. Establish the business facts

1. Collect the business name, each location, official URLs, booking pages, offered uses, equipment, access, capacity, current rules, and inquiry route.
2. Search the user's Google Drive for existing operation materials, photos, floor plans, prior ads, and usage examples. Read the Google Workspace skill before using Drive.
3. Confirm only facts that cannot be safely inferred. Ask narrow questions when current public pages and internal materials disagree.
4. Research local search intent and the immediate comparison environment. Prefer official business pages and reliable reservation listings for factual claims.
5. Keep a fact sheet with source URLs, source date, and any rules requiring user confirmation.

> Never invent facilities, pricing, permissions, results, nearby competitors, or usage policies. Keep time-sensitive details such as prices, availability, campaigns, and rules linked to the current official page rather than hard-coding them when possible.

### 2. Build the content plan before drafting

For each location, create a cluster of five or more articles that targets distinct intent. Avoid near-duplicate articles.

| Intent | Strong article angle | Conversion path |
|---|---|---|
| High intent | “How to choose a [local use] space” | Facility / booking page |
| Recurring use | Regular classes, training, satellite office | Consultation / recurring-use inquiry |
| Use case | Filming, workshops, exhibitions, lessons | Facility page with required equipment |
| Comparison | Purpose-led local comparison guide | Explain differentiators; avoid unsupported rankings |
| Discovery | Test marketing, first pop-up, first event | Inquiry / site visit |

For every article, define: primary keyword, two to four supporting keywords, target reader, opening promise, factual differentiators, internal links, CTA, and necessary visual assets. Use `templates/visual_article_brief.md`.

### 3. Draft for usefulness, not keyword repetition

Write an original title, useful introduction, clear H2 sections, and FAQs. Use short paragraphs. Explain decisions with examples, checklists, and tables where they reduce cognitive load. Use local business facts sparingly and precisely.

Include the following elements when relevant:

- A 100–160 character meta description.
- A short reader-first introduction.
- A **“この記事でわかること”** summary with three concrete outcomes.
- One or two decision tables, checklists, or process steps.
- A disclosure that facilities, rules, fees, and availability can change, with a link to the official page.
- One unambiguous CTA in the final third of the article.
- Inline numeric reference links for externally sourced facts.

Avoid claims such as “best,” “No. 1,” “guaranteed,” or unsupported comparison rankings. Do not use generic filler simply to increase word count.

### 4. Design the visual reader experience

Read `references/visual-layout.md` before laying out the article.

1. Select authentic business photos from the user's Google Drive. Prefer photos that visibly support the article claim: seating for meeting articles, mirrors for lesson articles, shelves and entry visibility for pop-up articles.
2. Use one real-space photo near the opening narrative. Add a factual caption explaining what readers can see.
3. Add a topic-specific hero visual. Prefer an original, non-text editorial illustration for the article topic when the user's real photos do not provide an engaging opening. Read the image-generation skill before generating or editing images.
4. For a coordinated visual set, generate one style reference first, then use it to create related images. Do not use generated images to misrepresent actual facilities.
5. Add only visuals that have a job: build trust, clarify a process, show a setup, or provide a scanning break. One hero, one real photo, one or two tables, a summary panel, and a CTA panel are usually sufficient.

### 5. Create the document for readability

Create editable Google Docs or DOCX files rather than plain markdown if the user wants visual editing. Use the following layout order:

1. Category label.
2. Large title.
3. Short italic meta description or opening promise.
4. Wide hero visual with caption `イメージビジュアル：記事テーマをもとに作成` when AI-generated.
5. Colored **“この記事でわかること”** summary box.
6. Opening paragraphs.
7. One authentic business photo with factual caption.
8. H2-led body with short paragraphs and styled tables.
9. Subtle mid-article reader cue or checklist.
10. High-contrast CTA panel.
11. References and a latest-information note.

Use a restrained brand palette. Give each location its own accent color, while keeping type, table styling, caption styling, and CTA consistent across the content cluster. Ensure body text is large enough to read comfortably in an editable document (about 10–11 pt), H2s are visibly distinct, and table text remains legible.

### 6. Store and verify

1. Create a location-specific Drive subfolder such as `SEO記事_YYYY-MM`.
2. Save each article as an editable Google Doc in the appropriate location folder. Preserve the file title and use update rather than duplicate creation when the user asks to overwrite.
3. Verify all expected files exist and have updated timestamps.
4. Do a lightweight visual check by rendering a representative article from each location to PDF. Confirm title hierarchy, hero image, summary panel, real-photo placement, tables, and CTA are readable.
5. Deliver the folder links, concise article list, key assumptions, and the editable source files. Do not describe generated visuals as real photos.

## Quality gate

Before delivery, check all items below.

| Content | Visual | Operational |
|---|---|---|
| Search intent is distinct across articles. | Every article has a hero and at least one useful real photo. | Source facts are documented and current items link to official pages. |
| Local differentiators are factual and useful. | Photos and illustrations have captions where needed. | File names and folders identify the location and article order. |
| The CTA matches the reader’s next step. | Title, H2, body, tables, and CTA are visually scannable. | Existing files were updated, not duplicated, when requested. |
| No unsupported claims or stale price statements. | No dense unbroken wall of text remains. | Representative articles were visually checked before delivery. |

## Resources

- Use `templates/visual_article_brief.md` to organize research and each article before drafting.
- Use `references/visual-layout.md` for the practical article layout, photo selection, and document styling checklist.
