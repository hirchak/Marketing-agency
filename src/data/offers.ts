export type OfferLocale = 'uk' | 'en' | 'cs';
export type OfferCategoryId =
  | 'marketing-growth'
  | 'websites'
  | 'media-content'
  | 'digital-products-ai';

export type LocalizedText = Record<OfferLocale, string>;
export type LocalizedList = Record<OfferLocale, string[]>;

export interface OfferScopeSection {
  label: LocalizedText;
  items: LocalizedList;
}

export interface PricingOffer {
  id: string;
  category: OfferCategoryId;
  title: LocalizedText;
  description: LocalizedText;
  price: LocalizedText;
  timeline: LocalizedText;
  suitableFor?: LocalizedList;
  scopes: OfferScopeSection[];
  outcome: LocalizedList;
  notes?: LocalizedList;
}

export interface OfferCategory {
  id: OfferCategoryId;
  title: LocalizedText;
  description: LocalizedText;
  examplesLabel?: LocalizedText;
  examples?: LocalizedList;
  offers: PricingOffer[];
}

export interface PricingSectionCopy {
  kicker: string;
  title: string;
  subtitle: string;
  priceLabel: string;
  timelineLabel: string;
  suitableForLabel: string;
  outcomeLabel: string;
  notesLabel: string;
  scopeSummary: string;
  categoryLabel: string;
  fitCheck: {
    eyebrow: string;
    title: string;
    description: string;
    clarifiesLabel: string;
    clarifies: string[];
    preparation: string;
    startingOptionsLabel: string;
    startingOptions: string[];
    cta: string;
  };
  conditions: {
    eyebrow: string;
    title: string;
    items: string[];
  };
}

const samePrice = (value: string): LocalizedText => ({ uk: value, en: value, cs: value });

