import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services } from '@/lib/services-data';
import Button from '@/components/ui/Button';
import CTABanner from '@/components/home/CTABanner';
import JsonLd from '@/components/ui/JsonLd';
import { getServiceSchema, getBreadcrumbSchema } from '@/lib/schema';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.name,
    description: `${service.name} – ${service.shortDescription} Profesjonalne tynki maszynowe Baryza.`,
    alternates: { canonical: `/uslugi/${service.slug}` },
    openGraph: {
      title: `${service.name} – Tynki Maszynowe Baryza`,
      description: `${service.name} – ${service.shortDescription}`,
      url: `/uslugi/${service.slug}`,
      type: 'website',
      locale: 'pl_PL',
      siteName: 'Tynki Maszynowe Baryza',
      images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Tynki Maszynowe Baryza' }],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={[
          getServiceSchema(service),
          getBreadcrumbSchema([
            { name: 'Strona główna', url: '/' },
            { name: 'Usługi', url: '/uslugi' },
            { name: service.name, url: `/uslugi/${service.slug}` },
          ]),
        ]}
      />
      <section className="bg-primary pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            {service.name}
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            {service.shortDescription}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-text-light text-lg leading-relaxed mb-10">
            {service.fullDescription}
          </p>

          <h2 className="font-heading font-semibold text-2xl text-primary mb-6">
            Zalety {service.name.toLowerCase()}
          </h2>

          <ul className="space-y-4 mb-12">
            {service.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-accent mt-1 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-text-light leading-relaxed">{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="bg-bg-alt rounded-xl p-8 text-center">
            <h3 className="font-heading font-semibold text-xl text-primary mb-3">
              Zainteresowany? Skontaktuj się z nami!
            </h3>
            <p className="text-text-light mb-6">
              Wycena i dojazd gratis. Odpowiadamy w ciągu 24 godzin.
            </p>
            <Button href="/kontakt" variant="primary">
              Bezpłatna wycena
            </Button>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
