import React from 'react';

export const SloppyVsTaste: React.FC = () => {
  return (
    <section className="w-[90vw] md:w-[80vw] max-w-[1189px] mx-auto border border-[#222225] border-t-0 border-b-0 bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#222225]">
        {/* Left: Stuck. Sloppy AI */}
        <div className="p-8 sm:p-12 flex flex-col justify-between bg-neutral-950/30">
          <div className="flex items-center gap-2 mb-6">
            <span className="px-2 py-0.5 rounded bg-red-950/40 border border-red-900/50 text-red-400 font-mono text-xs">
              [ s#!t ]
            </span>
            <span className="text-sm font-semibold text-neutral-300">Stuck. Sloppy AI.</span>
          </div>

          <div className="p-5 rounded-xl border border-red-950/30 bg-black/60 font-mono text-xs sm:text-sm space-y-2.5 text-neutral-400">
            <div className="text-neutral-500">✦ You can run the app using `npm run dev`</div>
            <div className="text-red-400">&gt; s#!t, i always prefer pnpm</div>
            <div className="text-neutral-400">&gt; leave it, i'll do it myself!</div>
            <div className="text-neutral-500">&gt; learn something from me for a change</div>
          </div>
        </div>

        {/* Right: Continuous Learning */}
        <div className="p-8 sm:p-12 flex flex-col justify-between bg-purple-950/10">
          <div className="flex items-center gap-2 mb-6">
            <span className="px-2 py-0.5 rounded bg-purple-900/40 border border-purple-800/50 text-purple-300 font-mono text-xs">
              [ continuous learning ]
            </span>
            <span className="text-sm font-semibold text-neutral-200">Learned how you build</span>
          </div>

          <div className="p-5 rounded-xl border border-purple-900/30 bg-[#120e26]/80 font-mono text-xs sm:text-sm space-y-2.5 text-purple-200">
            <div className="text-purple-300 font-medium">&gt; oh wow, awesome! just what I wanted.</div>
            <div className="text-neutral-300">&gt; i just made an api route, can add /health route</div>
            <div className="text-emerald-400 text-xs">✓ auto-generated project rule: always scaffold /health probe</div>
          </div>
        </div>
      </div>
    </section>
  );
};
