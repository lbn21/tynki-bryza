import type { Metadata } from 'next';
import JsonLd from '@/components/ui/JsonLd';
import { getWebPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Polityka cookies',
  description:
    'Polityka plików cookies strony tynkibaryza.pl. Informacje o rodzajach cookies i zarządzaniu ustawieniami plików cookies.',
  alternates: { canonical: '/polityka-cookies' },
  openGraph: {
    title: 'Polityka cookies – Tynki Maszynowe Baryza',
    description:
      'Polityka plików cookies strony tynkibaryza.pl. Informacje o rodzajach cookies i zarządzaniu ustawieniami.',
    url: '/polityka-cookies',
    type: 'website',
    locale: 'pl_PL',
    siteName: 'Tynki Maszynowe Baryza',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Tynki Maszynowe Baryza' }],
  },
};

export default function CookiePolicyPage() {
  return (
    <>
      <JsonLd
        data={getWebPageSchema(
          'Polityka cookies',
          'Polityka plików cookies strony tynkibaryza.pl.',
          '/polityka-cookies',
        )}
      />
      <section className="bg-primary pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white">
            Polityka cookies
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none">
          <p className="text-text-light text-sm mb-8">
            Ostatnia aktualizacja: 1 kwietnia 2026 r.
          </p>

          <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
            1. Czym są pliki cookies?
          </h2>
          <p className="text-text-light leading-relaxed mb-6">
            Pliki cookies (ciasteczka) to niewielkie pliki tekstowe, które są
            zapisywane na Państwa urządzeniu końcowym (komputerze, tablecie,
            smartfonie) podczas korzystania ze strony internetowej. Pliki te
            pozwalają na prawidłowe działanie strony, zapamiętywanie
            preferencji użytkownika oraz zbieranie informacji statystycznych.
          </p>

          <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
            2. Rodzaje wykorzystywanych plików cookies
          </h2>

          <h3 className="font-heading font-semibold text-xl text-primary mb-3">
            a) Niezbędne (konieczne)
          </h3>
          <p className="text-text-light leading-relaxed mb-4">
            Są niezbędne do prawidłowego działania strony internetowej.
            Obejmują m.in. zapamiętywanie Państwa wybór dotyczący
            plików cookies. Nie wymagają zgody użytkownika.
          </p>

          <h3 className="font-heading font-semibold text-xl text-primary mb-3">
            b) Statystyczne (analityczne)
          </h3>
          <p className="text-text-light leading-relaxed mb-4">
            Do analizy ruchu na stronie korzystamy z Vercel Analytics —
            narzędzia, które nie wykorzystuje plików cookies ani nie
            przetwarza danych osobowych użytkowników. W przyszłości
            możemy wdrożyć dodatkowe narzędzia analityczne — w takim
            przypadku odpowiednie pliki cookies będą instalowane wyłącznie
            po wyrażeniu przez Państwa zgody.
          </p>

          <h3 className="font-heading font-semibold text-xl text-primary mb-3">
            c) Marketingowe
          </h3>
          <p className="text-text-light leading-relaxed mb-6">
            Obecnie strona nie wykorzystuje marketingowych plików cookies.
            W przypadku ich wdrożenia w przyszłości będą one instalowane
            wyłącznie po wyrażeniu przez Państwa zgody.
          </p>

          <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
            3. Zarządzanie plikami cookies
          </h2>
          <p className="text-text-light leading-relaxed mb-3">
            Mogą Państwo zmienić ustawienia dotyczące plików cookies
            w dowolnym momencie, korzystając z linku &ldquo;Ustawienia cookies&rdquo;
            w stopce strony lub za pośrednictwem ustawień przeglądarki internetowej:
          </p>
          <ul className="list-disc pl-6 text-text-light space-y-2 mb-6">
            <li>
              <strong>Google Chrome:</strong> Ustawienia → Prywatność
              i bezpieczeństwo → Pliki cookie i inne dane witryn
            </li>
            <li>
              <strong>Mozilla Firefox:</strong> Ustawienia → Prywatność
              i bezpieczeństwo → Ciasteczka i dane stron
            </li>
            <li>
              <strong>Safari:</strong> Preferencje → Prywatność
              → Zarządzaj danymi stron
            </li>
            <li>
              <strong>Microsoft Edge:</strong> Ustawienia → Pliki cookie
              i uprawnienia witryn
            </li>
          </ul>

          <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
            4. Konsekwencje wyłączenia plików cookies
          </h2>
          <p className="text-text-light leading-relaxed mb-6">
            Wyłączenie plików cookies niezbędnych może spowodować
            nieprawidłowe działanie niektórych funkcji strony. Wyłączenie
            plików cookies statystycznych i marketingowych nie wpływa na
            działanie strony, ale uniemożliwia zbieranie danych analitycznych
            i wyświetlanie spersonalizowanych treści.
          </p>

          <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
            5. Kontakt
          </h2>
          <p className="text-text-light leading-relaxed">
            W razie pytań dotyczących polityki cookies, prosimy o kontakt
            pod adresem e-mail: perfect.plast.baryza@tlen.pl lub za pośrednictwem{' '}
            <a href="/kontakt" className="text-accent underline hover:text-accent-hover">
              formularza kontaktowego
            </a>.
          </p>
        </div>
      </section>
    </>
  );
}
