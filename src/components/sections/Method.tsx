import { useRef, useState } from 'react';
import { useI18n } from '../../lib/i18n';
import { TranslationKey } from '../../data/translations';
import { gsap, ScrollTrigger, useGSAP } from '../../lib/gsap';
import styles from './Method.module.css';
import AmbientBackground from '../ambient/AmbientBackground';

interface Step {
  key: TranslationKey;
  descKey: TranslationKey;
}

const steps: Step[] = [
  { key: 'step_understand', descKey: 'step_understand_desc' },
  { key: 'step_prioritize', descKey: 'step_prioritize_desc' },
  { key: 'step_plan', descKey: 'step_plan_desc' },
  { key: 'step_produce', descKey: 'step_produce_desc' },
  { key: 'step_verify', descKey: 'step_verify_desc' },
  { key: 'step_improve', descKey: 'step_improve_desc' },
];

export default function Method() {
  const { t } = useI18n();
  const [activeStep, setActiveStep] = useState(0);
  const [progressHeight, setProgressHeight] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setProgressHeight(100);
      setActiveStep(steps.length - 1);
      gsap.set(stepsRef.current, { y: 0 });
      return;
    }

    gsap.from(stepsRef.current, {
      y: 36,
      stagger: 0.12,
      duration: 0.72,
      scrollTrigger: {
        trigger: section,
        start: 'top 72%',
        once: true,
      },
    });

    ScrollTrigger.create({
      trigger: section,
      start: 'top center',
      end: 'bottom center',
      scrub: 0.8,
      onUpdate: (self) => {
        const progress = Math.round(self.progress * 100);
        const nextStep = Math.min(steps.length - 1, Math.floor(self.progress * steps.length));
        setProgressHeight(progress);
        setActiveStep(nextStep);
      },
    });
  }, { scope: sectionRef });

  return (
    <section className={styles.section} id="method" ref={sectionRef}>
      <AmbientBackground variant="method" />
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
