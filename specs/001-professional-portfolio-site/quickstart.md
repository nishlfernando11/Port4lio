# Quickstart: Professional Portfolio Website

## Prerequisites

- Node.js 18+ installed
- npm or yarn available
- Repository checked out locally

## Setup

1. Navigate to the repository root:
   ```bash
   cd /Users/nishani/Documents/Ventures/port4lio
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Development

Run the Next.js development server:

```bash
npm run dev
```

Then open `http://localhost:3000` in your browser.

## Build and Static Export

Build the site and export it as a static app:

```bash
npm run build
npm run export
```

The static output will be generated in the `out/` directory.

## Validation

- Open `http://localhost:3000` in the browser during development.
- Confirm the landing page shows the professional summary, skills, interests, and achievement highlights.
- Confirm the Experiences, Projects, and Education pages are accessible from the navigation.
- Confirm the Projects page includes a GitHub section below the project cards.
- Confirm the generated `out/` directory contains static HTML files.

## Expected Outcomes

- The site serves as a static portfolio with four pages.
- Content is sourced from JSON files only.
- The site is responsive on mobile viewports and presents a modern tech-focused visual style.
