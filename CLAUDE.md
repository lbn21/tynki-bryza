@AGENTS.md

# Project: Tynki Baryza

Professional plastering company website (Polish language). Built with Next.js 16, React 19, Tailwind CSS 4, Framer Motion.

## Tech Stack

- **Framework:** Next.js 16.2.2 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4 (via `@tailwindcss/postcss`)
- **Animations:** Framer Motion
- **Images:** sharp for optimization, lazy-loaded lightbox (yet-another-react-lightbox)
- **Package manager:** npm

## Commands

- `npm run dev` — start dev server (localhost:3000)
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — run ESLint

## Project Structure

- `app/` — Next.js App Router pages (all static/SSG)
- `components/` — React components organized by section (home/, layout/, contact/, gallery/, ui/)
- `lib/` — data files (services-data.ts, gallery-data.ts)
- `public/gallery/` — 32 project photos with descriptive filenames

## Key Conventions

- All content is hardcoded in Polish (no i18n)
- Gallery images are stored locally in `public/gallery/` (planned migration to Cloudinary)
- Gallery data is centralized in `lib/gallery-data.ts` — all components reference this
- Lightbox is lazy-loaded to avoid unnecessary CSS preloading
- Polish characters must be actual UTF-8 (never `\uXXXX` escape sequences in JSX)
- All pages are statically generated at build time
