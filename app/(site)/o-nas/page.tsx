import type { Metadata } from 'next';
import CTABanner from '@/components/home/CTABanner';
import JsonLd from '@/components/ui/JsonLd';
import { getAboutPageSchema, getBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'O nas',
  description:
    'Poznaj firmę Radosław Baryza – Tynki Maszynowe. Ponad 15 lat doświadczenia w profesjonalnym tynkowaniu maszynowym w kujawsko-pomorskim i wielkopolskim.',
  alternates: { canonical: '/o-nas' },
  openGraph: {
    title: 'O nas – Tynki Maszynowe Baryza',
    description:
      'Poznaj firmę Radosław Baryza – Tynki Maszynowe. Ponad 15 lat doświadczenia w profesjonalnym tynkowaniu maszynowym.',
    url: '/o-nas',
    type: 'website',
    locale: 'pl_PL',
    siteName: 'Tynki Maszynowe Baryza',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Tynki Maszynowe Baryza' }],
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          getAboutPageSchema(),
          getBreadcrumbSchema([
            { name: 'Strona główna', url: '/' },
            { name: 'O nas', url: '/o-nas' },
          ]),
        ]}
      />
      {/* Page hero */}
      <section className="bg-primary pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            O nas
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Poznaj naszą firmę i nasze podejście do pracy
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-heading font-bold text-3xl text-primary mb-6">
              Firma Radosław Baryza – Tynki Maszynowe
            </h2>

            <p className="text-text-light leading-relaxed mb-6">
              Jesteśmy firmą specjalizującą się w profesjonalnym
              tynkowaniu maszynowym z ponad 15-letnim doświadczeniem w branży
              budowlanej. Od 9 lat działamy na rynku usług tynkarskich,
              obsługując klientów na terenie województwa kujawsko-pomorskiego
              oraz części województwa wielkopolskiego.
            </p>

            <p className="text-text-light leading-relaxed mb-6">
              Naszą działalnością kieruje Radosław Baryza, który
              od początku stawia na jakość wykonania i indywidualne podejście
              do każdego klienta. Wierzymy, że solidna praca i uczciwość
              to najlepsza rekomendacja — dlatego większość naszych
              zleceń pochodzi z poleceń zadowolonych klientów.
            </p>

            {/* Philosophy highlight */}
            <blockquote className="border-l-4 border-accent bg-bg-alt p-6 rounded-r-lg my-8">
              <p className="font-heading font-semibold text-xl text-primary italic">
                &ldquo;Nie najtańsi, ale jedni z najlepszych&rdquo;
              </p>
              <p className="text-text-light mt-2">
                To nasze motto, które odzwierciedla nasze podejście do pracy.
                Stawiamy na jakość materiałów, precyzję wykonania
                i zadowolenie klienta, a nie na najniższą cenę.
              </p>
            </blockquote>

            <h3 className="font-heading font-semibold text-2xl text-primary mb-4">
              Co nas wyróżnia?
            </h3>

            <ul className="space-y-3 text-text-light mb-8">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Ponad 15 lat doświadczenia w branży budowlanej</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Nowoczesny sprzęt tynkarski zapewniający precyzyjne wykonanie</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Bezpłatna wycena i dojazd do klienta</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Szeroki zakres usług — od tynków gipsowych po ekologiczne tynki gliniane</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Możliwość oględzin wcześniejszych realizacji po wcześniejszym umówieniu</span>
              </li>
            </ul>

            <h3 className="font-heading font-semibold text-2xl text-primary mb-4">
              Teren działania
            </h3>

            <p className="text-text-light leading-relaxed mb-6">
              Obsługujemy teren województwa kujawsko-pomorskiego oraz części
              województwa wielkopolskiego. Siedziba naszej firmy mieści się
              w Bytoniu (gmina Bytoń, woj. kujawsko-pomorskie). Dojazd do klienta
              jest zawsze bezpłatny.
            </p>

            <p className="text-text-light leading-relaxed">
              Zapraszamy do kontaktu w celu uzyskania bezpłatnej wyceny.
              Chętnie odpowiemy na wszelkie pytania i doradzimy najlepsze
              rozwiązanie dla Państwa inwestycji.
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
