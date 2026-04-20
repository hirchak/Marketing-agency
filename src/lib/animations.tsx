import { useEffect, useRef, useState } from 'react';

export function useScrollReveal(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

export function useMagnet(strength = 0.3) {
  const ref = useRef<HTMLElement>(null);
  const [transform, setTransform] = useState('');

  const handleMouseMove = (e: MouseEvent) => {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setTransform(`translate(${x * strength}px, ${y * strength}px)`);
  };

  const handleMouseLeave = () => {
    setTransform('');
  };

  return { ref, transform, handleMouseMove, handleMouseLeave };
}

export function BlurText({ children, delay = 0, visible }: { children: string; delay?: number; visible: boolean }) {
  return (
    <span
      style={{
        opacity: visible ? 1 : 0,
        filter: visible ? 'blur(0)' : 'blur(8px)',
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      {children}
    </span>
  );
}

export function SpotlightCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setSpotlight({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setSpotlight({ x: 50, y: 50 })}
      style={{
        background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(255, 69, 0, 0.15) 0%, transparent 60%)`,
        transition: 'background 0.3s ease',
      }}
    >
      {children}
    </div>
  );
}
