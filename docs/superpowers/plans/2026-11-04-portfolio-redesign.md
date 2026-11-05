# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the portfolio home page to the approved light and dark designs: four project cards with achievements, a CV section, richer skills and testimonials, three languages, no project detail pages.

**Architecture:** Same Next.js 14 App Router + next-intl + Tailwind + framer-motion app. Design tokens become CSS variables in `globals.css` (retuned shadcn tokens, light and dark), components use semantic Tailwind classes so the dark theme comes for free. Each project card takes one visual component, so the four compositions can differ. All copy lives in `locale/{en,pt,es}.json`, typed from `en.json`.

**Tech Stack:** Next.js 14.2, React 18, TypeScript, Tailwind 3, next-intl 3, next-themes, framer-motion, lucide-react, react-hook-form + zod + EmailJS (existing), pnpm.

**Spec:** `docs/superpowers/specs/2026-11-04-portfolio-redesign-design.md`
**Visual reference (open in a browser; each section is marked with an HTML comment):** `design-assets/home-design/home.dc.html` (light) and `design-assets/home-design/home-dark.dc.html` (dark). English copy is taken verbatim from these files.

## Global Constraints

- Work on branch `redesign-home` (already created from `main`; the old work in progress is in `git stash`, do not apply it).
- Locales: `en`, `pt`, `es` only; default locale stays `pt`. German is removed everywhere. Every new key is added to all three locale files in the same commit; `pnpm check:locales` must pass at every commit.
- Header link order and section ids: `home, projects, about, resume, skills, testimonials, contact` (link labels Home, Projects, About, Resume, Skills, Testimonials, Contact).
- Fonts: Inter (body), Inter Tight (display), JetBrains Mono (labels, chips), via `next/font/google`; Montserrat is removed.
- Hero headline: "Fullstack engineer building" + gradient "products people rely on."; years figure is "5+ years" everywhere ("5+ yrs" in the proof strip).
- Gradient: large text `#3B82F6 → #8B5CF6`; small eyebrow labels `#2563EB → #7C3AED` in light, `#7DB1FF → #B79CFF` in dark (4.5:1 contrast).
- No emoji in the UI; flags are SVG; all decorative SVGs `aria-hidden="true"`; screenshots have descriptive `alt`.
- Project cards have no links except one text link "View on GitHub" on Bizzi DB (`https://github.com/MiguelBizzi/bizzi-db`). Footer links: GitHub `https://github.com/MiguelBizzi`, LinkedIn `https://www.linkedin.com/in/miguelbizzi/`.
- Everything must respect `prefers-reduced-motion` (no animation when set).
- Verification commands (run from repo root; the app needs dummy EmailJS values to build): `pnpm typecheck`, `pnpm lint`, `pnpm check:locales`, and `NEXT_PUBLIC_EMAIL_SERVICE_ID=x NEXT_PUBLIC_EMAIL_TEMPLATE_ID=x NEXT_PUBLIC_EMAIL_KEY=x pnpm build`.
- Commits: conventional style (`feat:`, `chore:`, `refactor:`), one per task, include the attribution line the session requires.

## Design tokens (used from Task 2 on)

HSL triples for `globals.css`. Light on `:root`, dark on `.dark`. Everything else derives from these.

