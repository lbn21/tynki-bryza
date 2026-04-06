# Claude Code Prompt: Build "Tynki Baryza" Professional Website

## PROJECT OVERVIEW

Build a professional, multi-page website for a Polish machine plastering business. The entire site must be in **Polish language**. The design should be **modern & minimalist** — clean, professional, and trust-building. This is a real business website, not a template demo.

**Business Information:**
- **Business name:** Firma Radosław Baryza — Tynki Maszynowe
- **Owner:** Radosław Baryza
- **Address:** Bytoń 64L, województwo kujawsko-pomorskie, Poland
- **Service area:** Województwo kujawsko-pomorskie and parts of województwo wielkopolskie
- **Experience:** 15 lat doświadczenia, 9 lat na rynku
- **Services offered:** Tynki gipsowe, tynki gipsowe twarde, tynki cementowo-wapienne, tynki hybrydowe, tynki gliniane, szpachlowanie z malowaniem
- **Tagline/USP:** "Nie najtańsi, ale jedni z najlepszych"
- **Perks:** Wycena i dojazd gratis. Dostęp do oględzin wcześniejszych realizacji po wcześniejszym umówieniu.
- **Target domain:** tynkibaryza.pl (for now, develop locally)

---

## TECH STACK (use exact versions)

- **Next.js 16.2.1** (latest stable as of April 2026) — App Router, TypeScript, Turbopack
- **Tailwind CSS 4.2.2** (latest stable) — CSS-first configuration with `@theme` directive, NO `tailwind.config.js`
- **React 19.2** (ships with Next.js 16)
- **TypeScript** — strict mode
- **Fonts:** Lato (body — designed by Polish typographer, native `latin-ext` support) + Montserrat (headings) via `next/font/google` with explicit `subsets: ['latin', 'latin-ext']`
- **Images:** Use `next/image` for all images with automatic WebP/AVIF optimization
- **Package manager:** npm

### Project Initialization
```bash
npx create-next-app@latest tynki-baryza --typescript --tailwind --eslint --app --turbopack
```

### Key Dependencies to Add
```bash
npm install framer-motion yet-another-react-lightbox
```

### Tailwind v4 Configuration (CSS-first — NO tailwind.config.js)
In `app/globals.css`:
```css
@import "tailwindcss";

@theme {
  --color-primary: #1E3A5F;
  --color-primary-light: #2A4F7F;
  --color-primary-dark: #152D4A;
  --color-secondary: #6B7B8D;
  --color-secondary-light: #8A9AAC;
  --color-accent: #E8702A;
  --color-accent-hover: #D4611F;
  --color-accent-light: #F5A66B;
  --color-bg: #F8F7F4;
  --color-bg-alt: #ECEEF0;
  --color-text: #2D2D2D;
  --color-text-light: #5A5A5A;
  --color-white: #FFFFFF;
  --font-sans: "Lato", ui-sans-serif, system-ui, sans-serif;
  --font-heading: "Montserrat", ui-sans-serif, system-ui, sans-serif;
}
```

### Font Setup in layout.tsx
```tsx
import { Lato, Montserrat } from 'next/font/google';

const lato = Lato({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['300', '400', '700'],
});

const montserrat = Montserrat({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['500', '600', '700', '800'],
});
```

---

## COLOR PALETTE

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| Primary | Navy Blue | `#1E3A5F` | Headers, navigation, logo accent, footer |
| Secondary | Steel Gray | `#6B7B8D` | Subheadings, borders, secondary text |
| Accent | Construction Orange | `#E8702A` | CTA buttons, phone numbers, highlights, hover states |
| Background | Warm White | `#F8F7F4` | Main page background |
| Alt Background | Mist Gray | `#ECEEF0` | Alternating sections, cards |
| Text | Dark Charcoal | `#2D2D2D` | Body copy (NEVER use pure black) |
| Text Light | Medium Gray | `#5A5A5A` | Secondary text, captions |

