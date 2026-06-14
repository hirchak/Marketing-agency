import { useRef } from 'react';
import { useI18n } from '../../lib/i18n';
import { cases, type CaseItem } from '../../data/cases';
import { gsap, useGSAP } from '../../lib/gsap';
import styles from './Cases.module.css';
import AmbientBackground from '../ambient/AmbientBackground';

export default function Cases() {
  const { t, lang } = useI18n();
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      gsap.set('[data-case-card]', { y: 0 });
      return;
    }

    gsap.from('[data-case-card]', {
      y: 54,
      duration: 0.82,
      stagger: 0.12,
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 70%',
        once: true,
      },
    });
  }, { scope: ref });

  return (
    <section className={styles.section} id="work" ref={ref}>
      <AmbientBackground variant="work" />
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.kicker}>{t('cases_kicker')}</span>
          <h2 className={styles.title}>{t('cases_title')}</h2>
          <p className={styles.subtitle}>{t('cases_subtitle')}</p>
        </div>

        <div className={styles.grid}>
          {cases.map((caseItem, i) => (
            <CaseCard key={caseItem.id} caseItem={caseItem} index={i} t={t} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseCard({
  caseItem,
  index,
  t,
  lang,
}: {
  caseItem: CaseItem;
  index: number;
  t: (key: import('../../data/translations').TranslationKey) => string;
  lang: import('../../data/translations').Language;
}) {
  const mockupRef = useRef<HTMLDivElement>(null);
  const statusKey = `case_status_${caseItem.status}` as import('../../data/translations').TranslationKey;
  const rotationX = useRef<gsap.QuickToFunc | null>(null);
  const rotationY = useRef<gsap.QuickToFunc | null>(null);
  const yTo = useRef<gsap.QuickToFunc | null>(null);

  useGSAP(() => {
    const target = mockupRef.current;
    if (!target) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    if (reduceMotion || isMobile) return;

    gsap.set(target, { transformPerspective: 900, transformOrigin: 'center center', willChange: 'transform' });
    rotationX.current = gsap.quickTo(target, 'rotationX', { duration: 0.36, ease: 'power3.out' });
    rotationY.current = gsap.quickTo(target, 'rotationY', { duration: 0.36, ease: 'power3.out' });
    yTo.current = gsap.quickTo(target, 'y', { duration: 0.36, ease: 'power3.out' });
  }, { scope: mockupRef });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!mockupRef.current || !rotationX.current || !rotationY.current) return;
    const rect = mockupRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    rotationX.current((e.clientY - centerY) * 0.012);
    rotationY.current(-(e.clientX - centerX) * 0.012);
    yTo.current?.(-8);
  };

  const handleMouseLeave = () => {
    rotationX.current?.(0);
    rotationY.current?.(0);
    yTo.current?.(0);
  };

  return (
    <article
      data-case-card
      className={`${styles.card} ${caseItem.featured ? styles.featured : ''}`}
      style={{ '--case-index': index } as React.CSSProperties}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <div className={styles.cardHeader}>
        <div className={styles.statusBadge} data-status={caseItem.status}>
          {t(statusKey)}
        </div>
        <span className={styles.year}>{caseItem.year}</span>
      </div>

      <div
        ref={mockupRef}
        className={styles.mockup}
      >
        {caseItem.thumbnail ? (
          <img src={caseItem.thumbnail} alt="" className={styles.thumbnail} />
        ) : (
          <div className={styles.browserMockup}>
            <div className={styles.mockupBar}>
              <span /><span /><span />
            </div>
            <div className={styles.mockupContent}>
              <div className={styles.mockupHero}>
                <span>{caseItem.type[lang]}</span>
              </div>
              <div className={styles.mockupGrid}>
                <div /><div /><div />
              </div>
              <div className={styles.mockupLine} />
            </div>
          </div>
        )}
      </div>

      <div className={styles.cardContent}>
        <div className={styles.titleRow}>
          <div>
            <span className={styles.caseType}>{caseItem.type[lang]}</span>
            <h3 className={styles.cardTitle}>{caseItem.title}</h3>
          </div>
          {caseItem.url && (
            <a href={caseItem.url} className={styles.liveLink} target="_blank" rel="noopener noreferrer">
              {t('case_live_link')}
            </a>
          )}
        </div>

        <div className={styles.caseMeta}>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>{t('case_challenge')}</span>
            <span className={styles.metaValue}>{caseItem.challenge[lang]}</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>{t('case_result')}</span>
            <span className={styles.metaValue}>{caseItem.result[lang]}</span>
          </div>
        </div>

        <div className={styles.services}>
          {caseItem.services[lang].map((service) => (
            <span key={service} className={styles.serviceItem}>{service}</span>
          ))}
        </div>

        <div className={styles.stack}>
          {caseItem.stack.map((tech) => (
            <span key={tech} className={styles.stackItem}>{tech}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
