import React from 'react';
import { ArrowRight } from 'lucide-react';

export const SubscribeGoat: React.FC = () => {
  return (
    <section className="w-[90vw] md:w-[80vw] max-w-[1189px] mx-auto border border-[#222225] border-t-0 border-b-0 bg-black">
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#222225]">
        {/* Left Col (Col-span-4) */}
        <div className="lg:col-span-4 p-8 sm:p-12 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-1">
              Subscribe.
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-500 mb-8">
              Be a GOAT.
            </h3>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-neutral-950 border border-neutral-800">
              <img src="/assets/logos/zai.svg" alt="GLM" className="w-5 h-5 invert" />
              <span className="text-sm font-semibold text-white">GLM-5.2</span>
            </div>
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-neutral-950 border border-neutral-800">
              <img src="/assets/logos/openai.svg" alt="OpenAI" className="w-5 h-5 invert" />
              <span className="text-sm font-semibold text-white">GPT-5.6 Sol</span>
            </div>
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-neutral-950 border border-neutral-800">
              <img src="/assets/logos/tencent.svg" alt="Tencent" className="w-5 h-5 invert" />
              <span className="text-sm font-semibold text-white">Tencent Hy3</span>
            </div>
          </div>
        </div>

        {/* Center Col: Goat Mascot Image (Col-span-4) */}
        <div className="lg:col-span-4 p-6 sm:p-8 flex items-center justify-center bg-[#2c135c]">
          <div className="relative w-full max-w-[320px] aspect-square flex items-center justify-center">
            <img
              src="/home/command-goat.webp"
              alt="Command Code GOAT Mascot"
              className="w-full h-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)]"
            />
          </div>
        </div>

        {/* Right Col: Built to Scale (Col-span-4) */}
        <div className="lg:col-span-4 p-8 sm:p-12 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Built to scale.
            </h3>
            <a
              href="https://commandcode.ai/pricing"
              target="_blank"
              rel="noreferrer"
              className="text-xs sm:text-sm text-neutral-400 hover:text-white flex items-center gap-1 mb-8"
            >
              See full pricing <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-xl bg-neutral-950 border border-neutral-800">
              <div>
                <span className="text-sm font-bold text-white block">Go</span>
                <span className="text-[11px] text-neutral-500">Solo starter tier</span>
              </div>
              <span className="font-mono text-sm font-semibold text-white">$1/mo</span>
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl bg-neutral-950 border border-neutral-800">
              <div>
                <span className="text-sm font-bold text-white block">Power</span>
                <span className="text-[11px] text-neutral-500">Uncapped compute credits</span>
              </div>
              <span className="font-mono text-sm font-semibold text-white">$15/mo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
