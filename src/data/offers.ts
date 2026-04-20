export interface PricingOffer {
  id: string;
  title: string;
  description: string;
  price: string;
  period?: string;
  features: string[];
  cta: string;
  featured?: boolean;
}

export const offers: PricingOffer[] = [
  {
    id: 'website-sprint',
    title: 'Website Sprint',
    description: 'High-conversion website or landing page, designed and built in 2 weeks.',
    price: '$700',
    features: [
      'Market-aligned messaging',
      'Conversion-optimized layout',
      'Responsive design',
      'Lead capture integration',
      'Basic SEO setup',
      '2 revision rounds',
    ],
    cta: 'Start Website Sprint',
    featured: false,
  },
  {
    id: 'mvp-sprint',
    title: 'MVP Sprint',
    description: 'Full product MVP with React, Supabase backend, and Telegram integration.',
    price: '$2,500',
    features: [
      'Product architecture',
      'React + Vite frontend',
      'Supabase backend',
      'Telegram bot integration',
      'User authentication',
      'Database design',
      '4 revision rounds',
    ],
    cta: 'Start MVP Sprint',
    featured: true,
  },
  {
    id: 'growth-diagnostic',
    title: 'Growth Diagnostic',
    description: 'Deep analysis of your current funnel, messaging, and growth levers.',
    price: '$500',
    features: [
      'Funnel audit',
      'Competitor analysis',
      'ICP mapping',
      'Messaging critique',
      'Growth opportunities',
      'Actionable report',
    ],
    cta: 'Get Diagnostic',
    featured: false,
  },
  {
    id: 'gtm-launch',
    title: 'GTM Launch',
    description: 'End-to-end go-to-market strategy and execution for new products.',
    price: '$3,000',
    features: [
      'Market research',
      'Offer development',
      'Funnel design',
      'Content strategy',
      'Launch campaign',
      'Analytics setup',
      '30-day support',
    ],
    cta: 'Start GTM Launch',
    featured: false,
  },
];
