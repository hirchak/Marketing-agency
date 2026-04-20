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

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t('method_title')}</h2>
          <p className={styles.subtitle}>{t('method_subtitle')}</p>
        </div>

        <div className={styles.steps}>
          {steps.map((step, i) => (
            <div key={step.key} className={styles.step} style={{ animationDelay: `${i * 0.1}s` }}>
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
