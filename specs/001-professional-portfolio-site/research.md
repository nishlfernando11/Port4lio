# Research: Professional Portfolio Website

## Decision

Use Next.js in static export mode with local JSON content files. The site will remain a static website while taking advantage of Next.js routing and page structure for a polished multi-page portfolio.

## Rationale

- The user explicitly requested Next.js and a modern professional portfolio site.
- Static export keeps the deliverable compatible with static hosting and avoids backend dependencies.
- JSON data files provide a simple, mock-data-driven content layer without live feeds.
- Next.js enables clean maintenance of separate pages for landing, experiences, projects, and education.

## Alternatives Considered

- Plain static HTML/CSS/JS: simpler, but harder to maintain across multiple pages and less convenient for reusable components and structured data.
- Client-side React SPA: would add unnecessary runtime complexity and potentially hurt SEO for a portfolio site.
- Static site generator without React: viable, but the user specifically requested Next.js.

## Final Choice

Implement with Next.js static export using an app structure based on `pages/` or the App Router, consuming mock content from local JSON files and generating a fully static `out/` site for deployment.
