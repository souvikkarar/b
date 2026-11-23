import React from 'react';

export const Logo: React.FC<{ light?: boolean }> = ({ light = false }) => (
  <span className="inline-flex items-center gap-2">
    <svg viewBox="0 0 64 64" className="w-9 h-9 shrink-0" aria-hidden="true">
      <rect width="64" height="64" rx="16" fill={light ? '#ffffff' : '#2A1E4A'} />
      <path
        d="M18 44V22l14 12 14-12v22"
        fill="none"
        stroke="#FF5C39"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <span className={`font-display text-2xl font-extrabold tracking-tight ${light ? 'text-white' : 'text-plum'}`}>
      Muzicks
    </span>
  </span>
);
