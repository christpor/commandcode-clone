import React from 'react';
import { BENCHMARKS } from '../../data/siteData';
import { CheckCircle2, XCircle } from 'lucide-react';

export const BenchmarkComparison: React.FC = () => {
  return (
    <section id="benchmarks" className="w-full py-24 px-4 max-w-[1280px] mx-auto border-b border-border">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-400 font-mono mb-4">
          <span className="text-purple-400 font-semibold">//</span>
          <span>Pareto frontier leader</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white max-w-2xl leading-tight">
          Tested across ten harnesses. Proven at scale.
        </h2>
        <p className="text-sm sm:text-base text-neutral-400 mt-4 max-w-xl leading-relaxed">
          Open-weight models struggle with tool calls in standard IDEs. Command Code introduces automatic in-flight repair heuristics and industry-leading cache reuse.
        </p>
      </div>

      {/* Comparison Table */}
      <div className="w-full max-w-4xl mx-auto rounded-2xl border border-neutral-800 bg-neutral-950/70 overflow-hidden shadow-2xl">
        <div className="grid grid-cols-12 bg-neutral-900/60 p-4 border-b border-neutral-800 text-xs font-mono text-neutral-400 uppercase tracking-wider">
          <div className="col-span-6 sm:col-span-5">Performance Metric</div>
          <div className="col-span-3 sm:col-span-4 text-purple-400 font-semibold">Command Code</div>
          <div className="col-span-3 sm:col-span-3 text-neutral-500">Other Agents</div>
        </div>

        <div className="divide-y divide-neutral-900">
          {BENCHMARKS.map((b, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-12 p-4 sm:p-5 items-center text-xs sm:text-sm ${
                b.highlight ? 'bg-purple-950/5' : ''
              }`}
            >
              <div className="col-span-6 sm:col-span-5 font-medium text-white flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500/80" />
                {b.metric}
              </div>
              <div className="col-span-3 sm:col-span-4 font-semibold text-purple-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 hidden sm:inline" />
                <span>{b.commandCode}</span>
              </div>
              <div className="col-span-3 sm:col-span-3 text-neutral-500 flex items-center gap-1.5">
                <XCircle className="w-4 h-4 text-neutral-600 shrink-0 hidden sm:inline" />
                <span>{b.others}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
