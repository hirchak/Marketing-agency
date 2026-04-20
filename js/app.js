/* ================================================
   SAV.AGENCY — CLEAN & MODULAR SaaS JS
   ================================================ */

// --- TRANSLATIONS ---
const translations = {
    uk: {
        nav_services: "Послуги", nav_pricing: "Пакети", nav_process: "Процес", nav_faq: "FAQ", nav_cta: "Безкоштовний аудит",
        hero_badge: "AI-керований маркетинг нового покоління",
        hero_title_1: "Глибокий аналіз ринку",
        hero_title_2: "з конкретними цифрами",
        hero_title_3: "та планом дій",
        hero_subtitle: "Ми за 5-7 днів даємо вам глибокий аналіз ринку, конкурентів та аудиторії. Те, на що класична агенція витрачає місяць.",
        hero_cta_main: "Безкоштовний міні-аудит",
        hero_cta_side: "Переглянути послуги",
        proof_projects: "Проєктів",
        proof_speed: "Швидкість",
        proof_value: "Ad Spend",
        proof_delivery: "Днів delivery",
        services_tag: "Послуги",
        services_title: "Комплексні AI-маркетинг рішення",
        services_desc: "Кожен пакет — це завершений продукт з конкретними deliverables і term of delivery",
        service_1_title: "Deep Research", service_1_desc: "Глибокий аналіз ринку, конкурентів та аудиторії з реальними цифрами і джерелами.", service_1_time: "5-7 днів", service_1_price: "від $500",
        service_2_title: "Marketing Strategy", service_2_desc: "Медіа-план, воронка, unit economics і 30-денний план дій з пріоритетами.", service_2_time: "10-14 днів", service_2_price: "від $1,500",
        service_3_title: "GTM Launch", service_3_desc: "Повний пакет для виходу продукту на ринок: від дослідження до перших продажів.", service_3_time: "3-4 тижні", service_3_price: "від $2,500",
        service_4_title: "Creative Pack", service_4_desc: "Hooks, скрипти, ad copy та візуальний напрямок для продакшену.", service_4_time: "3-5 днів", service_4_price: "від $400",
        service_5_title: "Optimization", service_5_desc: "Аудит поточної реклами, виявлення money leaks і план масштабування.", service_5_time: "Щомісячно", service_5_price: "від $800/міс",
        service_6_title: "ICP Deep Profile", service_6_desc: "Глибоке дослідження ідеального клієнта: 3-5 детальних Persona карт.", service_6_time: "7-10 днів", service_6_price: "від $600",
        service_7_title: "Competitor Watch", service_7_desc: "Щомісячний трекінг реклами і стратегій конкурентів в вашій ніші.", service_7_time: "Щомісяця", service_7_price: "від $300/міс",
        service_8_title: "Funnel Audit", service_8_desc: "Знаходимо де ваша воронка втрачає гроші і даємо 15+ рекомендацій.", service_8_time: "5-7 днів", service_8_price: "від $700",
        pricing_tag: "Пакети", pricing_title: "Виберіть свій пакет", pricing_desc: "Кожен пакет — завершений продукт. Можна замовити окремо або скомбінувати.",
        package_1_name: "RESEARCH", package_duration_1: "5-7 днів доставки",
        package_1_f1: "Аналіз ринку", package_1_f2: "Аналіз конкурентів", package_1_f3: "Аналіз аудиторії", package_1_f4: "Канали + CPM", package_1_f5: "SWOT аналіз",
        package_2_name: "STRATEGY", package_duration_2: "10-14 днів доставки",
        package_2_f1: "Все з Research", package_2_f2: "Маркетингова стратегія", package_2_f3: "Медіа-план", package_2_f4: "Unit Economics", package_2_f5: "30-денний план дій",
        package_3_name: "LAUNCH", package_duration_3: "3-4 тижні доставки",
        package_3_f1: "Все з Strategy", package_3_f2: "Креативний пакет", package_3_f3: "Структура кампаній", package_3_f4: "Трекінг чекліст", package_3_f5: "30 днів підтримки",
        badge_popular: "ПОПУЛЯРНИЙ", badge_best: "ВИГІДНО",
        btn_contact: "Зв'язатись",
        process_tag: "Процес", process_title: "Як ми працюємо", process_desc: "Від брифу до готового deliverable — всього 4 кроки",
        process_1_title: "Бриф", process_1_desc: "30-хвилинний дзвінок або листування. Розуміємо ваш бізнес і цілі.",
        process_2_title: "Дослідження", process_2_desc: "Наша AI-система аналізує 50+ джерел даних по вашій ніші.",
        process_3_title: "Deliverable", process_3_desc: "Отримуєте готовий документ: стратегія, медіа-план, креативи.",
        process_4_title: "Підтримка", process_4_desc: "Допомагаємо впровадити, відповідаємо на питання.",
        form_title: "Безкоштовний Міні-Аудит",
        form_subtitle: "За 48 годин ми зробимо експрес-аналіз вашого проєкту і покажемо 3 головних точки росту.",
        trust_1: "Без зобов'язань", trust_2: "Відповідь за 48 год", trust_3: "Реальні дані",
        form_website_label: "Ваш сайт або продукт", form_niche_label: "Ваша ніша", form_niche_select: "Оберіть нішу",
        form_email_label: "Email для результатів", form_telegram_label: "Telegram (опційно)",
        btn_audit_submit: "Отримати безкоштовний аудит", form_note: "Без зобов'язань. Відповідаємо за 48 годин.",
        form_success: "Дякуємо! Відповімо за 48 годин.",
        faq_tag: "FAQ", faq_title: "Часті запитання",
        faq_q1: "Скільки часу займає дослідження?", faq_a1: "Research Pack — 5-7 робочих днів. Strategy Pack — 10-14 днів. Launch Pack — 3-4 тижні. Ми завжди озвучуємо точні дедлайни перед початком.",
        faq_q2: "Що я отримаю в результаті?", faq_a2: "Конкретний документ (PDF + таблиці) з реальними даними, цифрами і рекомендаціями. Не абстрактні поради, а чіткий план дій.",
        faq_q3: "Як ви можете робити це так швидко?", faq_a3: "Ми використовуємо AI-технології нового покоління, що дозволяють за 5-7 днів зробити роботу, на яку агенція витрачає 4-6 тижнів.",
        faq_q4: "А що якщо мені не сподобається результат?", faq_a4: "Ми показуємо проміжні результати на кожному етапі. Фінальний документ включає 1 раунд правок для повного задоволення.",
        faq_q5: "Чи працюєте ви з маленькими бюджетами?", faq_a5: "Так. Ми створили пакети від $500, доступні для стартапів. Великий бюджет не потрібен — потрібна правильна стратегія.",
        faq_q6: "В яких нішах ви маєте досвід?", faq_a6: "E-commerce, SaaS, мобільні додатки, сервісні бізнеси. Ми аналізуємо дані, тому наша методологія працює для будь-якої ніші.",
        faq_q7: "Чи можна замовити тільки одну послугу?", faq_a7: "Абсолютно. Кожна послуга працює самостійно, але ми рекомендуємо починати з Research — це фундамент для всього іншого.",
        faq_q8: "Як почати співпрацю?", faq_a8: "Залиште заявку на безкоштовний міні-аудит. Ми проведемо 30-хвилинний бриф і запропонуємо оптимальний план росту.",
        footer_nav: "Навігація", footer_services: "Послуги", footer_contact: "Контакти",
        footer_telegram: "Telegram", footer_email: "Email", footer_audit: "Безкоштовний аудит",
        footer_copyright: "© 2026 SAV.AGENCY • AI-Powered Marketing Research & Strategy"
    },
    en: {
        nav_services: "Services", nav_pricing: "Packages", nav_process: "Process", nav_faq: "FAQ", nav_cta: "Free Audit",
        hero_badge: "Next-gen AI-driven Marketing",
        hero_title_1: "Deep Market Research",
        hero_title_2: "with concrete numbers",
        hero_title_3: "and action plan",
        hero_subtitle: "We deliver deep market, competitor, and audience analysis in 5-7 days. What takes traditional agencies a month.",
        hero_cta_main: "Free Mini-Audit",
        hero_cta_side: "View Services",
        proof_projects: "Projects",
        proof_speed: "Speed",
        proof_value: "Ad Spend",
        proof_delivery: "Days delivery",
        services_tag: "Services",
        services_title: "Comprehensive AI-Marketing Solutions",
        services_desc: "Each package is a complete product with specific deliverables and delivery terms",
        service_1_title: "Deep Research", service_1_desc: "In-depth market, competitor, and audience analysis with real data.", service_1_time: "5-7 days", service_1_price: "from $500",
        service_2_title: "Marketing Strategy", service_2_desc: "Media plan, funnel, unit economics, and 30-day action plan.", service_2_time: "10-14 days", service_2_price: "from $1,500",
        service_3_title: "GTM Launch", service_3_desc: "Full package for product market entry: from research to first sales.", service_3_time: "3-4 weeks", service_3_price: "from $2,500",
        service_4_title: "Creative Pack", service_4_desc: "Hooks, scripts, ad copy, and visual direction for production.", service_4_time: "3-5 days", service_4_price: "from $400",
        service_5_title: "Optimization", service_5_desc: "Current ad audit, money leak detection, and scaling plan.", service_5_time: "Monthly", service_5_price: "from $800/mo",
        service_6_title: "ICP Deep Profile", service_6_desc: "Deep ideal customer research: 3-5 detailed Persona cards.", service_6_time: "7-10 days", service_6_price: "from $600",
        service_7_title: "Competitor Watch", service_7_desc: "Monthly competitor ad and strategy tracking in your niche.", service_7_time: "Monthly", service_7_price: "from $300/mo",
        service_8_title: "Funnel Audit", service_8_desc: "Find where your funnel leaks money and get 15+ recommendations.", service_8_time: "5-7 days", service_8_price: "from $700",
        pricing_tag: "Packages", pricing_title: "Choose Your Package", pricing_desc: "Each package is a complete product. Order separately or combine.",
        package_1_name: "RESEARCH", package_duration_1: "5-7 days delivery",
        package_1_f1: "Market Analysis", package_1_f2: "Competitor Audit", package_1_f3: "Audience Profiling", package_1_f4: "Channels + CPM", package_1_f5: "SWOT Analysis",
        package_2_name: "STRATEGY", package_duration_2: "10-14 days delivery",
        package_2_f1: "Everything in Research", package_2_f2: "Marketing Strategy", package_2_f3: "Media Plan", package_2_f4: "Unit Economics", package_2_f5: "30-day Action Plan",
        package_3_name: "LAUNCH", package_duration_3: "3-4 weeks delivery",
        package_3_f1: "Everything in Strategy", package_3_f2: "Creative Pack", package_3_f3: "Campaign Structure", package_3_f4: "Tracking Checklist", package_3_f5: "30 days Support",
        badge_popular: "POPULAR", badge_best: "BEST VALUE",
        btn_contact: "Contact Us",
        process_tag: "Process", process_title: "How We Work", process_desc: "From brief to finished deliverable — just 4 steps",
        process_1_title: "Briefing", process_1_desc: "30-minute call or chat. We understand your business and goals.",
        process_2_title: "Research", process_2_desc: "Our AI system analyzes 50+ data sources in your niche.",
        process_3_title: "Deliverable", process_3_desc: "You get the final document: strategy, media plan, creatives.",
        process_4_title: "Support", process_4_desc: "We help with implementation and follow-up questions.",
        form_title: "Free Mini-Audit",
        form_subtitle: "In 48 hours, we'll perform a quick analysis and show 3 main growth points.",
        trust_1: "No obligations", trust_2: "Response in 48 hrs", trust_3: "Real data",
        form_website_label: "Website or Product", form_niche_label: "Your Niche", form_niche_select: "Select niche",
        form_email_label: "Email for results", form_telegram_label: "Telegram (optional)",
        btn_audit_submit: "Get Free Audit", form_note: "No obligations. Response within 48 hours.",
        form_success: "Thank you! We'll reply within 48 hours.",
        faq_tag: "FAQ", faq_title: "Frequently Asked Questions",
        faq_q1: "How long does research take?", faq_a1: "Research Pack: 5-7 days. Strategy Pack: 10-14 days. Launch Pack: 3-4 weeks.",
        faq_q2: "What do I get in return?", faq_a2: "A concrete PDF report with real data, numbers, and recommendations. Not abstract advice, but a clear action plan.",
        faq_q3: "How is it so fast?", faq_a3: "We use next-gen AI technologies that allow us to do in 5-7 days what agencies spend 4-6 weeks on.",
        faq_q4: "What if I don't like it?", faq_a4: "We show progress at every stage. Final delivery includes 1 round of revisions.",
        faq_q5: "Do you work with small budgets?", faq_a5: "Yes. We created packages from $500, accessible for startups.",
        faq_q6: "Which niches are you experts in?", faq_a6: "E-commerce, SaaS, Mobile apps, Service businesses. We analyze data, so our methodology works for any niche.",
        faq_q7: "Can I order just one service?", faq_a7: "Absolutely. Each service works independently.",
        faq_q8: "How to start?", faq_a8: "Submit a mini-audit request. We'll conduct a 30-minute briefing and propose an optimal growth plan.",
        footer_nav: "Navigation", footer_services: "Services", footer_contact: "Contact",
        footer_telegram: "Telegram", footer_email: "Email", footer_audit: "Free Audit",
        footer_copyright: "© 2026 SAV.AGENCY • AI-Powered Marketing Research & Strategy"
    },
    cs: {
        nav_services: "Služby", nav_pricing: "Balíčky", nav_process: "Proces", nav_faq: "FAQ", nav_cta: "Audit zdarma",
        hero_badge: "Nová generace marketingu s AI",
        hero_title_1: "Hloubková analýza trhu",
        hero_title_2: "s konkrétními čísly",
        hero_title_3: "a plánem akcí",
        hero_subtitle: "Za 5-7 dní vám dodáme hloubkovou analýzu trhu, konkurence a publika. To, co trvá agenturám měsíc.",
        hero_cta_main: "Mini-audit zdarma",
        hero_cta_side: "Zobrazit služby",
        proof_projects: "Projektů",
        proof_speed: "Rychlost",
        proof_value: "Ad Spend",
        proof_delivery: "Dní doručení",
        services_tag: "Služby",
        services_title: "Komplexní AI-marketing řešení",
        services_desc: "Každý balíček je dokončený produkt s konkrétními výstupy a termíny",
        service_1_title: "Deep Research", service_1_desc: "Hloubková analýza trhu, konkurence a publika s reálnými daty.", service_1_time: "5-7 dní", service_1_price: "od $500",
        service_2_title: "Marketing Strategy", service_2_desc: "Mediaplán, funnel, unit economics a 30denní akční plán.", service_2_time: "10-14 dní", service_2_price: "od $1,500",
        service_3_title: "GTM Launch", service_3_desc: "Kompletní balíček pro vstup na trh: od výzkumu k prvním prodejům.", service_3_time: "3-4 týdny", service_3_price: "od $2,500",
        service_4_title: "Creative Pack", service_4_desc: "Hooky, scénáře, ad copy a vizuální směr pro produkci.", service_4_time: "3-5 dní", service_4_price: "od $400",
        service_5_title: "Optimization", service_5_desc: "Audit současné reklamy, odhalení money leaks a plán škálování.", service_5_time: "Měsíčně", service_5_price: "od $800/měs",
        service_6_title: "ICP Deep Profile", service_6_desc: "Hloubkový výzkum ideálního zákazníka: 3-5 detailních Persona karet.", service_6_time: "7-10 dní", service_6_price: "od $600",
        service_7_title: "Competitor Watch", service_7_desc: "Měsíční sledování reklam a strategií konkurence ve vaší nice.", service_7_time: "Měsíčně", service_7_price: "od $300/měs",
        service_8_title: "Funnel Audit", service_8_desc: "Zjišťujeme, kde váš funnel ztrácí peníze, a dáváme 15+ doporučení.", service_8_time: "5-7 dní", service_8_price: "od $700",
        pricing_tag: "Balíčky", pricing_title: "Vyberte si svůj balíček", pricing_desc: "Každý balíček je dokončený produkt. Můžete objednat samostatně nebo kombinovat.",
        package_1_name: "RESEARCH", package_duration_1: "5-7 dní doručení",
        package_1_f1: "Analýza trhu", package_1_f2: "Audit konkurence", package_1_f3: "Profilování publika", package_1_f4: "Kanály + CPM", package_1_f5: "SWOT analýza",
        package_2_name: "STRATEGY", package_duration_2: "10-14 dní doručení",
        package_2_f1: "Vše z Research", package_2_f2: "Marketingová strategie", package_2_f3: "Mediaplán", package_2_f4: "Unit Economics", package_2_f5: "30denní akční plán",
        package_3_name: "LAUNCH", package_duration_3: "3-4 týdny doručení",
        package_3_f1: "Vše ze Strategy", package_3_f2: "Creative Pack", package_3_f3: "Struktura kampaní", package_3_f4: "Tracking checklist", package_3_f5: "30 dní podpora",
        badge_popular: "POPULÁRNÍ", badge_best: "NEJLEPŠÍ HODNOTA",
        btn_contact: "Kontaktovat",
        process_tag: "Proces", process_title: "Jak pracujeme", process_desc: "Od briefu k hotovému deliverable — jen 4 kroky",
        process_1_title: "Brief", process_1_desc: "30minutový hovor nebo chat. Rozumíme vašemu podnikání a cílům.",
        process_2_title: "Výzkum", process_2_desc: "Náš AI systém analyzuje 50+ zdrojů dat ve vaší nice.",
        process_3_title: "Deliverable", process_3_desc: "Získáte finální dokument: strategie, mediaplán, kreativy.",
        process_4_title: "Podpora", process_4_desc: "Pomůžeme s implementací a odpovíme na dotazy.",
        form_title: "Mini-Audit Zdarma",
        form_subtitle: "Do 48 hodin provedeme rychlou analýzu a ukážeme 3 hlavní růstové body.",
        trust_1: "Bez závazků", trust_2: "Odpověď do 48 hod", trust_3: "Reálná data",
        form_website_label: "Váš web nebo produkt", form_niche_label: "Vaše nika", form_niche_select: "Vyberte niku",
        form_email_label: "Email pro výsledky", form_telegram_label: "Telegram (volitelně)",
        btn_audit_submit: "Získat audit zdarma", form_note: "Bez závazků. Odpovíme do 48 hodin.",
        form_success: "Děkujeme! Odpovíme do 48 hodin.",
        faq_tag: "FAQ", faq_title: "Často kladené otázky",
        faq_q1: "Jak dlouho trvá výzkum?", faq_a1: "Research Pack: 5-7 dní. Strategy Pack: 10-14 dní. Launch Pack: 3-4 týdny.",
        faq_q2: "Co získám?", faq_a2: "Konkrétní PDF dokument s reálnými daty, čísly a doporučeními.",
        faq_q3: "Jak to, že je to tak rychlé?", faq_a3: "Používáme AI technologie nové generace, které nám umožňují za 5-7 dní udělat práci, na kterou agentury potřebují 4-6 týdnů.",
        faq_q4: "Co když se mi to nebude líbit?", faq_a4: "Ukazujeme pokrok v každé fázi. Zahrnuje 1 kolo úprav.",
        faq_q5: "Pracujete s malými rozpočty?", faq_a5: "Ano. Vytvořili jsme balíčky od $500, dostupné pro startupy.",
        faq_q6: "V jakých nikách jste experti?", faq_a6: "E-commerce, SaaS, mobilní aplikace, servisní podniky. Analyzujeme data, takže naše metodologie funguje pro jakoukoli niku.",
        faq_q7: "Mohu objednat jen jednu službu?", faq_a7: "Naprosto. Každá služba funguje samostatně.",
        faq_q8: "Jak začít?", faq_a8: "Požádejte o mini-audit. Provedeme 30minutový brief a navrhneme optimální plán růstu.",
        footer_nav: "Navigace", footer_services: "Služby", footer_contact: "Kontakty",
        footer_telegram: "Telegram", footer_email: "Email", footer_audit: "Audit zdarma",
        footer_copyright: "© 2026 SAV.AGENCY • AI-Powered Marketing Research & Strategy"
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

// --- HEADER SCROLL EFFECT ---
const header = document.getElementById('header');

function updateHeader() {
    const scrolled = window.scrollY;
    if (header) {
        if (scrolled > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
}

window.addEventListener('scroll', updateHeader);
updateHeader();

// --- INTERSECTION OBSERVER FOR REVEAL ANIMATIONS ---
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

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
    if (nav) nav.classList.toggle('active');
    if (toggle) toggle.classList.toggle('active');
}

document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.getElementById('nav-links');
        const toggle = document.querySelector('.mobile-menu-toggle');
        if (nav) nav.classList.remove('active');
        if (toggle) toggle.classList.remove('active');
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

// --- COUNT UP ANIMATION ---
function animateCountUp(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// --- OBSERVER FOR COUNT UP ---
const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.getAttribute('data-target'));
            if (!isNaN(target)) {
                animateCountUp(entry.target, target);
            }
            countObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('[data-target]').forEach(el => countObserver.observe(el));

// --- DOM READY ---
document.addEventListener('DOMContentLoaded', () => {
    setLanguage('uk');
});
