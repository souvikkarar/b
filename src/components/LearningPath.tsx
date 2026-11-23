import React, { useState } from 'react';
import { Guitar, MicVocal } from 'lucide-react';
import { LEARNING_PATH, TrackId } from '../data/content';
import { SectionHeading } from './SectionHeading';

const TABS: { id: TrackId; label: string; Icon: typeof Guitar }[] = [
  { id: 'guitar', label: 'Guitar', Icon: Guitar },
  { id: 'vocals', label: 'Western Vocals', Icon: MicVocal },
];

export const LearningPath: React.FC = () => {
  const [track, setTrack] = useState<TrackId>('guitar');
  const levels = LEARNING_PATH[track];

  return (
    <section id="path" className="py-20 sm:py-28 bg-plum text-white relative overflow-hidden">
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-[480px] h-[480px] rounded-full bg-coral/20 blur-3xl" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SectionHeading
            light
            eyebrow="Learning path"
            title="Know exactly where you’re headed."
            intro="Three levels, each with clear goals. Your mentor tracks your progress and moves you up when you’re ready."
          />

          <div role="tablist" aria-label="Choose a course" className="inline-flex self-start lg:self-auto p-1 rounded-full bg-white/10 ring-1 ring-inset ring-white/15">
            {TABS.map(({ id, label, Icon }) => {
              const active = track === id;
              return (
                <button
                  key={id}
                  role="tab"
                  aria-selected={active}
                  aria-controls="path-panel"
                  onClick={() => setTrack(id)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold cursor-pointer transition-colors ${
                    active ? 'bg-white text-plum' : 'text-white/80 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        <ol id="path-panel" role="tabpanel" className="mt-12 grid md:grid-cols-3 gap-5">
          {levels.map((lvl, i) => (
            <li key={lvl.name} className="relative rounded-3xl bg-white/[0.06] ring-1 ring-inset ring-white/10 p-7">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-gold text-plum font-display font-extrabold flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="text-sm text-white/60">{lvl.duration}</span>
              </div>
              <h3 className="mt-5 text-2xl font-extrabold">{lvl.name}</h3>
              <ul className="mt-4 space-y-2.5">
                {lvl.focus.map((f) => (
                  <li key={f} className="flex gap-2.5 text-white/85">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-coral shrink-0" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
