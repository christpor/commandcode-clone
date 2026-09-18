import React, { useState } from 'react';
import { Check, Sparkles, HelpCircle, ChevronDown, ChevronUp, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Tier {
  name: string;
  badge?: string;
  monthlyPrice: number;
  yearlyPrice: number;
  description: string;
  credits: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
  ctaHighlight?: boolean;
}

export const PricingPage: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const developerTiers: Tier[] = [
    {
      name: 'Go',
      monthlyPrice: 1,
      yearlyPrice: 10,
      description: 'Taste the waters. Perfect for casual testing and weekend hobby projects.',
      credits: '$10 in credits included (up to $20 usage)',
      features: [
        'Access to open-source models (Qwen, DeepSeek)',
        'Basic taste learning and AST context',
        'Standard terminal CLI interface',
        'Community Discord support',
      ],
      ctaText: 'Get Go',
    },
    {
      name: 'GOAT',
      badge: 'Most Popular',
      popular: true,
      monthlyPrice: 10,
      yearlyPrice: 96,
      description: 'The sweet spot for engineers who live on open models and ship fast.',
      credits: '$70 in credits included (29+ models)',
      features: [
        'Unrestricted DeepSeek-R1 & Qwen 2.5 Coder',
        'Continuous taste learning with .commandcode/taste/',
        'MCP Server integrations & custom skills',
        'Session checkpoints & Esc-to-rewind',
        'Multi-directory workspace indexing',
        'Priority community support',
      ],
      ctaText: 'Get GOAT',
      ctaHighlight: true,
    },
    {
      name: 'Pro',
      monthlyPrice: 20,
      yearlyPrice: 192,
      description: 'For full-time software engineers needing premium frontier reasoning.',
      credits: '$80 in credits included + frontier models',
      features: [
        'Includes Claude 3.7 Sonnet & GPT-4.5',
        'High-concurrency token streaming',
        'Agentic /review for pull requests',
        'Extended thinking reasoning traces',
        'Unlimited custom slash commands',
        'Email & Discord priority support',
      ],
      ctaText: 'Get Pro',
    },
    {
      name: 'Max 10×',
      badge: 'Power User',
      monthlyPrice: 100,
      yearlyPrice: 960,
      description: 'Extreme throughput for tech leads, founders, and hardcore builders.',
      credits: '$150 in credits included (up to $300 usage)',
      features: [
        'Maximum priority queue on all frontier models',
        'Higher hourly rate limits & parallel threads',
        'Zero token rate-limit throttling',
        'Early beta access to next-gen reasoning models',
        'Direct Slack channel with core engineering',
      ],
      ctaText: 'Get Max 10×',
    },
  ];

  const orgTiers: Tier[] = [
    {
      name: 'Teams',
      monthlyPrice: 40,
      yearlyPrice: 384,
      description: 'One team. One shared bucket. Propagate taste across all developers.',
      credits: 'Pooled team credits + centralized billing',
      features: [
        'All Pro tier features per seat',
        'Shared organization credits pool',
        'npx taste push/pull team synchronization',
        'Role-based access control (RBAC)',
        'Unified billing & invoice management',
        'Dedicated onboarding engineer',
      ],
      ctaText: 'Start Team Trial',
    },
    {
      name: 'Enterprise',
      monthlyPrice: 0,
      yearlyPrice: 0,
      description: 'Custom governance, private VPC endpoints, and strict zero-data retention.',
      credits: 'Custom high-volume allocation',
      features: [
        'Zero data retention & air-gapped deployments',
        'Custom SSO (Okta, SAML, Google Workspace)',
        'Dedicated account manager & 99.99% uptime SLA',
        'Custom model fine-tuning on company codebases',
        'Security compliance (SOC2 Type II, ISO 27001)',
        'Custom invoicing & vendor security review',
      ],
      ctaText: 'Contact Enterprise Sales',
    },
  ];

  const comparisonRows = [
    { category: 'Usage & Limits', feature: 'Included Monthly Credits', go: '$10', goat: '$70', pro: '$80', max: '$150', teams: 'Pooled' },
    { category: 'Usage & Limits', feature: 'Open-Source Models (DeepSeek, Qwen)', go: 'Standard', goat: 'High Speed', pro: 'High Speed', max: 'Maximum', teams: 'Maximum' },
    { category: 'Usage & Limits', feature: 'Frontier Models (Sonnet 3.7, GPT-4.5)', go: 'Pay-as-you-go', goat: 'Pay-as-you-go', pro: 'Included', max: 'Priority Access', teams: 'Included' },
    { category: 'Intelligence & Taste', feature: 'Continuous Taste Learning', go: 'Basic', goat: 'Full', pro: 'Full', max: 'Full', teams: 'Team Synchronized' },
    { category: 'Intelligence & Taste', feature: 'Local Context Indexing', go: 'Single Repo', goat: 'Multi-Repo', pro: 'Multi-Repo', max: 'Monorepo Scale', teams: 'Monorepo Scale' },
    { category: 'Developer Tools', feature: 'MCP Protocol & Custom Skills', go: 'Standard', goat: 'Unlimited', pro: 'Unlimited', max: 'Unlimited', teams: 'Unlimited' },
    { category: 'Developer Tools', feature: 'Agentic /review & Pre-Commit', go: '—', goat: 'Yes', pro: 'Yes', max: 'Yes', teams: 'Yes' },
    { category: 'Security & Team', feature: 'Audit Logs & Team Controls', go: '—', goat: '—', pro: '—', max: '—', teams: 'Yes' },
    { category: 'Support', feature: 'Support Level', go: 'Community', goat: 'Discord', pro: 'Priority Email', max: 'Direct Slack', teams: 'Dedicated Slack' },
  ];

  const faqs = [
    {
      q: 'Which plan is right for you?',
      a: 'If you primarily build with open-weights models like DeepSeek-R1 and Qwen 2.5 Coder, GOAT ($10/mo) provides the highest value with $70 of included usage. If you need Anthropic Claude 3.7 Sonnet or OpenAI reasoning models for mission-critical code, choose Pro ($20/mo). For organizations wanting shared taste profiles, choose Teams.',
    },
    {
      q: 'How does pricing work?',
      a: 'Command Code uses a credit model. Each subscription tier comes bundled with significantly discounted credits compared to raw API rates. Once your bundled credits are utilized, you can seamlessly continue pay-as-you-go at direct wholesale provider cost with zero markup.',
    },
    {
      q: 'Can I bring my own API keys (BYOK)?',
      a: 'Yes! Command Code supports BYOK for Anthropic, OpenAI, OpenRouter, and local Ollama/vLLM endpoints with zero subscription fee on the free open-source CLI core.',
    },
    {
      q: 'Can I cancel or change plans at any time?',
      a: 'Absolutely. Upgrades take effect immediately with prorated billing, and cancellations remain active until the end of your billing cycle with no cancellation penalties.',
    },
  ];

  return (
    <div className="w-full flex flex-col items-center pb-24">
      {/* Hero Header */}
      <section className="w-[90vw] md:w-[80vw] max-w-[1189px] border-x border-[#222225] pt-28 pb-16 px-6 sm:px-12 flex flex-col items-center text-center relative overflow-hidden bg-black">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#222225] bg-[#111113] text-xs font-mono text-[#a1a1aa] mb-6">
          <Zap className="w-3.5 h-3.5 text-[#556af3]" />
          // TRANSPARENT PRICING
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white max-w-3xl mb-6">
          A plan for every kind of code. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C7B8F5] via-[#556af3] to-[#8C4EDD]">
            Pick yours.
          </span>
        </h1>

        <p className="text-[#a1a1aa] text-lg sm:text-xl max-w-2xl font-sans mb-10">
          Start coding with open models or frontier reasoning. Scale from solo hacking to full engineering teams.
        </p>

        {/* Monthly vs Yearly Toggle */}
        <div className="flex items-center gap-3 p-1.5 rounded-full border border-[#222225] bg-[#0d0d10]">
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-5 py-2 rounded-full text-xs font-mono transition-all ${
              !isAnnual ? 'bg-[#222228] text-white font-semibold' : 'text-[#a1a1aa] hover:text-white'
            }`}
          >
            Monthly Billing
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-mono transition-all ${
              isAnnual ? 'bg-[#556af3] text-white font-semibold shadow-[0_0_15px_rgba(85,106,243,0.4)]' : 'text-[#a1a1aa] hover:text-white'
            }`}
          >
            Annual Billing
            <span className="px-2 py-0.5 rounded-full text-[10px] bg-black/40 text-emerald-300">Save 20%</span>
          </button>
        </div>
      </section>

      {/* Developer Tiers Grid */}
      <section className="w-[90vw] md:w-[80vw] max-w-[1189px] border-x border-[#222225] pt-12 pb-16 px-6 sm:px-12 bg-black">
        <div className="text-xs font-mono text-[#71717a] uppercase tracking-wider mb-6">// INDIVIDUAL DEVELOPERS</div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {developerTiers.map((tier, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl border p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                tier.popular
                  ? 'border-[#556af3] bg-gradient-to-b from-[#131422] to-[#09090c] shadow-[0_0_30px_rgba(85,106,243,0.15)] ring-1 ring-[#556af3]'
                  : 'border-[#222225] bg-[#0c0c0e] hover:border-[#38383e]'
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[11px] font-mono font-medium uppercase tracking-wider bg-[#556af3] text-white shadow-md">
                  {tier.badge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white font-sans">{tier.name}</h3>
                </div>

                <div className="mb-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono">
                      ${isAnnual ? Math.round(tier.yearlyPrice / 12) : tier.monthlyPrice}
                    </span>
                    <span className="text-xs text-[#71717a] font-mono">/month</span>
                  </div>
                  {isAnnual && tier.monthlyPrice > 0 && (
                    <span className="text-[11px] text-[#556af3] font-mono">Billed annually (${tier.yearlyPrice}/yr)</span>
                  )}
                </div>

                <div className="p-2.5 rounded-lg bg-[#141418] border border-[#222226] mb-5">
                  <p className="text-xs text-[#e4e4e7] font-mono flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#556af3]" />
                    {tier.credits}
                  </p>
                </div>

                <p className="text-xs text-[#a1a1aa] mb-6 leading-relaxed font-sans">{tier.description}</p>

                <div className="space-y-3 mb-8">
                  {tier.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[#d4d4d8]">
                      <Check className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="https://commandcode.ai/billing"
                target="_blank"
                rel="noreferrer"
                className={`w-full py-2.5 px-4 rounded-lg text-center text-xs font-semibold uppercase tracking-wider transition-all block ${
                  tier.ctaHighlight
                    ? 'bg-white text-black hover:bg-[#e4e4e7] shadow-md'
                    : 'bg-[#18181c] text-white border border-[#2e2e36] hover:bg-[#222228] hover:border-[#42424e]'
                }`}
              >
                {tier.ctaText}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Dashed Separator */}
      <div className="h-[60px] w-[90vw] md:w-[80vw] max-w-[1189px] border-l border-r border-[#222225] custom-dashed" />

      {/* Teams & Enterprise Section */}
      <section className="w-[90vw] md:w-[80vw] max-w-[1189px] border-x border-[#222225] pt-12 pb-16 px-6 sm:px-12 bg-black">
        <div className="text-xs font-mono text-[#71717a] uppercase tracking-wider mb-6">// TEAMS & ORGANIZATIONS</div>
        <h2 className="text-3xl font-bold text-white mb-2">Better, together.</h2>
        <p className="text-[#a1a1aa] text-sm max-w-xl mb-8">
          Equip your engineering organization with team taste profiles, centralized billing, and enterprise-grade security.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {orgTiers.map((tier, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-[#222225] bg-[#0c0c0e] p-8 flex flex-col justify-between hover:border-[#38383e] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                  <div className="flex items-baseline gap-1 font-mono">
                    <span className="text-3xl font-extrabold text-white">
                      {tier.monthlyPrice === 0 ? 'Custom' : `$${tier.monthlyPrice}`}
                    </span>
                    {tier.monthlyPrice > 0 && <span className="text-xs text-[#71717a]">/seat/mo</span>}
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-[#141418] border border-[#222226] mb-5">
                  <p className="text-xs text-[#e4e4e7] font-mono flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#556af3]" />
                    {tier.credits}
                  </p>
                </div>

                <p className="text-sm text-[#a1a1aa] mb-6 leading-relaxed">{tier.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {tier.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-[#d4d4d8]">
                      <Check className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {tier.monthlyPrice === 0 ? (
                <Link
                  to="/contact"
                  className="w-full py-3 px-4 rounded-lg text-center text-xs font-semibold uppercase tracking-wider bg-[#18181c] text-white border border-[#2e2e36] hover:bg-[#222228] transition-all block"
                >
                  {tier.ctaText}
                </Link>
              ) : (
                <a
                  href="https://commandcode.ai/billing"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 px-4 rounded-lg text-center text-xs font-semibold uppercase tracking-wider bg-white text-black hover:bg-[#e4e4e7] transition-all block"
                >
                  {tier.ctaText}
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Dashed Separator */}
      <div className="h-[60px] w-[90vw] md:w-[80vw] max-w-[1189px] border-l border-r border-[#222225] custom-dashed" />

      {/* Side-by-Side Comparison Table */}
      <section className="w-[90vw] md:w-[80vw] max-w-[1189px] border-x border-[#222225] pt-12 pb-16 px-6 sm:px-12 bg-black">
        <div className="text-xs font-mono text-[#556af3] uppercase tracking-wider mb-2">// DETAILED MATRIX</div>
        <h2 className="text-3xl font-bold text-white mb-2">Every plan. Side by side.</h2>
        <p className="text-[#a1a1aa] text-sm max-w-2xl mb-10">
          Every feature, every limit, every model. Exactly what you get on each plan.
        </p>

        <div className="overflow-x-auto rounded-xl border border-[#222225] bg-[#0c0c0e]">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-[#222225] bg-[#111115]">
                <th className="p-4 font-mono text-[#a1a1aa] uppercase font-semibold">Features</th>
                <th className="p-4 font-mono text-white text-center">Go ($1)</th>
                <th className="p-4 font-mono text-[#556af3] text-center font-bold">GOAT ($10)</th>
                <th className="p-4 font-mono text-white text-center">Pro ($20)</th>
                <th className="p-4 font-mono text-white text-center">Max 10× ($100)</th>
                <th className="p-4 font-mono text-white text-center">Teams ($40)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#222225] font-sans">
              {comparisonRows.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-[#131317]/50 transition-colors">
                  <td className="p-4 text-[#e4e4e7] font-medium">{row.feature}</td>
                  <td className="p-4 text-center text-[#a1a1aa] font-mono">{row.go}</td>
                  <td className="p-4 text-center text-white font-mono font-semibold bg-[#556af3]/5">{row.goat}</td>
                  <td className="p-4 text-center text-[#e4e4e7] font-mono">{row.pro}</td>
                  <td className="p-4 text-center text-[#e4e4e7] font-mono">{row.max}</td>
                  <td className="p-4 text-center text-[#e4e4e7] font-mono">{row.teams}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Dashed Separator */}
      <div className="h-[60px] w-[90vw] md:w-[80vw] max-w-[1189px] border-l border-r border-[#222225] custom-dashed" />

      {/* Pricing FAQs */}
      <section className="w-[90vw] md:w-[80vw] max-w-[1189px] border-x border-[#222225] pt-12 pb-20 px-6 sm:px-12 bg-black">
        <div className="text-xs font-mono text-[#556af3] uppercase tracking-wider mb-2">// FAQ</div>
        <h2 className="text-3xl font-bold text-white mb-2">Questions, answered.</h2>
        <p className="text-[#a1a1aa] text-sm max-w-xl mb-10">
          Everything you need to know about billing, model credits, and team management.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-[#222225] bg-[#0c0c0e] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm font-semibold text-white hover:text-[#556af3] transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-[#71717a] shrink-0" />
                    {faq.q}
                  </span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-[#71717a]" /> : <ChevronDown className="w-4 h-4 text-[#71717a]" />}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#a1a1aa] leading-relaxed border-t border-[#1a1a1e]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
