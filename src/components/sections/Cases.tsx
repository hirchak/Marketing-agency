import { useI18n } from '../../lib/i18n';
import { cases } from '../../data/cases';
import styles from './Cases.module.css';

export default function Cases() {
  const { t } = useI18n();

  return (
    <section className={styles.section} id="work">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t('cases_title')}</h2>
          <p className={styles.subtitle}>{t('cases_subtitle')}</p>
        </div>

        <div className={styles.grid}>
          {cases.map((caseItem, i) => (
            <div
              key={caseItem.id}
              className={`${styles.card} ${caseItem.featured ? styles.featured : ''}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.year}>{caseItem.year}</span>
                {caseItem.featured && <span className={styles.featuredBadge}>Featured</span>}
              </div>
              <h3 className={styles.cardTitle}>{caseItem.title}</h3>
              <p className={styles.cardDesc}>{caseItem.description}</p>
              <div className={styles.tags}>
                {caseItem.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
