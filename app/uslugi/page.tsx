import type { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/lib/services-data';
import CTABanner from '@/components/home/CTABanner';

export const metadata: Metadata = {
  title: 'Us\u0142ugi',
  description:
    'Profesjonalne tynki maszynowe \u2013 gipsowe, cementowo-wapienne, hybrydowe i gliniane. Sprawd\u017a nasz\u0105 pe\u0142n\u0105 ofert\u0119 us\u0142ug tynkarskich.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-primary pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            Nasze Us\u0142ugi
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Oferujemy szeroki zakres profesjonalnych tynk\u00f3w maszynowych
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
                  Dowiedz si\u0119 wi\u0119cej \u2192
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
