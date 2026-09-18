import React, { useState } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';
import { CommandCodeLogo } from './Logo';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Docs', href: 'https://commandcode.ai/docs', external: true },
    { label: 'Features', href: '#features', external: false },
    { label: 'Taste', href: '#taste', external: false },
    { label: 'Pricing', href: '#pricing', external: false },
    { label: 'Benchmarks', href: '#benchmarks', external: false },
    { label: 'FAQ', href: '#faq', external: false },
    { label: 'GOAT', href: 'https://commandcode.ai/docs/plans/goat', external: true, badge: 'PLAN' },
  ];

  return (
    <nav className="w-full h-[72px] border-b border-border bg-black/80 backdrop-blur-xl sticky top-[37px] z-30 flex items-center">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 text-white hover:opacity-90 transition-opacity">
          <CommandCodeLogo className="h-6 w-auto text-white" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1 bg-neutral-900/60 p-1.5 rounded-full border border-white/5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noreferrer' : undefined}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium text-neutral-300 hover:text-white hover:bg-neutral-800 transition-all duration-200 flex items-center gap-1"
            >
              {link.label}
              {link.badge && (
                <span className="text-[9px] px-1.5 py-0.2 bg-purple-500/20 text-purple-300 font-mono rounded">
                  {link.badge}
                </span>
              )}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/CommandCodeAI"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center justify-center px-4 py-1.5 text-xs font-medium text-neutral-300 hover:text-white hover:bg-neutral-800/80 rounded-full border border-neutral-800 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://commandcode.ai/signup"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-4 py-1.5 text-xs font-semibold text-black bg-white hover:bg-neutral-200 rounded-full shadow transition-all duration-200 hover:shadow-white/10"
          >
            Sign Up
          </a>
          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-400 hover:text-white lg:hidden"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          data-lenis-prevent
          className="lg:hidden fixed top-[109px] left-0 w-full bg-black/95 border-b border-border p-6 flex flex-col gap-4 backdrop-blur-2xl z-50 animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer' : undefined}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 text-sm font-medium text-neutral-300 hover:text-white border-b border-neutral-900"
              >
                <span>{link.label}</span>
                {link.external ? <ExternalLink className="w-4 h-4 text-neutral-500" /> : null}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3 pt-4">
            <a
              href="https://commandcode.ai/signup"
              className="w-full text-center py-2.5 rounded-full bg-white text-black font-medium text-sm"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
