# Portfolio redesign: design spec

Status: updated 2026-11-04 after Miguel's answers (fresh start, three languages, dark design first, links and CVs supplied). Light and dark designs approved by Miguel on 2026-11-04; "5+ years" confirmed.
Supersedes: `2026-11-02-wiggle-case-study-design.md` (the dedicated Wiggle page was dropped).
Visual source of truth: the "Home" board on the Claude canvas, snapshotted in `design-assets/home-design/home.dc.html` (open it in a browser to see the markup; the images are canvas uploads, see section 7).

## 1. Intent

**Goal.** Turn miguelbizzi.com.br from a generic developer template into a confident, minimal, premium single page that sells Miguel as a senior full stack engineer: what he built, what it achieved, who he worked with, and how to reach him.

**Audience.** Hiring managers, tech leads and founders who have about two minutes. They should leave knowing: senior engineer, 5+ years, owns products end to end, fintech and healthcare experience, real numbers.

**Success looks like.** One scroll tells the story. Every claim is either from Miguel's CV, supplied by him, or a visible placeholder. The page feels designed for him, not templated, and still looks like the site he has now (floating header, animated hero, light and dark modes).

**Decisions already made by Miguel** (do not reopen): keep the floating pill header; hero keeps the memoji, availability pill, centered layout and animated background; five principal sections of real content; the four principal projects are cards on the home page and have no detail pages; no "Read case study" buttons; minimal footer separate from the contact section; blue-to-violet gradient is the accent, used sparingly; designs are in English; the site ships in English, Portuguese and Spanish only (German is removed); the dark theme is designed before any code is written; implementation starts from a clean branch.

## 2. Audit summary (why change)

1. The hero said "mobile apps and websites" and never mentioned fintech, scale or seniority.
2. The project list was identical bordered cards with tilted screenshots and badge walls.
3. A fictional "FinClear" case-study template was wired to the Wiggle card and invented interviews and goals. It must not ship.
4. About and Experience carried unfilled placeholders such as "[X hours saved per week]".
5. Template feel: Arial body text, bare gradient labels, unrelated imagery.
6. Project data had no room for impact, only title, description and stack.

## 3. Page structure (top to bottom)

Order of sections and header links: Home, Projects, About, Resume, Skills, Testimonials, Contact. (The old order was Home, About, Projects, Experience, Testimonials, Skills, Contact; "Experience" becomes "Resume".)

| # | Section | Content |
|---|---|---|
| 0 | Header (floating pill) | Same behavior as today, new link order, theme toggle and language menu without borders (section 6) |
| 1 | Hero | Memoji, availability pill, headline "Fullstack engineer building products people rely on." (gradient on the second half), CV-based subtitle, buttons "See my work" and "Contact me" (mail icon), animated flowing-lines background, fade into the page |
| 2 | Proof strip | Four gradient numbers: 5+ yrs, $2M+ monthly payment volume, 500+ articles per hour, 1,000+ active users |
| 3 | Projects | Eyebrow "Main projects", title "Products I've shipped", four cards (below) |
| 4 | About | CV summary, three soft-skill chips, education, languages, industries |
| 5 | Resume | Card with "Download CV" in English and Portuguese, paper preview |
| 6 | Skills | Two scrolling rows of large tech names, then eight grouped cards (one with a gradient border) |
| 7 | Testimonials | Bento wall: Daniel Rabelo featured on dark, Lucas Rezende and Rodrigo Mota on light cards, pull-quote first |
| 8 | Contact | Two-column card: copy and email on the left, form with name, email, message and a "Submit" button with a send icon on the right |
| 9 | Footer | Thin gradient hairline, then one quiet row: copyright, GitHub, LinkedIn, back to top |

### Project cards (no links, no buttons)

Each card: eyebrow with number and category, name, two-line description, "What I achieved" with three bullets (gradient dot), stack chips, and a visual. Wiggle and Bizzi DB visuals are compositions of real screenshots; Phew.ai and SL Treinos show framed screenshots. Sides alternate (visual right, left, right, left). The Bizzi DB card has one quiet text link "View on GitHub".

