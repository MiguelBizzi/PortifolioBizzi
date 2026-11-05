# Wiggle case study: page design spec

> **Superseded on 2026-11-03.** The dedicated per-project pages were dropped. The four principal projects (Wiggle, Phew.ai, Bizzi DB, SL Treinos) now live as cards on the home page, each with an "achievements" list and real screenshots. This document is kept for its facts, the fictional dataset and the screenshot method. The archived page design is in `design-assets/wiggle-captures/archived-wiggle-page-design.dc.html`, and Bizzi DB's real-app captures are in `design-assets/bizzidb-captures/`.

Status: approved inputs received on 2026-11-02; designs next. Scope: the Wiggle project page only. The other three principal projects (Phew.ai, Bizzi DB, SL Treinos) get their own spec afterwards, each with its own bespoke page.

## 1. Intent

**What this is.** The definitive Wiggle page on miguelbizzi.com.br. Not a template: its layout, imagery and rhythm are designed for this product and do not need to match the other project pages.

**Who reads it.** Hiring managers, tech leads and founders, probably after seeing the home page or the CV. They have two minutes. They should leave knowing what Wiggle does, how big it is, what Miguel personally owned, and what changed for the people who use it.

**What it should say.** Impact, value and achievements first. Technology second and briefly, because Wiggle is a private company's product: no internal architecture, no client data, no secrets. The page shows the product through real UI with mock data, so the work is visible without exposing anything.

**What success looks like.** A reader can describe Wiggle in one sentence after scrolling once, remembers "$2M+ a month" and "three products, built from the first commit", and wants to open the CV or write to Miguel.

**Said by the user** (and now fixed): impact over stack; screenshots of the real apps with mock data; a high-quality image treatment; the page is single and definitive. **Confirmed by Miguel:** the company name and product UI may be shown publicly; designs are in English only for now; Miguel was the only developer, working with the CTO, the CEO and a QA.

## 2. Facts the page can stand on

From the CV and the repository, confirmed:

| Fact | Source |
|---|---|
| Senior Full Stack Software Engineer, global team, Sep 2025 to present | CV |
| Built from the ground up; over USD 2 million in monthly payment volume | CV |
| POS, treatment planning, invoicing, payments and CRM unified in one platform | CV |
| Multi-level treatment plans with automatic transaction processing | CV |
| AI-assisted plan ingestion, which speeds up clinic onboarding and increases margins | CV |
| Gateway and in-clinic terminal integrations (Fiserv, Clover) behind a self-service payment portal, which reduced admin tickets from clinic staff | CV |
| Production on AWS, built for reliability in a financially critical system | CV |
| Three client-facing products: clinic web app, online bill pay for pet owners, browser extension over the clinic's practice-management system | repo |
| Extension: floating sidebar, reads patient and invoice amount from the PMS page, pays by terminal, payment link, card on file or cash/check with a 4% cash discount, auto sign-out after 15 minutes for PCI compliance | extension user manual |
| Web app: dashboard, treatment plans, payment plans with client consent and signature, invoicing with automatic reminders (24 hours before due, 1 and 7 days overdue), transactions with receipts, refunds and voids, client vault, settings | repo |
| Bill pay: identify with last name plus one detail, verify with a code, then pay as an account holder or as a guest, with a success and receipt screen | repo |
| Admin tool for the Wiggle team, with per-clinic email and SMS template overrides (20 templates) | repo |

Supplied by Miguel: 15+ clinics live, 5,000+ transactions a month, quick clinic onboarding, sole developer alongside the CTO, the CEO and a QA. Still unquantified (kept as soft wording, never as invented figures): the drop in admin tickets and the onboarding time before and after.

## 3. Page concept

One idea carries the page: **the same payment, three touchpoints.** A vet clinic's money moves through the front desk, the back office and the pet owner's phone. Wiggle covers all three, and the page walks through them in that order.

### Layout, top to bottom

