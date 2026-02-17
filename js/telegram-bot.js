// ===== TELEGRAM BOT FORM HANDLER =====
// Sends form data to Telegram chat via Bot API

const TELEGRAM_CONFIG = {
    botToken: '8502702181:AAEf9yQOzdRekaq-sCs6_El1AjvRRtZ4hsE',
    chatIds: ['350659930', '5756186570'] // Yurii + Andriy
};

async function sendToTelegram(formData) {
    const message = formatMessage(formData);
    const results = [];

    for (const chatId of TELEGRAM_CONFIG.chatIds) {
        try {
            const response = await fetch(
                `https://api.telegram.org/bot${TELEGRAM_CONFIG.botToken}/sendMessage`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        chat_id: chatId,
                        text: message,
                        parse_mode: 'HTML'
                    })
                }
            );
            const data = await response.json();
            results.push(data.ok);
        } catch (error) {
            console.error('Telegram send error:', error);
            results.push(false);
        }
    }

    return results.some(r => r === true);
}

function formatMessage(formData) {
    const now = new Date();
    const date = now.toLocaleDateString('uk-UA', {
        day: '2-digit', month: '2-digit', year: 'numeric',
        hour: '2-digit', minute: '2-digit'
    });

    return `🔔 <b>Нова заявка на міні-аудит!</b>

🌐 <b>Сайт:</b> ${escapeHtml(formData.website)}
📂 <b>Ніша:</b> ${escapeHtml(formData.niche)}
📧 <b>Email:</b> ${escapeHtml(formData.email)}
💬 <b>Telegram:</b> ${formData.telegram ? escapeHtml(formData.telegram) : '—'}

📅 ${date}
🔗 Джерело: sav.agency`;
}

function escapeHtml(text) {
    if (!text) return '';
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

// Handle form submission
function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const btn = form.querySelector('button[type="submit"]');
    const success = document.getElementById('formSuccess');
    const originalText = btn.textContent;

    // Get form data
    const formData = {
        website: form.querySelector('[name="website"]').value,
        niche: form.querySelector('[name="niche"]').value,
        email: form.querySelector('[name="email"]').value,
        telegram: form.querySelector('[name="telegram"]').value
    };

    // UI feedback
    btn.textContent = '⏳ Надсилаємо...';
    btn.disabled = true;
    btn.style.opacity = '0.7';

    sendToTelegram(formData)
        .then(sent => {
            if (sent) {
                // Success
                form.reset();
                btn.style.display = 'none';
                if (success) success.classList.add('show');
            } else {
                // Fallback: open Telegram with pre-filled message
                const text = encodeURIComponent(
                    `Привіт! Хочу міні-аудит.\nСайт: ${formData.website}\nНіша: ${formData.niche}\nEmail: ${formData.email}`
                );
                window.open(`https://t.me/andrisav?text=${text}`, '_blank');
                btn.textContent = originalText;
                btn.disabled = false;
                btn.style.opacity = '1';
            }
        })
        .catch(() => {
            // Network error fallback
            const text = encodeURIComponent(
                `Привіт! Хочу міні-аудит.\nСайт: ${formData.website}\nНіша: ${formData.niche}\nEmail: ${formData.email}`
            );
            window.open(`https://t.me/andrisav?text=${text}`, '_blank');
            btn.textContent = originalText;
            btn.disabled = false;
            btn.style.opacity = '1';
        });
}