1. **Wiggle** (Fintech, Healthcare): web dashboard in a browser frame, the extension sidebar floating at its left edge, bill pay on a phone at its right edge. Achievements: $2M+ processed monthly across 15+ clinics and 5,000+ transactions; the only developer, with the CTO, CEO and a QA, from the first commit; a self-service portal reduced admin tickets and AI-assisted plan ingestion sped up onboarding.
2. **Phew.ai** (AI, SaaS): 500+ articles an hour with batching, retries and fallback; led development and set standards for a global team; mentored contributors.
3. **Bizzi DB** (Open source, Desktop): real screenshots of the app (data grid, schema diagram floating over it). Created and maintains it as open source (MIT) for macOS, Windows and Linux; local-only, no account or cloud; reviewed changes, schema diagrams and SQL editor with query plans.
4. **SL Treinos** (Web, Mobile): coach dashboard framed, student app screens floating over its corner. About 70% less manual work; automatic volume and load adjustment; students log every set so coaches plan from history.

All copy is in the canvas snapshot; use it verbatim for the English strings.

## 4. Visual system

- **Fonts.** Replace Montserrat with Inter (body), Inter Tight (display) and JetBrains Mono (labels and chips), loaded with `next/font` and exposed as CSS variables.
- **Tokens (light).** Page `#FCFCFC`, ink `#0B1020`, muted text `#5B6475`, hairline `#E4E7EC`, card white. Accent gradient `#3B82F6` to `#8B5CF6` for large text and numbers; the darker `#2563EB` to `#7C3AED` for small eyebrow labels so contrast stays at 4.5:1 or better. Green `#22A06B` only for the availability dot.
- **Tokens (dark).** The approved designs are light only. Dark mode must still work because the site has a theme toggle today. Map the tokens to the existing dark palette (page near `#0B1020`, cards slightly lighter, hairlines `#1C2542`, text `#E8ECF4`, muted `#98A2B3`), keep the same gradient, and soften shadows. A dark design is made on the canvas and approved before any code (section 10).
- **Shapes.** Cards radius 20 to 24px, chips radius 6px, buttons radius 10px, pill header unchanged. Screenshots sit in white frames with a hairline border and a long soft shadow; no grey panels behind images.
- **Motion.** Hero line pulses (CSS), floating header highlight (existing framer-motion layout animation), skills marquee, nothing else. Everything stops under `prefers-reduced-motion`.
- **Layout.** Max content width 1120px, 32px gutters. Multi-column grids collapse to one column under 900px, the proof strip to two columns under 640px, the skills marquee stays.

## 5. Implementation design

### Components (all under `src/components`)

- Keep and adjust: `header.tsx`, `language-toggle.tsx`, `theme-toggle.tsx`, `footer.tsx`, `hero/hero-section.tsx`, `ui/background-beams.tsx` (replaced by a new `hero/flow-lines.tsx` with the SVG path animation, or the existing beams recolored if Miguel prefers), `contact/contact-section.tsx`, `skills/skills-section.tsx`, `testimonials/*`, `about/about-section.tsx`.
- New: `proof/proof-strip.tsx`, `projects/project-card.tsx` (data-driven, one visual slot), `projects/visuals/*` (one small component per project visual so each composition can differ), `resume/resume-section.tsx`, `skills/tech-marquee.tsx`, `ui/flags.tsx` (four SVG flags), `ui/gradient-text.tsx`.
- Remove: `experience/*`, `src/app/[locale]/case-studies/*`, `case-study-template.html`, `lib/constants/experience.ts`, and the unused `CaseStudies`, `Experience`, `ExperienceItems` locale keys.

### Data

- `lib/types/project.d.ts`: `Project` gains `category`, `achievements: string[]`, optional `link`; `slug` is removed. Copy stays in locale files; `hooks/use-projects.tsx` assembles each project from translation keys plus a `visual` key that selects the visual component. Stack chips stay in code.
- `lib/constants/links.ts` and `hooks/use-links.tsx`: new order and "Resume".
- Skills data becomes grouped (`lib/constants/skills.ts`): eight groups from the CV, plus the two marquee rows.

### Header details

- Theme button and language trigger: no border, transparent, soft hover background.
- Language trigger shows the current flag as an SVG and a chevron; the menu lists Português (Brazil), English (US) and Español (Spain) with their SVG flags. Replaces the emoji in `language-toggle.tsx`. German is removed everywhere (see Internationalization).
- Active-section tracking (`active-section-provider`) keeps working; section ids are `home`, `projects`, `about`, `resume`, `skills`, `testimonials`, `contact`.

### Internationalization

