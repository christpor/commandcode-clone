import React from 'react';
import { Sparkles, Terminal, Flame, Target, Heart, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  const corePrinciples = [
    {
      title: 'Continuous Learning',
      desc: 'Learns from everything you do. Sharper every session. Never resets. Every accepted diff, rejected snippet, and refactored function refines your local taste model.',
      icon: '🧠',
    },
    {
      title: 'Evolving Taste',
      desc: 'An agent that adapts to you. Not the other way around. Your architectural boundaries, preferred libraries, and naming conventions become the default.',
      icon: '✨',
    },
    {
      title: 'Ships Like You Would',
      desc: 'Code that fits your existing repository architecture and style guides. No unrequested dependency additions. Zero generic AI slop.',
      icon: '⚡',
    },
    {
      title: '10× Real Speed',
      desc: 'Native Rust & TypeScript terminal execution. Sub-millisecond AST traversals, instant local completions, and zero browser sandbox lag.',
      icon: '🚀',
    },
  ];

  const operatingValues = [
    {
      name: 'Urgency',
      sub: 'Speed is the moat',
      desc: 'We move fast. Faster than the competition. Every day spent hesitating is a day lost to average tools. We prioritize quick, decisive iteration.',
      icon: Flame,
    },
    {
      name: 'Rigor',
      sub: 'No shortcuts on quality',
      desc: 'Find the best way. Make it happen today. We run strict automated tests, rigorous code reviews, and treat developer productivity as holy.',
      icon: Target,
    },
    {
      name: 'Give a Shit',
      sub: 'Care about the craft',
      desc: 'Care deeply about the craft. Care about the developer. We hire, collaborate with, and champion engineers who take pride in their work.',
      icon: Heart,
    },
    {
      name: 'Customer-Driven Development',
      sub: 'Earn developer trust',
      desc: 'Build what devs actually need in production. Earn their trust every single day with rock-solid CLI stability and transparent pricing.',
      icon: Award,
    },
    {
      name: 'Ship. Daily.',
      sub: 'Make ship happen',
      desc: "If we're not shipping, we're not breathing. Real code running in users' terminals today beats polished roadmaps for next quarter.",
      icon: Terminal,
    },
    {
      name: 'Ownership & Action',
      sub: 'Done beats perfect',
      desc: 'Own the problem from root to branch. Building is like coming down a mountain — you only see two or three steps at a time. You iterate, get feedback, and ship.',
      icon: Sparkles,
    },
  ];

  return (
    <div className="w-full flex flex-col items-center pb-24">
      {/* Hero */}
      <section className="w-[90vw] md:w-[80vw] max-w-[1189px] border-x border-[#222225] pt-28 pb-16 px-6 sm:px-12 flex flex-col items-center text-center relative overflow-hidden bg-black">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#222225] bg-[#111113] text-xs font-mono text-[#a1a1aa] mb-6">
          <span className="w-2 h-2 rounded-full bg-[#556af3]" />
          // ABOUT COMMAND CODE
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white max-w-4xl mb-6">
          Building the best developer experience for{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C7B8F5] via-[#556af3] to-[#8C4EDD]">
            agentic coding.
          </span>
        </h1>

        <p className="text-[#a1a1aa] text-lg sm:text-xl max-w-3xl font-sans mb-12">
          Command Code is the first coding agent that continuously learns your taste. Code 10× faster. Review 2× quicker. Ship with 5× fewer bugs.
        </p>

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl">
          {[
            { metric: '10×', label: 'Faster Coding Velocity', desc: 'From architectural prompt to production diff' },
            { metric: '2×', label: 'Quicker PR Reviews', desc: 'Automated context evaluation & agentic review' },
            { metric: '5×', label: 'Fewer Runtime Bugs', desc: 'Continuous taste memory prevents repeat errors' },
          ].map((stat, i) => (
            <div key={i} className="p-6 rounded-xl border border-[#222225] bg-[#0c0c0e] text-center">
              <div className="text-4xl sm:text-5xl font-extrabold font-mono text-white mb-2">{stat.metric}</div>
              <div className="text-xs font-semibold text-[#556af3] font-mono uppercase tracking-wider mb-1">{stat.label}</div>
              <div className="text-xs text-[#71717a]">{stat.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Dashed Separator */}
      <div className="h-[60px] w-[90vw] md:w-[80vw] max-w-[1189px] border-l border-r border-[#222225] custom-dashed" />

      {/* Core Principles */}
      <section className="w-[90vw] md:w-[80vw] max-w-[1189px] border-x border-[#222225] pt-16 pb-16 px-6 sm:px-12 bg-black">
        <div className="text-xs font-mono text-[#556af3] uppercase tracking-wider mb-2">// PHILOSOPHY</div>
        <h2 className="text-3xl font-bold text-white mb-3">The next frontier in AI coding.</h2>
        <p className="text-[#a1a1aa] text-sm max-w-2xl mb-12">
          Generic chat models produce generic boilerplate. Command Code studies your engineering habits to write code you would actually approve.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {corePrinciples.map((item, i) => (
            <div key={i} className="p-8 rounded-2xl border border-[#222225] bg-[#0c0c0e] hover:border-[#38383e] transition-colors">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-sm text-[#a1a1aa] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dashed Separator */}
      <div className="h-[60px] w-[90vw] md:w-[80vw] max-w-[1189px] border-l border-r border-[#222225] custom-dashed" />

      {/* Operating Values */}
      <section className="w-[90vw] md:w-[80vw] max-w-[1189px] border-x border-[#222225] pt-16 pb-16 px-6 sm:px-12 bg-black">
        <div className="text-xs font-mono text-[#556af3] uppercase tracking-wider mb-2">// CULTURE & DNA</div>
        <h2 className="text-3xl font-bold text-white mb-3">The principles that drive us.</h2>
        <p className="text-[#a1a1aa] text-sm max-w-2xl mb-12">
          High agency. Developer first. Shipping daily. These are the non-negotiables that guide how we build Command Code.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {operatingValues.map((val, i) => {
            const Icon = val.icon;
            return (
              <div key={i} className="p-6 rounded-xl border border-[#222225] bg-[#0c0c0e] hover:border-[#38383e] transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#141418] border border-[#222226] flex items-center justify-center text-[#556af3] mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-1">{val.name}</h3>
                <div className="text-xs font-mono text-[#71717a] uppercase tracking-wider mb-3">// {val.sub}</div>
                <p className="text-xs text-[#a1a1aa] leading-relaxed">{val.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Dashed Separator */}
      <div className="h-[60px] w-[90vw] md:w-[80vw] max-w-[1189px] border-l border-r border-[#222225] custom-dashed" />

      {/* Backed by Investors */}
      <section className="w-[90vw] md:w-[80vw] max-w-[1189px] border-x border-[#222225] pt-16 pb-20 px-6 sm:px-12 bg-black text-center">
        <div className="text-xs font-mono text-[#556af3] uppercase tracking-wider mb-2">// BACKERS</div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Backed by incredible investors, founders, and operators.
        </h2>
        <p className="text-[#a1a1aa] text-sm max-w-2xl mx-auto mb-12">
          Supported by builders from OpenAI, Stripe, GitHub, Vercel, Supabase, and leading AI research labs.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
          {[
            'Founders Fund Scout',
            'AI Grant',
            'Open Source Collective',
            'Benchmark Angels',
            'Sequoia Scout',
            'Elad Gil Network',
            'Khosla Ventures Scout',
            'Y Combinator Alumni',
          ].map((item, i) => (
            <div
              key={i}
              className="p-4 rounded-lg border border-[#222225] bg-[#0c0c0e] text-xs font-mono text-[#a1a1aa] flex items-center justify-center text-center"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="rounded-2xl border border-[#222225] bg-gradient-to-b from-[#111115] to-[#0a0a0c] p-8 sm:p-12 text-center flex flex-col items-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">Join us on the journey.</h3>
          <p className="text-[#a1a1aa] max-w-lg text-sm mb-6">
            We are looking for exceptional engineers who give a shit about the developer experience.
          </p>
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-lg bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#e4e4e7] transition-all flex items-center gap-2"
            >
              Get in Touch <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/features"
              className="px-5 py-2.5 rounded-lg border border-[#222225] bg-[#141418] text-white font-medium text-xs uppercase tracking-wider hover:border-[#38383e] transition-all"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
