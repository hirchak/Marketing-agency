import { useEffect, useRef, useState } from 'react';
import { useI18n } from '../../lib/i18n';
import { TranslationKey } from '../../data/translations';
import styles from './Capabilities.module.css';

interface Capability {
  titleKey: TranslationKey;
  descKey: TranslationKey;
  accent: boolean;
  beta?: boolean;
  size?: 'normal' | 'large';
}

const capabilities: Capability[] = [
  { titleKey: 'cap_intelligence_title', descKey: 'cap_intelligence_desc', accent: true, size: 'large' },
  { titleKey: 'cap_conversion_title', descKey: 'cap_conversion_desc', accent: false, size: 'normal' },
  { titleKey: 'cap_product_title', descKey: 'cap_product_desc', accent: false, size: 'normal' },
  { titleKey: 'cap_telegram_title', descKey: 'cap_telegram_desc', accent: true, size: 'normal' },
  { titleKey: 'cap_systems_title', descKey: 'cap_systems_desc', accent: false, size: 'normal' },
  { titleKey: 'cap_funnel_title', descKey: 'cap_funnel_desc', accent: false, size: 'normal' },
  { titleKey: 'cap_automation_title', descKey: 'cap_automation_desc', accent: true, beta: true, size: 'normal' },
  { titleKey: 'cap_video_title', descKey: 'cap_video_desc', accent: true, beta: true, size: 'normal' },
];

function SpotlightCard({ children, className = '', style = {} }: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  accent?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setSpotlight({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setSpotlight({ x: 50, y: 50 });
      }}
      style={{
        ...style,
        background: isHovered
          ? `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(255, 69, 0, 0.15) 0%, transparent 60%), var(--bg-secondary)`
          : 'var(--bg-secondary)',
        borderColor: isHovered ? 'rgba(255, 69, 0, 0.4)' : 'var(--border)',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 20px 40px rgba(0, 0, 0, 0.4)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {children}
    </div>
  );
}

function CapabilityCard({ cap, index, t }: { cap: Capability; index: number; t: (key: TranslationKey) => string }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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

  const isDNA = cap.titleKey === 'cap_intelligence_title';

  return (
    <SpotlightCard
      className={`${styles.card} ${cap.accent ? styles.accent : ''} ${cap.size === 'large' ? styles.large : ''}`}
      accent={cap.accent}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transitionDelay: `${index * 0.08}s`,
      }}
    >
      <div ref={ref}>
        {cap.beta && <span className={styles.beta}>BETA</span>}
        <h3 className={styles.cardTitle}>{t(cap.titleKey)}</h3>
        <p className={styles.cardDesc}>{t(cap.descKey)}</p>
        {isDNA && (
          <div className={styles.dnaContent}>
            <div className={styles.dnaChips}>
              <span className={styles.dnaChip}>Ринок і конкуренти</span>
              <span className={styles.dnaChip}>ICP / портрет клієнта</span>
              <span className={styles.dnaChip}>Офер і позиціонування</span>
              <span className={styles.dnaChip}>Економіка воронки</span>
            </div>
            <div className={styles.dnaFlow}>
              <span>Ринок</span>
              <span className={styles.dnaArrow}>→</span>
              <span>ICP</span>
              <span className={styles.dnaArrow}>→</span>
              <span>Офер</span>
              <span className={styles.dnaArrow}>→</span>
              <span>Воронка</span>
            </div>
            <p className={styles.dnaResult}>Результат: стратегія перед дизайном, кодом і запуском.</p>
          </div>
        )}
        {cap.size === 'large' && !isDNA && (
          <div className={styles.cardGlow} />
        )}
      </div>
    </SpotlightCard>
  );
}

export default function Capabilities() {
  const { t } = useI18n();

  return (
    <section className={styles.section} id="capabilities">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t('build_title')}</h2>
          <p className={styles.subtitle}>{t('build_subtitle')}</p>
        </div>

        <div className={styles.grid}>
          {capabilities.map((cap, i) => (
            <CapabilityCard key={cap.titleKey} cap={cap} index={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
