import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data/content';
import { SectionHeading } from './SectionHeading';

export const Faq: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered."
          intro="Can’t find what you’re looking for? Ask us during your free trial class."
        />

        <div className="divide-y divide-line border-y border-line">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            const id = `faq-${i}`;
            return (
              <div key={f.q}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`${id}-panel`}
                    id={`${id}-button`}
                    className="w-full flex items-center justify-between gap-4 py-5 text-left text-lg font-bold text-plum cursor-pointer font-sans"
                  >
                    {f.q}
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 text-coral transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={`${id}-panel`}
                  role="region"
                  aria-labelledby={`${id}-button`}
                  hidden={!isOpen}
                  className="pb-5 pr-8 text-muted leading-relaxed"
                >
                  {f.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
