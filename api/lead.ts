import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Handle OPTIONS for CORS preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  // GET/HEAD - health check
  if (req.method === 'GET' || req.method === 'HEAD') {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
  }

  // Only allow POST
  if (req.method !== 'POST') {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  // Catch any unexpected errors at top level
  try {
    const body = req.body || {};
    const { website, what_build, niche, stage, friction, budget, email, telegram } = body;

    // Validate email
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      res.setHeader('Content-Type', 'application/json');
      return res.status(400).json({ error: 'Valid email is required' });
    }

    const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
    const telegramChatId = process.env.TELEGRAM_CHAT_ID;

    // Log env status (without exposing values)
    if (!telegramToken || !telegramChatId) {
      console.log('Lead API: Telegram env vars not configured, skipping notification');
    }

    // If Telegram env vars are configured, send notification
    if (telegramToken && telegramChatId) {
      const whatBuildLabel = what_build
        ? what_build.replace('option_', '').replace(/_/g, ' ')
        : 'Не вказано';

      const message = `🔥 Новий лід

📧 Email: ${email}
${telegram ? `✈️ Telegram: @${telegram.replace('@', '')}` : ''}
${website ? `🌐 Сайт: ${website}` : ''}
🏗️ Що будуємо: ${whatBuildLabel}
${niche ? `📊 Ніша: ${niche}` : ''}
${stage ? `📈 Стадія: ${stage}` : ''}
${friction ? `⚠️ Проблема: ${friction}` : ''}
${budget ? `💰 Бюджет: ${budget}` : ''}`.trim();

      const telegramResponse = await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: telegramChatId,
          text: message,
          parse_mode: 'Markdown',
        }),
      });

      if (!telegramResponse.ok) {
        console.error('Telegram API error:', await telegramResponse.text());
      }
    }

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Lead API error:', error);
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(200).json({ error: 'Internal server error', success: false });
  }
}
