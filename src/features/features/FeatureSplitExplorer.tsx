import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface FeatureTab {
  id: string;
  title: string;
  headline: string;
  description: string;
  terminalCommand: string;
  terminalLogs: Array<{ type: 'cmd' | 'write' | 'push' | 'pull' | 'success'; text: string }>;
}

const FEATURE_TABS: FeatureTab[] = [
  {
    id: '01',
    title: 'Your coding taste `npx taste`',
    headline: 'Continuous learning. Every accept, reject, and edit.',
    description: 'Command Code observes your work, synthesizes project skills, and keeps you in flow without writing system prompts.',
    terminalCommand: 'npx taste init',
    terminalLogs: [
      { type: 'cmd', text: 'npx taste scan --repo' },
      { type: 'write', text: 'PARSED 148 commits & pull requests' },
      { type: 'push', text: 'GEN taste-profile.json (99.4% confidence)' },
      { type: 'success', text: '✓ coding taste distilled into .taste/rules' }
    ]
  },
  {
    id: '02',
    title: 'Interactive, headless, sandbox agents',
    headline: 'A mode for every moment. Interactive CLI, background yolo.',
    description: 'Run interactively with human approval gates, or unleash headless background workers inside isolated sandboxes.',
    terminalCommand: 'command-code -p "migrate legacy routes" --yolo',
    terminalLogs: [
      { type: 'cmd', text: 'SPAWN background sandbox #4829' },
      { type: 'write', text: 'REFACTOR 24 files to React 19 standards' },
      { type: 'write', text: 'PASS 48/48 unit test gates' },
      { type: 'success', text: '✓ pull request drafted and verified' }
    ]
  },
  {
    id: '03',
    title: 'Skills, reviews, bundled agentic tools',
    headline: 'Best in class tools. Built in.',
    description: 'Read and shell tools that lead the token efficiency frontier. File ops, grep, extended thinking. The full stack, in your hands.',
    terminalCommand: 'Replace all var declarations with const/let',
    terminalLogs: [
      { type: 'write', text: 'WRITE frontend/taste.md' },
      { type: 'write', text: 'WRITE design/taste.md' },
      { type: 'cmd', text: 'npx taste push' },
      { type: 'push', text: 'PUSH org/taste' },
      { type: 'success', text: '✓ 12 teammates synced' },
      { type: 'cmd', text: 'npx taste pull org/taste' },
      { type: 'pull', text: 'PULL 8 skills imported' },
      { type: 'success', text: '✓ team taste synced' }
    ]
  },
  {
    id: '04',
    title: 'Context engineering with /agents, /memory',
    headline: 'It remembers. So you don\'t have to.',
    description: 'Carry conventions across sessions with zero amnesia. Project-level memory and domain agent routing out of the box.',
    terminalCommand: '/agents load senior-reviewer',
    terminalLogs: [
      { type: 'cmd', text: 'ATTACH persistent memory context' },
      { type: 'write', text: 'LOAD .context/AGENT.md rules' },
      { type: 'success', text: '✓ memory state synced (0 prompt tokens leaked)' }
    ]
  },
  {
    id: '05',
    title: 'Hackable /skills, /mcp servers, plugins',
    headline: 'Extensible architecture from day one.',
    description: 'Bring any MCP server, custom slash commands, or specialized LLM backends without vendor lock-in.',
    terminalCommand: 'command-code mcp add postgres-db',
    terminalLogs: [
      { type: 'cmd', text: 'MCP CONNECT stdio://localhost:5432' },
      { type: 'write', text: 'DISCOVER 14 tool schemas' },
      { type: 'success', text: '✓ tool calling repaired for open models' }
    ]
  },
  {
    id: '06',
    title: 'Even better, together with /share',
    headline: 'Team taste registries and session replay.',
    description: 'Share entire debugging sessions and push proven refactor patterns directly to your engineering team.',
    terminalCommand: '/share session --team',
    terminalLogs: [
      { type: 'cmd', text: 'ENCRYPT audit log payload' },
      { type: 'push', text: 'BROADCAST taste update to @team/frontend' },
      { type: 'success', text: '✓ session published to team replay hub' }
    ]
  },
  {
    id: '07',
    title: 'One command, seventeen design modes',
    headline: 'Your automated design and UI partner.',
    description: 'Audits, recolors, cleans visual slop, and guarantees 100% pixel-accurate components across every viewport.',
    terminalCommand: 'command-code design --anti-slop',
    terminalLogs: [
      { type: 'cmd', text: 'INSPECT DOM container bounds' },
      { type: 'write', text: 'PURGE 18 emoji placeholders' },
      { type: 'success', text: '✓ 100-point visual parity score attained' }
    ]
  }
];

