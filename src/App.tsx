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
          const line = transition.querySelector('[data-transition-line]');
          const pulse = transition.querySelector('[data-transition-pulse]');
          const label = transition.querySelector('[data-transition-label]');

          gsap.fromTo(
            line,
            { scaleX: 0.18, autoAlpha: 0.32 },
            {
              scaleX: 1,
              autoAlpha: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: transition,
                start: 'top 92%',
                end: 'bottom 54%',
                scrub: 0.65,
              },
            }
          );

          gsap.fromTo(
            pulse,
            { xPercent: -24, autoAlpha: 0.2 },
            {
              xPercent: 24,
              autoAlpha: 0.72,
              ease: 'none',
              scrollTrigger: {
                trigger: transition,
                start: 'top 92%',
                end: 'bottom 54%',
                scrub: 0.65,
              },
            }
          );

          gsap.fromTo(
            label,
            { y: 8, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.38,
              scrollTrigger: {
                trigger: transition,
                start: 'top 78%',
                toggleActions: 'play none none reverse',
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
