import React from 'react';
import { TerminalBox } from '../../components/common/TerminalBox';
import { MatrixGridBackdrop } from './MatrixGridBackdrop';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-center pt-24 pb-16 px-4 overflow-hidden border-b border-border">
      <MatrixGridBackdrop />

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Sub-label badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/80 border border-neutral-800 text-xs text-neutral-400 font-mono mb-6 backdrop-blur-md">
          <span className="text-purple-400 font-semibold">//</span>
          <span>best coding agent for open models.</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.08] max-w-3xl">
          Meet the coding agent <br className="hidden sm:inline" />
          built for open models. <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-400">
            Command Code.
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-sm sm:text-base md:text-lg text-neutral-400 max-w-2xl mb-10 leading-relaxed">
          The coding agent that made open models work. Tool call repairs on every model, best in class token efficiency on read and shell tools, 99%+ cache hit rates, and <span className="text-neutral-200 font-medium">taste-1</span>, which continuously learns your coding taste.
        </p>

        {/* Terminal install widget */}
        <div className="w-full max-w-lg mb-12">
          <TerminalBox />
        </div>

        {/* Live Metrics Grid */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-neutral-800/80">
          <div className="flex flex-col items-center p-3 rounded-lg bg-neutral-950/40 border border-neutral-900">
            <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">100K+</span>
            <span className="text-xs text-neutral-400 mt-1">Developers</span>
          </div>
          <div className="flex flex-col items-center p-3 rounded-lg bg-neutral-950/40 border border-neutral-900">
            <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">40K+</span>
            <span className="text-xs text-neutral-400 mt-1">Paid Customers</span>
          </div>
          <div className="flex flex-col items-center p-3 rounded-lg bg-neutral-950/40 border border-neutral-900">
            <span className="text-2xl sm:text-3xl font-bold text-purple-400 tracking-tight">130T+</span>
            <span className="text-xs text-neutral-400 mt-1">Tokens Served</span>
          </div>
          <div className="flex flex-col items-center p-3 rounded-lg bg-neutral-950/40 border border-neutral-900">
            <span className="text-2xl sm:text-3xl font-bold text-emerald-400 tracking-tight">99.2%</span>
            <span className="text-xs text-neutral-400 mt-1">Prompt Cache Hit</span>
          </div>
        </div>
      </div>
    </section>
  );
};
