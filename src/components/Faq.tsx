import React from 'react';
import { Plus } from 'lucide-react';
import { FAQS } from '../data/content';
import { SectionHeading } from './SectionHeading';

export const Faq: React.FC = () => (
  <section id="faq" className="py-20 sm:py-28">
    <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-20">
      <SectionHeading
        title="Questions, answered."
        intro="Can’t find what you’re looking for? Ask us during your free trial class."
      />

      <div className="border-t border-string">
        {FAQS.map((f, i) => (
          <details key={f.q} className="group border-b border-string" open={i === 0}>
            <summary className="flex items-start justify-between gap-6 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              <span className="text-lg font-semibold">{f.q}</span>
              <Plus className="w-5 h-5 mt-1 shrink-0 text-cobalt transition-transform group-open:rotate-45" aria-hidden="true" />
            </summary>
            <p className="pb-6 pr-10 text-muted leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);
