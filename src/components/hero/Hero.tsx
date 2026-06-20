import { useEffect, useRef } from 'react';
import { useI18n } from '../../lib/i18n';
import { gsap, useGSAP } from '../../lib/gsap';
import styles from './Hero.module.css';

const nodes = [
  { label: 'Research', angle: 0, size: 20 },
  { label: 'Website', angle: 60, size: 14 },
  { label: 'Offer', angle: 120, size: 16 },
  { label: 'Funnel', angle: 180, size: 12 },
  { label: 'Creative', angle: 240, size: 14 },
  { label: 'Growth', angle: 300, size: 12 },
];

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

  // Mouse tracking refs - not React state, no re-renders
  const targetMouse = useRef({ x: 0, y: 0 });
  const currentMouse = useRef({ x: 0, y: 0 });
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
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

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

    const handlePointerMove = (e: PointerEvent) => {
      if (isMobile.current) return;
      const rect = hero.getBoundingClientRect();
      targetMouse.current = {
        x: e.clientX - rect.left - rect.width / 2,
        y: e.clientY - rect.top - rect.height / 2,
      };
    };

    const getNodePositions = (offsetX = 0, offsetY = 0) => {
      const baseCenterX = canvas.width * (isMobile.current ? 0.5 : 0.72);
      const baseCenterY = canvas.height * 0.5;
      const centerX = baseCenterX + offsetX;
      const centerY = baseCenterY + offsetY;
      const radius = Math.min(canvas.width, canvas.height) * (isMobile.current ? 0.28 : 0.22);

      return nodes.map((node) => ({
        ...node,
        x: centerX + Math.cos((node.angle * Math.PI) / 180) * radius,
        y: centerY + Math.sin((node.angle * Math.PI) / 180) * radius,
      }));
    };

    const drawNode = (x: number, y: number, size: number, label: string, isCentral: boolean, alpha: number = 1) => {
      if (isCentral) {
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 2);
        gradient.addColorStop(0, `rgba(255, 69, 0, ${0.5 * alpha})`);
        gradient.addColorStop(0.5, `rgba(255, 69, 0, ${0.2 * alpha})`);
        gradient.addColorStop(1, 'rgba(255, 69, 0, 0)');
        ctx.beginPath();
        ctx.arc(x, y, size * 2, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 69, 0, ${0.9 * alpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(x, y, size * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 69, 0, ${0.7 * alpha})`;
        ctx.fill();
      } else {
        ctx.beginPath();
        ctx.arc(x, y, size * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${0.08 * alpha})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.25 * alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      ctx.font = `${isCentral ? '600' : '500'} ${isCentral ? 10 : 8}px JetBrains Mono, monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = isCentral ? `rgba(255, 69, 0, ${alpha})` : `rgba(255, 255, 255, ${0.6 * alpha})`;
      ctx.fillText(label.toUpperCase(), x, y);
    };

    const drawLine = (x1: number, y1: number, x2: number, y2: number, alpha: number = 1) => {
      const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
      gradient.addColorStop(0, `rgba(255, 69, 0, ${0.5 * alpha})`);
      gradient.addColorStop(1, `rgba(255, 69, 0, ${0.15 * alpha})`);
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    const drawConnections = (nodePositions: ReturnType<typeof getNodePositions>, alpha: number = 1) => {
      const central = nodePositions[0];
      for (let i = 1; i < nodePositions.length; i++) {
        drawLine(central.x, central.y, nodePositions[i].x, nodePositions[i].y, alpha);
      }
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

    const animate = () => {
      if (!active) return;
      time += 0.008;

      // Lerp mouse for smooth following
      if (!isMobile.current && !prefersReducedMotion.current) {
        currentMouse.current.x = lerp(currentMouse.current.x, targetMouse.current.x, 0.05);
        currentMouse.current.y = lerp(currentMouse.current.y, targetMouse.current.y, 0.05);
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#0A0A0A';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      drawOperatingGrid();
      drawSignalRoutes();

      // Parallax offset from mouse
      const parallaxX = isMobile.current ? 0 : currentMouse.current.x * 0.03;
      const parallaxY = isMobile.current ? 0 : currentMouse.current.y * 0.03;

      const nodePositions = getNodePositions(parallaxX, parallaxY);

      drawConnections(nodePositions, 0.5);

      const pulseSize = Math.sin(time * 2) * 2;
      drawNode(nodePositions[0].x, nodePositions[0].y, nodePositions[0].size + pulseSize, nodes[0].label, true, 0.8);

      nodePositions.slice(1).forEach((node, i) => {
        const pulse = Math.sin(time * 2 + i * 0.5) * 1.5;
        drawNode(node.x, node.y, node.size + pulse, nodes[i + 1].label, false, 0.6);
      });

      if (!prefersReducedMotion.current) {
        animateParticles();
      }

      animationId.current = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    hero.addEventListener('pointermove', handlePointerMove);
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
      hero.removeEventListener('pointermove', handlePointerMove);
      observer.disconnect();
      cancelAnimationFrame(animationId.current);
    };
  }, []);

  const proofChips = lang === 'uk'
    ? ['Маркетингова стратегія', 'Сайти', 'Воронки', 'Креативи', 'Аналітика']
    : lang === 'cs'
    ? ['Marketingová strategie', 'Weby', 'Prodejní cesty', 'Kreativa', 'Analytika']
    : ['Marketing strategy', 'Websites', 'Funnels', 'Creative', 'Analytics'];

  const signalSteps = lang === 'uk'
    ? [
        ['01', 'Дослідження', 'Ринок, конкуренти, портрет клієнта'],
        ['02', 'Сайт', 'Офер, структура, frontend'],
        ['03', 'Ріст', 'Воронка, креативи, аналітика'],
      ]
    : lang === 'cs'
    ? [
        ['01', 'Výzkum', 'Trh, konkurence, profil zákazníka'],
        ['02', 'Web', 'Nabídka, struktura, frontend'],
        ['03', 'Růst', 'Prodejní cesta, kreativa, analytika'],
      ]
    : [
        ['01', 'Research', 'Market, competitors, Client DNA'],
        ['02', 'Website', 'Offer, structure, frontend'],
        ['03', 'Growth', 'Funnel, creative, analytics'],
      ];

  const consoleCopy = lang === 'uk'
    ? {
        eyebrow: 'SAV Система росту',
        title: 'Система запуску онлайн',
        status: 'Жива стратегічна петля',
        flow: ['Research', 'Offer', 'Site', 'Growth'],
        modules: [
          ['01', 'Портрет клієнта', 'Сегменти, болі, кути оферу'],
          ['02', 'Сайт для заявок', 'Структура, тексти, frontend'],
          ['03', 'Петля росту', 'Креативи, воронка, аналітика'],
        ],
        metrics: [
          ['5-7 днів', 'дослідження'],
          ['10-14 днів', 'сайт'],
          ['4-6 тижнів', 'запуск'],
        ],
        liveLabel: 'Активно',
      }
    : lang === 'cs'
    ? {
        eyebrow: 'SAV Systém růstu',
        title: 'Systém spuštění online',
        status: 'Živá strategická smyčka',
        flow: ['Research', 'Offer', 'Web', 'Growth'],
        modules: [
          ['01', 'Profil zákazníka', 'Segmenty, potřeby, úhly nabídky'],
          ['02', 'Konverzní web', 'Struktura, texty, frontend'],
          ['03', 'Růstová smyčka', 'Kreativa, cesta, analytika'],
        ],
        metrics: [
          ['5-7 dní', 'výzkum'],
          ['10-14 dní', 'web'],
          ['4-6 týdnů', 'spuštění'],
        ],
        liveLabel: 'Živě',
      }
    : {
        eyebrow: 'SAV Growth OS',
        title: 'Launch system online',
        status: 'Live strategy loop',
        flow: ['Research', 'Offer', 'Site', 'Growth'],
        modules: [
          ['01', 'Client DNA', 'Segments, pains, offer angles'],
          ['02', 'Conversion Site', 'Structure, copy, frontend'],
          ['03', 'Growth Loop', 'Creative, funnel, analytics'],
        ],
        metrics: [
          ['5-7 days', 'research'],
          ['10-14 days', 'website'],
          ['4-6 weeks', 'launch'],
        ],
        liveLabel: 'Live',
      };

  return (
    <section className={styles.hero} ref={heroRef}>
      <canvas ref={particleRef} className={styles.particleCanvas} />
      <canvas ref={canvasRef} className={styles.canvas} />

      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.eyebrow} data-hero-reveal>SAV.AGENCY / GROWTH SYSTEMS</span>
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
              href="#work"
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