const marketingGrowth: OfferCategory = {
  id: 'marketing-growth',
  title: {
    uk: 'Маркетинг і зростання',
    en: 'Marketing and Growth',
    cs: 'Marketing a růst',
  },
  description: {
    uk: 'Ми досліджуємо ринок і покупця, визначаємо головний пріоритет зростання та готуємо практичні матеріали для реалізації.',
    en: 'We research the market and buyer, identify the main growth priority and prepare practical materials for implementation.',
    cs: 'Zkoumáme trh a zákazníka, určujeme hlavní prioritu růstu a připravujeme praktické podklady pro realizaci.',
  },
  offers: [
    {
      id: 'growth-audit',
      category: 'marketing-growth',
      title: { uk: 'Аудит зростання', en: 'Growth Audit', cs: 'Audit růstu' },
      description: {
        uk: 'Сфокусована діагностика ринку, пропозиції, шляху клієнта та місць, де бізнес втрачає потенційних замовників.',
        en: 'A focused diagnosis of the market, offer, customer inquiry path and the points where potential clients are lost.',
        cs: 'Cílená diagnostika trhu, nabídky, poptávkové cesty a míst, kde firma ztrácí potenciální klienty.',
      },
      price: samePrice('EUR 600–900'),
      timeline: {
        uk: '5–7 робочих днів',
        en: '5–7 working days',
        cs: '5–7 pracovních dnů',
      },
      scopes: [
        {
          label: { uk: 'Діагностика охоплює', en: 'Diagnosis covers', cs: 'Diagnostika zahrnuje' },
          items: {
            uk: [
              'Ринок і цільового покупця',
              'Поточне позиціонування та пропозицію',
              'Шлях клієнта до звернення',
              'Процес подальшої комунікації',
              'Вузькі місця воронки',
              'Точки втрати потенційних клієнтів',
            ],
            en: [
              'The market and target buyer',
              'Current positioning and offer',
              'Customer inquiry path',
              'Follow-up process',
              'Funnel bottlenecks',
              'Points where potential clients are lost',
            ],
            cs: [
              'Trh a cílového zákazníka',
              'Současný positioning a nabídku',
              'Cestu zákazníka k poptávce',
              'Proces následné komunikace',
              'Úzká místa ve funnelu',
              'Místa, kde se ztrácejí potenciální klienti',
            ],
          },
        },
      ],
      outcome: {
        uk: ['Карта вузьких місць', 'Одна пріоритетна гіпотеза зростання', 'Рекомендовані дії', '30-денний план реалізації'],
        en: ['Bottleneck map', 'One priority growth hypothesis', 'Recommended actions', '30-day implementation plan'],
        cs: ['Mapa úzkých míst', 'Jedna prioritní hypotéza růstu', 'Doporučené kroky', '30denní realizační plán'],
      },
      notes: {
        uk: ['Якщо протягом 30 днів починається більша співпраця, вартість аудиту зростання зараховується до її бюджету.'],
        en: ['If a larger engagement begins within 30 days, the Growth Audit fee is credited toward that work.'],
        cs: ['Pokud do 30 dnů začne větší spolupráce, cena auditu růstu se započítá do této práce.'],
      },
    },
    {
      id: 'strategy-sprint',
      category: 'marketing-growth',
      title: { uk: 'Стратегічний спринт', en: 'Strategy Sprint', cs: 'Strategický sprint' },
      description: {
        uk: 'Поглиблена стратегічна робота над ринком, аудиторією, позиціонуванням, пропозицією, повідомленнями та архітектурою воронки.',
        en: 'A deeper strategic engagement covering the market, audience, positioning, offer, messaging and funnel architecture.',
        cs: 'Hlubší strategická spolupráce zaměřená na trh, publikum, positioning, nabídku, sdělení a architekturu funnelu.',
      },
      price: samePrice('EUR 1,500–3,500'),
      timeline: { uk: '2–3 тижні', en: '2–3 weeks', cs: '2–3 týdny' },
      scopes: [
        {
          label: { uk: 'Робота охоплює', en: 'Engagement covers', cs: 'Spolupráce zahrnuje' },
          items: {
            uk: ['Сегмент ринку', 'Цільову аудиторію', 'Позиціонування', 'Структуру пропозиції', 'Шлях клієнта', 'Архітектуру повідомлень', 'Архітектуру воронки', 'Пріоритети запуску'],
            en: ['Market segment', 'Target audience', 'Positioning', 'Offer structure', 'Customer journey', 'Message architecture', 'Funnel architecture', 'Launch priorities'],
            cs: ['Segment trhu', 'Cílové publikum', 'Positioning', 'Strukturu nabídky', 'Cestu zákazníka', 'Architekturu sdělení', 'Architekturu funnelu', 'Priority spuštění'],
          },
        },
      ],
      outcome: {
        uk: ['Дослідження та стратегічні висновки', 'Визначене позиціонування', 'Структурована пропозиція', 'Архітектура повідомлень', 'Структура воронки', 'Пріоритетний план запуску', 'Готова до реалізації система для маркетингу, контенту, продажів або створення сайту'],
        en: ['Research and strategic findings', 'Defined positioning', 'Structured offer', 'Message architecture', 'Funnel structure', 'Prioritized launch plan', 'Implementation-ready system for marketing, content, sales or website production'],
        cs: ['Výzkum a strategická zjištění', 'Definovaný positioning', 'Strukturovaná nabídka', 'Architektura sdělení', 'Struktura funnelu', 'Prioritizovaný plán spuštění', 'Systém připravený k realizaci marketingu, obsahu, prodeje nebo webu'],
      },
    },
    {
      id: 'optimization-partner',
      category: 'marketing-growth',
      title: { uk: 'Партнер з оптимізації', en: 'Optimization Partner', cs: 'Partner pro optimalizaci' },
      description: {
        uk: 'Постійна робота над одним узгодженим бізнес-пріоритетом у межах кожного місячного циклу.',
        en: 'Ongoing work focused on one agreed business priority during each monthly cycle.',
        cs: 'Průběžná práce zaměřená na jednu dohodnutou obchodní prioritu v každém měsíčním cyklu.',
      },
      price: {
        uk: 'EUR 1,500–4,500 на місяць',
        en: 'EUR 1,500–4,500 per month',
        cs: 'EUR 1,500–4,500 měsíčně',
      },
      timeline: { uk: 'Щомісячна співпраця', en: 'Monthly engagement', cs: 'Měsíční spolupráce' },
      scopes: [
        {
          label: { uk: 'Можливі напрями роботи', en: 'Possible areas of work', cs: 'Možné oblasti práce' },
          items: {
            uk: ['Залучення клієнтів', 'Оптимізація воронки', 'Покращення конверсії', 'Покращення сайту', 'Аналітика', 'CRM і подальша комунікація', 'Контент-системи', 'Операційні покращення', 'Підтримка реалізації'],
            en: ['Customer acquisition', 'Funnel optimization', 'Conversion improvement', 'Website improvements', 'Analytics', 'CRM and follow-up', 'Content systems', 'Operational improvements', 'Implementation support'],
            cs: ['Získávání zákazníků', 'Optimalizace funnelu', 'Zlepšování konverze', 'Úpravy webu', 'Analytika', 'CRM a následná komunikace', 'Obsahové systémy', 'Provozní zlepšení', 'Podpora realizace'],
          },
        },
      ],
      outcome: {
        uk: ['Безперервна реалізація та вдосконалення', 'Аналітика й оцінка результативності', 'Практична виробнича робота', 'Стратегічний огляд на рівні засновника', 'Наступні рішення на основі реальних сигналів клієнтів і бізнесу'],
        en: ['Continuous implementation and improvement', 'Analytics and performance review', 'Practical production work', 'Founder-level strategic review', 'Next decisions based on real customer and business signals'],
        cs: ['Průběžná realizace a zlepšování', 'Analytika a vyhodnocení výkonu', 'Praktická produkční práce', 'Strategické zhodnocení na úrovni zakladatele', 'Další rozhodnutí podle skutečných signálů zákazníků a firmy'],
      },
      notes: {
        uk: ['Пріоритет і критерії оцінювання узгоджуються на початку кожного циклу.'],
        en: ['The priority and measurement criteria are agreed at the beginning of each cycle.'],
        cs: ['Priorita a kritéria měření se dohodnou na začátku každého cyklu.'],
      },
    },
  ],
};

