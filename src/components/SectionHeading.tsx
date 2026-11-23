import React from 'react';

export const SectionHeading: React.FC<{
  title: string;
  intro?: string;
  onDark?: boolean;
}> = ({ title, intro, onDark = false }) => (
  <div className="max-w-2xl">
    <h2 className={`text-4xl sm:text-5xl font-bold tracking-[-0.03em] leading-[1.05] ${onDark ? 'text-white' : 'text-graphite'}`}>
      {title}
    </h2>
    {intro && <p className={`mt-4 text-lg leading-relaxed ${onDark ? 'text-white/75' : 'text-muted'}`}>{intro}</p>}
  </div>
);
