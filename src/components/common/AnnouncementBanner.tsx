import React from 'react';
import { ArrowRight } from 'lucide-react';

export const AnnouncementBanner: React.FC = () => {
  return (
    <div className="w-full border-b border-border/70 bg-black/60 backdrop-blur-md sticky top-0 z-40">
      <div className="w-full max-w-[1280px] mx-auto px-4 py-2.5 flex items-center justify-between text-xs text-neutral-400">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
          <a
            href="https://commandcode.ai/launch"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 font-medium text-neutral-300 hover:text-white transition-colors underline decoration-neutral-600 hover:decoration-white"
          >
            Command Code raised $5M seed.
            <ArrowRight className="w-3 h-3 inline" />
          </a>
        </div>

        <a
          href="https://commandcode.ai/docs/plans/goat"
          target="_blank"
          rel="noreferrer"
          className="hidden md:flex items-center gap-2 hover:text-neutral-200 transition-colors group"
        >
          <span className="font-semibold text-purple-400 uppercase tracking-wider text-[11px] px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20">
            GOAT
          </span>
          <span className="text-neutral-300 font-medium">$10/mo</span> with <span className="text-neutral-300 font-medium">$70</span> credits
          <span className="text-neutral-500">•</span>
          <span>~50 models</span>
          <span className="text-neutral-500">(best low cost coding plan)</span>
        </a>
      </div>
    </div>
  );
};
