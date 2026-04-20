import { useEffect, useRef, useState } from 'react';
import { useI18n } from '../../lib/i18n';
import { TranslationKey } from '../../data/translations';
import styles from './Capabilities.module.css';

interface Capability {
  titleKey: TranslationKey;
  descKey: TranslationKey;
  accent: boolean;
  beta?: boolean;
}

const capabilities: Capability[] = [
  { titleKey: 'cap_intelligence_title', descKey: 'cap_intelligence_desc', accent: true },
  { titleKey: 'cap_conversion_title', descKey: 'cap_conversion_desc', accent: false },
  { titleKey: 'cap_product_title', descKey: 'cap_product_desc', accent: false },
  { titleKey: 'cap_telegram_title', descKey: 'cap_telegram_desc', accent: true },
  { titleKey: 'cap_systems_title', descKey: 'cap_systems_desc', accent: false },
  { titleKey: 'cap_funnel_title', descKey: 'cap_funnel_desc', accent: false },
  { titleKey: 'cap_automation_title', descKey: 'cap_automation_desc', accent: true, beta: true },
  { titleKey: 'cap_video_title', descKey: 'cap_video_desc', accent: true, beta: true },
];

function SpotlightCard({ children, className = '', style = {} }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });

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
      onMouseLeave={() => setSpotlight({ x: 50, y: 50 })}
      style={{
        ...style,
        background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(255, 69, 0, 0.12) 0%, transparent 50%)`,
        transition: `background 0.4s ease`,
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

  return (
    <SpotlightCard
      className={`${styles.card} ${cap.accent ? styles.accent : ''}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.08}s`,
      }}
    >
      <div ref={ref}>
        {cap.beta && <span className={styles.beta}>BETA</span>}
        <h3 className={styles.cardTitle}>{t(cap.titleKey)}</h3>
        <p className={styles.cardDesc}>{t(cap.descKey)}</p>
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
