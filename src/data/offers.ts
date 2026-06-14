export type OfferType = 'core' | 'addon';
export type OfferLocale = 'uk' | 'en' | 'cs';

type LocalizedText = Record<OfferLocale, string>;
type LocalizedList = Record<OfferLocale, string[]>;

export interface PricingOffer {
  id: string;
  type: OfferType;
  title: LocalizedText;
  description: LocalizedText;
  priceFrom: LocalizedText;
  duration: LocalizedText;
  bestFor: LocalizedText;
  outcome: LocalizedText;
  deliverables: LocalizedList;
  cta: LocalizedText;
  featured?: boolean;
}

export const offers: PricingOffer[] = [
  {
    id: 'growth-intelligence-sprint',
    type: 'core',
    title: {
      uk: 'Стратегічний спринт росту',
      en: 'Growth Intelligence Sprint',
      cs: 'Strategický růstový sprint',
    },
    description: {
      uk: 'Дослідження ринку, портрет клієнта та архітектура оферу до того, як ви витратите бюджет на дизайн, трафік чи розробку.',
      en: 'Market research, Client DNA and offer architecture before you spend on design, traffic or development.',
      cs: 'Průzkum trhu, profil zákazníka a architektura nabídky ještě před investicí do designu, návštěvnosti nebo vývoje.',
    },
    priceFrom: { uk: '€900', en: '€900', cs: '22 000 Kč' },
    duration: { uk: '5-7 днів', en: '5-7 days', cs: '5-7 dní' },
    bestFor: {
      uk: 'Для фаундерів і сервісних бізнесів, яким потрібна ясність перед запуском або масштабуванням.',
      en: 'Founders and service businesses that need clarity before launch or scaling.',
      cs: 'Pro zakladatele a servisní firmy, které potřebují jasno před spuštěním nebo škálováním.',
    },
    outcome: {
      uk: 'Практична карта росту: ринок, ICP, офер, кути комунікації та пріоритети воронки.',
      en: 'A practical growth map: market signal, ICP, offer angles and funnel priorities.',
      cs: 'Praktická mapa růstu: trh, ICP, nabídka, komunikační úhly a priority prodejní cesty.',
    },
    deliverables: {
      uk: ['Аналіз ринку і конкурентів', 'Портрет клієнта та ICP', 'Позиціонування й кути оферу', 'Зріз базової економіки', 'Дорожня карта воронки й дій'],
      en: ['Market and competitor scan', 'Client DNA and ICP profile', 'Offer angles and positioning', 'Unit economics snapshot', 'Funnel/action roadmap'],
      cs: ['Analýza trhu a konkurence', 'Profil zákazníka a ICP', 'Pozicování a úhly nabídky', 'Základní ekonomika projektu', 'Plán prodejní cesty a kroků'],
    },
    cta: { uk: 'Спланувати спринт', en: 'Plan the sprint', cs: 'Naplánovat sprint' },
  },
  {
    id: 'conversion-website-sprint',
    type: 'core',
    title: {
      uk: 'Спринт конверсійного сайту',
      en: 'Conversion Website Sprint',
      cs: 'Sprint konverzního webu',
    },
    description: {
      uk: 'Маркетинговий сайт або лендінг, побудований навколо дослідження, сильного повідомлення і збору заявок.',
      en: 'A marketing website or landing page built around research, message clarity and lead capture.',
      cs: 'Marketingový web nebo landing page postavená na výzkumu, jasném sdělení a sběru poptávek.',
    },
    priceFrom: { uk: '€1,800', en: '€1,800', cs: '45 000 Kč' },
    duration: { uk: '10-14 днів', en: '10-14 days', cs: '10-14 dní' },
    bestFor: {
      uk: 'Для малого бізнесу, агенцій і стартапів у Європі, яким потрібна сильніша онлайн-присутність.',
      en: 'European small businesses, agencies and startups that need a sharper online presence.',
      cs: 'Pro malé firmy, agentury a startupy v Evropě, které potřebují silnější online prezentaci.',
    },
    outcome: {
      uk: 'Живий сайт з чітким позиціонуванням, адаптивним UI, формою заявки і деплоєм.',
      en: 'A live conversion-focused website with clear positioning, responsive UI and deployment.',
      cs: 'Živý web zaměřený na konverzi, s jasným pozicováním, responzivním UI a nasazením.',
    },
    deliverables: {
      uk: ['Структура і конверсійний копірайтинг', 'Візуальний напрям і адаптивний дизайн', 'React/Vite frontend', 'Форма збору заявок', 'SEO-база і деплой на Vercel'],
      en: ['Structure and conversion copy', 'Visual direction and responsive design', 'React/Vite frontend build', 'Lead capture form', 'SEO basics and Vercel deploy'],
      cs: ['Struktura a konverzní texty', 'Vizuální směr a responzivní design', 'React/Vite frontend', 'Formulář pro poptávky', 'SEO základ a nasazení na Vercel'],
    },
    cta: { uk: 'Побудувати сайт', en: 'Build the website', cs: 'Postavit web' },
    featured: true,
  },
  {
    id: 'growth-launch-system',
    type: 'core',
    title: { uk: 'Система запуску та росту', en: 'Growth Launch System', cs: 'Systém spuštění a růstu' },
    description: {
      uk: 'Повний go-to-market пакет, який з’єднує дослідження, сайт, воронку, креативи й аналітику.',
      en: 'A complete go-to-market package that connects research, website, funnel, creative and analytics.',
      cs: 'Kompletní go-to-market balíček propojující výzkum, web, prodejní cestu, kreativu a analytiku.',
    },
    priceFrom: { uk: '€4,500', en: '€4,500', cs: '110 000 Kč' },
    duration: { uk: '4-6 тижнів', en: '4-6 weeks', cs: '4-6 týdnů' },
    bestFor: {
      uk: 'Для команд, які запускають новий офер, продукт або ринок і хочуть одну цілісну систему росту.',
      en: 'Teams launching a new offer, product or market with one coherent growth system.',
      cs: 'Pro týmy, které spouštějí novou nabídku, produkt nebo trh a chtějí jeden ucelený růstový systém.',
    },
    outcome: {
      uk: 'Система, готова до запуску: стратегія, посадкова сторінка, логіка воронки, чеклист трекінгу і пакет креативів.',
      en: 'A launch-ready system: strategy, landing experience, funnel logic, tracking checklist and creative pack.',
      cs: 'Systém připravený ke spuštění: strategie, landing experience, logika prodejní cesty, checklist měření a balíček kreativy.',
    },
    deliverables: {
      uk: ['Стратегічний спринт росту включено', 'Сайт або лендінг', 'Архітектура воронки', 'Чеклист аналітики й трекінгу', 'Пакет креативів для запуску', '30 днів підтримки запуску'],
      en: ['Growth Intelligence Sprint included', 'Website or landing page', 'Funnel architecture', 'Analytics and tracking checklist', 'Creative launch pack', '30-day launch support'],
      cs: ['Strategický růstový sprint v ceně', 'Web nebo landing page', 'Architektura prodejní cesty', 'Checklist analytiky a měření', 'Balíček kreativy pro spuštění', '30 dní podpory po spuštění'],
    },
    cta: { uk: 'Запустити систему', en: 'Launch the system', cs: 'Spustit systém' },
  },
  {
    id: 'client-dna-deep-dive',
    type: 'addon',
    title: { uk: 'Глибокий портрет клієнта', en: 'Client DNA Deep Dive', cs: 'Hloubkový profil zákazníka' },
    description: {
      uk: 'Глибока психологія аудиторії: болі, тригери, бар’єри, заперечення і моменти покупки.',
      en: 'Deep audience psychology, pains, triggers, objections and buying moments.',
      cs: 'Hloubková psychologie zákazníka: potřeby, spouštěče, námitky a momenty nákupu.',
    },
    priceFrom: { uk: '€700', en: '€700', cs: '17 000 Kč' },
    duration: { uk: '3-5 днів', en: '3-5 days', cs: '3-5 dní' },
    bestFor: { uk: 'Для точнішого повідомлення і кращого fit між офером та ринком.', en: 'Teams that need sharper messaging and offer-market fit.', cs: 'Pro týmy, které potřebují přesnější sdělení a lepší fit mezi nabídkou a trhem.' },
    outcome: { uk: 'Профіль аудиторії для текстів, реклами, лендінгів і sales-скриптів.', en: 'A detailed audience profile that feeds copy, ads, landing pages and sales scripts.', cs: 'Detailní profil zákazníka pro texty, reklamy, landing pages a prodejní skripty.' },
    deliverables: { uk: ['Ідентичність аудиторії', 'Тригери болю', 'Бар’єри й міфи', 'Механіка покупки'], en: ['Audience identity', 'Pain triggers', 'Barriers and myths', 'Buying mechanics'], cs: ['Identita zákazníka', 'Spouštěče bolesti', 'Bariéry a mýty', 'Mechanika nákupu'] },
    cta: { uk: 'Додати портрет клієнта', en: 'Add Client DNA', cs: 'Přidat profil zákazníka' },
  },
  {
    id: 'funnel-cro-audit',
    type: 'addon',
    title: { uk: 'Аудит воронки і CRO', en: 'Funnel / CRO Audit', cs: 'Audit prodejní cesty a CRO' },
    description: { uk: 'Знаходимо, де губляться заявки, демо або продажі, і що виправити першим.', en: 'Find where leads, checkouts or demos are leaking and what to fix first.', cs: 'Najdeme, kde unikají poptávky, demo nebo prodeje, a co opravit jako první.' },
    priceFrom: { uk: '€900', en: '€900', cs: '22 000 Kč' },
    duration: { uk: '5-7 днів', en: '5-7 days', cs: '5-7 dní' },
    bestFor: { uk: 'Для бізнесів із трафіком, але слабкою конверсією.', en: 'Businesses with traffic but weak conversion.', cs: 'Pro firmy s návštěvností, ale slabší konverzí.' },
    outcome: { uk: 'Пріоритетні правки для CTA, структури, оферу, checkout і follow-up.', en: 'Prioritized fixes across CTA, page structure, offer, checkout and follow-up.', cs: 'Prioritní úpravy CTA, struktury stránky, nabídky, checkoutu a follow-upu.' },
    deliverables: { uk: ['Розбір воронки', 'CRO-чеклист', 'Пріоритетний список дій', 'Рекомендації для швидких перемог'], en: ['Funnel teardown', 'CRO checklist', 'Priority action list', 'Quick-win recommendations'], cs: ['Rozbor prodejní cesty', 'CRO checklist', 'Prioritní seznam kroků', 'Doporučení pro rychlé zlepšení'] },
    cta: { uk: 'Аудит воронки', en: 'Audit the funnel', cs: 'Audit prodejní cesty' },
  },
  {
    id: 'creative-strategy-pack',
    type: 'addon',
    title: { uk: 'Пакет креативної стратегії', en: 'Creative Strategy Pack', cs: 'Balíček kreativní strategie' },
    description: { uk: 'Хуки, комунікаційні кути і production-брифи для платної реклами в соцмережах або запускових кампаній.', en: 'Hooks, angles and production briefs for paid social or launch campaigns.', cs: 'Hooky, komunikační úhly a produkční briefy pro placené sociální sítě nebo spouštěcí kampaně.' },
    priceFrom: { uk: '€600', en: '€600', cs: '15 000 Kč' },
    duration: { uk: '3-5 днів', en: '3-5 days', cs: '3-5 dní' },
    bestFor: { uk: 'Для підготовки креативних тестів у Meta, TikTok або YouTube.', en: 'Teams preparing Meta, TikTok or YouTube creative tests.', cs: 'Pro týmy připravující kreativní testy na Meta, TikToku nebo YouTube.' },
    outcome: { uk: 'Карта тестування креативів на основі аудиторії та кутів оферу.', en: 'A ready-to-produce creative testing map based on audience and offer angles.', cs: 'Mapa testování kreativy postavená na zákazníkovi a úhlech nabídky.' },
    deliverables: { uk: ['10+ хуків', 'Креативні кути', 'Напрями рекламних текстів', 'Production-бриф'], en: ['10+ hooks', 'Creative angles', 'Ad copy directions', 'Production brief'], cs: ['10+ hooků', 'Kreativní úhly', 'Směry reklamních textů', 'Produkční brief'] },
    cta: { uk: 'Спланувати креативи', en: 'Plan creatives', cs: 'Naplánovat kreativu' },
  },
  {
    id: 'analytics-tracking-audit',
    type: 'addon',
    title: { uk: 'Аудит аналітики і трекінгу', en: 'Analytics & Tracking Audit', cs: 'Audit analytiky a měření' },
    description: { uk: 'GA4, події, UTM-логіка і вимірювання кампаній перед масштабуванням.', en: 'GA4, events, UTM logic and campaign measurement reviewed before scaling.', cs: 'GA4, události, UTM logika a měření kampaní před škálováním.' },
    priceFrom: { uk: '€800', en: '€800', cs: '20 000 Kč' },
    duration: { uk: '3-5 днів', en: '3-5 days', cs: '3-5 dní' },
    bestFor: { uk: 'Для команд, яким потрібні чистіші рішення на основі даних кампаній і воронки.', en: 'Teams that need cleaner decisions from campaign and funnel data.', cs: 'Pro týmy, které potřebují čistší rozhodování z dat kampaní a prodejní cesty.' },
    outcome: { uk: 'Звіт про стан трекінгу з прогалинами, правками і пріоритетами вимірювання.', en: 'A tracking health report with gaps, fixes and measurement priorities.', cs: 'Zpráva o stavu měření s mezerami, opravami a prioritami.' },
    deliverables: { uk: ['Аудит трекінгу', 'Карта подій', 'UTM-структура', 'Рекомендації для dashboard'], en: ['Tracking audit', 'Event map', 'UTM structure', 'Dashboard recommendations'], cs: ['Audit měření', 'Mapa událostí', 'UTM struktura', 'Doporučení pro dashboard'] },
    cta: { uk: 'Аудит трекінгу', en: 'Audit tracking', cs: 'Audit měření' },
  },
  {
    id: 'monthly-growth-ops',
    type: 'addon',
    title: { uk: 'Щомісячний супровід росту', en: 'Monthly Growth Ops', cs: 'Měsíční podpora růstu' },
    description: { uk: 'Постійна оптимізація, звітність, експерименти й ітерації системи росту.', en: 'Ongoing optimization, reporting, experiments and growth system iteration.', cs: 'Průběžná optimalizace, reporty, experimenty a iterace růstového systému.' },
    priceFrom: { uk: '€1,200/mo', en: '€1,200/mo', cs: '30 000 Kč/měs.' },
    duration: { uk: 'Щомісяця', en: 'Monthly', cs: 'Měsíčně' },
    bestFor: { uk: 'Для компаній, яким потрібен партнер з росту після запуску.', en: 'Companies that want a steady growth partner after launch.', cs: 'Pro firmy, které chtějí stabilního partnera pro růst po spuštění.' },
    outcome: { uk: 'Місячний ритм аналізу, рішень і експериментів замість випадкових задач.', en: 'A monthly rhythm of analysis, decisions and experiments instead of random tasks.', cs: 'Měsíční rytmus analýzy, rozhodnutí a experimentů místo náhodných úkolů.' },
    deliverables: { uk: ['Щомісячний огляд', 'Дорожня карта експериментів', 'Фідбек по креативах і воронці', 'Процес звітності'], en: ['Monthly review', 'Experiment roadmap', 'Creative/funnel feedback', 'Reporting flow'], cs: ['Měsíční review', 'Plán experimentů', 'Zpětná vazba ke kreativě a prodejní cestě', 'Proces reportingu'] },
    cta: { uk: 'Обговорити супровід', en: 'Discuss retainer', cs: 'Probrat support' },
  },
  {
    id: 'mvp-product-system',
    type: 'addon',
    title: { uk: 'MVP і продуктова система', en: 'MVP / Product System', cs: 'MVP a produktový systém' },
    description: { uk: 'Продуктовий інтерфейс, логіка бази даних і легкі workflow для early-stage MVP.', en: 'Product interface, database logic and lightweight workflows for early-stage MVPs.', cs: 'Produktové rozhraní, databázová logika a lehké workflow pro early-stage MVP.' },
    priceFrom: { uk: '€3,500', en: '€3,500', cs: '85 000 Kč' },
    duration: { uk: '3-5 тижнів', en: '3-5 weeks', cs: '3-5 týdnů' },
    bestFor: { uk: 'Для фаундерів, яким потрібен робочий продукт, а не тільки маркетинговий сайт.', en: 'Founders who need a functional product surface, not only a marketing site.', cs: 'Pro foundery, kteří potřebují funkční produkt, nejen marketingový web.' },
    outcome: { uk: 'Робоча продуктова система з frontend, потоками даних і базовою операційною логікою.', en: 'A working product system with frontend, data flows and basic operational logic.', cs: 'Funkční produktový systém s frontendem, datovými toky a základní provozní logikou.' },
    deliverables: { uk: ['Продуктова архітектура', 'React/Vite frontend', 'Сценарії на базі даних', 'Логіка адміна або користувача'], en: ['Product architecture', 'React/Vite frontend', 'Database-backed flows', 'Admin or user logic'], cs: ['Produktová architektura', 'React/Vite frontend', 'Scénáře napojené na databázi', 'Admin nebo uživatelská logika'] },
    cta: { uk: 'Оцінити MVP', en: 'Scope MVP', cs: 'Nacenit MVP' },
  },
];
