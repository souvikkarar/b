import React from 'react';
import { Megaphone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PageId } from '../types';

interface UpdatesViewProps {
  onNavigate: (page: PageId) => void;
}

// /updates — header and footer come from App; this page owns the hero band
// and the middle content area (to be designed).
export const UpdatesView: React.FC<UpdatesViewProps> = () => {
  const { isBengali } = useLanguage();

  return (
    <div className="space-y-14 sm:space-y-20 pb-16">
      {/* Hero band (same style as the other pages) */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-950 to-blue-900 text-white py-12 sm:py-14 px-4 sm:px-6 lg:px-8 border-b-4 border-orange-500">
        <div className="max-w-6xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-xs font-bold uppercase tracking-wider border border-orange-400/30">
            <Megaphone className="w-3.5 h-3.5" />
            <span>{isBengali ? 'আপডেট' : 'Updates'}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif-heading font-bold tracking-tight">
            {isBengali ? 'সাম্প্রতিক খবর ও বিজ্ঞপ্তি' : 'Latest Updates & Announcements'}
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-3xl leading-relaxed">
            {isBengali
              ? 'বঙ্গীয় সাহা সমিতির সাম্প্রতিক কর্মসূচি, বিজ্ঞপ্তি ও সমাজের খবর।'
              : 'Recent programmes, notices and community news from Bangiya Saha Samity.'}
          </p>
        </div>
      </section>

      {/* Middle content — to be configured */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center text-slate-500">
          {isBengali ? 'বিষয়বস্তু শীঘ্রই যুক্ত হবে।' : 'Content coming soon.'}
        </div>
      </section>
    </div>
  );
};
