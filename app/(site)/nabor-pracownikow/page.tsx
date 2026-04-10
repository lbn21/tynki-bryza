import type { Metadata } from 'next';
import Button from '@/components/ui/Button';
import { siteConfig } from '@/lib/site-config';
import JsonLd from '@/components/ui/JsonLd';
import { getJobPostingSchema, getBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Nabór pracowników',
  description:
    'Poszukujemy doświadczonych tynkarzy maszynowych. Praca na markowym sprzęcie, dojazd i samochód firmowy. Dołącz do zespołu Baryza.',
  alternates: { canonical: '/nabor-pracownikow' },
  openGraph: {
    title: 'Nabór pracowników – Tynki Maszynowe Baryza',
    description:
      'Poszukujemy doświadczonych tynkarzy maszynowych. Praca na markowym sprzęcie, dojazd i samochód firmowy.',
    url: '/nabor-pracownikow',
    type: 'website',
    locale: 'pl_PL',
    siteName: 'Tynki Maszynowe Baryza',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Tynki Maszynowe Baryza' }],
  },
};

export default function RecruitmentPage() {
  return (
    <>
      <JsonLd
        data={[
          getJobPostingSchema(),
          getBreadcrumbSchema([
            { name: 'Strona główna', url: '/' },
            { name: 'Nabór pracowników', url: '/nabor-pracownikow' },
          ]),
        ]}
      />

      {/* Page hero */}
      <section className="bg-primary pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            Nabór pracowników
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Dołącz do naszego zespołu doświadczonych tynkarzy
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-heading font-bold text-3xl text-primary mb-6">
              Poszukujemy doświadczonych tynkarzy
            </h2>

            <p className="text-text-light leading-relaxed mb-6">
              Firma Radosław Baryza — Tynki Maszynowe poszukuje doświadczonych
              tynkarzy do istniejących brygad oraz do tworzenia nowych zespołów.
              Jeśli masz doświadczenie w tynkach maszynowych i szukasz stabilnej
              pracy w profesjonalnym zespole — zapraszamy do kontaktu.
            </p>

            <h3 className="font-heading font-semibold text-2xl text-primary mb-4">
              Co oferujemy?
            </h3>

            <ul className="space-y-3 text-text-light mb-8">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Praca na markowym sprzęcie tynkarskim</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Praca na silomatach</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Duże i małe obiekty oraz zabudowa jednorodzinna i szeregowa</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Dojazd po stronie pracodawcy</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Samochód firmowy</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Stabilne zatrudnienie w doświadczonym zespole</span>
              </li>
            </ul>

            <h3 className="font-heading font-semibold text-2xl text-primary mb-4">
              Kogo szukamy?
            </h3>

            <ul className="space-y-3 text-text-light mb-8">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Doświadczenie w tynkach maszynowych</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Rzetelność i zaangażowanie w pracę</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Umiejętność pracy w zespole</span>
              </li>
            </ul>

            {/* Sobriety policy */}
            <blockquote className="border-l-4 border-accent bg-bg-alt p-6 rounded-r-lg my-8">
              <p className="font-heading font-semibold text-lg text-primary">
                Profesjonalizm i bezpieczeństwo
              </p>
              <p className="text-text-light mt-2">
                Stawiamy na profesjonalizm i bezpieczeństwo na budowie.
                Nie zatrudniamy osób z problemami alkoholowymi.
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Recruitment CTA */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
            Zainteresowany? Zadzwoń do nas!
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Porozmawiajmy o warunkach współpracy
          </p>

          <p className="text-accent-light font-heading font-bold text-2xl md:text-3xl mb-8">
            <a href={`tel:${siteConfig.phone.raw}`} className="hover:text-accent transition-colors">
              {siteConfig.phone.display}
            </a>
          </p>

          <Button href={`tel:${siteConfig.phone.raw}`} variant="primary">
            Zadzwoń teraz
          </Button>
        </div>
      </section>
    </>
  );
}