const websites: OfferCategory = {
  id: 'websites',
  title: { uk: 'Вебсайти', en: 'Websites', cs: 'Webové stránky' },
  description: {
    uk: 'Сайти проєктуються навколо однієї чіткої дії клієнта. До початку дизайну ми вивчаємо покупця, пропозицію, ринковий контекст, вимоги до довіри та шлях до конверсії.',
    en: 'Websites are designed around one clear customer action. Before designing the page, we examine the buyer, offer, market context, trust requirements and conversion path.',
    cs: 'Weby navrhujeme kolem jedné jasné akce zákazníka. Před návrhem stránky zkoumáme zákazníka, nabídku, kontext trhu, požadavky na důvěryhodnost a konverzní cestu.',
  },
  offers: [
    {
      id: 'starter-website',
      category: 'websites',
      title: { uk: 'Стартовий сайт', en: 'Starter Website', cs: 'Startovací web' },
      description: {
        uk: 'Лендінг або компактний сайт із базовим аналізом, чітким повідомленням і прямим шляхом до контакту.',
        en: 'A landing page or compact website with foundational analysis, clear messaging and a direct path to contact.',
        cs: 'Landing page nebo kompaktní web se základní analýzou, jasným sdělením a přímou cestou ke kontaktu.',
      },
      price: samePrice('EUR 350–900'),
      timeline: { uk: '5–12 робочих днів', en: '5–12 working days', cs: '5–12 pracovních dnů' },
      suitableFor: {
        uk: ['Експертів', 'Малий бізнес', 'Події', 'Нові послуги', 'Запуски нових продуктів', 'Прості сторінки для перевірки ідеї'],
        en: ['Experts', 'Small businesses', 'Events', 'New services', 'New product launches', 'Simple validation pages'],
        cs: ['Odborníky', 'Malé firmy', 'Události', 'Nové služby', 'Spuštění nových produktů', 'Jednoduché validační stránky'],
      },
      scopes: [
        {
          label: { uk: 'Робота включає', en: 'Work includes', cs: 'Práce zahrnuje' },
          items: {
            uk: ['Лендінг або компактний сайт', 'Базовий аналіз пропозиції та аудиторії', 'Структуру сайту', 'Основні тексти сайту', 'Адаптивний дизайн', 'Розробку', 'Базове SEO-налаштування', 'Підключення аналітики', 'Чіткий шлях до контакту або звернення', 'Запуск і передачу проєкту'],
            en: ['Landing page or compact website', 'Basic offer and audience analysis', 'Website structure', 'Core website copy', 'Responsive design', 'Development', 'Basic SEO setup', 'Analytics connection', 'Clear contact or inquiry path', 'Launch and handoff'],
            cs: ['Landing page nebo kompaktní web', 'Základní analýzu nabídky a publika', 'Strukturu webu', 'Hlavní texty webu', 'Responzivní design', 'Vývoj', 'Základní SEO nastavení', 'Napojení analytiky', 'Jasnou cestu ke kontaktu nebo poptávce', 'Spuštění a předání'],
          },
        },
      ],
      outcome: {
        uk: ['Адаптивний живий сайт із чітким повідомленням і прямим шляхом від уваги відвідувача до контакту.'],
        en: ['A responsive live website with clear messaging and a direct path from visitor attention to contact.'],
        cs: ['Responzivní živý web s jasným sdělením a přímou cestou od pozornosti návštěvníka ke kontaktu.'],
      },
      notes: {
        uk: ['Маркетинговий аналіз використовується всередині виробничого процесу. Окремий пакет стратегії або дослідження не входить у вартість.'],
        en: ['Marketing analysis is used internally during production. A separate strategy or research package is not included.'],
        cs: ['Marketingová analýza se používá interně během realizace. Samostatný strategický nebo výzkumný balíček není součástí.'],
      },
    },
    {
      id: 'conversion-website',
      category: 'websites',
      title: { uk: 'Конверсійний сайт', en: 'Conversion Website', cs: 'Konverzní web' },
      description: {
        uk: 'Повноцінний сайт зі сильнішим позиціонуванням, розвиненою пропозицією та продуманим шляхом від першого екрана до звернення.',
        en: 'A complete website with stronger positioning, a more developed offer and a deliberate journey from the first screen to an inquiry.',
        cs: 'Kompletní web se silnějším positioningem, rozvinutější nabídkou a promyšlenou cestou od první obrazovky k poptávce.',
      },
      price: samePrice('EUR 1,800–4,500'),
      timeline: { uk: '2–4 тижні', en: '2–4 weeks', cs: '2–4 týdny' },
      suitableFor: {
        uk: ['Бізнеси, яким потрібні сильніше позиціонування, розвиненіша пропозиція та продуманий шлях до звернення'],
        en: ['Businesses that require stronger positioning, a more developed offer and a deliberate journey from the first screen to an inquiry'],
        cs: ['Firmy, které potřebují silnější positioning, propracovanější nabídku a promyšlenou cestu od první obrazovky k poptávce'],
      },
      scopes: [
        {
          label: { uk: 'Робота включає', en: 'Work includes', cs: 'Práce zahrnuje' },
          items: {
            uk: ['Дослідження ринку та аудиторії', 'Уточнення позиціонування', 'Архітектуру пропозиції', 'Архітектуру повідомлень', 'Шлях клієнта', 'Інформаційну архітектуру сайту', 'Вайрфрейми', 'Тексти сайту', 'Візуальний дизайн', 'Адаптивну розробку', 'Шлях CTA та форми', 'План відстеження', 'Перевірку конверсії та мобільної версії', 'Запуск і передачу проєкту'],
            en: ['Market and audience research', 'Positioning clarification', 'Offer architecture', 'Message architecture', 'Customer journey', 'Website information architecture', 'Wireframes', 'Website copy', 'Visual design', 'Responsive development', 'CTA and form journey', 'Tracking plan', 'Conversion and mobile review', 'Launch and handoff'],
            cs: ['Výzkum trhu a publika', 'Upřesnění positioningu', 'Architekturu nabídky', 'Architekturu sdělení', 'Cestu zákazníka', 'Informační architekturu webu', 'Wireframy', 'Texty webu', 'Vizuální design', 'Responzivní vývoj', 'Cestu CTA a formuláře', 'Plán měření', 'Kontrolu konverzí a mobilní verze', 'Spuštění a předání'],
          },
        },
      ],
      outcome: {
        uk: ['Повноцінний живий сайт із компактною маркетинговою основою, яку також можна використовувати для реклами, контенту, продажів і майбутніх воронок.'],
        en: ['A complete live website supported by a compact marketing foundation that can also guide advertising, content, sales and future funnels.'],
        cs: ['Kompletní živý web podpořený kompaktním marketingovým základem, který může řídit také reklamu, obsah, prodej a budoucí funnely.'],
      },
    },
  ],
};

