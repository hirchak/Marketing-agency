import { useI18n } from '../../lib/i18n';
import type { Language } from '../../data/translations';
import styles from './Footer.module.css';

const serviceNames: Record<Language, string[]> = {
  uk: ['Цифрові продукти та AI', 'Вебсайти', 'Маркетинг і зростання', 'Медіа та контент'],
  en: ['Digital Products and AI', 'Websites', 'Marketing and Growth', 'Media and Content'],
  cs: ['Digitální produkty a AI', 'Webové stránky', 'Marketing a růst', 'Média a obsah'],
};

export default function Footer() {
  const { t, lang } = useI18n();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <a href="#main" className={styles.logo}>
              SAV<span className={styles.accent}>.</span>AGENCY
            </a>
            <p className={styles.tagline}>{t('footer_tagline')}</p>
          </div>

          <div className={styles.section}>
            <h4>{t('footer_nav')}</h4>
            <ul>
              <li><a href="#agency">{t('nav_studio')}</a></li>
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
