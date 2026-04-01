import type { Metadata } from 'next';
import CTABanner from '@/components/home/CTABanner';

export const metadata: Metadata = {
  title: 'O nas',
  description:
    'Poznaj firm\u0119 Rados\u0142aw Baryza \u2013 Tynki Maszynowe. Ponad 15 lat do\u015bwiadczenia w profesjonalnym tynkowaniu maszynowym w kujawsko-pomorskim i wielkopolskim.',
};

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-primary pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            O nas
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Poznaj nasz\u0105 firm\u0119 i nasze podej\u015bcie do pracy
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-heading font-bold text-3xl text-primary mb-6">
              Firma Rados\u0142aw Baryza \u2013 Tynki Maszynowe
            </h2>

            <p className="text-text-light leading-relaxed mb-6">
              Jeste\u015bmy firm\u0105 specjalizuj\u0105c\u0105 si\u0119 w profesjonalnym
              tynkowaniu maszynowym z ponad 15-letnim do\u015bwiadczeniem w bran\u017cy
              budowlanej. Od 9 lat dzia\u0142amy na rynku us\u0142ug tynkarskich,
              obs\u0142uguj\u0105c klient\u00f3w na terenie wojew\u00f3dztwa kujawsko-pomorskiego
              oraz cz\u0119\u015bci wojew\u00f3dztwa wielkopolskiego.
            </p>

            <p className="text-text-light leading-relaxed mb-6">
              Nasz\u0105 dzia\u0142alno\u015bci\u0105 kieruje Rados\u0142aw Baryza, kt\u00f3ry
              od pocz\u0105tku stawia na jako\u015b\u0107 wykonania i indywidualne podej\u015bcie
              do ka\u017cdego klienta. Wierzymy, \u017ce solidna praca i uczciwo\u015b\u0107
              to najlepsza rekomendacja \u2014 dlatego wi\u0119kszo\u015b\u0107 naszych
              zlece\u0144 pochodzi z polece\u0144 zadowolonych klient\u00f3w.
            </p>

            {/* Philosophy highlight */}
            <blockquote className="border-l-4 border-accent bg-bg-alt p-6 rounded-r-lg my-8">
              <p className="font-heading font-semibold text-xl text-primary italic">
                &ldquo;Nie najta\u0144si, ale jedni z najlepszych&rdquo;
              </p>
              <p className="text-text-light mt-2">
                To nasze motto, kt\u00f3re odzwierciedla nasze podej\u015bcie do pracy.
                Stawiamy na jako\u015b\u0107 materia\u0142\u00f3w, precyzj\u0119 wykonania
                i zadowolenie klienta, a nie na najni\u017csz\u0105 cen\u0119.
              </p>
            </blockquote>

            <h3 className="font-heading font-semibold text-2xl text-primary mb-4">
              Co nas wyr\u00f3\u017cnia?
            </h3>

            <ul className="space-y-3 text-text-light mb-8">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Ponad 15 lat do\u015bwiadczenia w bran\u017cy budowlanej</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Nowoczesny sprz\u0119t tynkarski zapewniaj\u0105cy precyzyjne wykonanie</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Bezp\u0142atna wycena i dojazd do klienta</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Szeroki zakres us\u0142ug \u2014 od tynk\u00f3w gipsowych po ekologiczne tynki gliniane</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Mo\u017cliwo\u015b\u0107 ogl\u0119dzin wcze\u015bniejszych realizacji po wcze\u015bniejszym um\u00f3wieniu</span>
              </li>
            </ul>

            <h3 className="font-heading font-semibold text-2xl text-primary mb-4">
              Teren dzia\u0142ania
            </h3>

            <p className="text-text-light leading-relaxed mb-6">
              Obs\u0142ugujemy teren wojew\u00f3dztwa kujawsko-pomorskiego oraz cz\u0119\u015bci
              wojew\u00f3dztwa wielkopolskiego. Siedziba naszej firmy mie\u015bci si\u0119
              w Bytoniu (gmina Byto\u0144, woj. kujawsko-pomorskie). Dojazd do klienta
              jest zawsze bezp\u0142atny.
            </p>

            <p className="text-text-light leading-relaxed">
              Zapraszamy do kontaktu w celu uzyskania bezp\u0142atnej wyceny.
              Ch\u0119tnie odpowiemy na wszelkie pytania i doradzimy najlepsze
              rozwi\u0105zanie dla Pa\u0144stwa inwestycji.
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
