import styles from './AuroraVeil.module.css';

export default function AuroraVeil() {
  return (
    <div className={styles.veil} aria-hidden="true">
      <div className={styles.aurora} />
      <div className={styles.depth} />
    </div>
  );
}
