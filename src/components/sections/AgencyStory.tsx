import { useRef } from 'react';
import type { Language } from '../../data/translations';
import { useI18n } from '../../lib/i18n';
import { gsap, useGSAP } from '../../lib/gsap';
import AmbientBackground from '../ambient/AmbientBackground';
import styles from './AgencyStory.module.css';

interface AgencyStoryCopy {
  kicker: string;
  title: string;
  titleAccent: string;
  positioning: string;
  missionLabel: string;
  mission: string;
  audiencesLabel: string;
  audiencesTitle: string;
  audiences: string[];
  buildsLabel: string;
  buildsTitle: string;
  builds: string[];
  journeyLabel: string;
  journeyTitle: string;
  stages: Array<{ title: string; body: string }>;
  principleLabel: string;
  principle: string;
}

const copy: Record<Language, AgencyStoryCopy> = {
  uk: {
    kicker: 'Digital Products Agency',
    title: 'Люди, ідеї та технології.',
    titleAccent: 'Зібрані, щоб створювати корисне.',
    positioning: 'SAV.AGENCY — агенція цифрових продуктів, технологій і венчурних проєктів, яка об’єднує сильних людей для створення корисних продуктів, платформ, стартапів і нових цифрових бізнесів.',
    missionLabel: 'Місія',
    mission: 'Знаходити здібних людей і змістовні цифрові ідеї, формувати сильні команди та допомагати перетворювати їхній потенціал на продукти, що створюють реальну цінність.',
    audiencesLabel: 'Для кого',
    audiencesTitle: 'Для тих, хто створює щось корисне',
    audiences: [
      'Засновники та підприємці',
      'Розробники, AI-білдери й дизайнери',
      'Продуктові команди та компанії',
      'Спільноти, NGO та державні інституції',
    ],
    buildsLabel: 'Що ми створюємо',
    buildsTitle: 'Від першого MVP до цифрової інфраструктури',
    builds: [
      'Вебсайти', 'SaaS-продукти', 'AI-продукти', 'Застосунки',
      'Платформи й маркетплейси', 'Внутрішні бізнес-інструменти',
      'Платформи для спільнот', 'Системи автоматизації',
      'Цифрові сервіси та MVP', 'Експериментальні продукти',
      'Технології суспільної користі', 'Нові цифрові бізнеси',
    ],
    journeyLabel: 'Повний продуктовий шлях',
    journeyTitle: 'Від ранньої ідеї до робочого продукту — і далі.',
    stages: [
      { title: 'Discovery', body: 'Проблема, користувачі, ринок, бачення, технології та можливість.' },
      { title: 'Продуктова стратегія', body: 'Цінність, функції, бізнес-модель, пріоритети, roadmap і валідація.' },
      { title: 'Дизайн', body: 'UX, сценарії, інформаційна архітектура, інтерфейси та прототипи.' },
      { title: 'Розробка', body: 'Frontend, backend, дані, AI, автоматизація, інфраструктура та інтеграції.' },
      { title: 'Запуск', body: 'Тестування, onboarding, аналітика, перші користувачі й комунікація.' },
      { title: 'Зростання', body: 'Покращення, конверсія, утримання, нові функції, партнерства й масштабування.' },
    ],
    principleLabel: 'Основний принцип',
    principle: 'Знаходити хороших людей. Знаходити змістовні проблеми. Об’єднувати правильних людей. Створювати корисні речі.',
  },
  en: {
    kicker: 'Digital Products Agency',
    title: 'People, ideas and technology.',
    titleAccent: 'Assembled to build useful things.',
    positioning: 'SAV.AGENCY is a digital product, technology and venture agency that brings strong people together to build useful products, platforms, startups and new digital businesses.',
    missionLabel: 'Mission',
    mission: 'Find capable people and meaningful digital ideas, connect them into strong teams and help transform their potential into products that create real value.',
    audiencesLabel: 'Who it serves',
    audiencesTitle: 'For people building something useful',
    audiences: [
      'Founders and entrepreneurs',
      'Developers, AI builders and designers',
      'Product teams and companies',
      'Communities, NGOs and public institutions',
    ],
    buildsLabel: 'What we build',
    buildsTitle: 'From a first MVP to digital infrastructure',
    builds: [
      'Websites', 'SaaS products', 'AI products', 'Applications',
      'Platforms and marketplaces', 'Internal business tools',
      'Community platforms', 'Automation systems',
      'Digital services and MVPs', 'Experimental products',
      'Public-interest technology', 'New digital businesses',
    ],
    journeyLabel: 'Complete product journey',
    journeyTitle: 'From an early idea to a working product—and what comes next.',
    stages: [
      { title: 'Discovery', body: 'The problem, users, market, founder vision, technology and opportunity.' },
      { title: 'Product strategy', body: 'Core value, features, business model, priorities, roadmap and validation.' },
      { title: 'Design', body: 'UX, user journeys, information architecture, interfaces and prototypes.' },
      { title: 'Development', body: 'Frontend, backend, data, AI, automation, infrastructure and integrations.' },
      { title: 'Launch', body: 'Testing, onboarding, analytics, initial users and communication.' },
      { title: 'Growth', body: 'Improvements, conversion, retention, new features, partnerships and scaling.' },
    ],
    principleLabel: 'Core principle',
    principle: 'Find good people. Find meaningful problems. Bring the right people together. Build useful things.',
  },
  cs: {
    kicker: 'Digital Products Agency',
    title: 'Lidé, nápady a technologie.',
    titleAccent: 'Spojené pro tvorbu užitečných věcí.',
    positioning: 'SAV.AGENCY je agentura pro digitální produkty, technologie a nové projekty, která spojuje schopné lidi a tvoří užitečné produkty, platformy, startupy a nové digitální firmy.',
    missionLabel: 'Poslání',
    mission: 'Nacházet schopné lidi a smysluplné digitální nápady, spojovat je do silných týmů a pomáhat měnit jejich potenciál v produkty se skutečnou hodnotou.',
    audiencesLabel: 'Pro koho',
    audiencesTitle: 'Pro lidi, kteří tvoří něco užitečného',
    audiences: [
      'Zakladatelé a podnikatelé',
      'Vývojáři, AI tvůrci a designéři',
      'Produktové týmy a firmy',
      'Komunity, neziskové a veřejné instituce',
    ],
    buildsLabel: 'Co tvoříme',
    buildsTitle: 'Od prvního MVP po digitální infrastrukturu',
    builds: [
      'Webové stránky', 'SaaS produkty', 'AI produkty', 'Aplikace',
      'Platformy a online tržiště', 'Interní firemní nástroje',
      'Komunitní platformy', 'Automatizační systémy',
      'Digitální služby a MVP', 'Experimentální produkty',
      'Technologie ve veřejném zájmu', 'Nové digitální firmy',
    ],
    journeyLabel: 'Celá produktová cesta',
    journeyTitle: 'Od prvního nápadu k fungujícímu produktu — a dál.',
    stages: [
      { title: 'Discovery', body: 'Problém, uživatelé, trh, vize zakladatele, technologie a příležitost.' },
      { title: 'Produktová strategie', body: 'Hodnota, funkce, obchodní model, priority, roadmapa a validace.' },
      { title: 'Design', body: 'UX, uživatelské cesty, informační architektura, rozhraní a prototypy.' },
      { title: 'Vývoj', body: 'Frontend, backend, data, AI, automatizace, infrastruktura a integrace.' },
      { title: 'Spuštění', body: 'Testování, onboarding, analytika, první uživatelé a komunikace.' },
      { title: 'Růst', body: 'Zlepšování, konverze, retence, nové funkce, partnerství a škálování.' },
    ],
    principleLabel: 'Základní princip',
    principle: 'Nacházet dobré lidi. Nacházet smysluplné problémy. Spojovat správné lidi. Tvořit užitečné věci.',
  },
};

