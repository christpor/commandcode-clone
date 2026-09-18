import React from 'react';
import { PRICING_PLANS } from '../../data/siteData';
import { Check, Sparkles } from 'lucide-react';

export const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="w-full py-24 px-4 max-w-[1280px] mx-auto border-b border-border">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-400 font-mono mb-4">
          <span className="text-purple-400 font-semibold">//</span>
          <span>pricing engineered for developers</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white max-w-2xl leading-tight">
          Subscribe. Be a GOAT.
        </h2>
        <p className="text-sm sm:text-base text-neutral-400 mt-4 max-w-lg leading-relaxed">
          Start for free with BYOK or get $70 worth of compute credits with the $10/month GOAT plan.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
        {PRICING_PLANS.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col justify-between p-8 rounded-3xl border transition-all duration-300 ${
              plan.highlight
                ? 'bg-gradient-to-b from-purple-950/40 via-neutral-950 to-neutral-950 border-purple-500/50 shadow-2xl shadow-purple-950/40'
                : 'bg-neutral-950/70 border-neutral-800/80 hover:border-neutral-700'
            }`}
          >
            {plan.badge && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-purple-600 text-[11px] font-semibold text-white tracking-wider uppercase flex items-center gap-1 shadow-md">
                <Sparkles className="w-3 h-3" />
                {plan.badge}
              </div>
            )}

            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">{plan.name}</h3>
                <span className="text-xs text-neutral-500 font-mono uppercase">{plan.period}</span>
              </div>

              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-extrabold text-white tracking-tight">{plan.price}</span>
                <span className="text-xs text-neutral-400 font-normal">{plan.period}</span>
              </div>

              <p className="text-xs sm:text-sm text-neutral-400 mb-6 leading-relaxed">
                {plan.description}
              </p>

              <div className="space-y-3 mb-8 border-t border-neutral-900 pt-6">
                {plan.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                    <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.highlight ? 'text-purple-400' : 'text-neutral-500'}`} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="https://commandcode.ai/signup"
              target="_blank"
              rel="noreferrer"
              className={`w-full py-3 px-4 rounded-full text-center text-xs sm:text-sm font-semibold transition-all duration-200 ${
                plan.highlight
                  ? 'bg-white text-black hover:bg-neutral-200 shadow-lg shadow-white/10'
                  : 'bg-neutral-900 text-white hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
