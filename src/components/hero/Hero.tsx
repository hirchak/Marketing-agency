import { useEffect, useRef, useState } from 'react';
import { useI18n } from '../../lib/i18n';
import styles from './Hero.module.css';

export default function Hero() {
  const { t } = useI18n();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [visible, setVisible] = useState(false);
  const [magnet1, setMagnet1] = useState({ x: 0, y: 0 });
  const [magnet2, setMagnet2] = useState({ x: 0, y: 0 });
  const cta1Ref = useRef<HTMLAnchorElement>(null);
  const cta2Ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    let animationId: number;
    const particles: Particle[] = [];
    const nodeCount = 6;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;

      constructor() {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.size = Math.random() * 1.5 + 0.5;
        this.alpha = Math.random() * 0.5 + 0.1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvasWidth) this.vx *= -1;
        if (this.y < 0 || this.y > canvasHeight) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 69, 0, ${this.alpha})`;
        ctx.fill();
      }
    }

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const drawConnections = () => {
      if (!ctx) return;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(canvas.width, canvas.height) * 0.3;

      ctx.strokeStyle = 'rgba(255, 69, 0, 0.1)';
      ctx.lineWidth = 1;

      for (let i = 0; i < nodeCount; i++) {
        const angle = (i / nodeCount) * Math.PI * 2;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.stroke();
      }

      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          const angle1 = (i / nodeCount) * Math.PI * 2;
          const angle2 = (j / nodeCount) * Math.PI * 2;
          const x1 = centerX + Math.cos(angle1) * radius;
          const y1 = centerY + Math.sin(angle1) * radius;
          const x2 = centerX + Math.cos(angle2) * radius;
          const y2 = centerY + Math.sin(angle2) * radius;

          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }
      }

      ctx.beginPath();
      ctx.arc(centerX, centerY, 20, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 69, 0, 0.2)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(255, 69, 0, 0.5)';
      ctx.lineWidth = 1;
      ctx.stroke();

      for (let i = 0; i < nodeCount; i++) {
        const angle = (i / nodeCount) * Math.PI * 2;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;

        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.stroke();
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'rgba(10, 10, 10, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawConnections();

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animationId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 30; i++) {
      particles.push(new Particle());
    }

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const handleCta1MouseMove = (e: React.MouseEvent) => {
    const rect = cta1Ref.current?.getBoundingClientRect();
    if (!rect) return;
    setMagnet1({
      x: (e.clientX - rect.left - rect.width / 2) * 0.2,
      y: (e.clientY - rect.top - rect.height / 2) * 0.2,
    });
  };

  const handleCta1MouseLeave = () => setMagnet1({ x: 0, y: 0 });

  const handleCta2MouseMove = (e: React.MouseEvent) => {
    const rect = cta2Ref.current?.getBoundingClientRect();
    if (!rect) return;
    setMagnet2({
      x: (e.clientX - rect.left - rect.width / 2) * 0.2,
      y: (e.clientY - rect.top - rect.height / 2) * 0.2,
    });
  };

  const handleCta2MouseLeave = () => setMagnet2({ x: 0, y: 0 });

  return (
    <section className={styles.hero}>
      <canvas ref={canvasRef} className={styles.canvas} />

      <div className={styles.container}>
        <div className={styles.content}>
          <h1
            className={styles.headline}
            style={{
              opacity: visible ? 1 : 0,
              filter: visible ? 'blur(0)' : 'blur(12px)',
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {t('hero_headline')}
          </h1>
          <p
            className={styles.subtitle}
            style={{
              opacity: visible ? 1 : 0,
              filter: visible ? 'blur(0)' : 'blur(8px)',
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s',
            }}
          >
            {t('hero_subtitle')}
          </p>

          <div className={styles.ctas}>
            <a
              ref={cta1Ref}
              href="#lead"
              className={styles.ctaPrimary}
              style={{
                transform: `translate(${magnet1.x}px, ${magnet1.y}px)`,
                transition: magnet1.x === 0 && magnet1.y === 0 ? 'all 0.3s' : 'transform 0.1s ease-out',
                opacity: visible ? 1 : 0,
              }}
              onMouseMove={handleCta1MouseMove}
              onMouseLeave={handleCta1MouseLeave}
            >
              {t('hero_cta_primary')}
            </a>
            <a
              ref={cta2Ref}
              href="#work"
              className={styles.ctaSecondary}
              style={{
                transform: `translate(${magnet2.x}px, ${magnet2.y}px)`,
                transition: magnet2.x === 0 && magnet2.y === 0 ? 'all 0.3s' : 'transform 0.1s ease-out',
                opacity: visible ? 1 : 0,
              }}
              onMouseMove={handleCta2MouseMove}
              onMouseLeave={handleCta2MouseLeave}
            >
              {t('hero_cta_secondary')}
            </a>
          </div>
        </div>
      </div>

      <div
        className={styles.scrollIndicator}
        style={{
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.8s ease 0.6s',
        }}
      >
        <span />
      </div>
    </section>
  );
}
