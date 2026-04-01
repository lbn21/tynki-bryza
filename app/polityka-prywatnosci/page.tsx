import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Polityka prywatno\u015bci',
  description: 'Polityka prywatno\u015bci firmy Rados\u0142aw Baryza \u2013 Tynki Maszynowe.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-primary pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white">
            Polityka prywatno\u015bci
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
            Administratorem danych osobowych jest Rados\u0142aw Baryza prowadz\u0105cy
            dzia\u0142alno\u015b\u0107 gospodarcz\u0105 pod firm\u0105 Firma Rados\u0142aw Baryza,
            z siedzib\u0105 w Bytoniu 64L, woj. kujawsko-pomorskie,
            NIP: {'{NIP}'}, adres e-mail: {'{EMAIL}'}.
          </p>

          <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
            2. Cel i podstawa prawna przetwarzania danych
          </h2>
          <p className="text-text-light leading-relaxed mb-3">
            Pa\u0144stwa dane osobowe s\u0105 przetwarzane w nast\u0119puj\u0105cych celach:
          </p>
          <ul className="list-disc pl-6 text-text-light space-y-2 mb-6">
            <li>
              Udzielenie odpowiedzi na zapytanie z\u0142o\u017cone za po\u015brednictwem
              formularza kontaktowego \u2014 na podstawie art. 6 ust. 1 lit. a RODO
              (zgoda osoby, kt\u00f3rej dane dotycz\u0105).
            </li>
            <li>
              Realizacja prawnie uzasadnionych interes\u00f3w administratora, takich jak
              prowadzenie korespondencji, marketing bezpo\u015bredni w\u0142asnych
              us\u0142ug \u2014 na podstawie art. 6 ust. 1 lit. f RODO.
            </li>
            <li>
              Analiza statystyczna ruchu na stronie internetowej \u2014 na podstawie
              art. 6 ust. 1 lit. a RODO (zgoda wyra\u017cona za po\u015brednictwem
              baneru cookie).
            </li>
          </ul>

          <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
            3. Zakres przetwarzanych danych
          </h2>
          <p className="text-text-light leading-relaxed mb-6">
            W ramach formularza kontaktowego przetwarzamy: imi\u0119 i nazwisko,
            numer telefonu, adres e-mail oraz ewentualne dane przekazane
            dobrowolnie w tre\u015bci wiadomo\u015bci (rodzaj us\u0142ugi, metra\u017c).
          </p>

          <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
            4. Okres przechowywania danych
          </h2>
          <p className="text-text-light leading-relaxed mb-6">
            Dane osobowe pozyskane za po\u015brednictwem formularza kontaktowego
            b\u0119d\u0105 przechowywane przez okres niezb\u0119dny do udzielenia odpowiedzi
            na zapytanie, a nast\u0119pnie przez okres {'{PLACEHOLDER \u2014 np. 12 miesi\u0119cy}'}
            od ostatniego kontaktu, chyba \u017ce przepisy prawa wymagaj\u0105 d\u0142u\u017cszego
            przechowywania.
          </p>

          <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
            5. Prawa os\u00f3b, kt\u00f3rych dane dotycz\u0105
          </h2>
          <p className="text-text-light leading-relaxed mb-3">
            Przys\u0142uguje Pa\u0144stwu prawo do:
          </p>
          <ul className="list-disc pl-6 text-text-light space-y-2 mb-6">
            <li>dost\u0119pu do swoich danych osobowych,</li>
            <li>sprostowania (poprawienia) danych,</li>
            <li>usuni\u0119cia danych (\u201eprawo do bycia zapomnianym\u201d),</li>
            <li>ograniczenia przetwarzania danych,</li>
            <li>przenoszenia danych,</li>
            <li>wniesienia sprzeciwu wobec przetwarzania danych,</li>
            <li>cofni\u0119cia zgody w dowolnym momencie (bez wp\u0142ywu na zgodno\u015b\u0107 z prawem przetwarzania dokonanego przed cofni\u0119ciem),</li>
            <li>
              wniesienia skargi do organu nadzorczego \u2014 Prezesa Urz\u0119du Ochrony
              Danych Osobowych (ul. Stawki 2, 00-193 Warszawa).
            </li>
          </ul>

          <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
            6. Odbiorcy danych
          </h2>
          <p className="text-text-light leading-relaxed mb-6">
            Pa\u0144stwa dane osobowe mog\u0105 by\u0107 udost\u0119pniane podmiotom
            \u015bwiadcz\u0105cym us\u0142ugi na rzecz administratora, w szczeg\u00f3lno\u015bci
            dostawcom us\u0142ug hostingowych i narz\u0119dzi analitycznych.
            {' {PLACEHOLDER \u2014 wymieni\u0107 konkretnych podwykonawc\u00f3w je\u015bli dotyczy}'}
          </p>

          <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
            7. Pliki cookies
          </h2>
          <p className="text-text-light leading-relaxed mb-6">
            Strona internetowa wykorzystuje pliki cookies. Szczeg\u00f3\u0142owe
            informacje na temat plik\u00f3w cookies znajd\u0105 Pa\u0144stwo w naszej{' '}
            <a href="/polityka-cookies" className="text-accent underline hover:text-accent-hover">
              Polityce cookies
            </a>.
          </p>

          <h2 className="font-heading font-semibold text-2xl text-primary mb-4">
            8. Zmiany polityki prywatno\u015bci
          </h2>
          <p className="text-text-light leading-relaxed">
            Administrator zastrzega sobie prawo do wprowadzania zmian w niniejszej
            Polityce prywatno\u015bci. O wszelkich zmianach u\u017cytkownicy zostan\u0105
            poinformowani poprzez aktualizacj\u0119 daty na pocz\u0105tku dokumentu.
          </p>
        </div>
      </section>
    </>
  );
}
