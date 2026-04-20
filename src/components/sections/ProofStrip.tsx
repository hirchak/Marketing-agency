import { useEffect, useRef, useState } from 'react';
import { useI18n } from '../../lib/i18n';
import { TranslationKey } from '../../data/translations';
import styles from './ProofStrip.module.css';

interface ProofItem {
  key: TranslationKey;
  accent: boolean;
}

const items: ProofItem[] = [
  { key: 'proof_1', accent: false },
  { key: 'proof_2', accent: true },
  { key: 'proof_3', accent: true },
  { key: 'proof_4', accent: false },
];

export default function ProofStrip() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.strip} ref={ref}>
      <div className={styles.container}>
        {items.map((item, i) => (
          <div
            key={item.key}
            className={`${styles.item} ${item.accent ? styles.accent : ''}`}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(10px)',
              transition: `all 0.5s ease ${i * 0.1}s`,
            }}
          >
            {item.accent && <span className={styles.dot} />}
            <span>{t(item.key)}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
