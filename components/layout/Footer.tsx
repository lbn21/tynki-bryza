import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1: Logo + description */}
          <div>
            <div className="mb-4">
              <span className="font-heading font-bold text-2xl tracking-tight">BARYZA</span>
              <span className="block font-heading font-medium text-sm text-secondary-light tracking-widest uppercase">
                Tynki Maszynowe
              </span>
            </div>
            <p className="text-secondary-light leading-relaxed text-sm mb-4">
              Profesjonalne tynki maszynowe z ponad 15-letnim do\u015bwiadczeniem.
              Dzia\u0142amy na terenie wojew\u00f3dztwa kujawsko-pomorskiego
              i cz\u0119\u015bci wojew\u00f3dztwa wielkopolskiego.
            </p>
            {/* {NIP} - uzupe\u0142ni\u0107 NIP firmy */}
            <p className="text-secondary-light text-sm">NIP: {'{NIP}'}</p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Nawigacja</h3>
            <nav aria-label="Nawigacja w stopce">
              <ul className="space-y-2">
                {[
                  { href: '/o-nas', label: 'O nas' },
                  { href: '/uslugi', label: 'Us\u0142ugi' },
                  { href: '/realizacje', label: 'Realizacje' },
                  { href: '/kontakt', label: 'Kontakt' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-secondary-light hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Kontakt</h3>
            <address className="not-italic space-y-3 text-secondary-light text-sm">
              <p className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Byto\u0144 64L, woj. kujawsko-pomorskie
              </p>
              {/* {TELEFON} - uzupe\u0142ni\u0107 numer telefonu */}
              <p className="flex items-center gap-2">
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+48XXXXXXXXX" className="hover:text-white transition-colors">
                  +48 XXX XXX XXX
                </a>
              </p>
              {/* {EMAIL} - uzupe\u0142ni\u0107 adres email */}
              <p className="flex items-center gap-2">
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:kontakt@tynkibaryza.pl" className="hover:text-white transition-colors">
                  {'{EMAIL}'}
                </a>
              </p>
              <p className="text-xs mt-4">
                Obs\u0142ugujemy teren wojew\u00f3dztwa kujawsko-pomorskiego
                oraz cz\u0119\u015bci wojew\u00f3dztwa wielkopolskiego
              </p>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-secondary-light">
          <p>&copy; 2026 Firma Rados\u0142aw Baryza. Wszelkie prawa zastrze\u017cone.</p>
          <div className="flex gap-4">
            <Link href="/polityka-prywatnosci" className="hover:text-white transition-colors">
              Polityka prywatno\u015bci
            </Link>
            <Link href="/polityka-cookies" className="hover:text-white transition-colors">
              Polityka cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
