# SAV.AGENCY — Модульна структура

## Файли

```
sav-agency/
├── index.html              ← HTML розмітка (535 рядків)
├── css/
│   └── style.css           ← Всі стилі (1506 рядків)
└── js/
    ├── telegram-bot.js     ← Telegram бот для заявок (114 рядків)
    └── app.js              ← Переклади + логіка + анімації (448 рядків)
```

**Було:** 1 файл, 2506 рядків
**Стало:** 4 файли, жоден не перевищує 1506 рядків

## Що змінилось

### Баг-фікси:
- ✅ GTM Launch ціна: $2,000 → **$2,500** (в HTML)
- ✅ Competitor Watch: вже коректно "Щомісяця / від $300/міс"
- ✅ Process Step 3: заголовок "Deliverable" є
- ✅ Scroll indicator: перенесений нижче (bottom: 30px + більше padding hero)
- ✅ Email лінк: виправлений з Cloudflare-обфускації на mailto:info@sav.agency

### Telegram бот (НОВА ФУНКЦІЯ):
Форма тепер надсилає заявки напряму в Telegram двом отримувачам:
- Yurii (chat_id: 350659930)
- Andriy (chat_id: 5756186570)

**Фолбек:** якщо Telegram API недоступний → відкривається Telegram з pre-filled повідомленням.

## Як деплоїти

### Варіант 1: Замінити файли в репозиторії
1. Видалити старий `src/index.html`
2. Скопіювати нову структуру:
   - `index.html` → корінь або `src/`
   - `css/style.css` → `css/` або `src/css/`
   - `js/app.js` → `js/` або `src/js/`
   - `js/telegram-bot.js` → `js/` або `src/js/`
3. Push → Vercel автоматично задеплоїть

### Варіант 2: Якщо Vercel шукає файли в `src/`
Переконайся що шляхи в index.html правильні:
```html
<link rel="stylesheet" href="css/style.css">
<script src="js/telegram-bot.js"></script>
<script src="js/app.js"></script>
```
Якщо файли в підпапці `src/`, шляхи залишаються відносними і все буде працювати.

## ⚠️ ВАЖЛИВО: Telegram Bot Token

Токен бота зараз відкритий в коді (`js/telegram-bot.js`).
Це працює, але для безпеки рекомендую:

1. **Зараз:** залишити як є — для лендінга це допустимо
2. **Потім:** перегенерувати токен через @BotFather (`/revoke`) і замінити в коді
3. **В ідеалі:** перенести на серверну функцію (Vercel Serverless Function)

## Для AntiGravity / Claude Code

Тепер кожен файл незалежний і ти можеш працювати з ними окремо:
- Змінити стилі → редагуй `css/style.css`
- Змінити тексти/переклади → редагуй `js/app.js` (секція translations)
- Змінити логіку форми → редагуй `js/telegram-bot.js`
- Змінити структуру → редагуй `index.html`
