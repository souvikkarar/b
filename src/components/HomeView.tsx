import React from 'react';
import { 
  Users, 
  HeartHandshake, 
  GraduationCap, 
  Building2, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2, 
  Award, 
  ChevronRight,
  Phone
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { 
  KEY_ACTIVITIES
} from '../data/ngoData';
import { IndianPatternDivider } from './IndianPatternDivider';
import { PageId, PAGE_ROUTES } from '../types';

interface HomeViewProps {
  onNavigate: (page: PageId) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const { lang, isBengali } = useLanguage();
  const t = TRANSLATIONS[lang];

  return (
    <div className="space-y-16 pb-12">
      {/* 1. HERO SECTION (As requested) */}
      <section className="relative bg-gradient-to-b from-blue-900 via-blue-950 to-slate-900 text-white pt-12 pb-20 border-b-4 border-orange-500">
        {/* Subtle decorative background pattern */}
        <div 
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#FFFFFF 1.5px, transparent 1.5px), radial-gradient(#EA580C 1.5px, transparent 1.5px)`,
            backgroundSize: '32px 32px',
            backgroundPosition: '0 0, 16px 16px'
          }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: Main Titles and Action Buttons */}
            <div className="lg:col-span-7 space-y-6">
              {/* Exact Requested Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif-heading font-bold text-white leading-[1.2] tracking-tight">
                {isBengali 
                  ? 'ঐক্য, ঐতিহ্য ও সামাজিক উন্নয়নের মাধ্যমে শুঁড়ি সমাজের ক্ষমতায়ন'
                  : 'Empowering the Sunri Community Through Unity, Heritage & Social Development'}
              </h1>

              {/* Exact Requested Subheadline */}
              <p className="text-lg sm:text-xl text-blue-100/90 leading-relaxed font-normal">
                {isBengali
                  ? 'আমাদের সমৃদ্ধ সাংস্কৃতিক ঐতিহ্য অক্ষুণ্ণ রেখে একটি উন্নত ও স্বনির্ভর ভবিষ্যৎ নির্মাণ।'
                  : 'Building a stronger future while preserving our rich cultural heritage.'}
              </p>

              {/* Summary bullets of verified facts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-blue-100/80 pt-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>{isBengali ? '৭৭ মানিকতলা স্ট্রিট (সিমলা), ওঁ জগৎ জননী মন্দিরের পাশে শুভ প্রতিষ্ঠা (১৯৩৪)' : 'Founded 1934 at 77 Maniktala St (Simla), beside Jagat Janani Temple'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>{isBengali ? '৫২বি ইন্ডিয়ান মিরর স্ট্রিটে চারতলা কেন্দ্রীয় কার্যালয় (১৯৫৬)' : '4-Storey Central Office at 52B Indian Mirror St'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>{isBengali ? '৫০ আসনের ছাত্রাবাস ও সদস্যদের জন্য অতিথি কক্ষ' : '50-Seat Hostel (Female Wing) & Member Guest Room'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>{isBengali ? 'সুপ্রিম কোর্টের ঐতিহাসিক জয় (৫ সেপ্টেম্বর ২০০০)' : 'Supreme Court Victory Restoring SC (2000)'}</span>
                </div>
              </div>

              {/* Requested Buttons: Become a Member & Contact Us + Donate */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  id="hero-contact-us-btn"
                  href={PAGE_ROUTES.contact}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('contact');
                  }}
                  className="px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-xs transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-orange-400" />
                  <span>{isBengali ? 'যোগাযোগ করুন' : 'Contact Us'}</span>
                </a>
              </div>
            </div>

            {/* Right: Grounded Photo & Institutional Badge (Sticky within column) */}
            <div className="lg:col-span-5 relative">
              <div className="lg:sticky lg:top-28 w-full max-w-[340px] sm:max-w-[360px] mx-auto lg:ml-auto">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 bg-blue-900">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1000&q=80"
                      alt="Bangiya Saha Samity Central Office, Students Hostel and Guest Room"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/30 to-transparent"></div>
                    
                    <div className="absolute top-2.5 left-2.5 bg-blue-900/90 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-white/30 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>{isBengali ? '৫২বি ইন্ডিয়ান মিরর স্ট্রিট' : '52B Indian Mirror Street'}</span>
                    </div>

                    <div className="absolute bottom-2.5 inset-x-2.5 text-white">
                      <p className="text-[11px] italic text-blue-100 leading-snug font-serif-heading line-clamp-3">
                        {isBengali 
                          ? '"১৯৩৪ সালে মা জগৎ জননী মন্দিরে শুরু হয়ে আজ ৫০ জন শিক্ষার্থীর আবাসিক ব্যবস্থা ও সমাজের সদস্যদের অতিথি কক্ষসহ পশ্চিমবঙ্গের শুঁড়ি সমাজের আশ্রয়স্থল।"'
                          : '"Founded in 1934 at Maa Jagat Janani Temple, growing into our Central Office with hostel arrangements for 50 students and a Guest Room for community members."'}
                      </p>
                      <p className="text-[10px] text-amber-300 font-semibold pt-0.5">
                        {isBengali ? '— বঙ্গীয় সাহা সমিতি (শুঁড়ি সমাজ)' : '— Bangiya Saha Samity (Sunri Samaj)'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT PREVIEW (Brief introduction to Bangiya Saha Samity) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5 text-blue-800" />
                <span>{isBengali ? 'সংগঠনের পরিচিতি' : 'About The Organization'}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif-heading font-bold text-blue-900">
                {isBengali ? 'বঙ্গীয় সাহা সমিতি (শুঁড়ি সমাজ)-র গৌরবময় ইতিবৃত্ত' : 'Brief Introduction to Bangiya Saha Samity'}
              </h2>
              <p className="text-slate-700 leading-relaxed text-base">
                {isBengali 
                  ? 'বঙ্গীয় সাহা সমিতি (শুঁড়ি সমাজ) ১৯৩৪ সালে কলকাতার ৭৭ মানিকতলা স্ট্রিটের (সিমলা) মা জগৎ জননী মন্দিরে সমাজের বিশিষ্ট ব্যক্তিবর্গের উদ্যোগে প্রতিষ্ঠিত হয় এবং ১৯৩৬-৩৭ সালে বিধিবদ্ধভাবে নিবন্ধিত হয় (নিবন্ধন নং ৪৫২২)। ১৯৫০ সালে বাবাসাহেব ড. বি. আর. আম্বেদকর ভারতের সংবিধানে শুঁড়ি সম্প্রদায়কে তপশিলি জাতি হিসেবে অন্তর্ভুক্ত করেন। ১৯৫৬ সালে ৫২বি ইন্ডিয়ান মিরর স্ট্রিটে নিজস্ব জমিতে ৪ তলা কেন্দ্রীয় কার্যালয় নির্মিত হয়, যেখানে বর্তমানে ৫০ জন গ্রামীণ শিক্ষার্থীর জন্য ছাত্রাবাসের আবাসিক ব্যবস্থা করা হয় (২০১৮ সালে ছাত্রীদের পৃথক শাখা চালু হয়) এবং সমাজের সদস্যদের জন্য অতিথি কক্ষের (Guest Room) সুবিধাও রয়েছে।'
                  : 'Bangiya Saha Samity (Sunri Samaj) was established in 1934 at Maa Jagat Janani Temple, 77 Maniktala Street, Kolkata (Simla) by distinguished community leaders, and formally incorporated under Registration No. 4522 of 1936–37. In 1950, Babasaheb Dr. B. R. Ambedkar enshrined the Sunri community in the Constitution of India as a Scheduled Caste. In 1956, our four-storeyed Central Office was purchased and erected at 52B Indian Mirror Street, where residential hostel arrangements are made for up to 50 students (with a dedicated female wing introduced in 2018) alongside a Guest Room facility for community members.'}
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  id="about-preview-read-more-btn"
                  href={PAGE_ROUTES.about}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('about');
                  }}
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-900 hover:text-orange-600 transition-colors group"
                >
                  <span>{isBengali ? 'সম্পূর্ণ ইতিহাস ও নেতৃত্ব জানুন' : 'Read Full History & Leadership'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-orange-600" />
                </a>
                <a
                  id="about-preview-heritage-btn"
                  href={PAGE_ROUTES.heritage}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('heritage');
                  }}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-900 transition-colors"
                >
                  <span>{isBengali ? 'সাংস্কৃতিক ঐতিহ্য দেখুন' : 'Explore Cultural Heritage'}</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Metrics highlight */}
            <div className="lg:col-span-4 bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                {isBengali ? 'প্রধান স্তম্ভসমূহ' : 'Key Pillars at a Glance'}
              </h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-white rounded-lg border border-slate-200">
                  <div className="text-xs text-slate-500">{isBengali ? 'প্রতিষ্ঠা ও নিবন্ধন' : 'Foundation & Registration'}</div>
                  <div className="font-bold text-blue-900">{isBengali ? '১৯৩৪ / ১৯৩৬–৩৭ (রেজি. ৪৫২২)' : '1934 / 1936–37 (Regd. 4522)'}</div>
                </div>
                <div className="p-3 bg-white rounded-lg border border-slate-200">
                  <div className="text-xs text-slate-500">{isBengali ? 'ছাত্রাবাস ও অতিথি কক্ষ' : 'Hostel & Guest Room'}</div>
                  <div className="font-bold text-orange-600">{isBengali ? '৫০ জন শিক্ষার্থী ও সদস্যদের অতিথি কক্ষ' : 'Up to 50 Students & Member Guest Room'}</div>
                </div>
                <div className="p-3 bg-white rounded-lg border border-slate-200">
                  <div className="text-xs text-slate-500">{isBengali ? 'সুপ্রিম কোর্ট রায়' : 'Supreme Court Verdict'}</div>
                  <div className="font-bold text-blue-900">{isBengali ? '৫ সেপ্টেম্বর ২০০০ (তপশিলি জাতি অধিকার বহাল)' : 'Sept 5, 2000 (SC Certificates Restored)'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION (Separate Cards as requested) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
            {isBengali ? 'আদর্শ ও দর্শন' : 'Guiding Philosophy'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif-heading font-bold text-blue-900">
            {isBengali ? 'আমাদের লক্ষ্য ও দর্শন' : 'Our Mission & Vision'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            {isBengali
              ? 'বঙ্গীয় সাহা সমিতির প্রধান চালিকাশক্তি হলো শিক্ষা সহায়তা—বিশেষত নারী উচ্চশিক্ষায় বিশেষ অগ্রাধিকার এবং সমাজের সর্বাঙ্গীণ বিকাশ।'
              : 'Guided by a focused commitment to educational support, highlighting a special priority for female higher education and community welfare.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border-t-4 border-blue-900 border-x border-b border-slate-200 space-y-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif-heading font-bold text-blue-900">
              {isBengali ? 'আমাদের লক্ষ্য' : 'Our Mission'}
            </h3>
            <p className="text-base text-slate-700 leading-relaxed font-medium">
              {isBengali 
                ? 'শিক্ষা সহায়তার মাধ্যমে পশ্চিমবঙ্গের তপশিলি জাতি শুঁড়ি সমাজের ক্ষমতায়ন—যেখানে নারী উচ্চশিক্ষায় বিশেষ অগ্রাধিকার, ছাত্রাবাসের আবাসিক ব্যবস্থা করা হয় এবং শুধুমাত্র আমাদের সম্প্রদায়ের জন্য শিক্ষার উদ্দেশ্যে সামাজিক সহায়তা দেওয়া হয়।'
                : 'To advance educational support for the Scheduled Caste Sunri community in West Bengal, highlighting a special priority for female higher education alongside residential hostel arrangements and community welfare.'}
            </p>
            <ul className="space-y-2.5 text-sm text-slate-600 pt-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                <span>{isBengali ? 'নারী উচ্চশিক্ষায় বিশেষ অগ্রাধিকারসহ শিক্ষার উদ্দেশ্যে সামাজিক সহায়তা (শুধুমাত্র আমাদের সম্প্রদায়ের জন্য)।' : 'Social Help for Educational Purpose (Only for Our Community), with special priority for female higher education.'}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                <span>{isBengali ? '৫২বি ইন্ডিয়ান মিরর স্ট্রিটে ৫০ জন গ্রামীণ শিক্ষার্থীর জন্য ছাত্রাবাসের আবাসিক ব্যবস্থা করা হয় এবং সমাজের সদস্যদের জন্য অতিথি কক্ষের (Guest Room) সুবিধা রয়েছে।' : 'Residential hostel arrangements are made for 50 rural students at 52B Indian Mirror St, alongside a Guest Room facility for community members.'}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                <span>{isBengali ? 'সামাজিক কুপ্রথা নির্মূল, সমাজ সংস্কার এবং দুস্থ ও বিপন্ন মানুষের সরাসরি সহায়তা প্রদান।' : 'Eradicating social evils and extending distress relief to vulnerable community members.'}</span>
              </li>
            </ul>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border-t-4 border-orange-500 border-x border-b border-slate-200 space-y-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif-heading font-bold text-blue-900">
              {isBengali ? 'আমাদের দর্শন' : 'Our Vision'}
            </h3>
            <p className="text-base text-slate-700 leading-relaxed font-medium">
              {isBengali 
                ? 'একটি সুশিক্ষিত, আত্মমর্যাদাশীল ও ঐক্যবদ্ধ সমাজ গঠন করা—যেখানে নারী উচ্চশিক্ষার পূর্ণ প্রসার ঘটবে এবং প্রতিটি মেধাবী শিক্ষার্থী সমান সুযোগ পাবে।'
                : 'Building an empowered, highly educated, and self-reliant community led by widespread access to female higher education and constitutional dignity.'}
            </p>
            <ul className="space-y-2.5 text-sm text-slate-600 pt-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                <span>{isBengali ? 'নারী উচ্চশিক্ষায় বিশেষ অগ্রাধিকারের মাধ্যমে পরিবার ও সমাজকে শিক্ষিত ও স্বাবলম্বী করে তোলা।' : 'Elevating female higher education as a primary pillar of family and community progress.'}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                <span>{isBengali ? 'ভারতের সংবিধানে প্রদত্ত তপশিলি জাতি সংরক্ষণের পূর্ণ সুরক্ষা ও ২৩টি জেলায় সমন্বয়।' : 'Defending Scheduled Caste constitutional reservation and coordinating across all 23 districts of West Bengal.'}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                <span>{isBengali ? 'কলকাতায় আগত সমাজের সদস্যদের জন্য অতিথি কক্ষ (Guest Room) ও শিক্ষার্থীদের অধ্যয়ন পরিবেশের নিরন্তর উন্নয়ন।' : 'Maintaining welcoming Guest Room access for community members and supportive collegiate environments.'}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cultural Divider */}
      <IndianPatternDivider variant="simple" />

      {/* 4. KEY ACTIVITIES (Social Welfare, Community Development, Cultural Preservation, Educational Support, Community Engagement) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
            {isBengali ? 'কর্মসূচিসমূহ' : 'Core Focus Areas'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif-heading font-bold text-blue-900">
            {isBengali ? 'আমাদের পঞ্চমুখী কার্যক্রম' : 'Key Activities'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            {isBengali
              ? 'সমাজকল্যাণ থেকে শিক্ষা বিস্তার—সমগ্র পশ্চিমবঙ্গে পরিচালিত পাঁচটি সুনির্দিষ্ট কর্মসূচি।'
              : 'Dedicated welfare and development initiatives fulfilling our 1936-37 constitutional mandate.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {KEY_ACTIVITIES.map((activity, idx) => {
            const isBlue = idx % 2 === 0;
            return (
              <div 
                key={activity.id}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-xl ${isBlue ? 'bg-blue-100 text-blue-900' : 'bg-orange-100 text-orange-600'}`}>
                      {activity.id === 'social-welfare' && <HeartHandshake className="w-6 h-6" />}
                      {activity.id === 'community-development' && <Building2 className="w-6 h-6" />}
                      {activity.id === 'cultural-preservation' && <Sparkles className="w-6 h-6" />}
                      {activity.id === 'educational-support' && <GraduationCap className="w-6 h-6" />}
                      {activity.id === 'community-engagement' && <Users className="w-6 h-6" />}
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-600">
                      {isBengali ? (activity.bengaliBadge || activity.badge) : activity.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-blue-900">
                    {isBengali ? activity.bengaliTitle : activity.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {isBengali ? activity.bengaliDescription : activity.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100 space-y-1.5">
                    {(isBengali && activity.bengaliHighlights ? activity.bengaliHighlights : activity.highlights).slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"></span>
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. MEMBERSHIP CTA (Encourage visitors to join the organization) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl border-2 border-orange-500 relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-xs font-bold uppercase tracking-wider border border-orange-400/30">
                {isBengali ? 'শুঁড়ি সমাজের ঐক্যে শামিল হন' : 'Unite With Sunri Samaj'}
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif-heading font-bold text-white leading-tight">
                {isBengali
                  ? 'বঙ্গীয় সাহা সমিতির আজীবন সদস্যপদ গ্রহণ করুন'
                  : 'Join Bangiya Saha Samity as an Esteemed Life Member'}
              </h2>
              <p className="text-blue-100 text-base leading-relaxed max-w-2xl">
                {isBengali
                  ? 'আমাদের সংবিধানে কোনো মাসিক ফি নেই—কেবল এককালীন আজীবন সদস্যপদ তালিকাভুক্তি। সদস্যপদ সরাসরি আমাদের কেন্দ্রীয় কার্যালয় বা জেলা প্রতিনিধিদের মাধ্যমে প্রদান করা হয় (অনলাইনে সদস্যপদ প্রদান করা হয় না)।'
                  : 'Our organization operates strictly under a Life Membership model with no recurring monthly subscriptions. Please note that membership is processed directly through our Central Office and district representatives (not online).'}
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  id="membership-cta-apply-btn"
                  href="tel:+919433041597"
                  className="px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-orange-600 hover:bg-orange-500 shadow-lg hover:shadow-xl transition-all flex items-center gap-2.5 active:scale-[0.98] border border-orange-400 group cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-white group-hover:scale-110 transition-transform shrink-0" />
                  <span>{isBengali ? 'কল করুন: ০৩৩-২২২৭১৫৯৯ / ৯৪৩৩০৪১৫৯৭' : 'Call: 033-22271599 / 9433041597'}</span>
                </a>
                <a
                  id="membership-cta-criteria-btn"
                  href={PAGE_ROUTES.contact}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('contact');
                  }}
                  className="px-5 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-blue-100 hover:text-white border border-white/30 hover:border-white transition-colors flex items-center gap-2"
                >
                  <span>{isBengali ? 'কার্যালয়ে যোগাযোগ' : 'Contact Office'}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 space-y-3">
              <h3 className="text-sm font-bold text-amber-300 uppercase tracking-wider">
                {isBengali ? 'আজীবন সদস্যপদের বিশেষ দিক' : 'Life Membership Highlights'}
              </h3>
              <ul className="space-y-2.5 text-xs text-blue-100">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <span>{isBengali ? 'কোনো মাসিক চাঁদা নেই (এককালীন আজীবন সদস্যপদ)' : 'Zero monthly subscriptions; single Life Membership enrolment'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <span>{isBengali ? 'বার্ষিক সম্মেলন ও ভোটাধিকারে সক্রিয় অংশগ্রহণ' : 'Direct voting and deliberative participation in General Meetings'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <span>{isBengali ? 'ছাত্রাবাস, অতিথি কক্ষ (Guest Room) ও শিক্ষার উদ্দেশ্যে সামাজিক সহায়তায় (শুধুমাত্র আমাদের সম্প্রদায়ের জন্য) অগ্রাধিকার' : 'Hostel, Member Guest Room access & Social Help for Educational Purpose (Only for Our Community)'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <span>{isBengali ? 'তপশিলি জাতি শংসাপত্র ও আইনি সহায়তা ডেস্ক' : 'Complimentary legal aid & SC caste certificate guidance'}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
