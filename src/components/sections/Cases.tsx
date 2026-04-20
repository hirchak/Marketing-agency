import { useEffect, useRef, useState } from 'react';
import { useI18n } from '../../lib/i18n';
import styles from './Cases.module.css';

interface CaseItem {
  id: string;
  title: string;
  challenge: string;
  build: string;
  stack: string[];
  year: string;
  featured?: boolean;
  statusKey: 'case_status_live' | 'case_status_progress' | 'case_status_proprietary';
}

const cases: CaseItem[] = [
  {
    id: 'sav-agency',
    title: 'SAV.AGENCY',
    challenge: 'Показати агенцію як AI-native product studio з чіткими послугами, кейсами і преміальною подачею.',
    build: 'Оновили структуру сайту, hero-секцію, ecosystem map, bento-блоки, анімації, мультимовність і форму заявки.',
    stack: ['React', 'Vite', 'TypeScript', 'CSS Modules', 'Vercel'],
    year: '2026',
    featured: true,
    statusKey: 'case_status_live',
  },
  {
    id: 'linkora',
    title: 'Linkora MVP',
    challenge: 'Потрібен швидкий Telegram-онбординг і логіка matching для спільноти/платформи.',
    build: 'Розробили Telegram-бота, анкети, профілі, Supabase-таблиці, matching logic і React/Vite dashboard.',
    stack: ['React', 'Vite', 'Supabase', 'Telegram Bot API'],
    year: '2025',
    featured: true,
    statusKey: 'case_status_progress',
  },
  {
    id: 'marketing-skill',
    title: 'Система маркетингової методології',
    challenge: 'Систематизувати маркетинговий досвід у повторювану методологію для клієнтських проєктів.',
    build: 'Зібрали framework для дослідження ринку, Client DNA, ICP, оферу, воронки, unit economics і аналітики.',
    stack: ['Дослідження ринку', 'Client DNA', 'Архітектура воронки', 'Аналітика'],
    year: '2025',
    statusKey: 'case_status_proprietary',
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
            <CaseCard key={caseItem.id} caseItem={caseItem} index={i} visible={visible} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseCard({ caseItem, index, visible, t }: { caseItem: CaseItem; index: number; visible: boolean; t: (key: import('../../data/translations').TranslationKey) => string }) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const mockupRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isHovered || !mockupRef.current) return;
    const rect = mockupRef.current.getBoundingClientRect();
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
      className={`${styles.card} ${caseItem.featured ? styles.featured : ''}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <div className={styles.cardHeader}>
        <div className={styles.statusBadge} data-status={caseItem.statusKey.replace('case_status_', '')}>
          {t(caseItem.statusKey)}
        </div>
        <span className={styles.year}>{caseItem.year}</span>
      </div>

      <div ref={mockupRef} className={styles.mockup} style={{
        transform: `perspective(800px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.4s ease-out',
      }}>
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
            <span className={styles.metaLabel}>{t('case_challenge')}</span>
            <span className={styles.metaValue}>{caseItem.challenge}</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>{t('case_build')}</span>
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
