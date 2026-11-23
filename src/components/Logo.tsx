import React from 'react';
import { PickMark } from './Illustrations';

export const Logo: React.FC<{ onDark?: boolean }> = ({ onDark = false }) => (
  <span className="inline-flex items-center gap-2">
    <PickMark className="w-8 h-8 shrink-0" />
    <span className={`text-[1.6rem] font-bold tracking-[-0.03em] ${onDark ? 'text-white' : 'text-graphite'}`}>Muzicks</span>
  </span>
);
