import React from 'react';
import { BookOpen, ShieldCheck, GraduationCap, ArrowRight, Heart, Users, Scale, Award, Home } from 'lucide-react';
import { IndianPatternDivider } from './IndianPatternDivider';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { NGO_DETAILS } from '../data/ngoData';

interface HeroSectionProps {
  onDonateClick: () => void;
  onExploreWorkClick: () => void;
  onLegalAidClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onDonateClick,
  onExploreWorkClick,
  onLegalAidClick,
}) => {
  const { lang, isBengali } = useLanguage();
  const t = TRANSLATIONS[lang];

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#F4EFE6]/70 to-[#FAF7F2] pt-8 pb-14 border-b border-[#8A5A36]/15">
      {/* Background geometric pattern accents */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#2D6A4F 1.5px, transparent 1.5px), radial-gradient(#8A5A36 1.5px, transparent 1.5px)`,
          backgroundSize: '32px 32px',
          backgroundPosition: '0 0, 16px 16px'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cultural Pre-header & Ambedkarite Motto */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-6 border-b border-[#8A5A36]/15">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2D6A4F]/10 border border-[#2D6A4F]/20 text-xs font-semibold text-[#2D6A4F]">
            <Scale className="w-3.5 h-3.5 text-[#2D6A4F]" />
            <span>{t.preHeaderBadge}</span>
          </div>

          <div className="text-xs sm:text-sm font-serif-heading text-[#8A5A36] italic flex items-center gap-2 text-center sm:text-right">
            <span>{t.ambedkarQuote}</span>
            <span className="text-[#8A5A36]/40">•</span>
            <span className="font-sans text-xs not-italic text-[#6C4A31] font-medium">{t.ambedkarAuthor}</span>
          </div>
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-8">
          
          {/* Left Column: Heading & Core Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#8A5A36]">
                {t.heroEyebrow}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif-heading font-bold text-[#2D6A4F] leading-[1.18] tracking-tight">
                {t.heroTitleStart}
                <span className="text-[#8A5A36] underline decoration-[#2D6A4F]/30 underline-offset-8">
                  {t.heroTitleAccent}
                </span>{' '}
                {t.heroTitleEnd}
              </h1>
            </div>

            <p className="text-base sm:text-lg text-[#554336] leading-relaxed max-w-2xl font-normal">
              {t.heroDescription}
            </p>

            {/* Mission Highlights Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF7F2] border border-[#2D6A4F]/20 shadow-xs hover:border-[#2D6A4F] transition-colors">
                <div className="p-2 rounded-lg bg-[#2D6A4F]/10 text-[#2D6A4F] shrink-0 mt-0.5">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#2D6A4F]">{t.heroBadge1Title}</h4>
                  <p className="text-xs text-[#6C4A31]">{t.heroBadge1Desc}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF7F2] border border-[#8A5A36]/20 shadow-xs hover:border-[#8A5A36] transition-colors">
                <div className="p-2 rounded-lg bg-[#8A5A36]/10 text-[#8A5A36] shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#8A5A36]">{t.heroBadge2Title}</h4>
                  <p className="text-xs text-[#6C4A31]">{t.heroBadge2Desc}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF7F2] border border-[#8A5A36]/20 shadow-xs hover:border-[#8A5A36] transition-colors">
                <div className="p-2 rounded-lg bg-[#8A5A36]/10 text-[#8A5A36] shrink-0 mt-0.5">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#8A5A36]">{t.heroBadge3Title}</h4>
                  <p className="text-xs text-[#6C4A31]">{t.heroBadge3Desc}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF7F2] border border-[#2D6A4F]/20 shadow-xs hover:border-[#2D6A4F] transition-colors">
                <div className="p-2 rounded-lg bg-[#2D6A4F]/10 text-[#2D6A4F] shrink-0 mt-0.5">
                  <Home className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#2D6A4F]">
                    {isBengali ? '৪ তলা কেন্দ্রীয় কার্যালয় (১৯৫৬)' : '4-Storeyed Central Office'}
                  </h4>
                  <p className="text-xs text-[#6C4A31]">
                    {isBengali 
                      ? '৫২বি ইন্ডিয়ান মিরর স্ট্রিট, কলকাতা - ৭০০০১৩।' 
                      : '52B Indian Mirror Street, Kolkata - 700013.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={onDonateClick}
                className="px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-[#2D6A4F] hover:bg-[#20513B] shadow-md hover:shadow-lg transition-all flex items-center gap-2.5 active:scale-[0.98]"
              >
                <Heart className="w-4 h-4 fill-emerald-200 text-emerald-200" />
                <span>{t.heroCtaDonate}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onLegalAidClick}
                className="px-5 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-[#8A5A36] bg-[#FAF7F2] hover:bg-[#8A5A36]/10 border border-[#8A5A36]/40 transition-colors flex items-center gap-2"
              >
                <Scale className="w-4 h-4 text-[#8A5A36]" />
                <span>{t.heroCtaLegalAid}</span>
              </button>

              <button
                onClick={onExploreWorkClick}
                className="px-4 py-3.5 text-sm font-medium text-[#554336] hover:text-[#2D6A4F] underline decoration-dotted transition-colors"
              >
                {t.heroCtaExplore} ↓
              </button>
            </div>
          </div>

          {/* Right Column: Grounded Documentary Photo Card & Field Snapshot */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border-4 border-[#FAF7F2] bg-[#FAF7F2] ring-1 ring-[#8A5A36]/20">
              
              {/* Photo representation */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#ECE4D8]">
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80"
                  alt="Students engaged in collegiate learning and library study"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C241E]/85 via-[#2C241E]/20 to-black/10"></div>

                {/* Village / Office Tag */}
                <div className="absolute top-3 left-3 bg-[#2D6A4F]/95 backdrop-blur-xs text-[#FAF7F2] text-xs font-semibold px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>{isBengali ? '৫২বি ইন্ডিয়ান মিরর স্ট্রিট • কেন্দ্রীয় কার্যালয়' : '52B Indian Mirror Street • Central Office'}</span>
                </div>

                {/* Bottom Story Quote */}
                <div className="absolute bottom-3 inset-x-3 text-white">
                  <p className="text-xs italic text-white/95 leading-relaxed font-serif-heading">
                    {isBengali
                      ? '"৫২বি ইন্ডিয়ান মিরর স্ট্রিটে আমাদের চারতলা কেন্দ্রীয় কার্যালয় ভবনের ছাত্রাবাসে ৫০ জন ছাত্রছাত্রীর আবাসিক ব্যবস্থা করা হয় (নারী উচ্চশিক্ষায় বিশেষ অগ্রাধিকার সহ), পাশাপাশি সমাজের সদস্যদের জন্য অতিথি কক্ষ (Guest Room) সুবিধা রয়েছে।"'
                      : '"At 52B Indian Mirror Street, residential hostel arrangements are made for up to 50 students (with special priority for female higher education), alongside a Guest Room facility for community members."'}
                  </p>
                  <p className="text-[11px] text-white/80 font-medium pt-1">
                    {isBengali ? '— বঙ্গীয় সাহা সমিতি (শুঁড়ি সমাজ)' : '— Bangiya Saha Samity (Sunri Samaj)'}
                  </p>
                </div>
              </div>

              {/* Card Footer: Quick Impact Counter */}
              <div className="p-4 bg-[#F4EFE6] border-t border-[#8A5A36]/15 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#8A5A36]/15 text-[#8A5A36] flex items-center justify-center">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#4A3B32]">
                      {isBengali ? 'ঐতিহাসিক সামাজিক সংগঠন' : 'Registered Social Organisation'}
                    </div>
                    <div className="text-[11px] text-[#8A5A36]">
                      {isBengali ? '১৯৩৬-৩৭ সাল থেকে অবিচল সমাজসেবায় নিবেদিত' : 'Serving Scheduled Caste Sunri Samaj Since 1936-37'}
                    </div>
                  </div>
                </div>

                <button
                  onClick={onDonateClick}
                  className="text-xs font-bold text-[#2D6A4F] hover:text-[#1B4332] flex items-center gap-1 bg-[#2D6A4F]/10 hover:bg-[#2D6A4F]/20 px-2.5 py-1.5 rounded-md transition-colors"
                >
                  <span>{isBengali ? 'অনুদান দিন' : 'Donate'}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Quick Community Assistance Notice */}
            <div className="p-3.5 rounded-xl bg-[#2D6A4F]/10 border border-[#2D6A4F]/20 text-xs flex items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2D6A4F] shrink-0"></span>
                <span className="text-[#3A4E3F] font-medium">
                  {isBengali 
                    ? 'তপশিলি জাতি শংসাপত্র, ছাত্রাবাস ও অতিথি কক্ষ (Guest Room) অথবা আইনি পরামর্শের প্রয়োজন?'
                    : 'Need SC Certificate guidance, hostel/Guest Room inquiry, or legal advice?'}
                </span>
              </div>
              <button
                onClick={onLegalAidClick}
                className="font-bold text-[#2D6A4F] underline hover:text-[#1B4332] whitespace-nowrap text-xs shrink-0"
              >
                {isBengali ? 'যোগাযোগ করুন →' : 'Contact Desk →'}
              </button>
            </div>

          </div>

        </div>

        {/* Indian Pattern Divider */}
        <div className="mt-12">
          <IndianPatternDivider variant="simple" />
        </div>

        {/* Impact Numbers Bar */}
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {t.metrics.map((metric, idx) => (
            <div 
              key={idx}
              className="p-4 sm:p-5 rounded-xl bg-[#FAF7F2] border border-[#8A5A36]/20 shadow-xs hover:border-[#2D6A4F] transition-all"
            >
              <div className="text-2xl sm:text-3xl font-serif-heading font-bold text-[#2D6A4F]">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#4A3B32] mt-1">
                {metric.label}
              </div>
              <div className="text-xs text-[#8A5A36] mt-0.5">
                {metric.subtext}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
