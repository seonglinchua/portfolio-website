# Nezha Systems

Nezha Systems is Jin Chua’s digital headquarters: an editorial portfolio for enterprise software, AI systems, automation, and reusable knowledge.

**Live site:** [seonglinchua.github.io/portfolio-website](https://seonglinchua.github.io/portfolio-website/)

## Project objective

Help potential clients, collaborators, and peers understand what Jin builds, how he thinks, and the value his work creates. The website should make it easy to explore credible examples, learn from shared experience, and start a conversation.

The work is organized around four pillars:

- **Build:** practical software, AI systems, and automation.
- **Knowledge:** guides, architecture notes, and lessons from real work.
- **Design:** clear interfaces and consistent, reusable patterns.
- **Lab:** experiments that explore future tools and workflows.

This README is the repository’s entry point for contributors and maintainers. It explains how to run, update, validate, and deploy the website, along with its current direction.

## Technology and design

Built with React and Vite. The visual direction is light, editorial, and flat, using Newsreader for display typography and DM Sans for body and interface text. Preserve accessibility, keyboard focus, reduced-motion support, dark theme, and mobile navigation when making changes.

## Start locally

```bash
npm install
npm run dev
```

Vite will print the local development URL in the terminal.

## Validate a production build

```bash
npm run build
npm run test:sites
```

## Deployment

The site is hosted with GitHub Pages. Every push to `main` triggers the deployment workflow in `.github/workflows/deploy-pages.yml`.

The workflow builds with `VITE_BASE_PATH=/portfolio-website/` and publishes `dist/client`. Local development uses `/` by default. Use `import.meta.env.BASE_URL` for public asset paths so images work in both environments.

## Project structure

```text
portfolio-website/
├── .github/workflows/      GitHub Pages deployment
├── public/                 Static images and downloadable files
├── src/
│   ├── app/                Application composition and global state
│   ├── components/         Reusable interface components
│   ├── data/               Structured site content
│   ├── sections/           Homepage sections
│   └── styles/             Design tokens and global styles
├── docs/reviews/           UX reviews and screenshot evidence
├── scripts/audit/          Browser capture utilities
├── tests/                  Hosting compatibility tests
├── worker/                 Static hosting worker
└── AGENTS.md               Durable design and implementation rules
```

## Content updates

- Edit homepage content in `src/data/siteContent.js` or the relevant file under `src/sections/`.
- Add production images under `public/images/`.
- Keep reusable design values in `src/styles/tokens.css`.
- Follow the visual and accessibility conventions in `AGENTS.md`.

## Roadmap

### Completed

- [x] Editorial homepage with Build, Knowledge, Design, Lab, About, and Contact navigation.
- [x] Responsive layout, mobile navigation, and light/dark themes.
- [x] Public GitHub repository and automated GitHub Pages deployment.
- [x] Production build and hosting compatibility tests.

### Next priorities

- [ ] Turn selected-work previews into detailed, linked project case studies.
- [ ] Publish full Knowledge articles and connect their homepage previews.
- [ ] Verify public links and assets; review accessibility and mobile behavior on the live site.
- [ ] Refine search metadata and social-sharing previews.

### Future options

These are candidates for later work, not scheduled commitments.

- [ ] Add automated browser tests for navigation, theme switching, and image loading.
- [ ] Configure a custom domain and privacy-conscious analytics.
- [ ] Expand into dedicated project, article, and Lab pages as content grows.