export const FeatureSplitExplorer: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(2); // default to 03
  const current = FEATURE_TABS[activeIdx];

  return (
    <section className="w-[90vw] md:w-[80vw] max-w-[1189px] mx-auto border border-[#222225] border-t-0 border-b-0 bg-black">
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#222225]">
        {/* Left Column: Feature List */}
        <div className="flex flex-col">
          {/* Top Cell */}
          <div className="p-6 sm:p-8 border-b border-[#222225]">
            <p className="font-mono text-sm sm:text-base text-neutral-400">
              // best coding agent for open models.
            </p>
          </div>

          {/* Second Cell */}
          <div className="p-6 sm:p-8 border-b border-[#222225]">
            <h3 className="text-base sm:text-lg text-neutral-200 font-medium leading-relaxed font-sans">
              Ships. Fixes. Tests. Refactors. Learns you, all the while.
            </h3>
          </div>

          {/* Interactive Feature Rows */}
          <div className="divide-y divide-[#222225]">
            {FEATURE_TABS.map((tab, idx) => {
              const isActive = activeIdx === idx;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={`w-full p-5 sm:p-6 text-left flex items-center justify-between transition-colors group cursor-pointer ${
                    isActive ? 'bg-neutral-900/60' : 'hover:bg-neutral-950'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-neutral-600 group-hover:text-neutral-400">
                      {tab.id}
                    </span>
                    <span className={`text-sm sm:text-base font-medium font-sans ${
                      isActive ? 'text-white' : 'text-neutral-400 group-hover:text-neutral-200'
                    }`}>
                      {tab.title}
                    </span>
                  </div>

                  {isActive ? (
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-black text-xs font-semibold shadow-sm">
                      <span>Explore</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Live Feature Preview & Terminal */}
        <div className="flex flex-col justify-between p-6 sm:p-10 bg-neutral-950/40">
          {/* Top Action Header */}
          <div className="flex items-center justify-end gap-3 mb-8">
            <a
              href="https://commandcode.ai/features"
              target="_blank"
              rel="noreferrer"
              className="rounded-[100px] bg-white text-black px-5 py-2 text-xs sm:text-sm font-semibold hover:bg-neutral-200 transition-colors shadow-sm"
            >
              Explore all features &gt;
            </a>
            <a
              href="https://commandcode.ai/docs"
              target="_blank"
              rel="noreferrer"
              className="rounded-[100px] bg-black border border-[#222225] hover:border-neutral-700 text-white px-5 py-2 text-xs sm:text-sm font-medium transition-colors"
            >
              Docs
            </a>
          </div>

          {/* Description Callout */}
          <div className="mb-8">
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans">
              <span className="text-white font-bold">// {current.headline} </span>
              {current.description}
            </p>
          </div>

          {/* Terminal Window Mockup */}
          <div className="w-full rounded-xl border border-[#2a244d] bg-[#120f26]/90 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm my-auto">
            {/* Terminal Top Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#181433] border-b border-[#2a244d]/80 text-neutral-400">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                <span className="text-xs text-neutral-400 ml-2">~/project</span>
              </div>
            </div>

            {/* Terminal Body with Execution Logs */}
            <div className="p-5 space-y-3 text-neutral-300">
              <div className="flex items-center gap-2 text-purple-300">
                <span className="text-neutral-500">&gt;</span>
                <span className="text-white">{current.terminalCommand}</span>
              </div>

              <div className="space-y-2 pt-2 border-t border-purple-900/30">
                {current.terminalLogs.map((log, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs">
                    {log.type === 'write' && (
                      <span className="px-1.5 py-0.5 rounded bg-blue-900/40 text-blue-300 font-semibold uppercase text-[10px]">
                        WRITE
                      </span>
                    )}
                    {log.type === 'push' && (
                      <span className="px-1.5 py-0.5 rounded bg-purple-900/50 text-purple-300 font-semibold uppercase text-[10px]">
                        PUSH
                      </span>
                    )}
                    {log.type === 'pull' && (
                      <span className="px-1.5 py-0.5 rounded bg-indigo-900/50 text-indigo-300 font-semibold uppercase text-[10px]">
                        PULL
                      </span>
                    )}
                    {log.type === 'cmd' && (
                      <span className="text-neutral-500">&gt;</span>
                    )}
                    <span className={log.type === 'success' ? 'text-emerald-400' : 'text-neutral-300'}>
                      {log.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Terminal Action Bar */}
          <div className="flex items-center justify-end gap-3 mt-8 pt-4">
            <a
              href="https://commandcode.ai/signup"
              className="px-5 py-2.5 rounded-[100px] bg-[#2e1b9c] text-white font-mono text-xs hover:bg-[#3924b8] transition-colors"
            >
              npm i -g command-code
            </a>
            <a
              href="https://commandcode.ai/docs"
              className="px-5 py-2.5 rounded-[100px] bg-black border border-[#222225] text-neutral-300 hover:text-white font-sans text-xs transition-colors"
            >
              Docs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
