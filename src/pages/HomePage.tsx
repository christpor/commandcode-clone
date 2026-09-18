import React from 'react';
import { HeroSection } from '../features/hero/HeroSection';
import { FeatureSplitExplorer } from '../features/features/FeatureSplitExplorer';
import { SloppyVsTaste } from '../features/contrast/SloppyVsTaste';
import { SubscribeGoat } from '../features/goat/SubscribeGoat';
import { IndustrialGrid } from '../features/industrial/IndustrialGrid';
import { FAQSection } from '../features/faq/FAQSection';
import { ChangelogSection } from '../features/changelog/ChangelogSection';
import { PreFooterCTA } from '../components/common/PreFooterCTA';

export const DashedSpacer: React.FC = () => (
  <div className="h-[80px] w-[90vw] md:w-[80vw] max-w-[1189px] border-l border-r border-[#222225] custom-dashed mx-auto" />
);

export const HomePage: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center">
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
    </div>
  );
};
