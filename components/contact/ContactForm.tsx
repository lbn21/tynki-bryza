'use client';

import { useState, type FormEvent } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (form: FormData) => {
    const errs: Record<string, string> = {};
    if (!form.get('name')) errs.name = 'Imię i nazwisko jest wymagane';
    if (!form.get('phone')) errs.phone = 'Numer telefonu jest wymagany';
    const email = form.get('email') as string;
    if (!email) {
      errs.email = 'Adres email jest wymagany';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Podaj prawidłowy adres email';
    }
    if (!form.get('consent')) errs.consent = 'Zgoda jest wymagana';
    return errs;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const errs = validate(formData);

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="font-heading font-semibold text-xl text-primary mb-2">
          Dziękujemy!
        </h3>
        <p className="text-text-light">
          Twoje zapytanie zostało wysłane. Odpowiemy w ciągu 24 godzin.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Imię i nazwisko */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-text mb-1.5">
          Imię i nazwisko <span className="text-accent">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 rounded-lg border border-bg-alt bg-white text-text text-base focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      {/* Telefon */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-text mb-1.5">
          Telefon <span className="text-accent">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          placeholder="+48 XXX XXX XXX"
          className="w-full px-4 py-3 rounded-lg border border-bg-alt bg-white text-text text-base focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors placeholder:text-text-light/50"
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-text mb-1.5">
          Email <span className="text-accent">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-lg border border-bg-alt bg-white text-text text-base focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      {/* Rodzaj usługi */}
      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-text mb-1.5">
          Rodzaj usługi
        </label>
        <div className="relative">
        <select
          id="service"
          name="service"
          className="w-full appearance-none px-4 py-3 pr-10 rounded-lg border border-bg-alt bg-white text-text text-base focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
        >
          <option value="">Wybierz usługę...</option>
          <option value="gipsowe">Tynki gipsowe</option>
          <option value="gipsowe-twarde">Tynki gipsowe twarde</option>
          <option value="cementowo-wapienne">Tynki cementowo-wapienne</option>
          <option value="hybrydowe">Tynki hybrydowe</option>
          <option value="gliniane">Tynki gliniane</option>
          <option value="inne">Inne</option>
        </select>
        <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
        </div>
      </div>

      {/* Metraż */}
      <div>
        <label htmlFor="area" className="block text-sm font-semibold text-text mb-1.5">
          Przybliżony metraż (m²)
        </label>
        <input
          type="number"
          id="area"
          name="area"
          min="0"
          className="w-full px-4 py-3 rounded-lg border border-bg-alt bg-white text-text text-base focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
        />
      </div>

      {/* Wiadomość */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-text mb-1.5">
          Wiadomość
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-bg-alt bg-white text-text text-base focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors resize-y"
        />
      </div>

      {/* RODO consent */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="consent"
            required
            className="mt-1 w-5 h-5 accent-accent shrink-0"
          />
          <span className="text-sm text-text-light leading-relaxed">
            Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z{' '}
            <a href="/polityka-prywatnosci" className="text-accent underline hover:text-accent-hover">
              Polityką prywatności
            </a>{' '}
            w celu udzielenia odpowiedzi na zapytanie. <span className="text-accent">*</span>
          </span>
        </label>
        {errors.consent && <p className="text-red-500 text-sm mt-1">{errors.consent}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-accent text-white py-3.5 rounded-lg font-heading font-semibold text-lg hover:bg-accent-hover transition-colors min-h-[48px] cursor-pointer"
      >
        Wyślij zapytanie
      </button>

      <p className="text-text-light text-sm text-center">
        Odpowiadamy w ciągu 24 godzin
      </p>
    </form>
  );
}
