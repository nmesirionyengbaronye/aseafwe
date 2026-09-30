# Project Architecture

- Keep the main portfolio as a React Router multi-page site, with shared page chrome and existing section components reused on dedicated routes; this preserves the established visual identity while giving each subject a stable URL.
- Keep writing hosted externally at `nmesirionyejournal.ngbaronye.com`; the portfolio `/writing` route is an introduction and outbound directory, not a duplicated publication archive.
- Centralize identity and account URLs in `src/lib/site.ts`; this prevents profile-handle drift across navigation, contact, and writing surfaces.
