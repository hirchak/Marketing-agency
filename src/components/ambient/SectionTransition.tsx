import styles from './SectionTransition.module.css';

interface SectionTransitionProps {
  label: string;
}

export default function SectionTransition({ label }: SectionTransitionProps) {
  return (
    <div className={styles.transition} data-section-transition aria-hidden="true">
      <span className={styles.line} data-transition-line />
      <span className={styles.pulse} data-transition-pulse />
      <span className={styles.label} data-transition-label>
        {label}
      </span>
    </div>
  );
}
