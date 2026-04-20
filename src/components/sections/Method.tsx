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
  const [activeStep, setActiveStep] = useState(0);
  const [progressHeight, setProgressHeight] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;

      if (rect.top < windowHeight * 0.7 && rect.bottom > 0) {
        const scrollProgress = Math.min(1, Math.max(0, (windowHeight * 0.7 - rect.top) / (sectionHeight - windowHeight * 0.3)));
        const newProgress = scrollProgress * 100;
        setProgressHeight(newProgress);

        const newActiveStep = Math.min(steps.length - 1, Math.floor(scrollProgress * steps.length));
        setActiveStep(newActiveStep);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={styles.section} id="method" ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t('method_title')}</h2>
          <p className={styles.subtitle}>{t('method_subtitle')}</p>
        </div>

        <div className={styles.timeline}>
          <div className={styles.progressTrack}>
            <div
              className={styles.progressFill}
              style={{ height: `${progressHeight}%` }}
            />
          </div>

          {steps.map((step, i) => (
            <div
              key={step.key}
              ref={(el) => { stepsRef.current[i] = el; }}
              className={`${styles.step} ${i <= activeStep ? styles.active : ''}`}
            >
              <div className={styles.stepIndicator}>
                <div className={`${styles.stepDot} ${i < activeStep ? styles.completed : ''} ${i === activeStep ? styles.current : ''}`}>
                  {i < activeStep ? (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    <span>{String(i + 1).padStart(2, '0')}</span>
                  )}
                </div>
              </div>

              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{t(step.key)}</h3>
                <p className={styles.stepDesc}>{t(step.descKey)}</p>
              </div>

              {i < steps.length - 1 && (
                <div className={`${styles.stepConnector} ${i < activeStep ? styles.connectorActive : ''}`} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
