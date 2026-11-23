import React from 'react';
import { FEATURES } from '../data/content';
import { SectionHeading } from './SectionHeading';

export const Features: React.FC = () => (
  <section className="py-20 sm:py-28 bg-pick">
    <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20">
      <SectionHeading
        title="Built around one student: you."
        intro="Everything about how we teach is designed to keep you playing, improving and enjoying it."
      />

      <dl className="grid sm:grid-cols-2 gap-x-10 gap-y-9">
        {FEATURES.map((f) => (
          <div key={f.title}>
            <dt className="text-xl font-bold">{f.title}</dt>
            <dd className="mt-1.5 text-graphite/75 leading-relaxed">{f.text}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);
