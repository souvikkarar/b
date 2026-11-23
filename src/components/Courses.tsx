import React from 'react';
import { COURSES } from '../data/content';
import { SectionHeading } from './SectionHeading';
import { ChordDiagram, PitchLine } from './Illustrations';

export const Courses: React.FC = () => (
  <section id="courses" className="py-20 sm:py-28">
    <div className="max-w-6xl mx-auto px-5 sm:px-8">
      <SectionHeading
        title="Two instruments. One clear path."
        intro="Pick the course that excites you. Every lesson is live and built around your level, your goals and the music you love."
      />

      <div className="mt-14 grid md:grid-cols-2 gap-x-16 gap-y-20">
        {COURSES.map((c) => (
          <article key={c.id} className="flex flex-col">
            <div className="h-40 flex items-end">
              {c.id === 'guitar' ? (
                <ChordDiagram
                  title="Chord chart for E minor"
                  frets={[0, 2, 2, 0, 0, 0]}
                  fingers={[null, 2, 3, null, null, null]}
                  className="h-40 w-auto -ml-4"
                />
              ) : (
                <PitchLine className="h-32 w-auto" />
              )}
            </div>

            <h3 className="mt-6 text-4xl sm:text-5xl font-bold tracking-[-0.03em]">{c.title}</h3>
            <p className="mt-2 text-lg text-cobalt font-medium">{c.kicker}</p>
            <p className="mt-4 text-lg text-muted leading-relaxed max-w-[36rem]">{c.summary}</p>

            <h4 className="mt-8 font-semibold">What you’ll learn</h4>
            <ul className="mt-3 space-y-2 text-graphite/90 list-disc pl-5 marker:text-cobalt">
              {c.outcomes.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>

            <p className="mt-6 text-muted">
              <span className="font-semibold text-graphite">Styles:</span> {c.styles.join(', ')}
            </p>

            <a
              href="#trial"
              className="mt-7 self-start font-semibold text-cobalt underline decoration-2 underline-offset-[6px] decoration-cobalt/30 hover:decoration-cobalt transition-colors"
            >
              Try a free {c.title.toLowerCase()} class
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
);
