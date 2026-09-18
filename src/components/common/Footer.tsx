import React from 'react';
import { Link } from 'react-router-dom';
import { CommandCodeLogo } from './Logo';

export const Footer: React.FC = () => {
  const footerLinks = [
    { label: 'About', to: '/about', isInternal: true, color: 'from-[#C7B8F5] to-[#F3B5D2]' },
    { label: 'Features', to: '/features', isInternal: true, color: 'from-[#F3B5D2] to-[#AFCDF6]' },
    { label: 'Pricing', to: '/pricing', isInternal: true, color: 'from-[#F3B5D2] to-[#A7EADC]' },
    { label: 'Changelog', to: '/changelog', isInternal: true, color: 'from-[#C7B8F5] to-[#AFCDF6]' },
    { label: 'Taste', to: '/features#taste', isInternal: true, color: 'from-[#AFCDF6] to-[#C7B8F5]' },
    { label: 'Run Modes', to: '/features#modes', isInternal: true, color: 'from-[#F5B6A6] to-[#F3B5D2]' },
    { label: 'MCP & Skills', to: '/features#mcp', isInternal: true, color: 'from-[#A7EADC] to-[#AFCDF6]' },
    { label: 'Models', to: '/features#models', isInternal: true, color: 'from-[#AFCDF6] to-[#C7B8F5]' },
    { label: 'Design /dx', to: '/features#design-partner', isInternal: true, color: 'from-[#C7B8F5] to-[#F5B6A6]' },
    { label: 'Studio', to: '/features#studio-web', isInternal: true, color: 'from-[#F3B5D2] to-[#C7B8F5]' },
    { label: 'Contact', to: '/contact', isInternal: true, color: 'from-[#AFCDF6] to-[#F5B6A6]' },
    { label: 'Docs', href: 'https://commandcode.ai/docs', isInternal: false, color: 'from-[#F3B5D2] to-[#AFCDF6]' },
    { label: 'Developers', to: '/features#cli-experience', isInternal: true, color: 'from-[#A7EADC] to-[#F5B6A6]' },
    { label: 'Security', to: '/about', isInternal: true, color: 'from-[#A7EADC] to-[#AFCDF6]' },
    { label: 'Careers', to: '/about', isInternal: true, color: 'from-[#F3B5D2] to-[#C7B8F5]' },
    { label: 'Terms & Privacy', to: '/about', isInternal: true, color: 'from-[#F3B5D2] to-[#AFCDF6]' },
  ];

  return (
    <footer className="w-[90vw] md:w-[80vw] max-w-[1189px] mx-auto border border-[#222225] border-t-0 mb-16 bg-black relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#222225]">
        {/* Left Links Matrix (Col-span-7) */}
        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 border-b lg:border-b-0">
          {footerLinks.map((item, idx) => {
            const content = (
              <>
                <span className="relative z-10 font-sans">{item.label}</span>
                {/* Subtle hover gradient wash */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-300 pointer-events-none">
                  <div className={`w-full h-full bg-gradient-to-r ${item.color}`} />
                </div>
              </>
            );

            if (item.isInternal && item.to) {
              return (
                <Link
                  key={idx}
                  to={item.to}
                  className="relative p-5 sm:p-6 border-b border-r border-[#222225] text-sm text-[#a1a1aa] hover:text-white transition-colors group overflow-hidden block"
                >
                  {content}
                </Link>
              );
            }

            return (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="relative p-5 sm:p-6 border-b border-r border-[#222225] text-sm text-[#a1a1aa] hover:text-white transition-colors group overflow-hidden block"
              >
                {content}
              </a>
            );
          })}
        </div>

        {/* Center Square with Swirl Matrix & Logo (Col-span-4) */}
        <div className="lg:col-span-4 flex items-center justify-center p-12 bg-neutral-950/80 relative overflow-hidden group">
          {/* Dot matrix swirl canvas simulation */}
          <div className="absolute inset-0 swirl-bg opacity-30 group-hover:opacity-40 transition-opacity" />
          <div className="absolute inset-0 bg-radial from-transparent to-black pointer-events-none" />

          <Link to="/" className="relative z-10 text-center flex flex-col items-center group-hover:scale-105 transition-transform">
            <CommandCodeLogo className="h-8 w-auto text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" />
          </Link>
        </div>

        {/* Far Right Vertical Social Column (Col-span-1) */}
        <div className="lg:col-span-1 flex flex-row lg:flex-col items-center justify-center gap-6 p-4 text-[#a1a1aa]">
          {/* X */}
          <a
            href="https://x.com/CommandCodeAI"
            target="_blank"
            rel="noreferrer"
            aria-label="X / Twitter"
            className="hover:text-white transition-colors"
          >
            <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/christpor/commandcode-clone"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-white transition-colors"
          >
            <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/commandcodeai/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white transition-colors"
          >
            <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
          </a>

          {/* Discord */}
          <a
            href="https://commandcode.ai/discord"
            target="_blank"
            rel="noreferrer"
            aria-label="Discord"
            className="hover:text-white transition-colors"
          >
            <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.894.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};
