import { useState, useEffect, useRef } from 'react';
import { I18nProvider } from './lib/i18n';
import { gsap, useGSAP } from './lib/gsap';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/hero/Hero';
import ProofStrip from './components/sections/ProofStrip';
import Capabilities from './components/sections/Capabilities';
import Method from './components/sections/Method';
import Cases from './components/sections/Cases';
import Pricing from './components/sections/Pricing';
import LeadForm from './components/sections/LeadForm';
import AuroraVeil from './components/ambient/AuroraVeil';
import SectionTransition from './components/ambient/SectionTransition';

function AppContent() {
  const [isLoaded, setIsLoaded] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        canAnimate: '(prefers-reduced-motion: no-preference)',
        isMobile: '(max-width: 767px)',
      },
      (context) => {
        const { canAnimate, isMobile } = context.conditions || {};
        const sections = gsap.utils.toArray<HTMLElement>('section:not(#lead)');
        const transitions = gsap.utils.toArray<HTMLElement>('[data-section-transition]');

        if (!canAnimate) {
          gsap.set(sections, { clearProps: 'all' });
          gsap.set(transitions, { clearProps: 'all' });
          return;
        }

        sections.slice(1).forEach((section) => {
          gsap.fromTo(
            section,
            {
              y: isMobile ? 24 : 42,
              autoAlpha: 0.78,
            },
            {
              y: 0,
              autoAlpha: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: section,
                start: 'top 88%',
                end: 'top 48%',
                scrub: 0.75,
              },
            }
          );
        });

        transitions.forEach((transition) => {
          const mesh = transition.querySelector('[data-flow-mesh]');
          const river = transition.querySelector('[data-flow-river]');
          const horizon = transition.querySelector('[data-flow-horizon]');
          const sweep = transition.querySelector('[data-flow-sweep]');
          const thread = transition.querySelector('[data-flow-thread]');
          const tensionLines = [horizon, thread].filter(Boolean);

          gsap.fromTo(
            transition,
            {
              '--flow-progress': 0,
              '--flow-wash-alpha': 0.055,
              '--flow-grid-x': '0px',
              '--flow-grid-y': '0px',
              '--flow-shift': '-18%',
              '--flow-band-scale': 0.8,
              '--flow-mesh-a': '18%',
              '--flow-mesh-b': '62%',
              '--flow-spin': '210deg',
              '--flow-mesh-opacity': 0.42,
              '--flow-sweep': '-42%',
              '--flow-horizon-opacity': 0.26,
              '--flow-river-scale': 0.74,
              '--flow-river-opacity': 0.26,
              '--flow-thread': 0.24,
              '--flow-thread-opacity': 0.16,
              '--flow-node-a': '22%',
              '--flow-node-b': '24%',
              '--flow-node-c': '50%',
              '--flow-node-opacity': 0.08,
            },
            {
              '--flow-progress': 1,
              '--flow-wash-alpha': 0.18,
              '--flow-grid-x': '-28px',
              '--flow-grid-y': '18px',
              '--flow-shift': '18%',
              '--flow-band-scale': 1.14,
              '--flow-mesh-a': '36%',
              '--flow-mesh-b': '50%',
              '--flow-spin': '242deg',
              '--flow-mesh-opacity': 0.66,
              '--flow-sweep': '42%',
              '--flow-horizon-opacity': 0.58,
              '--flow-river-scale': 1.16,
              '--flow-river-opacity': 0.64,
              '--flow-thread': 1,
              '--flow-thread-opacity': 0.42,
              '--flow-node-a': '30%',
              '--flow-node-b': '17%',
              '--flow-node-c': '38%',
              '--flow-node-opacity': 0.5,
              ease: 'none',
              scrollTrigger: {
                trigger: transition,
                start: 'top 96%',
                end: 'bottom 36%',
                scrub: 0.9,
              },
            }
          );

          gsap.fromTo(
            mesh,
            { xPercent: -3, yPercent: 3, scale: 0.96, rotation: isMobile ? 0 : -1 },
            {
              xPercent: 3,
              yPercent: -3,
              scale: 1.04,
              rotation: isMobile ? 0 : 1,
              ease: 'none',
              scrollTrigger: {
                trigger: transition,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.2,
              },
            }
          );

          gsap.fromTo(
            river,
            { xPercent: -7, scaleX: 0.72, autoAlpha: 0.18 },
            {
              xPercent: 7,
              scaleX: 1.12,
              autoAlpha: 0.72,
              ease: 'none',
              scrollTrigger: {
                trigger: transition,
                start: 'top 94%',
                end: 'bottom 42%',
                scrub: 0.72,
              },
            }
          );

          gsap.fromTo(
            tensionLines,
            { scaleX: 0.46, autoAlpha: 0.18 },
            {
              scaleX: 1,
              autoAlpha: 0.72,
              ease: 'none',
              scrollTrigger: {
                trigger: transition,
                start: 'top 90%',
                end: 'bottom 50%',
                scrub: 0.65,
              },
            }
          );

          gsap.fromTo(
            sweep,
            { xPercent: -64, autoAlpha: 0 },
            {
              xPercent: 64,
              autoAlpha: 0.78,
              ease: 'none',
              scrollTrigger: {
                trigger: transition,
                start: 'top 96%',
                end: 'bottom 34%',
                scrub: 0.8,
              },
            }
          );
        });
      }
    );

    return () => mm.revert();
  }, { scope: mainRef });

  return (
    <div className={`app ${isLoaded ? 'loaded' : ''}`}>
      <AuroraVeil />
      <Header />
      <main ref={mainRef}>
        <Hero />
        <SectionTransition label="Market signal" />
        <ProofStrip />
        <SectionTransition label="Growth stack" />
        <Capabilities />
        <SectionTransition label="Operating rhythm" />
        <Method />
        <SectionTransition label="Proof layer" />
        <Cases />
        <SectionTransition label="Investment path" />
        <Pricing />
        <SectionTransition label="Audit intake" />
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <I18nProvider>
      <AppContent />
    </I18nProvider>
  );
}
