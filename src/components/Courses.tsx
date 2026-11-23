import React from 'react';
import { ArrowRight, Check, Guitar, MicVocal } from 'lucide-react';
import { COURSES } from '../data/content';
import { SectionHeading } from './SectionHeading';

const ICONS = { guitar: Guitar, vocals: MicVocal };

export const Courses: React.FC = () => (
  <section id="courses" className="py-20 sm:py-28">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <SectionHeading
        eyebrow="Courses"
        title="Two instruments. One clear path."
        intro="Pick the course that excites you. Every lesson is live and built around your level, your goals and the music you love."
      />

      <div className="mt-12 grid md:grid-cols-2 gap-6">
        {COURSES.map((c, idx) => {
          const Icon = ICONS[c.id];
          const dark = idx === 0;
          return (
            <article
              key={c.id}
              className={`relative rounded-[1.75rem] p-7 sm:p-9 flex flex-col ${
                dark ? 'bg-plum text-white' : 'bg-white text-ink border border-line'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <span
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                    dark ? 'bg-coral text-white' : 'bg-gold/30 text-plum'
                  }`}
                >
                  <Icon className="w-7 h-7" aria-hidden="true" />
                </span>
                <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${dark ? 'bg-white/10 text-gold' : 'bg-sand text-plum'}`}>
                  Beginner → Advanced
                </span>
              </div>

              <h3 className={`mt-6 text-3xl sm:text-4xl font-extrabold ${dark ? 'text-white' : 'text-plum'}`}>{c.title}</h3>
              <p className={`mt-1 font-medium ${dark ? 'text-gold' : 'text-coral'}`}>{c.kicker}</p>
              <p className={`mt-4 leading-relaxed ${dark ? 'text-white/75' : 'text-muted'}`}>{c.summary}</p>

              <ul className="mt-6 space-y-2.5">
                {c.outcomes.map((o) => (
                  <li key={o} className="flex gap-3">
                    <Check className={`w-5 h-5 mt-0.5 shrink-0 ${dark ? 'text-gold' : 'text-coral'}`} aria-hidden="true" />
                    <span className={dark ? 'text-white/90' : 'text-ink/85'}>{o}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {c.styles.map((s) => (
                  <span key={s} className={`text-sm px-3 py-1 rounded-full ${dark ? 'bg-white/10 text-white/85' : 'bg-cream text-ink/75 border border-line'}`}>
                    {s}
                  </span>
                ))}
              </div>

              <a
                href="#trial"
                className={`mt-8 self-start inline-flex items-center gap-2 font-bold ${dark ? 'text-gold hover:text-white' : 'text-coral hover:text-coral-dark'} transition-colors`}
              >
                Try a free {c.title.toLowerCase()} class <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);