const mediaContent: OfferCategory = {
  id: 'media-content',
  title: { uk: 'Медіа та контент', en: 'Media and Content', cs: 'Média a obsah' },
  description: {
    uk: 'Ми будуємо цілісну систему від контент-стратегії та ідей до виробництва, публікації, вимірювання й наступної дії клієнта. Мета — не окремі пости, а послідовна система охоплення, довіри, попиту та конверсії.',
    en: 'We build a complete system from content strategy and ideas to production, publication, measurement and the next customer action. The objective is not disconnected posts, but a consistent system that develops reach, trust, demand and conversion.',
    cs: 'Budujeme ucelený systém od obsahové strategie a nápadů přes produkci, publikaci a měření až po další krok zákazníka. Cílem nejsou izolované příspěvky, ale konzistentní systém pro dosah, důvěru, poptávku a konverzi.',
  },
  offers: [
    {
      id: 'content-channel-system',
      category: 'media-content',
      title: { uk: 'Система контенту та каналів', en: 'Content and Channel System', cs: 'Systém obsahu a kanálů' },
      description: {
        uk: 'Стратегічна та операційна основа для послідовного планування, виробництва, публікації й оцінювання контенту.',
        en: 'A strategic and operational foundation for planning, producing, publishing and evaluating content consistently.',
        cs: 'Strategický a provozní základ pro konzistentní plánování, tvorbu, publikaci a vyhodnocování obsahu.',
      },
      price: {
        uk: 'Визначається після Fit Check',
        en: 'Defined after Fit Check',
        cs: 'Stanoví se po Fit Checku',
      },
      timeline: { uk: '2–3 тижні', en: '2–3 weeks', cs: '2–3 týdny' },
      suitableFor: {
        uk: ['Бізнеси, експерти, персональні бренди та продукти, які вже мають експертизу, але не мають структурованої контент-системи'],
        en: ['Businesses, experts, personal brands and products that already have expertise but lack a structured content system'],
        cs: ['Firmy, odborníky, osobní značky a produkty, které již mají expertizu, ale chybí jim strukturovaný obsahový systém'],
      },
      scopes: [
        {
          label: { uk: 'Робота включає', en: 'Work includes', cs: 'Práce zahrnuje' },
          items: {
            uk: ['Визначення аудиторії', 'Бізнес-цілі та комунікаційні цілі', 'Пріоритети платформ', 'Ролі охоплення, довіри та конверсії', 'Контентні напрями', 'Повторювані формати та серії', 'Систему тем та ідей', 'Структуру CTA', 'Контентний процес', 'Відповідальність за виробництво', 'Календар публікацій', 'Систему вимірювання'],
            en: ['Audience definition', 'Business and communication goals', 'Platform priorities', 'Reach, trust and conversion roles', 'Content pillars', 'Recurring formats and series', 'Topic and idea system', 'CTA structure', 'Content workflow', 'Production responsibilities', 'Publishing calendar', 'Measurement framework'],
            cs: ['Definici publika', 'Obchodní a komunikační cíle', 'Priority platforem', 'Role dosahu, důvěry a konverze', 'Obsahové pilíře', 'Opakující se formáty a série', 'Systém témat a nápadů', 'Strukturu CTA', 'Obsahový workflow', 'Odpovědnosti za produkci', 'Publikační kalendář', 'Rámec měření'],
          },
        },
        {
          label: { uk: 'Можливі платформи', en: 'Possible platforms', cs: 'Možné platformy' },
          items: {
            uk: ['YouTube', 'Instagram', 'TikTok', 'Кросплатформні контент-системи'],
            en: ['YouTube', 'Instagram', 'TikTok', 'Cross-platform content systems'],
            cs: ['YouTube', 'Instagram', 'TikTok', 'Multiplatformní obsahové systémy'],
          },
        },
      ],
      outcome: {
        uk: ['Стратегічна та операційна контент-основа, за допомогою якої команда може послідовно планувати, виробляти, публікувати та оцінювати контент.'],
        en: ['A strategic and operational content foundation that the team can use to plan, produce, publish and evaluate content consistently.'],
        cs: ['Strategický a provozní obsahový základ, se kterým může tým konzistentně plánovat, tvořit, publikovat a vyhodnocovat obsah.'],
      },
      notes: {
        uk: ['Зйомка та повне виробництво контент-серії оцінюються окремо.'],
        en: ['Filming and full production of a content series are scoped separately.'],
        cs: ['Natáčení a kompletní produkce obsahové série se naceňují samostatně.'],
      },
    },
    {
      id: 'video-production-sprint',
      category: 'media-content',
      title: { uk: 'Спринт відеовиробництва', en: 'Video Production Sprint', cs: 'Sprint videoprodukce' },
      description: {
        uk: 'Визначений виробничий цикл для відеосерії, епізоду, кампанії, запуску продукту чи послуги або конкретної контентної ініціативи.',
        en: 'A defined production cycle for a video series, episode, campaign, product or service launch, or a specific content initiative.',
        cs: 'Definovaný produkční cyklus pro videosérii, epizodu, kampaň, spuštění produktu či služby nebo konkrétní obsahovou iniciativu.',
      },
      price: {
        uk: 'Визначається після Fit Check',
        en: 'Defined after Fit Check',
        cs: 'Stanoví se po Fit Checku',
      },
      timeline: {
        uk: 'Визначається після Fit Check',
        en: 'Defined after Fit Check',
        cs: 'Stanoví se po Fit Checku',
      },
      suitableFor: {
        uk: ['Серії коротких відео', 'Довгого епізоду', 'Кампанії', 'Запуску продукту', 'Запуску послуги', 'Конкретної контентної ініціативи'],
        en: ['A short-form video series', 'A long-form episode', 'A campaign', 'A product launch', 'A service launch', 'A specific content initiative'],
        cs: ['Sérii krátkých videí', 'Dlouhou epizodu', 'Kampaň', 'Spuštění produktu', 'Spuštění služby', 'Konkrétní obsahovou iniciativu'],
      },
      scopes: [
        {
          label: { uk: 'Робота може включати', en: 'Work may include', cs: 'Práce může zahrnovat' },
          items: {
            uk: ['Дослідження', 'Креативний напрям', 'Контентні ідеї', 'Пакування контенту', 'Сценарії', 'Сторіборди або структуру кадрів', 'Планування виробництва', 'План зйомки', 'Координацію команди', 'Координацію локації', 'Зйомку', 'Монтаж', 'Субтитри', 'Адаптації для окремих платформ', 'Пакет для публікації'],
            en: ['Research', 'Creative direction', 'Content ideas', 'Content packaging', 'Scripts', 'Storyboards or shot structure', 'Production planning', 'Shoot plan', 'Crew coordination', 'Location coordination', 'Filming', 'Editing', 'Captions', 'Platform-specific adaptations', 'Publication package'],
            cs: ['Výzkum', 'Kreativní vedení', 'Obsahové nápady', 'Zpracování obsahu', 'Scénáře', 'Storyboardy nebo strukturu záběrů', 'Plánování produkce', 'Plán natáčení', 'Koordinaci štábu', 'Koordinaci lokace', 'Natáčení', 'Střih', 'Titulky', 'Adaptace pro konkrétní platformy', 'Publikační balíček'],
          },
        },
      ],
      outcome: {
        uk: ['Завершений набір готових до публікації відеоматеріалів для обраних платформ і бізнес-цілі.'],
        en: ['A completed set of publication-ready video assets prepared for the selected platforms and business objective.'],
        cs: ['Dokončená sada video materiálů připravených k publikaci pro vybrané platformy a obchodní cíl.'],
      },
      notes: {
        uk: ['Обсяг виробництва, формати, локації, команда, подорожі, учасники зйомки, кількість раундів правок, ліцензування та відповідальність за публікацію підтверджуються під час визначення обсягу робіт.'],
        en: ['Production volume, formats, locations, crew, travel, talent, revision rounds, licensing and publication responsibilities are confirmed during scoping.'],
        cs: ['Objem produkce, formáty, lokace, štáb, cestování, účinkující, kola revizí, licence a odpovědnost za publikaci se potvrzují při vymezení rozsahu.'],
      },
    },
    {
      id: 'full-cycle-media-partner',
      category: 'media-content',
      title: { uk: 'Медіапартнер повного циклу', en: 'Full-Cycle Media Partner', cs: 'Mediální partner pro celý cyklus' },
      description: {
        uk: 'Постійна система медіа та контенту, якою ми керуємо від планування до публікації й навчання на результатах.',
        en: 'An ongoing media and content system managed from planning to publication and learning.',
        cs: 'Průběžný systém médií a obsahu řízený od plánování přes publikaci až po vyhodnocení a učení.',
      },
      price: {
        uk: 'Визначається після Fit Check',
        en: 'Defined after Fit Check',
        cs: 'Stanoví se po Fit Checku',
      },
      timeline: { uk: 'Щомісячна співпраця', en: 'Monthly engagement', cs: 'Měsíční spolupráce' },
      scopes: [
        {
          label: { uk: 'Робота може включати', en: 'Work may include', cs: 'Práce může zahrnovat' },
          items: {
            uk: ['Щомісячне планування контенту', 'Дослідження та розробку ідей', 'Сценарії', 'Підготовку виробництва', 'Зйомку', 'Монтаж', 'Адаптації для платформ', 'Публікацію', 'Аналітику', 'Щомісячний огляд', 'Наступну ітерацію на основі реальних сигналів'],
            en: ['Monthly content planning', 'Research and ideation', 'Scripts', 'Production preparation', 'Filming', 'Editing', 'Platform adaptations', 'Publishing', 'Analytics', 'Monthly review', 'Next iteration based on real signals'],
            cs: ['Měsíční plánování obsahu', 'Výzkum a tvorbu nápadů', 'Scénáře', 'Přípravu produkce', 'Natáčení', 'Střih', 'Adaptace pro platformy', 'Publikaci', 'Analytiku', 'Měsíční vyhodnocení', 'Další iteraci podle skutečných signálů'],
          },
        },
      ],
      outcome: {
        uk: ['Послідовний щомісячний цикл контенту та відео з чіткими обов’язками, ритмом виробництва, процесом публікації та безперервним удосконаленням.'],
        en: ['A consistent monthly content and video cycle with clear responsibilities, production rhythm, publication process and continuous improvement.'],
        cs: ['Konzistentní měsíční cyklus obsahu a videa s jasnými odpovědnostmi, rytmem produkce, publikačním procesem a průběžným zlepšováním.'],
      },
      notes: {
        uk: ['Медіабюджет, подорожі та зовнішні виробничі витрати розраховуються окремо.'],
        en: ['Media spend, travel and external production costs are calculated separately.'],
        cs: ['Mediální rozpočet, cestování a externí produkční náklady se počítají samostatně.'],
      },
    },
  ],
};

