import { useEffect, useRef } from 'react';
import { useI18n } from '../../lib/i18n';
import styles from './Hero.module.css';

const nodes = [
  { label: 'Market DNA', angle: 0, size: 20 },
  { label: 'Intelligence', angle: 60, size: 14 },
  { label: 'Conversion', angle: 120, size: 16 },
  { label: 'MVP', angle: 180, size: 12 },
  { label: 'Telegram', angle: 240, size: 14 },
  { label: 'Analytics', angle: 300, size: 12 },
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
      time += 0.008;

      // Lerp mouse for smooth following
      if (!isMobile.current && !prefersReducedMotion.current) {
        currentMouse.current.x = lerp(currentMouse.current.x, targetMouse.current.x, 0.05);
        currentMouse.current.y = lerp(currentMouse.current.y, targetMouse.current.y, 0.05);
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#0A0A0A';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

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
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      hero.removeEventListener('pointermove', handlePointerMove);
      cancelAnimationFrame(animationId.current);
    };
  }, []);

  const proofChips = lang === 'uk'
    ? ['Сайти', 'MVP', 'Telegram-онбординг', 'Supabase', 'Growth-стратегія']
    : lang === 'cs'
    ? ['weby', 'MVP', 'Telegram-онбординг', 'Supabase', 'Growth strategie']
    : ['Sites', 'MVP', 'Telegram flows', 'Supabase', 'Growth strategy'];

  return (
    <section className={styles.hero} ref={heroRef}>
      <canvas ref={particleRef} className={styles.particleCanvas} />
      <canvas ref={canvasRef} className={styles.canvas} />

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.headline}>{t('hero_headline')}</h1>
          <p className={styles.subtitle}>{t('hero_subtitle')}</p>

          <div className={styles.ctas}>
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

          <div className={styles.proofChips}>
            {proofChips.map((chip) => (
              <span key={chip} className={styles.chip}>{chip}</span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span />
      </div>
    </section>
  );
}
