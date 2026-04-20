export interface Case {
  id: string;
  title: string;
  description: string;
  tags: string[];
  year: string;
  featured?: boolean;
}

export const cases: Case[] = [
  {
    id: 'sav-agency',
    title: 'SAV.AGENCY',
    description: 'Full marketing website redesign with growth-focused messaging architecture and conversion-optimized structure.',
    tags: ['React', 'Vite', 'TypeScript', 'Growth Strategy'],
    year: '2026',
    featured: true,
  },
  {
    id: 'linkora',
    title: 'Linkora MVP',
    description: 'Telegram-first social discovery platform with matching logic, onboarding flows, and real-time engagement features.',
    tags: ['Telegram', 'React', 'Supabase', 'MVP'],
    year: '2025',
    featured: true,
  },
  {
    id: 'marketing-skill',
    title: 'Marketing Skill System',
    description: 'Internal knowledge management and skill tracking system for marketing team operations and onboarding.',
    tags: ['Automation', 'n8n', 'Notion', 'Systems'],
    year: '2025',
  },
];
