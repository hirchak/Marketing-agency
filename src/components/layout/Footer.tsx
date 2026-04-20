import { useI18n } from '../../lib/i18n';
import styles from './Footer.module.css';

const serviceNames: Record<string, string> = {
  'website-sprint': 'Сайт / лендінг',
  'mvp-sprint': 'MVP / продуктова система',
  'growth-diagnostic': 'Growth-діагностика',
  'gtm-launch': 'GTM-запуск',
};

export default function Footer() {
  const { t } = useI18n();

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
              <li><a href="#pricing">{serviceNames['website-sprint']}</a></li>
              <li><a href="#pricing">{serviceNames['mvp-sprint']}</a></li>
              <li><a href="#pricing">{serviceNames['growth-diagnostic']}</a></li>
              <li><a href="#pricing">{serviceNames['gtm-launch']}</a></li>
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
