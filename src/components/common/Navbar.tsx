import React, { useState } from 'react';
import { CommandCodeLogo } from './Logo';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: 'Docs', href: 'https://commandcode.ai/docs' },
    { label: 'Features', href: 'https://commandcode.ai/features' },
    { label: 'About', href: 'https://commandcode.ai/about' },
    { label: 'Pricing', href: 'https://commandcode.ai/pricing' },
    { label: 'Contact', href: 'https://commandcode.ai/contact' },
    { label: 'GOAT', href: 'https://commandcode.ai/docs/plans/goat' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-[85px] bg-black border-y border-[#222225] z-50 flex items-center px-4 sm:px-8">
      <div className="w-full max-w-[1189px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="block shrink-0">
          <CommandCodeLogo className="h-7 w-auto text-white" />
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-7 text-sm font-medium text-[#a1a1aa]">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="https://commandcode.ai/signup"
            className="rounded-[100px] bg-[#fafafa] text-[#18181b] px-6 py-2.5 text-sm font-semibold hover:bg-neutral-200 transition-colors select-none shadow-sm"
          >
            Sign In
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 text-[#a1a1aa] hover:text-white lg:hidden"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div
          data-lenis-prevent
          className="lg:hidden fixed top-[85px] left-0 w-full bg-black/95 border-b border-[#222225] p-6 flex flex-col gap-4 backdrop-blur-xl z-50"
        >
          <ul className="flex flex-col gap-3 text-sm font-medium text-[#a1a1aa]">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-neutral-200 hover:text-white border-b border-neutral-900"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://commandcode.ai/signup"
            className="w-full text-center rounded-[100px] bg-[#fafafa] text-[#18181b] py-3 text-sm font-semibold mt-2"
          >
            Sign In
          </a>
        </div>
      )}
    </nav>
  );
};
