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
  networkLabel: string;
  networkTitle: string;
  networkItems: Array<{
    title: string;
    body: string;
  }>;
  ecosystemLabel: string;
  ecosystemTitle: string;
  ecosystemBody: string;
  ecosystemPartners: string[];
}

const copy: Record<Language, StudioCopy> = {
  uk: {
    kicker: 'Студія / Мережа / Ventures',
    title: 'Продуктова студія.',
    titleAccent: 'Мережа творців. Venture layer.',
    intro: 'SAV.AGENCY знаходить здібних творців і перспективні проєкти, об’єднує потрібних людей навколо задачі та формує гнучкі команди з внутрішніх спеціалістів, незалежних професіоналів, партнерів, засновників і зовнішніх експертів.',
    principles: [
      {
        label: 'Створення',
        title: 'AI-native продуктова розробка',
        body: 'Сучасні AI-інструменти допомагають малим командам швидше прототипувати, автоматизувати роботу, тестувати більше ідей і створювати складні спеціалізовані системи.',
      },
      {
        label: 'Мережа',
        title: 'Сильні люди навколо задачі',
        body: 'Розробники, AI-білдери, дизайнери, product-менеджери, дослідники й growth-фахівці можуть обмінюватися знаннями, формувати команди та запускати експерименти разом.',
      },
      {
        label: 'Ventures',
        title: 'Від співпраці до спільного продукту',
        body: 'Окремі перспективні ідеї від клієнтів, засновників, спеціалістів, спільнот або екосистеми можуть стати спільними ventures — за взаємної зацікавленості й чіткого fit.',
      },
    ],
    networkLabel: 'Мережа в дії',
    networkTitle: 'Інфраструктура для співпраці та навчання через реальні проєкти',
    networkItems: [
      { title: 'Пошук через Linkora', body: 'У міру розвитку мережі Linkora може допомагати знаходити людей, навички, ідеї, команди й можливості для співпраці.' },
      { title: 'Навчання разом', body: 'Воркшопи, хакатони, продуктові розбори, AI-експерименти та робочі сесії допомагають людям навчатися через створення реальних речей.' },
      { title: 'Технології суспільної користі', body: 'Агенція може створювати цифрову інфраструктуру для громад, освіти, екології, культури, NGO, муніципалітетів і державних сервісів.' },
      { title: 'Гнучка проєктна команда', body: 'Кожен проєкт отримує власну комбінацію product, design, engineering, growth та галузевої експертизи.' },
    ],
    ecosystemLabel: 'Ширша екосистема',
    ecosystemTitle: 'Технологічна спроможність 34ForFree7',
    ecosystemBody: 'Коли інша агенція або спільнота знаходить проблему, яку можна розв’язати технологією, SAV.AGENCY може дослідити потребу, визначити продуктову можливість, зібрати команду, створити й протестувати рішення та за потреби перетворити його на повторно використовуваний продукт.',
    ecosystemPartners: ['Personal Growth & Brand', 'Business', 'Impact'],
  },
  en: {
    kicker: 'Studio / Network / Ventures',
    title: 'Product studio.',
    titleAccent: 'Creator network. Venture layer.',
    intro: 'SAV.AGENCY discovers capable creators and promising projects, brings the right people around the task and forms flexible teams from agency specialists, independent professionals, partners, founders and external experts.',
    principles: [
      {
        label: 'Build',
        title: 'AI-native product development',
        body: 'Modern AI tools help small teams prototype faster, automate work, test more ideas and build sophisticated, highly specialized systems.',
      },
      {
        label: 'Network',
        title: 'Strong people around the task',
        body: 'Developers, AI builders, designers, product managers, researchers and growth specialists can share knowledge, form teams and launch experiments together.',
      },
      {
        label: 'Ventures',
        title: 'From collaboration to shared product',
        body: 'Selected ideas from clients, founders, specialists, communities or the ecosystem may become shared ventures—where there is clear mutual fit.',
      },
    ],
    networkLabel: 'The network in practice',
    networkTitle: 'Infrastructure for collaboration and learning through real projects',
    networkItems: [
      { title: 'Discovery through Linkora', body: 'As the network develops, Linkora can help surface people, skills, ideas, teams and opportunities for collaboration.' },
      { title: 'Learning together', body: 'Workshops, hackathons, product reviews, AI experiments and building sessions help people learn by making real things.' },
      { title: 'Public-interest technology', body: 'The agency can build digital infrastructure for communities, education, ecology, culture, NGOs, municipalities and public services.' },
      { title: 'Flexible project teams', body: 'Each project gets its own combination of product, design, engineering, growth and relevant industry expertise.' },
    ],
    ecosystemLabel: 'Wider ecosystem',
    ecosystemTitle: 'The technology capability of 34ForFree7',
    ecosystemBody: 'When another agency or community identifies a problem that technology can solve, SAV.AGENCY can explore the need, define the product opportunity, assemble a team, build and test the solution, and—where useful—turn it into a reusable product.',
    ecosystemPartners: ['Personal Growth & Brand', 'Business', 'Impact'],
  },
  cs: {
    kicker: 'Studio / Síť / Ventures',
    title: 'Produktové studio.',
    titleAccent: 'Síť tvůrců. Venture vrstva.',
    intro: 'SAV.AGENCY vyhledává schopné tvůrce a perspektivní projekty, spojuje správné lidi kolem zadání a skládá flexibilní týmy z agenturních specialistů, nezávislých profesionálů, partnerů, zakladatelů a externích expertů.',
    principles: [
      {
        label: 'Tvorba',
        title: 'AI-native produktový vývoj',
        body: 'Moderní AI nástroje pomáhají malým týmům rychleji prototypovat, automatizovat práci, testovat více nápadů a tvořit sofistikované specializované systémy.',
      },
      {
        label: 'Síť',
        title: 'Silní lidé kolem zadání',
        body: 'Vývojáři, AI tvůrci, designéři, produktoví manažeři, výzkumníci a growth specialisté mohou sdílet znalosti, skládat týmy a společně spouštět experimenty.',
      },
      {
        label: 'Ventures',
        title: 'Od spolupráce ke společnému produktu',
        body: 'Vybrané nápady od klientů, zakladatelů, specialistů, komunit nebo ekosystému se mohou stát společnými ventures — pokud existuje jasná shoda na obou stranách.',
      },
    ],
    networkLabel: 'Síť v praxi',
    networkTitle: 'Infrastruktura pro spolupráci a učení prostřednictvím reálných projektů',
    networkItems: [
      { title: 'Objevování přes Linkoru', body: 'S rozvojem sítě může Linkora pomáhat nacházet lidi, dovednosti, nápady, týmy a příležitosti ke spolupráci.' },
      { title: 'Společné učení', body: 'Workshopy, hackathony, produktové rozbory, AI experimenty a pracovní setkání pomáhají lidem učit se tvorbou skutečných věcí.' },
      { title: 'Technologie ve veřejném zájmu', body: 'Agentura může tvořit digitální infrastrukturu pro komunity, vzdělávání, ekologii, kulturu, neziskové organizace, obce a veřejné služby.' },
      { title: 'Flexibilní projektové týmy', body: 'Každý projekt dostává vlastní kombinaci produktové, designové, technické, růstové a oborové expertizy.' },
    ],
    ecosystemLabel: 'Širší ekosystém',
    ecosystemTitle: 'Technologická kapacita 34ForFree7',
    ecosystemBody: 'Když jiná agentura nebo komunita objeví problém řešitelný technologií, SAV.AGENCY může prozkoumat potřebu, definovat produktovou příležitost, sestavit tým, řešení vytvořit a otestovat a tam, kde to dává smysl, z něj udělat znovu použitelný produkt.',
    ecosystemPartners: ['Personal Growth & Brand', 'Business', 'Impact'],
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
  }, { scope: sectionRef, dependencies: [lang], revertOnUpdate: true });

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

        <div className={styles.network} data-studio-reveal>
          <header className={styles.networkHeader}>
            <span className={styles.ecosystemLabel}>{content.networkLabel}</span>
            <h3>{content.networkTitle}</h3>
          </header>
          <div className={styles.networkGrid}>
            {content.networkItems.map((item) => (
              <article key={item.title}>
                <h4>{item.title}</h4>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.ecosystem} data-studio-reveal>
          <div className={styles.ecosystemMark} aria-hidden="true">
            <span className={styles.pulse} />
            <strong>34ForFree7</strong>
          </div>
          <div className={styles.ecosystemContent}>
            <span className={styles.ecosystemLabel}>{content.ecosystemLabel}</span>
            <h3>{content.ecosystemTitle}</h3>
            <div>
              <p>{content.ecosystemBody}</p>
              <ul className={styles.ecosystemPartners} aria-label={content.ecosystemLabel}>
                {content.ecosystemPartners.map((partner) => <li key={partner}>{partner}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
