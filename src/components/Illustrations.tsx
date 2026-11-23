import React from 'react';

type Fret = number | 'x';

/**
 * A real guitar chord box: 6 strings (low E on the left), 5 frets.
 * `frets` — fret per string (0 = open, 'x' = muted); `fingers` — finger number per string.
 */
export const ChordDiagram: React.FC<{
  frets: Fret[];
  fingers?: (number | null)[];
  animate?: boolean;
  className?: string;
  title: string;
}> = ({ frets, fingers = [], animate = false, className = '', title }) => {
  const left = 30;
  const gap = 28;
  const top = 46;
  const fretH = 36;
  const xs = frets.map((_, i) => left + i * gap);
  const right = xs[xs.length - 1];
  let dotIndex = 0;

  return (
    <svg viewBox="0 0 200 240" className={className} role="img" aria-label={title}>
      {/* nut + frets */}
      <rect x={left - 1} y={top - 6} width={right - left + 2} height="6" rx="1" fill="#23262E" />
      {[1, 2, 3, 4, 5].map((f) => (
        <line key={f} x1={left} x2={right} y1={top + f * fretH} y2={top + f * fretH} stroke="#C9CCD6" strokeWidth="2" />
      ))}
      {/* strings: thicker for the low strings */}
      {xs.map((x, i) => (
        <line key={i} x1={x} x2={x} y1={top} y2={top + 5 * fretH} stroke="#5A5F6B" strokeWidth={2.4 - i * 0.28} />
      ))}
      {/* open / muted markers */}
      {frets.map((f, i) =>
        f === 0 ? (
          <circle key={i} cx={xs[i]} cy={top - 18} r="6" fill="none" stroke="#23262E" strokeWidth="2" />
        ) : f === 'x' ? (
          <g key={i} stroke="#23262E" strokeWidth="2" strokeLinecap="round">
            <line x1={xs[i] - 5} y1={top - 23} x2={xs[i] + 5} y2={top - 13} />
            <line x1={xs[i] + 5} y1={top - 23} x2={xs[i] - 5} y2={top - 13} />
          </g>
        ) : null,
      )}
      {/* finger dots */}
      {frets.map((f, i) => {
        if (typeof f !== 'number' || f === 0) return null;
        const delay = 300 + dotIndex++ * 180;
        const cy = top + (f - 0.5) * fretH;
        return (
          <g key={i} className={animate ? 'finger-dot' : undefined} style={animate ? { animationDelay: `${delay}ms` } : undefined}>
            <circle cx={xs[i]} cy={cy} r="11" fill="#2340D9" />
            {fingers[i] != null && (
              <text x={xs[i]} y={cy + 4.5} textAnchor="middle" fontSize="13" fontWeight="700" fill="#FFFFFF" fontFamily="Familjen Grotesk, sans-serif">
                {fingers[i]}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
};

/** A melody contour on a five-line staff — what pitch training looks like. */
export const PitchLine: React.FC<{ className?: string }> = ({ className = '' }) => {
  const notes = [
    [24, 118], [62, 104], [100, 90], [138, 96], [176, 70], [214, 56], [252, 62], [290, 42],
  ];
  const path = notes.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x} ${y}`).join(' ');
  return (
    <svg viewBox="0 0 320 160" className={className} role="img" aria-label="A rising melody drawn on a music staff">
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={i} x1="0" x2="320" y1={40 + i * 20} y2={40 + i * 20} stroke="#C9CCD6" strokeWidth="1.5" />
      ))}
      <path d={path} fill="none" stroke="#2340D9" strokeWidth="2.5" strokeLinejoin="round" strokeDasharray="1 7" strokeLinecap="round" />
      {notes.map(([x, y], i) => (
        <ellipse key={i} cx={x} cy={y} rx="8" ry="6" transform={`rotate(-20 ${x} ${y})`} fill="#23262E" />
      ))}
    </svg>
  );
};

/** Guitar-pick logo mark. */
export const PickMark: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
    <path d="M32 60C20 52 6 36 6 20 6 10 17 4 32 4s26 6 26 16c0 16-14 32-26 40z" fill="#FFD23F" />
    <path d="M21 38V20l11 10 11-10v18" fill="none" stroke="#23262E" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
