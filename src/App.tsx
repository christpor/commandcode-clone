import { useEffect } from 'react';
import Lenis from 'lenis';
import { AnnouncementBanner } from './components/common/AnnouncementBanner';
import { Navbar } from './components/common/Navbar';
import { HeroSection } from './features/hero/HeroSection';
import { ModelMarquee } from './features/models/ModelMarquee';
import { FeatureGrid } from './features/features/FeatureGrid';
import { BenchmarkComparison } from './features/value-stack/BenchmarkComparison';
import { TasteSection } from './features/taste/TasteSection';
import { PricingSection } from './features/pricing/PricingSection';
import { FAQSection } from './features/faq/FAQSection';
import { Footer } from './components/common/Footer';

export function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-600 selection:text-white flex flex-col items-center w-full">
      <AnnouncementBanner />
      <Navbar />
      <main className="w-full flex flex-col items-center">
        <HeroSection />
        <ModelMarquee />
        <FeatureGrid />
        <BenchmarkComparison />
        <TasteSection />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
