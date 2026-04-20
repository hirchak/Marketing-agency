import { useEffect, useRef, useState } from 'react';
import { useI18n } from '../../lib/i18n';
import { cases } from '../../data/cases';
import styles from './Cases.module.css';

export default function Cases() {
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
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} id="work" ref={ref}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t('cases_title')}</h2>
          <p className={styles.subtitle}>{t('cases_subtitle')}</p>
        </div>

        <div className={styles.grid}>
          {cases.map((caseItem, i) => (
            <TiltedCard
              key={caseItem.id}
              caseItem={caseItem}
              index={i}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TiltedCard({ caseItem, index, visible }: { caseItem: typeof cases[0]; index: number; visible: boolean }) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isHovered) return;
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = (e.clientY - rect.top - rect.height / 2) * 0.02;
    const y = -(e.clientX - rect.left - rect.width / 2) * 0.02;

    setRotation({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      className={`${styles.card} ${caseItem.featured ? styles.featured : ''}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? `translateY(0) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
          : 'translateY(40px)',
        transition: isHovered ? 'transform 0.1s ease-out' : `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`,
      }}
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
  );
}
