import type { VercelRequest, VercelResponse } from '@vercel/node';

declare const process: {
  env: {
    TELEGRAM_BOT_TOKEN?: string;
    TELEGRAM_CHAT_IDS?: string;
  };
};

const TELEGRAM_API = 'https://api.telegram.org';

// Telegram rejects messages over 4096 characters, so every field is capped before sending.
const FIELD_LIMITS = {
  website: 300,
  what_build: 120,
  niche: 300,
  stage: 160,
  friction: 2000,
  budget: 160,
  email: 254,
  telegram: 64,
} as const;

type LeadField = keyof typeof FIELD_LIMITS;
type Lead = Partial<Record<LeadField, string>>;

const FIELD_LABELS: Array<[LeadField, string]> = [
  ['website', 'Website/product'],
  ['what_build', 'Starting option'],
  ['niche', 'Market/audience'],
  ['stage', 'Desired deadline'],
  ['friction', 'Project task'],
  ['budget', 'Budget'],
  ['email', 'Email'],
  ['telegram', 'Telegram'],
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function readBody(req: VercelRequest): Record<string, unknown> {
  const raw = req.body;
  if (!raw) return {};
  if (typeof raw === 'string') {
    try {
      const parsed: unknown = JSON.parse(raw);
      return parsed && typeof parsed === 'object' ? (parsed as Record<string, unknown>) : {};
    } catch {
      return {};
    }
  }
  return typeof raw === 'object' ? (raw as Record<string, unknown>) : {};
}

function cleanLead(body: Record<string, unknown>): Lead {
  const lead: Lead = {};
  for (const [field, limit] of Object.entries(FIELD_LIMITS) as Array<[LeadField, number]>) {
    const value = body[field];
    if (typeof value !== 'string') continue;
    const trimmed = value.trim();
    if (trimmed) lead[field] = trimmed.length > limit ? `${trimmed.slice(0, limit)}…` : trimmed;
  }
  return lead;
}

function formatLeadMessage(lead: Lead, source: string) {
  const details = FIELD_LABELS
    .filter(([field]) => lead[field])
    .map(([field, label]) => `<b>${label}:</b> ${escapeHtml(lead[field] as string)}`)
    .join('\n');

  return `<b>New SAV.AGENCY lead</b>\n\n${details}\n\n<b>Source:</b> ${escapeHtml(source)}`;
}

async function notifyTelegram(lead: Lead, source: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatIds = process.env.TELEGRAM_CHAT_IDS?.split(',').map((id) => id.trim()).filter(Boolean) || [];

  if (!token || chatIds.length === 0) {
    return { configured: false, delivered: false };
  }

  const message = formatLeadMessage(lead, source);
  const results = await Promise.allSettled(
    chatIds.map((chatId) =>
      fetch(`${TELEGRAM_API}/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'HTML',
          disable_web_page_preview: true,
        }),
      })
    )
  );

  return {
    configured: true,
    delivered: results.some((result) => result.status === 'fulfilled' && result.value.ok),
  };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store');

  // GET/HEAD - health check
  if (req.method === 'GET' || req.method === 'HEAD') {
    res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
    return;
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'GET, HEAD, POST');
    res.status(405).json({ error: 'Method not allowed. Use POST.' });
    return;
  }

  const body = readBody(req);

  // Honeypot: real visitors never see this field. Answer as if accepted so bots do not retry.
  if (typeof body.company === 'string' && body.company.trim()) {
    res.status(200).json({ success: true });
    return;
  }

  const lead = cleanLead(body);

  // A truncated address is longer than the limit, so oversized emails are rejected rather than cut.
  if (!lead.email || lead.email.length > FIELD_LIMITS.email || !EMAIL_PATTERN.test(lead.email)) {
    res.status(400).json({ error: 'Valid email is required' });
    return;
  }

  const host = typeof req.headers.host === 'string' ? req.headers.host : 'sav-agency.vercel.app';
  const telegram = await notifyTelegram(lead, host);

  if (!telegram.configured) {
    res.status(503).json({ error: 'Lead notification is not configured' });
    return;
  }

  if (!telegram.delivered) {
    res.status(502).json({ error: 'Lead notification failed' });
    return;
  }

  res.status(200).json({ success: true });
}
