import React from 'react';
import { ArrowRight, Guitar, MicVocal, Video } from 'lucide-react';

const EQ_HEIGHTS = [38, 62, 48, 80, 56, 92, 64, 44, 72, 52, 86, 40, 66, 50];

export const Hero: React.FC = () => (
  <section id="top" className="relative overflow-hidden">
    {/* soft background shapes */}
    <div className="pointer-events-none absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-gold/25 blur-3xl" aria-hidden="true" />
    <div className="pointer-events-none absolute top-1/2 -left-32 w-[360px] h-[360px] rounded-full bg-coral/15 blur-3xl" aria-hidden="true" />

    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-16 sm:pt-16 sm:pb-24 grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">
      {/* Copy */}
      <div>
        <p className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-line text-sm font-medium text-plum">
          <span className="w-2 h-2 rounded-full bg-coral" aria-hidden="true" />
          Live online lessons · Guitar & Western Vocals
        </p>

        <h1 className="mt-6 text-[2.6rem] leading-[1.05] sm:text-6xl font-extrabold text-plum">
          From first chord
          <br />
          to <span className="relative whitespace-nowrap text-coral">
            first stage
            <svg className="absolute left-0 -bottom-2 w-full h-3" viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden="true">
              <path d="M2 9 C 50 2, 150 2, 198 8" fill="none" stroke="#FFC24B" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </span>
          .
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-muted max-w-xl leading-relaxed">
          Learn guitar or western vocals with a mentor who teaches only you — live, 1-on-1, from home.
          A clear level-by-level path for complete beginners and returning players alike.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href="#trial"
            className="inline-flex justify-center items-center gap-2 px-7 py-4 rounded-full bg-coral hover:bg-coral-dark text-white text-base font-bold shadow-[0_10px_24px_-10px_rgba(255,92,57,0.8)] transition-colors"
          >
            Book a free trial class
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </a>
          <a
            href="#courses"
            className="inline-flex justify-center items-center px-7 py-4 rounded-full border-2 border-plum/15 hover:border-plum/40 text-plum text-base font-bold transition-colors"
          >
            Explore courses
          </a>
        </div>

        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          <li>✓ No experience needed</li>
          <li>✓ Kids, teens & adults</li>
          <li>✓ Flexible timings</li>
        </ul>
      </div>

      {/* Illustration */}
      <div className="relative mx-auto w-full max-w-[480px]" aria-hidden="true">
        <div className="relative aspect-[5/6] rounded-[2rem] bg-plum overflow-hidden shadow-[0_30px_60px_-30px_rgba(42,30,74,0.8)]">
          {/* guitar sound-hole + strings */}
          <svg viewBox="0 0 400 480" className="absolute inset-0 w-full h-full">
            <circle cx="200" cy="205" r="120" fill="#3B2C63" />
            <circle cx="200" cy="205" r="82" fill="#17131F" />
            <circle cx="200" cy="205" r="120" fill="none" stroke="#FFC24B" strokeWidth="3" strokeDasharray="2 10" strokeLinecap="round" />
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <line key={i} x1={160 + i * 16} y1="0" x2={160 + i * 16} y2="480" stroke="#F2E9DC" strokeOpacity={0.75 - i * 0.07} strokeWidth={2.6 - i * 0.3} />
            ))}
            <rect x="140" y="360" width="120" height="18" rx="4" fill="#FF5C39" />
          </svg>

          {/* equaliser */}
          <div className="absolute inset-x-6 bottom-6 h-20 flex items-end justify-between gap-1.5">
            {EQ_HEIGHTS.map((h, i) => (
              <span
                key={i}
                className="eq-bar flex-1 rounded-full bg-gradient-to-t from-coral to-gold"
                style={{ height: `${h}%`, animationDelay: `${(i % 7) * 0.12}s` }}
              />
            ))}
          </div>
        </div>

        {/* floating chips */}
        <div className="absolute -left-3 sm:-left-8 top-10 flex items-center gap-2.5 bg-white rounded-2xl px-4 py-3 shadow-lg border border-line">
          <span className="w-9 h-9 rounded-xl bg-coral/10 text-coral flex items-center justify-center"><Guitar className="w-5 h-5" /></span>
          <span className="text-sm font-bold text-plum leading-tight">Guitar<br /><span className="font-medium text-muted">Acoustic & electric</span></span>
        </div>
        <div className="absolute -right-2 sm:-right-6 top-1/2 flex items-center gap-2.5 bg-white rounded-2xl px-4 py-3 shadow-lg border border-line">
          <span className="w-9 h-9 rounded-xl bg-gold/25 text-plum flex items-center justify-center"><MicVocal className="w-5 h-5" /></span>
          <span className="text-sm font-bold text-plum leading-tight">Vocals<br /><span className="font-medium text-muted">Pop to musical theatre</span></span>
        </div>
        <div className="absolute left-6 -bottom-5 flex items-center gap-2 bg-gold rounded-full px-4 py-2 shadow-lg text-plum text-sm font-bold">
          <Video className="w-4 h-4" /> Live 1-on-1
        </div>
      </div>
    </div>
  </section>
);