const digitalProductsAi: OfferCategory = {
  id: 'digital-products-ai',
  title: { uk: 'Цифрові продукти та ШІ', en: 'Digital Products and AI', cs: 'Digitální produkty a AI' },
  description: {
    uk: 'Ми проєктуємо шляхи користувачів, ролі, дані, автоматизацію та операційну логіку до початку розробки.',
    en: 'We design the user journeys, roles, data, automation and operational logic before development begins.',
    cs: 'Než začne vývoj, navrhujeme uživatelské cesty, role, data, automatizaci a provozní logiku.',
  },
  examplesLabel: { uk: 'Можливі рішення', en: 'Possible solutions', cs: 'Možná řešení' },
  examples: {
    uk: ['Боти', 'ШІ-асистенти', 'Системи автоматизації', 'Дашборди', 'Клієнтські портали', 'Внутрішні робочі простори', 'Цифрові платформи', 'MVP'],
    en: ['Bots', 'AI assistants', 'Automation systems', 'Dashboards', 'Client portals', 'Internal workspaces', 'Digital platforms', 'MVPs'],
    cs: ['Boti', 'AI asistenti', 'Automatizační systémy', 'Dashboardy', 'Klientské portály', 'Interní pracovní prostředí', 'Digitální platformy', 'MVP'],
  },
  offers: [
    {
      id: 'ai-business-system-discovery',
      category: 'digital-products-ai',
      title: { uk: 'Дослідження бізнес-системи зі ШІ', en: 'AI Business System Discovery', cs: 'Discovery AI business systému' },
      description: {
        uk: 'Обов’язковий етап для продуктів або процесів зі ШІ, автоматизацією, приватними даними, інтеграціями чи складною операційною логікою.',
        en: 'Required for products or processes involving AI, automation, private data, integrations or complex operational logic.',
        cs: 'Povinná fáze pro produkty nebo procesy zahrnující AI, automatizaci, soukromá data, integrace nebo složitou provozní logiku.',
      },
      price: samePrice('EUR 900–2,500'),
      timeline: { uk: '1–2 тижні', en: '1–2 weeks', cs: '1–2 týdny' },
      scopes: [
        {
          label: { uk: 'Робота включає', en: 'Work includes', cs: 'Práce zahrnuje' },
          items: {
            uk: ['Аналіз бізнес-процесів', 'Ролі користувачів і команди', 'Пріоритетні шляхи користувачів', 'Вимоги до даних', 'Можливості автоматизації', 'Сценарії використання ШІ', 'Операційні контрольні точки', 'Ризики та залежності', 'Технічний напрям', 'Етапи реалізації', 'Обсяг першої версії'],
            en: ['Business-process analysis', 'User and team roles', 'Priority user journeys', 'Data requirements', 'Automation opportunities', 'AI use cases', 'Operational checkpoints', 'Risks and dependencies', 'Technical direction', 'Implementation phases', 'First-build scope'],
            cs: ['Analýzu obchodních procesů', 'Role uživatelů a týmu', 'Prioritní uživatelské cesty', 'Požadavky na data', 'Možnosti automatizace', 'Případy využití AI', 'Provozní kontrolní body', 'Rizika a závislosti', 'Technický směr', 'Fáze realizace', 'Rozsah první verze'],
          },
        },
      ],
      outcome: {
        uk: ['Архітектура системи', 'Пріоритетні сценарії', 'Оцінка ризиків', 'Поетапна дорожня карта реалізації', 'Точний обсяг першого етапу розробки', 'Чітка основа для інвестиційного рішення'],
        en: ['System architecture', 'Priority scenarios', 'Risk assessment', 'Phased implementation roadmap', 'Precise scope for the first build stage', 'Clear basis for the investment decision'],
        cs: ['Architektura systému', 'Prioritní scénáře', 'Posouzení rizik', 'Fázovaný plán realizace', 'Přesný rozsah první fáze vývoje', 'Jasný podklad pro investiční rozhodnutí'],
      },
    },
    {
      id: 'product-build',
      category: 'digital-products-ai',
      title: { uk: 'Розробка продукту', en: 'Product Build', cs: 'Vývoj produktu' },
      description: {
        uk: 'Розробка відповідно до архітектури та пріоритетів, визначених на етапі Discovery.',
        en: 'The build follows the architecture and priorities established during Discovery.',
        cs: 'Vývoj navazuje na architekturu a priority stanovené během Discovery.',
      },
      price: {
        uk: 'Від EUR 2,500',
        en: 'From EUR 2,500',
        cs: 'Od EUR 2,500',
      },
      timeline: {
        uk: 'Визначається після Discovery',
        en: 'Defined after Discovery',
        cs: 'Stanoví se po Discovery',
      },
      scopes: [
        {
          label: { uk: 'Можливі продукти', en: 'Possible products', cs: 'Možné produkty' },
          items: {
            uk: ['Telegram-бот або веббот', 'ШІ-асистент', 'Аналітичний дашборд', 'Клієнтський портал', 'Внутрішній робочий простір', 'Система автоматизації', 'Платформа спільноти', 'Платформа для пошуку відповідностей', 'Вебзастосунок', 'MVP'],
            en: ['Telegram or web bot', 'AI assistant', 'Analytics dashboard', 'Client portal', 'Internal workspace', 'Automation system', 'Community platform', 'Matching platform', 'Web application', 'MVP'],
            cs: ['Telegramový nebo webový bot', 'AI asistent', 'Analytický dashboard', 'Klientský portál', 'Interní pracovní prostředí', 'Automatizační systém', 'Komunitní platforma', 'Matchingová platforma', 'Webová aplikace', 'MVP'],
          },
        },
        {
          label: { uk: 'Робота може включати', en: 'Work may include', cs: 'Práce může zahrnovat' },
          items: {
            uk: ['Продуктову й технічну архітектуру', 'Шляхи користувачів', 'Дизайн інтерфейсу', 'Frontend- і backend-розробку', 'Автентифікацію та ролі користувачів', 'Налаштування бази даних', 'ШІ-процеси', 'Автоматизації', 'Інтеграції', 'Тестування та перевірку', 'Розгортання', 'Передачу команді'],
            en: ['Product and technical architecture', 'User journeys', 'Interface design', 'Frontend and backend development', 'Authentication and user roles', 'Database configuration', 'AI workflows', 'Automations', 'Integrations', 'Testing and verification', 'Deployment', 'Team handoff'],
            cs: ['Produktovou a technickou architekturu', 'Uživatelské cesty', 'Návrh rozhraní', 'Frontendový a backendový vývoj', 'Autentizaci a uživatelské role', 'Nastavení databáze', 'AI workflow', 'Automatizace', 'Integrace', 'Testování a ověření', 'Nasazení', 'Předání týmu'],
          },
        },
      ],
      outcome: {
        uk: ['Робочий цифровий продукт із налаштованими шляхами користувачів, перевіреною функціональністю, підтримкою запуску та планом наступних ітерацій.'],
        en: ['A working digital product with configured user journeys, verified functionality, launch support and a plan for future iterations.'],
        cs: ['Funkční digitální produkt s nastavenými uživatelskými cestami, ověřenou funkčností, podporou spuštění a plánem dalších iterací.'],
      },
      notes: {
        uk: ['Розробка продукту поділяється на етапи з чітким обсягом, контрольними точками, відповідальністю та моментами затвердження.'],
        en: ['Product development is divided into stages with clear scope, checkpoints, responsibilities and approval points.'],
        cs: ['Vývoj produktu je rozdělen do fází s jasným rozsahem, kontrolními body, odpovědnostmi a schvalovacími body.'],
      },
    },
  ],
};

