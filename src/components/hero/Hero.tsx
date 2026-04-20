import { useEffect, useRef, useState } from 'react';
import { useI18n } from '../../lib/i18n';
import styles from './Hero.module.css';

interface Node {
  label: string;
  angle: number;
  size: number;
}

interface NodeWithPos extends Node {
  x: number;
  y: number;
}

const nodes: Node[] = [
  { label: 'Market DNA', angle: 0, size: 24 },
  { label: 'Intelligence', angle: 60, size: 16 },
  { label: 'Conversion', angle: 120, size: 18 },
  { label: 'MVP', angle: 180, size: 14 },
  { label: 'Telegram', angle: 240, size: 16 },
  { label: 'Analytics', angle: 300, size: 14 },
];

export default function Hero() {
  const { t } = useI18n();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [visible, setVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
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

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const getNodePositions = (offsetX = 0, offsetY = 0): NodeWithPos[] => {
      const centerX = canvas.width / 2 + offsetX;
      const centerY = canvas.height / 2 + offsetY;
      const radius = Math.min(canvas.width, canvas.height) * 0.28;

      return nodes.map((node) => ({
        ...node,
        x: centerX + Math.cos((node.angle * Math.PI) / 180) * radius,
        y: centerY + Math.sin((node.angle * Math.PI) / 180) * radius,
      }));
    };

    const drawNode = (x: number, y: number, size: number, label: string, isCentral: boolean, alpha: number = 1) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 2);
      if (isCentral) {
        gradient.addColorStop(0, `rgba(255, 69, 0, ${0.4 * alpha})`);
        gradient.addColorStop(0.5, `rgba(255, 69, 0, ${0.2 * alpha})`);
        gradient.addColorStop(1, 'rgba(255, 69, 0, 0)');
      } else {
        gradient.addColorStop(0, `rgba(255, 255, 255, ${0.15 * alpha})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      }

      ctx.beginPath();
      ctx.arc(x, y, size * 2, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.strokeStyle = isCentral ? `rgba(255, 69, 0, ${0.8 * alpha})` : `rgba(255, 255, 255, ${0.3 * alpha})`;
      ctx.lineWidth = isCentral ? 2 : 1;
      ctx.stroke();

      if (isCentral) {
        ctx.beginPath();
        ctx.arc(x, y, size * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 69, 0, ${0.6 * alpha})`;
        ctx.fill();
      }

      ctx.font = `${isCentral ? '600' : '500'} ${isCentral ? 11 : 9}px JetBrains Mono, monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = isCentral ? `rgba(255, 69, 0, ${alpha})` : `rgba(255, 255, 255, ${0.7 * alpha})`;
      ctx.fillText(label.toUpperCase(), x, y);
    };

    const drawLine = (x1: number, y1: number, x2: number, y2: number, alpha: number = 1) => {
      const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
      gradient.addColorStop(0, `rgba(255, 69, 0, ${0.4 * alpha})`);
      gradient.addColorStop(1, `rgba(255, 69, 0, ${0.1 * alpha})`);

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    const drawConnections = (nodePositions: NodeWithPos[], alpha: number = 1) => {
      const central = nodePositions[0];

      for (let i = 1; i < nodePositions.length; i++) {
        const node = nodePositions[i];
        drawLine(central.x, central.y, node.x, node.y, alpha);
      }

      for (let i = 1; i < nodePositions.length; i++) {
        for (let j = i + 1; j < nodePositions.length; j++) {
          const nodeA = nodePositions[i];
          const nodeB = nodePositions[j];
          const dist = Math.sqrt((nodeA.x - nodeB.x) ** 2 + (nodeA.y - nodeB.y) ** 2);
          if (dist < canvas.width * 0.4) {
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.05 * alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    };

    const drawMetric = (x: number, y: number, value: string, alpha: number = 1) => {
      ctx.font = `600 10px JetBrains Mono, monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = `rgba(255, 69, 0, ${0.6 * alpha})`;
      ctx.fillText(value, x, y);
    };

    const animate = () => {
      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const bgGradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width * 0.6
      );
      bgGradient.addColorStop(0, 'rgba(20, 20, 20, 1)');
      bgGradient.addColorStop(1, 'rgba(10, 10, 10, 1)');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const mouseOffsetX = (mousePos.x - canvas.width / 2) * 0.01;
      const mouseOffsetY = (mousePos.y - canvas.height / 2) * 0.01;
      const nodePositions = getNodePositions(mouseOffsetX, mouseOffsetY);

      const pulseSize = Math.sin(time * 2) * 3;
      drawNode(nodePositions[0].x, nodePositions[0].y, nodePositions[0].size + pulseSize, nodes[0].label, true, 0.7);

      const influencedPositions: NodeWithPos[] = nodePositions.slice(1).map((node) => ({
        ...node,
        x: node.x + (mousePos.x - canvas.width / 2) * 0.02,
        y: node.y + (mousePos.y - canvas.height / 2) * 0.02,
      }));

      drawConnections([nodePositions[0], ...influencedPositions], 0.6);

      influencedPositions.forEach((node, i) => {
        const pulse = Math.sin(time * 2 + i * 0.5) * 2;
        drawNode(node.x, node.y, node.size + pulse, nodes[i + 1].label, false, 0.6);
      });

      const metricY = nodePositions[0].y + 60;
      drawMetric(nodePositions[0].x - 40, metricY, '↑ 24%');
      drawMetric(nodePositions[0].x + 40, metricY, '↓ 3.2x');

      animationId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    });

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, [mousePos]);

  const handleCta1MouseMove = (e: React.MouseEvent) => {
    const rect = cta1Ref.current?.getBoundingClientRect();
    if (!rect) return;
    setMagnet1({
      x: (e.clientX - rect.left - rect.width / 2) * 0.25,
      y: (e.clientY - rect.top - rect.height / 2) * 0.25,
    });
  };

  const handleCta1MouseLeave = () => setMagnet1({ x: 0, y: 0 });

  const handleCta2MouseMove = (e: React.MouseEvent) => {
    const rect = cta2Ref.current?.getBoundingClientRect();
    if (!rect) return;
    setMagnet2({
      x: (e.clientX - rect.left - rect.width / 2) * 0.25,
      y: (e.clientY - rect.top - rect.height / 2) * 0.25,
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
