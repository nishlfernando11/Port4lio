# Port4lio Constitution

## Core Principles

### I. Simplicity First

Static HTML, CSS, and JavaScript only. No frameworks, build tools, or runtime dependencies. Every line of code must have a clear purpose and be understandable without external context.

### II. Performance Essential

Fast load times and minimal resources. Optimize images, minimize CSS/JS, leverage browser caching. Target: Initial load < 1s on typical networks, Lighthouse scores ≥ 90.

### III. Accessibility Required

WCAG 2.1 AA compliance minimum. Semantic HTML, proper ARIA labels, keyboard navigation, sufficient color contrast. All features must be usable without JavaScript.

### IV. Progressive Enhancement

Core content and functionality work in all browsers. Enhance with JavaScript only where it adds value, not convenience.

## Technology Stack

- **Languages**: HTML5, CSS3, vanilla JavaScript (ES6+)
- **Deployment**: Static hosting (GitHub Pages, Netlify, or similar)
- **Build**: Simple file structure only—no build tools required
- **Testing**: Browser testing, no automated test suite required
- **Version Control**: Git with meaningful commit messages

## Quality Standards

- Valid HTML and CSS (w3c validators)
- No console errors in production
- Mobile responsive (tested at 320px, 768px, 1920px widths)
- All assets optimized (images < 100KB each unless necessary)
- No external analytics or tracking

## Governance

Constitution supersedes all other practices. Changes must be documented and approved before implementation. All development decisions must be justified against these principles.

**Version**: 1.0.0 | **Ratified**: 2026-06-11 | **Last Amended**: 2026-06-11
