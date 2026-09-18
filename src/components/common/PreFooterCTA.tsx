import React from 'react';

export const PreFooterCTA: React.FC = () => {
  return (
    <div className="w-[90vw] md:w-[80vw] max-w-[1189px] mx-auto border border-[#222225] border-t-0 border-b-0 py-16 px-4 flex flex-col items-center justify-center text-center bg-black">
      <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
        <a
          href="https://commandcode.ai/signup"
          className="px-6 py-3 rounded-[100px] bg-[#2e1b9c] hover:bg-[#3924b8] text-white font-mono text-sm shadow-md transition-colors flex items-center gap-2"
        >
          <span>npm i -g command-code</span>
          <svg className="w-4 h-4 text-neutral-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M8 8V4H20V16H16M16 8V20H4V8H16Z" />
          </svg>
        </a>

        <a
          href="https://commandcode.ai/docs"
          className="px-6 py-3 rounded-[100px] bg-transparent border border-[#222225] hover:border-neutral-700 text-white font-sans text-sm transition-colors"
        >
          Read the docs.
        </a>
      </div>

      <p className="font-mono text-xs tracking-widest text-neutral-500 uppercase">
        $1/MO GO PLAN · CANCEL ANY TIME
      </p>
    </div>
  );
};
