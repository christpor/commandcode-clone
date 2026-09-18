import React from 'react';
import { ArrowRight } from 'lucide-react';

export const ChangelogSection: React.FC = () => {
  const releases = [
    { type: 'FEAT', text: 'Send session id to BYOK hosts that require it' },
    { type: 'FEAT', text: 'Add Qwen 3.8 Omni Flash' },
    { type: 'FIX', text: 'Desktop telemetry reporting on its own service' },
    { type: 'FIX', text: 'Keep each chat telemetry on its own trace' },
  ];

  return (
    <section className="w-[90vw] md:w-[80vw] max-w-[1189px] mx-auto border border-[#222225] border-t-0 border-b-0 bg-black">
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#222225]">
        {/* Version Badge Header */}
        <div className="lg:col-span-4 p-8 sm:p-12 flex flex-col justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
              Changelog
            </h2>
            <div className="font-mono text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-2">
              v1.56.1
            </div>
            <p className="text-xs text-neutral-500 font-mono">
              355 releases shipped
            </p>
          </div>
        </div>

        {/* Releases List */}
        <div className="lg:col-span-8 flex flex-col justify-between">
          <div className="p-8 sm:p-10 divide-y divide-neutral-900">
            {releases.map((item, idx) => (
              <div key={idx} className="py-3.5 flex items-center gap-4 text-xs sm:text-sm">
                <span className={`font-mono text-[11px] font-bold px-2 py-0.5 rounded tracking-wider ${
                  item.type === 'FEAT' ? 'bg-purple-950/60 text-purple-400 border border-purple-800/40' : 'bg-neutral-900 text-neutral-400 border border-neutral-800'
                }`}>
                  {item.type}
                </span>
                <span className="text-neutral-300 font-sans">{item.text}</span>
              </div>
            ))}
          </div>

          <a
            href="https://commandcode.ai/changelog"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between p-5 px-8 border-t border-[#222225] text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white hover:bg-neutral-950 transition-colors"
          >
            <span>Read full changelog</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
