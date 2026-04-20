import { useState, useEffect } from 'react';
import { I18nProvider } from './lib/i18n';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/hero/Hero';
import ProofStrip from './components/sections/ProofStrip';
import Capabilities from './components/sections/Capabilities';
import Method from './components/sections/Method';
import Cases from './components/sections/Cases';
import Pricing from './components/sections/Pricing';
import LeadForm from './components/sections/LeadForm';

function AppContent() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`app ${isLoaded ? 'loaded' : ''}`}>
      <Header />
      <main>
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
