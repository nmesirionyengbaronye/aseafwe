- [x] Update the portfolio name order to Nmesirionye Ngbaronye
- [x] Replace GitHub and X usernames everywhere, including project repository links
- [x] Replace text-only skills with animated 3D-style skill icons
- [x] Verify the updated public links and skills section in the preview
- [x] Add Google site-verification file and basic indexing files (robots.txt, sitemap.xml)
- [x] Set the portfolio’s canonical and social URL to its published project URL
- [x] Standardize X and creator-account usernames across the portfolio and CV
- [x] Add dedicated About, Work, Achievements, Skills, Contact, and Writing pages
- [x] Replace one-page anchor navigation with real page navigation
- [x] Update the sitemap for every new public page
- [ ] Verify the new pages and account links in desktop and mobile preview

## Full portfolio completion requested
- [x] Add the missing planned routes: Now, Now archive, Timeline, Education, Philosophy, Press, Legacy, Uses, Search, and project detail pages.
- [x] Build longer, useful page content only from verified portfolio facts; visibly mark unconfirmed areas rather than inventing details.
- [x] Add all new public routes to navigation/footer and the existing sitemap.
- [x] Add matching page titles and descriptions through the existing page metadata pattern.
- [x] Verify all routes, navigation, search, and account links in desktop and mobile preview.

## Project case studies
- [x] Give every project its own URL under `/work/[slug]`, including RIE, HallsSports and NachiGold.
- [x] Add role, status and period to each project; leave unconfirmed dates explicitly unpublished rather than guessed.
- [x] Record problem, approach and key features per project instead of empty labels.
- [x] Publish the abandoned approaches on `/work/graveyard` with the reason and the lesson.
- [x] Consolidate all project data into `src/lib/portfolioContent.ts` as the single source of truth.

## Narrative and positioning
- [x] Reposition the site as "AI & Mechatronics Engineer" across hero, About, footer, CV and meta tags.
- [x] Add UniUI, Pantero and VitaChain as documented projects.
- [x] Connect the portfolio to the journal from /writing, the footer and /about.
- [x] Add a home page Currently snapshot, featured work, timeline and journal previews.

## SEO and performance
- [x] Generate sitemap.xml and robots.txt at build time from the route registry.
- [x] Correct the canonical domain, which still pointed at the aseafwe.lovable.app preview host.
- [x] Add JSON-LD Person + WebSite + ItemList structured data.
- [x] Lazy-load three.js and jsPDF so neither blocks first paint.
- [x] Add a site-wide search route over pages, projects and timeline entries.

## Outstanding
- [ ] Deploy: Vercel Hobby blocks private-repo collaboration, so the production project needs Pro or a public repo.
- [ ] Set Supabase presence env vars (`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`) to enable the live visitor badge.
- [ ] Add real start/launch dates to client work as they become verifiable.
- [ ] Rotate the VPS root password, which was exposed in plaintext during the journal infrastructure review.