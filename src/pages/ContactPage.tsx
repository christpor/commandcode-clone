import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2, Globe, ExternalLink, HelpCircle } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('Enterprise / Sales');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const contactChannels = [
    {
      title: 'Need help?',
      desc: 'Join 100K+ developers in our community Discord for live support, troubleshooting, and agent hacking.',
      actionText: 'Join Discord',
      href: 'https://commandcode.ai/discord',
      icon: MessageSquare,
    },
    {
      title: 'Talk to sales.',
      desc: 'Discuss custom volume pricing, dedicated cloud VPC deployments, and team onboarding plans.',
      actionText: 'sales@commandcode.ai',
      href: 'mailto:sales@commandcode.ai?subject=Command%20Code%20Enterprise%20Inquiry',
      icon: Mail,
    },
    {
      title: 'Read the Docs',
      desc: 'Comprehensive guides for CLI setup, Taste vectors, MCP tool protocols, and IDE integrations.',
      actionText: 'Browse Documentation',
      href: 'https://commandcode.ai/docs',
      icon: HelpCircle,
    },
    {
      title: 'System status',
      desc: 'All frontier model gateway endpoints, AST caches, and streaming proxies are 100% operational.',
      actionText: 'Status: 99.99% Uptime',
      href: 'https://status.commandcode.ai',
      icon: Globe,
      badge: 'All Systems Normal',
    },
  ];

  return (
    <div className="w-full flex flex-col items-center pb-24">
      {/* Hero */}
      <section className="w-[90vw] md:w-[80vw] max-w-[1189px] border-x border-[#222225] pt-28 pb-16 px-6 sm:px-12 flex flex-col items-center text-center relative overflow-hidden bg-black">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#222225] bg-[#111113] text-xs font-mono text-[#a1a1aa] mb-6">
          <Mail className="w-3.5 h-3.5 text-[#556af3]" />
          // DIRECT CHANNELS
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white max-w-3xl mb-6">
          Get in touch. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C7B8F5] via-[#556af3] to-[#8C4EDD]">
            We're here to help.
          </span>
        </h1>

        <p className="text-[#a1a1aa] text-lg sm:text-xl max-w-2xl font-sans mb-4">
          Have a question about enterprise licenses, taste syncing, or custom model fine-tuning? Send us a message or jump directly into our support channels.
        </p>
      </section>

      {/* Main Content Grid: Left Cards, Right Form */}
      <section className="w-[90vw] md:w-[80vw] max-w-[1189px] border-x border-[#222225] pt-8 pb-20 px-6 sm:px-12 bg-black">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Contact Channels Matrix (Col 5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono text-[#71717a] uppercase tracking-wider mb-2">// OFFICIAL CHANNELS</div>
            {contactChannels.map((c, idx) => {
              const Icon = c.icon;
              return (
                <a
                  key={idx}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block p-5 rounded-xl border border-[#222225] bg-[#0c0c0e] hover:border-[#3a3a44] transition-all group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#141418] border border-[#222226] flex items-center justify-center text-[#556af3]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold text-white group-hover:text-[#556af3] transition-colors">{c.title}</h3>
                    </div>
                    {c.badge && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-800/40">
                        {c.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#a1a1aa] mb-3 leading-relaxed">{c.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#556af3] group-hover:underline">
                    {c.actionText} <ExternalLink className="w-3 h-3" />
                  </span>
                </a>
              );
            })}
          </div>

          {/* Right: Interactive Contact Form (Col 7) */}
          <div className="lg:col-span-7 rounded-2xl border border-[#222225] bg-[#0c0c0e] p-6 sm:p-8">
            <div className="text-xs font-mono text-[#556af3] uppercase tracking-wider mb-2">// DIRECT MESSAGE</div>
            <h2 className="text-2xl font-bold text-white mb-2">Send us a direct inquiry</h2>
            <p className="text-xs text-[#a1a1aa] mb-6">
              Our engineering and sales team typically responds within 2-4 hours.
            </p>

            {submitted ? (
              <div className="p-8 rounded-xl border border-emerald-900/50 bg-emerald-950/20 text-center flex flex-col items-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Message received!</h3>
                <p className="text-xs text-[#a1a1aa] max-w-sm mb-6 leading-relaxed">
                  Thank you for reaching out, {name}. A member of the Command Code team will review your inquiry regarding <span className="text-white font-medium">{topic}</span> and follow up at <span className="text-white font-medium">{email}</span> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setMessage('');
                  }}
                  className="px-4 py-2 rounded-lg bg-[#18181c] text-white text-xs font-mono border border-[#2e2e36] hover:bg-[#222228] transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#a1a1aa] mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Linus Torvalds"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#222225] bg-[#111114] text-xs sm:text-sm text-white placeholder-[#52525b] focus:outline-none focus:border-[#556af3] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-[#a1a1aa] mb-1.5">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="linus@kernel.org"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#222225] bg-[#111114] text-xs sm:text-sm text-white placeholder-[#52525b] focus:outline-none focus:border-[#556af3] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#a1a1aa] mb-1.5">Inquiry Topic</label>
                  <select
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#222225] bg-[#111114] text-xs sm:text-sm text-white focus:outline-none focus:border-[#556af3] transition-colors"
                  >
                    <option value="Enterprise / Sales">Enterprise / Sales &amp; Invoicing</option>
                    <option value="Technical Support">Technical Support &amp; CLI Debugging</option>
                    <option value="Taste Sync & Skills">Taste Learning &amp; Team Sync</option>
                    <option value="Security & Compliance">Security Review &amp; Compliance</option>
                    <option value="Partnerships">Partnerships &amp; Integrations</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#a1a1aa] mb-1.5">Message *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us about your team size, repository stack, or any specific requirements..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#222225] bg-[#111114] text-xs sm:text-sm text-white placeholder-[#52525b] focus:outline-none focus:border-[#556af3] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 rounded-lg bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#e4e4e7] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    'Transmitting...'
                  ) : (
                    <>
                      Submit Inquiry <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
