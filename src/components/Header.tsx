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
    <header className="sticky top-0 z-50 bg-cobalt text-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-6">
        <a href="#top" aria-label="Muzicks home" onClick={() => setOpen(false)}>
          <Logo onDark />
        </a>

        <nav className="hidden md:flex items-center gap-7 text-[15px]" aria-label="Main">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-white/80 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#trial"
            className="hidden sm:inline-flex items-center h-10 px-4 rounded-md bg-pick text-graphite text-sm font-semibold hover:bg-white transition-colors"
          >
            Book a free trial
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-white hover:bg-white/10 cursor-pointer"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" className="md:hidden bg-cobalt-deep" aria-label="Mobile">
          <div className="max-w-6xl mx-auto px-5 py-2 flex flex-col">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3.5 text-lg text-white">
                {l.label}
              </a>
            ))}
            <a
              href="#trial"
              onClick={() => setOpen(false)}
              className="my-3 inline-flex justify-center h-12 items-center rounded-md bg-pick text-graphite font-semibold"
            >
              Book a free trial
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};
