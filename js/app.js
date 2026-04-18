
// ================================================
// SAV.AGENCY — NEO-BRUTALIST TERMINAL JS
// ================================================

// --- TRANSLATIONS ---
const translations = {
    uk: {
        nav_services: "[Послуги]", nav_pricing: "[Пакети]", nav_process: "[Процес]", nav_faq: "[FAQ]", nav_cta: "> Безкоштовний аудит",
        hero_badge: "AI-керований маркетинг нового покоління",
        hero_title: "Маркетингові дослідження та стратегії на основі AI",
        hero_subtitle: "Ми за 5-7 днів даємо вам глибокий аналіз ринку, конкурентів та аудиторії з конкретними цифрами і планом дій. Те, на що класична агенція витрачає місяць.",
        hero_cta_main: "> Безкоштовний міні-аудит",
        hero_cta_side: "[ ] Переглянути послуги",
        hero_meta_projects: "Вже допомогли 15+ проєктам",
        hero_meta_response: "Відповідаємо за 2 години",
        scroll_text: "scanning",
        proof_projects: "Проєктів з AI",
        proof_speed: "Годин на відповідь",
        proof_value: "M+ Бюджету",
        proof_delivery: "Днів Delivery",
        services_title: "Послуги",
        service_1_title: "Deep Research", service_1_desc: "Глибокий аналіз ринку, конкурентів та аудиторії.", service_1_deliverable: "PDF-звіт 20-35 стор.", service_1_time: "5-7 днів", service_1_price: "від $500",
        service_2_title: "Marketing Strategy", service_2_desc: "Медіа-план, воронка, unit economics і 30-денний план дій.", service_2_deliverable: "Стратегія 40-50 стор.", service_2_time: "10-14 днів", service_2_price: "від $1,500",
        service_3_title: "GTM Launch", service_3_desc: "Повний пакет для виходу продукту на ринок.", service_3_deliverable: "Повний Launch Kit", service_3_time: "3-4 тижні", service_3_price: "від $2,500",
        service_4_title: "Creative Pack", service_4_desc: "Hooks, скрипти, ad copy та ТЗ для продакшну.", service_4_deliverable: "10 hooks + 5 скриптів", service_4_time: "3-5 днів", service_4_price: "від $400",
        service_5_title: "Optimization", service_5_desc: "Аудит поточної реклами і конкретні рекомендації.", service_5_deliverable: "Звіт + scaling план", service_5_time: "Щомісячно", service_5_price: "від $800",
        service_6_title: "ICP Deep Profile", service_6_desc: "Глибоке дослідження вашої ідеальної аудиторії.", service_6_deliverable: "3-5 Persona карт", service_6_time: "7-10 днів", service_6_price: "від $600",
        service_7_title: "Competitor Watch", service_7_desc: "Щомісячний трекінг реклами і стратегій конкурентів.", service_7_deliverable: "Щомісячний звіт", service_7_time: "Щомісяця", service_7_price: "від $300/міс",
        service_8_title: "Funnel Audit", service_8_desc: "Знаходимо де ваша воронка втрачає гроші.", service_8_deliverable: "Звіт з 15 рекомендацій", service_8_time: "5-7 днів", service_8_price: "від $700",
        pricing_title: "Пакети",
        package_1_name: "RESEARCH", package_duration_1: "5-7 днів доставки",
        package_1_f1: "Аналіз ринку", package_1_f2: "Аналіз конкурентів", package_1_f3: "Аналіз аудиторії", package_1_f4: "Канали + CPM", package_1_f5: "SWOT аналіз",
        package_2_name: "STRATEGY", package_duration_2: "10-14 днів доставки",
        package_2_f1: "Все з Research", package_2_f2: "Маркетингова стратегія", package_2_f3: "Медіа-план", package_2_f4: "Unit Economics", package_2_f5: "30-денний план дій",
        package_3_name: "LAUNCH", package_duration_3: "3-4 тижні доставки",
        package_3_f1: "Все з Strategy", package_3_f2: "Креативний пакет", package_3_f3: "Структура кампаній", package_3_f4: "Трекінг чекліст", package_3_f5: "30 днів підтримки",
        badge_popular: "ПОПУЛЯРНИЙ", badge_best: "ВИГІДНО",
        btn_contact: "> Зв'язатись",
        process_title: "Як ми працюємо",
        process_1_title: "Бриф", process_1_desc: "30-хвилинний дзвінок або листування. Розуміємо ваш бізнес.",
        process_2_title: "Дослідження", process_2_desc: "Наша AI-система аналізує 50+ джерел даних по вашій ніші.",
        process_3_title: "Deliverable", process_3_desc: "Отримуєте готовий документ: стратегія, медіа-план, креативи.",
        process_4_title: "Підтримка", process_4_desc: "Допомагаємо впровадити, відповідаємо на питання.",
        cap_title: "В рази швидше, значно доступніше, і кожна рекомендація підкріплена реальними даними",
        form_title: "Безкоштовний Міні-Аудит",
        form_subtitle: "За 48 годин ми зробимо експрес-аналіз вашого проєкту і покажемо 3 головних точки росту.",
        form_website_label: "Ваш сайт або продукт", form_niche_label: "Ваша ніша", form_niche_select: "Оберіть нішу",
        form_email_label: "Email для результатів", form_telegram_label: "Telegram (опційно)",
        btn_audit_submit: "> Отримати безкоштовний аудит", form_note: "// Без зобов'язань. Відповідаємо за 48 годин.",
        form_success: "[✓] Дякуємо! Відповімо за 48 годин.",
        faq_title: "Часті запитання",
        faq_q1: "Скільки часу займає дослідження?", faq_a1: "Research Pack — 5-7 робочих днів. Strategy Pack — 10-14 днів. Launch Pack — 3-4 тижні. Ми завжди озвучуємо точні дедлайни перед початком.",
        faq_q2: "Що я отримаю в результаті?", faq_a2: "Конкретний документ (PDF + таблиці) з реальними даними, цифрами і рекомендаціями. Не абстрактні поради, а чіткий план дій.",
        faq_q3: "Як ви можете робити це так швидко?", faq_a3: "Ми побудували власну систему аналізу на базі AI-технологій. Вона дозволяє обробляти десятки джерел даних за 5-7 днів замість 4-6 тижнів.",
        faq_q4: "А що якщо мені не сподобається результат?", faq_a4: "Після кожного етапу ми показуємо проміжні результати. Фінальний документ проходить 1 раунд правок включно.",
        faq_q5: "Чи працюєте ви з маленькими бюджетами?", faq_a5: "Так. Research Pack починається від $500. Ми створили пакети доступні для стартапів і малого бізнесу.",
        faq_q6: "В яких ринках/нішах ви маєте досвід?", faq_a6: "E-commerce, SaaS, мобільні додатки, сервісні бізнеси. Україна, Польща, Чехія, DACH.",
        faq_q7: "Чи можна замовити тільки одну послугу?", faq_a7: "Абсолютно. Кожна послуга працює самостійно. Але ми рекомендуємо починати з Research — це фундамент.",
        faq_q8: "Як почати?", faq_a8: "Залиште заявку на безкоштовний міні-аудит або напишіть нам в Telegram. Ми проведемо 30-хвилинний бриф.",
        footer_links: "Послуги", footer_contact: "Контакти", footer_telegram: "Telegram", footer_email: "Email", footer_form: "Безкоштовний аудит",
        footer_copyright: "© 2026 SAV.AGENCY // TERMINAL EDITION"
    },
    en: {
        nav_services: "[Services]", nav_pricing: "[Packages]", nav_process: "[Process]", nav_faq: "[FAQ]", nav_cta: "> Free Audit",
        hero_badge: "Next-gen AI-driven Marketing",
        hero_title: "AI-Powered Market Research & Strategy",
        hero_subtitle: "We deliver deep market, competitor, and audience analysis with concrete numbers and an action plan in 5-7 days. What taking a month for traditional agencies.",
        hero_cta_main: "> Free Mini-Audit",
        hero_cta_side: "[ ] View Services",
        hero_meta_projects: "Helped 15+ projects already",
        hero_meta_response: "Response within 2 hours",
        scroll_text: "scanning",
        proof_projects: "AI Projects",
        proof_speed: "Hours to response",
        proof_value: "M+ Ad Spend",
        proof_delivery: "Days Delivery",
        services_title: "Services",
        service_1_title: "Deep Research", service_1_desc: "In-depth market, competitor, and audience analysis.", service_1_deliverable: "20-35 page PDF report", service_1_time: "5-7 days", service_1_price: "from $500",
        service_2_title: "Marketing Strategy", service_2_desc: "Media plan, funnel, unit economics, and 30-day action plan.", service_2_deliverable: "40-50 page Strategy", service_2_time: "10-14 days", service_2_price: "from $1,500",
        service_3_title: "GTM Launch", service_3_desc: "Full package for product market entry.", service_3_deliverable: "Full Launch Kit", service_3_time: "3-4 weeks", service_3_price: "from $2,500",
        service_4_title: "Creative Pack", service_4_desc: "Hooks, scripts, ad copy, and visual direction.", service_4_deliverable: "10 hooks + 5 scripts", service_4_time: "3-5 days", service_4_price: "from $400",
        service_5_title: "Optimization", service_5_desc: "Current ad audit and specific scaling recommendations.", service_5_deliverable: "Report + scaling plan", service_5_time: "Monthly", service_5_price: "from $800",
        service_6_title: "ICP Deep Profile", service_6_desc: "Deep dive into your ideal customer profile.", service_6_deliverable: "3-5 Persona cards", service_6_time: "7-10 days", service_6_price: "from $600",
        service_7_title: "Competitor Watch", service_7_desc: "Monthly competitor ad and strategy tracking.", service_7_deliverable: "Monthly digest", service_7_time: "Monthly", service_7_price: "from $300/mo",
        service_8_title: "Funnel Audit", service_8_desc: "Identifying where your funnel is leaking money.", service_8_deliverable: "Report with 15 fixes", service_8_time: "5-7 days", service_8_price: "from $700",
        pricing_title: "Packages",
        package_1_name: "RESEARCH", package_duration_1: "5-7 days delivery",
        package_1_f1: "Market Analysis", package_1_f2: "Competitor Audit", package_1_f3: "Audience Profiling", package_1_f4: "Channels + CPM", package_1_f5: "SWOT Analysis",
        package_2_name: "STRATEGY", package_duration_2: "10-14 days delivery",
        package_2_f1: "Everything in Research", package_2_f2: "Marketing Strategy", package_2_f3: "Media Plan", package_2_f4: "Unit Economics", package_2_f5: "30-day Action Plan",
        package_3_name: "LAUNCH", package_duration_3: "3-4 weeks delivery",
        package_3_f1: "Everything in Strategy", package_3_f2: "Creative Pack", package_3_f3: "Campaign Structure", package_3_f4: "Tracking Checklist", package_3_f5: "30 days Support",
        badge_popular: "POPULAR", badge_best: "BEST VALUE",
        btn_contact: "> Contact Us",
        process_title: "How We Work",
        process_1_title: "Briefing", process_1_desc: "30-minute call or chat. We understand your business goals.",
        process_2_title: "Research", process_2_desc: "Our AI system analyzes 50+ data sources in your niche.",
        process_3_title: "Deliverable", process_3_desc: "You get the final document: strategy, media plan, creatives.",
        process_4_title: "Support", process_4_desc: "We help with implementation and follow-up questions.",
        cap_title: "Significantly faster, more affordable, and every recommendation is backed by real data",
        form_title: "Free Mini-Audit",
        form_subtitle: "In 48 hours, we'll perform a quick analysis and show 3 main growth points.",
        form_website_label: "Website or Product", form_niche_label: "Your Niche", form_niche_select: "Select niche",
        form_email_label: "Email for results", form_telegram_label: "Telegram (optional)",
        btn_audit_submit: "> Get Free Audit", form_note: "// No obligations. Response within 48 hours.",
        form_success: "[✓] Thank you! We'll reply within 48 hours.",
        faq_title: "FAQ",
        faq_q1: "How long does research take?", faq_a1: "Research Pack: 5-7 days. Strategy Pack: 10-14 days. Launch Pack: 3-4 weeks.",
        faq_q2: "What do I get in return?", faq_a2: "A concrete PDF report with real data, numbers, and recommendations.",
        faq_q3: "How is it so fast?", faq_a3: "We built our own AI-powered analytical system. It processes data 10x faster.",
        faq_q4: "What if I don't like it?", faq_a4: "We show progress at every step. Final delivery includes 1 round of revisions.",
        faq_q5: "Do you work with small budgets?", faq_a5: "Yes. Our Research Pack starts at $500, tailored for startups.",
        faq_q6: "Which niches are you experts in?", faq_a6: "E-commerce, SaaS, Apps, Service businesses. UA, PL, CZ, DACH markets.",
        faq_q7: "Can I order just one service?", faq_a7: "Absolutely. Each service works independently.",
        faq_q8: "How to start?", faq_a8: "Submit a mini-audit request or contact us on Telegram for a briefing.",
        footer_links: "Services", footer_contact: "Contact", footer_telegram: "Telegram", footer_email: "Email", footer_form: "Free Audit",
        footer_copyright: "© 2026 SAV.AGENCY // TERMINAL EDITION"
    },
    cs: {
        nav_services: "[Služby]", nav_pricing: "[Balíčky]", nav_process: "[Proces]", nav_faq: "[FAQ]", nav_cta: "> Audit zdarma",
        hero_badge: "Nová generace marketingu s AI",
        hero_title: "Marketingový výzkum a strategie pomocí AI",
        hero_subtitle: "Za 5-7 dní vám dodáme hloubkovou analýzu trhu, konkurence a publika s konkrétními čísly. To, co trvá agenturám měsíc.",
        hero_cta_main: "> Mini-audit zdarma",
        hero_cta_side: "[ ] Zobrazit služby",
        hero_meta_projects: "Pomohli jsme již 15+ projektům",
        hero_meta_response: "Odpovídáme do 2 hodin",
        scroll_text: "scanning",
        proof_projects: "AI Projektů",
        proof_speed: "Hodin na odpověď",
        proof_value: "M+ Ad Spend",
        proof_delivery: "Dny doručení",
        services_title: "Služby",
        service_1_title: "Deep Research", service_1_desc: "Hloubková analýza trhu, konkurence a publika.", service_1_deliverable: "PDF report 20-35 stran", service_1_time: "5-7 dní", service_1_price: "od $500",
        service_2_title: "Marketing Strategy", service_2_desc: "Mediaplán, funnel, unit economics a 30denní plán.", service_2_deliverable: "Strategie 40-50 stran", service_2_time: "10-14 dní", service_2_price: "od $1,500",
        service_3_title: "GTM Launch", service_3_desc: "Kompletní balíček pro vstup na trh.", service_3_deliverable: "Full Launch Kit", service_3_time: "3-4 týdny", service_3_price: "od $2,500",
        service_4_title: "Creative Pack", service_4_desc: "Hooky, scénáře, ad copy a vizuální směr.", service_4_deliverable: "10 hooků + 5 scénářů", service_4_time: "3-5 dní", service_4_price: "od $400",
        service_5_title: "Optimization", service_5_desc: "Audit reklam a konkrétní doporučení pro růst.", service_5_deliverable: "Report + plán měřítka", service_5_time: "Měsíčně", service_5_price: "od $800",
        service_6_title: "ICP Deep Profile", service_6_desc: "Podrobný profil vašeho ideálního zákazníka.", service_6_deliverable: "3-5 Persona karet", service_6_time: "7-10 dní", service_6_price: "od $600",
        service_7_title: "Competitor Watch", service_7_desc: "Měsíční sledování reklam a strategií konkurence.", service_7_deliverable: "Měsíční přehled", service_7_time: "Měsíčně", service_7_price: "od $300/měs",
        service_8_title: "Funnel Audit", service_8_desc: "Zjištění míst, kde váš funnel ztrácí peníze.", service_8_deliverable: "Report s 15 opravami", service_8_time: "5-7 dní", service_8_price: "od $700",
        pricing_title: "Balíčky",
        package_1_name: "RESEARCH", package_duration_1: "5-7 dní doručení",
        package_1_f1: "Analýza trhu", package_1_f2: "Audit konkurence", package_1_f3: "Profilování publika", package_1_f4: "Kanály + CPM", package_1_f5: "SWOT analýza",
        package_2_name: "STRATEGY", package_duration_2: "10-14 dní doručení",
        package_2_f1: "Vše z Research", package_2_f2: "Marketingová strategie", package_2_f3: "Mediaplán", package_2_f4: "Unit Economics", package_2_f5: "30denní plán",
        package_3_name: "LAUNCH", package_duration_3: "3-4 týdny doručení",
        package_3_f1: "Vše ze Strategy", package_3_f2: "Creative Pack", package_3_f3: "Struktura kampaní", package_3_f4: "Tracking Checklist", package_3_f5: "30 dní podpora",
        badge_popular: "POPULÁRNÍ", badge_best: "NEJLEPŠÍ HODNOTA",
        btn_contact: "> Kontaktovat",
        process_title: "Jak pracujeme",
        process_1_title: "Brief", process_1_desc: "30minutový hovor. Porozumíme vašim cílům.",
        process_2_title: "Výzkum", process_2_desc: "Náš AI systém analyzuje 50+ zdrojů dat ve vaší nice.",
        process_3_title: "Výstup", process_3_desc: "Získáte finální dokument: strategie, mediaplán, kreativy.",
        process_4_title: "Podpora", process_4_desc: "Pomůžeme s implementací a dotazy.",
        cap_title: "Mnohem rychlejší, výrazně dostupnější a každé doporučení je podloženo reálnými daty",
        form_title: "Mini-Audit Zdarma",
        form_subtitle: "Do 48 hodin provedeme analýzu a ukážeme 3 hlavní body růstu.",
        form_website_label: "Váš web nebo produkt", form_niche_label: "Vaše nika", form_niche_select: "Vyberte niku",
        form_email_label: "Email pro výsledky", form_telegram_label: "Telegram (volitelně)",
        btn_audit_submit: "> Získat audit", form_note: "// Bez závazků. Odpověď do 48 hodin.",
        form_success: "[✓] Děkujeme! Odpovíme do 48 hodin.",
        faq_title: "FAQ",
        faq_q1: "Jak dlouho trvá výzkum?", faq_a1: "Research Pack: 5-7 dní. Strategy Pack: 10-14 dní. Launch Pack: 3-4 týdny.",
        faq_q2: "Co získám?", faq_a2: "Konkrétní PDF report s reálnými daty a doporučeními.",
        faq_q3: "Jak to, že je to tak rychlé?", faq_a3: "Vytvořili jsme vlastní AI systém. Analyzuje data 10x rychleji.",
        faq_q4: "Co když se mi to nebude líbit?", faq_a4: "Ukazujeme pokrok v každé fázi. Zahrnuje 1 kolo úprav.",
        faq_q5: "Pracujete s malými rozpočty?", faq_a5: "Ano. Research Pack začíná na $500, ideální pro startupy.",
        faq_q6: "V jakých nikách jste experti?", faq_a6: "E-commerce, SaaS, Aplikace. Trhy CZ, UA, PL, DACH.",
        faq_q7: "Mohu objednat jen jednu službu?", faq_a7: "Naprosto. Každá služba funguje samostatně.",
        faq_q8: "Jak začít?", faq_a8: "Požádejte o mini-audit nebo nás kontaktujte na Telegramu.",
        footer_links: "Služby", footer_contact: "Kontakty", footer_telegram: "Telegram", footer_email: "Email", footer_form: "Audit zdarma",
        footer_copyright: "© 2026 SAV.AGENCY // TERMINAL EDITION"
    }
};

