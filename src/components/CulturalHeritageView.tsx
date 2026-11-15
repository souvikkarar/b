import React, { useState } from 'react';
import { 
  Sparkles,
  Award,
  BookOpen,
  Scale,
  MapPin,
  CheckCircle2,
  Flame,
  Users,
  ShieldAlert
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { CULTURAL_HERITAGE_ITEMS, NGO_DETAILS } from '../data/ngoData';
import { IndianPatternDivider } from './IndianPatternDivider';
import { PageId } from '../types';

interface CulturalHeritageViewProps {
  onNavigate: (page: PageId) => void;
}

export const CulturalHeritageView: React.FC<CulturalHeritageViewProps> = ({ onNavigate }) => {
  const { lang, isBengali } = useLanguage();
  const [selectedHeritageItem, setSelectedHeritageItem] = useState<string | null>(null);

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-950 to-blue-900 text-white py-14 px-4 sm:px-6 lg:px-8 border-b-4 border-orange-500">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-xs font-bold uppercase tracking-wider border border-orange-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isBengali ? 'সাংস্কৃতিক ঐতিহ্য ও গৌরবময় ঐতিহ্য' : 'Cultural Heritage & History'}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif-heading font-bold text-white tracking-tight">
            {isBengali 
              ? 'পশ্চিমবঙ্গের তপশিলি জাতি শুঁড়ি সমাজের ঐতিহ্য ও সংস্কৃতি' 
              : 'Cultural Heritage of the Scheduled Caste Sunri Community'}
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-3xl leading-relaxed">
            {isBengali
              ? 'প্রাচীন বাংলার ঐতিহ্য, লোকসংস্কৃতি, ১৯৩৫ ও ১৯৫০ সালের সাংবিধানিক স্বীকৃতি, বার্ষিক উৎসব ও সমাজের কৃতি সন্তানদের অনন্য অবদানের সমন্বিত পরিচয়।'
              : 'Discover the historical roots, socio-cultural traditions, religious observances, Dr. Ambedkar’s constitutional legacy, and remarkable community triumphs.'}
          </p>
        </div>
      </section>

      {/* 1. HISTORY OF THE SUNRI COMMUNITY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="border-l-4 border-blue-900 pl-4 space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
              {isBengali ? 'শিকড় ও ইতিবৃত্ত' : 'Roots & Journey'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif-heading font-bold text-blue-900">
              {isBengali ? 'শুঁড়ি সমাজের প্রাচীন ইতিহাস ও সাংবিধানিক পথচলা' : 'History of the Sunri Community'}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
            <div className="lg:col-span-7 space-y-4 text-slate-700 leading-relaxed text-base">
              <p>
                {isBengali
                  ? 'শুঁড়ি সমাজ প্রাচীন বাংলার একটি পরিশ্রমী ও স্বয়ংসম্পূর্ণ সম্প্রদায়। ব্রিটিশ শাসনামলে ১৯৩৫ সালের গভর্নমেন্ট অব ইন্ডিয়া অ্যাক্টের অধীনে সামাজিক ও অর্থনৈতিক অনগ্রসরতার কারণে শুঁড়ি সম্প্রদায়কে সরকারি গেজেটে তপশিলি জাতি হিসেবে ঘোষণা করা হয়।'
                  : 'The Sunri community represents an enduring socio-cultural fabric across Bengal. Under the Government of India Act of 1935 enacted by the British administration, the economically and socially backward Sunri community was designated as a Scheduled Caste through official government gazettes.'}
              </p>
              <p>
                {isBengali
                  ? '১৯৫০ সালে ভারতের সংবিধান প্রণয়নের সময় বাবাসাহেব ড. বি. আর. আম্বেদকর অত্যন্ত দূরদৃষ্টির সাথে সংবিধানে শুঁড়ি সম্প্রদায়কে তপশিলি জাতি (Scheduled Caste) হিসেবে সসম্মানে অন্তর্ভুক্ত করেন, যার ফলে শিক্ষাক্ষেত্রে আসন সংরক্ষণ, সরকারি চাকুরিতে অধিকার এবং বিধানসভায় রাজনৈতিক প্রতিনিধিত্বের সাংবিধানিক রক্ষাকবচ অর্জিত হয়।'
                  : 'In 1950, Dr. Baba Saheb Ambedkar formally included the Sunri community in the Constitution of India as a Scheduled Caste. This granted inviolable statutory protections: reservation in higher education, public sector employment, and legislative seats under Articles 330 and 332.'}
              </p>
              <p>
                {isBengali
                  ? 'পরবর্তীতে ১৯৬৭ ও ১৯৯৬ সালে রাজ্য সরকারের অভ্যন্তরীণ নির্দেশিকায় যে বিভ্রান্তি দেখা দিয়েছিল, বঙ্গীয় সাহা সমিতির আপসহীন আইনি লড়াই ও ২০০০ সালের ৫ সেপ্টেম্বর কলকাতায় ঐতিহাসিক মহামিছিলের মধ্য দিয়ে সুপ্রিম কোর্টের নির্দেশে তা সফলভাবে নস্যাৎ করা হয়।'
                  : 'When administrative circulars threatened community identity in subsequent decades, the Samity mounted historic litigation, culminating in the Hon\'ble Supreme Court ruling and the historic September 5, 2000 rally in Kolkata that restored Scheduled Caste certificates to every eligible Sunri youth.'}
              </p>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-blue-950 to-blue-900 text-white p-6 rounded-xl space-y-4 border border-blue-800">
              <div className="flex items-center gap-2 text-orange-400 font-bold text-xs uppercase tracking-wider">
                <Scale className="w-4 h-4" />
                <span>{isBengali ? 'সাংবিধানিক রক্ষাকবচ' : 'Constitutional Milestones'}</span>
              </div>
              <div className="space-y-3 text-xs">
                <div className="p-3 bg-white/10 rounded-lg border border-white/10">
                  <div className="font-bold text-orange-300">{isBengali ? '১৯৩৫ গভর্নমেন্ট অব ইন্ডিয়া অ্যাক্ট' : '1935 Government of India Act'}</div>
                  <div className="text-blue-100">{isBengali ? 'ব্রিটিশ প্রশাসনের সরকারি গেজেটে শুঁড়ি সমাজ তপশিলি জাতি হিসেবে ঘোষিত।' : 'Statutory Scheduled Caste notification by British administration.'}</div>
                </div>
                <div className="p-3 bg-white/10 rounded-lg border border-white/10">
                  <div className="font-bold text-orange-300">{isBengali ? '১৯৫০ ভারতের সংবিধান' : '1950 Constitution of India'}</div>
                  <div className="text-blue-100">{isBengali ? 'ড. বি. আর. আম্বেদকর কর্তৃক রাষ্ট্রপতির তপশিলি জাতি আদেশে শুঁড়ি সমাজ অন্তর্ভুক্ত।' : 'Dr. B. R. Ambedkar included Sunri in the President’s Scheduled Castes Order.'}</div>
                </div>
                <div className="p-3 bg-white/10 rounded-lg border border-white/10">
                  <div className="font-bold text-orange-300">{isBengali ? '৫ সেপ্টেম্বর ২০০০ সুপ্রিম কোর্ট রায়' : 'Sept 5, 2000 Supreme Court Verdict'}</div>
                  <div className="text-blue-100">{isBengali ? 'ঐতিহাসিক কলকাতা মহামিছিলের পর তপশিলি জাতি শংসাপত্র প্রদানের অধিকার পুনর্বহাল।' : 'Restoration of SC certificate issuances after massive Kolkata rally.'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CULTURAL TRADITIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="border-l-4 border-orange-500 pl-4 space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
              {isBengali ? 'ঐতিহ্য ও সমাজবোধ' : 'Living Heritage'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif-heading font-bold text-blue-900">
              {isBengali ? 'আমাদের সাংস্কৃতিক ঐতিহ্য ও জীবনধারা' : 'Cultural Traditions'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                {isBengali ? '১' : '1'}
              </div>
              <h3 className="text-lg font-bold text-blue-950">
                {isBengali ? 'ভ্রাতৃত্ববোধ ও পারস্পরিক সহযোগিতা' : 'Fraternal Solidarity & Community Care'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isBengali
                  ? 'শুঁড়ি সমাজের অন্যতম প্রধান বৈশিষ্ট্য হলো সংকটের সময়ে একে অপরের পাশে দাঁড়ানো। ১৯৩৪ সালে মা জগৎ জননী মন্দিরে শুরু হওয়া যৌথ সমাজকল্যাণের ধারা আজও অক্ষুণ্ণ রয়েছে।'
                  : 'Unwavering mutual aid during distress. Families across Bengal pool resources to support student education, medical relief, and community welfare without hesitation.'}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center font-bold">
                {isBengali ? '২' : '2'}
              </div>
              <h3 className="text-lg font-bold text-blue-950">
                {isBengali ? 'শিক্ষা সহায়তা ও নারী উচ্চশিক্ষায় বিশেষ অগ্রাধিকার' : 'Educational Support & Special Priority for Female Higher Education'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isBengali
                  ? 'সমিতির প্রথম দিন থেকেই নারী উচ্চশিক্ষায় বিশেষ অগ্রাধিকার ও পাঠাগার রক্ষণাবেক্ষণকে প্রধান উদ্দেশ্য হিসেবে ঘোষণা করা হয়েছিল। গ্রামীণ ছাত্রাবাস ও শুধুমাত্র আমাদের সম্প্রদায়ের জন্য শিক্ষার উদ্দেশ্যে সামাজিক সহায়তা সেই অঙ্গীকারেরই উজ্জ্বল দৃষ্টান্ত।'
                  : 'Since our 1936-37 charter, educational support with special priority for female higher education and community libraries were consecrated as key duties, reflected in our hostel and Social Help for Educational Purpose (Only for Our Community).'}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                {isBengali ? '৩' : '3'}
              </div>
              <h3 className="text-lg font-bold text-blue-950">
                {isBengali ? 'উদ্যোক্তা চেতনা ও ব্যবসায়িক স্বাবলম্বন' : 'Commercial Enterprise & Vocational Craft'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isBengali
                  ? 'প্রতিকূলতার মাঝেও কঠোর শ্রম ও উদ্যোক্তা মানসিকতার মাধ্যমে স্বাবলম্বী হওয়া এবং সততার সাথে অর্থনৈতিক অগ্রগতি অর্জন শুঁড়ি সম্প্রদায়ের ঐতিহাসিক চালিকাশক্তি।'
                  : 'A proud legacy of industrious trade, agro-craft, perseverance, and ethical entrepreneurship that has propelled families from hardship into prosperity.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Divider */}
      <IndianPatternDivider variant="simple" />

      {/* 4. EVENTS & CULTURAL PROGRAMMES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="border-l-4 border-blue-900 pl-4 space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
              {isBengali ? 'অনুষ্ঠান ও সংস্কৃতি' : 'Events & Culture'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif-heading font-bold text-blue-900">
              {isBengali ? 'অনুষ্ঠান ও সাংস্কৃতিক কর্মসূচি' : 'Events and Cultural Programmes'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 space-y-3">
              <span className="text-2xl">🎖️</span>
              <h3 className="text-base font-bold text-blue-950">
                {isBengali ? 'শহীদ গোপীনাথ সাহার জন্মজয়ন্তী উদযাপন ও প্রয়াণ দিবস স্মরণ' : 'Gopinath Saha Birth Anniversary Celebration & Death Anniversary Observance'}
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                📍 {isBengali ? '৫২বি ইন্ডিয়ান মিরর স্ট্রিট / কলকাতা' : '52B Indian Mirror Street / Kolkata'}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isBengali
                  ? 'ভারতের স্বাধীনতা সংগ্রামের নির্ভীক বিপ্লবী অমর শহীদ গোপীনাথ সাহার জন্মজয়ন্তী উদযাপন এবং তাঁর প্রয়াণ ও আত্মবলিদান দিবসে বিনম্র শ্রদ্ধার্ঘ্য নিবেদন, স্মৃতিচারণ সভা ও যুব সমাজের শপথ গ্রহণ।'
                  : 'Celebrating the birth anniversary of revolutionary hero Shahid Gopinath Saha and solemnly observing his martyrdom anniversary with memorial meetings, floral tributes, and youth pledge programmes.'}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 space-y-3">
              <span className="text-2xl">⚖️</span>
              <h3 className="text-base font-bold text-blue-950">
                {isBengali ? 'ড. ভীমরাও রামজি আম্বেদকরের জন্মজয়ন্তী উদযাপন' : 'Bhimrao Ramji Ambedkar Birthday Celebration'}
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                📍 {isBengali ? 'কেন্দ্রীয় কার্যালয় মিলনায়তন / কলকাতা' : 'Central Office Auditorium / Kolkata'}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isBengali
                  ? '১৪ এপ্রিল সংবিধান প্রণেতা বাবাসাহেব ড. ভীমরাও রামজি আম্বেদকরের শুভ জন্মজয়ন্তী উপলক্ষে সংবিধানে শুঁড়ি সমাজকে তপশিলি জাতি হিসেবে সংরক্ষণের ঐতিহাসিক অবদান স্মরণ ও বিশেষ সেমিনার।'
                  : 'Grand commemoration of Dr. Bhimrao Ramji Ambedkar’s birth anniversary (April 14), honoring his monumental constitutional leadership in recognizing the Sunri community as a Scheduled Caste.'}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 space-y-3">
              <span className="text-2xl">🤝</span>
              <h3 className="text-base font-bold text-blue-950">
                {isBengali ? 'বিজয়া সম্মিলনী' : 'Bijoya Sammilani'}
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                📍 {isBengali ? 'বিবেকানন্দ সোসাইটি হল / কলকাতা' : 'Vivekananda Society Hall / Kolkata'}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isBengali
                  ? 'শারদোৎসব পরবর্তী ঐতিহ্যবাহী প্রীতি সম্মেলন, যেখানে রাজ্যের বিভিন্ন প্রান্ত থেকে সমাজের সদস্যবৃন্দ শুভেচ্ছা বিনিময়, সৌভ্রাতৃত্বের বন্ধন সুদৃঢ়করণ ও মনোজ্ঞ সাংস্কৃতিক অনুষ্ঠানে মিলিত হন।'
                  : 'Traditional post-Durga Puja congregation bringing together community members and delegates across West Bengal for cordial fellowship, cultural performances, and mutual greetings.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMMUNITY ACHIEVEMENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-200 space-y-6">
          <div className="border-l-4 border-orange-500 pl-4 space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
              {isBengali ? 'সাফল্য ও গৌরব' : 'Excellence'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif-heading font-bold text-blue-900">
              {isBengali ? 'সমাজের কৃতি অর্জন ও ছাত্রাবাসের সাফল্য' : 'Community Achievements'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center space-y-2">
              <div className="text-3xl font-bold font-serif-heading text-blue-900">{isBengali ? '৫০+' : '50+'}</div>
              <div className="text-xs font-semibold text-slate-700">{isBengali ? 'আবাসিক শিক্ষার্থী' : 'Hostel Student Residents'}</div>
              <div className="text-[11px] text-slate-500">{isBengali ? 'প্রতি শিক্ষাবর্ষে গ্রাম থেকে আসা ছাত্রছাত্রী' : 'Subsidized stay in central Kolkata'}</div>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center space-y-2">
              <div className="text-3xl font-bold font-serif-heading text-orange-600">{isBengali ? '₹৩.৭৫ লক্ষ' : '₹3.75L'}</div>
              <div className="text-xs font-semibold text-slate-700">{isBengali ? 'পুরসভা কর পরিশোধ' : 'KMC Tax Arrears Cleared'}</div>
              <div className="text-[11px] text-slate-500">{isBengali ? 'ভবনের পূর্ণাঙ্গ আইনি ও সরকারি বৈধতা' : '100% legal asset protection'}</div>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center space-y-2">
              <div className="text-3xl font-bold font-serif-heading text-blue-900">{isBengali ? '২৩' : '23'}</div>
              <div className="text-xs font-semibold text-slate-700">{isBengali ? 'জেলায় সামাজিক নেটওয়ার্ক' : 'Districts in West Bengal'}</div>
              <div className="text-[11px] text-slate-500">{isBengali ? 'উত্তরবঙ্গ থেকে জঙ্গলমহল পর্যন্ত পরিবার' : 'Active community touchpoints'}</div>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center space-y-2">
              <div className="text-3xl font-bold font-serif-heading text-orange-600">{isBengali ? '৮৮+' : '88+'}</div>
              <div className="text-xs font-semibold text-slate-700">{isBengali ? 'বছরের গৌরবময় সেবা' : 'Years of Legacy'}</div>
              <div className="text-[11px] text-slate-500">{isBengali ? '১৯৩৪ থেকে ২০২৬ পর্যন্ত নিরবচ্ছিন্ন সেবা' : 'Continuous community leadership'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HERITAGE GALLERY (Image cards and rich descriptions) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div className="border-l-4 border-blue-900 pl-4 space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
                {isBengali ? 'চিত্রশালা ও দলিল' : 'Archive Gallery'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif-heading font-bold text-blue-900">
                {isBengali ? 'ঐতিহাসিক দলিল ও আলোকচিত্র সংগ্রহ' : 'Heritage Gallery'}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CULTURAL_HERITAGE_ITEMS.map((item) => (
              <div 
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={isBengali ? item.bengaliTitle : item.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-blue-950/80 backdrop-blur-xs text-white text-xs font-semibold px-2.5 py-1 rounded">
                      {isBengali ? (item.bengaliEra || item.era) : item.era}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-serif-heading font-bold text-blue-950">
                      {isBengali ? item.bengaliTitle : item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {isBengali ? item.bengaliSummary : item.summary}
                    </p>
                    <div className="pt-2 border-t border-slate-100 space-y-1 text-[11px] text-slate-500">
                      <div className="font-semibold text-orange-600">
                        {isBengali ? 'সাংস্কৃতিক তাৎপর্য:' : 'Cultural Significance:'}
                      </div>
                      <p>{isBengali ? item.bengaliCulturalSignificance : item.culturalSignificance}</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-500">{isBengali ? 'ঐতিহাসিক দলিল সংগ্রহ' : 'Document Archive'}</span>
                  <button
                    onClick={() => onNavigate('about')}
                    className="font-bold text-blue-900 hover:text-orange-600"
                  >
                    {isBengali ? 'বিবরণ →' : 'Details →'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-2xl p-8 sm:p-10 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-2xl font-serif-heading font-bold">
              {isBengali ? 'আমাদের ঐতিহ্য সংরক্ষণে আপনার অবদান রাখুন' : 'Preserve Our Living Heritage'}
            </h3>
            <p className="text-white/90 text-sm max-w-xl">
              {isBengali
                ? 'ঐতিহাসিক দলিল, পুরাতন ছবি, নিবন্ধ প্রকাশ বা ছাত্রাবাস, অতিথি কক্ষ (Guest Room) ও পাঠাগার সমৃদ্ধ করতে আজই বঙ্গীয় সাহা সমিতির সাথে যুক্ত হন।'
                : 'Contribute historical papers, ancestral photographs, or donate towards the Student Hostel, Guest Room & Library Endowment.'}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-3 rounded-xl font-bold text-sm bg-white text-orange-700 hover:bg-amber-50 shadow-sm cursor-pointer"
            >
              {isBengali ? 'যোগাযোগ করুন' : 'Contact Us'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
