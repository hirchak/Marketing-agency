import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { website, what_build, niche, stage, friction, budget, email, telegram } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
    const telegramChatId = process.env.TELEGRAM_CHAT_ID;

    if (telegramToken && telegramChatId) {
      const message = `
🔥 New Lead

📧 Email: ${email}
${telegram ? `✈️ Telegram: @${telegram}` : ''}
${website ? `🌐 Website: ${website}` : ''}
${what_build ? `🏗️ What to build: ${what_build}` : ''}
${niche ? `📊 Niche: ${niche}` : ''}
${stage ? `📈 Stage: ${stage}` : ''}
${friction ? `⚠️ Friction: ${friction}` : ''}
${budget ? `💰 Budget: ${budget}` : ''}
      `.trim();

      await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: telegramChatId,
          text: message,
          parse_mode: 'Markdown',
        }),
      });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Lead API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
