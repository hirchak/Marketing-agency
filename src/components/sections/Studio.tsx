import { useRef } from 'react';
import type { Language } from '../../data/translations';
import { useI18n } from '../../lib/i18n';
import { gsap, useGSAP } from '../../lib/gsap';
import AmbientBackground from '../ambient/AmbientBackground';
import styles from './Studio.module.css';

interface StudioCopy {
  kicker: string;
  title: string;
  titleAccent: string;
  intro: string;
  principles: Array<{
    label: string;
    title: string;
    body: string;
  }>;
  ecosystemLabel: string;
  ecosystemTitle: string;
  ecosystemBody: string;
}

const copy: Record<Language, StudioCopy> = {
  uk: {
    kicker: 'Студія / Мережа',
    title: 'Невелике ядро.',
    titleAccent: 'Ширші можливості.',
    intro: 'SAV.AGENCY використовує AI-native підхід, щоб невеликі проєктні команди могли швидко створювати амбітні цифрові продукти. Спосіб роботи формується навколо задачі, а не фіксованого складу.',
    principles: [
      {
        label: 'Ядро',
        title: 'AI-native продуктова студія',
        body: 'Дослідження, дизайн і розробка працюють як один процес — від першого напряму до робочого продукту.',
      },
      {
        label: 'Команда',
        title: 'Склад під конкретний проєкт',
        body: 'Коли цього потребує задача, до гнучкої проєктної команди долучаються профільні спеціалісти з релевантним досвідом.',
      },
      {
        label: 'Потенціал',
        title: 'Можливість спільного venture',
        body: 'Окремі перспективні ідеї можуть вирости зі співпраці у спільні продукти — за взаємної зацікавленості та чіткого fit.',
      },
    ],
    ecosystemLabel: 'Ширша екосистема',
    ecosystemTitle: 'Technology & digital product',
    ecosystemBody: 'У ширшій екосистемі 34ForFree7 SAV.AGENCY є технологічною та digital-product компетенцією.',
  },
  en: {
    kicker: 'Studio / Network',
    title: 'Small core.',
    titleAccent: 'Wider capability.',
    intro: 'SAV.AGENCY uses an AI-native approach so small project teams can build ambitious digital products quickly. The way we work is shaped around the project rather than a fixed roster.',
    principles: [
      {
        label: 'Core',
        title: 'AI-native product studio',
        body: 'Research, design and engineering move as one product process—from early direction to a working product.',
      },
      {
        label: 'Team',
        title: 'Built around the project',
        body: 'When the work calls for it, relevant specialists join a flexible team shaped around the brief.',
      },
      {
        label: 'Potential',
        title: 'A path to shared ventures',
        body: 'A select number of promising ideas may grow from client work into shared ventures—where there is clear mutual fit.',
      },
    ],
    ecosystemLabel: 'Wider ecosystem',
    ecosystemTitle: 'Technology & digital product',
    ecosystemBody: 'Within the wider 34ForFree7 ecosystem, SAV.AGENCY provides the technology and digital-product capability.',
  },
  cs: {
    kicker: 'Studio / Síť',
    title: 'Malé jádro.',
    titleAccent: 'Širší možnosti.',
    intro: 'SAV.AGENCY využívá AI-native přístup, aby malé projektové týmy mohly rychle tvořit ambiciózní digitální produkty. Způsob práce přizpůsobujeme projektu, ne pevnému složení týmu.',
    principles: [
      {
        label: 'Jádro',
        title: 'AI-native produktové studio',
        body: 'Výzkum, design a vývoj tvoří jeden produktový proces — od prvního směru k funkčnímu produktu.',
      },
      {
        label: 'Tým',
        title: 'Složení podle projektu',
        body: 'Když to zadání vyžaduje, zapojujeme relevantní specialisty do flexibilního týmu sestaveného pro daný projekt.',
      },
      {
        label: 'Potenciál',
        title: 'Cesta ke společným ventures',
        body: 'Vybrané perspektivní nápady mohou přerůst z klientské spolupráce ve společné projekty — pokud existuje jasná shoda na obou stranách.',
      },
    ],
    ecosystemLabel: 'Širší ekosystém',
    ecosystemTitle: 'Technology & digital product',
    ecosystemBody: 'V širším ekosystému 34ForFree7 představuje SAV.AGENCY technologickou a digitálně-produktovou kapacitu.',
  },
};

export default function Studio() {
  const { lang } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const content = copy[lang];

  useGSAP(() => {
    const media = gsap.matchMedia();

    media.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from('[data-studio-reveal]', {
        y: 24,
        autoAlpha: 0,
        duration: 0.68,
        stagger: 0.08,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 72%',
          once: true,
        },
      });
    });

    return () => media.revert();
  }, { scope: sectionRef });

  return (
    <section
      className={styles.section}
      id="studio"
      ref={sectionRef}
      aria-labelledby="studio-title"
    >
      <AmbientBackground variant="services" />

      <div className={styles.container}>
        <header className={styles.header}>
          <div data-studio-reveal>
            <span className={styles.kicker}>{content.kicker}</span>
            <h2 className={styles.title} id="studio-title">
              {content.title}
              <span>{content.titleAccent}</span>
            </h2>
          </div>
          <p className={styles.intro} data-studio-reveal>{content.intro}</p>
        </header>

        <ol className={styles.principles}>
          {content.principles.map((principle, index) => (
            <li className={styles.principle} data-studio-reveal key={principle.title}>
              <div className={styles.principleMeta}>
                <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
                <span className={styles.label}>{principle.label}</span>
              </div>
              <h3>{principle.title}</h3>
              <p>{principle.body}</p>
            </li>
          ))}
        </ol>

        <div className={styles.ecosystem} data-studio-reveal>
          <div className={styles.ecosystemMark} aria-hidden="true">
            <span className={styles.pulse} />
            <strong>34ForFree7</strong>
          </div>
          <div className={styles.ecosystemContent}>
            <span className={styles.ecosystemLabel}>{content.ecosystemLabel}</span>
            <h3>{content.ecosystemTitle}</h3>
            <p>{content.ecosystemBody}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
