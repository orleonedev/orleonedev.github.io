# Problem statement
The v2 portfolio has the intended 4-tab architecture, but `Showcase` is currently empty and the project content model is still legacy/placeholder-heavy. We need a clear, implementation-ready Showcase concept that helps you decide what to share and how to present it for senior mobile-engineer positioning.
## Current state overview (researched)
* Routing/navigation foundation is in place: `/`, `/showcase`, `/insights`, `/connect`, and `/project/:projectId` are wired in `src/App.tsx:18-23`, with adaptive mobile/desktop nav in `src/components/navigation/AdaptiveNav.tsx (8-143)`.
* `ShowcaseTab` has no content yet (`src/pages/v2/ShowcaseTab.tsx:3-7`), but About links users to it as a key destination (`src/components/about/SectionPreviews.tsx:35-40`).
* Project data already exists (`src/data/projects.ts (1-82)`) and a generic detail page exists (`src/pages/ProjectDetailPage.tsx (1-83)`), but the detail experience is not yet case-study structured.
* Legacy single-page components (`Hero/About/Portfolio/Articles/Contact`) are still present through `src/pages/MainPage.tsx (1-39)` but are not connected to current routes; this creates duplicate implementation paths.
* `.gemini` intent aligns with a metrics-driven Showcase (`.gemini/GEMINI.MD:34-36`) and broader “senior positioning” narrative (`.gemini/review.md (21-46)`), but this intent has not been translated into current showcase UI/data.
* Placeholders remain in active v2 content (example links/media in `src/data/insights.ts:24,80`, simulated form handling and placeholder scheduling note in `src/pages/v2/ConnectTab.tsx:34-46`), so content curation is still incomplete.
## Research signals to apply to Showcase concept
* Case-study quality should prioritize clear problem framing, your role, process/decisions, and measurable outcomes (Google UX portfolio tips PDF; NN/g UX hiring report).
* Portfolio should emphasize strongest, role-relevant work over raw quantity; include enough depth to evaluate thinking and impact (Google + NN/g guidance).
* For public code proof, curated GitHub profile/pinned repositories should align with showcased narrative (GitHub Docs profile/pinned items).
* Mobile product storytelling benefits from strong visual proof (screenshots/app previews/value framing) similar to app product-page conventions (Apple product page guidance).
## Proposed showcase concept (recommended)
Use a **Case-Study-First Showcase** with two layers:
1. **Flagship Case Studies (3-5 projects)**
Each card leads to a structured case-study detail with: context, your role/scope, key technical decisions, constraints, measurable outcomes, and proof links.
2. **Project Archive (lightweight grid/list)**
Keep additional projects discoverable with short descriptions and external links, but without full narrative depth.
This balances credibility (depth) and breadth (coverage) while reducing noise.
## Proposed implementation approach
1. **Content strategy and curation pass**
Define final flagship set (recommended 3-5) from `src/data/projects.ts`; for each flagship, gather outcome metrics and proof artifacts (App Store, GitHub, media, screenshots/video).
2. **Data model upgrade for showcase narratives**
Extend project schema to support case-study fields (problem, role, architecture decisions, impact metrics, timeline, team size, proof links, media assets, “featured” rank).
3. **Build `ShowcaseTab` as a two-zone page**
Top zone: featured case studies with metric badges and clear CTAs. Bottom zone: archive grid of additional projects. Reuse current glass/animation primitives (`src/components/ui/GlassCard.tsx:11-14`, motion patterns used in `src/pages/v2/InsightsTab.tsx (1-77)`).
4. **Upgrade detail experience from generic to narrative**
Refactor `ProjectDetailPage` to present structured case-study sections and update return flow to Showcase context (current back link points to `/` in `src/pages/ProjectDetailPage.tsx:17-21`).
5. **Consolidate and reduce migration ambiguity**
Archive/remove unused legacy page path (`src/pages/MainPage.tsx (1-39)` and dependent legacy sections) after Showcase v2 reaches parity.
## Decisions needed from you before implementation
* Which **3-5 flagship projects** should lead (my default suggestion: Lapse, mark, one App Store game shipped under time constraints, one collaboration/enterprise-flavored mobile effort if available).
* Preferred tone for Showcase: **product impact first**, **technical architecture first**, or **balanced**.
* Whether to include non-mobile/game-only projects in flagship tier, or keep them in archive.
* Whether to include explicit consulting-friendly framing (audit/architecture outcomes) inside each case study.
## External sources
* Google UX Portfolio Tips PDF: [https://services.google.com/fh/files/misc/ux_portfolio_tips.pdf](https://services.google.com/fh/files/misc/ux_portfolio_tips.pdf)
* NN/g UX Careers Report (portfolio evaluation perspective): [https://media.nngroup.com/media/reports/free/UX_Careers_Report_2024.pdf](https://media.nngroup.com/media/reports/free/UX_Careers_Report_2024.pdf)
* GitHub Docs (profile + pinned items): [https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/pinning-items-to-your-profile](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/pinning-items-to-your-profile)
* Apple Developer product-page guidance: [https://developer.apple.com/app-store/product-page/](https://developer.apple.com/app-store/product-page/)
