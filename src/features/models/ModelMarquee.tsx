import React from 'react';
import { OPEN_MODELS } from '../../data/siteData';

export const ModelMarquee: React.FC = () => {
  // Duplicate for seamless 0-gap infinite drift
  const duplicatedModels = [...OPEN_MODELS, ...OPEN_MODELS];

  return (
    <section className="w-full py-16 border-b border-border bg-black/40 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 mb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-400 font-mono mb-3">
          <span className="text-purple-400 font-semibold">//</span>
          <span>open models work best in Command Code</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          Native harness for ~50 open and frontier models.
        </h2>
        <p className="text-xs sm:text-sm text-neutral-400 mt-2 max-w-xl mx-auto">
          Free 1M tool call repairs per 1T tokens. In-flight schema patching for models that struggle on generic IDEs.
        </p>
      </div>

      {/* Infinite Marquee Track with gradient masks */}
      <div className="relative w-full overflow-hidden">
        {/* Left & Right gradient vignettes */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 z-10 pointer-events-none bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 z-10 pointer-events-none bg-gradient-to-l from-black via-black/80 to-transparent" />

        {/* Scrolling Row 1 */}
        <div className="animate-marquee flex items-center gap-4 py-2">
          {duplicatedModels.map((model, idx) => (
            <div
              key={`${model.name}-${idx}`}
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-neutral-900/60 border border-neutral-800/80 hover:border-neutral-700 transition-colors shrink-0 backdrop-blur-sm"
            >
              <img
                src={model.logo}
                alt={model.name}
                className="w-5 h-5 object-contain invert brightness-90"
                onError={(e) => {
                  // Fallback to text if image fails
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="flex flex-col text-left">
                <span className="text-xs font-semibold text-white tracking-tight">{model.name}</span>
                <span className="text-[10px] text-neutral-500 font-mono">{model.context}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
