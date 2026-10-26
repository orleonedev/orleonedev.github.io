# orleone.dev

Personal site of Oreste Leone, iOS engineer. It uses an iOS/iPadOS‑inspired "liquid glass" UI built with
React, Tailwind CSS v4 and Framer Motion.

```bash
npm install
npm run dev       # local development
npm run build     # type-check + production build
npm run feed:add  # add a post/talk/shared link to the Insights feed (asks for each field)
npm run feed:sync # pull new Medium articles into the Insights feed
```

Pushing to `main` deploys to GitHub Pages via GitHub Actions. To add something to the Insights feed, open a
**Share to feed** issue. See `CLAUDE.md` for structure, the feed pipeline and design-system conventions.
