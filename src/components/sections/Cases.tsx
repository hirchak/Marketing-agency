import { useEffect, useRef, useState } from 'react';
import { useI18n } from '../../lib/i18n';
import styles from './Cases.module.css';

interface CaseItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  year: string;
  featured?: boolean;
  challenge: string;
  build: string;
  stack: string[];
  status: string;
}

const cases: CaseItem[] = [
  {
    id: 'sav-agency',
    title: 'SAV.AGENCY',
    description: 'Full marketing website redesign with growth-focused messaging architecture and conversion-optimized structure.',
    tags: ['React', 'Vite', 'TypeScript', 'Growth Strategy'],
    year: '2026',
    featured: true,
    challenge: 'Positioning as premium AI-native product studio with proven delivery capability.',
    build: 'Complete redesign with ecosystem map, bento grid, scroll animations, multilingual support.',
    stack: ['Vite + React', 'TypeScript', 'CSS Modules', 'Vercel'],
    status: 'Live',
  },
  {
    id: 'linkora',
    title: 'Linkora MVP',
    description: 'Telegram-first social discovery platform with matching logic, onboarding flows, and real-time engagement.',
    tags: ['Telegram', 'React', 'Supabase', 'MVP'],
    year: '2025',
    featured: true,
    challenge: 'Community needed fast onboarding and structured matching via Telegram.',
    build: 'Telegram bot with profile onboarding, Supabase-backed matching system, React dashboard.',
    stack: ['React + Vite', 'Supabase', 'Telegram Bot API', 'FSD'],
    status: 'In Progress',
  },
  {
    id: 'marketing-skill',
    title: 'Marketing Skill System',
    description: 'Proprietary strategy methodology combining market research, Client DNA, and growth frameworks.',
    tags: ['Strategy', 'AI-Assisted', 'Research', 'Framework'],
    year: '2025',
    challenge: 'Systematize marketing expertise into repeatable methodology for client work.',
    build: 'Market research framework, ICP mapping, funnel architecture, unit economics templates.',
    stack: ['Market Research', 'Client DNA', 'Funnel Architecture', 'Analytics'],
    status: 'Proprietary',
  },
];

export default function Cases() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} id="work" ref={ref}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t('cases_title')}</h2>
          <p className={styles.subtitle}>{t('cases_subtitle')}</p>
        </div>

        <div className={styles.grid}>
          {cases.map((caseItem, i) => (
            <CaseCard key={caseItem.id} caseItem={caseItem} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseCard({ caseItem, index, visible }: { caseItem: CaseItem; index: number; visible: boolean }) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isHovered || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientY - centerY) * 0.01;
    const y = -(e.clientX - centerX) * 0.01;
    setRotation({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      className={`${styles.card} ${caseItem.featured ? styles.featured : ''}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateY(0)`
          : 'translateY(40px)',
        transition: isHovered ? 'transform 0.15s ease-out' : `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`,
      }}
    >
      <div className={styles.cardHeader}>
        <div className={styles.statusBadge} data-status={caseItem.status.toLowerCase().replace(' ', '-')}>
          {caseItem.status}
        </div>
        <span className={styles.year}>{caseItem.year}</span>
      </div>

      <div className={styles.mockup}>
        {caseItem.id === 'sav-agency' && (
          <div className={styles.mockupWeb}>
            <div className={styles.mockupBar}>
              <span /><span /><span />
            </div>
            <div className={styles.mockupContent}>
              <div className={styles.mockupHero} />
              <div className={styles.mockupGrid}>
                <div /><div /><div />
              </div>
            </div>
          </div>
        )}
        {caseItem.id === 'linkora' && (
          <div className={styles.mockupTelegram}>
            <div className={styles.mockupPhone}>
              <div className={styles.mockupScreen}>
                <div className={styles.mockupAvatar} />
                <div className={styles.mockupLines}>
                  <div /><div /><div />
                </div>
              </div>
            </div>
            <div className={styles.mockupDb}>
              <div className={styles.mockupTable}>
                <div className={styles.mockupRow}><span />|<span />|<span /></div>
                <div className={styles.mockupRow}><span />|<span />|<span /></div>
                <div className={styles.mockupRow}><span />|<span />|<span /></div>
              </div>
            </div>
          </div>
        )}
        {caseItem.id === 'marketing-skill' && (
          <div className={styles.mockupFramework}>
            <div className={styles.frameworkNode}>Market</div>
            <div className={styles.frameworkArrow}>→</div>
            <div className={styles.frameworkNode}>ICP</div>
            <div className={styles.frameworkArrow}>→</div>
            <div className={styles.frameworkNode}>Offer</div>
            <div className={styles.frameworkArrow}>→</div>
            <div className={styles.frameworkNode}>Funnel</div>
          </div>
        )}
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{caseItem.title}</h3>

        <div className={styles.caseMeta}>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Challenge</span>
            <span className={styles.metaValue}>{caseItem.challenge}</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Build</span>
            <span className={styles.metaValue}>{caseItem.build}</span>
          </div>
        </div>

        <div className={styles.stack}>
          {caseItem.stack.map((tech) => (
            <span key={tech} className={styles.stackItem}>{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
