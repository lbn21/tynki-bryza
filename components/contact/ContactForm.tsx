'use client';

import { useState, useRef, useEffect, type FormEvent } from 'react';
import { validateContactForm, type ContactFormResponse } from '@/lib/contact';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [retrySeconds, setRetrySeconds] = useState(0);
  const loadedAt = useRef(0);
  const retryTimer = useRef<ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    loadedAt.current = Date.now();
    return () => { if (retryTimer.current) clearInterval(retryTimer.current); };
  }, []);

  function startCountdown(ms: number) {
    if (retryTimer.current) clearInterval(retryTimer.current);
    setRetrySeconds(Math.ceil(ms / 1000));
    retryTimer.current = setInterval(() => {
      setRetrySeconds(prev => {
        if (prev <= 1) {
          clearInterval(retryTimer.current!);
          retryTimer.current = null;
          setSubmitError(null);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data: Record<string, unknown> = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      service: formData.get('service'),
      area: formData.get('area'),
      message: formData.get('message'),
      consent: !!formData.get('consent'),
    };

    // Client-side validation for instant feedback
    const fieldErrors = validateContactForm(data);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setSubmitError(null);
    setSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          website: formData.get('website'), // honeypot
          _t: loadedAt.current,
        }),
      });

      const result: ContactFormResponse = await res.json();

      if (res.ok && result.success) {
        setSubmitted(true);
        return;
      }

      if (result.fieldErrors) {
        setErrors(result.fieldErrors);
      } else if (result.error === 'rate_limited' && result.retryAfterMs) {
        startCountdown(result.retryAfterMs);
        setSubmitError('rate_limited');
      } else {
        setSubmitError(result.error ?? 'Wystąpił błąd. Spróbuj ponownie później.');
      }
    } catch {
      setSubmitError('Nie udało się wysłać wiadomości. Sprawdź połączenie internetowe.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="space-y-5">
        <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="font-heading font-semibold text-xl text-primary mb-2">
            Dziękujemy!
          </h3>
          <p className="text-text-light">
            Twoje zapytanie zostało wysłane. Odpowiemy w ciągu 24 godzin.
          </p>
        </div>
      </div>
    );
  }

  const inputClasses = `w-full px-4 py-3 rounded-lg border border-bg-alt bg-white text-text text-base focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors${submitting ? ' opacity-50 pointer-events-none' : ''}`;

  return (
    <form onSubmit={handleSubmit} noValidate>
    <fieldset disabled={submitting} className="space-y-5">
      {/* Honeypot — hidden from humans, bots fill it */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', opacity: 0 }}>
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>

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
          className={inputClasses}
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
          className={`${inputClasses} placeholder:text-text-light/50`}
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
          className={inputClasses}
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
          className={`${inputClasses} appearance-none pr-10`}
        >
          <option value="">Wybierz usługę...</option>
          <option value="gipsowe">Tynki gipsowe</option>
          <option value="gipsowe-twarde">Tynki gipsowe twarde</option>
          <option value="cementowo-wapienne">Tynki cementowo-wapienne</option>
          <option value="hybrydowe">Tynki hybrydowe</option>
          <option value="gliniane">Tynki gliniane</option>
          <option value="szpachlowanie">Szpachlowanie z malowaniem</option>
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
          className={inputClasses}
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
          className={`${inputClasses} resize-y`}
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

      {submitError && (
        <div className="rounded-lg px-4 py-3.5 bg-accent/10 border border-accent/20 text-sm text-text">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>
              {submitError === 'rate_limited'
                ? `Wysłałeś już wiadomość. Spróbuj ponownie za ${Math.floor(retrySeconds / 60)}:${String(retrySeconds % 60).padStart(2, '0')}.`
                : submitError}
            </span>
          </div>
          {submitError === 'rate_limited' && (
            <p className="text-text-light text-xs mt-1.5 ml-6">
              Limit dotyczy adresu IP, nie danych w formularzu.
            </p>
          )}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting || retrySeconds > 0}
        className="w-full bg-accent text-white py-3.5 rounded-lg font-heading font-semibold text-lg hover:bg-accent-hover transition-colors min-h-[48px] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {submitting ? (
          <>
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Wysyłanie...
          </>
        ) : 'Wyślij zapytanie'}
      </button>

      <p className="text-text-light text-sm text-center">
        Odpowiadamy w ciągu 24 godzin
      </p>
    </fieldset>
    </form>
  );
}
