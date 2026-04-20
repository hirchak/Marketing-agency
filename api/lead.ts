import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'GET' || req.method === 'HEAD') {
    res.setHeader('Content-Type', 'application/json');
    return res.status(200).json({ status: 'ok', message: 'Lead API is working' });
  }

  if (req.method !== 'POST') {
    res.setHeader('Content-Type', 'application/json');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { website, what_build, niche, stage, friction, budget, email, telegram } = req.body || {};

    if (!email || typeof email !== 'string') {
      return res.status(400).json({ error: 'Email is required' });
    }

    const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
    const telegramChatId = process.env.TELEGRAM_CHAT_ID;

    if (telegramToken && telegramChatId) {
      const whatBuildLabel = what_build
        ? what_build.replace('option_', '').replace('_', ' ')
        : 'Not specified';

      const message = `🔥 New Lead

📧 Email: ${email}
${telegram ? `✈️ Telegram: @${telegram.replace('@', '')}` : ''}
${website ? `🌐 Website: ${website}` : ''}
🏗️ Build: ${whatBuildLabel}
${niche ? `📊 Niche: ${niche}` : ''}
${stage ? `📈 Stage: ${stage}` : ''}
${friction ? `⚠️ Problem: ${friction}` : ''}
${budget ? `💰 Budget: ${budget}` : ''}`.trim();

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

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Lead API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
