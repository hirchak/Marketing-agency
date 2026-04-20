import { useI18n } from '../../lib/i18n';
import { offers } from '../../data/offers';
import styles from './Pricing.module.css';

export default function Pricing() {
  const { t } = useI18n();

  return (
    <section className={styles.section} id="pricing">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t('pricing_title')}</h2>
          <p className={styles.subtitle}>{t('pricing_subtitle')}</p>
        </div>

        <div className={styles.grid}>
          {offers.map((offer, i) => (
            <div
              key={offer.id}
              className={`${styles.card} ${offer.featured ? styles.featured : ''}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {offer.featured && <span className={styles.popularBadge}>Most Popular</span>}
              <h3 className={styles.cardTitle}>{offer.title}</h3>
              <p className={styles.cardDesc}>{offer.description}</p>
              <div className={styles.price}>
                <span className={styles.amount}>{offer.price}</span>
                {offer.period && <span className={styles.period}>{offer.period}</span>}
              </div>
              <ul className={styles.features}>
                {offer.features.map((feature) => (
                  <li key={feature} className={styles.feature}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8L6.5 11.5L13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#lead" className={styles.cta}>
                {offer.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
