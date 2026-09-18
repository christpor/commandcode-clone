import React, { useState, useEffect } from 'react';
import { 
  Terminal, Sparkles, Sliders, Wrench, Cpu, Brain, Layers, 
  Users, Palette, Laptop, Globe, Check, ArrowRight, Copy
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface SubNavItem {
  id: string;
  label: string;
}

const SUB_NAV_ITEMS: SubNavItem[] = [
  { id: 'cli-experience', label: 'CLI Experience' },
  { id: 'taste', label: 'Taste Learning' },
  { id: 'modes', label: 'Run Modes' },
  { id: 'tools', label: 'Code Tools' },
  { id: 'mcp', label: 'MCP & Skills' },
  { id: 'memory', label: 'Memory & Context' },
  { id: 'models', label: 'Models & Providers' },
  { id: 'collab', label: 'Collaboration' },
  { id: 'design-partner', label: 'Design' },
  { id: 'dx', label: 'Developer Experience' },
  { id: 'studio-web', label: 'Studio Web' },
];

export const FeaturesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('cli-experience');
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(text);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      for (const item of SUB_NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveTab(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -120;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveTab(id);
    }
  };

  return (
    <div className="w-full flex flex-col items-center pb-24">
      {/* Page Hero Header */}
      <section className="w-[90vw] md:w-[80vw] max-w-[1189px] border-x border-[#222225] pt-28 pb-16 px-6 sm:px-12 flex flex-col items-center text-center relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-radial from-[#556af3]/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#222225] bg-[#111113] text-xs font-mono text-[#a1a1aa] mb-6">
          <span className="w-2 h-2 rounded-full bg-[#556af3] animate-pulse" />
          // ARCHITECTURE & SUITE
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white max-w-3xl mb-6">
          Every tool you need. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C7B8F5] via-[#556af3] to-[#8C4EDD]">
            None you don't.
          </span>
        </h1>

        <p className="text-[#a1a1aa] text-lg sm:text-xl max-w-2xl font-sans mb-8">
          A CLI built for speed and taste. An agent that continuously learns how you code, rejects generic slop, and adapts to your real architectural decisions.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <div 
            onClick={() => copyToClipboard('npm i -g @commandcode/cli')}
            className="flex items-center gap-3 px-4 py-2.5 rounded-lg border border-[#222225] bg-[#0c0c0e] font-mono text-sm text-[#e4e4e7] hover:border-[#38383e] transition-colors cursor-pointer group"
          >
            <span className="text-[#556af3]">$</span>
            <span>npm i -g @commandcode/cli</span>
            <button className="text-[#71717a] group-hover:text-white transition-colors">
              {copiedCmd === 'npm i -g @commandcode/cli' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-black font-semibold text-sm hover:bg-[#e4e4e7] transition-all"
          >
            View Pricing <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Sticky Sub-Nav Tab Bar */}
      <div className="sticky top-16 z-40 w-full bg-black/90 backdrop-blur-md border-y border-[#222225]">
        <div className="w-[90vw] md:w-[80vw] max-w-[1189px] mx-auto border-x border-[#222225] px-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 py-3 min-w-max">
            {SUB_NAV_ITEMS.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-1.5 rounded text-xs font-mono transition-all uppercase tracking-wider ${
                    isActive
                      ? 'bg-[#18181b] text-white border border-[#3f3f46] shadow-[0_0_12px_rgba(85,106,243,0.25)]'
                      : 'text-[#71717a] hover:text-[#d4d4d8] hover:bg-[#121215] border border-transparent'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Section 01: CLI Experience */}
      <section id="cli-experience" className="w-[90vw] md:w-[80vw] max-w-[1189px] border-x border-[#222225] pt-20 px-6 sm:px-12 bg-black">
        <div className="flex items-center gap-2 text-xs font-mono text-[#556af3] mb-2 uppercase tracking-widest">
          <Terminal className="w-4 h-4" /> // 01 CLI_EXPERIENCE
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">A CLI built for speed. And taste.</h2>
        <p className="text-[#a1a1aa] max-w-2xl text-base mb-12">
          Crafted to the highest standards. Every interaction feels instant. Every output, crisp. No bloat, no waiting on sluggish web sandboxes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            {
              title: 'One-Shot Setup',
              desc: 'One command and you are in. Install globally and start coding in seconds. Auto-updates and smooth onboarding flow with zero manual configuration.',
              icon: '⚡',
            },
            {
              title: 'Self-Updating',
              desc: 'Silent background upgrades ensure you always have the latest model drivers, context compactors, and security patches without breaking active sessions.',
              icon: '🔄',
            },
            {
              title: 'Beautiful UI and Clean UX',
              desc: 'Terminal rendering crafted with laser precision. ANSI color themes, responsive split diffs, and live syntax highlighting that honors your terminal palette.',
              icon: '✨',
            },
            {
              title: 'Blazing Fast',
              desc: 'Native Rust & TypeScript core. Starts in under 40ms with sub-millisecond AST parsing and token streaming directly into your shell.',
              icon: '🚀',
            },
            {
              title: 'Tiny Footprint',
              desc: 'Consumes less than 45MB RAM while idle. Zero Electron overhead, zero battery drain on laptops during all-night coding marathons.',
              icon: '📦',
            },
            {
              title: 'Multi-Directory Workspace',
              desc: 'Seamlessly coordinate across frontend, backend, microservices, and monorepos in a single coherent context window.',
              icon: '🗂️',
            },
          ].map((card, i) => (
            <div key={i} className="p-6 rounded-xl border border-[#222225] bg-[#0c0c0e] hover:border-[#38383e] transition-colors group">
              <div className="text-2xl mb-4">{card.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#556af3] transition-colors">{card.title}</h3>
              <p className="text-sm text-[#a1a1aa] leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dashed Separator */}
      <div className="h-[60px] w-[90vw] md:w-[80vw] max-w-[1189px] border-l border-r border-[#222225] custom-dashed" />

      {/* Section 02: Taste Learning */}
      <section id="taste" className="w-[90vw] md:w-[80vw] max-w-[1189px] border-x border-[#222225] pt-20 px-6 sm:px-12 bg-black">
        <div className="flex items-center gap-2 text-xs font-mono text-[#556af3] mb-2 uppercase tracking-widest">
          <Sparkles className="w-4 h-4" /> // 02 TASTE_LEARNING
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Your taste. Learned. <code className="font-mono text-[#556af3] bg-[#18181b] px-2 py-0.5 rounded text-2xl sm:text-3xl">`npx taste`</code>
        </h2>
        <p className="text-[#a1a1aa] max-w-2xl text-base mb-12">
          Every accept, reject, and edit becomes a signal. Your naming conventions, architectural boundaries, micro-decisions, and libraries are codified permanently into <code className="text-white">.commandcode/taste/</code>.
        </p>

        {/* Live Taste Code Terminal Simulation */}
        <div className="mb-12 rounded-xl border border-[#222225] bg-[#09090b] overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-[#222225] bg-[#0e0e11]">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 font-mono text-xs text-[#71717a]">bash — npx taste analyze</span>
            </div>
            <span className="text-xs font-mono text-emerald-400">// TASTE VECTOR HARVESTED</span>
          </div>
          <div className="p-6 font-mono text-xs sm:text-sm text-[#e4e4e7] space-y-3">
            <p className="text-[#71717a]">$ npx taste push</p>
            <p className="text-[#556af3]">&gt; Scanning last 48 git commits and 12 agent sessions...</p>
            <div className="pl-4 border-l-2 border-[#556af3] space-y-1 text-[#a1a1aa]">
              <p className="text-white font-semibold">Learned rules written to .commandcode/taste/rules.md:</p>
              <p>+ [Architecture]: Always use React 19 Actions instead of useEffect for mutations.</p>
              <p>+ [Styling]: Strict Tailwind v4 arbitrary tokens with zero inline style tags.</p>
              <p>+ [Security]: Require Zod schema validation on all boundary API inputs.</p>
              <p>+ [Anti-Slop]: Never import generic placeholder icons or mock state libraries.</p>
            </div>
            <p className="text-emerald-400">✓ 4 taste principles synchronized across 3 team members.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {[
            {
              title: 'Continuous Taste Learning',
              desc: 'Every accept, reject, and revision in your terminal feeds directly into your taste model. Your preferences sharpen automatically without prompts.',
            },
            {
              title: 'Push & Pull Taste',
              desc: 'Share coding standards with your entire engineering organization with simple `npx taste push` and `npx taste pull` commands.',
            },
            {
              title: 'Taste Onboarding from Other Agents',
              desc: 'Import your Cursor rules, Claude projects, or custom agent prompts in one click. Command Code converts them into atomic taste vectors.',
            },
            {
              title: 'Taste from Any Repo',
              desc: 'Point Command Code at any pristine production repository to extract its architectural taste and apply it to new greenfield projects.',
            },
          ].map((card, i) => (
            <div key={i} className="p-6 rounded-xl border border-[#222225] bg-[#0c0c0e] hover:border-[#38383e] transition-colors">
              <h3 className="text-base font-semibold text-white mb-2">{card.title}</h3>
              <p className="text-sm text-[#a1a1aa] leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dashed Separator */}
      <div className="h-[60px] w-[90vw] md:w-[80vw] max-w-[1189px] border-l border-r border-[#222225] custom-dashed" />

      {/* Section 03: Run Modes */}
      <section id="modes" className="w-[90vw] md:w-[80vw] max-w-[1189px] border-x border-[#222225] pt-20 px-6 sm:px-12 bg-black">
        <div className="flex items-center gap-2 text-xs font-mono text-[#556af3] mb-2 uppercase tracking-widest">
          <Sliders className="w-4 h-4" /> // 03 RUN_MODES
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">A mode for every moment.</h2>
        <p className="text-[#a1a1aa] max-w-2xl text-base mb-12">
          From conversational pair-programming to automated headless CI execution. Shift gears with a single keystroke.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            {
              name: 'Interactive Mode',
              shortcut: 'Default',
              desc: 'Real-time interactive chat with your AI coding partner. Review diffs line by line, inspect shell output, and steer decisions.',
            },
            {
              name: 'Headless Mode',
              shortcut: 'agy -p "..."',
              desc: 'Execute scripts, refactors, and automated migrations in CI/CD pipelines without human terminal prompts.',
            },
            {
              name: 'Plan Mode',
              shortcut: 'Shift + Tab',
              desc: 'Safe read-only reconnaissance. The agent inspects code, maps dependencies, and drafts a structured plan before touching a file.',
            },
            {
              name: 'Auto-Accept Mode',
              shortcut: 'Ctrl + Y',
              desc: 'Full throttle velocity for high-confidence refactors and repetitive boilerplate code generation.',
            },
            {
              name: 'Background Sandbox',
              shortcut: 'agy --sandbox',
              desc: 'Isolate experimental refactors in ephemeral git worktrees. Test changes without dirtying your active working branch.',
            },
            {
              name: 'Audit Mode',
              shortcut: 'agy audit',
              desc: 'Deep security and quality inspection checking for secret leakage, SQL vulnerabilities, and dead dependencies.',
            },
          ].map((mode, i) => (
            <div key={i} className="p-6 rounded-xl border border-[#222225] bg-[#0c0c0e] hover:border-[#38383e] transition-colors">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-semibold text-white">{mode.name}</h3>
                <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#1c1c21] text-[#a1a1aa] border border-[#2c2c34]">
                  {mode.shortcut}
                </span>
              </div>
              <p className="text-sm text-[#a1a1aa] leading-relaxed">{mode.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dashed Separator */}
      <div className="h-[60px] w-[90vw] md:w-[80vw] max-w-[1189px] border-l border-r border-[#222225] custom-dashed" />

      {/* Section 04: Code Tools */}
      <section id="tools" className="w-[90vw] md:w-[80vw] max-w-[1189px] border-x border-[#222225] pt-20 px-6 sm:px-12 bg-black">
        <div className="flex items-center gap-2 text-xs font-mono text-[#556af3] mb-2 uppercase tracking-widest">
          <Wrench className="w-4 h-4" /> // 04 CODE_TOOLS
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Pro tools. Built in.</h2>
        <p className="text-[#a1a1aa] max-w-2xl text-base mb-12">
          File operations, native shell execution, ripgrep, AST parsing, extended thinking, and agentic code reviews.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            {
              title: 'File Operations & Diffs',
              desc: 'Surgical contiguous file editing, atomic replacements, and unified colored diffs with automated syntax rollback on parse errors.',
            },
            {
              title: 'Shell Execution & PTY',
              desc: 'Full pseudo-terminal shell execution with background process tracking, persistent environment variables, and timeout guards.',
            },
            {
              title: 'Extended Thinking',
              desc: 'Deep reasoning traces for intricate architectural decisions, graph traversals, and complex concurrency debugging.',
            },
            {
              title: 'Agentic /review',
              desc: 'High-severity PR audits, merge conflict analysis, and pre-commit checks with actionable recommendations.',
            },
            {
              title: 'Web Search & Documentation',
              desc: 'Real-time upstream documentation retrieval and query summarization without context bloat.',
            },
            {
              title: 'Todo Tracking & Tasks',
              desc: 'Built-in task lists that survive context compaction so the agent never loses sight of the ultimate goal.',
            },
          ].map((tool, i) => (
            <div key={i} className="p-6 rounded-xl border border-[#222225] bg-[#0c0c0e] hover:border-[#38383e] transition-colors">
              <h3 className="text-base font-semibold text-white mb-2">{tool.title}</h3>
              <p className="text-sm text-[#a1a1aa] leading-relaxed">{tool.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dashed Separator */}
      <div className="h-[60px] w-[90vw] md:w-[80vw] max-w-[1189px] border-l border-r border-[#222225] custom-dashed" />

      {/* Section 05: MCP & Skills */}
      <section id="mcp" className="w-[90vw] md:w-[80vw] max-w-[1189px] border-x border-[#222225] pt-20 px-6 sm:px-12 bg-black">
        <div className="flex items-center gap-2 text-xs font-mono text-[#556af3] mb-2 uppercase tracking-widest">
          <Cpu className="w-4 h-4" /> // 05 MCP_AND_SKILLS
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Hackable. Out of the box.</h2>
        <p className="text-[#a1a1aa] max-w-2xl text-base mb-12">
          Connect external databases, APIs, and microservices via Model Context Protocol (MCP). Extend with custom slash commands and subagents.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {[
            {
              title: 'Model Context Protocol (MCP)',
              desc: 'Plug in PostgreSQL, GitHub, Notion, Supabase, and Sentry via standard JSON-RPC over stdio or SSE transports with automatic tool schema registration.',
            },
            {
              title: 'Agent Skills System',
              desc: 'Modular SKILL.md bundles that teach your agent specific project workflows, domain compliance, and specialized scripts on demand.',
            },
            {
              title: 'Custom Slash Commands',
              desc: 'Define custom interactive workflows like /deploy, /test-suite, or /migrate directly in your project root.',
            },
            {
              title: 'Subagent Delegation',
              desc: 'Spawn isolated read-only research workers or parallel task execution agents without polluting your primary chat context.',
            },
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-xl border border-[#222225] bg-[#0c0c0e] hover:border-[#38383e] transition-colors">
              <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-[#a1a1aa] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dashed Separator */}
      <div className="h-[60px] w-[90vw] md:w-[80vw] max-w-[1189px] border-l border-r border-[#222225] custom-dashed" />

      {/* Section 06: Memory & Context */}
      <section id="memory" className="w-[90vw] md:w-[80vw] max-w-[1189px] border-x border-[#222225] pt-20 px-6 sm:px-12 bg-black">
        <div className="flex items-center gap-2 text-xs font-mono text-[#556af3] mb-2 uppercase tracking-widest">
          <Brain className="w-4 h-4" /> // 06 MEMORY_AND_CONTEXT
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">It remembers. So you don't have to.</h2>
        <p className="text-[#a1a1aa] max-w-2xl text-base mb-12">
          Project instructions, coding guidelines, and architecture notes. Remembered, compacted, and applied across sessions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              title: 'AGENTS.md Project Memory',
              desc: 'Store team conventions, security requirements, and directory layouts in markdown. Automatically loaded at startup.',
            },
            {
              title: 'Session Checkpoints & Rewind',
              desc: 'Accidental edit? Hit Esc to rewind conversation steps or rollback git changes to any previous checkpoint in time.',
            },
            {
              title: 'Lossless Context Compaction',
              desc: 'Intelligently summarize older conversation turns while preserving crucial code snippets, token budgets, and active tasks.',
            },
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-xl border border-[#222225] bg-[#0c0c0e] hover:border-[#38383e] transition-colors">
              <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-[#a1a1aa] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dashed Separator */}
      <div className="h-[60px] w-[90vw] md:w-[80vw] max-w-[1189px] border-l border-r border-[#222225] custom-dashed" />

      {/* Section 07: Models & Providers */}
      <section id="models" className="w-[90vw] md:w-[80vw] max-w-[1189px] border-x border-[#222225] pt-20 px-6 sm:px-12 bg-black">
        <div className="flex items-center gap-2 text-xs font-mono text-[#556af3] mb-2 uppercase tracking-widest">
          <Layers className="w-4 h-4" /> // 07 MODELS_AND_PROVIDERS
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Any frontier model. Any provider. Zero lock-in.</h2>
        <p className="text-[#a1a1aa] max-w-2xl text-base mb-12">
          Anthropic, OpenAI, DeepSeek, Google Gemini, Qwen, MiniMax, Kimi, and local Ollama instances. Switch with zero vendor lock-in.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {[
            { name: 'Claude 3.7 Sonnet', org: 'Anthropic', badge: 'Recommended' },
            { name: 'DeepSeek-R1', org: 'DeepSeek', badge: 'Reasoning' },
            { name: 'Qwen 2.5 Coder 32B', org: 'Alibaba Cloud', badge: 'Open Weights' },
            { name: 'GPT-4.5 / o3-mini', org: 'OpenAI', badge: 'Fast Reasoning' },
            { name: 'Gemini 2.0 Flash', org: 'Google', badge: 'Multimodal' },
            { name: 'MiniMax-01', org: 'MiniMax', badge: 'High Throughput' },
            { name: 'Moonshot Kimi K1.5', org: 'Moonshot AI', badge: 'Long Context' },
            { name: 'Local Ollama / vLLM', org: 'Self-Hosted', badge: 'Air-Gapped' },
          ].map((m, i) => (
            <div key={i} className="p-4 rounded-xl border border-[#222225] bg-[#0c0c0e] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#71717a] block mb-1">{m.org}</span>
                <h4 className="text-sm font-semibold text-white mb-3">{m.name}</h4>
              </div>
              <span className="inline-block self-start text-[10px] font-mono px-2 py-0.5 rounded bg-[#18181c] text-[#556af3] border border-[#2c2c36]">
                {m.badge}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Dashed Separator */}
      <div className="h-[60px] w-[90vw] md:w-[80vw] max-w-[1189px] border-l border-r border-[#222225] custom-dashed" />

      {/* Section 08: Collaboration */}
      <section id="collab" className="w-[90vw] md:w-[80vw] max-w-[1189px] border-x border-[#222225] pt-20 px-6 sm:px-12 bg-black">
        <div className="flex items-center gap-2 text-xs font-mono text-[#556af3] mb-2 uppercase tracking-widest">
          <Users className="w-4 h-4" /> // 08 COLLABORATION
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Even better, together.</h2>
        <p className="text-[#a1a1aa] max-w-2xl text-base mb-12">
          Share session transcripts via web URLs, post PR diffs to GitHub, and sync team taste profiles across your engineering org.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              title: '/share Session Links',
              desc: 'Generate secure web permalinks for any coding session to share architecture decisions and bug fixes with teammates.',
            },
            {
              title: 'Team Taste Sync',
              desc: 'One developer solves an tricky API pattern; `npx taste push` instantly propagates the best practice to all 50 engineers.',
            },
            {
              title: 'Automated PR Context',
              desc: 'Command Code generates crisp pull request descriptions, risk evaluations, and verification steps directly from the session log.',
            },
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-xl border border-[#222225] bg-[#0c0c0e] hover:border-[#38383e] transition-colors">
              <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-[#a1a1aa] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dashed Separator */}
      <div className="h-[60px] w-[90vw] md:w-[80vw] max-w-[1189px] border-l border-r border-[#222225] custom-dashed" />

      {/* Section 09: Design Partner */}
      <section id="design-partner" className="w-[90vw] md:w-[80vw] max-w-[1189px] border-x border-[#222225] pt-20 px-6 sm:px-12 bg-black">
        <div className="flex items-center gap-2 text-xs font-mono text-[#556af3] mb-2 uppercase tracking-widest">
          <Palette className="w-4 h-4" /> // 09 DESIGN_PARTNER
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Your design partner. <code className="font-mono text-[#556af3] bg-[#18181b] px-2 py-0.5 rounded text-2xl sm:text-3xl">`/design`</code>
        </h2>
        <p className="text-[#a1a1aa] max-w-2xl text-base mb-12">
          One command, seventeen modes. Audits, recolors, retypesets, and reships your interface straight from your terminal.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              title: 'Design a Landing Page',
              desc: '`/design create` reads your brief and taste, pulls elite typography & design systems, and ships pristine React components without markdown mockups.',
            },
            {
              title: 'Recolor & Typeset Systems',
              desc: 'Harmonize your color tokens, font hierarchy, and spacing curves across all components in one surgical pass.',
            },
            {
              title: 'Seventeen Design Modes',
              desc: 'Switch between brutalist, high-density industrial, minimal SaaS, and dark cyber modes instantly with automated contrast audits.',
            },
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-xl border border-[#222225] bg-[#0c0c0e] hover:border-[#38383e] transition-colors">
              <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-[#a1a1aa] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dashed Separator */}
      <div className="h-[60px] w-[90vw] md:w-[80vw] max-w-[1189px] border-l border-r border-[#222225] custom-dashed" />

      {/* Section 10: Developer Experience */}
      <section id="dx" className="w-[90vw] md:w-[80vw] max-w-[1189px] border-x border-[#222225] pt-20 px-6 sm:px-12 bg-black">
        <div className="flex items-center gap-2 text-xs font-mono text-[#556af3] mb-2 uppercase tracking-widest">
          <Laptop className="w-4 h-4" /> // 10 DEVELOPER_EXPERIENCE
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Until coding feels like thinking.</h2>
        <p className="text-[#a1a1aa] max-w-2xl text-base mb-12">
          Keyboard shortcuts, IDE integration, fine-grained permissions, and live diagnostics designed to keep you in pure flow.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { title: 'Keyboard Shortcuts', desc: 'Esc to rewind, Shift+Tab to toggle modes, Alt+P for model picker, Ctrl+O for tool traces.' },
            { title: 'IDE Integration', desc: 'Pairs with VS Code, Cursor, Neovim, and JetBrains. Jump from terminal directly to cursor line.' },
            { title: 'Permissions & Trust', desc: 'Granular sandbox rules for shell commands, network egress, and filesystem writes.' },
            { title: 'Live Diagnostics', desc: 'Instant feedback on LSP errors, lint issues, and type checking before changes are committed.' },
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-xl border border-[#222225] bg-[#0c0c0e] hover:border-[#38383e] transition-colors">
              <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-[#a1a1aa] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dashed Separator */}
      <div className="h-[60px] w-[90vw] md:w-[80vw] max-w-[1189px] border-l border-r border-[#222225] custom-dashed" />

      {/* Section 11: Studio Web */}
      <section id="studio-web" className="w-[90vw] md:w-[80vw] max-w-[1189px] border-x border-[#222225] pt-20 pb-20 px-6 sm:px-12 bg-black">
        <div className="flex items-center gap-2 text-xs font-mono text-[#556af3] mb-2 uppercase tracking-widest">
          <Globe className="w-4 h-4" /> // 11 STUDIO_WEB
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Studio — your Command Code control plane.</h2>
        <p className="text-[#a1a1aa] max-w-2xl text-base mb-12">
          Manage usage, billing, taste packages, and organization settings from the Command Code Studio web dashboard.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { title: 'Real-Time Usage Dashboard', desc: 'Track token consumption, cost breakdown per model, and session duration in real time.' },
            { title: 'API Key Management', desc: 'Create scoped API tokens for CI/CD pipelines, staging environments, and team members.' },
            { title: 'Usage & Credits Pool', desc: 'Top up credits, assign monthly spending caps, and monitor team budget allocations.' },
            { title: 'Taste Package Library', desc: 'Browse and fork community taste profiles or publish your company standards.' },
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-xl border border-[#222225] bg-[#0c0c0e] hover:border-[#38383e] transition-colors">
              <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-[#a1a1aa] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="rounded-2xl border border-[#222225] bg-gradient-to-b from-[#111115] to-[#0a0a0c] p-8 sm:p-12 text-center flex flex-col items-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to code with your taste?</h3>
          <p className="text-[#a1a1aa] max-w-xl text-sm sm:text-base mb-8">
            Install globally, authenticate in seconds, and experience what an agent that truly understands your coding standards feels like.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/pricing"
              className="px-6 py-3 rounded-lg bg-white text-black font-semibold text-sm hover:bg-[#e4e4e7] transition-all"
            >
              Get Started with GOAT Plan
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-lg border border-[#222225] bg-[#141418] text-white font-medium text-sm hover:border-[#38383e] transition-all"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
