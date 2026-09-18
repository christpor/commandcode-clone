import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('npm i -g command-code');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="herocontent border border-[#222225] border-b-0 relative flex flex-col mt-[85px] justify-center items-center w-[90vw] md:w-[80vw] max-w-[1189px] mx-auto overflow-hidden bg-black">
      {/* Top Embedded Announcement Strip */}
      <div className="relative flex items-center justify-between w-full px-4 sm:px-8 py-3 text-xs border-b border-[#222225] text-neutral-400 bg-neutral-950/40 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
          <a
            href="https://commandcode.ai/launch"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white underline decoration-neutral-600 transition-colors flex items-center gap-1.5"
          >
            Command Code raised $5M seed.
            <ArrowRight className="w-3 h-3 inline" />
          </a>
        </div>

        <a
          href="https://commandcode.ai/docs/plans/goat"
          target="_blank"
          rel="noreferrer"
          className="hidden md:flex items-center gap-2 hover:text-white transition-colors"
        >
          <span className="font-semibold text-purple-400 uppercase tracking-wider text-[10px] px-1.5 py-0.5 rounded bg-purple-500/10 border border-purple-500/20">
            GOAT
          </span>
          <span className="text-white font-medium">$10/mo</span> with <span className="text-white font-medium">$70</span> credits
          <span className="text-neutral-600">•</span>
          <span>~50 models</span>
          <span className="text-neutral-500">(best low cost coding plan)</span>
        </a>
      </div>

      {/* Main Hero Container */}
      <div className="relative w-full min-h-[520px] flex flex-col justify-center px-6 sm:px-12 md:px-16 py-16">
        {/* Right side Matrix Dash Grid with authentic purple glowing blocks */}
        <div className="w-full h-full absolute top-0 right-0 pointer-events-none overflow-hidden hidden sm:block">
          {/* Dashed Grid Lines */}
          <div className="grid grid-cols-10 gap-0 w-full h-full">
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

            <div className="col-span-4 dash-top-solid"></div>
            <div className="col-span-1 dash-top-right-solid"></div>
            <div className="col-span-1 dash-top-right"></div>
            <div className="col-span-1 dash-top-right"></div>
            <div className="col-span-1 dash-top-right"></div>
            <div className="col-span-2 dash-top"></div>

            <div className="col-span-5"></div>
            <div className="col-span-1 dash-top-right-solid"></div>
            <div className="col-span-1 dash-top-right"></div>
            <div className="col-span-1 dash-top-right"></div>
            <div className="col-span-1 dash-top-right"></div>
            <div className="col-span-1 dash-top"></div>

            <div className="col-span-6 dash-right-solid"></div>
            <div className="col-span-1 dash-top-right"></div>
            <div className="col-span-1 dash-top-right"></div>
            <div className="col-span-2 dash-top"></div>
          </div>

          {/* Glowing Purple Noise Rectangles positioned on right columns */}
          <div className="absolute top-0 right-0 w-full h-full grid grid-cols-10 gap-0">
            {/* Row 1 */}
            <div className="col-span-8"></div>
            <div className="col-span-2 p-3">
              <div className="w-full h-12 relative rounded overflow-hidden bg-[#8C4EDD]/70 shadow-[0_0_30px_rgba(140,78,221,0.35)]">
                <div className="absolute inset-0 block-grain mix-blend-overlay opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
              </div>
            </div>

            {/* Row 2 */}
            <div className="col-span-7"></div>
            <div className="col-span-1 p-3">
              <div className="w-full h-14 relative rounded overflow-hidden bg-[#8C4EDD]/60 shadow-[0_0_25px_rgba(140,78,221,0.3)]">
                <div className="absolute inset-0 block-grain mix-blend-overlay opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent" />
              </div>
            </div>
            <div className="col-span-2 p-3">
              <div className="w-full h-14 relative rounded overflow-hidden bg-[#8C4EDD]/70 shadow-[0_0_35px_rgba(140,78,221,0.4)]">
                <div className="absolute inset-0 block-grain mix-blend-overlay opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
              </div>
            </div>

            {/* Row 3 */}
            <div className="col-span-8"></div>
            <div className="col-span-2 p-3">
              <div className="w-full h-12 relative rounded overflow-hidden bg-[#8C4EDD]/65 shadow-[0_0_30px_rgba(140,78,221,0.35)]">
                <div className="absolute inset-0 block-grain mix-blend-overlay opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
              </div>
            </div>

            {/* Row 4 */}
            <div className="col-span-6"></div>
            <div className="col-span-3 p-3">
              <div className="w-full h-16 relative rounded overflow-hidden bg-[#8C4EDD]/70 shadow-[0_0_40px_rgba(140,78,221,0.4)]">
                <div className="absolute inset-0 block-grain mix-blend-overlay opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-transparent to-black/90" />
              </div>
            </div>
            <div className="col-span-1"></div>
          </div>
        </div>

        {/* Foreground Content - Left Aligned */}
        <div className="relative z-10 max-w-2xl text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.05] mb-8 font-sans">
            Meet the coding agent<br />
            built for <span className="text-[#556af3]">open models</span>.<br />
            <span className="text-[#a1a1aa]">Command Code.</span>
          </h1>

          {/* Action Buttons Row */}
          <div className="flex flex-wrap items-center gap-3.5 mb-8">
            <button
              type="button"
              onClick={handleCopy}
              className="cursor-pointer font-medium bg-[#2e1b9c] hover:bg-[#3924b8] text-white rounded-[100px] transition-all duration-300 flex items-center gap-3 px-5 py-3 text-sm font-mono shadow-lg shadow-indigo-950/40 border border-indigo-500/20"
            >
              <span>npm i -g command-code</span>
              {copied ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <svg className="w-4 h-4 text-neutral-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M8 8V4H20V16H16M16 8V20H4V8H16Z" />
                </svg>
              )}
            </button>

            <a
              href="https://commandcode.ai/docs"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer font-medium bg-transparent border border-[#222225] hover:border-neutral-700 text-white rounded-[100px] transition-colors flex items-center gap-2 px-5 py-3 text-sm font-mono"
            >
              <span className="w-2 h-2 rounded-full bg-[#556af3]" />
              <span>cmd.mp4</span>
            </a>
          </div>

          {/* Secondary Subtext */}
          <div className="flex flex-col gap-1.5 text-sm sm:text-base text-neutral-400 font-sans">
            <p>
              Code <span className="text-white font-medium">10× faster</span>. Reviews, <span className="text-white font-medium">2× quicker</span>. Bugs <span className="text-white font-medium">5× fewer</span>.
            </p>
            <p className="text-xs sm:text-sm text-neutral-500">
              Start with{' '}
              <a href="https://commandcode.ai/pricing" className="text-[#556af3] font-semibold underline-offset-4 hover:underline">
                $1/mo
              </a>{' '}
              or $10/mo, get $70 free credits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
