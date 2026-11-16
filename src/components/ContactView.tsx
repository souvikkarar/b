import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  Building2, 
  Check, 
  AlertCircle, 
  ExternalLink,
  ShieldAlert,
  MessageSquare
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { NGO_DETAILS } from '../data/ngoData';
import { ContactFormData } from '../types';
import { IndianPatternDivider } from './IndianPatternDivider';

export const ContactView: React.FC = () => {
  const { lang, isBengali } = useLanguage();

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name || !formData.phone || !formData.message) {
      setErrorMsg(isBengali 
        ? 'অনুগ্রহ করে সকল প্রয়োজনীয় ঘর (নাম, ফোন এবং বার্তা) পূরণ করুন।' 
        : 'Please fill in Name, Phone, and Message.');
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-950 to-blue-900 text-white py-14 px-4 sm:px-6 lg:px-8 border-b-4 border-orange-500">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-xs font-bold uppercase tracking-wider border border-orange-400/30">
            <Mail className="w-3.5 h-3.5" />
            <span>{isBengali ? 'যোগাযোগ ও সরাসরি সহায়তা' : 'Get In Touch'}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif-heading font-bold text-white tracking-tight">
            {isBengali 
              ? 'বঙ্গীয় সাহা সমিতির সাথে যোগাযোগ করুন' 
              : 'Contact Bangiya Saha Samity'}
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-3xl leading-relaxed">
            {isBengali
              ? 'সদস্যপদ, ছাত্রাবাস ভর্তি, আইনি পরামর্শ অথবা সাধারণ জিজ্ঞাসার জন্য আমাদের সেন্ট্রাল কলকাতা কার্যালয়ে সরাসরি আসুন অথবা অনলাইনে বার্তা পাঠান।'
              : 'Visit our Central Secretariat opposite G.D. Hospital in Taltala, Kolkata, or get in touch regarding student hostel accommodations, SC certificate guidance, and donations.'}
          </p>
        </div>
      </section>

      {/* Main Grid: Contact Info & Interactive Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* 1. CONTACT INFORMATION (Offices, Phone, Email, Visiting Hours) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Registered Head Office */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
                <Building2 className="w-4 h-4" />
                <span>{isBengali ? 'কেন্দ্রীয় কার্যালয়, ছাত্রাবাস ও অতিথি কক্ষ' : 'Registered Central Office, Hostel & Guest Room'}</span>
              </div>
              
              <div className="space-y-2 text-sm text-slate-700">
                <p className="font-bold text-blue-950 text-base">
                  {isBengali ? (NGO_DETAILS.bengaliHeadOffice?.address || '৫২বি, ইন্ডিয়ান মিরর স্ট্রিট, কলকাতা – ৭০০০১৩ (তালতলা)') : NGO_DETAILS.headOffice.address}
                </p>
                <p className="text-xs text-slate-500">
                  {isBengali ? (NGO_DETAILS.bengaliHeadOffice?.landmark || 'জি. ডি. হাসপাতালের বিপরীতে — কেন্দ্রীয় কার্যালয়, ছাত্রাবাস ও অতিথি কক্ষ') : NGO_DETAILS.headOffice.landmark}
                </p>
                <p className="text-xs font-semibold text-blue-900 bg-blue-50/70 px-3 py-2 rounded-lg border border-blue-100">
                  {isBengali
                    ? '• সমাজের সদস্যদের জন্য অতিথি কক্ষের (Guest Room) সুবিধা উপলব্ধ রয়েছে • ৫০ আসনের ছাত্রাবাসে আবাসিক ব্যবস্থা করা হয়'
                    : '• Guest Room facility available for community members • Hostel residential arrangements made for up to 50 students'}
                </p>
                <div className="inline-block px-2.5 py-1 rounded bg-blue-50 text-blue-900 font-mono text-xs font-bold">
                  {isBengali ? NGO_DETAILS.bengaliHeadOffice.regdNo : NGO_DETAILS.headOffice.regdNo}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-orange-600 shrink-0" />
                  <span>{isBengali ? (NGO_DETAILS.bengaliHeadOffice?.phone || '০৩৩-২২২৭১৫৯৯ / ৯৪৩৩০৪১৫৯৭') : NGO_DETAILS.headOffice.phone}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-blue-900 shrink-0" />
                  <span>{NGO_DETAILS.headOffice.email}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>{isBengali ? 'সোম - শনি: সকাল ১০:০০ - সন্ধ্যা ৭:০০ | রবি: সকাল ১১:০০ - বিকাল ৪:০০' : NGO_DETAILS.headOffice.visitingHours}</span>
                </div>
              </div>
            </div>

            {/* Foundational Historic Temple Site */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-900 uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span>{isBengali ? 'ঐতিহাসিক জন্মস্থান (প্রতিষ্ঠা ১৯৩৪)' : 'Foundational Birthplace (1934)'}</span>
              </div>
              <div className="text-sm text-slate-700 space-y-1">
                <div className="font-bold text-blue-950">{isBengali ? (NGO_DETAILS.bengaliRegisteredSite?.templeName || 'মা জগৎ জননী মন্দির') : NGO_DETAILS.registeredSite.templeName}</div>
                <div className="text-xs text-slate-600">{isBengali ? (NGO_DETAILS.bengaliRegisteredSite?.address || '৭৭ মানিকতলা স্ট্রিট, সিমলা, কলকাতা') : NGO_DETAILS.registeredSite.address}</div>
                <div className="text-[11px] text-slate-500">{isBengali ? (NGO_DETAILS.bengaliRegisteredSite?.historicalSignificance || '১৯৩৪ সালে যে পবিত্র স্থানে সমাজের বিশিষ্ট ব্যক্তিবর্গ সমিতি প্রতিষ্ঠা করেছিলেন।') : NGO_DETAILS.registeredSite.historicalSignificance}</div>
              </div>
            </div>

            {/* Helpline / Emergency Cell */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-blue-950 to-blue-900 text-white space-y-2 border border-blue-800">
              <div className="font-bold text-orange-400 text-xs uppercase tracking-wider flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4" />
                <span>{isBengali ? 'তপশিলি জাতি সহায়তা ও ছাত্রাবাস হেল্পলাইন' : 'Community SC Assistance Cell'}</span>
              </div>
              <p className="text-xs text-blue-100">
                {isBengali
                  ? 'তপশিলি জাতি শংসাপত্র সংক্রান্ত সমস্যা বা জরুরি ছাত্রাবাস আবাসনের জন্য কল করুন:'
                  : 'For caste certificate verification inquiries, educational bursaries, or student lodging:'}
              </p>
              <div className="text-lg font-mono font-bold text-white pt-1">
                {isBengali ? '০৩৩-২২২৭১৫৯৯ / ৯৪৩৩০৪১৫৯৭ (মোবাইল)' : '033-22271599 / 9433041597 (M)'}
              </div>
            </div>
          </div>

          {/* 2. CONTACT FORM & 3. INTERACTIVE MAP SECTION */}
          <div className="lg:col-span-7 space-y-8">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200 space-y-6">
              <div className="border-l-4 border-blue-900 pl-4 space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
                  {isBengali ? 'বার্তা পাঠান' : 'Direct Message'}
                </span>
                <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-blue-900">
                  {isBengali ? 'আমাদের কাছে সরাসরি বার্তা পাঠান' : 'Send Us a Message'}
                </h2>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-300 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-950">
                    {isBengali ? 'আপনার বার্তা সফলভাবে পাঠানো হয়েছে!' : 'Your Message Has Been Sent!'}
                  </h3>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    {isBengali
                      ? 'ধন্যবাদ। বঙ্গীয় সাহা সমিতির দায়িত্বপ্রাপ্ত কর্মকর্তা শীঘ্রই আপনার সাথে যোগাযোগ করবেন।'
                      : 'Thank you for reaching out. Our Secretariat at 52B Indian Mirror Street will respond shortly.'}
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-5 py-2 rounded-xl text-xs font-bold bg-blue-900 text-white hover:bg-blue-800"
                  >
                    {isBengali ? 'আরেকটি বার্তা পাঠান' : 'Send Another Message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  {errorMsg && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1">
                      <label className="font-bold text-slate-700 uppercase tracking-wider text-xs">
                        {isBengali ? 'আপনার নাম *' : 'Your Name *'}
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={isBengali ? 'যেমন: অনিমেষ সাহা' : 'e.g. Animesh Saha'}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/10 text-xs sm:text-sm outline-none transition-all"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1">
                      <label className="font-bold text-slate-700 uppercase tracking-wider text-xs">
                        {isBengali ? 'মোবাইল নম্বর *' : 'Phone Number *'}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={isBengali ? '+৯১ ৯৮৩০০ ০০০০০' : '+91 98300 00000'}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/10 text-xs sm:text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="space-y-1">
                      <label className="font-bold text-slate-700 uppercase tracking-wider text-xs">
                        {isBengali ? 'ইমেল' : 'Email Address'}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={isBengali ? 'ইমেল ঠিকানা (যেমনঃ name@example.com)' : 'name@example.com'}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/10 text-xs sm:text-sm outline-none transition-all"
                      />
                    </div>

                    {/* Subject */}
                    <div className="space-y-1">
                      <label className="font-bold text-slate-700 uppercase tracking-wider text-xs">
                        {isBengali ? 'বিষয়' : 'Subject'}
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder={isBengali ? 'যেমন: ছাত্রাবাস ভর্তি / সদস্যপদ অনুসন্ধান' : 'e.g. Hostel Admission / Membership inquiry'}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/10 text-xs sm:text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label className="font-bold text-slate-700 uppercase tracking-wider text-xs">
                      {isBengali ? 'আপনার বার্তা *' : 'Your Message *'}
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={isBengali ? 'আপনার প্রশ্ন বা বার্তা বিস্তারিত লিখুন...' : 'Write your inquiry or feedback...'}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/10 text-xs sm:text-sm outline-none transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 rounded-xl font-bold text-white bg-orange-600 hover:bg-orange-500 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 border border-orange-400 active:scale-[0.99] disabled:opacity-75"
                  >
                    {submitting ? (
                      <span>{isBengali ? 'পাঠানো হচ্ছে...' : 'Sending...'}</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{isBengali ? 'বার্তা পাঠান' : 'Send Message'}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Interactive Map Visual Representation */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200">
              <div className="p-5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-950">
                  <MapPin className="w-4 h-4 text-orange-600" />
                  <span>{isBengali ? 'কলকাতা কেন্দ্রীয় কার্যালয়ের মানচিত্র' : 'Kolkata Central Office Location Map'}</span>
                </div>
                <a
                  href="https://maps.google.com/?q=52B+Indian+Mirror+Street+Kolkata"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-blue-900 hover:text-orange-600 flex items-center gap-1"
                >
                  <span>{isBengali ? 'গুগল ম্যাপে খুলুন' : 'Open in Google Maps'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Map Canvas / Embed Simulation */}
              <div className="relative aspect-[16/8] bg-slate-200 overflow-hidden flex items-center justify-center">
                <iframe
                  title="Bangiya Saha Samity Location"
                  className="w-full h-full border-0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.582873138867!2d88.3582498!3d22.557319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027702fdf5fbc7%3A0x8e83cb2b7bc55648!2sIndian%20Mirror%20St%2C%20Taltala%2C%20Kolkata%2C%20West%20Bengal%20700013!5e0!3m2!1sen!2sin!4v1684000000000!5m2!1sen!2sin"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="p-4 text-xs text-slate-500 bg-white">
                💡 <span className="font-semibold text-slate-700">{isBengali ? 'দিকনির্দেশনা:' : 'Direction hint:'}</span> {isBengali ? 'জি. ডি. হাসপাতালের বিপরীতে, তালতলা, কলকাতা – ৭০০০১৩। এসপ্ল্যানেড / চাঁদনি চক / শিয়ালদহ স্টেশন থেকে সহজে গম্য।' : 'Opposite G.D. Hospital, Taltala, Kolkata – 700013. Accessible from Esplanade / Chandni Chowk / Sealdah Railway Station.'}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
