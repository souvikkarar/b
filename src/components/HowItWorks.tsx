import React from 'react';
import { STEPS } from '../data/content';
import { SectionHeading } from './SectionHeading';

export const HowItWorks: React.FC = () => (
  <section id="how" className="py-20 sm:py-28">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <SectionHeading
        center
        eyebrow="How it works"
        title="Start playing in four simple steps."
      />

      <ol className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {STEPS.map((s, i) => (
          <li key={s.title} className="relative">
            {/* connector line on large screens */}
            {i < STEPS.length - 1 && (
              <span className="hidden lg:block absolute top-7 left-16 right-[-1.5rem] h-0.5 bg-[repeating-linear-gradient(90deg,var(--color-line)_0_8px,transparent_8px_14px)]" aria-hidden="true" />
            )}
            <span className="relative w-14 h-14 rounded-2xl bg-coral text-white font-display text-2xl font-extrabold flex items-center justify-center shadow-[0_10px_20px_-10px_rgba(255,92,57,0.8)]">
              {i + 1}
            </span>
            <h3 className="mt-5 text-xl font-extrabold text-plum">{s.title}</h3>
            <p className="mt-2 text-muted leading-relaxed">{s.text}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);
