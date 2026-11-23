import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

const LINKS = [
  { href: '#courses', label: 'Courses' },
  { href: '#path', label: 'Learning path' },
  { href: '#how', label: 'How it works' },
  { href: '#faq', label: 'FAQ' },
];

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    const mq = window.matchMedia('(min-width: 768px)');
    const onMq = () => mq.matches && setOpen(false);
    window.addEventListener('keydown', onKey);
    mq.addEventListener('change', onMq);
    return () => {
      window.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onMq);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 ${
        scrolled || open ? 'bg-cream/95 backdrop-blur border-b border-line' : 'bg-cream border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-18 flex items-center justify-between gap-4">
        <a href="#top" aria-label="Muzicks — back to top" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav className="hidden md:flex items-center gap-1" aria-label="Main">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 rounded-full text-[15px] font-medium text-ink/80 hover:text-ink hover:bg-sand transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#trial"
            className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-full bg-coral hover:bg-coral-dark text-white text-sm font-bold shadow-[0_6px_16px_-6px_rgba(255,92,57,0.7)] transition-colors"
          >
            Book a free trial
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-line bg-white text-plum cursor-pointer"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" className="md:hidden border-t border-line bg-cream" aria-label="Mobile">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-ink border-b border-line/70 last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#trial"
              onClick={() => setOpen(false)}
              className="mt-3 mb-1 inline-flex justify-center px-5 py-3 rounded-full bg-coral text-white font-bold"
            >
              Book a free trial
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};
