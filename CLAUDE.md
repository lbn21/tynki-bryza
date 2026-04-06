@AGENTS.md

# Project: Tynki Baryza

Professional plastering company website (Polish language). Built with Next.js 16, React 19, Tailwind CSS 4, Framer Motion.

## Business Information

- **Business name:** Firma Radoslaw Baryza -- Tynki Maszynowe
- **Owner:** Radoslaw Baryza
- **Address:** Byton 64L, wojewodztwo kujawsko-pomorskie, Poland
- **Service area:** Wojewodztwo kujawsko-pomorskie and parts of wojewodztwo wielkopolskie
- **Experience:** 15 lat doswiadczenia, 9 lat na rynku
- **Services:** Tynki gipsowe, tynki gipsowe twarde, tynki cementowo-wapienne, tynki hybrydowe, tynki gliniane, szpachlowanie z malowaniem
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

## Deployment

- **Hosting:** Vercel (connected to GitHub repo)
- **Deploy method:** Push/merge to `main` branch triggers automatic production deployment -- do NOT use `vercel --prod` CLI
- **Analytics:** Vercel Web Analytics enabled via `@vercel/analytics`

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
/uslugi/szpachlowanie-z-malowaniem -- Szpachlowanie z malowaniem
/realizacje                       -- Realizacje / Galeria (Gallery)
/kontakt                          -- Kontakt (Contact)
/polityka-prywatnosci             -- Polityka prywatnosci
/polityka-cookies                 -- Polityka cookies
```

## Project Structure

- `app/` -- Next.js App Router pages (static/SSG) + API routes (`app/api/contact/`)
- `components/` -- React components organized by section (home/, layout/, contact/, gallery/, ui/)
- `lib/` -- data files (services-data.ts, gallery-data.ts, site-config.ts, contact.ts)
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

## Contact Data (centralized in `lib/site-config.ts`)

All business contact info lives in `lib/site-config.ts` and is imported wherever needed:
- **Phone:** +48 531 138 825
- **Email:** perfect.plast.baryza@tlen.pl
- **NIP:** 8911609342

To change contact data, edit `lib/site-config.ts` — all components pull from there.
Note: legal pages (polityka-prywatnosci, polityka-cookies) and branding page have values inlined as static text.

## Contact Form Backend

- **API route:** `app/api/contact/route.ts`
- **Email service:** Resend (`onboarding@resend.dev` sender for testing, custom domain for production)
- **Rate limiting:** Upstash Redis via `@upstash/ratelimit` -- 1 request per 15 min per IP (sliding window)
- **Bot protection:** 3 layers -- honeypot hidden field, time-based check (< 3s = reject), rate limiting
- **Shared validation:** `lib/contact.ts` -- types + validation used by both client and server
- **Env vars required:** `RESEND_API_KEY`, `KV_REST_API_URL`, `KV_REST_API_TOKEN`, `CONTACT_EMAIL_TO`
- **Testing target:** `lobin21@gmail.com` (set via `CONTACT_EMAIL_TO`)
- **Production target:** `perfect.plast.baryza@tlen.pl` (change env var + verify domain in Resend)

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
- `app/robots.ts` -- dynamic robots.txt (allows all crawlers, blocks /branding)
- `app/sitemap.ts` -- dynamic sitemap.xml with all public pages + service subpages
- Crawlers are ALLOWED -- site is production-ready for indexing
