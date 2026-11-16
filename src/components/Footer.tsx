import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Check, 
  Building2, 
  ShieldCheck, 
  Send,
  Scale
} from 'lucide-react';
import { NGO_DETAILS } from '../data/ngoData';
import { TreeLogo } from './TreeLogo';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { PageId, PAGE_ROUTES } from '../types';

interface FooterProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({
  activePage,
  onNavigate
}) => {
  const { lang, isBengali } = useLanguage();
  const t = TRANSLATIONS[lang];
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 2000);
  };

  const navLinks: { id: PageId; labelEn: string; labelBn: string }[] = [
    { id: 'home', labelEn: 'Home', labelBn: 'প্রথম পাতা' },
    { id: 'about', labelEn: 'About Us', labelBn: 'আমাদের কথা' },
    { id: 'heritage', labelEn: 'Cultural Heritage', labelBn: 'সাংস্কৃতিক ঐতিহ্য' },
    { id: 'legends', labelEn: 'Our Legends', labelBn: 'স্মরণীয় ব্যক্তিত্ব' },
    { id: 'contact', labelEn: 'Contact & Offices', labelBn: 'যোগাযোগ ও কার্যালয়' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-200 border-t-4 border-orange-500">
      {/* Above Footer: Constitutional & Historical Founding Citation Bar */}
      <div className="bg-slate-950/95 border-b border-slate-800/80 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-3.5 lg:gap-8">
          {/* Left: Official Accreditation & Registration */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/25 text-xs font-medium text-amber-200/95 shrink-0 shadow-2xs">
            <Scale className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="tracking-wide">
              {isBengali ? 'স্থাপিত ১৯৩৪ • পূর্বতন রেজিঃ নং ০৪৫২২ (১৯৩৬-৩৭) • নতুন রেজিঃ নং SO969057' : 'Est. 1934 • Legacy Regd. No. 04522 (1936-37) • New Regd. No. SO969057'}
            </span>
          </div>

          {/* Right: Constitutional Citation & Quote */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-2 text-center lg:text-right text-xs sm:text-[13px] leading-relaxed">
            <p className="text-slate-300 font-normal">
              <span className="text-amber-400/90 font-serif mr-0.5">“</span>
              <span>{t.ambedkarQuote.replace(/^["'“”]|["'“”]$/g, '')}</span>
              <span className="text-amber-400/90 font-serif ml-0.5">”</span>
            </p>
            <div className="inline-flex items-center gap-1.5 shrink-0 text-slate-400">
              <span className="hidden sm:inline text-slate-600">•</span>
              <span className="px-2 py-0.5 rounded-md bg-slate-800/90 border border-slate-700/70 text-[11px] font-medium text-amber-300/90 tracking-wide">
                {isBengali ? 'ড. বি. আর. আম্বেদকর (১৯৫০)' : 'Dr. B. R. Ambedkar (1950)'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Top Pre-Footer CTA Bar */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-950 to-blue-900 py-10 px-4 sm:px-6 lg:px-8 border-b border-blue-800">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-orange-500/20 text-orange-300 text-xs font-bold uppercase tracking-wider">
              <span>{isBengali ? 'ঐতিহাসিক অঙ্গীকার' : 'Historic Mission Since 1934'}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif-heading font-bold text-white">
              {isBengali ? 'শুঁড়ি সমাজের কল্যাণ ও শিক্ষা বিস্তারে আপনার ভূমিকা অমূল্য' : 'Join Hands for Sunri Community Welfare & Education'}
            </h3>
            <p className="text-xs sm:text-sm text-blue-100 max-w-2xl">
              {isBengali
                ? 'কলকাতায় ছাত্রাবাসের আবাসিক ব্যবস্থা, সদস্যদের জন্য অতিথি কক্ষ, শুধুমাত্র আমাদের সম্প্রদায়ের জন্য শিক্ষার উদ্দেশ্যে সামাজিক সহায়তা (নারী উচ্চশিক্ষায় বিশেষ অগ্রাধিকার) ও আইনি অধিকার সুরক্ষায় যুক্ত হোন।'
                : 'Support collegiate student hostel living & community Guest Room in Central Kolkata, Social Help for Educational Purpose (Only for Our Community) with special priority for female higher education, and constitutional rights.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-3 rounded-xl font-bold text-xs bg-orange-600 text-white hover:bg-orange-500 shadow-sm border border-orange-400 flex items-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>{isBengali ? 'যোগাযোগ করুন' : 'Contact Us'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Identity & Legal Registration */}
          <div className="lg:col-span-4 space-y-4">
            <a 
              href={PAGE_ROUTES.home}
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
              className="flex items-center gap-3 group text-left"
            >
              <TreeLogo className="w-12 h-12 rounded-xl shrink-0 group-hover:scale-105 transition-transform" />
              <div>
                <h4 className="font-serif-heading text-lg font-bold text-white leading-tight group-hover:text-orange-400 transition-colors">
                  {isBengali ? 'বঙ্গীয় সাহা সমিতি (শুঁড়ি সমাজ)' : 'Bangiya Saha Samity (Sunri Samaj)'}
                </h4>
                <p className="text-xs text-orange-400 font-medium">
                  {isBengali 
                    ? "পশ্চিমবঙ্গ 'শুঁড়ি' সমাজ • স্থাপিত ১৯৩৬-৩৭"
                    : "West Bengal 'Sunri' Samaj (Est. 1936–37)"}
                </p>
              </div>
            </a>

            <p className="text-xs text-slate-300 leading-relaxed">
              {isBengali
                ? '১৯৩৪ সালে শ্রীশ্রী মা জগৎ জননী মন্দিরে প্রতিষ্ঠিত। নারী উচ্চশিক্ষায় বিশেষ অগ্রাধিকারসহ শিক্ষা বিস্তার, গ্রামীণ ছাত্রাবাসের আবাসিক ব্যবস্থা, সদস্যদের জন্য অতিথি কক্ষ (Guest Room), কুপ্রথা নিবারণ ও সাংবিধানিক অধিকার সুরক্ষায় বিগত ৮৮ বছর ধরে নিরবচ্ছিন্নভাবে নিবেদিত।'
                : 'Founded in 1934 at Maa Jagat Janani Temple. Dedicated to educational support with special priority for female higher education, rural student hostel residential arrangements, Guest Room facilities for community members, and constitutional rights across West Bengal.'}
            </p>

            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs space-y-1.5 text-slate-300">
              <div className="font-bold text-orange-400">
                {isBengali ? 'আইনি ও সরকারি নিবন্ধন:' : 'Official Credentials:'}
              </div>
              <div className="text-[11px]">• {isBengali ? 'পূর্বতন রেজিস্ট্রেশন নং: ০৪৫২২ (১৯৩৬-৩৭)' : 'Legacy Registration No: 04522 of 1936–37'}</div>
              <div className="text-[11px]">• {isBengali ? 'নতুন রেজিস্ট্রেশন নং: SO969057' : 'New Registration No: SO969057'}</div>
            </div>
          </div>

          {/* Col 2: Navigation Links (All 9 pages) */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-orange-400">
              {isBengali ? 'ওয়েবসাইট সূচিপত্র' : 'Quick Navigation'}
            </h5>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={PAGE_ROUTES[link.id]}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(link.id);
                    }}
                    className={`text-left hover:text-orange-400 transition-colors inline-block ${
                      activePage === link.id ? 'text-orange-400 font-bold' : 'text-slate-300'
                    }`}
                  >
                    {isBengali ? link.labelBn : link.labelEn}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Addresses & Contact Info */}
          <div className="lg:col-span-5 space-y-4">
            <h5 className="text-xs font-bold uppercase tracking-wider text-orange-400">
              {isBengali ? 'কার্যালয় ও যোগাযোগের ঠিকানা' : 'Offices & Helplines'}
            </h5>

            <div className="space-y-3 text-xs text-slate-300">
              {/* Central Office */}
              <div className="p-3 bg-slate-800/60 rounded-xl border border-slate-700 space-y-1">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-orange-400" />
                  <span>{isBengali ? 'কেন্দ্রীয় কার্যালয়, ৫০ আসনের ছাত্রাবাস ও অতিথি কক্ষ' : 'Central Office, 50-Seat Hostel & Guest Room'}</span>
                </div>
                <p className="text-[11px] text-slate-300">{isBengali ? (NGO_DETAILS.bengaliHeadOffice?.address || '৫২বি, ইন্ডিয়ান মিরর স্ট্রিট, কলকাতা – ৭০০০১৩ (তালতলা)') : NGO_DETAILS.headOffice.address}</p>
                <p className="text-[11px] text-slate-400">{isBengali ? (NGO_DETAILS.bengaliHeadOffice?.landmark || 'জি. ডি. হাসপাতালের বিপরীতে — অতিথি কক্ষের (Guest Room) সুবিধা উপলব্ধ') : NGO_DETAILS.headOffice.landmark}</p>
                <div className="text-[11px] text-orange-300 pt-0.5">
                  📞 {isBengali ? (NGO_DETAILS.bengaliHeadOffice?.phone || '০৩৩-২২২৭১৫৯৯ / ৯৪৩৩০৪১৫৯৭') : NGO_DETAILS.headOffice.phone} | ✉️ {NGO_DETAILS.headOffice.email}
                </div>
              </div>

              {/* Foundational Temple */}
              <div className="p-3 bg-slate-800/60 rounded-xl border border-slate-700 space-y-1">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  <span>{isBengali ? 'ঐতিহাসিক জন্মস্থান (প্রতিষ্ঠা ১৯৩৪)' : 'Foundational Birthplace (1934)'}</span>
                </div>
                <p className="text-[11px] text-slate-300">{isBengali ? (NGO_DETAILS.bengaliRegisteredSite?.templeName || 'মা জগৎ জননী মন্দির') : NGO_DETAILS.registeredSite.templeName}, {isBengali ? (NGO_DETAILS.bengaliRegisteredSite?.address || '৭৭ মানিকতলা স্ট্রিট, সিমলা, কলকাতা') : NGO_DETAILS.registeredSite.address}</p>
                <p className="text-[11px] text-slate-400">{isBengali ? (NGO_DETAILS.bengaliRegisteredSite?.historicalSignificance || '১৯৩৪ সালে স্থাপিত ঐতিহাসিক জন্মস্থান ও তীর্থ') : NGO_DETAILS.registeredSite.historicalSignificance}</p>
              </div>

              {/* Newsletter subscription */}
              <div className="pt-2">
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <label className="text-[11px] font-semibold text-slate-300 block">
                    {isBengali ? 'ত্রৈমাসিক বুলেটিন ও বিজ্ঞপ্তির জন্য ইমেল দিন:' : 'Subscribe for Quarterly Bulletins & Notifications:'}
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={isBengali ? 'আপনার ইমেল ঠিকানা লিখুন' : 'Enter email address'}
                      className="px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-xs text-white outline-none focus:border-orange-500 flex-1"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-orange-600 hover:bg-orange-500 rounded-lg text-xs font-bold text-white transition-colors"
                    >
                      {subscribed ? <Check className="w-4 h-4" /> : <Send className="w-4 h-4" />}
                    </button>
                  </div>
                  {subscribed && (
                    <p className="text-[11px] text-emerald-400">
                      {isBengali ? 'ধন্যবাদ! আপনার ইমেল নথিভুক্ত হয়েছে।' : 'Subscribed successfully!'}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-10 border-t border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p>
            {isBengali ? '© ১৯৩৬ – ২০২৬ বঙ্গীয় সাহা সমিতি (শুঁড়ি সমাজ)। সর্বস্বত্ব সংরক্ষিত।' : '© 1936 – 2026 Bangiya Saha Samity (Sunri Samaj). All rights reserved.'}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <span>{isBengali ? 'পশ্চিমবঙ্গ সমিতি নিবন্ধন আইন ১৯৬১' : 'West Bengal Societies Registration Act 1961'}</span>
            <span>•</span>
            <span>{isBengali ? 'স্থাপিত ১৯৩৪ (রেজি. ১৯৩৬-৩৭)' : 'Est. 1934 (Regd. 1936-37)'}</span>
            <span>•</span>
            <span>{isBengali ? 'জি. ডি. হাসপাতালের বিপরীতে, তালতলা' : 'Opp. G.D. Hospital, Taltala'}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
