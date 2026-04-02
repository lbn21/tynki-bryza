import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Polityka prywatności',
  description: 'Polityka prywatności firmy Radosław Baryza – Tynki Maszynowe.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-primary pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white">
            Polityka prywatności
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none">
          <p className="text-text-light text-sm mb-8">
            Ostatnia aktualizacja: 1 kwietnia 2026 r.
          </p>

          <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
            1. Administrator danych osobowych
          </h2>
          <p className="text-text-light leading-relaxed mb-6">
            Administratorem danych osobowych jest Radosław Baryza prowadzący
            działalność gospodarczą pod firmą Firma Radosław Baryza,
            z siedzibą w Bytoniu 64L, woj. kujawsko-pomorskie,
            NIP: {'{NIP}'}, adres e-mail: {'{EMAIL}'}.
          </p>

          <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
            2. Cel i podstawa prawna przetwarzania danych
          </h2>
          <p className="text-text-light leading-relaxed mb-3">
            Państwa dane osobowe są przetwarzane w następujących celach:
          </p>
          <ul className="list-disc pl-6 text-text-light space-y-2 mb-6">
            <li>
              Udzielenie odpowiedzi na zapytanie złożone za pośrednictwem
              formularza kontaktowego — na podstawie art. 6 ust. 1 lit. a RODO
              (zgoda osoby, której dane dotyczą).
            </li>
            <li>
              Realizacja prawnie uzasadnionych interesów administratora, takich jak
              prowadzenie korespondencji, marketing bezpośredni własnych
              usług — na podstawie art. 6 ust. 1 lit. f RODO.
            </li>
            <li>
              Analiza statystyczna ruchu na stronie internetowej — na podstawie
              art. 6 ust. 1 lit. a RODO (zgoda wyrażona za pośrednictwem
              baneru cookie).
            </li>
          </ul>

          <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
            3. Zakres przetwarzanych danych
          </h2>
          <p className="text-text-light leading-relaxed mb-6">
            W ramach formularza kontaktowego przetwarzamy: imię i nazwisko,
            numer telefonu, adres e-mail oraz ewentualne dane przekazane
            dobrowolnie w treści wiadomości (rodzaj usługi, metraż).
          </p>

          <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
            4. Okres przechowywania danych
          </h2>
          <p className="text-text-light leading-relaxed mb-6">
            Dane osobowe pozyskane za pośrednictwem formularza kontaktowego
            będą przechowywane przez okres niezbędny do udzielenia odpowiedzi
            na zapytanie, a następnie przez okres {'{PLACEHOLDER — np. 12 miesięcy}'}
            od ostatniego kontaktu, chyba że przepisy prawa wymagają dłuższego
            przechowywania.
          </p>

          <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
            5. Prawa osób, których dane dotyczą
          </h2>
          <p className="text-text-light leading-relaxed mb-3">
            Przysługuje Państwu prawo do:
          </p>
          <ul className="list-disc pl-6 text-text-light space-y-2 mb-6">
            <li>dostępu do swoich danych osobowych,</li>
            <li>sprostowania (poprawienia) danych,</li>
            <li>usunięcia danych („prawo do bycia zapomnianym”),</li>
            <li>ograniczenia przetwarzania danych,</li>
            <li>przenoszenia danych,</li>
            <li>wniesienia sprzeciwu wobec przetwarzania danych,</li>
            <li>cofnięcia zgody w dowolnym momencie (bez wpływu na zgodność z prawem przetwarzania dokonanego przed cofnięciem),</li>
            <li>
              wniesienia skargi do organu nadzorczego — Prezesa Urzędu Ochrony
              Danych Osobowych (ul. Stawki 2, 00-193 Warszawa).
            </li>
          </ul>

          <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
            6. Odbiorcy danych
          </h2>
          <p className="text-text-light leading-relaxed mb-6">
            Państwa dane osobowe mogą być udostępniane podmiotom
            świadczącym usługi na rzecz administratora, w szczególności
            dostawcom usług hostingowych i narzędzi analitycznych.
            {' {PLACEHOLDER — wymienić konkretnych podwykonawców jeśli dotyczy}'}
          </p>

          <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
            7. Pliki cookies
          </h2>
          <p className="text-text-light leading-relaxed mb-6">
            Strona internetowa wykorzystuje pliki cookies. Szczegółowe
            informacje na temat plików cookies znajdą Państwo w naszej{' '}
            <a href="/polityka-cookies" className="text-accent underline hover:text-accent-hover">
              Polityce cookies
            </a>.
          </p>

          <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
            8. Zmiany polityki prywatności
          </h2>
          <p className="text-text-light leading-relaxed">
            Administrator zastrzega sobie prawo do wprowadzania zmian w niniejszej
            Polityce prywatności. O wszelkich zmianach użytkownicy zostaną
            poinformowani poprzez aktualizację daty na początku dokumentu.
          </p>
        </div>
      </section>
    </>
  );
}
