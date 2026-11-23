import React from 'react';
import { CalendarClock, Laptop, Layers, Repeat, Sparkles, Video } from 'lucide-react';
import { FEATURES } from '../data/content';
import { SectionHeading } from './SectionHeading';

const ICONS = [Video, Laptop, CalendarClock, Layers, Repeat, Sparkles];

export const Features: React.FC = () => (
  <section className="py-20 sm:py-28 bg-sand">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <SectionHeading
        eyebrow="Why Muzicks"
        title="Built around one student: you."
        intro="Everything about how we teach is designed to keep you playing, improving and enjoying it."
      />

      <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {FEATURES.map((f, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <li key={f.title} className="rounded-3xl bg-white border border-line p-7">
              <span className="w-12 h-12 rounded-2xl bg-plum text-gold flex items-center justify-center">
                <Icon className="w-6 h-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-extrabold text-plum">{f.title}</h3>
              <p className="mt-2 text-muted leading-relaxed">{f.text}</p>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);
