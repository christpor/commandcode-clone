import React from 'react';
import { FEATURES } from '../../data/siteData';
import { ArrowUpRight } from 'lucide-react';

export const FeatureGrid: React.FC = () => {
  return (
    <section id="features" className="w-full py-24 px-4 max-w-[1280px] mx-auto border-b border-border">
      <div className="flex flex-col items-start mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-400 font-mono mb-4">
          <span className="text-purple-400 font-semibold">//</span>
          <span>stop patching AI slop</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white max-w-2xl leading-tight">
          What if you could code like you think?
        </h2>
        <p className="text-sm sm:text-base text-neutral-400 mt-4 max-w-2xl leading-relaxed">
          LLMs generate sloppy code. Not your patterns. Not your taste. Command Code accelerates flow state with continuous learning and deep tool execution.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURES.map((feat) => (
          <div
            key={feat.id}
            className="group relative flex flex-col justify-between p-6 rounded-2xl bg-neutral-950/70 border border-neutral-800/90 hover:border-neutral-700 transition-all duration-300 hover:shadow-xl hover:shadow-purple-950/10 overflow-hidden"
          >
            {/* Top header */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-purple-400 font-semibold tracking-wider">
                {feat.id}
              </span>
              {feat.badge && (
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-900 text-neutral-400 border border-neutral-800">
                  {feat.badge}
                </span>
              )}
            </div>

            {/* Title & Description */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                {feat.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                {feat.description}
              </p>
            </div>

            {/* Visual SVG if present */}
            {feat.visual ? (
              <div className="mt-auto pt-4 flex items-center justify-center border-t border-neutral-900 overflow-hidden">
                <img
                  src={feat.visual}
                  alt={feat.title}
                  className="w-full h-36 object-contain opacity-75 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ) : (
              <div className="mt-auto pt-4 flex items-center justify-between text-xs text-neutral-500 font-mono border-t border-neutral-900">
                <span>{feat.tagline || 'Native Runtime Feature'}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-600 group-hover:text-purple-400 transition-colors" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
