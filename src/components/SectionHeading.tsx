import React from 'react';

export const SectionHeading: React.FC<{
  eyebrow: string;
  title: string;
  intro?: string;
  light?: boolean;
  center?: boolean;
}> = ({ eyebrow, title, intro, light = false, center = false }) => (
  <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
    <p className={`text-sm font-bold uppercase tracking-[0.16em] ${light ? 'text-gold' : 'text-coral'}`}>{eyebrow}</p>
    <h2 className={`mt-3 text-3xl sm:text-5xl font-extrabold leading-tight ${light ? 'text-white' : 'text-plum'}`}>{title}</h2>
    {intro && <p className={`mt-4 text-lg leading-relaxed ${light ? 'text-white/75' : 'text-muted'}`}>{intro}</p>}
  </div>
);
