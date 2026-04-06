import type { Metadata } from 'next';
import { Lato, Montserrat } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { siteConfig } from '@/lib/site-config';

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

export const metadata: Metadata = {
  title: {
    default: 'Tynki Maszynowe Baryza – Profesjonalne Tynkowanie | Kujawsko-Pomorskie',
    template: '%s | Tynki Maszynowe Baryza',
  },
  description:
    'Profesjonalne tynki maszynowe – gipsowe, cementowo-wapienne, hybrydowe i gliniane. 15 lat doświadczenia. Wycena i dojazd gratis. Kujawsko-pomorskie i wielkopolskie.',
  keywords: [
    'tynki maszynowe',
    'tynki gipsowe',
    'tynki cementowo-wapienne',
    'tynkowanie',
    'kujawsko-pomorskie',
    'wielkopolskie',
    'szpachlowanie',
    'malowanie',
    'Baryza',
  ],
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    siteName: 'Tynki Maszynowe Baryza',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" data-scroll-behavior="smooth" className={`${lato.variable} ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Firma Radosław Baryza – Tynki Maszynowe',
              description:
                'Profesjonalne tynki maszynowe – gipsowe, cementowo-wapienne, hybrydowe i gliniane. 15 lat doświadczenia.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: siteConfig.address.street,
                addressLocality: 'Bytoń',
                postalCode: siteConfig.address.postalCode,
                addressRegion: 'kujawsko-pomorskie',
                addressCountry: 'PL',
              },
              telephone: siteConfig.phone.raw,
              email: siteConfig.email,
              areaServed: ['kujawsko-pomorskie', 'wielkopolskie'],
              priceRange: '$$',
              // {PLACEHOLDER} - uzupełnić godziny otwarcia
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '07:00',
                closes: '17:00',
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
