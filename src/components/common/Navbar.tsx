import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CommandCodeLogo } from './Logo';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const internalLinks = [
    { label: 'Features', to: '/features' },
    { label: 'About', to: '/about' },
    { label: 'Pricing', to: '/pricing' },
    { label: 'Changelog', to: '/changelog' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-[85px] bg-black border-y border-[#222225] z-50 flex items-center px-4 sm:px-8">
      <div className="w-full max-w-[1189px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="block shrink-0">
          <CommandCodeLogo className="h-7 w-auto text-white" />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-7 text-sm font-medium">
            <li>
              <a
                href="https://commandcode.ai/docs"
                target="_blank"
                rel="noreferrer"
                className="text-[#a1a1aa] hover:text-white transition-colors"
              >
                Docs
              </a>
            </li>
            {internalLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-white font-semibold underline underline-offset-8 decoration-purple-500 transition-colors'
                      : 'text-[#a1a1aa] hover:text-white transition-colors'
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink
                to="/pricing"
                className="text-purple-400 font-semibold hover:text-purple-300 transition-colors flex items-center gap-1.5"
              >
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-950/60 border border-purple-800/50">
                  GOAT
                </span>
              </NavLink>
            </li>
          </ul>

          <Link
            to="/contact"
            className="rounded-[100px] bg-[#fafafa] text-[#18181b] px-6 py-2.5 text-sm font-semibold hover:bg-neutral-200 transition-colors select-none shadow-sm"
          >
            Sign In
          </Link>
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
            <li>
              <a
                href="https://commandcode.ai/docs"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-neutral-200 hover:text-white border-b border-neutral-900"
              >
                Docs
              </a>
            </li>
            {internalLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 border-b border-neutral-900 ${
                      isActive ? 'text-purple-400 font-semibold' : 'text-neutral-200 hover:text-white'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="w-full text-center rounded-[100px] bg-[#fafafa] text-[#18181b] py-3 text-sm font-semibold mt-2"
          >
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
};
