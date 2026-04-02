@AGENTS.md

# Project: Tynki Baryza

Professional plastering company website (Polish language). Built with Next.js 16, React 19, Tailwind CSS 4, Framer Motion.

## Business Information

- **Business name:** Firma Radoslaw Baryza -- Tynki Maszynowe
- **Owner:** Radoslaw Baryza
- **Address:** Byton 64L, wojewodztwo kujawsko-pomorskie, Poland
- **Service area:** Wojewodztwo kujawsko-pomorskie and parts of wojewodztwo wielkopolskie
- **Experience:** 15 lat doswiadczenia, 9 lat na rynku
- **Services:** Tynki gipsowe, tynki gipsowe twarde, tynki cementowo-wapienne, tynki hybrydowe, tynki gliniane
- **USP:** "Nie najtansi, ale jedni z najlepszych"
- **Perks:** Wycena i dojazd gratis. Dostep do ogledzen wczesniejszych realizacji po wczesniejszym umowieniu.
- **Target domain:** tynkibaryza.pl

## Tech Stack

- **Framework:** Next.js 16.2.2 (App Router, Turbopack)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 4 (CSS-first config with `@theme` directive, NO `tailwind.config.js`)
- **Animations:** Framer Motion
- **Images:** sharp for optimization, lazy-loaded lightbox (yet-another-react-lightbox)
- **Fonts:** Lato (body) + Montserrat (headings) via `next/font/google` with `subsets: ['latin', 'latin-ext']`
- **Package manager:** npm
- **No UI component libraries** -- all components built from scratch with Tailwind

## Commands

- `npm run dev` -- start dev server (localhost:3000)
- `npm run build` -- production build
- `npm run start` -- serve production build
- `npm run lint` -- run ESLint

## Color Palette

| Role | Hex | CSS Variable | Usage |
|------|-----|-------------|-------|
| Primary (Navy) | `#1E3A5F` | `--color-primary` | Headers, nav, footer (max 30% visual space) |
| Secondary (Steel Gray) | `#6B7B8D` | `--color-secondary` | Subheadings, borders, secondary text |
| Accent (Orange) | `#E8702A` | `--color-accent` | CTA buttons, phone numbers, highlights ONLY |
| Background (Warm White) | `#F8F7F4` | `--color-bg` | Main page background (never pure #FFFFFF) |
| Alt Background (Mist Gray) | `#ECEEF0` | `--color-bg-alt` | Alternating sections, cards |
| Text (Dark Charcoal) | `#2D2D2D` | `--color-text` | Body copy (never pure black) |
| Text Light | `#5A5A5A` | `--color-text-light` | Secondary text, captions |

## Site Architecture

```
/                                 -- Strona Glowna (Homepage)
/o-nas                            -- O nas (About)
/uslugi                           -- Uslugi (Services overview)
/uslugi/tynki-gipsowe             -- Tynki gipsowe
/uslugi/tynki-cementowo-wapienne  -- Tynki cementowo-wapienne
/uslugi/tynki-hybrydowe           -- Tynki hybrydowe
/uslugi/tynki-gliniane            -- Tynki gliniane
/realizacje                       -- Realizacje / Galeria (Gallery)
/kontakt                          -- Kontakt (Contact)
/polityka-prywatnosci             -- Polityka prywatnosci
/polityka-cookies                 -- Polityka cookies
```

## Project Structure

- `app/` -- Next.js App Router pages (all static/SSG)
- `components/` -- React components organized by section (home/, layout/, contact/, gallery/, ui/)
- `lib/` -- data files (services-data.ts, gallery-data.ts)
- `public/gallery/` -- 32 project photos with descriptive filenames

## Key Conventions

- All content is hardcoded in Polish (no i18n) -- every button, label, placeholder, error message, alt text, aria-label
- Polish characters must be actual UTF-8 (never `\uXXXX` escape sequences in JSX)
- All pages are statically generated at build time
- Gallery images stored locally in `public/gallery/` (planned migration to Cloudinary)
- Gallery data centralized in `lib/gallery-data.ts` -- all components reference this
- Lightbox is lazy-loaded to avoid unnecessary CSS preloading
- All text must meet WCAG AA contrast ratios (minimum 4.5:1)
- Mobile-first design: all tap targets min 48px, form inputs min 16px font
- Animations must be subtle and professional (fade-in-up on scroll, hover effects) -- not flashy
- Target 90+ Lighthouse scores for all categories

## Placeholders (owner must provide)

- `{TELEFON}` -- phone number (displayed as `+48 XXX XXX XXX`)
- `{EMAIL}` -- business email
- `{NIP}` -- NIP number for footer/legal
- Contact form has NO backend yet -- shows success message on submit with `preventDefault()`

## Design Rules

- **Typography:** Montserrat 600-800 for headings, Lato 400/700 for body
- **Spacing:** Section padding `py-16 md:py-24`, max-w-7xl container
- **Navy** for max 30% of visual space
- **Orange** ONLY for CTAs, phone numbers, and key action highlights
- **Never** pure white (#FFFFFF) as page background -- use warm white (#F8F7F4)
- **Never** pure black for text -- use dark charcoal (#2D2D2D)

## Legal Requirements (Polish law)

- RODO/GDPR: Cookie consent banner (opt-in model), privacy policy, contact form consent checkbox (never pre-checked)
- Business identification (Art. 5 ustawy o swiadczeniu uslug droga elektroniczna): full name, business name, address, email, NIP in footer
- Cookie policy with categories: Niezbedne (always on), Statystyczne, Marketingowe
- Consent stored in localStorage, changeable via "Ustawienia cookies" footer link

## SEO

- JSON-LD LocalBusiness schema on homepage
- Each page has unique title and description meta tags in Polish
- Open Graph metadata with locale pl_PL
