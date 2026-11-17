import { useEffect, useRef } from 'react';
import { useI18n } from '../../lib/i18n';
import { gsap, useGSAP } from '../../lib/gsap';
import styles from './Hero.module.css';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
}

export default function Hero() {
  const { t, lang } = useI18n();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particleRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const cta1Ref = useRef<HTMLAnchorElement>(null);
  const cta2Ref = useRef<HTMLAnchorElement>(null);

  const isMobile = useRef(false);
  const prefersReducedMotion = useRef(false);

  // Particle system ref
  const particles = useRef<Particle[]>([]);
  const animationId = useRef<number>(0);

  useGSAP(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: '(min-width: 768px)',
        reduceMotion: '(prefers-reduced-motion: reduce)',
      },
      (context) => {
        const { isDesktop } = context.conditions || {};
        if (reduceMotion) {
          gsap.set('[data-hero-reveal], [data-hero-console], [data-console-row]', { autoAlpha: 1, y: 0, x: 0, clipPath: 'inset(0% 0% 0% 0%)' });
          return;
        }

        const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
        tl.from('[data-hero-headline]', {
          y: isDesktop ? 58 : 30,
          autoAlpha: 0,
          clipPath: 'inset(0% 0% 100% 0%)',
          duration: 0.78,
        })
          .from('[data-hero-console]', {
            x: isDesktop ? 38 : 0,
            y: isDesktop ? 0 : 18,
            autoAlpha: 0,
            duration: 0.68,
          }, '-=0.46')
          .from('[data-hero-reveal]', {
            y: isDesktop ? 20 : 16,
            autoAlpha: 0,
            duration: 0.48,
            stagger: 0.045,
          }, '-=0.52')
          .from('[data-signal-step]', {
            y: 14,
            autoAlpha: 0,
            duration: 0.42,
            stagger: 0.055,
          }, '-=0.62')
          .from('[data-console-row]', {
            y: 12,
            autoAlpha: 0,
            duration: 0.38,
            stagger: 0.045,
          }, '-=0.56');
      },
      heroRef
    );

    return () => mm.revert();
  }, { scope: heroRef, dependencies: [lang], revertOnUpdate: true });

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const particleCanvas = particleRef.current;
    const hero = heroRef.current;
    if (!canvas || !hero) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;
    let active = false;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      isMobile.current = window.innerWidth < 768;

      // Setup particles
      if (particleCanvas && !prefersReducedMotion.current) {
        particleCanvas.width = canvas.offsetWidth;
        particleCanvas.height = canvas.offsetHeight;
        initParticles();
      }
    };

    const initParticles = () => {
      if (!particleCanvas || prefersReducedMotion.current) return;
      const density = isMobile.current ? 15 : 40;
      particles.current = Array.from({ length: density }, () => ({
        x: Math.random() * particleCanvas.width,
        y: Math.random() * particleCanvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.1 + 0.12,
      }));
    };

    const drawOperatingGrid = () => {
      const spacing = isMobile.current ? 56 : 72;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.025)';
      ctx.lineWidth = 0.5;

      for (let x = 0; x < canvas.width; x += spacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x + Math.sin(time + x * 0.01) * 12, canvas.height);
        ctx.stroke();
      }

      for (let y = 0; y < canvas.height; y += spacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y + Math.cos(time + y * 0.01) * 10);
        ctx.stroke();
      }
    };

    const drawSignalRoutes = () => {
      const routes = isMobile.current ? 3 : 7;
      for (let i = 0; i < routes; i++) {
        const startX = canvas.width * (0.48 + i * 0.045);
        const startY = canvas.height * (0.18 + (i % 3) * 0.18);
        const endX = canvas.width * (0.9 - i * 0.035);
        const endY = canvas.height * (0.76 - (i % 4) * 0.11);
        const controlX = canvas.width * (0.68 + Math.sin(time + i) * 0.04);
        const controlY = canvas.height * (0.48 + Math.cos(time * 0.7 + i) * 0.08);

        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.quadraticCurveTo(controlX, controlY, endX, endY);
        ctx.strokeStyle = `rgba(255, 69, 0, ${0.035 + i * 0.008})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    };

    const animateParticles = () => {
      if (!particleCanvas || prefersReducedMotion.current) return;

      const pCtx = particleCanvas.getContext('2d');
      if (!pCtx) return;

      pCtx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);

      particles.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < 0) p.x = particleCanvas.width;
        if (p.x > particleCanvas.width) p.x = 0;
        if (p.y < 0) p.y = particleCanvas.height;
        if (p.y > particleCanvas.height) p.y = 0;

        pCtx.beginPath();
        pCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        pCtx.fillStyle = `rgba(255, 69, 0, ${p.alpha})`;
        pCtx.fill();
      });
    };

    // The product console carries the system diagram; the canvas only adds a quiet moving grid and particles.
    const animate = () => {
      if (!active) return;
      time += 0.008;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#0A0A0A';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      drawOperatingGrid();
      drawSignalRoutes();

      if (prefersReducedMotion.current) return; // one static frame, no loop

      animateParticles();
      animationId.current = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    const observer = new IntersectionObserver(
      ([entry]) => {
        active = entry.isIntersecting;
        if (active) {
          cancelAnimationFrame(animationId.current);
          animationId.current = requestAnimationFrame(animate);
        }
      },
      { rootMargin: '240px 0px' }
    );
    observer.observe(hero);

    return () => {
      window.removeEventListener('resize', resize);
      observer.disconnect();
      cancelAnimationFrame(animationId.current);
    };
  }, []);

  const proofChips = lang === 'uk'
    ? ['Продуктова стратегія', 'UX/UI', 'Розробка', 'AI та автоматизація', 'Запуск і ріст']
    : lang === 'cs'
    ? ['Produktová strategie', 'UX/UI', 'Vývoj', 'AI a automatizace', 'Spuštění a růst']
    : ['Product strategy', 'UX/UI', 'Software', 'AI & automation', 'Launch & growth'];

  const signalSteps = lang === 'uk'
    ? [
        ['01', 'Відкрити', 'Проблема, користувачі, можливість'],
        ['02', 'Створити', 'Стратегія, дизайн, технологія'],
        ['03', 'Запустити', 'Тестування, аналітика, розвиток'],
      ]
    : lang === 'cs'
    ? [
        ['01', 'Objevit', 'Problém, uživatelé, příležitost'],
        ['02', 'Vytvořit', 'Strategie, design, technologie'],
        ['03', 'Spustit', 'Testování, analytika, rozvoj'],
      ]
    : [
        ['01', 'Discover', 'Problem, users, opportunity'],
        ['02', 'Build', 'Strategy, design, technology'],
        ['03', 'Launch', 'Testing, analytics, iteration'],
      ];

  const consoleCopy = lang === 'uk'
    ? {
        eyebrow: 'SAV Product Studio',
        title: 'Від ідеї до робочого продукту',
        status: 'Гнучка команда фахівців',
        flow: ['Discover', 'Design', 'Build', 'Launch'],
        modules: [
          ['01', 'Напрям продукту', 'Проблема, користувачі, пріоритети'],
          ['02', 'Створення продукту', 'UX, розробка, AI та автоматизація'],
          ['03', 'Запуск і ріст', 'Тестування, аналітика, ітерації'],
        ],
        metrics: [
          ['Стратегія', 'напрям'],
          ['Продукт', 'робоча версія'],
          ['Розвиток', 'постійно'],
        ],
        liveLabel: 'AI-native',
      }
    : lang === 'cs'
    ? {
        eyebrow: 'SAV Product Studio',
        title: 'Od nápadu k funkčnímu produktu',
        status: 'Flexibilní tým specialistů',
        flow: ['Discover', 'Design', 'Build', 'Launch'],
        modules: [
          ['01', 'Směr produktu', 'Problém, uživatelé, priority'],
          ['02', 'Tvorba produktu', 'UX, vývoj, AI a automatizace'],
          ['03', 'Spuštění a růst', 'Testování, analytika, iterace'],
        ],
        metrics: [
          ['Strategie', 'směr'],
          ['Produkt', 'funkční verze'],
          ['Rozvoj', 'průběžně'],
        ],
        liveLabel: 'AI-native',
      }
    : {
        eyebrow: 'SAV Product Studio',
        title: 'From idea to working product',
        status: 'Flexible specialist team',
        flow: ['Discover', 'Design', 'Build', 'Launch'],
        modules: [
          ['01', 'Product direction', 'Problem, users, priorities'],
          ['02', 'Product build', 'UX, software, AI and automation'],
          ['03', 'Launch and growth', 'Testing, analytics, iteration'],
        ],
        metrics: [
          ['Strategy', 'direction'],
          ['Product', 'working build'],
          ['Growth', 'continuous'],
        ],
        liveLabel: 'AI-native',
      };

  return (
    <section className={styles.hero} ref={heroRef}>
      <canvas ref={particleRef} className={styles.particleCanvas} />
      <canvas ref={canvasRef} className={styles.canvas} />

      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.eyebrow} data-hero-reveal>DIGITAL PRODUCTS / TECHNOLOGY / GROWTH</span>
          <h1 className={styles.headline} data-hero-headline>{t('hero_headline')}</h1>
          <p className={styles.subtitle} data-hero-reveal>{t('hero_subtitle')}</p>

          <div className={styles.ctas} data-hero-reveal>
            <a
              ref={cta1Ref}
              href="#lead"
              className={styles.ctaPrimary}
            >
              {t('hero_cta_primary')}
            </a>
            <a
              ref={cta2Ref}
              href="#capabilities"
              className={styles.ctaSecondary}
            >
              {t('hero_cta_secondary')}
            </a>
          </div>

          <div className={styles.proofChips} data-hero-reveal>
            {proofChips.map((chip) => (
              <span key={chip} className={styles.chip}>{chip}</span>
            ))}
          </div>

          <div className={styles.signalStrip} data-hero-reveal>
            {signalSteps.map(([number, label, description]) => (
              <div key={label} className={styles.signalStep} data-signal-step>
                <span>{number}</span>
                <strong>{label}</strong>
                <small>{description}</small>
              </div>
            ))}
          </div>
        </div>

        <aside className={styles.showcase} data-hero-console aria-label={consoleCopy.eyebrow}>
          <div className={styles.consoleGlow} />
          <div className={styles.consoleFrame}>
            <div className={styles.consoleTopbar}>
              <div className={styles.windowDots} aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <span>{consoleCopy.eyebrow}</span>
              <em>{consoleCopy.status}</em>
            </div>

            <div className={styles.consoleBody}>
              <div className={styles.consoleHeader} data-console-row>
                <p>{consoleCopy.title}</p>
                <div className={styles.livePulse}>
                  <span />
                  {consoleCopy.liveLabel}
                </div>
              </div>

              <div className={styles.consoleOrbit} aria-hidden="true" data-console-row>
                <span className={styles.orbitCore}>SAV</span>
                <span className={styles.orbitRing} />
                <div className={styles.systemPath}>
                  {consoleCopy.flow.map((step) => (
                    <span key={step}>
                      {step}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.consoleModules}>
                {consoleCopy.modules.map(([number, label, description]) => (
                  <div className={styles.consoleModule} key={label} data-console-row>
                    <span>{number}</span>
                    <div>
                      <strong>{label}</strong>
                      <small>{description}</small>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.consoleMetrics} data-console-row>
                {consoleCopy.metrics.map(([value, label]) => (
                  <div key={label}>
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>

      <div className={styles.scrollIndicator}>
        <span />
      </div>
    </section>
  );
}
