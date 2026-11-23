import React from 'react';
import { ChordDiagram } from './Illustrations';

export const Hero: React.FC = () => (
  <section id="top" className="bg-cobalt text-white">
    <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-10 pb-20 sm:pt-16 sm:pb-28 grid lg:grid-cols-[1.25fr_1fr] gap-14 lg:gap-12 items-center">
      <div>
        <h1 className="text-[2.9rem] leading-[1.02] sm:text-7xl lg:text-[5.4rem] font-bold tracking-[-0.035em]">
          From first chord to first stage.
        </h1>

        <p className="mt-7 text-lg sm:text-xl text-white/85 max-w-[34rem] leading-relaxed">
          Learn guitar or western vocals with a mentor who teaches only you — live, 1-on-1, from home.
          A clear level-by-level path for complete beginners and returning players alike.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row gap-3">
          <a
            href="#trial"
            className="inline-flex justify-center items-center h-14 px-7 rounded-md bg-pick text-graphite text-lg font-semibold hover:bg-white transition-colors"
          >
            Book a free trial class
          </a>
          <a
            href="#courses"
            className="inline-flex justify-center items-center h-14 px-7 rounded-md ring-2 ring-inset ring-white/40 hover:ring-white text-white text-lg font-semibold transition-shadow"
          >
            Explore courses
          </a>
        </div>

        <p className="mt-7 text-white/70">
          No experience needed. For kids, teens and adults, at times that suit you.
        </p>
      </div>

      {/* The page's signature: a teacher's chord chart */}
      <figure className="relative mx-auto w-full max-w-[400px] lg:rotate-[2deg]">
        <div className="bg-paper text-graphite rounded-xl px-7 pt-6 pb-8 shadow-[0_24px_50px_-24px_rgba(10,15,60,0.65)]">
          <div className="flex items-baseline justify-between">
            <span className="font-hand text-4xl font-bold">G major</span>
            <span className="font-hand text-2xl text-muted">lesson 1</span>
          </div>
          <ChordDiagram
            animate
            title="Chord chart for G major: second fret A string with finger 1, third fret low E with finger 2, third fret high E with finger 3"
            frets={[3, 2, 0, 0, 0, 3]}
            fingers={[2, 1, null, null, null, 3]}
            className="w-full max-w-[260px] mx-auto mt-2"
          />
          <figcaption className="font-hand text-[1.7rem] leading-tight text-cobalt mt-2 text-center">
            the first chord most of us learn — <br className="hidden sm:block" />yours could be next week
          </figcaption>
        </div>
      </figure>
    </div>
  </section>
);
