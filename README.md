# Nezha Systems

The digital headquarters of Jin Chua: an editorial portfolio for enterprise software, AI systems, automation, and knowledge building.

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

## Project structure

```text
portfolio-website/
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
