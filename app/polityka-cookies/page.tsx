import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Polityka cookies',
  description: 'Polityka plik\u00f3w cookies strony tynkibaryza.pl.',
};

export default function CookiePolicyPage() {
  return (
    <>
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
            1. Czym s\u0105 pliki cookies?
          </h2>
          <p className="text-text-light leading-relaxed mb-6">
            Pliki cookies (ciasteczka) to niewielkie pliki tekstowe, kt\u00f3re s\u0105
            zapisywane na Pa\u0144stwa urz\u0105dzeniu ko\u0144cowym (komputerze, tablecie,
            smartfonie) podczas korzystania ze strony internetowej. Pliki te
            pozwalaj\u0105 na prawid\u0142owe dzia\u0142anie strony, zapami\u0119tywanie
            preferencji u\u017cytkownika oraz zbieranie informacji statystycznych.
          </p>

          <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
            2. Rodzaje wykorzystywanych plik\u00f3w cookies
          </h2>

          <h3 className="font-heading font-semibold text-xl text-primary mb-3">
            a) Niezb\u0119dne (konieczne)
          </h3>
          <p className="text-text-light leading-relaxed mb-4">
            S\u0105 niezb\u0119dne do prawid\u0142owego dzia\u0142ania strony internetowej.
            Obejmuj\u0105 m.in. zapami\u0119tywanie Pa\u0144stwa wyb\u00f3r dotycz\u0105cy
            plik\u00f3w cookies. Nie wymagaj\u0105 zgody u\u017cytkownika.
          </p>

          <h3 className="font-heading font-semibold text-xl text-primary mb-3">
            b) Statystyczne (analityczne)
          </h3>
          <p className="text-text-light leading-relaxed mb-4">
            Pozwalaj\u0105 na zbieranie anonimowych informacji o sposobie korzystania
            ze strony internetowej, co pomaga nam j\u0105 ulepsza\u0107. Wykorzystujemy
            w tym celu {'{PLACEHOLDER \u2014 np. Google Analytics 4, Plausible itp.}'}.
            Te pliki cookies s\u0105 instalowane wy\u0142\u0105cznie po wyra\u017ceniu
            przez Pa\u0144stwa zgody.
          </p>

          <h3 className="font-heading font-semibold text-xl text-primary mb-3">
            c) Marketingowe
          </h3>
          <p className="text-text-light leading-relaxed mb-6">
            Mog\u0105 by\u0107 wykorzystywane do wy\u015bwietlania spersonalizowanych
            reklam. {'{PLACEHOLDER \u2014 wymieni\u0107 narz\u0119dzia marketingowe je\u015bli dotyczy}'}.
            Te pliki cookies s\u0105 instalowane wy\u0142\u0105cznie po wyra\u017ceniu
            przez Pa\u0144stwa zgody.
          </p>

          <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
            3. Zarz\u0105dzanie plikami cookies
          </h2>
          <p className="text-text-light leading-relaxed mb-3">
            Mog\u0105 Pa\u0144stwo zmieni\u0107 ustawienia dotycz\u0105ce plik\u00f3w cookies
            w dowolnym momencie, korzystaj\u0105c z linku &ldquo;Ustawienia cookies&rdquo;
            w stopce strony lub za po\u015brednictwem ustawie\u0144 przegl\u0105darki internetowej:
          </p>
          <ul className="list-disc pl-6 text-text-light space-y-2 mb-6">
            <li>
              <strong>Google Chrome:</strong> Ustawienia \u2192 Prywatno\u015b\u0107
              i bezpiecze\u0144stwo \u2192 Pliki cookie i inne dane witryn
            </li>
            <li>
              <strong>Mozilla Firefox:</strong> Ustawienia \u2192 Prywatno\u015b\u0107
              i bezpiecze\u0144stwo \u2192 Ciasteczka i dane stron
            </li>
            <li>
              <strong>Safari:</strong> Preferencje \u2192 Prywatno\u015b\u0107
              \u2192 Zarz\u0105dzaj danymi stron
            </li>
            <li>
              <strong>Microsoft Edge:</strong> Ustawienia \u2192 Pliki cookie
              i uprawnienia witryn
            </li>
          </ul>

          <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
            4. Konsekwencje wy\u0142\u0105czenia plik\u00f3w cookies
          </h2>
          <p className="text-text-light leading-relaxed mb-6">
            Wy\u0142\u0105czenie plik\u00f3w cookies niezb\u0119dnych mo\u017ce spowodowa\u0107
            nieprawid\u0142owe dzia\u0142anie niekt\u00f3rych funkcji strony. Wy\u0142\u0105czenie
            plik\u00f3w cookies statystycznych i marketingowych nie wp\u0142ywa na
            dzia\u0142anie strony, ale uniemo\u017cliwia zbieranie danych analitycznych
            i wy\u015bwietlanie spersonalizowanych tre\u015bci.
          </p>

          <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
            5. Kontakt
          </h2>
          <p className="text-text-light leading-relaxed">
            W razie pyta\u0144 dotycz\u0105cych polityki cookies, prosimy o kontakt
            pod adresem e-mail: {'{EMAIL}'} lub za po\u015brednictwem{' '}
            <a href="/kontakt" className="text-accent underline hover:text-accent-hover">
              formularza kontaktowego
            </a>.
          </p>
        </div>
      </section>
    </>
  );
}
