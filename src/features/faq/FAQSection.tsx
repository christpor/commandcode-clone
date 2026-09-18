import React, { useState } from 'react';
import { FAQS } from '../../data/siteData';
import { ChevronDown } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="w-full py-24 px-4 max-w-[1000px] mx-auto border-b border-border">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-400 font-mono mb-4">
          <span className="text-purple-400 font-semibold">//</span>
          <span>clarity upfront</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Questions, answered.
        </h2>
        <p className="text-sm sm:text-base text-neutral-400 mt-3 max-w-md">
          Everything that usually comes up before a team installs. Still curious? Read the{' '}
          <a
            href="https://commandcode.ai/docs"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2 text-white hover:text-purple-300 transition-colors"
          >
            docs
          </a>{' '}
          or join the{' '}
          <a
            href="https://commandcode.ai/discord"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2 text-white hover:text-purple-300 transition-colors"
          >
            Discord
          </a>
          .
        </p>
      </div>

      <div className="divide-y divide-neutral-800/80 border-y border-neutral-800/80">
        {FAQS.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div key={idx} className="transition-colors">
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between gap-6 py-6 text-left cursor-pointer group"
                aria-expanded={isOpen}
              >
                <span className="text-sm sm:text-base font-semibold text-neutral-200 group-hover:text-white transition-colors">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-neutral-500 transition-transform duration-200 shrink-0 group-hover:text-purple-400 ${
                    isOpen ? 'rotate-180 text-purple-400' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="pb-6 text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-3xl animate-in fade-in duration-200">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
