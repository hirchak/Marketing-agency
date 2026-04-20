import { useEffect, useRef, useState } from 'react';
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

export default function Hero() {
  const { t } = useI18n();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [magnet1, setMagnet1] = useState({ x: 0, y: 0 });
  const [magnet2, setMagnet2] = useState({ x: 0, y: 0 });
  const cta1Ref = useRef<HTMLAnchorElement>(null);
  const cta2Ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const getNodePositions = (offsetX = 0, offsetY = 0) => {
      const centerX = canvas.width * 0.75 + offsetX;
      const centerY = canvas.height * 0.5 + offsetY;
      const radius = Math.min(canvas.width, canvas.height) * 0.22;

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

    const drawConnections = (nodePositions: typeof getNodePositions extends (x: number, y: number) => infer R ? R : never, alpha: number = 1) => {
      const central = nodePositions[0];
      for (let i = 1; i < nodePositions.length; i++) {
        drawLine(central.x, central.y, nodePositions[i].x, nodePositions[i].y, alpha);
      }
    };

    const animate = () => {
      time += 0.008;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0A0A0A';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const nodePositions = getNodePositions();

      drawConnections(nodePositions, 0.5);

      const pulseSize = Math.sin(time * 2) * 2;
      drawNode(nodePositions[0].x, nodePositions[0].y, nodePositions[0].size + pulseSize, nodes[0].label, true, 0.8);

      nodePositions.slice(1).forEach((node, i) => {
        const pulse = Math.sin(time * 2 + i * 0.5) * 1.5;
        drawNode(node.x, node.y, node.size + pulse, nodes[i + 1].label, false, 0.6);
      });

      animationId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
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
          <h1 className={styles.headline}>{t('hero_headline')}</h1>
          <p className={styles.subtitle}>{t('hero_subtitle')}</p>

          <div className={styles.ctas}>
            <a
              ref={cta1Ref}
              href="#lead"
              className={styles.ctaPrimary}
              style={{
                transform: `translate(${magnet1.x}px, ${magnet1.y}px)`,
                transition: magnet1.x === 0 && magnet1.y === 0 ? 'all 0.3s' : 'transform 0.1s ease-out',
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
              }}
              onMouseMove={handleCta2MouseMove}
              onMouseLeave={handleCta2MouseLeave}
            >
              {t('hero_cta_secondary')}
            </a>
          </div>

          <div className={styles.proofChips}>
            <span className={styles.chip}>React</span>
            <span className={styles.chip}>Vite</span>
            <span className={styles.chip}>Supabase</span>
            <span className={styles.chip}>Telegram</span>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span />
      </div>
    </section>
  );
}
