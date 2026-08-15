import { useState, useEffect, useRef } from 'react';
import { useI18n } from '../../lib/i18n';
import styles from './Header.module.css';

const accessibilityCopy: {
  primaryNavigation: string;
  toggleMenu: string;
} = {
  primaryNavigation: 'Primary navigation',
  toggleMenu: 'Open or close menu',
};

export default function Header() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const a11y = accessibilityCopy;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    const focusableSelector = 'a[href], button:not([disabled])';
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        mobileToggleRef.current?.focus();
      }
    };
    const handleTab = (event: KeyboardEvent) => {
      if (event.key !== 'Tab' || !navRef.current) return;
      const focusableElements = Array.from(navRef.current.querySelectorAll<HTMLElement>(focusableSelector));
      if (focusableElements.length === 0) return;
      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEscape);
    window.addEventListener('keydown', handleTab);
    navRef.current?.querySelector<HTMLElement>(focusableSelector)?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleEscape);
      window.removeEventListener('keydown', handleTab);
    };
  }, [menuOpen]);

  const navItems = [
    { href: '#agency', label: t('nav_studio') },
    { href: '#capabilities', label: t('nav_services') },
    { href: '#method', label: t('nav_method') },
    { href: '#work', label: t('nav_work') },
    { href: '#pricing', label: t('nav_pricing') },
    { href: '#lead', label: t('nav_audit') },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="#" className={styles.logo} onClick={closeMenu}>
          SAV<span className={styles.logoAccent}>.</span>AGENCY
        </a>

        <nav
          ref={navRef}
          className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}
          id="primary-navigation"
          aria-label={a11y.primaryNavigation}
        >
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={styles.navLink} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <div className={styles.mobileActions}>
            <a href="#lead" className={styles.ctaBtn} onClick={closeMenu}>
              {t('cta_audit')}
            </a>
          </div>
        </nav>

        <div className={styles.actions}>
          <a href="#lead" className={styles.ctaBtn}>
            {t('cta_audit')}
          </a>
        </div>

        <button
          ref={mobileToggleRef}
          type="button"
          className={`${styles.mobileToggle} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={a11y.toggleMenu}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
