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
import MotionAtmosphere from './components/ambient/MotionAtmosphere';

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

        if (!canAnimate) {
          gsap.set(sections, { clearProps: 'all' });
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
      }
    );

    return () => mm.revert();
  }, { scope: mainRef });

  return (
    <div className={`app ${isLoaded ? 'loaded' : ''}`}>
      <AuroraVeil />
      <MotionAtmosphere />
      <Header />
      <main ref={mainRef}>
        <Hero />
        <ProofStrip />
        <Capabilities />
        <Method />
        <Cases />
        <Pricing />
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
