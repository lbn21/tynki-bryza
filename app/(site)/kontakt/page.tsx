import type { Metadata } from 'next';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Skontaktuj się z firmą Baryza – Tynki Maszynowe. Bezpłatna wycena i dojazd. Działamy w kujawsko-pomorskim i wielkopolskim.',
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-primary pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            Kontakt
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Skontaktuj się z nami — wycena i dojazd gratis
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Form */}
            <div>
              <h2 className="font-heading font-semibold text-2xl text-primary mb-6">
                Wyślij zapytanie
              </h2>
              <ContactForm />
            </div>

            {/* Right: Info */}
            <div>
              <h2 className="font-heading font-semibold text-2xl text-primary mb-6">
                Dane kontaktowe
              </h2>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
