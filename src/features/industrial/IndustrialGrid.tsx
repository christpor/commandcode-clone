import React from 'react';

export const IndustrialGrid: React.FC = () => {
  return (
    <section className="w-[90vw] md:w-[80vw] max-w-[1189px] mx-auto border border-[#222225] border-t-0 border-b-0 bg-black">
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#222225]">
        {/* Cell 1 */}
        <div className="p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">
              Code 10× faster.
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400">
              Built for your architecture. Not the internet's.
            </p>
          </div>

          {/* Brushed metallic texture blocks */}
          <div className="mt-12 space-y-3">
            <div className="w-3/4 h-8 rounded-sm bg-gradient-to-r from-neutral-800 via-neutral-600 to-neutral-800 relative overflow-hidden opacity-60">
              <div className="absolute inset-0 block-grain mix-blend-overlay" />
            </div>
            <div className="w-full h-8 rounded-sm bg-gradient-to-r from-neutral-800 via-neutral-500 to-neutral-800 relative overflow-hidden opacity-70">
              <div className="absolute inset-0 block-grain mix-blend-overlay" />
            </div>
          </div>
        </div>

        {/* Center Cell: Start building */}
        <div className="p-8 sm:p-12 flex flex-col items-center justify-center text-center bg-neutral-950/60">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 tracking-tight">
            Start building.
          </h2>
          <h3 className="text-xl sm:text-2xl font-bold text-neutral-500 tracking-tight">
            With your taste.
          </h3>
        </div>

        {/* Cell 3 */}
        <div className="p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">
              Reviews, in half.
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400">
              Cleaner code. First try.
            </p>
          </div>

          {/* Brushed metallic texture blocks */}
          <div className="mt-12 space-y-3">
            <div className="w-full h-8 rounded-sm bg-gradient-to-r from-neutral-800 via-neutral-500 to-neutral-800 relative overflow-hidden opacity-70">
              <div className="absolute inset-0 block-grain mix-blend-overlay" />
            </div>
            <div className="w-2/3 h-8 rounded-sm bg-gradient-to-r from-neutral-800 via-neutral-600 to-neutral-800 relative overflow-hidden opacity-60">
              <div className="absolute inset-0 block-grain mix-blend-overlay" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
