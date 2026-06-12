# Implementation Plan: Professional Portfolio Website

**Branch**: `001-professional-portfolio-site` | **Date**: 2026-06-12 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `specs/001-professional-portfolio-site/spec.md`

**Note**: This plan targets a static Next.js website with embedded mock content in JSON files.

## Summary

Build a responsive professional portfolio site using Next.js configured for static export. The site will include a landing page with a professional summary, core skills, interests, and achievement highlights, plus separate pages for experiences, projects with a GitHub section, and education/professional qualifications. Mock content is stored in JSON files and the site uses static rendering only.

## Technical Context

**Language/Version**: Next.js + React running on Node.js 18+ for local development.

**Primary Dependencies**: `next`, `react`, `react-dom`; minimal build tooling limited to Next.js static export.

**Storage**: Static JSON files under `data/` for landing, experience, projects, education, and GitHub sections.

**Testing**: Manual responsive browser testing via `npm run dev`; build-time validation with `npm run build`; accessibility checks through browser tools and Lighthouse.

**Target Platform**: Static web hosting via Vercel, Netlify, GitHub Pages, or any static site host that can serve the exported `out/` directory.

**Project Type**: Frontend web application / static site.

**Performance Goals**: Fast initial load and smooth mobile experience; target Lighthouse performance/accessibility best-practices with minimal bundle size and no runtime errors.

**Constraints**: No backend database, no live external feeds, no runtime data fetching from external APIs; content is rendered from JSON at build time.

**Scale/Scope**: Four main pages, a small set of reusable page components, and a lightweight static content layer.

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

- **Constitution Pressure**: The existing constitution prefers a pure static HTML/CSS/JS site with no frameworks.
- **Planned Exception**: This implementation uses Next.js static export to provide a more scalable multi-page architecture, page routing, and developer ergonomics while still producing a static `out/` directory.
- **Justification**: Next.js enables clean page structure, static site rendering, and simple JSON-driven content management without external runtime dependencies.

## Project Structure

### Documentation (this feature)

```text
specs/001-professional-portfolio-site/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
└── tasks.md
```

### Source Code (repository root)

```text
public/
  └── assets/
data/
  ├── landing.json
  ├── experience.json
  ├── projects.json
  ├── education.json
  └── github.json
components/
  ├── Layout.js
  ├── NavBar.js
  ├── SectionHeader.js
  ├── ProjectCard.js
  ├── ExperienceItem.js
  └── EducationItem.js
pages/
  ├── index.js
  ├── experiences.js
  ├── projects.js
  └── education.js
styles/
  ├── globals.css
  ├── Home.module.css
  ├── Experiences.module.css
  ├── Projects.module.css
  └── Education.module.css
next.config.js
package.json
```

**Structure Decision**: Use a single Next.js application in the repository root. Pages are generated via the `pages/` directory and populate content from local JSON files in `data/`. This keeps the site static while supporting clean navigation and reusable components.

## Complexity Tracking

| Violation                           | Why Needed                                                                       | Simpler Alternative Rejected Because                                                                             |
| ----------------------------------- | -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Constitution requires no frameworks | Next.js provides clean page routing and static export for a multi-page portfolio | Pure hand-coded static HTML would be harder to maintain for multi-page content and reduce developer productivity |
