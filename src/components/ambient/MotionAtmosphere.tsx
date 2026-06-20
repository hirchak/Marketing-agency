import { useRef } from 'react';
import { gsap, useGSAP } from '../../lib/gsap';
import styles from './MotionAtmosphere.module.css';

const moods = {
  hero: {
    '--atmo-a-x': '68%',
    '--atmo-a-y': '28%',
    '--atmo-b-x': '18%',
    '--atmo-b-y': '76%',
    '--atmo-c-x': '90%',
    '--atmo-c-y': '82%',
    '--atmo-intensity': 0.62,
    '--atmo-orange-a': 0.17,
    '--atmo-orange-b': 0.11,
    '--atmo-cyan': 0.12,
    '--atmo-ribbon-angle': '-12deg',
    '--atmo-ribbon-y': '-8%',
    '--atmo-ribbon-opacity': 0.45,
    '--atmo-grid-opacity': 0.18,
  },
  proof: {
    '--atmo-a-x': '46%',
    '--atmo-a-y': '48%',
    '--atmo-b-x': '78%',
    '--atmo-b-y': '26%',
    '--atmo-c-x': '18%',
    '--atmo-c-y': '88%',
    '--atmo-intensity': 0.34,
    '--atmo-orange-a': 0.1,
    '--atmo-orange-b': 0.06,
    '--atmo-cyan': 0.06,
    '--atmo-ribbon-angle': '4deg',
    '--atmo-ribbon-y': '-2%',
    '--atmo-ribbon-opacity': 0.24,
    '--atmo-grid-opacity': 0.12,
  },
  capabilities: {
    '--atmo-a-x': '24%',
    '--atmo-a-y': '34%',
    '--atmo-b-x': '74%',
    '--atmo-b-y': '66%',
    '--atmo-c-x': '52%',
    '--atmo-c-y': '18%',
    '--atmo-intensity': 0.48,
    '--atmo-orange-a': 0.14,
    '--atmo-orange-b': 0.09,
    '--atmo-cyan': 0.08,
    '--atmo-ribbon-angle': '10deg',
    '--atmo-ribbon-y': '6%',
    '--atmo-ribbon-opacity': 0.34,
    '--atmo-grid-opacity': 0.2,
  },
  method: {
    '--atmo-a-x': '18%',
    '--atmo-a-y': '58%',
    '--atmo-b-x': '56%',
    '--atmo-b-y': '28%',
    '--atmo-c-x': '84%',
    '--atmo-c-y': '70%',
    '--atmo-intensity': 0.38,
    '--atmo-orange-a': 0.11,
    '--atmo-orange-b': 0.07,
    '--atmo-cyan': 0.05,
    '--atmo-ribbon-angle': '-6deg',
    '--atmo-ribbon-y': '10%',
    '--atmo-ribbon-opacity': 0.28,
    '--atmo-grid-opacity': 0.16,
  },
  work: {
    '--atmo-a-x': '76%',
    '--atmo-a-y': '36%',
    '--atmo-b-x': '22%',
    '--atmo-b-y': '62%',
    '--atmo-c-x': '48%',
    '--atmo-c-y': '88%',
    '--atmo-intensity': 0.55,
    '--atmo-orange-a': 0.15,
    '--atmo-orange-b': 0.1,
    '--atmo-cyan': 0.1,
    '--atmo-ribbon-angle': '-16deg',
    '--atmo-ribbon-y': '4%',
    '--atmo-ribbon-opacity': 0.4,
    '--atmo-grid-opacity': 0.22,
  },
  pricing: {
    '--atmo-a-x': '50%',
    '--atmo-a-y': '26%',
    '--atmo-b-x': '86%',
    '--atmo-b-y': '68%',
    '--atmo-c-x': '14%',
    '--atmo-c-y': '76%',
    '--atmo-intensity': 0.42,
    '--atmo-orange-a': 0.12,
    '--atmo-orange-b': 0.08,
    '--atmo-cyan': 0.04,
    '--atmo-ribbon-angle': '8deg',
    '--atmo-ribbon-y': '-4%',
    '--atmo-ribbon-opacity': 0.3,
    '--atmo-grid-opacity': 0.14,
  },
  lead: {
    '--atmo-a-x': '50%',
    '--atmo-a-y': '46%',
    '--atmo-b-x': '18%',
    '--atmo-b-y': '28%',
    '--atmo-c-x': '82%',
    '--atmo-c-y': '78%',
    '--atmo-intensity': 0.7,
    '--atmo-orange-a': 0.2,
    '--atmo-orange-b': 0.12,
    '--atmo-cyan': 0.08,
    '--atmo-ribbon-angle': '-3deg',
    '--atmo-ribbon-y': '0%',
    '--atmo-ribbon-opacity': 0.5,
    '--atmo-grid-opacity': 0.1,
  },
} satisfies Record<string, Record<string, string | number>>;

function moodForSection(section: HTMLElement) {
  if (section.id === 'capabilities') return moods.capabilities;
  if (section.id === 'method') return moods.method;
  if (section.id === 'work') return moods.work;
  if (section.id === 'pricing') return moods.pricing;
  if (section.id === 'lead') return moods.lead;
  if (section.className.toString().includes('strip')) return moods.proof;
  return moods.hero;
}

export default function MotionAtmosphere() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const layer = ref.current;
    if (!layer) return;

    const mm = gsap.matchMedia();
    mm.add(
      {
        canAnimate: '(prefers-reduced-motion: no-preference)',
        isDesktop: '(min-width: 768px)',
      },
      (context) => {
        const { canAnimate, isDesktop } = context.conditions || {};
        const sections = gsap.utils.toArray<HTMLElement>('main > section');

        gsap.set(layer, moods.hero);

        if (!canAnimate) return;

        gsap.to(layer, {
          '--atmo-drift-x': isDesktop ? '3%' : '1%',
          '--atmo-drift-y': isDesktop ? '-2%' : '-1%',
          '--atmo-spin': '28deg',
          duration: 24,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });

        sections.forEach((section) => {
          const mood = moodForSection(section);
          gsap.to(layer, {
            ...mood,
            duration: 1.15,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: section,
              start: 'top 58%',
              end: 'bottom 42%',
              toggleActions: 'play none play none',
              onEnter: () => gsap.to(layer, { ...mood, duration: 1.15, ease: 'power2.inOut' }),
              onEnterBack: () => gsap.to(layer, { ...mood, duration: 1.15, ease: 'power2.inOut' }),
            },
          });
        });

        gsap.to(layer, {
          '--atmo-scroll': 1,
          '--atmo-grid-x': '-28px',
          '--atmo-grid-y': '18px',
          ease: 'none',
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.4,
          },
        });
      }
    );

    return () => mm.revert();
  }, { scope: ref });

  return (
    <div className={styles.atmosphere} ref={ref} aria-hidden="true">
      <span className={styles.field} />
      <span className={styles.ribbon} />
      <span className={styles.topology} />
      <span className={styles.grain} />
    </div>
  );
}
