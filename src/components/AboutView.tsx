import React, { useState } from 'react';
import { 
  Building2, 
  Scale, 
  Award, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  MapPin, 
  Calendar, 
  FileText, 
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  HeartHandshake,
  Layers,
  GraduationCap,
  Phone,
  Mail,
  Crown,
  Briefcase,
  UserCheck,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { 
  HISTORICAL_MILESTONES, 
  SOCIETY_OBJECTIVES, 
  LEADERSHIP_MEMBERS, 
  ORGANIZATIONAL_HIERARCHY,
  NGO_DETAILS,
  ADVISORY_BOARD_MEMBERS,
  CENTRAL_OFFICE_BEARERS,
  VICE_PRESIDENTS_LIST,
  EXECUTIVE_COMMITTEE_LIST
} from '../data/ngoData';
import { IndianPatternDivider } from './IndianPatternDivider';
import { PageId } from '../types';

interface AboutViewProps {
  onNavigate: (page: PageId) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  const { lang, isBengali } = useLanguage();
  const [activeTab, setActiveTab] = useState<'all' | 'advisory' | 'office_bearers' | 'vice_presidents' | 'committee'>('all');

  const filteredLeadership = LEADERSHIP_MEMBERS.filter(member => {
    if (activeTab === 'all') return true;
    if (activeTab === 'advisory') return member.tier === 'Advisory';
    if (activeTab === 'office_bearers') return member.tier === 'OfficeBearer' || member.tier === 'Secretariat';
    if (activeTab === 'vice_presidents') return member.tier === 'VicePresident';
    if (activeTab === 'committee') return member.tier === 'Committee';
    return true;
  });

  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-950 to-blue-900 text-white py-14 px-4 sm:px-6 lg:px-8 border-b-4 border-orange-500">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-xs font-bold uppercase tracking-wider border border-orange-400/30">
            <Building2 className="w-3.5 h-3.5" />
            <span>{isBengali ? 'আমাদের সম্পর্কে ও গৌরবময় ইতিহাস' : 'About Us & Historic Journey'}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif-heading font-bold text-white tracking-tight">
            {isBengali 
              ? 'বঙ্গীয় সাহা সমিতি (শুঁড়ি সমাজ)-র ইতিবৃত্ত ও নেতৃত্ব' 
              : 'History, Mission, Vision & Leadership of Bangiya Saha Samity'}
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-3xl leading-relaxed">
            {isBengali
              ? '১৯৩৪ সালে প্রতিষ্ঠা, ১৯৩৬-৩৭ সালে সরকারি নিবন্ধন (নং ৪৫২২) এবং ১৯৫০ সালে ড. বি. আর. আম্বেদকর কর্তৃক সংবিধানে তপশিলি স্বীকৃতি—৮৮ বছরের ঐতিহ্য ও সংগ্রামের সম্পূর্ণ চিত্র।'
              : 'Founded in 1934, registered in 1936-37 (Regd. No. 4522), and protected in the 1950 Constitution of India by Dr. B. R. Ambedkar—an inspiring chronicle of community advancement and resilience.'}
          </p>
        </div>
      </section>

      {/* 1. HISTORY OF THE ORGANIZATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="border-l-4 border-blue-900 pl-4 space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
              {isBengali ? 'ঐতিহাসিক পরিক্রমা' : 'Chronicle & Milestones'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif-heading font-bold text-blue-900">
              {isBengali ? 'সংগঠনের পূর্ণাঙ্গ ইতিহাস ও সংগ্রাম' : 'History of the Organization'}
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 leading-relaxed text-slate-700 space-y-4 text-base">
            <p>
              {isBengali 
                ? 'বঙ্গীয় সাহা সমিতি (শুঁড়ি সমাজ) ১৯৩৪ সালে কলকাতার ৭৭ মানিকতলা স্ট্রিটের (সিমলা) মা জগৎ জননী মন্দিরে সমাজের বিশিষ্ট ব্যক্তিবর্গের দ্বারা গঠিত হয়। পরবর্তীতে সমাজকল্যাণমূলক কর্মকাণ্ডের বিধিবদ্ধ কাঠামোর স্বার্থে ১৯৩৬-৩৭ সালে সোসাইটি রেজিস্ট্রেশন অ্যাক্টের অধীন নিবন্ধন নং ৪৫২২ অনুযায়ী এটি নিবন্ধিত হয়।'
                : 'Bangiya Saha Samity (Sunri Samaj) was established in 1934 by distinguished community leaders at Maa Jagat Janani Temple, situated at 77 Maniktala Street, Kolkata – 700006 (Simla). To diffuse useful knowledge, promote education, and introduce social reforms, the organization was formally registered under Registration No. 4522 of 1936–37.'}
            </p>
            <p>
              {isBengali
                ? '১৯৩৫ সালের গভর্নমেন্ট অব ইন্ডিয়া অ্যাক্টের অধীনে ব্রিটিশ প্রশাসন অর্থনৈতিক ও সামাজিকভাবে পিছিয়ে থাকা শুঁড়ি সম্প্রদায়কে তপশিলি জাতি হিসেবে ঘোষণা করে। পরবর্তীতে ১৯৫০ সালে স্বাধীন ভারতের সংবিধান রচনার সময় সংবিধানের জনক বাবাসাহেব ড. বি. আর. আম্বেদকর শুঁড়ি সম্প্রদায়কে সংবিধানে তপশিলি জাতি হিসেবে সসম্মানে অন্তর্ভুক্ত করেন।'
                : 'Under the Government of India Act of 1935, the economically and socially backward Sunri community was designated as a Scheduled Caste. In 1950, Dr. Baba Saheb Ambedkar firmly enshrined the Sunri community in the Constitution of India, guaranteeing vital reservations and constitutional safeguards.'}
            </p>
            <p>
              {isBengali
                ? '১৯৫৬ সালে সমিতির নেতৃবৃন্দ ও সমাজের দানশীল ও প্রখ্যাত ব্যক্তিবর্গের সহায়তায় কলকাতার ৫২বি ইন্ডিয়ান মিরর স্ট্রিটে নিজস্ব জমিতে চারতলা স্থায়ী কেন্দ্রীয় কার্যালয় ভবন ক্রয় ও নির্মাণ করা হয়। এই ভবনের ৩য় ও ৪র্থ তলায় দূরবর্তী গ্রামীণ মেধাবী ও অসচ্ছল ছাত্রদের জন্য ছাত্রাবাসের আবাসিক ব্যবস্থা করা হয় (২০১৮ সাল থেকে ছাত্রীদের জন্য পৃথক শাখা চালু হয়েছে, বর্তমানে মোট ৫০ জন শিক্ষার্থীর আবাসিক ব্যবস্থা করা হয়) এবং সমাজের সদস্যদের জন্য অতিথি কক্ষের (Guest Room) সুবিধাও রয়েছে।'
                : 'In 1956, through the contributions of philanthropic and distinguished community well-wishers, the Samity acquired and constructed its permanent four-storeyed Central Office at 52B Indian Mirror Street, Kolkata – 700013. On its 3rd and 4th floors, residential hostel arrangements are made for up to 50 rural boys and girls pursuing higher education in Kolkata (with a female wing opened in 2018), alongside a Guest Room facility for community members.'}
            </p>
            <p>
              {isBengali
                ? '১৯৬৫ ও ১৯৯৬ সালে রাজ্য সরকারের ভুল নির্দেশিকার বিরুদ্ধে সমিতি সুপ্রিম কোর্ট পর্যন্ত ঐতিহাসিক আইনি লড়াই পরিচালনা করে সম্প্রদায়ের তপশিলি অধিকার রক্ষা করে।'
                : 'In response to discriminatory administrative circulars in 1965 and 1996, the Samity mounted landmark legal battles before the Hon\'ble Supreme Court to protect community rights.'}
            </p>
          </div>

          {/* Timeline of Key Milestones */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {HISTORICAL_MILESTONES.map((item) => (
              <div 
                key={item.year}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:border-blue-900 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold font-serif-heading text-orange-600 bg-orange-50 px-3 py-1 rounded-lg border border-orange-200">
                      {isBengali && item.year === '1934 - 1935' ? '১৯৩৪ - ১৯৩৫' : isBengali && item.year === '1936 - 1937' ? '১৯৩৬ - ১৯৩৭' : isBengali && item.year === '1950' ? '১৯৫০' : isBengali && item.year === '1956' ? '১৯৫৬' : isBengali && item.year === '2000' ? '২০০০' : isBengali && item.year === '2018 - 2026' ? '২০১৮ - ২০২৬' : item.year}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-blue-50 text-blue-900">
                      {isBengali ? (item.bengaliBadge || item.badge) : item.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-blue-950 leading-snug">
                    {isBengali ? (item.bengaliTitle || item.title) : item.title}
                  </h3>

                  <p className="text-xs text-slate-500 font-medium">
                    📍 {isBengali ? (item.bengaliLocation || item.location) : item.location}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {isBengali ? item.bengaliDescription : item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2 & 3. OUR MISSION & OUR VISION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border-t-4 border-blue-900 border-x border-b border-slate-200 space-y-5">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-serif-heading font-bold text-blue-900">
              {isBengali ? 'আমাদের লক্ষ্য' : 'Our Mission'}
            </h2>
            <p className="text-base text-slate-700 leading-relaxed">
              {isBengali
                ? 'শিক্ষা সহায়তার মাধ্যমে পশ্চিমবঙ্গের তপশিলি জাতি শুঁড়ি সমাজের সার্বিক উন্নতি—বিশেষত নারী উচ্চশিক্ষায় বিশেষ অগ্রাধিকার, শুধুমাত্র আমাদের সম্প্রদায়ের জন্য শিক্ষার উদ্দেশ্যে সামাজিক সহায়তা, গ্রামীণ শিক্ষার্থীদের ছাত্রাবাসের আবাসিক ব্যবস্থা, সদস্যদের জন্য অতিথি কক্ষ (Guest Room), সাংস্কৃতিক ঐতিহ্য সংরক্ষণ এবং দুস্থ ও বিপন্ন মানুষের পাশে দাঁড়ানো।'
                : 'Focused on educational support for the Scheduled Caste Sunri community across West Bengal—highlighting a special priority for female higher education, Social Help for Educational Purpose (Only for Our Community), residential hostel arrangements for rural students, a Guest Room facility for community members, social reform, and distress relief.'}
            </p>
            <div className="pt-2 border-t border-slate-100 space-y-2 text-sm text-slate-600">
              <div className="font-semibold text-blue-900 text-xs uppercase tracking-wider">
                {isBengali ? '৫টি প্রতিষ্ঠাতা উদ্দেশ্য:' : 'The 5 Founding Objectives:'}
              </div>
              <ul className="space-y-2 text-xs">
                {SOCIETY_OBJECTIVES.map((obj, i) => (
                  <li key={obj.id} className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-900 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {isBengali ? ['১','২','৩','৪','৫'][i] || i + 1 : i + 1}
                    </span>
                    <span>{isBengali ? obj.hindiTitle : obj.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border-t-4 border-orange-500 border-x border-b border-slate-200 space-y-5">
            <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-serif-heading font-bold text-blue-900">
              {isBengali ? 'আমাদের দর্শন' : 'Our Vision'}
            </h2>
            <p className="text-base text-slate-700 leading-relaxed">
              {isBengali
                ? 'একটি সুশিক্ষিত, আত্মমর্যাদাশীল ও ঐক্যবদ্ধ শুঁড়ি সমাজ গঠন করা—যেখানে নারী উচ্চশিক্ষায় বিশেষ অগ্রাধিকারের মাধ্যমে প্রতিটি গ্রামীণ মেধাবী শিক্ষার্থী উচ্চশিক্ষার পূর্ণ সুযোগ পাবে এবং সমাজের সদস্যদের জন্য ছাত্রাবাস ও অতিথি কক্ষসহ সাংবিধানিক সুরক্ষা অটুট থাকবে।'
                : 'To build an empowered, educated, and culturally proud Sunri community led by a special priority for female higher education, accessible educational support, community Guest Room and hostel hospitality, constitutional security, and social solidarity.'}
            </p>
            <div className="pt-2 border-t border-slate-100 space-y-2 text-sm text-slate-600">
              <div className="font-semibold text-orange-600 text-xs uppercase tracking-wider">
                {isBengali ? 'ভবিষ্যৎ কর্মপরিকল্পনা:' : 'Strategic Vision Pillars:'}
              </div>
              <ul className="space-y-2 text-xs">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                  <span>{isBengali ? 'নারী উচ্চশিক্ষায় বিশেষ অগ্রাধিকার এবং শুধুমাত্র আমাদের সম্প্রদায়ের জন্য শিক্ষার উদ্দেশ্যে সামাজিক সহায়তা সম্প্রসারণ।' : 'Highlighting a special priority for female higher education and expanding Social Help for Educational Purpose (Only for Our Community).'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                  <span>{isBengali ? 'ছাত্রাবাসের আবাসিক ব্যবস্থা ও সমাজের সদস্যদের জন্য অতিথি কক্ষের (Guest Room) আধুনিক পরিকাঠামো বজায় রাখা।' : 'Sustaining residential student hostel arrangements and Guest Room facilities for community members visiting Kolkata.'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                  <span>{isBengali ? 'পশ্চিমবঙ্গের ২৩টি জেলাতেই আইনি ও ছাত্র সহায়তা সমন্বয় এবং ঐতিহ্যবাহী প্রকাশনা নিয়মিতকরণ।' : 'Maintaining district welfare liaison cells across all 23 districts of W.B. and historical archives.'}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Divider */}
      <IndianPatternDivider variant="simple" />

      {/* 4. LEADERSHIP TEAM */}
      <section id="leadership" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
          <div className="border-l-4 border-blue-900 pl-4 space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
              {isBengali ? 'নেতৃত্ব ও দিকদর্শন' : 'Governance & Leadership'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif-heading font-bold text-blue-900">
              {isBengali ? 'আমাদের উপদেষ্টা ও নেতৃত্ব মণ্ডলী' : 'Leadership Team & Advisory Board'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
              {isBengali 
                ? 'বঙ্গীয় সাহা সমিতি (শুঁড়ি সমাজ)-র উপদেষ্টা মণ্ডলী, কেন্দ্রীয় পদাধিকারী ও কার্যনির্বাহী নেতৃবৃন্দের পূর্ণাঙ্গ পরিচিতি।'
                : 'Meet the dedicated patrons, apex office bearers, regional vice presidents, and executive stewards guiding our social mission.'}
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center bg-slate-100 p-1.5 rounded-xl text-xs font-bold gap-1 border border-slate-200">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTab === 'all' ? 'bg-blue-900 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              {isBengali ? 'সকল সদস্য' : 'All Leaders'}
            </button>
            <button
              onClick={() => setActiveTab('advisory')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTab === 'advisory' ? 'bg-blue-900 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              {isBengali ? 'উপদেষ্টা পরিষদ' : 'Advisory Board'}
            </button>
            <button
              onClick={() => setActiveTab('office_bearers')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTab === 'office_bearers' ? 'bg-blue-900 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              {isBengali ? 'কেন্দ্রীয় কর্মকর্তা' : 'Office Bearers'}
            </button>
            <button
              onClick={() => setActiveTab('vice_presidents')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTab === 'vice_presidents' ? 'bg-blue-900 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              {isBengali ? 'সহ-সভাপতিমণ্ডলী' : 'Vice Presidents'}
            </button>
            <button
              onClick={() => setActiveTab('committee')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTab === 'committee' ? 'bg-blue-900 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              {isBengali ? 'কার্যনির্বাহী সদস্য' : 'Committee Members'}
            </button>
          </div>
        </div>

        {/* Leadership Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLeadership.map((member) => {
            const isAdvisory = member.tier === 'Advisory';
            const isOfficeBearer = member.tier === 'OfficeBearer';
            const isVicePres = member.tier === 'VicePresident';
            const isNamitaSaha = member.id === 'adv-namita-saha' || member.name.includes('Namita') || member.imageUrl.includes('Namita');

            return (
              <div 
                key={member.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:border-blue-900 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-64 bg-gradient-to-tr from-slate-900 via-slate-800 to-blue-950 overflow-hidden">
                    <img
                      src={member.imageUrl}
                      alt={isBengali ? member.bengaliName : member.name}
                      className={
                        isNamitaSaha
                          ? "w-full h-full object-contain object-top origin-top scale-[1.25] drop-shadow-xl opacity-95 transition-transform duration-300 group-hover:scale-[1.28]"
                          : "w-full h-full object-cover object-top opacity-95 group-hover:scale-105 transition-transform duration-300"
                      }
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none"></div>
                    
                    <div className="absolute top-3 right-3">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold shadow-xs ${
                        isAdvisory ? 'bg-amber-500 text-slate-950 font-black' :
                        isOfficeBearer ? 'bg-orange-600 text-white' :
                        isVicePres ? 'bg-blue-800 text-white' :
                        'bg-slate-800 text-blue-100'
                      }`}>
                        {isBengali ? member.bengaliRole : member.role}
                      </span>
                    </div>

                    {member.district && (
                      <div className="absolute bottom-2.5 left-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs text-[11px] text-amber-300 font-semibold flex items-center gap-1 border border-white/20">
                        <MapPin className="w-3 h-3 text-orange-400" />
                        <span>{isBengali ? (member.bengaliDistrict || member.district) : member.district}</span>
                      </div>
                    )}
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-serif-heading font-bold text-blue-950">
                      {isBengali ? member.bengaliName : member.name}
                    </h3>
                    <div className="text-xs font-semibold text-orange-600 flex items-center gap-1.5">
                      {isAdvisory ? <Crown className="w-3.5 h-3.5 text-amber-500" /> : <Award className="w-3.5 h-3.5 text-blue-900" />}
                      <span>{isBengali ? member.bengaliRole : member.role}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {isBengali ? member.bengaliBio : member.bio}
                    </p>
                  </div>
                </div>

                <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
                  <span>📍 {isBengali ? ((member as any).bengaliContactNote || '৫২বি ইন্ডিয়ান মিরর স্ট্রিট, কলকাতা') : (member.contactNote || '52B Indian Mirror St, Kolkata')}</span>
                  <span className="font-semibold text-blue-900 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{isBengali ? 'অনুমোদিত' : 'Official'}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Cultural Divider */}
      <IndianPatternDivider variant="simple" />

      {/* 5. EXECUTIVE COMMITTEE STRUCTURE (Visual Representation Inspired by Official Notice Board) */}
      <section id="executive-committee-structure" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-l-4 border-blue-900 pl-4 space-y-1">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
            {isBengali ? 'অফিসিয়াল কাউন্সিল রোস্টার' : 'Official Notice & Committee Roster'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif-heading font-bold text-blue-900">
            {isBengali ? 'কার্যনির্বাহী পরিষদ ও উপদেষ্টা মণ্ডলীর পূর্ণাঙ্গ কাঠামো' : 'Executive Committee Structure & Official Roster'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-3xl">
            {isBengali
              ? 'বঙ্গীয় সাহা সমিতির কেন্দ্রীয় নোটিশ অনুযায়ী উপদেষ্টা পরিষদ, পদাধিকারীবৃন্দ, সহ-সভাপতিমণ্ডলী ও নির্বাচিত ১৬ জন কার্যনির্বাহী পরিষদ সদস্যের পূর্ণাঙ্গ তালিকা।'
              : 'As authenticated on the official notice of Bangiya Saha Samity, showcasing the Advisory Board, Central Officers, Vice Presidents, and all 16 Executive Committee Members.'}
          </p>
        </div>

        {/* Notice Board Frame */}
        <div className="bg-gradient-to-b from-amber-50/60 via-white to-slate-50 rounded-3xl border-4 border-emerald-800/30 p-6 sm:p-10 shadow-lg relative overflow-hidden">
          {/* Official Notice Header */}
          <div className="text-center pb-8 border-b-2 border-emerald-800/20 space-y-2">
            <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-widest border border-emerald-300">
              {isBengali ? "বঙ্গীয় সাহা সমিতি • পশ্চিমবঙ্গ 'শুঁড়ি' সমাজ" : "BANGIYA SAHA SAMITY • West Bengal 'Sunri' Samaj"}
            </div>
            <p className="text-xs sm:text-sm font-semibold text-blue-950">
              {isBengali ? '৫২বি, ইন্ডিয়ান মিরর স্ট্রিট, কলকাতা-৭০০০১৩ (জি. ডি. হাসপাতালের বিপরীতে), তালতলা' : '52B, INDIAN MIRROR STREET, KOLKATA-700013 (Opposite G. D. Hospital), Taltala'}
            </p>
            <div className="text-xs sm:text-sm text-slate-700 font-mono flex flex-wrap items-center justify-center gap-x-4 gap-y-1 pt-1">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-orange-600" />
                <span>{isBengali ? 'ফোন: ০৩৩-২২২৭১৫৯৯ / ৯৪৩৩০৪১৫৯৭' : 'Phone: 033-22271599 / 9433041597 (M)'}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-blue-900" />
                <span>{isBengali ? 'ইমেল: bangiyasahasamity1@gmail.com' : 'E-mail: bangiyasahasamity1@gmail.com'}</span>
              </span>
            </div>
            <p className="text-xs text-slate-500">
              {isBengali ? 'নিবন্ধন নং ৪৫২২ (১৯৩৬-৩৭) • স্থাপিত ১৯৩৪' : 'Regd. No. 4522 of 1936–37 • Estd. 1934'}
            </p>
          </div>

          <div className="pt-8 space-y-10">
            {/* 1. ADVISORY BOARD */}
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-800 text-white font-serif-heading font-bold text-sm tracking-widest uppercase shadow-sm">
                <span>{isBengali ? '— উপদেষ্টা মণ্ডলী —' : '— ADVISORY BOARD (উপদেষ্টা মণ্ডলী) —'}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto pt-2">
                <div className="bg-white p-5 rounded-2xl border-2 border-emerald-700/30 shadow-xs space-y-1 text-center">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-red-100 text-red-700 text-xs font-extrabold uppercase tracking-wider">
                    {isBengali ? 'সভানেত্রী' : 'CHAIRPERSON'}
                  </span>
                  <h4 className="text-lg font-serif-heading font-bold text-blue-950">
                    {isBengali ? 'শ্রীমতী নমিতা সাহা' : 'Mrs. NAMITA SAHA'} <span className="text-xs font-semibold text-slate-500">{isBengali ? '(প্রাক্তন বিধায়ক)' : '(Ex. M.L.A)'}</span>
                  </h4>
                  <p className="text-xs text-slate-600 font-medium">
                    {isBengali ? 'শ্রীমতী নমিতা সাহা (প্রাক্তন বিধায়ক) — সভানেত্রী' : 'Former Member of the Legislative Assembly'}
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border-2 border-emerald-700/30 shadow-xs space-y-1 text-center">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-red-100 text-red-700 text-xs font-extrabold uppercase tracking-wider">
                    {isBengali ? 'প্রধান উপদেষ্টা' : 'CHIEF ADVISOR'}
                  </span>
                  <h4 className="text-lg font-serif-heading font-bold text-blue-950">
                    {isBengali ? 'কৃষ্ণ কান্ত সাহা' : 'KRISHNA KANTA SAHA'} <span className="text-xs font-bold text-orange-600">{isBengali ? '(কেষ্ট দা)' : '(KESTO DA)'}</span>
                  </h4>
                  <p className="text-xs text-slate-600 font-medium">
                    {isBengali ? 'কৃষ্ণ কান্ত সাহা (কেষ্ট দা) — প্রধান উপদেষ্টা' : 'Veteran Community Patron & Elder Guide'}
                  </p>
                </div>
              </div>
            </div>

            {/* 2. PRESIDENT */}
            <div className="text-center space-y-2 max-w-md mx-auto">
              <span className="inline-block px-3 py-0.5 rounded-full bg-red-600 text-white text-xs font-extrabold uppercase tracking-wider shadow-xs">
                {isBengali ? 'সভাপতি' : 'PRESIDENT'}
              </span>
              <div className="bg-white p-4 rounded-2xl border-2 border-blue-900/30 shadow-xs">
                <h4 className="text-xl font-serif-heading font-bold text-blue-950">
                  {isBengali ? 'বিকাশ বিশ্বাস' : 'BIKASH BISWAS'}
                </h4>
                <p className="text-xs text-slate-600 font-medium">
                  {isBengali ? 'বিকাশ বিশ্বাস — সভাপতি' : 'President, Central Executive Council'}
                </p>
              </div>
            </div>

            {/* 3. VICE PRESIDENTS (8 Members in exact numbered format from document) */}
            <div className="space-y-4">
              <div className="text-center">
                <span className="inline-block px-4 py-1 rounded-full bg-red-600 text-white text-xs font-extrabold uppercase tracking-wider shadow-xs">
                  {isBengali ? 'সহ-সভাপতিমণ্ডলী (৮ জন বিশিষ্ট সদস্য)' : "VICE PRESIDENT'S (সহ-সভাপতিমণ্ডলী)"}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl mx-auto">
                {VICE_PRESIDENTS_LIST.map((vp) => (
                  <div 
                    key={vp.slNo}
                    className="p-3.5 bg-white rounded-xl border border-slate-200 hover:border-blue-900 transition-all flex items-center justify-between shadow-2xs"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-900 font-bold text-xs flex items-center justify-center shrink-0">
                        {isBengali ? (vp.slNo === 1 ? '১' : vp.slNo === 2 ? '২' : vp.slNo === 3 ? '৩' : vp.slNo === 4 ? '৪' : vp.slNo === 5 ? '৫' : vp.slNo === 6 ? '৬' : vp.slNo === 7 ? '৭' : '৮') : vp.slNo}
                      </span>
                      <div>
                        <div className="font-bold text-blue-950 text-sm">
                          {isBengali ? vp.bengaliName : vp.name}
                        </div>
                        <div className="text-[11px] text-slate-500">
                          {isBengali ? (vp.bengaliRegion || vp.region) : vp.region}
                        </div>
                      </div>
                    </div>
                    {vp.district && (
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-orange-50 text-orange-700 border border-orange-200">
                        {isBengali ? (vp.bengaliDistrict || vp.district) : vp.district}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 4. SECRETARY & ASSTT. SECRETARIES */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Secretary */}
              <div className="bg-white p-5 rounded-2xl border-2 border-blue-900/30 shadow-xs text-center space-y-2">
                <span className="inline-block px-3 py-0.5 rounded-full bg-red-600 text-white text-xs font-extrabold uppercase tracking-wider">
                  {isBengali ? 'সাধারণ সম্পাদক' : 'SECRETARY'}
                </span>
                <h4 className="text-xl font-serif-heading font-bold text-blue-950">
                  {isBengali ? 'সুবীর সাহা' : 'SUBIR SAHA'}
                </h4>
                <p className="text-xs text-slate-600 font-medium">
                  {isBengali ? 'সুবীর সাহা — সাধারণ সম্পাদক' : 'Secretary, Bangiya Saha Samity'}
                </p>
              </div>

              {/* Asstt. Secretaries */}
              <div className="bg-white p-5 rounded-2xl border-2 border-slate-300 shadow-xs text-center space-y-2">
                <span className="inline-block px-3 py-0.5 rounded-full bg-red-600 text-white text-xs font-extrabold uppercase tracking-wider">
                  {isBengali ? 'সহকারী সম্পাদকবৃন্দ' : 'ASSTT. SECRETARIES'}
                </span>
                <div className="space-y-1">
                  <div className="font-bold text-blue-950 text-sm">{isBengali ? '১) সন্দীপ খাঁ' : '1) SANDIP KHAN'}</div>
                  <div className="font-bold text-blue-950 text-sm">{isBengali ? '২) স্নেহাশিস বিশ্বাস' : '2) SNEHASISH BISWAS'}</div>
                </div>
                <p className="text-[11px] text-slate-500 font-medium">
                  {isBengali ? 'সন্দীপ খাঁ • স্নেহাশিস বিশ্বাস (সহকারী সম্পাদক)' : 'Assistant Secretaries (Administration & Outreach)'}
                </p>
              </div>
            </div>

            {/* 5. TREASURER & ASSTT. TREASURERS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Treasurer */}
              <div className="bg-white p-5 rounded-2xl border-2 border-blue-900/30 shadow-xs text-center space-y-2">
                <span className="inline-block px-3 py-0.5 rounded-full bg-red-600 text-white text-xs font-extrabold uppercase tracking-wider">
                  {isBengali ? 'কোষাধ্যক্ষ' : 'TREASURER'}
                </span>
                <h4 className="text-xl font-serif-heading font-bold text-blue-950">
                  {isBengali ? 'আশিস কুমার সাহা' : 'ASHIS KUMAR SAHA'}
                </h4>
                <p className="text-xs text-slate-600 font-medium">
                  {isBengali ? 'আশিস কুমার সাহা — কোষাধ্যক্ষ' : 'Treasurer & Finance Custodian'}
                </p>
              </div>

              {/* Asstt. Treasurers */}
              <div className="bg-white p-5 rounded-2xl border-2 border-slate-300 shadow-xs text-center space-y-2">
                <span className="inline-block px-3 py-0.5 rounded-full bg-red-600 text-white text-xs font-extrabold uppercase tracking-wider">
                  {isBengali ? 'সহকারী কোষাধ্যক্ষবৃন্দ' : 'ASSTT. TREASURER'}
                </span>
                <div className="space-y-1">
                  <div className="font-bold text-blue-950 text-sm">{isBengali ? '১) উজ্জ্বল বিশ্বাস' : '1) UJJAL BISWAS (BISWAI)'}</div>
                  <div className="font-bold text-blue-950 text-sm">{isBengali ? '২) মৃণাল সাহা' : '2) MRINAL SAHA'}</div>
                </div>
                <p className="text-[11px] text-slate-500 font-medium">
                  {isBengali ? 'উজ্জ্বল বিশ্বাস • মৃণাল সাহা (সহকারী কোষাধ্যক্ষ)' : 'Assistant Treasurers (Ledger & Accounting)'}
                </p>
              </div>
            </div>

            {/* 6. EXECUTIVE COMMITTEE (16 Members in 2-column numbered roster) */}
            <div className="space-y-4">
              <div className="text-center">
                <span className="inline-block px-4 py-1 rounded-full bg-red-600 text-white text-xs font-extrabold uppercase tracking-wider shadow-xs">
                  {isBengali ? 'কার্যনির্বাহী পরিষদ (১৬ জন সদস্য)' : 'EXECUTIVE COMMITTEE (কার্যনির্বাহী পরিষদ - ১৬ জন সদস্য)'}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-4xl mx-auto">
                {EXECUTIVE_COMMITTEE_LIST.map((member) => (
                  <div 
                    key={member.slNo}
                    className="p-3 bg-white rounded-xl border border-slate-200 hover:border-emerald-700/50 hover:bg-emerald-50/20 transition-all flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-900 font-bold text-[11px] flex items-center justify-center shrink-0">
                        {isBengali ? (member.slNo === 1 ? '১' : member.slNo === 2 ? '২' : member.slNo === 3 ? '৩' : member.slNo === 4 ? '৪' : member.slNo === 5 ? '৫' : member.slNo === 6 ? '৬' : member.slNo === 7 ? '৭' : member.slNo === 8 ? '৮' : member.slNo === 9 ? '৯' : member.slNo === 10 ? '১০' : member.slNo === 11 ? '১১' : member.slNo === 12 ? '১২' : member.slNo === 13 ? '১৩' : member.slNo === 14 ? '১৪' : member.slNo === 15 ? '১৫' : '১৬') : member.slNo}
                      </span>
                      <div>
                        <span className="font-bold text-slate-900">{isBengali ? member.bengaliName : member.name}</span>
                        <div className="text-[10px] text-slate-500">
                          {isBengali ? (member.bengaliPortfolio || member.portfolio) : member.portfolio}
                        </div>
                      </div>
                    </div>
                    {member.district && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-blue-900 border border-slate-200">
                        {isBengali ? (member.bengaliDistrict || member.district) : member.district}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Divider */}
      <IndianPatternDivider variant="simple" />

      {/* 6. ORGANIZATIONAL STRUCTURE SECTION (5-Tier Framework) */}
      <section id="organizational-structure" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-l-4 border-orange-500 pl-4 space-y-1">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
            {isBengali ? 'সাংগঠনিক সোপান ও কাঠামো' : 'Governance Framework'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif-heading font-bold text-blue-900">
            {isBengali ? 'সাংগঠনিক কাঠামো (৫-স্তরীয় প্রশাসনিক রূপরেখা)' : 'Organizational Structure (5-Tier Hierarchy)'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-3xl">
            {isBengali
              ? 'উপদেষ্টা পরিষদ থেকে স্থানীয় পর্যায় পর্যন্ত বঙ্গীয় সাহা সমিতির ৫-স্তরের প্রাতিষ্ঠানিক দায়িত্ব ও প্রশাসনিক বণ্টন।'
              : 'The comprehensive five-tier institutional framework governing Bangiya Saha Samity from top-level legislative guidance down to district life members.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Interactive Tier Tree */}
          <div className="lg:col-span-8 space-y-4">
            {ORGANIZATIONAL_HIERARCHY.map((level, idx) => (
              <div 
                key={level.level}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs hover:border-blue-900 hover:shadow-md transition-all space-y-2 relative"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-orange-600 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                      {isBengali ? (idx === 0 ? '১' : idx === 1 ? '২' : idx === 2 ? '৩' : idx === 3 ? '৪' : '৫') : idx + 1}
                    </span>
                    <h3 className="font-serif-heading font-bold text-blue-950 text-base sm:text-lg">
                      {isBengali ? level.bengaliLevel : level.level}
                    </h3>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-900 border border-blue-200">
                    {isBengali ? `${idx === 0 ? '১' : idx === 1 ? '২' : idx === 2 ? '৩' : idx === 3 ? '৪' : '৫'}-ম স্তর` : `Tier ${idx + 1}`}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                  {isBengali ? level.bengaliDesc : level.desc}
                </p>

                {/* Sub-highlights according to tier */}
                <div className="pt-2 flex flex-wrap gap-2 text-[11px]">
                  {idx === 0 && (
                    <>
                      <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-900 font-medium">{isBengali ? 'শ্রীমতী নমিতা সাহা (প্রাক্তন বিধায়ক)' : 'Mrs. Namita Saha (Ex-MLA)'}</span>
                      <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-900 font-medium">{isBengali ? 'কৃষ্ণ কান্ত সাহা (কেষ্ট দা)' : 'Krishna Kanta Saha (Kesto Da)'}</span>
                    </>
                  )}
                  {idx === 1 && (
                    <>
                      <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-900 font-medium">{isBengali ? 'সভাপতি: বিকাশ বিশ্বাস' : 'President: Bikash Biswas'}</span>
                      <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-900 font-medium">{isBengali ? 'সম্পাদক: সুবীর সাহা' : 'Secretary: Subir Saha'}</span>
                      <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-900 font-medium">{isBengali ? 'কোষাধ্যক্ষ: আশিস কুমার সাহা' : 'Treasurer: Ashis Kumar Saha'}</span>
                    </>
                  )}
                  {idx === 2 && (
                    <>
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">{isBengali ? '৮ জন সহ-সভাপতি (বীরভূম, বাঁকুড়া, হুগলি প্রভৃতি)' : '8 Vice Presidents (Birbhum, Bankura, Hooghly, etc.)'}</span>
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">{isBengali ? '২ জন সহ-সম্পাদক ও ২ জন সহকারী কোষাধ্যক্ষ' : '2 Asstt. Secretaries & 2 Asstt. Treasurers'}</span>
                    </>
                  )}
                  {idx === 3 && (
                    <>
                      <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-900 font-medium">{isBengali ? '১৬ জন সাধারণ কার্যনির্বাহী সদস্য' : '16 General Executive Committee Members'}</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-900 font-medium">{isBengali ? 'স্বাস্থ্যসেবা, ছাত্রাবাস, আইনি ও জেলা সমন্বয় ডেস্ক' : 'Healthcare, Hostel, Legal & District Liaison Desks'}</span>
                    </>
                  )}
                  {idx === 4 && (
                    <>
                      <span className="px-2 py-0.5 rounded bg-orange-50 text-orange-900 font-medium">{isBengali ? '১০০০+ আজীবন সদস্য' : '1000+ Enrolled Life Members'}</span>
                      <span className="px-2 py-0.5 rounded bg-orange-50 text-orange-900 font-medium">{isBengali ? '২৩টি জেলা সমন্বয় কমিটি' : '23 District Coordinating Chapters'}</span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Hierarchy Fast Facts & Governance Card */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-200 space-y-6 lg:sticky lg:top-24">
            <div className="border-l-4 border-blue-900 pl-3.5 space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                {isBengali ? 'সারসংক্ষেপ' : 'Governance Snapshot'}
              </span>
              <h4 className="text-lg font-serif-heading font-bold text-blue-900">
                {isBengali ? 'সাংগঠনিক নীতিমালা' : 'Core Governance Principles'}
              </h4>
            </div>

            <div className="space-y-4 text-xs text-slate-600 leading-relaxed">
              <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 space-y-1">
                <div className="font-bold text-blue-950 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-blue-800" />
                  <span>{isBengali ? 'গণতান্ত্রিক প্রতিনিধিত্ব' : 'Democratic Representation'}</span>
                </div>
                <p>
                  {isBengali
                    ? 'সমগ্র পশ্চিমবঙ্গের শুঁড়ি সমাজের প্রতিটি জেলার প্রতিনিধিত্ব নিশ্চিত করতে সহ-সভাপতি ও কার্যনির্বাহী পরিষদে বীরভূম, বাঁকুড়া, হুগলি, হাওড়া ও ২৪ পরগনার সদস্যরা অন্তর্ভুক্ত।'
                    : 'Balanced regional representation ensures active council members from Bankura, Birbhum, Hooghly, Howrah, North 24 Parganas, and Kolkata.'}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-orange-50/70 border border-orange-100 space-y-1">
                <div className="font-bold text-orange-950 flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4 text-orange-600" />
                  <span>{isBengali ? 'আর্থিক ও প্রশাসনিক দায়বদ্ধতা' : 'Fiscal Accountability'}</span>
                </div>
                <p>
                  {isBengali
                    ? 'কোষাধ্যক্ষ ও সহকারী কোষাধ্যক্ষবৃন্দের তত্ত্বাবধানে বার্ষিক বিধিবদ্ধ অডিট ও ছাত্রাবাস ব্যয়ের স্বচ্ছ হিসাব নিয়মিত সাধারণ সভায় পেশ করা হয়।'
                    : 'Under the Treasurer and Assistant Treasurers, annual statutory audits and hostel expenditure accounts are prepared and audited transparently.'}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-100 space-y-1">
                <div className="font-bold text-emerald-950 flex items-center gap-1.5">
                  <HeartHandshake className="w-4 h-4 text-emerald-700" />
                  <span>{isBengali ? 'আজীবন সদস্যপদ মডেল' : 'No Monthly Subscriptions'}</span>
                </div>
                <p>
                  {isBengali
                    ? 'কোনো মাসিক চাঁদা নেই; সমগ্র সংবিধানে এককালীন আজীবন সদস্যপদ এবং সমাজের অগ্রগতির জন্য স্বেচ্ছায় অনুদানের নীতি অনুসৃত।'
                    : 'The organization operates on a pure Life Membership framework with zero recurring monthly subscription demands.'}
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100">
              <a
                href={NGO_DETAILS.headOffice.address}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('contact');
                }}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-blue-900 hover:bg-blue-800 text-white transition-colors flex items-center justify-center gap-2"
              >
                <span>{isBengali ? 'যোগাযোগ ও সচিবালয় তথ্য' : 'Secretariat & Office Contact'}</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
