# Data Model: Professional Portfolio Website

## Content Data Files

The site uses local JSON files to store all mock content. Each page imports its content from a corresponding JSON file.

- `data/landing.json`
- `data/experience.json`
- `data/projects.json`
- `data/education.json`
- `data/github.json`

## Entities

### Landing Page Content

- `headline`: string
- `summary`: string
- `skills`: string[]
- `interests`: string[]
- `achievements`: { title: string; description: string }[]
- `callToAction`: { label: string; href: string }

### Experience Entry

Each experience entry includes:

- `title`: string
- `company`: string
- `location`: string
- `dates`: string
- `summary`: string
- `highlights`: string[]

### Project Card

Each project card includes:

- `name`: string
- `description`: string
- `technologies`: string[]
- `url`: string (project demo or details)
- `repo`: string (GitHub repository link)

### Education Entry

Each education entry includes:

- `degree`: string
- `institution`: string
- `dates`: string
- `location`: string
- `details`: string[]

### GitHub Section

- `profileUrl`: string
- `description`: string
- `keyRepos`: { name: string; description: string; url: string }[]

## Page Relationships

- `pages/index.js` renders `landing.json` and may also reference shared site metadata.
- `pages/experiences.js` renders the list from `experience.json`.
- `pages/projects.js` renders `projects.json` and the GitHub callout from `github.json`.
- `pages/education.js` renders `education.json`.

## Render Strategy

Content is imported at build time and rendered as static markup. No external API calls or runtime content loading are required. This supports a fully-exported static site while preserving maintainable content structure.
