import React from 'react';
import { Logo } from './Logo';
import { SITE } from '../config';

export const Footer: React.FC = () => (
  <footer className="bg-graphite text-white/70">
    <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14 flex flex-col md:flex-row md:items-start md:justify-between gap-10">
      <div className="max-w-sm">
        <Logo onDark />
        <p className="mt-4 leading-relaxed">
          Live, 1-on-1 online lessons in guitar and western vocals, from first chord to first stage.
        </p>
      </div>

      <nav aria-label="Footer" className="grid grid-cols-2 gap-x-14 gap-y-3 text-[15px]">
        <a className="hover:text-white" href="#courses">Courses</a>
        <a className="hover:text-white" href="#trial">Book a free trial</a>
        <a className="hover:text-white" href="#path">Learning path</a>
        <a className="hover:text-white" href={`mailto:${SITE.contactEmail}`}>Email us</a>
        <a className="hover:text-white" href="#how">How it works</a>
        <span />
        <a className="hover:text-white" href="#faq">FAQ</a>
      </nav>
    </div>

    <div className="border-t border-white/10">
      <p className="max-w-6xl mx-auto px-5 sm:px-8 py-6 text-sm">
        © {SITE.year} {SITE.name}. All rights reserved.
      </p>
    </div>
  </footer>
);
