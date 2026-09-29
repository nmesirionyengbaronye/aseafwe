# Official Portfolio Architecture Plan

## Goal
Evolve the existing portfolio into the curated, multi-page official site described in the uploaded architecture, while keeping the journal separate at `nmesirionyejournal.ngbaronye.com`. Treat the main-site domain `nmesirionye.ngbaronye.com` as the intended destination, not as an already-connected or published domain.

## What already exists
- A single homepage with hero, About, 3D-style Skills, Completed Client Work, Open Source Projects, Achievements, Contact, and footer.
- Existing real project links, Hack-Nation recognition/certificate, education context, and social/contact details.
- A one-page app with anchor navigation; there are no dedicated About, Work, Achievements, Skills, or Contact URLs yet.
- No existing Now page, timeline, writing preview, project graveyard, press, philosophy, legacy, uses, or site search.

## Proposed phases

### Phase 1 — Curated core
- Keep `/` as a concise identity and navigation page: introduction, selected existing work, one verified achievement, current snapshot, and clear links deeper into the site.
- Map existing sections into `/about`, `/work`, `/achievements`, `/skills`, and `/contact`, reusing and refining current portfolio content rather than duplicating it.
- Add `/writing` as a short introduction and direct link to `https://nmesirionyejournal.ngbaronye.com`; do not imply journal posts or RSS exist until confirmed.
- Add `/now` only with user-confirmed current status, priorities, and update date. Do not invent this content.
- Keep top navigation to Home, About, Work, Timeline (when populated), Writing, and Contact; place secondary pages in contextual links/footer.
- Start with existing projects and evidence. Do not assume UniUI, Pantero, or VitaChain details in the sample architecture are current or confirmed.

### Phase 2 — Project depth and life record
- Add case-study pages under `/work/[slug]` for selected existing projects, using only confirmed project roles, dates, user/problem, solution, stack, screenshots, outcomes, and lessons.
- Add `/timeline`, `/education`, and `/now/archive` from verified dated milestones and academic details.
- Add `/work/graveyard` only if there are real paused/abandoned projects the user wants documented.

### Phase 3 — Supporting pages
- Add `/philosophy`, `/press`, `/legacy`, and `/uses` when the user supplies or approves the content.
- Add `/search` only once enough pages exist to make search useful; include the main site, not the journal unless requested.
- Add breadcrumbs, sitewide footer links, sitemap entries, and page-specific metadata as each route is introduced.

## Technical approach
- Keep the existing React/Vite app and add real navigable routes; do not migrate frameworks solely because the reference document lists alternatives.
- Preserve current visual identity and verified portfolio facts. Make the journal a clearly labeled external destination, not a second section pretending to be hosted here.
- Update the sitemap only for routes that actually exist, and keep the current domain values unchanged until the intended domain is connected and live.
- Before publishing/domain setup, confirm which current activities belong on `/now`, which projects deserve case studies, and any missing project dates/outcomes. No unsupported claims or invented personal history.

## Completion checks
- Main navigation and footer lead to valid pages; unknown paths show a helpful 404.
- Each page has a clear title and self-referencing metadata, and sitemap entries match real public routes.
- Journal links open the exact `nmesirionyejournal.ngbaronye.com` destination.
- Existing portfolio links, facts, and responsive behavior remain intact.
