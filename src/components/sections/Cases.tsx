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
  stack: string[];
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
    stack: ['Vite + React', 'TypeScript', 'CSS Modules', 'Vercel'],
  },
  {
    id: 'linkora',
    title: 'Linkora MVP',
    description: 'Telegram-first social discovery platform with matching logic, onboarding flows, and real-time engagement.',
    tags: ['Telegram', 'React', 'Supabase', 'MVP'],
    year: '2025',
    featured: true,
    challenge: 'Community/product needed fast onboarding and structured matching via Telegram.',
    stack: ['React + Vite', 'Supabase', 'Telegram Bot', 'FSD'],
  },
  {
    id: 'marketing-skill',
    title: 'Marketing Skill System',
    description: 'Proprietary strategy methodology combining market research, Client DNA, and growth frameworks.',
    tags: ['Strategy', 'AI-Assisted', 'Research', 'Framework'],
    year: '2025',
    challenge: 'Systematize marketing expertise into repeatable methodology.',
    stack: ['Market Research', 'Client DNA', 'Funnel Architecture', 'Analytics'],
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
            <TiltedCard
              key={caseItem.id}
              caseItem={caseItem}
              index={i}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TiltedCard({ caseItem, index, visible }: { caseItem: CaseItem; index: number; visible: boolean }) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isHovered || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientY - centerY) * 0.015;
    const y = -(e.clientX - centerX) * 0.015;
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
        transition: isHovered ? 'transform 0.1s ease-out' : `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`,
      }}
    >
      <div className={styles.cardVisual}>
        <div className={styles.visualGrid}>
          <div className={styles.visualNode} />
          <div className={styles.visualNode} />
          <div className={styles.visualNode} />
          <div className={styles.visualNode} style={{ background: 'var(--accent)' }} />
        </div>
        <div className={styles.visualLabel}>{caseItem.year}</div>
        {caseItem.featured && <span className={styles.featuredBadge}>Featured</span>}
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{caseItem.title}</h3>
        <p className={styles.challenge}>{caseItem.challenge}</p>

        <div className={styles.cardMeta}>
          <div className={styles.stack}>
            {caseItem.stack.map((tech) => (
              <span key={tech} className={styles.stackItem}>{tech}</span>
            ))}
          </div>
        </div>

        <p className={styles.cardDesc}>{caseItem.description}</p>

        <div className={styles.tags}>
          {caseItem.tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
