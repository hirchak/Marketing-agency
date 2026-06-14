import { useI18n } from '../../lib/i18n';
import type { Language } from '../../data/translations';
import styles from './Footer.module.css';

const serviceNames: Record<Language, string[]> = {
  uk: ['Стратегія росту', 'Сайт для конверсії', 'Система запуску росту', 'Щомісячний супровід'],
  en: ['Growth Intelligence', 'Conversion Website', 'Growth Launch System', 'Monthly Growth Ops'],
  cs: ['Strategie růstu', 'Konverzní web', 'Růstový launch systém', 'Měsíční support'],
};

export default function Footer() {
  const { t, lang } = useI18n();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <a href="#" className={styles.logo}>
              SAV<span className={styles.accent}>.</span>AGENCY
            </a>
            <p className={styles.tagline}>{t('footer_tagline')}</p>
          </div>

          <div className={styles.section}>
            <h4>{t('footer_nav')}</h4>
            <ul>
              <li><a href="#work">{t('nav_work')}</a></li>
              <li><a href="#capabilities">{t('nav_services')}</a></li>
              <li><a href="#method">{t('nav_method')}</a></li>
              <li><a href="#pricing">{t('nav_pricing')}</a></li>
            </ul>
          </div>

          <div className={styles.section}>
            <h4>{t('footer_services')}</h4>
            <ul>
              {serviceNames[lang].map((service) => (
                <li key={service}><a href="#pricing">{service}</a></li>
              ))}
            </ul>
          </div>

          <div className={styles.section}>
            <h4>{t('footer_contact')}</h4>
            <ul>
              <li><a href="https://t.me/andrisav" target="_blank" rel="noopener">{t('footer_telegram')}</a></li>
              <li><a href="mailto:info@sav.agency">{t('footer_email')}</a></li>
              <li><a href="#lead">{t('cta_audit')}</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>{t('footer_copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
