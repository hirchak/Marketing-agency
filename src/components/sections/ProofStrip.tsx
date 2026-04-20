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

  return (
    <section className={styles.strip}>
      <div className={styles.container}>
        {items.map((item) => (
          <div key={item.key} className={`${styles.item} ${item.accent ? styles.accent : ''}`}>
            {item.accent && <span className={styles.dot} />}
            <span>{t(item.key)}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