export const offerCategories: OfferCategory[] = [
  marketingGrowth,
  websites,
  mediaContent,
  digitalProductsAi,
];

export const offers: PricingOffer[] = offerCategories.flatMap((category) => category.offers);

export const pricingCopy: Record<OfferLocale, PricingSectionCopy> = {
  uk: {
    kicker: 'Послуги та формати співпраці',
    title: 'Послуги, ціни та спосіб роботи',
    subtitle: 'Чотири пов’язані напрями — від діагностики зростання й створення сайту до медіасистем і цифрових продуктів. Кожна співпраця починається з чіткого завдання та узгодженого обсягу.',
    priceLabel: 'Ціна',
    timelineLabel: 'Термін',
    suitableForLabel: 'Підходить для',
    outcomeLabel: 'Результат',
    notesLabel: 'Важливо',
    scopeSummary: 'Повний обсяг і результат',
    categoryLabel: 'Напрям',
    fitCheck: {
      eyebrow: 'Початок співпраці',
      title: 'Почнімо з 15–20-хвилинного Fit Check',
      description: 'Кожна співпраця починається зі сфокусованого Fit Check, щоб визначити завдання, бажаний результат і найкращий наступний крок.',
      clarifiesLabel: 'Під час розмови уточнюємо',
      clarifies: ['Бізнес-завдання', 'Бажаний результат', 'Аудиторію', 'Поточну ситуацію', 'Основні обмеження', 'Дедлайн', 'Доступний бюджет', 'Відповідний формат співпраці', 'Рекомендований наступний крок'],
      preparation: 'До розмови надішліть сайт або посилання на проєкт, релевантні показники чи короткий опис поточного процесу.',
      startingOptionsLabel: 'Основні варіанти старту',
      startingOptions: ['Стартовий сайт — EUR 350–900', 'Аудит зростання — EUR 600–900', 'Дослідження бізнес-системи зі ШІ — EUR 900–2,500', 'Медіа та контент — визначається після Fit Check'],
      cta: 'Запланувати Fit Check',
    },
    conditions: {
      eyebrow: 'Умови',
      title: 'Ціни та обсяг робіт',
      items: [
        'Усі ціни є стартовими діапазонами в EUR; фінальна ціна залежить від узгодженого обсягу та складності.',
        'Вартість аудиту зростання може бути зарахована до більшої співпраці, розпочатої протягом 30 днів.',
        'Стартовий сайт не включає окремий стратегічний пакет.',
        'Медіавиробництво оцінюється після визначення платформ, форматів, обсягу, локацій і виробничої команди.',
        'Медіабюджет і витрати сторонніх виробників оплачуються окремо.',
        'Розробка продукту стартує від EUR 2,500, а точний обсяг визначається після Discovery.',
        'Додаткові мови, інтеграції, складна автоматизація, ecommerce, custom backend, додаткові дні виробництва та раунди правок можуть збільшити обсяг.',
        'Конкретні результати — дохід, кількість лідів, позиції, охоплення чи зростання конверсії — не гарантуються без окремо погодженої performance-моделі.',
      ],
    },
  },
  en: {
    kicker: 'Services and engagements',
    title: 'Services, pricing and working method',
    subtitle: 'Four connected service areas—from diagnosing growth and building websites to media systems and digital products. Every engagement starts with a clear task and an agreed scope.',
    priceLabel: 'Price',
    timelineLabel: 'Timeline',
    suitableForLabel: 'Suitable for',
    outcomeLabel: 'Delivered result',
    notesLabel: 'Important',
    scopeSummary: 'Full scope and result',
    categoryLabel: 'Service area',
    fitCheck: {
      eyebrow: 'Starting process',
      title: 'Start with a 15–20 minute Fit Check',
      description: 'Every engagement begins with a focused Fit Check to clarify the task, desired result and most suitable next step.',
      clarifiesLabel: 'The Fit Check clarifies',
      clarifies: ['The business task', 'Desired result', 'Audience', 'Current situation', 'Main constraints', 'Deadline', 'Available budget', 'Suitable engagement', 'Recommended next step'],
      preparation: 'Before the conversation, provide a website or project link, relevant numbers or a short description of the current process.',
      startingOptionsLabel: 'Main starting options',
      startingOptions: ['Starter Website — EUR 350–900', 'Growth Audit — EUR 600–900', 'AI Business System Discovery — EUR 900–2,500', 'Media and Content — defined after Fit Check'],
      cta: 'Book a Fit Check',
    },
    conditions: {
      eyebrow: 'Conditions',
      title: 'Pricing and scope',
      items: [
        'All prices are starting ranges in EUR; final pricing depends on the agreed scope and complexity.',
        'Growth Audit fees can be credited toward a larger engagement started within 30 days.',
        'Starter Website does not include a separate strategy package.',
        'Media production is priced after the required platforms, formats, volume, locations and production team are defined.',
        'Media spend and third-party production expenses are separate.',
        'Product Build pricing starts from EUR 2,500, but its exact scope is defined after Discovery.',
        'Additional languages, integrations, advanced automation, ecommerce, custom backend development, extra production days and additional revision rounds can increase the scope.',
        'Specific results such as revenue, lead volume, rankings, reach or conversion improvement cannot be guaranteed without a separately agreed performance model.',
      ],
    },
  },
  cs: {
    kicker: 'Služby a formy spolupráce',
    title: 'Služby, ceny a způsob práce',
    subtitle: 'Čtyři propojené oblasti služeb — od diagnostiky růstu a tvorby webů po mediální systémy a digitální produkty. Každá spolupráce začíná jasným úkolem a dohodnutým rozsahem.',
    priceLabel: 'Cena',
    timelineLabel: 'Termín',
    suitableForLabel: 'Vhodné pro',
    outcomeLabel: 'Výsledek',
    notesLabel: 'Důležité',
    scopeSummary: 'Celý rozsah a výsledek',
    categoryLabel: 'Oblast služeb',
    fitCheck: {
      eyebrow: 'Začátek spolupráce',
      title: 'Začněme 15–20minutovým Fit Checkem',
      description: 'Každá spolupráce začíná cíleným Fit Checkem, který vyjasní úkol, požadovaný výsledek a nejvhodnější další krok.',
      clarifiesLabel: 'Během Fit Checku vyjasníme',
      clarifies: ['Obchodní úkol', 'Požadovaný výsledek', 'Publikum', 'Současnou situaci', 'Hlavní omezení', 'Termín', 'Dostupný rozpočet', 'Vhodnou formu spolupráce', 'Doporučený další krok'],
      preparation: 'Před rozhovorem pošlete web nebo odkaz na projekt, relevantní čísla nebo krátký popis současného procesu.',
      startingOptionsLabel: 'Hlavní možnosti začátku',
      startingOptions: ['Startovací web — EUR 350–900', 'Audit růstu — EUR 600–900', 'Discovery AI business systému — EUR 900–2,500', 'Média a obsah — stanoví se po Fit Checku'],
      cta: 'Naplánovat Fit Check',
    },
    conditions: {
      eyebrow: 'Podmínky',
      title: 'Ceny a rozsah',
      items: [
        'Všechny ceny jsou výchozí rozmezí v EUR; konečná cena závisí na dohodnutém rozsahu a složitosti.',
        'Cena auditu růstu může být započtena do větší spolupráce zahájené během 30 dnů.',
        'Startovací web nezahrnuje samostatný strategický balíček.',
        'Mediální produkce se naceňuje po určení platforem, formátů, objemu, lokací a produkčního týmu.',
        'Mediální rozpočet a náklady třetích stran jsou samostatné.',
        'Vývoj produktu začíná od EUR 2,500, přesný rozsah se ale určí po Discovery.',
        'Další jazyky, integrace, pokročilá automatizace, ecommerce, vlastní backend, další produkční dny a kola revizí mohou rozsah navýšit.',
        'Konkrétní výsledky jako tržby, počet leadů, pozice, dosah nebo zlepšení konverze nelze garantovat bez samostatně dohodnutého výkonnostního modelu.',
      ],
    },
  },
};
