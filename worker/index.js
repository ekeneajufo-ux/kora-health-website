/**
 * Cloudflare Worker for korahealthafrica.com
 * - POST /api/contact  -> validates a demo/partnership request and emails it to
 *   info@korahealthafrica.com and ekene.ajufo@gmail.com (via Resend).
 * - everything else     -> served from the static export (the ASSETS binding).
 */

const RECIPIENTS = ['info@korahealthafrica.com', 'ekene.ajufo@gmail.com'];
const FROM = 'Kora Health <demo@korahealthafrica.com>';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/contact') {
      return handleContact(request, env);
    }

    // Static site
    return env.ASSETS.fetch(request);
  },
};

async function handleContact(request, env) {
  if (request.method !== 'POST') {
    return json({ error: 'Method not allowed' }, 405);
  }

  let data;
  try {
    data = await request.json();
  } catch {
    return json({ error: 'Invalid request.' }, 400);
  }

  // Honeypot — bots fill hidden fields; humans never see it.
  if (data.company_website) {
    return json({ ok: true });
  }

  const name = str(data.name);
  const email = str(data.email);
  const organization = str(data.organization);

  if (!name || !email || !organization) {
    return json({ error: 'Please include your name, email, and organization.' }, 400);
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return json({ error: 'Please enter a valid email address.' }, 400);
  }

  const role = str(data.role);
  const country = str(data.country);
  const phone = str(data.phone);
  const interest = str(data.interest);
  const message = str(data.message);

  const subject = `New Demo Request — ${name}${organization ? ', ' + organization : ''}`;

  const rows = [
    ['Name', name],
    ['Email', email],
    ['Organization', organization],
    ['Role / Title', role],
    ['Country', country],
    ['Phone', phone],
    ['Interest', interest],
  ].filter(([, v]) => v);

  const text =
    rows.map(([k, v]) => `${k}: ${v}`).join('\n') +
    (message ? `\n\nMessage:\n${message}` : '') +
    `\n\n— Submitted from korahealthafrica.com`;

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#0F172A;max-width:560px">
      <h2 style="color:#0A1A2F;margin:0 0 16px">New demo request — Kora Health</h2>
      <table style="border-collapse:collapse;width:100%">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:6px 12px;background:#F1F5F9;font-weight:600;width:160px">${esc(
                k
              )}</td><td style="padding:6px 12px">${esc(v)}</td></tr>`
          )
          .join('')}
      </table>
      ${
        message
          ? `<p style="margin:16px 0 4px;font-weight:600">Message</p><p style="white-space:pre-wrap;margin:0">${esc(
              message
            )}</p>`
          : ''
      }
      <p style="margin-top:24px;color:#64748B;font-size:12px">Submitted from korahealthafrica.com</p>
    </div>`;

  if (!env.RESEND_API_KEY) {
    return json(
      { error: 'Email service is not configured yet. Please email info@korahealthafrica.com directly.' },
      503
    );
  }

  const resp = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: FROM,
      to: RECIPIENTS,
      reply_to: email,
      subject,
      text,
      html,
    }),
  });

  if (!resp.ok) {
    const detail = await resp.text();
    console.log('Resend error', resp.status, detail);
    return json(
      { error: 'We could not send your request. Please email info@korahealthafrica.com directly.' },
      502
    );
  }

  return json({ ok: true });
}

function str(v) {
  return (v == null ? '' : String(v)).trim();
}

function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
