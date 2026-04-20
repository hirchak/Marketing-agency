import { useEffect, useRef } from 'react';
import styles from './AmbientBackground.module.css';

interface AmbientBackgroundProps {
  variant: 'services' | 'method' | 'work' | 'pricing' | 'lead';
}

export default function AmbientBackground({ variant }: AmbientBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.innerWidth < 768) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const drawGrid = (opacity: number) => {
      ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.lineWidth = 0.5;
      const spacing = 48;

      for (let x = 0; x < canvas.width; x += spacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += spacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    const drawDataPoints = (count: number, opacity: number) => {
      for (let i = 0; i < count; i++) {
        const x = (Math.sin(i * 0.7 + animationRef.current * 0.0003) + 1) / 2 * canvas.width;
        const y = (Math.cos(i * 0.5 + animationRef.current * 0.0002) + 1) / 2 * canvas.height;
        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 69, 0, ${opacity})`;
        ctx.fill();
      }
    };

    const drawRadialGlow = (x: number, y: number, size: number, opacity: number) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, size);
      gradient.addColorStop(0, `rgba(255, 69, 0, ${opacity})`);
      gradient.addColorStop(1, 'rgba(255, 69, 0, 0)');
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
    };

    const drawTimelineBeam = (progress: number) => {
      const x = canvas.width * 0.15;
      const topY = 40;
      const bottomY = canvas.height - 40;

      // Vertical beam
      ctx.strokeStyle = 'rgba(255, 69, 0, 0.08)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x, topY);
      ctx.lineTo(x, bottomY);
      ctx.stroke();

      // Progress fill
      const fillHeight = (bottomY - topY) * progress;
      const gradient = ctx.createLinearGradient(x, topY, x, topY + fillHeight);
      gradient.addColorStop(0, 'rgba(255, 69, 0, 0.4)');
      gradient.addColorStop(1, 'rgba(255, 69, 0, 0.1)');
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x, topY);
      ctx.lineTo(x, topY + fillHeight);
      ctx.stroke();

      // Horizontal scan lines
      ctx.strokeStyle = 'rgba(255, 69, 0, 0.03)';
      ctx.lineWidth = 1;
      for (let y = topY; y < bottomY; y += 20) {
        ctx.beginPath();
        ctx.moveTo(x - 100, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    const drawBlueprintGrid = () => {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 0.5;

      // Diagonal lines
      const spacing = 60;
      for (let i = -canvas.height; i < canvas.width; i += spacing) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i + canvas.height, canvas.height);
        ctx.stroke();
      }
    };

    const drawParticles = (count: number, opacity: number) => {
      for (let i = 0; i < count; i++) {
        const seed = i * 137.5;
        const x = ((seed * 7) % canvas.width);
        const y = ((seed * 13) % canvas.height);
        const offset = Math.sin(animationRef.current * 0.001 + seed) * 10;

        ctx.beginPath();
        ctx.arc(x + offset, y + offset * 0.5, 1, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 69, 0, ${opacity * (0.5 + Math.sin(seed) * 0.5)})`;
        ctx.fill();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      switch (variant) {
        case 'services':
          drawGrid(0.04);
          drawRadialGlow(canvas.width * 0.8, canvas.height * 0.3, 300, 0.06);
          drawRadialGlow(canvas.width * 0.2, canvas.height * 0.7, 200, 0.04);
          drawDataPoints(12, 0.15);
          break;
        case 'method':
          drawTimelineBeam(0.3);
          drawDataPoints(8, 0.12);
          break;
        case 'work':
          drawBlueprintGrid();
          drawDataPoints(15, 0.1);
          break;
        case 'pricing':
          drawGrid(0.03);
          drawRadialGlow(canvas.width * 0.5, canvas.height * 0.5, 400, 0.05);
          break;
        case 'lead':
          drawGrid(0.04);
          drawParticles(20, 0.08);
          drawRadialGlow(canvas.width * 0.5, canvas.height * 0.5, 350, 0.06);
          break;
      }

      animationRef.current += 16;
      requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [variant]);

  return (
    <div className={`${styles.container} ${styles[variant]}`}>
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
}
