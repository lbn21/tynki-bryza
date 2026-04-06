export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  service?: string;
  area?: string;
  message?: string;
  consent: boolean;
}

export interface ContactFormResponse {
  success: boolean;
  error?: string;
  fieldErrors?: Record<string, string>;
  retryAfterMs?: number;
}

const VALID_SERVICES = [
  'gipsowe',
  'gipsowe-twarde',
  'cementowo-wapienne',
  'hybrydowe',
  'gliniane',
  'szpachlowanie',
  'inne',
] as const;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(
  data: Record<string, unknown>,
): Record<string, string> {
  const errors: Record<string, string> = {};

  const name = String(data.name ?? '').trim();
  if (!name) {
    errors.name = 'Imię i nazwisko jest wymagane';
  } else if (name.length > 100) {
    errors.name = 'Imię i nazwisko może mieć maksymalnie 100 znaków';
  }

  const phone = String(data.phone ?? '').trim();
  if (!phone) {
    errors.phone = 'Numer telefonu jest wymagany';
  } else if (phone.length > 20) {
    errors.phone = 'Numer telefonu może mieć maksymalnie 20 znaków';
  }

  const email = String(data.email ?? '').trim();
  if (!email) {
    errors.email = 'Adres email jest wymagany';
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = 'Podaj prawidłowy adres email';
  } else if (email.length > 254) {
    errors.email = 'Adres email jest za długi';
  }

  const service = data.service ? String(data.service).trim() : '';
  if (service && !(VALID_SERVICES as readonly string[]).includes(service)) {
    errors.service = 'Wybierz prawidłową usługę';
  }

  const area = data.area ? String(data.area).trim() : '';
  if (area && (isNaN(Number(area)) || Number(area) < 0)) {
    errors.area = 'Podaj prawidłowy metraż';
  }

  const message = data.message ? String(data.message).trim() : '';
  if (message.length > 2000) {
    errors.message = 'Wiadomość może mieć maksymalnie 2000 znaków';
  }

  if (!data.consent) {
    errors.consent = 'Zgoda jest wymagana';
  }

  return errors;
}