let currentLang = 'uk';

function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.innerText = translations[lang][key];
            }
        }
    });

    document.querySelectorAll('.language-switcher .lang-btn').forEach(s => s.classList.remove('active'));
    const activeBtn = document.getElementById(`lang-${lang}`);
    if (activeBtn) activeBtn.classList.add('active');

    document.documentElement.lang = lang;
}

// --- SCROLL PROGRESS BAR (TERMINAL STYLE) ---
const scrollFill = document.getElementById('scroll-fill');
const scrollText = document.getElementById('scroll-text');
const header = document.getElementById('header');

function updateScrollProgress() {
    const scrolled = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(scrolled / maxScroll, 1);

    if (scrollFill) {
        scrollFill.style.width = `${progress * 100}%`;
    }

    if (scrollText) {
        const percent = Math.round(progress * 100);
        scrollText.textContent = `[ ${percent}% ]`;
    }

    if (header) {
        if (scrolled > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
}

window.addEventListener('scroll', updateScrollProgress);
updateScrollProgress();

// --- INTERSECTION OBSERVER FOR REVEAL ANIMATIONS ---
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal, .fade-in').forEach(el => revealObserver.observe(el));

// --- FAQ TOGGLE ---
function toggleFaq(el) {
    const item = el.parentElement;
    const wasActive = item.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
    if (!wasActive) item.classList.add('active');
}

// --- MOBILE MENU ---
function toggleMobileMenu() {
    const nav = document.getElementById('nav-links');
    const toggle = document.querySelector('.mobile-menu-toggle');
    nav.classList.toggle('active');
    toggle.classList.toggle('active');
}

document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('nav-links').classList.remove('active');
        document.querySelector('.mobile-menu-toggle').classList.remove('active');
    });
});

// --- STICKY MOBILE CTA ---
(function () {
    const stickyCta = document.getElementById('stickyCta');
    const leadForm = document.getElementById('lead-form');
    if (!stickyCta || window.innerWidth > 768) return;

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const formRect = leadForm ? leadForm.getBoundingClientRect() : null;
        const nearForm = formRect && formRect.top < window.innerHeight && formRect.bottom > 0;

        if (scrollY > 400 && !nearForm) {
            stickyCta.classList.add('visible');
        } else {
            stickyCta.classList.remove('visible');
        }
    });
})();

// --- SMOOTH SCROLL ---
function scrollToAudit() {
    const form = document.getElementById('lead-form');
    if (form) form.scrollIntoView({ behavior: 'smooth' });
}

// --- PRELOADER ---
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('hidden');
            setTimeout(() => preloader.remove(), 400);
        }, 1500);
    }
});

// --- DOM READY ---
document.addEventListener('DOMContentLoaded', () => {
    setLanguage('uk');

    // Add glitch effect to hero title on load
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        heroTitle.classList.add('glitch');
    }
});
