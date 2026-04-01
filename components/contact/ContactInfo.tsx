export default function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Phone */}
      <div>
        <h3 className="font-heading font-semibold text-lg text-primary mb-2">Telefon</h3>
        {/* {TELEFON} - uzupe\u0142ni\u0107 numer telefonu */}
        <a
          href="tel:+48XXXXXXXXX"
          className="flex items-center gap-3 text-accent font-bold text-xl hover:text-accent-hover transition-colors"
          aria-label="Zadzwo\u0144: +48 XXX XXX XXX"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          +48 XXX XXX XXX
        </a>
      </div>

      {/* Email */}
      <div>
        <h3 className="font-heading font-semibold text-lg text-primary mb-2">Email</h3>
        {/* {EMAIL} - uzupe\u0142ni\u0107 adres email */}
        <a
          href="mailto:kontakt@tynkibaryza.pl"
          className="flex items-center gap-3 text-text hover:text-accent transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          {'{EMAIL}'}
        </a>
      </div>

      {/* Address */}
      <div>
        <h3 className="font-heading font-semibold text-lg text-primary mb-2">Adres</h3>
        <div className="flex items-start gap-3 text-text-light">
          <svg className="w-6 h-6 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <address className="not-italic">
            Byto\u0144 64L<br />
            woj. kujawsko-pomorskie
          </address>
        </div>
      </div>

      {/* Working hours */}
      <div>
        <h3 className="font-heading font-semibold text-lg text-primary mb-2">Godziny pracy</h3>
        <div className="flex items-start gap-3 text-text-light">
          <svg className="w-6 h-6 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            {/* {PLACEHOLDER} - uzupe\u0142ni\u0107 godziny pracy */}
            <p>Pon\u2013Pt: 7:00\u201317:00</p>
            <p>Sob: 8:00\u201313:00</p>
          </div>
        </div>
      </div>

      {/* Service area */}
      <div className="bg-bg-alt rounded-xl p-6">
        <h3 className="font-heading font-semibold text-lg text-primary mb-2">Teren dzia\u0142ania</h3>
        <p className="text-text-light leading-relaxed">
          Obs\u0142ugujemy teren wojew\u00f3dztwa kujawsko-pomorskiego oraz cz\u0119\u015bci
          wojew\u00f3dztwa wielkopolskiego.
        </p>
      </div>
    </div>
  );
}
