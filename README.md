# Nmesirionye Ngbaronye — Portfolio

Personal site for **Nmesirionye Ngbaronye**, AI & Mechatronics Engineer.
Mechatronics Engineering undergraduate at the Federal University of Technology,
Owerri.

Live: [nmesirionye.ngbaronye.com](https://nmesirionye.ngbaronye.com)

## What this is

A multi-page React Router portfolio built as a record rather than a flyer. Every
project has its own case study, the timeline includes what failed, and dates that
cannot be verified are marked unpublished instead of guessed.

## Stack

React 18 · TypeScript · React Router · Tailwind CSS · Framer Motion · Vite ·
jsPDF · Supabase Realtime (optional live visitor presence)

## Routes

| Path | Purpose |
| --- | --- |
| `/` | Currently snapshot, featured work, timeline and journal previews |
| `/about` | Background and discipline |
| `/work` | Client work and products, each with a case study |
| `/work/[slug]` | Individual project: problem, approach, role, status, links |
| `/work/graveyard` | Abandoned approaches, why they ended, what they taught |
| `/now` · `/now/archive` | Current focus and dated snapshots |
| `/timeline` | Year by year, including failures |
| `/education` | Degree, coursework, certifications |
| `/philosophy` | Working principles behind the decisions |
| `/achievements` | Hack-Nation recognition and certificate |
| `/writing` | Links to the external journal |
| `/press` · `/uses` · `/legacy` · `/search` · `/contact` | Supporting pages |

## Local development

```sh
npm install
npm run dev
```

## Verification

```sh
npm run test    # vitest
npx tsc -p tsconfig.app.json --noEmit
npm run build
```

## Content model

`src/lib/portfolioContent.ts` is the single source of truth for projects,
timeline, principles, education and the sitemap. Cards, detail pages, search,
the CV generator and `sitemap.xml` all read from it, so they cannot drift apart.

Only facts with evidence are published — a live URL, a public repository, a dated
event, or the creator's own record. Unconfirmed dates render as "Period not
published", enforced by tests.

## Optional: live visitor badge

Set these to enable the "N here now" badge:

```sh
cp .env.example .env
```

The badge counts open tabs using anonymous per-tab session ids. No schema or
tables are required. With no backend configured the badge does not render, so no
number is ever invented.

## Writing

Long-form writing lives at
[nmesirionyejournal.ngbaronye.com](https://nmesirionyejournal.ngbaronye.com).
This site stays an index and a summary of the work.