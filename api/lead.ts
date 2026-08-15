import type { VercelRequest, VercelResponse } from '@vercel/node';

declare const process: {
  env: {
    TELEGRAM_BOT_TOKEN?: string;
    TELEGRAM_CHAT_IDS?: string;
  };
};

const TELEGRAM_API = 'https://api.telegram.org';

type LeadBody = {
  website?: string;
  what_build?: string;
  niche?: string;
  stage?: string;
  friction?: string;
  budget?: string;
  email?: string;
  telegram?: string;
};

function escapeHtml(value: unknown) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function formatLeadMessage(body: LeadBody) {
  const rows = [
    ['Website/product', body.website],
    ['Starting option', body.what_build],
    ['Market/audience', body.niche],
    ['Desired deadline', body.stage],
    ['Project task', body.friction],
    ['Budget', body.budget],
    ['Email', body.email],
    ['Telegram', body.telegram],
  ];

  const details = rows
    .filter(([, value]) => value)
    .map(([label, value]) => `<b>${label}:</b> ${escapeHtml(value)}`)
    .join('\n');

  return `<b>New SAV.AGENCY lead</b>\n\n${details}\n\n<b>Source:</b> sav-agency.vercel.app`;
}

async function notifyTelegram(body: LeadBody) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatIds = process.env.TELEGRAM_CHAT_IDS?.split(',').map((id) => id.trim()).filter(Boolean) || [];

  if (!token || chatIds.length === 0) {
    return { configured: false, delivered: false };
  }

  const message = formatLeadMessage(body);
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
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.status(200).end();
    return;
  }

  // GET/HEAD - health check
  if (req.method === 'GET' || req.method === 'HEAD') {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
    return;
  }

  // Only allow POST
  if (req.method !== 'POST') {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(405).json({ error: 'Method not allowed. Use POST.' });
    return;
  }

  const body: LeadBody = req.body || {};
  const { email } = body;

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(400).json({ error: 'Valid email is required' });
    return;
  }

  const telegram = await notifyTelegram(body);

  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
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
