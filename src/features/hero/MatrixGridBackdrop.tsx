import React from 'react';

export const MatrixGridBackdrop: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-80">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-purple-950/20 blur-[140px] rounded-full" />

      {/* Cyber dashed matrix grid */}
      <div className="hidden sm:grid grid-cols-10 gap-0 w-full h-full max-w-[1280px] mx-auto border-x border-border/30">
        <div className="col-span-1 dash-right"></div>
        <div className="col-span-1 dash-right"></div>
        <div className="col-span-1 dash-right"></div>
        <div className="col-span-1 dash-right"></div>
        <div className="col-span-1 dash-right"></div>
        <div className="col-span-1 dash-right"></div>
        <div className="col-span-1 dash-right"></div>
        <div className="col-span-1 dash-right"></div>
        <div className="col-span-1 dash-right"></div>
        <div className="col-span-1"></div>

        {/* Highlight Glowing Matrix Blocks */}
        <div className="col-span-4 dash-top-solid"></div>
        <div className="col-span-1 dash-top-right-solid"></div>
        <div className="col-span-1 dash-top-right"></div>
        <div className="col-span-1 dash-top-right"></div>
        <div className="col-span-1 dash-top-right"></div>
        <div className="col-span-2 p-2 relative">
          <div className="w-full h-12 rounded-sm relative overflow-hidden bg-[#8C4EDD]/40 border border-[#8C4EDD]/50 shadow-[0_0_20px_rgba(140,78,221,0.3)]">
            <div className="absolute inset-0 block-grain mix-blend-overlay opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
          </div>
        </div>

        <div className="col-span-6 dash-right-solid"></div>
        <div className="col-span-1 dash-top-right"></div>
        <div className="col-span-1 dash-top-right"></div>
        <div className="col-span-2 p-2 relative">
          <div className="w-full h-16 rounded-sm relative overflow-hidden bg-[#8C4EDD]/30 border border-[#8C4EDD]/40 shadow-[0_0_25px_rgba(140,78,221,0.25)]">
            <div className="absolute inset-0 block-grain mix-blend-overlay opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent" />
          </div>
        </div>

        <div className="col-span-5 dash-bottom-solid dash-right-solid"></div>
        <div className="col-span-1 dash-right dash-top-solid"></div>
        <div className="col-span-1 dash-top-right"></div>
        <div className="col-span-3 dash-top"></div>
      </div>
    </div>
  );
};
