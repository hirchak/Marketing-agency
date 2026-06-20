import styles from './SectionTransition.module.css';

interface SectionTransitionProps {
  label: string;
}

export default function SectionTransition({ label }: SectionTransitionProps) {
  const variantIndex = Array.from(label).reduce((sum, char) => sum + char.charCodeAt(0), 0) % 3;
  const variantClass = [styles.variantA, styles.variantB, styles.variantC][variantIndex];

  return (
    <div
      className={`${styles.transition} ${variantClass}`}
      data-section-transition
      data-chapter={label}
      aria-hidden="true"
    >
      <span className={styles.mesh} data-flow-mesh />
      <span className={styles.horizon} data-flow-horizon />
      <span className={styles.river} data-flow-river />
      <span className={styles.sweep} data-flow-sweep />
      <span className={styles.thread} data-flow-thread />
      <span className={`${styles.node} ${styles.nodeA}`} />
      <span className={`${styles.node} ${styles.nodeB}`} />
      <span className={`${styles.node} ${styles.nodeC}`} />
    </div>
  );
}