| Token | Light | Dark |
|---|---|---|
| `--background` | `0 0% 99%` (#FCFCFC) | `226 49% 8%` (#0B1020) |
| `--foreground` | `226 49% 8%` (#0B1020) | `220 35% 93%` (#E8ECF4) |
| `--card` | `0 0% 100%` | `225 50% 13%` (#101830) |
| `--border` / `--input` | `218 17% 91%` (#E4E7EC) | `224 39% 20%` (#1F2A47) |
| `--muted` | `216 24% 96%` (#F2F4F7) | `226 49% 17%` (#162040) |
| `--muted-foreground` | `219 12% 41%` (#5B6475) | `218 15% 65%` (#98A2B3) |
| `--panel` (new, featured dark panels) | `226 49% 8%` | `228 51% 19%` (#18224A) |
| `--panel-foreground` (new) | `0 0% 99%` | `0 0% 99%` |

## Review Focus

1. Portuguese and Spanish strings are longer than English: the header pill, chips, buttons and card text must not overflow or overlap at 390px (checked in Tasks 3, 5, 12).
2. Reduced motion: the hero lines, skills marquee and floating-header highlight must stop under `prefers-reduced-motion: reduce` (checked in Tasks 4 and 9).
3. Missing files: the CV buttons must never point at a file that does not exist, and removed assets must not still be imported (Tasks 8 and 12).
4. Missing EmailJS env: `src/env.ts` throws at import time, so a fresh checkout cannot build; add `.env.example` and keep the build verifiable (Task 11).
5. Keyboard and screen readers: the language menu opens, moves and closes with the keyboard and announces its items; the flags add no noise (Task 3).

---

## File structure

- Create: `src/components/about/about-section.tsx`, `scripts/check-locales.mjs`, `scripts/check-assets.mjs`, `src/components/ui/flags.tsx`, `src/components/ui/gradient-text.tsx`, `src/components/hero/flow-lines.tsx`, `src/components/proof/proof-strip.tsx`, `src/components/projects/visuals/{index,wiggle-visual,phew-visual,bizzidb-visual,sltreinos-visual}.tsx`, `src/components/resume/resume-section.tsx`, `src/components/skills/tech-marquee.tsx`, `.env.example`, `public/cv/*.pdf`, `src/assets/projects/*.png`.
- Modify: `package.json`, `.gitignore`, `src/i18n/routing.ts`, `src/middleware.ts`, `src/lib/types/languages.d.ts`, `src/app/globals.css`, `tailwind.config.ts`, `src/app/[locale]/layout.tsx`, `src/app/[locale]/page.tsx`, `src/components/{header,language-toggle,theme-toggle,footer}.tsx`, `src/components/hero/hero-section.tsx`, `src/components/projects/{project-card,projects-section}.tsx`, `src/components/skills/skills-section.tsx`, `src/components/testimonials/*`, `src/components/contact/contact-section.tsx`, `src/hooks/{use-links,use-projects,use-testimonials}.tsx`, `src/lib/constants/{links,skills}.ts`, `src/lib/types/{project,testimonials}.d.ts`, `locale/{en,pt,es}.json`.
- Delete: `locale/de.json`, `src/components/ui/background-beams.tsx` (after Task 4), unused files in `src/assets/` (Task 12).

---

### Task 1: Tooling, locale guard, drop German

**Files:** Create `scripts/check-locales.mjs`; modify `package.json`, `.gitignore`, `src/i18n/routing.ts`, `src/middleware.ts`, `src/lib/types/languages.d.ts`, `src/components/language-toggle.tsx` (remove the German item only); delete `locale/de.json`.

**Interfaces:** Produces `pnpm typecheck` (`tsc --noEmit`), `pnpm check:locales` (exit 1 on a problem), and `type Languages = 'pt' | 'en' | 'es'`.

- [ ] **Step 1: Write the failing check.** `scripts/check-locales.mjs` (Node, no dependencies) loads every `locale/*.json`. It fails unless the locale files are exactly `en`, `pt`, `es` and all three have identical flattened key sets (dot paths); it prints the missing and extra keys per file.
- [ ] **Step 2: Add scripts.** `package.json`: `"typecheck": "tsc --noEmit"`, `"check:locales": "node scripts/check-locales.mjs"`. Append `design-assets/` to `.gitignore` (large captures and CV PDFs stay local; `docs/` is committed).
- [ ] **Step 3: Run `pnpm check:locales`.** Expected: FAIL naming `de.json`.
- [ ] **Step 4: Remove German.** `routing.ts` locales `['pt','en','es']`; `middleware.ts` matcher `['/', '/(en|pt|es)/:path*']`; `Languages` type; delete `locale/de.json`; remove the Deutsch menu item.
- [ ] **Step 5: Verify.** `pnpm check:locales` (PASS), `pnpm typecheck` (PASS), `pnpm lint` (PASS).
- [ ] **Step 6: Commit** `chore: add locale guard and remove German`.

### Task 2: Fonts and design tokens

**Files:** Modify `src/app/globals.css`, `tailwind.config.ts`, `src/app/[locale]/layout.tsx`; create `src/components/ui/gradient-text.tsx`.

**Interfaces:** Produces Tailwind classes `font-sans` (Inter), `font-display` (Inter Tight), `font-mono` (JetBrains Mono); utility classes `.gradient-text` (large gradient text, dark aware) and `.eyebrow` (mono, uppercase, tracking `0.08em`, 12px, small gradient); colors `bg-panel`, `text-panel-foreground`; `export function GradientText({ children, className }: { children: React.ReactNode; className?: string }): JSX.Element` rendering `<span className={cn('gradient-text', className)}>`.

- [ ] **Step 1: Fonts.** In `layout.tsx` replace Montserrat with `Inter`, `Inter_Tight` (weights 500-700) and `JetBrains_Mono` from `next/font/google`, each with a CSS variable (`--font-inter`, `--font-display`, `--font-mono`); apply the three variable classes to `<body>` plus `font-sans`. Set `<html lang>` as today.
- [ ] **Step 2: Tokens.** Replace the `:root` and `.dark` HSL values in `globals.css` with the token table above (keep the other shadcn variables); add `--panel` and `--panel-foreground`; remove the Arial `body` rule. In `tailwind.config.ts` add `panel` colors and `fontFamily` for `sans`, `display`, `mono` using the CSS variables.
- [ ] **Step 3: Utilities.** In `@layer components` define `.gradient-text` (linear-gradient 90deg `#3B82F6`, `#8B5CF6`, `bg-clip-text`, transparent text) and `.eyebrow` with the light and dark small-label gradients from Global Constraints.
- [ ] **Step 4: Verify.** `pnpm typecheck`, `pnpm lint`, then `pnpm dev` and confirm in the browser that the page loads with Inter, light and dark both switch the page background to the table values (read `getComputedStyle(document.body).backgroundColor`: `rgb(252, 252, 252)` light, `rgb(11, 16, 32)` dark).
- [ ] **Step 5: Commit** `feat: add design tokens and fonts`.

### Task 3: Header, flags and language menu

**Files:** Create `src/components/ui/flags.tsx`; modify `src/components/{header,language-toggle,theme-toggle}.tsx`, `src/hooks/use-links.tsx`, `src/lib/constants/links.ts`, `locale/{en,pt,es}.json` (`Header` namespace).

**Interfaces:** Produces `export function Flag({ locale, className }: { locale: Languages; className?: string }): JSX.Element` (22x15 SVG with a 1px inset ring, `aria-hidden`, flags: `pt` Brazil, `en` United States, `es` Spain, drawn as in the design snapshot). `links` and `useLinks()` return the seven entries in the Global Constraints order. Locale keys `Header.about` and `Header.resume`.

- [ ] **Step 1: Locale keys, check first.** Add `Header.about`, `Header.resume`, `Header.toggle_theme`, `Header.change_language` to `en` only and run `pnpm check:locales`: expected FAIL listing the missing keys in `pt` and `es`. Then add them to `pt` ("Sobre", "Currículo", "Alternar tema", "Mudar idioma") and `es` ("Sobre mí", "CV", "Cambiar tema", "Cambiar idioma"); the check passes.
- [ ] **Step 2: Links.** Update `links.ts` and `use-links.tsx` to the seven entries (`#home` through `#contact`, order per Global Constraints); `SectionName` keeps deriving from `links`.
- [ ] **Step 3: Theme toggle.** `theme-toggle.tsx`: no border, `rounded-full`, 36px square, hover `bg-foreground/10`, keep the sun and moon swap; add `aria-label` from a new `Header.toggle_theme` key (all three locales).
- [ ] **Step 4: Language menu.** Keep the Radix `DropdownMenu` (keyboard support). Trigger: borderless pill with `<Flag locale={current} />` and a chevron, `aria-label` from `Header.change_language`. Items: Português (`pt`), English (`en`), Español (`es`), each with its `Flag`, current one highlighted `bg-foreground/10`; items link via the existing next-intl `Link` with `locale`. Remove all emoji.
- [ ] **Step 5: Verify.** `pnpm typecheck`, `pnpm lint`, `pnpm check:locales`. In the browser: open the menu, Tab/Enter/arrow keys/Escape work, three items with flags; at 390px width in Portuguese and Spanish the pill wraps without overlapping the page (Review Focus 1 and 5).
- [ ] **Step 6: Commit** `feat: new header links, svg flags and language menu`.

### Task 4: Hero and proof strip

**Files:** Create `src/components/hero/flow-lines.tsx`, `src/components/proof/proof-strip.tsx`; modify `src/components/hero/hero-section.tsx`, `locale/{en,pt,es}.json` (`Home`, new `Proof`); delete `src/components/ui/background-beams.tsx` once unused.

**Interfaces:** Produces `export function FlowLines(): JSX.Element` (absolute, full-bleed SVG, six faint curved base paths plus six animated gradient pulses using stroke-dashoffset, as in the snapshot's HERO block; animation CSS in the component via a `<style>` tag or `globals.css` keyframes `flow`; `motion-reduce:` disables it) and `export function ProofStrip(): JSX.Element`. Keys: `Home.available`, `Home.headline_lead`, `Home.headline_accent`, `Home.description`, `Home.see_work`, `Home.contact`; `Proof.years_value|years_label|volume_value|volume_label|articles_value|articles_label|users_value|users_label`.

- [ ] **Step 1: Copy.** Add the keys to `en` from the snapshot (`Home.description` is the CV-based sentence; `Proof` values "5+ yrs", "$2M+", "500+", "1,000+"). Translate to `pt` (use the Portuguese CV wording: `design-assets/cv/miguelbizzi-cv-pt.pdf`, "5+ anos") and `es`. `pnpm check:locales` must pass.
- [ ] **Step 2: Hero.** Keep the memoji, availability pill (green dot pulses), centered layout, and the two buttons; "Contact me" gets the `Mail` lucide icon (16px) and uses `bg-foreground text-background`; headline uses `GradientText` on the accent part; scroll-to handlers keep working with the new ids; add the bottom fade to `bg-background`. Replace `BackgroundBeams` with `FlowLines`.
- [ ] **Step 3: Proof strip.** Four columns with hairlines (`border-border`), numbers in `font-display text-4xl` with `GradientText`, labels in `text-muted-foreground`; two columns under 640px, labels wrap.
- [ ] **Step 4: Verify.** Typecheck, lint, locales. Browser: in light and dark compare with the snapshot HERO and PROOF blocks; set `prefers-reduced-motion: reduce` (DevTools rendering emulation or browser tool) and confirm `getComputedStyle` of a pulse path has `animationName: 'none'` (Review Focus 2).
- [ ] **Step 5: Commit** `feat: new hero with flowing lines and proof strip`.

### Task 5: Project cards, data model and Phew.ai visual

**Files:** Modify `src/lib/types/project.d.ts`, `src/hooks/use-projects.tsx`, `src/components/projects/{project-card,projects-section}.tsx`, `locale/{en,pt,es}.json` (`Projects`, `ProjectsItems`); create `src/components/projects/visuals/{index,phew-visual}.tsx`, `src/assets/projects/phew.png` (copied from `src/assets/printphew.png`).

**Interfaces:** Produces:
```ts
export type ProjectKey = 'wiggle' | 'phew' | 'bizzidb' | 'sltreinos'
export interface Project {
  key: ProjectKey
  category: string
  title: string
  description: string
  achievements: [string, string, string]
  stack: string[]
  link?: { href: string; label: string }
}
// hooks/use-projects.tsx
export const useProjects: () => Project[]          // order: wiggle, phew, bizzidb, sltreinos
// projects/visuals/index.tsx
export function ProjectVisual({ projectKey }: { projectKey: ProjectKey }): JSX.Element
// projects/project-card.tsx
export default function ProjectCard({ project, index }: { project: Project; index: number }): JSX.Element
```
`ProjectCard` is a non-link `<article>`; even `index` puts text left and visual right on desktop, odd reverses; stacks to one column under 900px (text first). Keys: `Projects.eyebrow`, `Projects.title_lead`, `Projects.title_accent`, `Projects.subtitle`, `Projects.achieved_label`; `ProjectsItems.<key>.category|title|description|achievement_1|achievement_2|achievement_3` for all four keys; `Projects.github_link`.

- [ ] **Step 1: Copy.** Add all keys for the four projects to `en` from the snapshot PROJECTS block (do not change wording), then `pt` (Portuguese CV wording where it exists, otherwise faithful translation) and `es`. `pnpm check:locales` passes.
- [ ] **Step 2: Data.** Implement `useProjects` reading the keys; stack chips stay in code per project (Wiggle: NestJS, React, Prisma, PostgreSQL, AWS; Phew.ai: Next.js, Supabase, n8n, Vercel, LLM; Bizzi DB: Tauri, Rust, React, PostgreSQL, MySQL; SL Treinos: Next.js, React Native, Fastify, Prisma, PostgreSQL); only Bizzi DB has `link`.
- [ ] **Step 3: Card and section.** `ProjectCard` per the Interfaces block and the snapshot card markup: eyebrow (`category`), title, description, "What I achieved" mono label, three bullets with a gradient dot, chips (use the existing `Badge` restyled as mono chips or a local `Chip`), optional link. `ProjectsSection` keeps `id="projects"` and `useSectionInView`, renders eyebrow, title with `GradientText`, subtitle and the four cards with `gap-7`.
- [ ] **Step 4: Phew visual.** `PhewVisual` is a browser frame (26px bar with three dots, `border-border`, `bg-card`, long soft shadow) around `phew.png` via `next/image` with `alt` "Phew.ai dashboard", max height about 330px with overflow hidden; `ProjectVisual` switches on `projectKey` and returns a neutral placeholder `<div className="h-[380px]" />` for keys whose visuals are built in Tasks 6 and 7.
- [ ] **Step 5: Verify.** Typecheck, lint, locales, build. Browser: Phew card matches the snapshot in light and dark; at 390px in `pt` and `es` the text and chips wrap with no horizontal scroll (Review Focus 1). Remove the old `see_project_button` usage and `slug`/`image` fields; `rg "slug|see_project" src` returns nothing relevant.
- [ ] **Step 6: Commit** `feat: project cards with achievements`.

### Task 6: Wiggle visual

**Files:** Create `src/components/projects/visuals/wiggle-visual.tsx`; modify `visuals/index.tsx`; copy images to `src/assets/projects/wiggle-dashboard.png`, `wiggle-extension.png`, `wiggle-bill-pay.png` from `design-assets/wiggle-captures/png/web-dashboard.png`, `ext-portal.png`, `obp-account.png`.

**Interfaces:** Produces `export function WiggleVisual(): JSX.Element` (380px tall composition). Wiggle uses the light dashboard image in both themes.

- [ ] **Step 1: Build the composition** exactly as the snapshot's "01 WIGGLE" visual: a radial glow behind; the dashboard in a browser frame (about 500px wide, left offset 62px); the extension sidebar as a rounded 186x296 crop of `wiggle-extension.png` (the image is 397.8% of the crop width, shifted left 11.8% and up about 3%, so only the sidebar shows); the bill pay screen in a 146px phone frame (bezel `bg-[#0B1020]`, 5px padding, `aspect-[390/844]`). Position with absolute offsets in a `relative h-[380px]` box; below 640px scale the box with `scale-[0.7] origin-top` or hide the extension crop so nothing overflows. Use `next/image` with static imports and descriptive `alt` text.
- [ ] **Step 2: Wire** `ProjectVisual` to return `WiggleVisual` for `wiggle`.
- [ ] **Step 3: Verify.** Typecheck, lint, build. Browser: compare with the snapshot at 1440 and 390 in both themes; confirm the extension crop shows the Wiggle logo and "Payment Portal" tab with the light borders, nothing clipped oddly.
- [ ] **Step 4: Commit** `feat: wiggle project visual`.

### Task 7: Bizzi DB and SL Treinos visuals

**Files:** Create `visuals/bizzidb-visual.tsx`, `visuals/sltreinos-visual.tsx`; modify `visuals/index.tsx`; copy `design-assets/bizzidb-captures/grid.png` and `erd.png` to `src/assets/projects/bizzidb-grid.png`, `bizzidb-erd.png`; copy `src/assets/sltreinosweb.png` and `sltreinosapp.png` to `src/assets/projects/sl-dashboard.png`, `sl-app.png`.

**Interfaces:** Produces `BizziDbVisual(): JSX.Element` and `SlTreinosVisual(): JSX.Element`.

- [ ] **Step 1: Bizzi DB.** Copper-tinted radial glow; the grid screenshot at about 560px wide with a `drop-shadow` filter (the image already has rounded corners and transparent edges); the schema diagram at about 330px, absolute bottom-right, overlapping. `alt` "Bizzi DB data grid" and "Bizzi DB schema diagram".
- [ ] **Step 2: SL Treinos.** Dashboard in a browser frame (about 520px, top-left) with `sl-dashboard.png`; the student app strip (`sl-app.png`, a wide strip of four phone screens) in a 330px white framed card with border and shadow, absolute bottom-right. No grey panel behind either.
- [ ] **Step 3: Wire** both into `ProjectVisual`; remove the neutral placeholder.
- [ ] **Step 4: Verify.** Typecheck, lint, build. Browser: compare cards 3 and 4 with the snapshot in both themes (dark screenshots keep their native look); at 390px nothing overflows.
- [ ] **Step 5: Commit** `feat: bizzi db and sl treinos visuals`.

### Task 8: About and Resume

**Files:** Create `src/components/about/about-section.tsx`, `src/components/resume/resume-section.tsx`, `public/cv/miguelbizzi-cv-en.pdf`, `public/cv/miguelbizzi-cv-pt.pdf`, `scripts/check-assets.mjs`; modify `locale/{en,pt,es}.json` (`About`, `Resume`), `package.json`.

**Interfaces:** Produces `AboutSection` (`id="about"`) and `ResumeSection` (`id="resume"`), both using `useSectionInView(tHeader(...) as SectionName)`; `pnpm check:assets`.

- [ ] **Step 1: Write the failing check.** `scripts/check-assets.mjs` fails unless `public/cv/miguelbizzi-cv-en.pdf` and `public/cv/miguelbizzi-cv-pt.pdf` exist and every `*.png|jpg|webp|svg` path imported from `@/assets/...` in `src/**/*.tsx` exists. Add `"check:assets": "node scripts/check-assets.mjs"`. Run it: FAIL (CV files missing).
- [ ] **Step 2: CV files.** Copy `design-assets/cv/miguelbizzi-cv-en.pdf` and `-pt.pdf` into `public/cv/`. **Note:** both still say "4+ years" until Miguel re-exports them; the final merge is blocked until he replaces them (see the spec, section 8); the filenames stay the same so replacing is a file swap. Run `pnpm check:assets`: PASS.
- [ ] **Step 3: About.** Two-column block from the snapshot ABOUT: gradient title accent word, CV summary paragraph (5+ years), soft-skills paragraph, three chips, then education, languages (Portuguese native, English fluent, Spanish intermediate, German basic), industries; keys `About.eyebrow|title_lead|title_accent|paragraph_1|paragraph_2|chip_1|chip_2|chip_3|education_label|education_value|education_detail|languages_label|languages_value|industries_label|industries_value`.
- [ ] **Step 4: Resume.** Card from the snapshot RESUME: eyebrow, title with `GradientText`, description, two download buttons (`Download` lucide icon; primary `bg-foreground text-background`, outline) as `<a href="/cv/miguelbizzi-cv-en.pdf" download>` and the `pt` file; the paper preview is decorative (`aria-hidden`), always light; keys `Resume.eyebrow|title_lead|title_accent|description|download_en|download_pt|file_note`. The Portuguese button label stays Portuguese in every locale (it is the file's language).
- [ ] **Step 5: Locales and verify.** Add all keys to `en`, `pt`, `es`; `pnpm check:locales`, `pnpm check:assets`, typecheck, lint, build. Browser: clicking each button downloads a PDF (200 response) in light and dark (Review Focus 3).
- [ ] **Step 6: Commit** `feat: about and resume sections`.

### Task 9: Skills

**Files:** Create `src/components/skills/tech-marquee.tsx`; modify `src/components/skills/skills-section.tsx`, `src/lib/constants/skills.ts`, `locale/{en,pt,es}.json` (`Skills`).

**Interfaces:** Produces:
```ts
export type SkillGroupId = 'frontend' | 'backend' | 'database' | 'ai' | 'cloud' | 'testing' | 'payments' | 'practice'
export const skillGroups: { id: SkillGroupId; items: string[] }[]   // from the CV, in this order
export const marqueeRows: [string[], string[]]
// tech-marquee.tsx
export function TechMarquee({ rows }: { rows: string[][] }): JSX.Element
```

- [ ] **Step 1: Data.** `skills.ts` groups exactly as the CV TECHNICAL SKILLS (Frontend, Backend, Database, AI & automation, Cloud & DevOps, Testing, Payments, Ways of working = Agile / Scrum, Tech leadership, Code review, Mentoring); marquee row 1: React, Next.js, TypeScript, NestJS, Node.js, GoLang, PostgreSQL, AWS; row 2: React Native, SvelteKit, Prisma, Laravel, n8n, Docker, Jest, Playwright. Group titles in locale keys `Skills.groups.<id>`; skill names stay untranslated.
- [ ] **Step 2: Marquee.** Two rows at 32px `font-display`, alternating `text-foreground` and `text-muted-foreground`, gradient dots between items, edges masked with a 12% fade; each row duplicates its content once and translates `-50%` linearly (45s and 55s, second row reversed); `aria-hidden` on the duplicate; `motion-reduce:animate-none`.
- [ ] **Step 3: Section.** `id="skills"`, eyebrow, title with `GradientText`, marquee, then the 3-column card grid with `01`-`08` eyebrows; Payments has a 1px gradient border; the last card spans two columns; one column under 900px.
- [ ] **Step 4: Verify.** Locales, typecheck, lint, build. Browser: marquee runs and loops without a jump; with reduced motion emulated, `animationName` is `none` (Review Focus 2); compare with the snapshot in both themes.
- [ ] **Step 5: Commit** `feat: skills marquee and grouped cards`.

### Task 10: Testimonials

**Files:** Modify `src/components/testimonials/{testimonials-section,testimonial-card}.tsx`, `src/hooks/use-testimonials.tsx`, `src/lib/types/testimonials.d.ts`, `locale/{en,pt,es}.json` (`Testimonials`, `TestimonialsItems`).

**Interfaces:** Produces:
```ts
export interface Testimonial {
  id: 'daniel' | 'lucas' | 'rodrigo'
  name: string
  role: string            // e.g. "Tech Lead · Aglets Soluções"
  pullBefore: string      // headline sentence split around the accent phrase
  pullAccent: string
  pullAfter: string
  body: string
}
export const useTestimonials: () => Testimonial[]   // order: daniel (featured), lucas, rodrigo
```

- [ ] **Step 1: Copy.** `TestimonialsItems.<id>.name|role|pull_before|pull_accent|pull_after|body` for the three people, wording from the snapshot TESTIMONIALS block (the three real quotes, split into a pull sentence and the remainder); `Testimonials.eyebrow|title_lead|title_accent|roles_label`. Keep the original quote language wording in `pt` and `es` by translating faithfully; do not shorten. `pnpm check:locales`.
- [ ] **Step 2: Layout.** Bento grid `1.15fr 1fr`, featured card spans two rows with `bg-panel text-panel-foreground`, border `border-border`, a soft radial glow, large gradient quote mark and a 34px pull quote with the accent phrase in `GradientText`; the two light cards use `bg-card` with a 22px pull quote then the body in `text-muted-foreground`; gradient initials avatars; stacks to one column under 900px.
- [ ] **Step 3: Section.** Keep `id="testimonials"` and `useSectionInView`; drop the old `Card` imports.
- [ ] **Step 4: Verify.** Locales, typecheck, lint, build; browser comparison in both themes; confirm text contrast of the featured card body (`#B4BBCA` on the panel) stays at least 4.5:1.
- [ ] **Step 5: Commit** `feat: testimonials bento wall`.

### Task 11: Contact and footer

**Files:** Modify `src/components/contact/contact-section.tsx`, `src/components/footer.tsx`, `src/app/[locale]/layout.tsx` (footer placement unchanged), `locale/{en,pt,es}.json` (`Contact`, new `Footer`); create `.env.example`.

**Interfaces:** Keeps the existing form schema, EmailJS call and toasts; `Footer` default export unchanged.

- [ ] **Step 1: Env example.** `.env.example` listing `NEXT_PUBLIC_EMAIL_SERVICE_ID`, `NEXT_PUBLIC_EMAIL_TEMPLATE_ID`, `NEXT_PUBLIC_EMAIL_KEY` with placeholder values; add one README line (`README.md`) saying copy it to `.env.local`. Verify `pnpm build` with the inline dummy values passes (Review Focus 4).
- [ ] **Step 2: Contact.** Two-column card per the snapshot CONTACT: eyebrow, title with `GradientText`, description, email link, LinkedIn text; form fields keep their labels and validation messages; the submit button uses `bg-foreground text-background`, shows the `Send` lucide icon (`LoaderCircle` while submitting). Keys `Contact.eyebrow|title_lead|title_accent|description|linkedin`; keep the existing `form.*` keys and add `form.submit` if the current label is not already a key.
- [ ] **Step 3: Footer.** One quiet row after a 1px gradient hairline (`linear-gradient(90deg, transparent, #3B82F6, #8B5CF6, transparent)`): `© {year} Miguel Oliveira Bizzi` (year computed, not hard-coded), GitHub and LinkedIn icons (`aria-label`, `target="_blank"`, `rel="noopener noreferrer"`), and a "Back to top" link to `#home`; at least 96px of space above it separates it from the contact card. Keys `Footer.back_to_top`.
- [ ] **Step 4: Verify.** Locales, typecheck, lint, build. Browser: submit with empty fields shows the existing validation messages; the layout matches the snapshot in both themes; at 390px in `pt` and `es` the two buttons and form do not overflow.
- [ ] **Step 5: Commit** `feat: contact restyle and minimal footer`.

### Task 12: Compose the page, clean up, final verification

**Files:** Modify `src/app/[locale]/page.tsx`, `src/app/[locale]/layout.tsx` (metadata), `README.md`; delete unused files and keys; run the full verification.

- [ ] **Step 1: Page order.** `page.tsx` renders, in this order: `HeroSection`, `ProofStrip`, `ProjectsSection`, `AboutSection`, `ResumeSection`, `SkillsSection`, `TestimonialsSection`, `ContactSection` (spacing per snapshot: `mt-28` between sections after the proof strip).
- [ ] **Step 2: Metadata.** `layout.tsx` metadata title "Miguel Bizzi | Full Stack Software Engineer" and a one-sentence description (the hero subtitle); keep it English (single metadata for all locales is acceptable).
- [ ] **Step 3: Remove leftovers.** Delete unused files under `src/assets/` (`ai-startup-landing-page.png`, `bizzidashboard.png`, `dark-saas-landing-page.png`, `light-saas-landing-page.png`, `printwb.png`, `printwiggle.png`, `saas-marketplace.png`, `printphew.png`, `sltreinosweb.png`, `sltreinosapp.png`, empty `companies/` dirs) after `rg "assets/(printphew|sltreinos|printwiggle|printwb|saas-marketplace|bizzidashboard|ai-startup|dark-saas|light-saas)" src` returns nothing; delete locale keys no component uses (`Projects.description`, `Projects.real_world`, `Skills.stack|description`, `Testimonials.what_clients_say|description`, old `ProjectsItems` keys, old `Home.hello`); run `pnpm check:assets` and `pnpm check:locales`.
- [ ] **Step 4: Section ids guard.** Extend `scripts/check-assets.mjs` (or a new `scripts/check-sections.mjs`, wired as `pnpm check:sections`) to fail unless every `links[].slug` has a matching `id="…"` in `src/components`, and the order of the section components in `page.tsx` matches the order of `links`.
- [ ] **Step 5: Full verification.** `pnpm typecheck`, `pnpm lint`, `pnpm check:locales`, `pnpm check:assets`, `pnpm check:sections`, build with dummy env. Then `pnpm start` and check each of `/en`, `/pt`, `/es` in light and dark at 1440, 768 and 390: no horizontal scroll, no console errors, header highlight follows scrolling, CV downloads work, language menu keyboard-operable, and Lighthouse mobile performance 90 or higher on `/en`. Compare each section against the two snapshot files.
- [ ] **Step 6: Commit** `chore: compose home page and remove old code`.

---

## Self-review notes

- **Spec coverage:** sections 3 (structure) → Tasks 3 to 11 and 12 (order); section 4 (tokens, fonts, motion, layout) → Tasks 2, 4, 9; section 5 (components, data, header, i18n, assets, contact) → Tasks 1, 3, 5 to 11; section 6 (quality bar) → Task 12 step 5; section 7 out of scope respected; section 8 decisions (stash, languages, links, CV, years) → Global Constraints and Task 8; section 10 (dark) → tokens and per-task dark checks.
- **Known dependency on Miguel:** the CV PDFs must be re-exported with "5+" before the Resume section ships; Task 8 uses the current files so the feature works end to end meanwhile.
- **No automated UI tests exist in this repo.** The plan adds three small Node checks (locales, assets, sections) and relies on build, lint, typecheck and explicit browser checks; adding a Playwright suite is out of scope.
