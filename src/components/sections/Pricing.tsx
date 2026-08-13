import { useRef } from 'react';
import { useI18n } from '../../lib/i18n';
import { offerCategories, pricingCopy } from '../../data/offers';
import { gsap, useGSAP } from '../../lib/gsap';
import styles from './Pricing.module.css';
import AmbientBackground from '../ambient/AmbientBackground';

export default function Pricing() {
  const { lang } = useI18n();
  const ref = useRef<HTMLElement>(null);
  const copy = pricingCopy[lang];

  useGSAP(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const animatedElements = '[data-pricing-category], [data-pricing-card], [data-pricing-support]';

    if (reduceMotion) {
      gsap.set(animatedElements, { clearProps: 'all' });
      return;
    }

    gsap.utils.toArray<HTMLElement>('[data-pricing-category]').forEach((category) => {
      gsap.from(category, {
        y: 34,
        opacity: 0,
        duration: 0.7,
        scrollTrigger: {
          trigger: category,
          start: 'top 82%',
          once: true,
        },
      });
    });

    gsap.utils.toArray<HTMLElement>('[data-pricing-card]').forEach((card) => {
      gsap.from(card, {
        y: 24,
        opacity: 0,
        duration: 0.58,
        scrollTrigger: {
          trigger: card,
          start: 'top 88%',
          once: true,
        },
      });
    });

    gsap.from('[data-pricing-support]', {
      y: 28,
      opacity: 0,
      duration: 0.68,
      stagger: 0.12,
      scrollTrigger: {
        trigger: '[data-pricing-support]',
        start: 'top 82%',
        once: true,
      },
    });
  }, { scope: ref });

  return (
    <section className={styles.section} id="pricing" ref={ref}>
      <AmbientBackground variant="pricing" />
      <div className={styles.container}>
        <header className={styles.header}>
          <div>
            <span className={styles.kicker}>{copy.kicker}</span>
            <h2 className={styles.title}>{copy.title}</h2>
          </div>
          <p className={styles.subtitle}>{copy.subtitle}</p>
        </header>

        <div className={styles.catalogue}>
          {offerCategories.map((category, categoryIndex) => {
            const categoryTitleId = `${category.id}-title`;

            return (
              <section
                key={category.id}
                className={styles.category}
                aria-labelledby={categoryTitleId}
                data-pricing-category
              >
                <header className={styles.categoryHeader}>
                  <div className={styles.categoryIdentity}>
                    <span className={styles.categoryNumber} aria-hidden="true">
                      {String(categoryIndex + 1).padStart(2, '0')}
                    </span>
                    <span className={styles.categoryLabel}>{copy.categoryLabel}</span>
                    <h3 id={categoryTitleId} className={styles.categoryTitle}>
                      {category.title[lang]}
                    </h3>
                  </div>
                  <div className={styles.categoryIntro}>
                    <p>{category.description[lang]}</p>
                    {category.examples && category.examplesLabel && (
                      <div className={styles.examples}>
                        <span>{category.examplesLabel[lang]}</span>
                        <ul>
                          {category.examples[lang].map((example) => (
                            <li key={example}>{example}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </header>

                <div className={styles.offerGrid}>
                  {category.offers.map((offer) => {
                    const offerTitleId = `${offer.id}-title`;

                    return (
                      <article
                        key={offer.id}
                        className={styles.card}
                        aria-labelledby={offerTitleId}
                        data-pricing-card
                      >
                        <div className={styles.cardMain}>
                          <h4 id={offerTitleId} className={styles.cardTitle}>
                            {offer.title[lang]}
                          </h4>
                          <p className={styles.cardDescription}>{offer.description[lang]}</p>

                          <dl className={styles.commercialMeta}>
                            <div>
                              <dt>{copy.priceLabel}</dt>
                              <dd className={styles.price}>{offer.price[lang]}</dd>
                            </div>
                            <div>
                              <dt>{copy.timelineLabel}</dt>
                              <dd>{offer.timeline[lang]}</dd>
                            </div>
                          </dl>
                        </div>

                        <details className={styles.scopeDetails}>
                          <summary>
                            <span>{copy.scopeSummary}</span>
                            <span className={styles.summaryIcon} aria-hidden="true" />
                          </summary>
                          <div className={styles.detailsBody}>
                            {offer.suitableFor && (
                              <div className={styles.detailBlock}>
                                <h5>{copy.suitableForLabel}</h5>
                                <ul className={styles.compactList}>
                                  {offer.suitableFor[lang].map((item) => (
                                    <li key={item}>{item}</li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {offer.scopes.map((scope, scopeIndex) => (
                              <div className={styles.detailBlock} key={`${offer.id}-scope-${scopeIndex}`}>
                                <h5>{scope.label[lang]}</h5>
                                <ul className={styles.scopeList}>
                                  {scope.items[lang].map((item) => (
                                    <li key={item}>{item}</li>
                                  ))}
                                </ul>
                              </div>
                            ))}

                            <div className={`${styles.detailBlock} ${styles.outcomeBlock}`}>
                              <h5>{copy.outcomeLabel}</h5>
                              <ul className={styles.outcomeList}>
                                {offer.outcome[lang].map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>

                            {offer.notes && (
                              <aside className={styles.offerNote}>
                                <strong>{copy.notesLabel}</strong>
                                {offer.notes[lang].map((note) => (
                                  <p key={note}>{note}</p>
                                ))}
                              </aside>
                            )}
                          </div>
                        </details>
                      </article>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>

        <section className={styles.fitCheck} aria-labelledby="fit-check-title" data-pricing-support>
          <div className={styles.fitCheckLead}>
            <span className={styles.supportEyebrow}>{copy.fitCheck.eyebrow}</span>
            <h3 id="fit-check-title">{copy.fitCheck.title}</h3>
            <p>{copy.fitCheck.description}</p>
            <p className={styles.preparation}>{copy.fitCheck.preparation}</p>
            <a href="#lead" className={styles.fitCheckCta}>
              {copy.fitCheck.cta}
            </a>
          </div>

          <div className={styles.fitCheckDetails}>
            <div>
              <h4>{copy.fitCheck.clarifiesLabel}</h4>
              <ul className={styles.clarifiesList}>
                {copy.fitCheck.clarifies.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4>{copy.fitCheck.startingOptionsLabel}</h4>
              <ul className={styles.startingOptions}>
                {copy.fitCheck.startingOptions.map((option) => (
                  <li key={option}>{option}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.conditions} aria-labelledby="pricing-conditions-title" data-pricing-support>
          <header>
            <span className={styles.supportEyebrow}>{copy.conditions.eyebrow}</span>
            <h3 id="pricing-conditions-title">{copy.conditions.title}</h3>
          </header>
          <ul>
            {copy.conditions.items.map((condition) => (
              <li key={condition}>{condition}</li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}