Copy lives in `locale/{en,pt,es}.json`, all three fully translated before launch. English is written first from the canvas; Portuguese follows the Portuguese CV wording; Spanish is translated from English. Remove German completely: delete `locale/de.json`, drop `de` from `src/i18n/routing.ts`, `src/middleware.ts`, `lib/types/languages.d.ts` and the language menu. (German stays only as a spoken language in the About block, taken from the CV.)

### Assets

Screenshots are copied into `src/assets/projects/` and used through `next/image` with explicit dimensions, WebP at 1600px and 800px widths, `priority` only on the hero memoji. The CV PDFs go to `public/cv/miguelbizzi-cv-en.pdf` and `public/cv/miguelbizzi-cv-pt.pdf`.

| Visual | Source file |
|---|---|
| Wiggle dashboard | `design-assets/wiggle-captures/png/web-dashboard.png` |
| Wiggle extension sidebar (crop) | `design-assets/wiggle-captures/png/ext-portal.png` |
| Wiggle bill pay phone | `design-assets/wiggle-captures/png/obp-account.png` |
| Phew.ai | `src/assets/printphew.png` |
| Bizzi DB grid and schema diagram | `design-assets/bizzidb-captures/grid.png`, `erd.png` |
| SL Treinos dashboard and app strip | `src/assets/sltreinosweb.png`, `src/assets/sltreinosapp.png` |

All captures use fictional data. Before shipping, rerun the personal-data check (no real names, emails or clinic identifiers) and remove unused images from `src/assets`.

### Contact form

Keep the existing EmailJS integration and its validation; restyle only. Add the send icon to the submit button, a loading state, and keep the toast messages.

## 6. Behavior and quality bar

- Three locales (en, pt, es) render with no missing keys; text that gets longer in Portuguese or Spanish does not break the layout.
- Works from 360px to wide desktop with no horizontal scroll.
- Keyboard: header links, language menu (arrow keys and escape), form and CV buttons are reachable and visibly focused.
- Text contrast at least 4.5:1, decorative SVGs `aria-hidden`, descriptive `alt` on screenshots.
- Lighthouse mobile performance 90 or higher on the home route; images lazy-loaded below the hero.
- No console errors; `next build` and `next lint` pass.

## 7. Out of scope

Dedicated project pages, a blog, analytics, new languages, a CMS, dark-mode screenshots, video, and a custom domain change.

## 8. Decisions and answers (2026-11-04)

1. **Work in progress:** discarded. The old placeholder About, Experience and FinClear work was stashed (recoverable with `git stash list`, entry "WIP before redesign", which can be dropped when you are sure) and the working tree was reset. Implementation happens on the new branch `redesign-home`, created from `main`.
2. **Languages:** English, Portuguese and Spanish only. German is removed.
3. **Dark mode:** design it on the canvas first and get approval before implementing.
4. **Links:** LinkedIn `https://www.linkedin.com/in/miguelbizzi/` and GitHub `https://github.com/MiguelBizzi` (both already in the current footer). The Bizzi DB card links to `https://github.com/MiguelBizzi/bizzi-db` (its repository remote; confirm before launch).
5. **CV files:** the two PDFs are saved in `design-assets/cv/` (`miguelbizzi-cv-en.pdf`, `miguelbizzi-cv-pt.pdf`) and are copied to `public/cv/` during implementation.

**Years of experience:** confirmed as "5+ years". The two CV PDFs in `design-assets/cv/` still say "4+ years" (English) and "4+ anos" (Portuguese) in the summary line. Miguel updates the source documents and re-exports both PDFs; the implementation copies the updated files to `public/cv/`. Until then the Resume buttons must not ship pointing at the old files.

## 9. Verification plan (for the implementation plan)

Build and lint; render each locale and theme at 390px, 768px and 1440px; keyboard pass; Lighthouse; compare against the canvas snapshot section by section; check that every number and quote on the page appears in the CV or in this spec.

## 10. Dark theme design (approved)

The dark version of the home design is produced on the canvas next (board "Home, dark"), using the token mapping in section 4. Rules: same layout and copy; page and cards stay in the navy family so the gradient still reads; the testimonial feature card and impact band are lifted panels (not inverted); primary buttons invert (light button, dark text); screenshots keep their native look, including the Wiggle web app image, which stays in light mode; the extension sidebar and bill pay phone stay light because they are light products. Both boards are approved. Implementation starts once Miguel has reviewed this spec.
