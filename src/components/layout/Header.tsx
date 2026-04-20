import { useState, useEffect } from 'react';
import { useI18n } from '../../lib/i18n';
import type { Language } from '../../data/translations';
import styles from './Header.module.css';

export default function Header() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#work', label: t('nav_work') },
    { href: '#capabilities', label: t('nav_services') },
    { href: '#method', label: t('nav_method') },
    { href: '#pricing', label: t('nav_pricing') },
    { href: '#lead', label: t('nav_audit') },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="#" className={styles.logo}>
          SAV<span className={styles.logoAccent}>.</span>AGENCY
        </a>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <div className={styles.langSwitch}>
            {(['uk', 'en', 'cs'] as Language[]).map((l) => (
              <button
                key={l}
                className={`${styles.langBtn} ${lang === l ? styles.active : ''}`}
                onClick={() => setLang(l)}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <a href="#lead" className={styles.ctaBtn}>
            {t('cta_audit')}
          </a>
        </div>

        <button
          className={`${styles.mobileToggle} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
