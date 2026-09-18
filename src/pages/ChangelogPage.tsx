import React, { useState } from 'react';
import { Terminal, Search, Copy, Check } from 'lucide-react';

interface ReleaseItem {
  type: 'FEAT' | 'FIX' | 'PERF' | 'CHORE';
  text: string;
}

interface Release {
  version: string;
  date: string;
  month: string;
  component: 'CLI' | 'DESKTOP' | 'STUDIO' | 'API';
  summary: string;
  items: ReleaseItem[];
}

const RELEASES: Release[] = [
  {
    version: 'v1.56.1',
    date: 'Sep 18, 2026',
    month: 'September 2026',
    component: 'CLI',
    summary: 'BYOK host session identifier forwarding & telemetry isolation',
    items: [
      { type: 'FEAT', text: 'Send session id to BYOK hosts that require it for trace correlation' },
      { type: 'FIX', text: 'Prevent token usage overcounting when switching local Ollama endpoints mid-session' },
    ],
  },
  {
    version: 'v1.56.0',
    date: 'Sep 18, 2026',
    month: 'September 2026',
    component: 'CLI',
    summary: 'New Model: Qwen 3.8 Omni Flash with native audio/video reasoning',
    items: [
      { type: 'FEAT', text: 'Add Qwen 3.8 Omni Flash to global model selector with fast token streaming' },
      { type: 'PERF', text: 'AST parse cache optimization reducing startup latency to 38ms' },
      { type: 'FEAT', text: 'Add auto-reconnect fallback for unstable WebSocket connections' },
    ],
  },
  {
    version: 'v1.55.1',
    date: 'Sep 18, 2026',
    month: 'September 2026',
    component: 'DESKTOP',
    summary: 'Desktop telemetry isolation and multi-trace independence',
    items: [
      { type: 'FIX', text: 'Desktop telemetry reporting on its own service without IPC blocking' },
      { type: 'FIX', text: 'Keep each chat telemetry on its own trace to isolate concurrent tabs' },
      { type: 'PERF', text: 'Memory leak patch for long-running Electron desktop worker processes' },
    ],
  },
  {
    version: 'v1.55.0',
    date: 'Sep 17, 2026',
    month: 'September 2026',
    component: 'CLI',
    summary: 'Taste Learning Vector v2 and deep Monorepo context indexing',
    items: [
      { type: 'FEAT', text: 'Taste Vector v2: multi-directory heuristics stored in .commandcode/taste/' },
      { type: 'FEAT', text: 'Added `npx taste push` and `npx taste pull` for team sync' },
      { type: 'FIX', text: 'Resolved false positive diff warnings when editing binary asset pointers' },
    ],
  },
  {
    version: 'v1.54.2',
    date: 'Sep 16, 2026',
    month: 'September 2026',
    component: 'CLI',
    summary: 'DeepSeek-R1 extended thinking buffer improvements',
    items: [
      { type: 'PERF', text: 'Streaming token buffer decompression for 64k token thinking traces' },
      { type: 'FIX', text: 'Correctly format ANSI color codes on Windows Terminal and PowerShell 7' },
    ],
  },
  {
    version: 'v1.54.0',
    date: 'Sep 13, 2026',
    month: 'September 2026',
    component: 'STUDIO',
    summary: 'Organization credits pooling and RBAC permission toggles',
    items: [
      { type: 'FEAT', text: 'Pooled organization credits with customizable monthly team member limits' },
      { type: 'FEAT', text: 'New Studio billing invoice auto-generation for finance departments' },
      { type: 'FIX', text: 'Fixed OAuth token refresh edge-case when idling over 14 days' },
    ],
  },
  {
    version: 'v1.53.0',
    date: 'Aug 29, 2026',
    month: 'August 2026',
    component: 'CLI',
    summary: 'Custom slash commands architecture and MCP 1.2 stdio support',
    items: [
      { type: 'FEAT', text: 'Define custom slash commands in project root with executable YAML scripts' },
      { type: 'FEAT', text: 'MCP 1.2 specification compatibility with dynamic tool parameter schemas' },
      { type: 'FIX', text: 'Subagent process reaper ensuring zero orphaned background PID instances' },
    ],
  },
  {
    version: 'v1.52.0',
    date: 'Aug 14, 2026',
    month: 'August 2026',
    component: 'CLI',
    summary: 'Agentic /review command for automated git diff audits',
    items: [
      { type: 'FEAT', text: 'Added `/review` command with severity-tiered PR summaries and security warnings' },
      { type: 'PERF', text: 'Reduced memory footprint during ripgrep searches on repos with >100,000 files' },
    ],
  },
];

