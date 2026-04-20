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

export default function Capabilities() {
  const { t } = useI18n();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t('build_title')}</h2>
          <p className={styles.subtitle}>{t('build_subtitle')}</p>
        </div>

        <div className={styles.grid}>
          {capabilities.map((cap, i) => (
            <div
              key={cap.titleKey}
              className={`${styles.card} ${cap.accent ? styles.accent : ''}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {cap.beta && <span className={styles.beta}>BETA</span>}
              <h3 className={styles.cardTitle}>{t(cap.titleKey)}</h3>
              <p className={styles.cardDesc}>{t(cap.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
