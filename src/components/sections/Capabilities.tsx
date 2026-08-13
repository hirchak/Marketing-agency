import { useRef } from 'react';
import { useI18n } from '../../lib/i18n';
import type { TranslationKey } from '../../data/translations';
import { gsap, useGSAP } from '../../lib/gsap';
import styles from './Capabilities.module.css';
import AmbientBackground from '../ambient/AmbientBackground';

interface Capability {
  titleKey: TranslationKey;
  descKey: TranslationKey;
  offersKey: TranslationKey;
  accent: boolean;
}

const capabilities: Capability[] = [
  {
    titleKey: 'cap_marketing_title',
    descKey: 'cap_marketing_desc',
    offersKey: 'cap_marketing_offers',
    accent: false,
  },
  {
    titleKey: 'cap_websites_title',
    descKey: 'cap_websites_desc',
    offersKey: 'cap_websites_offers',
    accent: true,
  },
  {
    titleKey: 'cap_media_title',
    descKey: 'cap_media_desc',
    offersKey: 'cap_media_offers',
    accent: false,
  },
  {
    titleKey: 'cap_products_title',
    descKey: 'cap_products_desc',
    offersKey: 'cap_products_offers',
    accent: true,
  },
];

function CapabilityCard({
  capability,
  index,
  t,
}: {
  capability: Capability;
  index: number;
  t: (key: TranslationKey) => string;
}) {
  const cardRef = useRef<HTMLElement>(null);
  const titleId = `capability-${index + 1}`;

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const card = cardRef.current;
    if (!card || event.pointerType === 'touch') return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--spotlight-x', `${((event.clientX - rect.left) / rect.width) * 100}%`);
    card.style.setProperty('--spotlight-y', `${((event.clientY - rect.top) / rect.height) * 100}%`);
  };

  const resetSpotlight = () => {
    cardRef.current?.style.setProperty('--spotlight-x', '50%');
    cardRef.current?.style.setProperty('--spotlight-y', '50%');
  };

  return (
    <article
      ref={cardRef}
      data-capability-card
      className={`${styles.card} ${capability.accent ? styles.accent : ''}`}
      aria-labelledby={titleId}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetSpotlight}
    >
      <span className={styles.cardNumber}>{String(index + 1).padStart(2, '0')}</span>
      <h3 className={styles.cardTitle} id={titleId}>{t(capability.titleKey)}</h3>
      <p className={styles.cardDesc}>{t(capability.descKey)}</p>
      <div className={styles.offerList}>
        <span className={styles.offerLabel}>{t('cap_offers_label')}</span>
        <div className={styles.offerChips}>
          {t(capability.offersKey).split(' · ').map((offer) => (
            <span className={styles.offerChip} key={offer}>{offer}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Capabilities() {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      gsap.set('[data-capability-card]', { y: 0 });
      return;
    }

    gsap.from('[data-capability-card]', {
      y: 42,
      duration: 0.72,
      stagger: { each: 0.08, from: 'start' },
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 68%',
        once: true,
      },
    });
  }, { scope: sectionRef });

  return (
    <section className={styles.section} id="capabilities" ref={sectionRef}>
      <AmbientBackground variant="services" />
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t('build_title')}</h2>
          <p className={styles.subtitle}>{t('build_subtitle')}</p>
        </div>

        <div className={styles.grid}>
          {capabilities.map((capability, index) => (
            <CapabilityCard
              key={capability.titleKey}
              capability={capability}
              index={index}
              t={t}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
