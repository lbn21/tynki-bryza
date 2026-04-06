import { siteConfig } from '@/lib/site-config';

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Phone */}
      <div>
        <h3 className="font-heading font-semibold text-lg text-primary mb-2">Telefon</h3>
        <a
          href={`tel:${siteConfig.phone.raw}`}
          className="flex items-center gap-3 text-accent font-bold text-xl hover:text-accent-hover transition-colors"
          aria-label={`Zadzwoń: ${siteConfig.phone.display}`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          {siteConfig.phone.display}
        </a>
      </div>

      {/* Email */}
      <div>
        <h3 className="font-heading font-semibold text-lg text-primary mb-2">Email</h3>
        <a
          href={`mailto:${siteConfig.email}`}
          className="flex items-center gap-3 text-text hover:text-accent transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          {siteConfig.email}
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
            {siteConfig.address.street}<br />
            {siteConfig.address.postalCode} Bytoń<br />
            {siteConfig.address.region}
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
            {/* {PLACEHOLDER} - uzupełnić godziny pracy */}
            <p>Pon–Pt: 7:00–17:00</p>
            <p>Sob: 8:00–13:00</p>
          </div>
        </div>
      </div>

      {/* Service area */}
      <div className="bg-bg-alt rounded-xl p-6">
        <h3 className="font-heading font-semibold text-lg text-primary mb-2">Teren działania</h3>
        <p className="text-text-light leading-relaxed">
          Obsługujemy teren województwa kujawsko-pomorskiego oraz części
          województwa wielkopolskiego.
        </p>
      </div>
    </div>
  );
}
