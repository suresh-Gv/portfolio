# Suresh  — Portfolio

A modern, premium, fully responsive personal portfolio website for **Suresh**, Senior Software Engineer.

## Tech Stack

- **React.js** (Vite)
- **TypeScript**
- **Material UI (MUI)**
- **Framer Motion**
- **React Icons**

## Features

- Modern SaaS-style design with light/dark mode
- Sticky navigation with smooth scrolling
- Scroll reveal animations and animated counters
- Loading screen
- Fully responsive (Desktop, Tablet, Mobile)
- SEO-friendly meta tags
- 11 portfolio sections

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── common/       # Reusable UI components
│   ├── layout/       # Navbar, Footer, BackToTop
│   └── sections/     # Portfolio sections
├── context/          # Theme context
├── data/             # Portfolio content data
├── hooks/            # Custom React hooks
├── theme/            # MUI theme configuration
├── types/            # TypeScript interfaces
└── utils/            # Utility functions
```

## Deployment

### GitHub Pages

1. Update `base` in `vite.config.ts` if needed
2. Run `npm run build`
3. Deploy the `dist` folder to GitHub Pages

```bash
npm run build
npx gh-pages -d dist
```

## Customization

- Update content in `src/data/portfolioData.ts`
- Replace `public/resume.pdf` with your actual resume
- Update social links and contact information

## License

MIT
