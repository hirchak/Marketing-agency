export interface PricingOffer {
  id: string;
  titleKey: string;
  title: string;
  description: string;
  price: string;
  period?: string;
  features: string[];
  cta: string;
  featured?: boolean;
  forWhom?: string;
  result?: string;
  term?: string;
}

export const offers: PricingOffer[] = [
  {
    id: 'website-sprint',
    titleKey: 'offer_website_title',
    title: 'Сайт / лендінг',
    description: 'Висококонверсійний сайт або лендінг, розроблений і запущений за 2 тижні.',
    price: '$700',
    forWhom: 'Для стартапів і малого бізнесу, яким потрібен швидкий старт',
    result: 'Працюючий сайт з lead capture і базовою SEO-підготовкою',
    term: '2 тижні',
    features: [
      'Структура і тексти',
      'Дизайн і адаптив',
      'Frontend-розробка',
      'Lead capture форма',
      'Базова SEO-підготовка',
      '2 кола ревізій',
    ],
    cta: 'Обговорити сайт',
    featured: false,
  },
  {
    id: 'mvp-sprint',
    titleKey: 'offer_mvp_title',
    title: 'MVP / продуктова система',
    description: 'Повноцінний продукт з React, Supabase і Telegram-інтеграцією.',
    price: '$2,500',
    forWhom: 'Для команд, яким потрібна робоча продуктова система',
    result: 'MVP з користувацькою логікою, базою даних і Telegram-ботом',
    term: '3-4 тижні',
    features: [
      'Продуктова архітектура',
      'React + Vite фронтенд',
      'Supabase бекенд',
      'Telegram-бот інтеграція',
      'Користувацька автентифікація',
      'Дизайн бази даних',
      '4 кола ревізій',
    ],
    cta: 'Обговорити MVP',
    featured: true,
  },
  {
    id: 'growth-diagnostic',
    titleKey: 'offer_diagnostic_title',
    title: 'Growth-діагностика',
    description: 'Глибокий аналіз вашої воронки, повідомлень і точок зростання.',
    price: '$500',
    forWhom: 'Для тих, хто вже має продукт і хоче знайти точки зростання',
    result: 'Звіт з конкретними можливостями для зростання',
    term: '3-5 днів',
    features: [
      'Аудит воронки',
      'Аналіз конкурентів',
      'ICP маппінг',
      'Критика повідомлень',
      'Можливості зростання',
      'План дій',
    ],
    cta: 'Отримати діагностику',
    featured: false,
  },
  {
    id: 'gtm-launch',
    titleKey: 'offer_gtm_title',
    title: 'GTM-запуск',
    description: 'Повний вихід на ринок: від стратегії до перших клієнтів.',
    price: '$3,000',
    forWhom: 'Для нових продуктів, яким потрібен вихід на ринок "під ключ"',
    result: 'Готовий GTM-план і перші запущені канали',
    term: '4-6 тижнів',
    features: [
      'Дослідження ринку',
      'Розробка оферу',
      'Дизайн воронки',
      'Контент-стратегія',
      'Запускова кампанія',
      'Налаштування аналітики',
      '30 днів підтримки',
    ],
    cta: 'Обговорити запуск',
    featured: false,
  },
];