1. **Opening.** Floating header as on the rest of the site. Title "Wiggle" in the gradient wordmark style, one line of value ("Getting veterinary clinics paid, without the front-desk friction."), a slim meta row (role, period, team, company type). Beneath it, a **hero composition**: the web app in a browser frame, the extension sidebar floating over a mock PMS page at its corner, and a phone with bill pay overlapping the bottom edge. On load the three pieces settle into place with a short staggered rise; with reduced motion they are simply there.
2. **The numbers.** Four large gradient figures: $2M+ monthly volume; 15+ clinics live; 5,000+ transactions a month; 3 products from 1 developer. Short caption each. No more than four.
3. **The problem.** Three to four sentences in Miguel's voice about what clinics did before (separate tools, manual follow-ups, awkward conversations at the desk about cost). Draft in section 6; Miguel rewrites.
4. **Chapter 1, the front desk: the browser extension.** Distinct layout: a wide mock PMS page (generic, unbranded) with the Wiggle sidebar floating on top, shown in three states side by side or as a three-step tab: a payment ready to send, the payment options, and the confirmation. A short "What changed for staff" list with three benefits, each in one line: they never leave the page they work in, amounts and client details are read from the screen instead of retyped, and the cash-discount math is automatic. A single technical note, one sentence.
5. **Chapter 2, the back office: the web app.** Distinct layout: one large browser frame with a segmented control above it (Dashboard, Treatment plans, Payment plans, Invoicing, Transactions). Switching changes the screenshot with a crossfade; each state has a two-line caption on the value, not the feature. Beside the frame, a column of three outcomes: payment plans that collect themselves, reminders that chase invoices so staff don't have to, treatment plans clients can approve before they leave.
6. **Chapter 3, the pet owner's phone: online bill pay.** Distinct layout: three phone frames in a row connected by a thin gradient line, one per step (find account, verify, pay and receipt). The caption is about the owner's side: pay in under a minute, any hour, no login needed. Closing line on the effect for the clinic: fewer calls and admin tickets, without a made-up percentage.
7. **What I owned.** Three to five short statements about Miguel's contribution in plain language: the only developer, working directly with the CTO, the CEO and a QA; built the platform from zero, led the technical direction with product and leadership, brought on the payment gateway and in-clinic terminals, shipped the AI-assisted onboarding of treatment plans, ran production for a system where mistakes cost money.
8. **How it stays trustworthy** (compact). A single strip of four facts, no diagrams: multi-tenant so each clinic is isolated, automated tests and CI on every change, production on AWS, built for payment-industry security habits such as automatic session timeout. Anything beyond this is withheld on purpose.
9. **Next.** A "next project" card (Phew.ai) and a quiet link to the CV download.

### Visual language

Same tokens as the home page: ink on near-white, Inter Tight display, Inter body, JetBrains Mono for small labels, the blue-to-violet gradient on eyebrows, one word per title and the big numbers, nothing else. What is Wiggle-specific is the imagery, which is the star of the page. Screens sit on soft neutral stages with generous padding, a very light radial glow behind the hero composition, and consistent shadow and radius so three different apps look like one family. No stock imagery, no abstract illustrations.

Motion is minimal: the hero settle, the crossfade in chapter 2, and a subtle parallax on the phones in chapter 3. All motion respects reduced-motion.

## 4. Imagery plan

Goal: screenshots that look like a real clinic using the product, with data that is entirely fictional, framed consistently.

**Fictional dataset (one source of truth for every shot).** One clinic, "Maple Grove Veterinary"; a handful of invented clients and pets (for example Fluffy, Biscuit, Olive); round, believable amounts; dates relative to a fixed "today" so everything lines up across apps. The same clinic and clients appear in the extension, the web app and bill pay, so a viewer can follow one payment across all three.

**Shots to produce** (13 to 15):

