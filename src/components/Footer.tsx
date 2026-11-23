import React from 'react';
import { Logo } from './Logo';
import { SITE } from '../config';

export const Footer: React.FC = () => (
  <footer className="bg-ink text-white/70">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
      <div>
        <Logo light />
        <p className="mt-4 max-w-sm leading-relaxed">
          Live, 1-on-1 online lessons in guitar and western vocals — from first chord to first stage.
        </p>
      </div>

      <nav aria-label="Footer">
        <p className="font-display font-bold text-white">Explore</p>
        <ul className="mt-4 space-y-2.5">
          <li><a className="hover:text-white" href="#courses">Courses</a></li>
          <li><a className="hover:text-white" href="#path">Learning path</a></li>
          <li><a className="hover:text-white" href="#how">How it works</a></li>
          <li><a className="hover:text-white" href="#faq">FAQ</a></li>
        </ul>
      </nav>

      <div>
        <p className="font-display font-bold text-white">Get started</p>
        <ul className="mt-4 space-y-2.5">
          <li><a className="hover:text-white" href="#trial">Book a free trial</a></li>
          <li><a className="hover:text-white" href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a></li>
        </ul>
      </div>
    </div>

    <div className="border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 text-sm flex flex-col sm:flex-row gap-2 justify-between">
        <p>© {SITE.year} {SITE.name}. All rights reserved.</p>
        <p>Made for music lovers.</p>
      </div>
    </div>
  </footer>
);
