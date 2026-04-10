import type { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/lib/services-data';
import CTABanner from '@/components/home/CTABanner';
import JsonLd from '@/components/ui/JsonLd';
import { getServicesItemListSchema, getBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Usługi tynkarskie',
  description:
    'Profesjonalne tynki maszynowe – gipsowe, cementowo-wapienne, hybrydowe i gliniane. Szpachlowanie z malowaniem. Sprawdź naszą pełną ofertę usług tynkarskich.',
  alternates: { canonical: '/uslugi' },
  openGraph: {
    title: 'Usługi tynkarskie – Tynki Maszynowe Baryza',
    description:
      'Profesjonalne tynki maszynowe – gipsowe, cementowo-wapienne, hybrydowe i gliniane. Szpachlowanie z malowaniem.',
    url: '/uslugi',
    type: 'website',
    locale: 'pl_PL',
    siteName: 'Tynki Maszynowe Baryza',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Tynki Maszynowe Baryza' }],
  },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          getServicesItemListSchema(services),
          getBreadcrumbSchema([
            { name: 'Strona główna', url: '/' },
            { name: 'Usługi', url: '/uslugi' },
          ]),
        ]}
      />
      <section className="bg-primary pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            Nasze Usługi
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Oferujemy szeroki zakres profesjonalnych tynków maszynowych
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/uslugi/${service.slug}`}
                className="group block bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h2 className="font-heading font-semibold text-2xl text-primary mb-3 group-hover:text-accent transition-colors">
                  {service.name}
                </h2>
                <p className="text-text-light leading-relaxed mb-4">
                  {service.shortDescription}
                </p>
                <span className="text-accent font-semibold group-hover:translate-x-1 inline-block transition-transform">
                  Dowiedz się więcej →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
