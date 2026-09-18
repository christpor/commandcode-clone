import React, { useState } from 'react';
import { FAQS } from '../../data/siteData';
import { ChevronDown } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="w-[90vw] md:w-[80vw] max-w-[1189px] mx-auto border border-[#222225] border-t-0 border-b-0 p-8 sm:p-14 bg-black">
      <div className="flex flex-col mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3 font-sans">
          Questions, answered.
        </h2>
        <p className="text-xs sm:text-sm text-neutral-400 max-w-md">
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

      <div className="divide-y divide-[#222225] border-y border-[#222225]">
        {FAQS.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div key={idx} className="transition-colors">
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between gap-6 py-5 sm:py-6 text-left cursor-pointer group"
                aria-expanded={isOpen}
              >
                <span className="text-sm sm:text-base font-semibold text-neutral-200 group-hover:text-white transition-colors">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-neutral-500 transition-transform duration-200 shrink-0 group-hover:text-white ${
                    isOpen ? 'rotate-180 text-white' : ''
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
