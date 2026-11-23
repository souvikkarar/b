import React, { useState } from 'react';
import { LEARNING_PATH, TrackId } from '../data/content';
import { SectionHeading } from './SectionHeading';

const TABS: { id: TrackId; label: string }[] = [
  { id: 'guitar', label: 'Guitar' },
  { id: 'vocals', label: 'Western Vocals' },
];

/**
 * The three levels are drawn along a guitar neck: the frets mark where one level ends and the next begins.
 */
export const LearningPath: React.FC = () => {
  const [track, setTrack] = useState<TrackId>('guitar');
  const levels = LEARNING_PATH[track];

  return (
    <section id="path" className="py-20 sm:py-28 bg-graphite text-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <SectionHeading
            onDark
            title="Know exactly where you’re headed."
            intro="Three levels, each with clear goals. Your mentor tracks your progress and moves you up when you’re ready."
          />
          <div role="tablist" aria-label="Choose a course" className="inline-flex self-start md:self-auto rounded-md bg-white/10 p-1">
            {TABS.map(({ id, label }) => {
              const active = track === id;
              return (
                <button
                  key={id}
                  role="tab"
                  aria-selected={active}
                  aria-controls="path-panel"
                  onClick={() => setTrack(id)}
                  className={`h-10 px-4 rounded text-[15px] font-semibold cursor-pointer transition-colors ${
                    active ? 'bg-pick text-graphite' : 'text-white/75 hover:text-white'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        <div id="path-panel" role="tabpanel" className="mt-14">
          {/* Fretboard: strings run across, frets split the three levels */}
          <div className="relative h-24 sm:h-28 rounded-l-md bg-[#3a2a1f] overflow-hidden" aria-hidden="true">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <span
                key={i}
                className="absolute left-0 right-0 bg-string/70"
                style={{ top: `${12 + i * 15.2}%`, height: `${1 + (5 - i) * 0.35}px` }}
              />
            ))}
            {[1, 2].map((f) => (
              <span key={f} className="absolute top-0 bottom-0 w-1.5 bg-string" style={{ left: `calc(${(f * 100) / 3}% - 3px)` }} />
            ))}
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-paper/80"
                style={{ left: `${(i * 100) / 3 + 100 / 6}%` }}
              />
            ))}
          </div>

          <ol className="grid md:grid-cols-3">
            {levels.map((lvl, i) => (
              <li key={lvl.name} className={`pt-6 pb-2 md:pr-8 ${i > 0 ? 'md:pl-8' : ''} ${i > 0 ? 'border-t md:border-t-0 border-white/15 mt-6 md:mt-0' : ''}`}>
                <p className="text-pick font-semibold">Level {i + 1}</p>
                <h3 className="mt-1 text-3xl font-bold tracking-[-0.02em]">{lvl.name}</h3>
                <p className="mt-1 text-white/60">{lvl.duration}</p>
                <ul className="mt-5 space-y-2.5 text-white/85">
                  {lvl.focus.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
