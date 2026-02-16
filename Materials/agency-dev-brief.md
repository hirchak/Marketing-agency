# SAV.AGENCY — Quick Dev Brief

> **Для Claude в VS Code:** Це стислий бриф який зв'язує все разом.
> Детальний контент → `agency-site-improvements.md`
> Специфікація послуг → `agency-services-spec.md`

---

## Що зараз

Сайт: https://marketing-agency-coral.vercel.app/
Single-page dark theme landing. 5 послуг. Всі CTA → Telegram.
Стек: Next.js (або React) на Vercel.

## Що потрібно зробити

Розширити landing page з "красива візитка" → "конвертуюча бізнес-сторінка з lead generation".

### Нові секції (додати в порядку зверху вниз):

1. **Sticky Header** — логотип + nav links (Послуги, Пакети, Процес, Кейси, Контакт) + language switcher + CTA "Безкоштовний аудит"
2. **Hero переписати** — конкретніший заголовок + 2 CTA кнопки (primary: "Міні-аудит", secondary: "Послуги")
3. **Social Proof Bar** — 4 числових метрики в ряд (15+ проектів, 5-7 днів delivery, $2M+ ad spend, UA/PL/CZ)
4. **Services переробити** — 8 карток замість 5, кожна з конкретним deliverable і ціною "від $X"
5. **Packages** — 3 pricing cards (Research $500, Strategy $1500, Launch $2500) + ongoing services
6. **How We Work** — 4 кроки: Бриф → Research → Deliverable → Підтримка
7. **Cases/Results** — placeholder (capabilities метрики або 1-2 кейси якщо є)
8. **Mini-Audit Form** — форма lead magnet: URL + ніша + email + telegram (optional)
9. **FAQ** — 7-8 питань в accordion
10. **Footer** — розширений з контактами, лінками послуг, соцмережами

### Візуальні зміни:

- Зберегти dark theme
- Sticky header з backdrop-blur при скролі
- Scroll fade-in анімації (intersection observer)
- Count-up анімація для цифр в Social Proof
- Pricing cards з "Popular" / "Best Value" badges
- Form з success/error states
- Mobile-first responsive (hamburger menu, stacked cards, full-width form)

### Технічні:

- SEO meta tags + OG image (1200x630)
- Favicon
- Form backend: Formspree (MVP) або Supabase insert
- GA4 tracking (опційно)
- Smooth scroll для anchor навігації

---

## Ключові копірайтингові зміни

**Було:** "Ми перетворюємо хаос у прогнозований прибуток"
**Стало:** "Ми за 5-7 днів даємо глибокий аналіз ринку з конкретними цифрами і планом дій"

**Було:** Абстрактні описи послуг
**Стало:** Конкретні deliverables + ціна + термін для кожної послуги

**Було:** Один CTA (Telegram)
**Стало:** Різні CTA на різних рівнях: "Міні-аудит" (low commitment), "Замовити пакет" (medium), "Написати в TG" (high intent)

---

## Все — в деталях у двох файлах:
- `agency-site-improvements.md` — повна інструкція по кожній секції з wireframes і копірайтом
- `agency-services-spec.md` — повна специфікація пакетів, цін, deliverables і внутрішнього workflow

---

*Dev Brief v1.0 | SAV.AGENCY | February 2026*