export const ChangelogPage: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('ALL');
  const [selectedMonth, setSelectedMonth] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedVersion, setCopiedVersion] = useState<string | null>(null);

  const months = ['ALL', 'September 2026', 'August 2026'];
  const tags = ['ALL', 'FEAT', 'FIX', 'PERF'];

  const filteredReleases = RELEASES.filter((rel) => {
    if (selectedMonth !== 'ALL' && rel.month !== selectedMonth) return false;
    if (selectedTag !== 'ALL' && !rel.items.some((it) => it.type === selectedTag)) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchVersion = rel.version.toLowerCase().includes(q);
      const matchSummary = rel.summary.toLowerCase().includes(q);
      const matchItems = rel.items.some((it) => it.text.toLowerCase().includes(q));
      if (!matchVersion && !matchSummary && !matchItems) return false;
    }
    return true;
  });

  const copyAnchor = (ver: string) => {
    const url = `${window.location.origin}/changelog#${ver}`;
    navigator.clipboard.writeText(url);
    setCopiedVersion(ver);
    setTimeout(() => setCopiedVersion(null), 2000);
  };

  return (
    <div className="w-full flex flex-col items-center pb-24">
      {/* Hero */}
      <section className="w-[90vw] md:w-[80vw] max-w-[1189px] border-x border-[#222225] pt-28 pb-16 px-6 sm:px-12 flex flex-col items-center text-center relative overflow-hidden bg-black">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#222225] bg-[#111113] text-xs font-mono text-[#a1a1aa] mb-6">
          <Terminal className="w-3.5 h-3.5 text-[#556af3]" />
          // RELEASES & UPDATES
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white max-w-3xl mb-6">
          Changelog. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C7B8F5] via-[#556af3] to-[#8C4EDD]">
            Shipped daily.
          </span>
        </h1>

        <p className="text-[#a1a1aa] text-lg sm:text-xl max-w-2xl font-sans mb-10">
          New features, engine speedups, model integrations, and fixes. Every commit tracked transparently.
        </p>

        {/* Search & Filter Bar */}
        <div className="w-full max-w-2xl flex flex-col sm:flex-row gap-3 items-center">
          <div className="relative w-full">
            <Search className="w-4 h-4 text-[#71717a] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search changes, models, or versions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#222225] bg-[#0c0c0e] text-xs sm:text-sm text-white placeholder-[#71717a] focus:outline-none focus:border-[#556af3] transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Filter Tabs Bar */}
      <div className="w-full bg-[#08080a] border-y border-[#222225]">
        <div className="w-[90vw] md:w-[80vw] max-w-[1189px] mx-auto border-x border-[#222225] px-6 sm:px-12 py-3 flex flex-wrap items-center justify-between gap-4">
          {/* Month Filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            <span className="text-xs font-mono text-[#71717a] mr-2">Month:</span>
            {months.map((m) => (
              <button
                key={m}
                onClick={() => setSelectedMonth(m)}
                className={`px-2.5 py-1 rounded text-xs font-mono transition-all ${
                  selectedMonth === m
                    ? 'bg-[#18181c] text-white border border-[#383842]'
                    : 'text-[#71717a] hover:text-[#d4d4d8]'
                }`}
              >
                {m}
              </button>
            ))}
          </div>

          {/* Tag Filter */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-mono text-[#71717a] mr-2">Tag:</span>
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTag(t)}
                className={`px-2 py-0.5 rounded text-[11px] font-mono transition-all ${
                  selectedTag === t
                    ? 'bg-[#556af3] text-white font-semibold'
                    : 'text-[#71717a] hover:text-white bg-[#111114] border border-[#222225]'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Releases Timeline List */}
      <section className="w-[90vw] md:w-[80vw] max-w-[1189px] border-x border-[#222225] pt-12 pb-24 px-6 sm:px-12 bg-black space-y-12">
        {filteredReleases.length === 0 ? (
          <div className="text-center py-24 text-[#71717a] font-mono text-sm">
            No releases found matching your search and filter criteria.
          </div>
        ) : (
          filteredReleases.map((rel) => (
            <div
              key={rel.version}
              id={rel.version}
              className="rounded-2xl border border-[#222225] bg-[#0c0c0e] p-6 sm:p-8 hover:border-[#33333a] transition-all group relative"
            >
              {/* Header Info */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4 border-b border-[#1c1c20] pb-4">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-[#141418] text-[#556af3] border border-[#222228]">
                    {rel.version}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#1a1a20] text-[#a1a1aa] border border-[#26262e]">
                    {rel.component}
                  </span>
                  <span className="text-xs font-mono text-[#71717a]">[{rel.date}]</span>
                </div>

                <button
                  onClick={() => copyAnchor(rel.version)}
                  className="flex items-center gap-1.5 text-xs font-mono text-[#71717a] hover:text-white transition-colors"
                  title="Copy link to release"
                >
                  {copiedVersion === rel.version ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Link</span>
                    </>
                  )}
                </button>
              </div>

              {/* Summary */}
              <h3 className="text-lg font-bold text-white mb-4 font-sans">{rel.summary}</h3>

              {/* Changes List */}
              <div className="space-y-2.5">
                {rel.items.map((it, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#d4d4d8]">
                    <span
                      className={`px-1.5 py-0.5 rounded text-[10px] font-mono shrink-0 mt-0.5 font-semibold ${
                        it.type === 'FEAT'
                          ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-800/40'
                          : it.type === 'FIX'
                          ? 'bg-amber-950/60 text-amber-400 border border-amber-800/40'
                          : it.type === 'PERF'
                          ? 'bg-purple-950/60 text-purple-400 border border-purple-800/40'
                          : 'bg-zinc-800 text-zinc-300'
                      }`}
                    >
                      {it.type}
                    </span>
                    <span className="leading-relaxed">{it.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  );
};
