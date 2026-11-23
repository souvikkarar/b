import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Courses } from './components/Courses';
import { LearningPath } from './components/LearningPath';
import { HowItWorks } from './components/HowItWorks';
import { Features } from './components/Features';
import { Faq } from './components/Faq';
import { TrialSection } from './components/TrialSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-white focus:px-4 focus:py-2 focus:rounded-full focus:shadow"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Courses />
        <LearningPath />
        <HowItWorks />
        <Features />
        <Faq />
        <TrialSection />
      </main>
      <Footer />
    </>
  );
}
