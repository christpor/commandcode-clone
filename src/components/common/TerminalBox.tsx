import React, { useState } from 'react';
import { Check, Copy, Terminal } from 'lucide-react';

export const TerminalBox: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'npm' | 'curl' | 'brew'>('npm');
  const [copied, setCopied] = useState(false);

  const commands = {
    npm: 'npm i -g @commandcode/cli',
    curl: 'curl -fsSL https://commandcode.ai/install.sh | sh',
    brew: 'brew install commandcode/tap/commandcode',
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(commands[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-xl mx-auto rounded-xl border border-neutral-800 bg-neutral-950/80 backdrop-blur-xl shadow-2xl overflow-hidden group hover:border-neutral-700 transition-colors">
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-neutral-900/60 border-b border-neutral-800/80">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          <span className="text-xs text-neutral-500 font-mono ml-2 flex items-center gap-1">
            <Terminal className="w-3 h-3 text-neutral-400" />
            install
          </span>
        </div>

        {/* Tab switchers */}
        <div className="flex items-center bg-black/40 rounded-lg p-0.5 border border-white/5">
          {(['npm', 'curl', 'brew'] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`px-2.5 py-1 text-[11px] font-mono rounded-md transition-all ${
                activeTab === tab
                  ? 'bg-neutral-800 text-white font-medium shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 sm:p-5 flex items-center justify-between font-mono text-xs sm:text-sm">
        <div className="flex items-center gap-3 overflow-x-auto select-all text-neutral-200">
          <span className="text-purple-400 select-none">$</span>
          <span className="text-white font-medium">{commands[activeTab]}</span>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          aria-label="Copy install command"
          className="ml-3 shrink-0 p-2 rounded-lg bg-neutral-900/80 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-800 transition-colors flex items-center gap-1.5 text-xs"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 text-[11px]">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span className="text-[11px] hidden sm:inline">Copy</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