- Web app, desktop, light: dashboard; treatment plans list; treatment plan builder with line items; payment plans list (the real screenshot already used on the site is a fair starting point); payment plan consent and signature screen as the client sees it; invoicing list; invoice detail; transactions with a receipt open.
- Extension: sidebar login; payment portal with a client and amount read from the page; payment options (terminal, link, card on file, cash with the discount shown); payment confirmation; treatment plans drawer. Composited over a generic mock PMS page that we draw ourselves, never a real vendor's UI.
- Bill pay, phone: identify; verify code; balance and pay; success with receipt.

**How they are captured** (verified as feasible in the repo; no product code changes):

- Web app: the repo already has Cypress end-to-end tests with API stubs and JSON fixtures for dashboard, treatment plans, payment plans, invoices and transactions. We add a throwaway capture spec outside the product tree (in a scratch workspace) that loads these pages with our own fictional fixtures, takes retina screenshots at a fixed viewport, and writes PNGs. Cypress is already installed locally.
- Extension: it has a test harness build (a page that renders the sidebar against a stub) which we can run and capture the same way. The mock PMS backdrop is our own simple page.
- Bill pay: no test infrastructure exists, so we run the dev server, stub its handful of API calls in the same capture spec, and capture at a phone viewport.
- Each capture is run twice if needed (light only is planned; dark is out of scope).
- Before anything is committed to the portfolio, every image is checked for real names, emails, phone numbers, tokens or clinic identifiers. Source fixtures that come from the repo are not trusted; we override them.

**Finishing.** Exports at 2x as WebP with PNG fallback, widths 1600 and 800, under `public/case-studies/wiggle/`. Device frames and the hero composition are built in HTML and CSS, not baked into the images, so they can be re-composed and stay sharp. Every image gets descriptive alt text. Lazy loading below the fold; the hero images are preloaded.

## 5. Technical design for the portfolio

- **Route:** `src/app/[locale]/case-studies/wiggle/page.tsx`, a dedicated page rather than a dynamic slug template. Phew.ai, Bizzi DB and SL Treinos each get their own folder next to it. The home page cards link to these four routes.
- **Components:** small, page-local building blocks under `src/components/case-studies/wiggle/`: `HeroComposition`, `NumbersStrip`, `ExtensionChapter`, `WebAppChapter` (with the segmented control), `BillPayChapter`, `Ownership`, `TrustStrip`, `NextProject`. Shared pieces only where the other pages will genuinely reuse them: `DeviceFrame` (browser, phone, floating sidebar) and `CaseStudyShell` (header spacing, footer, next-project card). No generic "section" abstraction.
- **Content and i18n:** all copy lives in the locale files under a `CaseStudyWiggle` namespace. English is authored first; the designs are English only. Portuguese, Spanish and German are a later task and fall back to English until translated.
- **Images:** `next/image` with explicit dimensions; `priority` only on the hero; blur placeholders generated at build time.
- **Motion:** framer-motion, already in the project; `useReducedMotion` gates everything.
- **Cleanup in the same change:** delete the placeholder `case-studies/[slug]` page and `case-study-template.html` (they contain a fictional "FinClear" project), remove the unused `CaseStudies.finclear` keys from all four locale files, and remove the `finclear` slug from the projects hook.
- **Navigation:** home page "Read case study" links go to the four static routes; the "Resume" nav and CV download land in a separate task.

## 6. Draft copy (English; for Miguel to rewrite in his own voice)

- **Value line:** "Getting veterinary clinics paid, without the front-desk friction."
- **Problem:** "A veterinary clinic's money moves through too many hands: a practice-management system, a card terminal, paper treatment plans, and a stream of follow-up calls. Staff re-type amounts, chase unpaid invoices, and have the hardest cost conversations at the front desk. I joined as the only developer to build one platform that ties it together, working side by side with the CTO, the CEO and a QA."
- **Front desk:** "Staff stay on the screen they already work in. Wiggle reads the patient and the amount, offers the right way to pay, and applies the clinic's cash discount automatically."
- **Back office:** "Plans, invoices and payments live in one place. Payment plans collect themselves, reminders go out on time, and a treatment plan can be approved before the client leaves the room."
- **Pet owner:** "Owners find their account, confirm with a code and pay from their phone, at any hour, with a receipt in their inbox."
- **Ownership:** "The only developer, working with the CTO, the CEO and a QA. Built the platform from zero. Led technical direction with product and leadership. Integrated the payment gateway and in-clinic terminals. Shipped AI-assisted ingestion of treatment plans to speed up onboarding. Ran production for a system where mistakes cost money."

