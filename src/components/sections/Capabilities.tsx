import { useRef, useState } from 'react';
import { useI18n } from '../../lib/i18n';
import { TranslationKey } from '../../data/translations';
import { gsap, useGSAP } from '../../lib/gsap';
import styles from './Capabilities.module.css';
import AmbientBackground from '../ambient/AmbientBackground';

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
      data-capability-card
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

function CapabilityCard({
  cap,
  index,
  t,
  dnaChips,
  dnaFlow,
  dnaResult,
}: {
  cap: Capability;
  index: number;
  t: (key: TranslationKey) => string;
  dnaChips: string[];
  dnaFlow: string[];
  dnaResult: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const isDNA = cap.titleKey === 'cap_intelligence_title';

  return (
    <SpotlightCard
      className={`${styles.card} ${cap.accent ? styles.accent : ''} ${cap.size === 'large' ? styles.large : ''}`}
      accent={cap.accent}
      style={{
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
              {dnaChips.map((chip) => (
                <span key={chip} className={styles.dnaChip}>{chip}</span>
              ))}
            </div>
            <div className={styles.dnaFlow}>
              <span>{dnaFlow[0]}</span>
              <span className={styles.dnaArrow}>→</span>
              <span>{dnaFlow[1]}</span>
              <span className={styles.dnaArrow}>→</span>
              <span>{dnaFlow[2]}</span>
              <span className={styles.dnaArrow}>→</span>
              <span>{dnaFlow[3]}</span>
            </div>
            <p className={styles.dnaResult}>{dnaResult}</p>
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
  const { t, lang } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const dnaChips = lang === 'uk'
    ? ['Ринок і конкуренти', 'Портрет клієнта / ICP', 'Офер і позиціонування', 'Базова економіка']
    : lang === 'cs'
    ? ['Trh a konkurence', 'Profil zákazníka / ICP', 'Nabídka a pozicování', 'Základní ekonomika']
    : ['Market and competitors', 'Client DNA / ICP', 'Offer and positioning', 'Unit economics'];
  const dnaFlow = lang === 'uk'
    ? ['Ринок', 'ICP', 'Офер', 'Воронка']
    : lang === 'cs'
    ? ['Trh', 'ICP', 'Nabídka', 'Cesta']
    : ['Market', 'ICP', 'Offer', 'Funnel'];
  const dnaResult = lang === 'uk'
    ? 'Результат: стратегія перед дизайном, кодом і запуском.'
    : lang === 'cs'
    ? 'Výsledek: strategie před designem, kódem a spuštěním.'
    : 'Outcome: strategy before design, code and launch.';

  useGSAP(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      gsap.set('[data-capability-card]', { y: 0 });
      return;
    }

    gsap.from('[data-capability-card]', {
      y: 42,
      duration: 0.72,
      stagger: { each: 0.07, from: 'start' },
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 68%',
        once: true,
      },
    });
  }, { scope: sectionRef });

  return (
    <section className={styles.section} id="capabilities" ref={sectionRef}>
      <AmbientBackground variant="services" />
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t('build_title')}</h2>
          <p className={styles.subtitle}>{t('build_subtitle')}</p>
        </div>

        <div className={styles.grid}>
          {capabilities.map((cap, i) => (
            <CapabilityCard
              key={cap.titleKey}
              cap={cap}
              index={i}
              t={t}
              dnaChips={dnaChips}
              dnaFlow={dnaFlow}
              dnaResult={dnaResult}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
