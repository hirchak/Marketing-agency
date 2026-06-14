import { useRef } from 'react';
import { useI18n } from '../../lib/i18n';
import { offers } from '../../data/offers';
import { gsap, useGSAP } from '../../lib/gsap';
import styles from './Pricing.module.css';
import AmbientBackground from '../ambient/AmbientBackground';

const coreOffers = offers.filter((offer) => offer.type === 'core');
const addonOffers = offers.filter((offer) => offer.type === 'addon');

export default function Pricing() {
  const { t, lang } = useI18n();
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      gsap.set('[data-pricing-card], [data-addon-card]', { y: 0 });
      return;
    }

    gsap.from('[data-pricing-card]', {
      y: 38,
      duration: 0.72,
      stagger: 0.11,
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 68%',
        once: true,
      },
    });

    gsap.from('[data-addon-card]', {
      y: 22,
      duration: 0.58,
      stagger: 0.05,
      scrollTrigger: {
        trigger: `.${styles.addons}`,
        start: 'top 78%',
        once: true,
      },
    });
  }, { scope: ref });

  return (
    <section className={styles.section} id="pricing" ref={ref}>
      <AmbientBackground variant="pricing" />
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.kicker}>{t('pricing_kicker')}</span>
          <h2 className={styles.title}>{t('pricing_title')}</h2>
          <p className={styles.subtitle}>{t('pricing_subtitle')}</p>
        </div>

        <div className={styles.coreGrid}>
          {coreOffers.map((offer) => (
            <article
              key={offer.id}
              data-pricing-card
              className={`${styles.card} ${offer.featured ? styles.featured : ''}`}
            >
              {offer.featured && <span className={styles.popularBadge}>{t('pricing_badge_core')}</span>}
              <div className={styles.cardTop}>
                <h3 className={styles.cardTitle}>{offer.title[lang]}</h3>
                <p className={styles.cardDesc}>{offer.description[lang]}</p>
              </div>

              <div className={styles.priceLine}>
                <span className={styles.priceLabel}>{t('pricing_from')}</span>
                <span className={styles.amount}>{offer.priceFrom[lang]}</span>
              </div>

              <div className={styles.meta}>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>{t('pricing_best_for')}</span>
                  <span className={styles.metaValue}>{offer.bestFor[lang]}</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>{t('pricing_outcome')}</span>
                  <span className={styles.metaValue}>{offer.outcome[lang]}</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>{t('pricing_duration')}</span>
                  <span className={styles.metaValue}>{offer.duration[lang]}</span>
                </div>
              </div>

              <ul className={styles.features}>
                {offer.deliverables[lang].map((deliverable) => (
                  <li key={deliverable} className={styles.feature}>
                    <span className={styles.check}>✓</span>
                    {deliverable}
                  </li>
                ))}
              </ul>
              <a href="#lead" className={styles.cta}>
                {offer.cta[lang]}
              </a>
            </article>
          ))}
        </div>

        <div className={styles.addons}>
          <div className={styles.addonsHeader}>
            <h3>{t('pricing_addons_title')}</h3>
            <p>{t('pricing_addons_subtitle')}</p>
          </div>
          <div className={styles.addonGrid}>
            {addonOffers.map((offer) => (
              <article key={offer.id} className={styles.addonCard} data-addon-card>
                <div>
                  <h4>{offer.title[lang]}</h4>
                  <p>{offer.description[lang]}</p>
                </div>
                <div className={styles.addonFooter}>
                  <span>{offer.priceFrom[lang]}</span>
                  <small>{offer.duration[lang]}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