## 7. Out of scope

Other project pages; the CV section and download; real analytics or case-study metrics beyond what Miguel supplies; dark-mode imagery; videos or GIFs; any internal diagrams, schema, endpoints or credentials.

## 8. Acceptance criteria

1. The page is a dedicated route and looks and reads differently from a template; the other three projects can look different later without refactoring this one.
2. Every number on the page is either from the CV, supplied by Miguel, or a visible bracketed placeholder.
3. All screenshots use only the fictional dataset; a final scan finds no real personal or clinic data.
4. The three chapters each have a distinct layout, and together show the web app, the extension and bill pay.
5. Works from 360px to wide desktop with no horizontal scroll; keyboard-operable segmented control; descriptive alt text; text contrast at least 4.5:1.
6. Motion is disabled by `prefers-reduced-motion`.
7. Lighthouse performance 90 or higher on mobile for this route.
8. The placeholder FinClear page, template file and keys are gone.

## 9. Decisions made

1. Showing Wiggle's name and UI publicly: yes.
2. Numbers to use: 15+ clinics, 5,000+ transactions a month, quick onboarding (no figure). The drop in tickets stays unquantified.
3. Team: Miguel was the only developer, with a CTO, a CEO and a QA.
4. Designs are in English only; other locales come later.
5. The problem paragraph is written in section 6 and can be refined after the first design review.

## 10. What happens next

Next: capture the screenshots with the fictional dataset, then design the page on the canvas using them. After you approve that design, an implementation plan (page, then cleanup), then the same process for the three remaining project pages.

## 11. Status update (2026-11-02, later)

**Screenshots are captured.** 18 retina PNGs with the fictional "Maple Grove Veterinary" dataset live in `design-assets/wiggle-captures/png/`, and the scripts that produce them live in `design-assets/wiggle-captures/capture-scripts/` so they can be re-run when the product UI changes.

| Group | Files |
|---|---|
| Web app (2880x1800, light) | web-dashboard, web-treatment-plans, web-payment-plans, web-invoicing, web-transactions, web-payment-portal, web-client-vault, web-dashboard-dark |
| Extension over a mock practice-management page | ext-portal, ext-treatment-plans |
| Online bill pay (phone, 780x1688) | obp-identify, obp-verify, obp-account, obp-pay |
| Client-facing pages (phone) | phone-invoice, phone-treatment-plan, phone-payment-plan, phone-receipt |

How they were made, so nobody repeats the detour: the apps' own Cypress setups with API stubs, run headless at 2x scale from temporary config files that were deleted afterwards, so the Wiggle repository is back to its original state. Port 5173 is usually taken by another local project, so the extension harness runs on its own port.

**Known gaps.** The treatment plan builder, the bill-pay success screen and a transaction detail with receipt are not captured yet. The phone payment-plan screen still shows placeholder agreement text from the app's test stubs, so the page crops it or it needs one more capture pass. Invoicing is captured without its summary tiles because the stubbed summary did not load. The extension harness draws its own generic "VetDesk" page; nothing from a real vendor appears.

**Design.** The definitive Wiggle design is on the canvas (board "2 · Wiggle"), built from these images: hero composition, numbers strip, problem, three chapters (front desk, back office with a tab switcher, pet owner with a four-phone journey), impact band, ownership, next project. The implementation follows sections 3 to 5 of this spec once the design is approved.
