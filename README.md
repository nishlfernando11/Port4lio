# Port4lio - Professional Portfolio Website

A modern, sleek, and tech-focused professional portfolio website built with Next.js and static export.

## Overview

Port4lio is a fully static professional portfolio website that showcases:

- 📄 Professional summary, skills, interests, and achievements
- 💼 Work experience and professional history
- 🚀 Featured projects and portfolio work
- 📚 Academic education and professional certifications
- 🔗 GitHub profile and open-source contributions

Built with Next.js for clean routing and responsive design, the site exports as pure static HTML/CSS/JavaScript for deployment anywhere.

## Features

- ✨ **Responsive Design**: Mobile-first, fully responsive across all devices (320px - 1920px+)
- 🎨 **Modern UI**: Sleek dark theme with tech-focused color scheme
- ⚡ **Fast Performance**: Static export for instant load times
- ♿ **Accessible**: Semantic HTML, ARIA labels, keyboard navigation support
- 🔍 **SEO Ready**: Proper meta tags and page structure
- 📦 **Zero Runtime**: No backend dependencies or external APIs
- 🎯 **Mock Data**: All content from local JSON files

## Project Structure

```
port4lio/
├── components/          # Reusable React components
│   ├── Layout.js
│   ├── NavBar.js
│   ├── SectionHeader.js
│   ├── HeroSection.js
│   ├── SkillsSection.js
│   ├── InterestsSection.js
│   ├── AchievementsSection.js
│   ├── ExperienceItem.js
│   ├── ProjectCard.js
│   ├── GitHubSection.js
│   └── EducationItem.js
├── pages/               # Next.js pages (one per route)
│   ├── index.js        # Landing/Home page
│   ├── experiences.js  # Experience page
│   ├── projects.js     # Projects page
│   └── education.js    # Education page
├── styles/             # CSS Modules
│   ├── globals.css
│   └── *.module.css
├── data/               # Mock content data (JSON)
│   ├── landing.json
│   ├── experience.json
│   ├── projects.json
│   ├── education.json
│   └── github.json
├── public/             # Static assets
│   └── assets/
├── next.config.js      # Next.js configuration for static export
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
cd port4lio
```

2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

**Pages**:

- Home: [http://localhost:3000/](http://localhost:3000/)
- Experience: [http://localhost:3000/experiences](http://localhost:3000/experiences)
- Projects: [http://localhost:3000/projects](http://localhost:3000/projects)
- Education: [http://localhost:3000/education](http://localhost:3000/education)

### Build

Build the project for production:

```bash
npm run build
```

This generates an optimized build and exports as static HTML.

### Export (Static)

Export as a fully static site:

```bash
npm run build && npm run export
```

The static site files are generated in the `out/` directory.

## Deployment

### GitHub Pages

1. Push to your GitHub repository
2. Enable GitHub Pages in Settings → Pages
3. Select `gh-pages` branch or configure deployment from `out/` folder

### Vercel

1. Connect your GitHub repository to Vercel
2. Vercel automatically detects Next.js and builds correctly
3. Deploy and get a live URL instantly

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build && npm run export`
3. Set publish directory: `out`
4. Deploy

### Other Static Hosts

1. Run `npm run build && npm run export`
2. Upload the `out/` directory to your static host
3. Configure your domain/DNS

## Content Management

All content is stored in JSON files in the `data/` directory:

- **`landing.json`**: Home page content (headline, summary, skills, interests, achievements)
- **`experience.json`**: Work experience entries
- **`projects.json`**: Portfolio projects
- **`education.json`**: Education history and certifications
- **`github.json`**: GitHub profile and featured repositories

To update content, simply edit the JSON files and rebuild:

```bash
npm run build
```

## Customization

### Styling

All styles are in the `styles/` directory using CSS Modules:

- `globals.css`: Global and responsive utilities
- `*.module.css`: Component-specific styles

Modify colors, fonts, spacing, and layouts as needed.

### Data

Edit the JSON files in `data/` to customize content for your portfolio.

### Components

Add or modify React components in the `components/` directory as needed.

## Performance

The site is optimized for performance:

- **Lighthouse Audits**: Target 90+ performance, 90+ accessibility
- **Page Load**: <1s initial load on typical networks
- **Bundle Size**: Minimal, optimized for static export
- **Caching**: Browser caching enabled for assets

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Semantic HTML structure
- ARIA labels and descriptions
- Sufficient color contrast

## License

This project is open source and available under the MIT License.

## Support

For issues, questions, or suggestions, please open an issue on GitHub or contact the repository maintainer.

---

Built with ❤️ using Next.js and React
