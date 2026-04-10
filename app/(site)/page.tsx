import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import ServicesOverview from '@/components/home/ServicesOverview';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import GalleryPreview from '@/components/home/GalleryPreview';
import CTABanner from '@/components/home/CTABanner';
import JsonLd from '@/components/ui/JsonLd';
import { getLocalBusinessSchema, getWebSiteSchema } from '@/lib/schema';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Tynki Maszynowe Baryza – Profesjonalne Tynkowanie | Kujawsko-Pomorskie',
    description:
      'Profesjonalne tynki maszynowe – gipsowe, cementowo-wapienne, hybrydowe i gliniane. 15 lat doświadczenia. Wycena i dojazd gratis.',
    url: '/',
    type: 'website',
    locale: 'pl_PL',
    siteName: 'Tynki Maszynowe Baryza',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Tynki Maszynowe Baryza' }],
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={[getLocalBusinessSchema(), getWebSiteSchema()]} />
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <GalleryPreview />
      <CTABanner />
    </>
  );
}
