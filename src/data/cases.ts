export type CaseLocale = 'uk' | 'en' | 'cs';

type LocalizedText = Record<CaseLocale, string>;
type LocalizedList = Record<CaseLocale, string[]>;

export interface CaseItem {
  id: string;
  title: string;
  url?: string;
  year: string;
  type: LocalizedText;
  challenge: LocalizedText;
  result: LocalizedText;
  services: LocalizedList;
  stack: string[];
  thumbnail?: string;
  featured?: boolean;
  status: 'live' | 'progress' | 'proprietary';
}

export const cases: CaseItem[] = [
  {
    id: 'sav-agency',
    title: 'SAV.AGENCY',
    url: 'https://sav-agency.vercel.app',
    year: '2026',
    type: {
      uk: 'Сайт агенції',
      en: 'Agency Website',
      cs: 'Web agentury',
    },
    challenge: {
      uk: 'Перепозиціонувати агенцію навколо маркетингових систем, сайтів для конверсії і преміального виконання.',
      en: 'Reposition the agency around marketing systems, conversion websites and premium execution.',
      cs: 'Přepozicovat agenturu kolem marketingových systémů, konverzních webů a prémiového provedení.',
    },
    result: {
      uk: 'Зібрали мультимовний React/Vite сайт зі структурою послуг, формою заявки, деплоєм на Vercel і масштабованою секцією кейсів.',
      en: 'Built a multilingual React/Vite site with service architecture, lead capture, Vercel deploy and a scalable cases section.',
      cs: 'Postavili jsme vícejazyčný React/Vite web se strukturou služeb, formulářem pro poptávky, nasazením na Vercel a škálovatelnou sekcí případových studií.',
    },
    services: {
      uk: ['Позиціонування', 'Спринт сайту', 'Frontend', 'Форма заявки'],
      en: ['Positioning', 'Website Sprint', 'Frontend', 'Lead Capture'],
      cs: ['Pozicování', 'Sprint webu', 'Frontend', 'Formulář poptávky'],
    },
    stack: ['React', 'Vite', 'TypeScript', 'CSS Modules', 'Vercel'],
    featured: true,
    status: 'live',
  },
  {
    id: 'linkora',
    title: 'Linkora',
    url: 'https://linkora-landing.vercel.app/',
    year: '2025',
    type: {
      uk: 'Нетворкінг-платформа',
      en: 'Networking Platform',
      cs: 'Networkingová platforma',
    },
    challenge: {
      uk: 'Пояснити нетворкінг-продукт через просту посадкову сторінку і показати цінність до запуску повної платформи.',
      en: 'Explain a networking product through a clear landing page and communicate the value before the full platform launch.',
      cs: 'Vysvětlit networkingový produkt pomocí jasné landing page a ukázat hodnotu ještě před spuštěním celé platformy.',
    },
    result: {
      uk: 'Розробили живу посадкову сторінку для Linkora з чітким позиціонуванням, адаптивним frontend і деплоєм на Vercel.',
      en: 'Built a live landing page for Linkora with clear positioning, responsive frontend and Vercel deployment.',
      cs: 'Postavili jsme živou landing page pro Linkora s jasným pozicováním, responzivním frontendem a nasazením na Vercel.',
    },
    services: {
      uk: ['Посадкова сторінка', 'Позиціонування', 'Frontend', 'Vercel deploy'],
      en: ['Landing Page', 'Positioning', 'Frontend', 'Vercel Deploy'],
      cs: ['Landing page', 'Pozicování', 'Frontend', 'Nasazení na Vercel'],
    },
    stack: ['React', 'Vite', 'TypeScript', 'Vercel'],
    featured: true,
    status: 'live',
  },
  {
    id: 'marketing-skill',
    title: 'Marketing Skill System',
    year: '2025',
    type: {
      uk: 'Внутрішня методологія',
      en: 'Internal Methodology',
      cs: 'Interní metodologie',
    },
    challenge: {
      uk: 'Перетворити розрізнений маркетинговий досвід у повторювану систему delivery для клієнтських проєктів.',
      en: 'Turn scattered marketing expertise into a repeatable delivery system for client work.',
      cs: 'Převést rozptýlenou marketingovou expertizu do opakovatelného delivery systému pro klientské projekty.',
    },
    result: {
      uk: 'Створили workflow для дослідження ринку, портрета клієнта, базової економіки, архітектури воронки, креативної стратегії й аудиту аналітики.',
      en: 'Created a workflow covering market research, Client DNA, unit economics, funnel architecture, creative strategy and analytics audit.',
      cs: 'Vytvořili jsme workflow pro průzkum trhu, profil zákazníka, základní ekonomiku, architekturu prodejní cesty, kreativní strategii a audit analytiky.',
    },
    services: {
      uk: ['Дослідження ринку', 'Портрет клієнта', 'Стратегія воронки', 'Аналітика'],
      en: ['Market Research', 'Client DNA', 'Funnel Strategy', 'Analytics'],
      cs: ['Průzkum trhu', 'Profil zákazníka', 'Strategie prodejní cesty', 'Analytika'],
    },
    stack: ['Research', 'Frameworks', 'Growth Strategy', 'Playbooks'],
    status: 'proprietary',
  },
];