export default function AgencyStory() {
  const { lang } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const content = copy[lang];

  useGSAP(() => {
    const media = gsap.matchMedia();

    media.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from('[data-agency-reveal]', {
        y: 28,
        autoAlpha: 0,
        duration: 0.7,
        stagger: 0.065,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 76%',
          once: true,
        },
      });
    });

    return () => media.revert();
  }, { scope: sectionRef, dependencies: [lang], revertOnUpdate: true });

  return (
    <section className={styles.section} id="agency" ref={sectionRef} aria-labelledby="agency-title">
      <AmbientBackground variant="services" />
      <div className={styles.container}>
        <header className={styles.header}>
          <div data-agency-reveal>
            <span className={styles.kicker}>{content.kicker}</span>
            <h2 className={styles.title} id="agency-title">
              {content.title}
              <span>{content.titleAccent}</span>
            </h2>
          </div>
          <div className={styles.manifesto} data-agency-reveal>
            <p className={styles.positioning}>{content.positioning}</p>
            <div className={styles.mission}>
              <span>{content.missionLabel}</span>
              <p>{content.mission}</p>
            </div>
          </div>
        </header>

        <div className={styles.indexGrid}>
          <article className={styles.audiences} data-agency-reveal>
            <span className={styles.eyebrow}>{content.audiencesLabel}</span>
            <h3>{content.audiencesTitle}</h3>
            <ul>
              {content.audiences.map((audience) => <li key={audience}>{audience}</li>)}
            </ul>
          </article>

          <article className={styles.builds} data-agency-reveal>
            <span className={styles.eyebrow}>{content.buildsLabel}</span>
            <h3>{content.buildsTitle}</h3>
            <ul>
              {content.builds.map((product) => <li key={product}>{product}</li>)}
            </ul>
          </article>
        </div>

        <div className={styles.journey} data-agency-reveal>
          <div className={styles.journeyHeader}>
            <span className={styles.eyebrow}>{content.journeyLabel}</span>
            <h3>{content.journeyTitle}</h3>
          </div>
          <ol className={styles.stages}>
            {content.stages.map((stage, index) => (
              <li key={stage.title}>
                <span className={styles.stageNumber}>{String(index + 1).padStart(2, '0')}</span>
                <h4>{stage.title}</h4>
                <p>{stage.body}</p>
              </li>
            ))}
          </ol>
        </div>

        <blockquote className={styles.principle} data-agency-reveal>
          <span>{content.principleLabel}</span>
          <p>{content.principle}</p>
        </blockquote>
      </div>
    </section>
  );
}
