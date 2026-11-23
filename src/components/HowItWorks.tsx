import React from 'react';
import { STEPS } from '../data/content';
import { SectionHeading } from './SectionHeading';

export const HowItWorks: React.FC = () => (
  <section id="how" className="py-20 sm:py-28">
    <div className="max-w-6xl mx-auto px-5 sm:px-8">
      <SectionHeading title="Start playing in four simple steps." />

      <ol className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
        {STEPS.map((s, i) => (
          <li key={s.title}>
            <span className="block text-6xl font-bold text-cobalt tracking-[-0.04em] leading-none">{i + 1}</span>
            <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
            <p className="mt-2 text-muted leading-relaxed">{s.text}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);
