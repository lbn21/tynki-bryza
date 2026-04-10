import type { Metadata } from 'next';
import { Lato, Montserrat } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

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
  metadataBase: new URL('https://tynkibaryza.pl'),
  title: {
    default: 'Tynki Maszynowe Baryza – Profesjonalne Tynkowanie – Kujawsko-Pomorskie',
    template: '%s – Tynki Maszynowe Baryza',
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
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Tynki Maszynowe Baryza – Profesjonalne Tynkowanie',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tynki Maszynowe Baryza – Profesjonalne Tynkowanie',
    description:
      'Profesjonalne tynki maszynowe – gipsowe, cementowo-wapienne, hybrydowe i gliniane. 15 lat doświadczenia.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" data-scroll-behavior="smooth" className={`${lato.variable} ${montserrat.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
