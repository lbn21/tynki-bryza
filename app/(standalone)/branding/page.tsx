import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Przewodnik brandingowy',
  robots: {
    index: false,
    follow: false,
  },
};

function LogoMark({ className = '' }: { className?: string }) {
  return (
    <div className={className}>
      <div className="font-heading font-bold text-[40px] leading-none tracking-tight">
        BARYZA
      </div>
      <div className="font-heading font-medium text-[11px] tracking-widest uppercase mt-0.5">
        Tynki Maszynowe
      </div>
    </div>
  );
}

function SectionHeader({
  number,
  title,
  desc,
}: {
  number: string;
  title: string;
  desc: string;
}) {
  return (
    <>
      <div className="font-heading text-xs font-bold tracking-[0.15em] uppercase text-accent mb-2">
        {number}
      </div>
      <h2 className="font-heading text-[28px] font-bold text-primary mb-2">
        {title}
      </h2>
      <p className="text-text-light mb-8 max-w-[600px]">{desc}</p>
    </>
  );
}

function Swatch({
  color,
  name,
  role,
  values,
  lightBorder = false,
}: {
  color: string;
  name: string;
  role: string;
  values: string[];
  lightBorder?: boolean;
}) {
  return (
    <div className="rounded-xl overflow-hidden bg-white shadow-sm">
      <div
        className={`h-[100px] ${lightBorder ? 'border-b border-bg-alt' : ''}`}
        style={{ backgroundColor: color }}
      />
      <div className="p-3">
        <div className="font-heading font-semibold text-sm mb-0.5">{name}</div>
        <div className="text-xs text-text-light mb-2">{role}</div>
        <div className="text-xs text-text-light leading-7">
          {values.map((v, i) => (
            <span key={i}>
              {v}
              {i < values.length - 1 && <br />}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function RuleCard({
  type,
  children,
}: {
  type: 'do' | 'dont';
  children: React.ReactNode;
}) {
  return (
    <div className="p-6 rounded-xl border border-bg-alt bg-white">
      <h4
        className={`text-sm font-bold mb-2 flex items-center gap-2 ${
          type === 'do' ? 'text-green-700' : 'text-red-800'
        }`}
      >
        {type === 'do' ? '\u2713 Poprawne' : '\u2717 Niepoprawne'}
      </h4>
      <p className="text-[13px] text-text-light leading-relaxed">{children}</p>
    </div>
  );
}

export default function BrandingPage() {
  return (
    <div className="min-h-screen bg-bg">
      {/* Okładka */}
      <div className="bg-primary text-white py-20 px-6 text-center">
        <div className="font-heading font-bold text-5xl md:text-7xl leading-none tracking-tight">
          BARYZA
        </div>
        <div className="font-heading font-medium text-base tracking-widest uppercase text-secondary-light mt-1">
          Tynki Maszynowe
        </div>
        <div className="w-[60px] h-[3px] bg-accent mx-auto mt-6" />
        <p className="mt-12 text-sm font-semibold tracking-[0.2em] uppercase text-secondary-light">
          Przewodnik brandingowy
        </p>
      </div>

      <div className="max-w-[900px] mx-auto px-6">
        {/* 01. Logo */}
        <section className="py-14 border-b border-bg-alt">
          <SectionHeader
            number="01"
            title="Logo"
            desc="Logo firmy BARYZA to typograficzny znak marki. Nie zawiera ikony ani symbolu graficznego — marka budowana jest wyłącznie na typografii."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="rounded-xl bg-primary text-white p-12 flex flex-col items-center justify-center text-center">
              <LogoMark className="text-white" />
              <div className="text-xs font-semibold tracking-[0.1em] uppercase text-secondary-light mt-6">
                Na ciemnym tle (podstawowy)
              </div>
            </div>
            <div className="rounded-xl bg-white border border-bg-alt p-12 flex flex-col items-center justify-center text-center">
              <LogoMark className="[&>div:first-child]:text-primary [&>div:last-child]:text-secondary" />
              <div className="text-xs font-semibold tracking-[0.1em] uppercase text-text-light mt-6">
                Na białym / jasnym tle
              </div>
            </div>
            <div className="rounded-xl bg-bg-alt p-12 flex flex-col items-center justify-center text-center">
              <LogoMark className="[&>div:first-child]:text-primary [&>div:last-child]:text-secondary" />
              <div className="text-xs font-semibold tracking-[0.1em] uppercase text-text-light mt-6">
                Na szarym tle
              </div>
            </div>
            <div className="rounded-xl bg-text text-white p-12 flex flex-col items-center justify-center text-center">
              <LogoMark className="text-white [&>div:last-child]:text-secondary-light" />
              <div className="text-xs font-semibold tracking-[0.1em] uppercase text-secondary-light mt-6">
                Na czarnym tle
              </div>
            </div>
          </div>

          <h3 className="font-heading text-lg font-bold text-primary mb-4">
            Budowa logo
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left font-heading font-semibold text-[11px] tracking-[0.1em] uppercase text-text-light p-2 border-b-2 border-bg-alt">
                    Element
                  </th>
                  <th className="text-left font-heading font-semibold text-[11px] tracking-[0.1em] uppercase text-text-light p-2 border-b-2 border-bg-alt">
                    Specyfikacja
                  </th>
                </tr>
              </thead>
              <tbody className="[&_td]:p-2.5 [&_td]:border-b [&_td]:border-bg-alt [&_td]:align-top">
                <tr>
                  <td>
                    <strong>BARYZA</strong> (znak główny)
                  </td>
                  <td>
                    Montserrat Bold (700), wersaliki, tracking:{' '}
                    <code className="bg-bg-alt px-1.5 py-0.5 rounded text-[13px]">
                      -0.025em
                    </code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Tynki Maszynowe</strong> (podpis)
                  </td>
                  <td>
                    Montserrat Medium (500), wersaliki, tracking:{' '}
                    <code className="bg-bg-alt px-1.5 py-0.5 rounded text-[13px]">
                      0.1em
                    </code>
                  </td>
                </tr>
                <tr>
                  <td>Proporcja wielkości</td>
                  <td>Podpis = ok. 27% wielkości znaku głównego</td>
                </tr>
                <tr>
                  <td>Odstęp między wierszami</td>
                  <td>Minimalny — podpis bezpośrednio pod znakiem głównym</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="font-heading text-lg font-bold text-primary mt-8 mb-4">
            Strefa ochronna i minimalna wielkość
          </h3>
          <div className="flex gap-12 items-start flex-wrap">
            <div>
              <div className="inline-flex flex-col items-center relative p-12 border-2 border-dashed border-accent-light rounded-xl bg-white">
                <span className="absolute top-4 left-1/2 -translate-x-1/2 text-[11px] text-accent font-semibold">
                  B
                </span>
                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[11px] text-accent font-semibold">
                  B
                </span>
                <span className="absolute left-2 top-1/2 -translate-y-1/2 -rotate-90 text-[11px] text-accent font-semibold">
                  B
                </span>
                <span className="absolute right-2 top-1/2 -translate-y-1/2 rotate-90 text-[11px] text-accent font-semibold">
                  B
                </span>
                <div className="font-heading font-bold text-[40px] leading-none tracking-tight text-primary">
                  BARYZA
                </div>
                <div className="font-heading font-medium text-[11px] tracking-widest uppercase text-secondary mt-0.5">
                  Tynki Maszynowe
                </div>
              </div>
              <p className="text-[13px] text-text-light mt-3">
                Strefa ochronna = wysokość litery &ldquo;B&rdquo; z logo.
                <br />
                Żaden element graficzny ani tekst nie może
                <br />
                wchodzić w tę strefę.
              </p>
            </div>

            <div className="flex items-end gap-12 mt-6">
              <div className="text-center">
                <div className="font-heading font-bold text-2xl text-primary tracking-tight">
                  BARYZA
                </div>
                <div className="font-heading font-medium text-[7px] text-secondary tracking-widest uppercase">
                  Tynki Maszynowe
                </div>
                <p className="text-xs text-text-light mt-2">
                  Min. druk: 24mm szer.
                </p>
              </div>
              <div className="text-center">
                <div className="font-heading font-bold text-base text-primary tracking-tight">
                  BARYZA
                </div>
                <div className="font-heading font-medium text-[5px] text-secondary tracking-widest uppercase">
                  Tynki Maszynowe
                </div>
                <p className="text-xs text-text-light mt-2">
                  Min. ekran: 120px szer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 02. Kolorystyka */}
        <section className="py-14 border-b border-bg-alt">
          <SectionHeader
            number="02"
            title="Kolorystyka"
            desc="Paleta kolorów firmy. Kolory podstawowe i uzupełniające należy stosować konsekwentnie we wszystkich materiałach."
          />

          <h3 className="font-heading text-base font-bold text-primary mb-4">
            Kolory podstawowe
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <Swatch
              color="#1E3A5F"
              name="Navy (Primary)"
              role="Nagłówki, nawigacja, stopka"
              values={[
                'HEX #1E3A5F',
                'RGB 30, 58, 95',
                'CMYK 68, 39, 0, 63',
                'Pantone 289 C',
              ]}
            />
            <Swatch
              color="#E8702A"
              name="Orange (Accent)"
              role="CTA, nr telefonu, wyróżnienia"
              values={[
                'HEX #E8702A',
                'RGB 232, 112, 42',
                'CMYK 0, 52, 82, 9',
                'Pantone 158 C',
              ]}
            />
            <Swatch
              color="#6B7B8D"
              name="Steel Gray (Secondary)"
              role="Podtytuły, obramowania, tekst drugorzędny"
              values={['HEX #6B7B8D', 'RGB 107, 123, 141', 'CMYK 24, 13, 0, 45']}
            />
          </div>

          <h3 className="font-heading text-base font-bold text-primary mb-4">
            Kolory tła i tekstu
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Swatch
              color="#F8F7F4"
              name="Warm White"
              role="Główne tło strony / materiałów"
              values={['HEX #F8F7F4', 'RGB 248, 247, 244']}
              lightBorder
            />
            <Swatch
              color="#ECEEF0"
              name="Mist Gray"
              role="Sekcje naprzemienne, karty"
              values={['HEX #ECEEF0', 'RGB 236, 238, 240']}
              lightBorder
            />
            <Swatch
              color="#2D2D2D"
              name="Dark Charcoal"
              role="Tekst główny (nigdy czysty czarny)"
              values={['HEX #2D2D2D', 'RGB 45, 45, 45']}
            />
            <Swatch
              color="#5A5A5A"
              name="Mid Gray"
              role="Tekst drugorzędny, podpisy"
              values={['HEX #5A5A5A', 'RGB 90, 90, 90']}
            />
          </div>

          <h3 className="font-heading text-base font-bold text-primary mb-4">
            Warianty kolorów
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Swatch
              color="#152D4A"
              name="Navy Dark"
              role="Ciemniejszy wariant"
              values={['HEX #152D4A']}
            />
            <Swatch
              color="#2A4F7F"
              name="Navy Light"
              role="Jaśniejszy wariant"
              values={['HEX #2A4F7F']}
            />
            <Swatch
              color="#D4611F"
              name="Orange Hover"
              role="Stan hover przycisków"
              values={['HEX #D4611F']}
            />
            <Swatch
              color="#F5A66B"
              name="Orange Light"
              role="Jaśniejszy wariant"
              values={['HEX #F5A66B']}
            />
          </div>
        </section>

        {/* 03. Typografia */}
        <section className="py-14 border-b border-bg-alt">
          <SectionHeader
            number="03"
            title="Typografia"
            desc="Dwa kroje pisma tworzą hierarchię wizualną marki. Oba są dostępne bezpłatnie przez Google Fonts."
          />

          <div className="p-6 sm:p-8 bg-white rounded-xl border border-bg-alt mb-8 overflow-hidden">
            <div className="font-heading text-[11px] font-bold tracking-[0.15em] uppercase text-accent mb-4">
              Krój nagłówkowy
            </div>
            <div className="font-heading text-4xl sm:text-5xl font-extrabold text-primary leading-none">
              Montserrat
            </div>
            <div className="font-heading text-base sm:text-xl font-normal text-text-light mt-2 break-all">
              AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz
            </div>
            <div className="font-heading text-base sm:text-xl font-normal text-text-light">
              ĄąĆćĘęŁłŃńÓóŚśŹźŻż 0123456789
            </div>
            <div className="mt-4 text-[13px] text-text-light">
              <strong>Google Fonts:</strong> Montserrat &nbsp;|&nbsp;{' '}
              <strong>Subsets:</strong> Latin, Latin Extended
              <br />
              <strong>Wagi:</strong> Medium (500) — podpisy logo &nbsp;|&nbsp;
              Semi-Bold (600) — nagłówki sekcji &nbsp;|&nbsp; Bold (700) — logo,
              nagłówki stron &nbsp;|&nbsp; Extra-Bold (800) — hero
            </div>
          </div>

          <div className="p-6 sm:p-8 bg-white rounded-xl border border-bg-alt mb-8 overflow-hidden">
            <div className="font-heading text-[11px] font-bold tracking-[0.15em] uppercase text-accent mb-4">
              Krój tekstowy
            </div>
            <div className="text-4xl sm:text-5xl font-normal text-primary leading-none">
              Lato
            </div>
            <div className="text-base sm:text-xl text-text-light mt-2 break-all">
              AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz
            </div>
            <div className="text-base sm:text-xl text-text-light">
              ĄąĆćĘęŁłŃńÓóŚśŹźŻż 0123456789
            </div>
            <div className="mt-4 text-[13px] text-text-light">
              <strong>Google Fonts:</strong> Lato &nbsp;|&nbsp;{' '}
              <strong>Subsets:</strong> Latin, Latin Extended
              <br />
              <strong>Wagi:</strong> Regular (400) — tekst główny, opisy
              &nbsp;|&nbsp; Bold (700) — wyróżnienia, numery telefonów, przyciski
            </div>
          </div>

          <h3 className="font-heading text-base font-bold text-primary mb-4">
            Skala typograficzna
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  {['Zastosowanie', 'Krój', 'Waga', 'Rozmiar'].map((h) => (
                    <th
                      key={h}
                      className="text-left font-heading font-semibold text-[11px] tracking-[0.1em] uppercase text-text-light p-2 border-b-2 border-bg-alt"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="[&_td]:p-2.5 [&_td]:border-b [&_td]:border-bg-alt">
                <tr>
                  <td>Hero heading</td>
                  <td>Montserrat</td>
                  <td>800 (ExtraBold)</td>
                  <td>36–48px</td>
                </tr>
                <tr>
                  <td>Nagłówek strony (H1)</td>
                  <td>Montserrat</td>
                  <td>700 (Bold)</td>
                  <td>30–36px</td>
                </tr>
                <tr>
                  <td>Nagłówek sekcji (H2)</td>
                  <td>Montserrat</td>
                  <td>600–700</td>
                  <td>24–28px</td>
                </tr>
                <tr>
                  <td>Podsekcja (H3)</td>
                  <td>Montserrat</td>
                  <td>600</td>
                  <td>18–20px</td>
                </tr>
                <tr>
                  <td>Tekst główny</td>
                  <td>Lato</td>
                  <td>400 (Regular)</td>
                  <td>16px</td>
                </tr>
                <tr>
                  <td>Tekst pomocniczy</td>
                  <td>Lato</td>
                  <td>400</td>
                  <td>14px</td>
                </tr>
                <tr>
                  <td>Przyciski / CTA</td>
                  <td>Lato</td>
                  <td>700 (Bold)</td>
                  <td>14–16px</td>
                </tr>
                <tr>
                  <td>Etykiety, podpisy</td>
                  <td>Montserrat</td>
                  <td>500–600</td>
                  <td>11–12px</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 04. Zasady stosowania */}
        <section className="py-14 border-b border-bg-alt">
          <SectionHeader
            number="04"
            title="Zasady stosowania"
            desc="Zasady zapewniające spójność marki we wszystkich materiałach."
          />

          <h3 className="font-heading text-base font-bold text-primary mb-4">
            Kolor — proporcje i zastosowanie
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <RuleCard type="do">
              Navy (Primary) stanowi maks. <strong>30%</strong> powierzchni
              wizualnej. Orange (Accent) wyłącznie na przyciskach CTA, numerach
              telefonów i kluczowych wyróżnieniach.
            </RuleCard>
            <RuleCard type="dont">
              Używanie koloru orange jako tła sekcji lub dużych powierzchni.
              Stosowanie czystego czarnego (#000) na tekst lub czystego białego
              (#FFF) jako tła strony.
            </RuleCard>
          </div>

          <h3 className="font-heading text-base font-bold text-primary mb-4">
            Logo — zasady
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <RuleCard type="do">
              Stosuj logo w wariantach pokazanych powyżej. Zawsze zachowuj strefę
              ochronną. Logo zawsze w pionie — „BARYZA" nad „Tynki Maszynowe".
            </RuleCard>
            <RuleCard type="dont">
              Nie zmieniaj proporcji logo. Nie dodawaj efektów (cień, gradient,
              obrys). Nie umieszczaj logo na zdjęciach o niskim kontraście bez
              tła/podkładu. Nie zmieniaj kolorów logo na niestandardowe.
            </RuleCard>
          </div>

          <h3 className="font-heading text-base font-bold text-primary mb-4">
            Typografia — zasady
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <RuleCard type="do">
              Montserrat tylko na nagłówki i etykiety. Lato na tekst główny, opisy
              i przyciski. Zawsze ładuj subset{' '}
              <code className="bg-bg-alt px-1 py-0.5 rounded text-[13px]">
                latin-ext
              </code>{' '}
              dla polskich znaków.
            </RuleCard>
            <RuleCard type="dont">
              Nie zastępuj krojów innymi fontami. Nie stosuj więcej niż 2 wag
              jednego kroju na jednej stronie/materiale. Nie używaj tekstu
              mniejszego niż 11px.
            </RuleCard>
          </div>
        </section>

        {/* 05. Wizytówka */}
        <section className="py-14 border-b border-bg-alt">
          <SectionHeader
            number="05"
            title="Przykład zastosowania — Wizytówka"
            desc="Propozycja wizytówki zachowująca standardy brandingu. Format 90 × 50 mm."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[700px]">
            {/* Przód */}
            <div className="relative rounded-lg shadow-xl bg-primary text-white overflow-hidden">
              <div className="aspect-[9/5]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <div className="font-heading font-bold text-[28px] tracking-tight">
                  BARYZA
                </div>
                <div className="font-heading font-medium text-[9px] tracking-widest uppercase text-secondary-light mt-0.5">
                  Tynki Maszynowe
                </div>
                <div className="w-10 h-0.5 bg-accent mt-4" />
              </div>
            </div>
            {/* Tył */}
            <div className="relative rounded-lg shadow-xl bg-white overflow-hidden">
              <div className="aspect-[9/5]" />
              <div className="absolute inset-0 flex flex-col justify-center px-6 py-5">
                <div className="font-heading font-bold text-sm text-primary">
                  Radosław Baryza
                </div>
                <div className="text-[11px] text-secondary mb-3">Właściciel</div>
                <div className="w-8 h-0.5 bg-accent mb-3" />
                <div className="text-[10px] text-text-light leading-5">
                  <span className="text-accent font-bold">T</span> +48 XXX XXX
                  XXX
                  <br />
                  <span className="text-accent font-bold">E</span>{' '}
                  kontakt@tynkibaryza.pl
                  <br />
                  <span className="text-accent font-bold">W</span> tynkibaryza.pl
                </div>
                <div className="text-[10px] text-text-light leading-5 mt-2">
                  Bytoń 64L
                  <br />
                  woj. kujawsko-pomorskie
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 06. Dane firmowe */}
        <section className="py-14">
          <SectionHeader
            number="06"
            title="Dane firmowe"
            desc="Informacje do umieszczania na materiałach drukowanych i cyfrowych."
          />

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse [&_td]:p-2.5 [&_td]:border-b [&_td]:border-bg-alt [&_td]:align-top">
              <tbody>
                {[
                  ['Nazwa firmy', 'Firma Radosław Baryza — Tynki Maszynowe'],
                  ['Właściciel', 'Radosław Baryza'],
                  ['Adres', 'Bytoń 64L, woj. kujawsko-pomorskie'],
                  ['NIP', '{NIP} — do uzupełnienia'],
                  ['Telefon', '+48 XXX XXX XXX — do uzupełnienia'],
                  ['Email', '{EMAIL} — do uzupełnienia'],
                  ['Strona www', 'tynkibaryza.pl'],
                  [
                    'Obszar działania',
                    'Woj. kujawsko-pomorskie i część woj. wielkopolskiego',
                  ],
                  ['Doświadczenie', '15 lat doświadczenia, 9 lat na rynku'],
                ].map(([label, value]) => (
                  <tr key={label}>
                    <td className="w-[180px]">
                      <strong>{label}</strong>
                    </td>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {/* Stopka dokumentu */}
      <div className="bg-primary text-secondary-light py-8 px-6 text-center text-[13px] mt-6">
        BARYZA Tynki Maszynowe — Przewodnik brandingowy &nbsp;|&nbsp; Wersja 1.0
        &nbsp;|&nbsp; Kwiecień 2026
      </div>
    </div>
  );
}
