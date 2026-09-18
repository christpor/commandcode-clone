import { useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/common/Navbar';
import { HeroSection } from './features/hero/HeroSection';
import { FeatureSplitExplorer } from './features/features/FeatureSplitExplorer';
import { SloppyVsTaste } from './features/contrast/SloppyVsTaste';
import { SubscribeGoat } from './features/goat/SubscribeGoat';
import { IndustrialGrid } from './features/industrial/IndustrialGrid';
import { FAQSection } from './features/faq/FAQSection';
import { ChangelogSection } from './features/changelog/ChangelogSection';
import { PreFooterCTA } from './components/common/PreFooterCTA';
import { Footer } from './components/common/Footer';

// Reusable vertical dashed spacer matching commandcode.ai architecture
const DashedSpacer = () => (
  <div className="h-[80px] w-[90vw] md:w-[80vw] max-w-[1189px] border-l border-r border-[#222225] custom-dashed mx-auto" />
);

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
    <div className="min-h-screen bg-black text-[#fafafa] selection:bg-[#556af3] selection:text-white flex flex-col items-center w-full overflow-x-hidden">
      <Navbar />
      <main className="w-full flex flex-col items-center">
        <HeroSection />
        <DashedSpacer />
        <FeatureSplitExplorer />
        <DashedSpacer />
        <SloppyVsTaste />
        <DashedSpacer />
        <SubscribeGoat />
        <DashedSpacer />
        <IndustrialGrid />
        <DashedSpacer />
        <FAQSection />
        <DashedSpacer />
        <ChangelogSection />
        <DashedSpacer />
        <PreFooterCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
