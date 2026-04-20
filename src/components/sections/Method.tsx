import { useEffect, useRef, useState } from 'react';
import { useI18n } from '../../lib/i18n';
import { TranslationKey } from '../../data/translations';
import styles from './Method.module.css';

interface Step {
  key: TranslationKey;
  descKey: TranslationKey;
}

const steps: Step[] = [
  { key: 'step_extract', descKey: 'step_extract_desc' },
  { key: 'step_architect', descKey: 'step_architect_desc' },
  { key: 'step_build', descKey: 'step_build_desc' },
  { key: 'step_launch', descKey: 'step_launch_desc' },
  { key: 'step_scale', descKey: 'step_scale_desc' },
];

export default function Method() {
  const { t } = useI18n();
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [progressHeight, setProgressHeight] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight * 0.7) {
        steps.forEach((_, i) => {
          setTimeout(() => {
            setVisibleSteps((prev) => [...prev, i]);
          }, i * 150);
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateProgress = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
        const visibleProgress = Math.min(1, Math.max(0, (windowHeight - sectionTop) / (windowHeight + sectionHeight)));
        setProgressHeight(visibleProgress * 100);
      }
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <section className={styles.section} id="method" ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t('method_title')}</h2>
          <p className={styles.subtitle}>{t('method_subtitle')}</p>
        </div>

        <div className={styles.steps}>
          <div className={styles.progressLine}>
            <div className={styles.progressFill} style={{ height: `${progressHeight}%` }} />
          </div>

          {steps.map((step, i) => (
            <div
              key={step.key}
              ref={(el) => { stepsRef.current[i] = el; }}
              className={`${styles.step} ${visibleSteps.includes(i) ? styles.visible : ''}`}
              style={{
                opacity: visibleSteps.includes(i) ? 1 : 0,
                transform: visibleSteps.includes(i) ? 'translateX(0)' : 'translateX(-30px)',
                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1)`,
              }}
            >
              <div className={styles.stepNumber}>{String(i + 1).padStart(2, '0')}</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{t(step.key)}</h3>
                <p className={styles.stepDesc}>{t(step.descKey)}</p>
              </div>
              {i < steps.length - 1 && <div className={styles.connector} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
