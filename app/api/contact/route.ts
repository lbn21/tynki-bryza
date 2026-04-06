import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import { validateContactForm } from '@/lib/contact';

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

function getRatelimit() {
  return new Ratelimit({
    redis: new Redis({
      url: process.env.KV_REST_API_URL!,
      token: process.env.KV_REST_API_TOKEN!,
    }),
    limiter: Ratelimit.slidingWindow(1, '15 m'),
    prefix: 'contact',
  });
}

const SERVICE_LABELS: Record<string, string> = {
  gipsowe: 'Tynki gipsowe',
  'gipsowe-twarde': 'Tynki gipsowe twarde',
  'cementowo-wapienne': 'Tynki cementowo-wapienne',
  hybrydowe: 'Tynki hybrydowe',
  gliniane: 'Tynki gliniane',
  szpachlowanie: 'Szpachlowanie z malowaniem',
  inne: 'Inne',
};

function stripHtml(str: string): string {
  return str.replace(/<[^>]*>/g, '').trim();
}

function getIp(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return req.headers.get('x-real-ip') ?? 'unknown';
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Honeypot — bots fill hidden field, return fake success
    if (body.website) {
      return NextResponse.json({ success: true });
    }

    // Time-based check — reject if submitted < 3s after page load
    const loadedAt = Number(body._t);
    if (loadedAt && Date.now() - loadedAt < 3000) {
      return NextResponse.json(
        { success: false, error: 'Zbyt szybkie wysłanie formularza. Spróbuj ponownie.' },
        { status: 429 },
      );
    }

    // Rate limiting
    const ip = getIp(req);
    const { success: allowed, reset } = await getRatelimit().limit(ip);
    if (!allowed) {
      const retryAfterMs = Math.max(0, reset - Date.now());
      return NextResponse.json(
        { success: false, error: 'rate_limited', retryAfterMs },
        { status: 429 },
      );
    }

    // Server-side validation
    const fieldErrors = validateContactForm(body);
    if (Object.keys(fieldErrors).length > 0) {
      return NextResponse.json(
        { success: false, fieldErrors },
        { status: 400 },
      );
    }

    // Sanitize inputs
    const name = stripHtml(String(body.name));
    const phone = stripHtml(String(body.phone));
    const email = stripHtml(String(body.email));
    const service = body.service ? stripHtml(String(body.service)) : '';
    const area = body.area ? stripHtml(String(body.area)) : '';
    const message = body.message ? stripHtml(String(body.message)) : '';

    const serviceLabel = service ? (SERVICE_LABELS[service] ?? service) : '—';
    const timestamp = new Date().toLocaleString('pl-PL', { timeZone: 'Europe/Warsaw' });

    // Send email
    const { error } = await getResend().emails.send({
      from: 'Formularz kontaktowy <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL_TO!,
      replyTo: email,
      subject: `Nowe zapytanie — ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
          <h2 style="color:#1a2744;border-bottom:2px solid #e8742d;padding-bottom:8px">
            Nowe zapytanie z formularza kontaktowego
          </h2>
          <table style="width:100%;border-collapse:collapse;margin:16px 0">
            <tr>
              <td style="padding:8px 12px;font-weight:bold;background:#f4f4f5;border:1px solid #e4e4e7;width:160px">Imię i nazwisko</td>
              <td style="padding:8px 12px;border:1px solid #e4e4e7">${name}</td>
            </tr>
            <tr>
              <td style="padding:8px 12px;font-weight:bold;background:#f4f4f5;border:1px solid #e4e4e7">Telefon</td>
              <td style="padding:8px 12px;border:1px solid #e4e4e7">${phone}</td>
            </tr>
            <tr>
              <td style="padding:8px 12px;font-weight:bold;background:#f4f4f5;border:1px solid #e4e4e7">Email</td>
              <td style="padding:8px 12px;border:1px solid #e4e4e7"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding:8px 12px;font-weight:bold;background:#f4f4f5;border:1px solid #e4e4e7">Usługa</td>
              <td style="padding:8px 12px;border:1px solid #e4e4e7">${serviceLabel}</td>
            </tr>
            <tr>
              <td style="padding:8px 12px;font-weight:bold;background:#f4f4f5;border:1px solid #e4e4e7">Metraż</td>
              <td style="padding:8px 12px;border:1px solid #e4e4e7">${area ? `${area} m²` : '—'}</td>
            </tr>
            <tr>
              <td style="padding:8px 12px;font-weight:bold;background:#f4f4f5;border:1px solid #e4e4e7">Wiadomość</td>
              <td style="padding:8px 12px;border:1px solid #e4e4e7;white-space:pre-wrap">${message || '—'}</td>
            </tr>
          </table>
          <p style="color:#71717a;font-size:12px;margin-top:24px">
            Wysłano: ${timestamp} | IP: ${ip}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { success: false, error: 'Nie udało się wysłać wiadomości. Spróbuj ponownie później.' },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json(
      { success: false, error: 'Wystąpił błąd serwera. Spróbuj ponownie później.' },
      { status: 500 },
    );
  }
}