**Rules:**
- Navy for ≤30% of visual space
- Orange ONLY for CTAs, phone numbers, and key action highlights
- All text must meet WCAG AA contrast ratios (minimum 4.5:1)
- Never use pure white (#FFFFFF) as page background — use warm white (#F8F7F4)

---

## SITE ARCHITECTURE (Multi-page)

```
/                       → Strona Główna (Homepage)
/o-nas                  → O nas (About)
/uslugi                 → Usługi (Services overview)
/uslugi/tynki-gipsowe   → Tynki gipsowe (individual service page)
/uslugi/tynki-cementowo-wapienne → Tynki cementowo-wapienne
/uslugi/tynki-hybrydowe → Tynki hybrydowe
/uslugi/tynki-gliniane  → Tynki gliniane
/uslugi/szpachlowanie-z-malowaniem → Szpachlowanie z malowaniem
/realizacje             → Realizacje / Galeria (Gallery)
/kontakt                → Kontakt (Contact)
/polityka-prywatnosci   → Polityka prywatności (Privacy Policy)
/polityka-cookies       → Polityka cookies (Cookie Policy)
```

---

## PAGE-BY-PAGE SPECIFICATIONS

### 1. LAYOUT (applies to all pages)

#### Header / Navigation
- **Sticky header** that becomes slightly opaque/blurred on scroll (`backdrop-blur`)
- Logo on the left: text-based logo "BARYZA" in Montserrat Bold + subtitle "Tynki Maszynowe" in lighter weight
- Navigation links (center or right): O nas, Usługi (with dropdown for sub-services), Realizacje, Kontakt
- **Phone number prominently visible** on desktop: clickable tel: link with phone icon, styled in accent orange
- "Darmowa wycena" CTA button in accent orange on the far right
- Mobile: hamburger menu with smooth slide-in animation
- Mobile: sticky bottom bar with click-to-call button

#### Footer
- Dark navy blue background (#1E3A5F)
- White/light text
- Three columns:
  - Column 1: Logo + short company description + NIP number
  - Column 2: Navigation links (same as header nav)
  - Column 3: Contact info (address, phone, email) + service area mention
- Bottom bar: "© 2026 Firma Radosław Baryza. Wszelkie prawa zastrzeżone." + links to Polityka prywatności, Polityka cookies
- Business identification data required by Polish law (Art. 5 ustawy o świadczeniu usług drogą elektroniczną): full name, business name, address, email, NIP

---

### 2. STRONA GŁÓWNA (Homepage) — `/`

**Section flow (top to bottom):**

#### Hero Section
- Full-width background: use one of the provided plastering photos with a dark gradient overlay (40-60% opacity) for text readability
- Main headline (H1): **"Profesjonalne Tynki Maszynowe"** — large, bold Montserrat
- Subheadline: **"15 lat doświadczenia w kujawsko-pomorskim i wielkopolskim. Wycena i dojazd gratis."**
- Two CTA buttons:
  - Primary (orange): "Bezpłatna wycena" → links to /kontakt
  - Secondary (outlined white): "Nasze realizacje" → links to /realizacje
- Trust badge: "Ponad 15 lat doświadczenia" with a small icon

#### Services Overview (Nasze Usługi)
- Section heading: "Nasze Usługi"
- 4-5 cards in a responsive grid (1 col mobile, 2 tablet, 4 desktop)
- Each card: icon (use Lucide React icons or simple SVG), service name, 1-2 sentence description, "Dowiedz się więcej →" link
- Services: Tynki gipsowe, Tynki gipsowe twarde, Tynki cementowo-wapienne, Tynki hybrydowe, Tynki gliniane, Szpachlowanie z malowaniem
- Subtle hover animation on cards (slight lift/shadow)

#### Why Choose Us (Dlaczego my?)
- Alternating background (use --color-bg-alt)
- 3-4 key selling points with icons and numbers:
  - "15+" → "Lat doświadczenia"
  - "9" → "Lat na rynku"
  - "Gratis" → "Wycena i dojazd"
  - Consider an animated counter on scroll
- Short paragraph about quality commitment

#### Gallery Preview (Realizacje)
- Section heading: "Nasze Realizacje"
- Show 6-8 best images in a uniform grid (3 cols desktop, 2 tablet, 1 mobile)
- "Zobacz więcej realizacji →" CTA button linking to /realizacje

#### CTA Banner
- Full-width accent-colored or navy banner
- Text: "Potrzebujesz profesjonalnych tynków? Skontaktuj się z nami!"
- "Zadzwoń teraz" button + "Wyślij zapytanie" button
- Phone number displayed large

---

### 3. O NAS (About) — `/o-nas`

- Hero with smaller image header
- Company story — who is Radosław Baryza, experience, approach to work
- "Nie najtańsi, ale jedni z najlepszych" — highlight this as a philosophy
- Service area description with mention of kujawsko-pomorskie and wielkopolskie
- Mention: "Dostęp do oględzin wcześniejszych realizacji po wcześniejszym umówieniu"
- Use placeholder text that sounds natural — owner can replace later
- Consider a photo of equipment or work in progress

---

### 4. USŁUGI (Services) — `/uslugi`

#### Parent Page `/uslugi`
- Overview of all services with cards linking to individual service pages
- Each card has an image, service name, brief description

#### Individual Service Pages (e.g., `/uslugi/tynki-gipsowe`)
- Detailed description of the specific type of plaster
- Benefits/advantages
- Photo(s) showing this type of work
- CTA to contact for a quote
- Use realistic placeholder content about each plaster type (gipsowe, cementowo-wapienne, hybrydowe, gliniane)

---

### 5. REALIZACJE (Gallery) — `/realizacje`

- Page heading: "Nasze Realizacje"
- Subheading: "Galeria wykonanych prac"
- **Uniform grid layout** (NOT masonry):
  - 4 columns desktop, 3 tablet, 2 mobile
  - Consistent aspect ratio: 4:3 or 3:2
  - Gap: 8-12px
- **Lightbox:** clicking any image opens a fullscreen lightbox overlay (use `yet-another-react-lightbox`)
- All 32 provided images should be included in the gallery
- Images are STATIC for now — stored in `/public/gallery/` directory
  - Copy all provided JPEG files and rename them to sequential names: `realizacja-01.jpg` through `realizacja-32.jpg`
- Each image should use `next/image` with proper `width`, `height`, `alt` text (Polish alt text describing the plastering work), and `placeholder="blur"` where possible
- Optional: simple category filter at top (Tynki gipsowe / Tynki cementowo-wapienne / Wszystkie) — can be a nice-to-have

---

### 6. KONTAKT (Contact) — `/kontakt`

**Two-column layout on desktop, stacked on mobile:**

#### Left column: Contact Form
Fields (single-column form layout, labels ABOVE fields — never as placeholders):
1. **Imię i nazwisko** (required) — text input
2. **Telefon** (required) — tel input with Polish format hint
3. **Email** (required) — email input
4. **Rodzaj usługi** (optional) — select dropdown:
   - Tynki gipsowe
   - Tynki gipsowe twarde
   - Tynki cementowo-wapienne
   - Tynki hybrydowe
   - Tynki gliniane
   - Szpachlowanie z malowaniem
   - Inne
5. **Przybliżony metraż (m²)** (optional) — number input
6. **Wiadomość** (optional) — textarea
7. **RODO consent checkbox** (required, NEVER pre-checked):
   "Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z Polityką prywatności w celu udzielenia odpowiedzi na zapytanie."
8. Submit button: **"Wyślij zapytanie"** in accent orange

- For now the form does NOT need backend functionality — just client-side validation and a success message on submit
- Add a note: "Odpowiadamy w ciągu 24 godzin"
- Minimum tap targets: 48px on mobile
- All form inputs: 16px font minimum (prevents iOS auto-zoom)

#### Right column: Contact Info
- **Phone number** (large, prominent, clickable): with phone icon
- **Email address**: with email icon
- **Business address**: Bytoń 64L, woj. kujawsko-pomorskie
- **Working hours**: placeholder (e.g., "Pon-Pt: 7:00-17:00, Sob: 8:00-13:00")
- **Service area**: "Obsługujemy teren województwa kujawsko-pomorskiego oraz części województwa wielkopolskiego"
- Optional: embedded Google Maps iframe showing Bytoń area (if easy, otherwise skip)

---

### 7. POLITYKA PRYWATNOŚCI — `/polityka-prywatnosci`

Generate a proper Polish privacy policy page (Polityka prywatności) that includes:
- Name and contact of the data administrator (Radosław Baryza, Bytoń 64L)
- Purpose of data processing (contact form responses, analytics)
- Legal basis (Art. 6 ust. 1 lit. a and f RODO)
- Data retention periods
- User rights (access, rectification, deletion, portability, complaint to UODO)
- Information about cookies (link to cookie policy)
- Use realistic, professional Polish legal language
- Mark clearly with `{PLACEHOLDER}` anything the business owner needs to verify/customize (like exact NIP, email address)

---

### 8. POLITYKA COOKIES — `/polityka-cookies`

Generate a Polish cookie policy page that includes:
- What cookies are and what they do
- Types of cookies used: Niezbędne (necessary), Statystyczne (statistical), Marketingowe (marketing)
- How to manage/delete cookies in browsers
- Mark `{PLACEHOLDER}` for any analytics tools the owner will use

---

## COOKIE CONSENT BANNER

- Appears on first visit at the bottom of the screen
- Must use **opt-in model** (no non-essential cookies loaded before consent)
- Three toggle options: Niezbędne (always on, grayed out), Statystyczne, Marketingowe
- Two buttons: "Akceptuj wszystkie" (accent orange) and "Tylko niezbędne" (outlined)
- Link to "Polityka cookies"
- Store consent in localStorage
- Must allow users to change preferences later (small "Ustawienia cookies" link in the footer)

---

## DESIGN REQUIREMENTS

### Typography
- **Headings (H1-H4):** Montserrat, weights 600-800
- **Body text:** Lato, weight 400 (regular), 700 (bold)
- **Font sizes:** responsive, using Tailwind's `text-` utilities
  - H1: `text-4xl md:text-5xl lg:text-6xl`
  - H2: `text-3xl md:text-4xl`
  - H3: `text-xl md:text-2xl`
  - Body: `text-base` (16px minimum)
- **Line height:** generous for readability (1.6-1.8 for body)

### Spacing & Layout
- Consistent section padding: `py-16 md:py-24`
- Max content width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Clean, generous whitespace — this is a minimalist design

### Animations (using Framer Motion)
- Subtle fade-in-up on scroll for sections
- Smooth page transitions
- Hover effects on cards and buttons (scale, shadow)
- Counter animation for the stats section
- Keep animations tasteful and professional — NOT flashy

### Mobile-First
- Design mobile-first, enhance for larger screens
- Sticky click-to-call button on mobile (bottom of screen, always visible)
- Hamburger menu with smooth animation
- All tap targets minimum 48px
- All form inputs minimum 16px font size

### Images
- All gallery images go in `/public/gallery/`
- Use `next/image` component for everything
- Set `sizes` attribute properly for responsive behavior
- Use `priority` for above-the-fold hero image
- Set reasonable `quality` (75-85)
- All images need descriptive Polish `alt` text

---

## SEO & META

### Root layout metadata
```tsx
export const metadata: Metadata = {
  title: {
    default: 'Tynki Maszynowe Baryza – Profesjonalne Tynkowanie | Kujawsko-Pomorskie',
    template: '%s | Tynki Maszynowe Baryza',
  },
  description: 'Profesjonalne tynki maszynowe – gipsowe, cementowo-wapienne, hybrydowe i gliniane. 15 lat doświadczenia. Wycena i dojazd gratis. Kujawsko-pomorskie i wielkopolskie.',
  keywords: ['tynki maszynowe', 'tynki gipsowe', 'tynki cementowo-wapienne', 'tynkowanie', 'kujawsko-pomorskie', 'wielkopolskie', 'Baryza'],
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    siteName: 'Tynki Maszynowe Baryza',
  },
};
```

### Per-page metadata
Each page should have unique `title` and `description` meta tags in Polish, relevant to the page content.

### JSON-LD Structured Data
Add `LocalBusiness` schema to the homepage:
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Firma Radosław Baryza – Tynki Maszynowe",
  "description": "Profesjonalne tynki maszynowe...",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Bytoń 64L",
    "addressRegion": "kujawsko-pomorskie",
    "addressCountry": "PL"
  },
  "areaServed": ["kujawsko-pomorskie", "wielkopolskie"],
  "priceRange": "$$",
  "openingHoursSpecification": "{PLACEHOLDER}"
}
```

---

## FILE STRUCTURE

```
tynki-baryza/
├── app/
│   ├── globals.css          (Tailwind v4 @theme config)
│   ├── layout.tsx           (root layout with fonts, metadata, header, footer, cookie banner)
│   ├── page.tsx             (homepage)
│   ├── o-nas/
│   │   └── page.tsx
│   ├── uslugi/
│   │   ├── page.tsx         (services overview)
│   │   ├── tynki-gipsowe/
│   │   │   └── page.tsx
│   │   ├── tynki-cementowo-wapienne/
│   │   │   └── page.tsx
│   │   ├── tynki-hybrydowe/
│   │   │   └── page.tsx
│   │   └── tynki-gliniane/
│   │       └── page.tsx
│   ├── realizacje/
│   │   └── page.tsx
│   ├── kontakt/
│   │   └── page.tsx
│   ├── polityka-prywatnosci/
│   │   └── page.tsx
│   └── polityka-cookies/
│       └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── MobileMenu.tsx
│   │   └── MobileCallButton.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── ServicesOverview.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── GalleryPreview.tsx
│   │   └── CTABanner.tsx
│   ├── gallery/
│   │   ├── GalleryGrid.tsx
│   │   └── GalleryLightbox.tsx
│   ├── contact/
│   │   ├── ContactForm.tsx
│   │   └── ContactInfo.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── Card.tsx
│   │   └── AnimatedCounter.tsx
│   └── CookieConsent.tsx
├── lib/
│   ├── gallery-data.ts      (array of gallery image objects with paths and alt text)
│   └── services-data.ts     (services content data)
├── public/
│   ├── gallery/             (all 32 renamed images)
│   ├── og-image.jpg         (Open Graph image — can be one of the gallery photos)
│   └── favicon.ico
├── package.json
├── tsconfig.json
└── next.config.ts
```

---

## IMPORTANT NOTES

1. **ALL text on the website must be in Polish.** Every button, label, placeholder, error message, alt text, aria-label — everything.

2. **Phone number and email are placeholders for now.** Use `{TELEFON}` and `{EMAIL}` as placeholders in the code with a comment that the owner needs to provide these. Use a realistic-looking format like `+48 XXX XXX XXX` for display.

3. **NIP number is a placeholder.** Use `{NIP}` with a comment.

4. **The form has NO backend yet.** On submit, show a success toast/message: "Dziękujemy! Twoje zapytanie zostało wysłane. Odpowiemy w ciągu 24 godzin." with `preventDefault()`.

5. **Gallery images are STATIC.** They are provided as 32 JPEG files. Copy them to `/public/gallery/` with clean names. Create a data file (`lib/gallery-data.ts`) listing all images with alt text. We will add dynamic image management later — do NOT build any CMS or upload system now.

6. **Do NOT install unnecessary dependencies.** Keep it lean. The only npm packages beyond the Next.js defaults should be `framer-motion` and `yet-another-react-lightbox`.

7. **Accessibility matters.** Proper semantic HTML, ARIA labels (in Polish), keyboard navigation, focus states, skip-to-content link.

8. **Performance:** Target 90+ on Lighthouse for all categories. Use `next/image`, lazy loading, proper `sizes` attributes, minimal JavaScript.

9. **RODO/GDPR compliance is legally required.** The cookie consent banner, privacy policy, and contact form consent checkbox are not optional — they are legal requirements under Polish law.

10. **Do NOT use any UI component library** (no shadcn/ui, no Material UI). Build all components from scratch with Tailwind. Keep it simple and custom.
