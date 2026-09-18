import React from 'react';
import { Brain, Cpu, Sparkles, ArrowRight } from 'lucide-react';

export const TasteSection: React.FC = () => {
  return (
    <section id="taste" className="w-full py-24 px-4 max-w-[1280px] mx-auto border-b border-border">
      <div className="relative rounded-3xl border border-purple-500/20 bg-gradient-to-b from-purple-950/20 via-neutral-950 to-neutral-950 p-8 sm:p-12 md:p-16 overflow-hidden">
        {/* Glow orb */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/10 blur-[120px] pointer-events-none" />

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs text-purple-300 font-mono mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>//taste-1 neuro-symbolic engine</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Hello, taste. The model that pairs LLMs with your coding style.
          </h2>

          <p className="text-sm sm:text-base text-neutral-400 mb-8 leading-relaxed">
            Every accept, reject, and edit is a signal. Command Code distills those into project-level <code className="text-purple-300 bg-purple-950/40 px-1.5 py-0.5 rounded border border-purple-800/40">/skills</code> and personal <code className="text-purple-300 bg-purple-950/40 px-1.5 py-0.5 rounded border border-purple-800/40">/memory</code>, so the next session opens with the conventions you already prefer. No prompt engineering required.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 shrink-0">
                <Brain className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-1">Zero Prompt Drift</h4>
                <p className="text-xs text-neutral-400">Maintains structural conventions, testing preferences, and architectural invariants.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 shrink-0">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-1">Team Sync Built-in</h4>
                <p className="text-xs text-neutral-400">Run <code className="text-purple-300 font-mono">npx taste push</code> to distribute architectural taste across your entire team.</p>
              </div>
            </div>
          </div>

          <a
            href="https://commandcode.ai/docs/taste"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-purple-900/30 transition-all duration-200"
          >
            Explore taste-1 Architecture
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
