export async function onPost(request: Request): Promise<Response> {
  try {
    const body = await request.json();
    const { website, what_build, niche, stage, friction, budget, email, telegram } = body;

    if (!email) {
      return new Response(JSON.stringify({ error: 'Email is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
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

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Lead API error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
