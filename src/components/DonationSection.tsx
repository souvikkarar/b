import React, { useState } from 'react';
import { Heart, ShieldCheck, CheckCircle2, Award, QrCode, FileText, ArrowRight, Sparkles, Download, Printer } from 'lucide-react';
import { NGO_DETAILS, TRANSPARENCY_STATS } from '../data/ngoData';
import { DonationRecord } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS, LOCALIZED_TIERS } from '../data/translations';

interface DonationSectionProps {
  initialCause?: string;
}

export const DonationSection: React.FC<DonationSectionProps> = ({ initialCause }) => {
  const { lang, isBengali } = useLanguage();
  const t = TRANSLATIONS[lang];
  const tiers = LOCALIZED_TIERS[lang];

  const [selectedTierId, setSelectedTierId] = useState<string>('library-1500');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once');
  const [paymentMethod, setPaymentMethod] = useState<'UPI' | 'NetBanking' | 'Card'>('UPI');
  
  // Donor form
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [donorPan, setDonorPan] = useState('');
  const [selectedCause, setSelectedCause] = useState(
    initialCause || (isBengali ? 'গ্রামীণ ছাত্রাবাস ও অতিথি কক্ষ তহবিল' : 'Rural Student Hostel & Guest Room Fund')
  );

  // Receipt state
  const [donationSuccessRecord, setDonationSuccessRecord] = useState<DonationRecord | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const selectedTier = tiers.find((t) => t.id === selectedTierId);
  const activeAmount = customAmount ? parseInt(customAmount, 10) || 0 : (selectedTier ? selectedTier.amount : 1500);

  const handleTierSelect = (tierId: string) => {
    setSelectedTierId(tierId);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(val);
    setSelectedTierId('');
  };

  const handleSubmitDonation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!donorName.trim() || activeAmount <= 0) return;

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      const randomReceiptNo = `BSS/DON/2026/${Math.floor(100000 + Math.random() * 900000)}`;
      const record: DonationRecord = {
        donorName: donorName.trim(),
        email: donorEmail.trim() || 'donor@example.com',
        phone: donorPhone.trim() || '+91 9876543210',
        panNumber: donorPan.trim().toUpperCase() || 'ABCDE1234F',
        amount: activeAmount,
        cause: selectedCause,
        paymentMethod,
        date: new Date().toLocaleDateString(isBengali ? 'bn-IN' : 'en-IN', { day: 'numeric', month: 'long', year: 'numeric' }),
        receiptNumber: randomReceiptNo,
      };
      setDonationSuccessRecord(record);
    }, 900);
  };

  return (
    <section id="donate" className="py-16 bg-gradient-to-b from-[#FAF7F2] to-[#F4EFE6] border-b border-[#8A5A36]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8A5A36]/10 text-xs font-bold text-[#8A5A36] uppercase tracking-wider mb-2">
            <span>{t.donationBadge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif-heading font-bold text-[#2D6A4F]">
            {t.donationHeading}
          </h2>

          <p className="mt-3 text-base text-[#6C4A31]">
            {t.donationSubtitle}
          </p>
        </div>

        {donationSuccessRecord ? (
          /* Instant Donation Receipt Display */
          <div className="max-w-3xl mx-auto bg-[#FAF7F2] rounded-2xl border-2 border-[#2D6A4F] p-6 sm:p-8 shadow-md">
            <div className="flex items-center justify-between pb-4 border-b border-[#8A5A36]/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#2D6A4F] text-white flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-serif-heading font-bold text-[#2D6A4F]">
                    {isBengali ? `অশেষ ধন্যবাদ, ${donationSuccessRecord.donorName}!` : `Thank you, ${donationSuccessRecord.donorName}!`}
                  </h3>
                  <p className="text-xs text-[#8A5A36]">
                    {isBengali 
                      ? `আপনার ₹${donationSuccessRecord.amount.toLocaleString('en-IN')} অনুদানের প্রতিশ্রুতি সফলভাবে নথিভুক্ত হয়েছে।`
                      : `Your contribution of ₹${donationSuccessRecord.amount.toLocaleString('en-IN')} has been pledged successfully.`}
                  </p>
                </div>
              </div>

              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#2D6A4F]/10 text-[#2D6A4F]">
                {donationSuccessRecord.receiptNumber}
              </span>
            </div>

            {/* Official Donation Receipt Sheet */}
            <div className="my-6 p-6 rounded-xl bg-white border border-[#8A5A36]/30 font-sans space-y-4 shadow-2xs">
              <div className="flex justify-between items-start border-b border-[#8A5A36]/20 pb-3">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#8A5A36]">
                    {isBengali ? 'সাময়িক অনুদান রসিদ' : 'Provisional Donation Receipt'}
                  </div>
                  <div className="text-base font-serif-heading font-bold text-[#2D6A4F]">
                    {isBengali ? 'বঙ্গীয় সাহা সমিতি (Bangiya Saha Samity)' : 'Bangiya Saha Samity'}
                  </div>
                  <div className="text-[11px] text-[#6C4A31]">
                    {isBengali 
                      ? 'পশ্চিমবঙ্গের তপশিলি জাতি সুঁড়ি সম্প্রদায়ের একটি সামাজিক প্রতিষ্ঠান • Regd. No. 4522 of 1936–37'
                      : 'A Social Organisation of the Scheduled Caste Sunri Community of W.B • Regd. No. 4522 of 1936–37'}
                  </div>
                </div>
                <div className="text-right text-xs">
                  <div className="font-bold text-[#2D6A4F]">{isBengali ? 'তারিখ:' : 'DATE:'} {donationSuccessRecord.date}</div>
                  <div className="text-stone-500">{isBengali ? 'মাধ্যম:' : 'Mode:'} {donationSuccessRecord.paymentMethod}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-[#8A5A36] font-semibold">{isBengali ? 'দাতার নাম:' : 'Donor Name:'}</span>{' '}
                  <span className="font-bold text-[#2D241E]">{donationSuccessRecord.donorName}</span>
                </div>
                <div>
                  <span className="text-[#8A5A36] font-semibold">{isBengali ? 'পরিচয় / প্যান:' : 'ID / PAN:'}</span>{' '}
                  <span className="font-mono font-bold text-[#2D241E]">{donationSuccessRecord.panNumber}</span>
                </div>
                <div>
                  <span className="text-[#8A5A36] font-semibold">{isBengali ? 'বরাদ্দকৃত খাত:' : 'Allocated Cause:'}</span>{' '}
                  <span className="font-medium text-[#2D241E]">{donationSuccessRecord.cause}</span>
                </div>
              </div>

              <div className="p-3 bg-[#FAF7F2] rounded border border-[#8A5A36]/15 flex items-center justify-between">
                <span className="text-sm font-serif-heading font-bold text-[#2D6A4F]">
                  {isBengali ? 'মোট অনুদানের পরিমাণ:' : 'Total Contribution:'}
                </span>
                <span className="text-xl font-bold text-[#2D6A4F]">₹{donationSuccessRecord.amount.toLocaleString('en-IN')}</span>
              </div>

              <p className="text-[11px] text-stone-500 italic">
                {isBengali
                  ? `* আয়কর রিটার্নের জন্য অফিসিয়াল স্বাক্ষরিত রসিদ এবং ফর্ম ১০বিই অতি শীঘ্রই ${donationSuccessRecord.email}-এ পাঠিয়ে দেওয়া হবে।`
                  : `* An official signed receipt for income tax filing and Form 10BE filing will be dispatched to ${donationSuccessRecord.email}.`}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <button
                onClick={() => window.print()}
                className="px-4 py-2 rounded-lg text-xs font-bold text-[#8A5A36] hover:bg-[#8A5A36]/10 border border-[#8A5A36]/30 flex items-center gap-1.5"
              >
                <Printer className="w-4 h-4" />
                <span>{isBengali ? 'রসিদ প্রিন্ট করুন' : 'Print Certificate'}</span>
              </button>

              <button
                onClick={() => setDonationSuccessRecord(null)}
                className="px-5 py-2 rounded-lg text-xs font-bold text-white bg-[#2D6A4F] hover:bg-[#20513B]"
              >
                {isBengali ? 'পুনরায় অনুদান দিন' : 'Make Another Contribution'}
              </button>
            </div>
          </div>
        ) : (
          /* Main Donation Card */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Donation Amount & Tier Selector */}
            <div className="lg:col-span-7 bg-[#FAF7F2] rounded-2xl border-2 border-[#8A5A36]/25 p-6 sm:p-8 shadow-xs space-y-6">
              
              {/* Frequency Toggle */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#8A5A36] uppercase tracking-wider">
                  {t.frequencyLabel}
                </span>
                <div className="flex rounded-lg bg-[#F4EFE6] p-1 border border-[#8A5A36]/20">
                  <button
                    type="button"
                    onClick={() => setFrequency('once')}
                    className={`px-3.5 py-1.5 rounded-md text-xs font-bold transition-all ${
                      frequency === 'once'
                        ? 'bg-[#2D6A4F] text-white shadow-xs'
                        : 'text-[#6C4A31] hover:text-[#2D241E]'
                    }`}
                  >
                    {t.oneTime}
                  </button>
                  <button
                    type="button"
                    onClick={() => setFrequency('monthly')}
                    className={`px-3.5 py-1.5 rounded-md text-xs font-bold transition-all ${
                      frequency === 'monthly'
                        ? 'bg-[#2D6A4F] text-white shadow-xs'
                        : 'text-[#6C4A31] hover:text-[#2D241E]'
                    }`}
                  >
                    {t.monthly}
                  </button>
                </div>
              </div>

              {/* Tiers Grid */}
              <div className="space-y-3">
                <div className="text-xs font-bold text-[#2D6A4F] uppercase tracking-wider">
                  {t.chooseTier}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {tiers.map((tier) => {
                    const isSelected = selectedTierId === tier.id;
                    return (
                      <button
                        key={tier.id}
                        type="button"
                        onClick={() => handleTierSelect(tier.id)}
                        className={`p-4 rounded-xl text-left border transition-all flex flex-col justify-between relative ${
                          isSelected
                            ? 'bg-[#FAF7F2] border-[#2D6A4F] ring-2 ring-[#2D6A4F] shadow-xs'
                            : 'bg-[#F4EFE6]/50 border-[#8A5A36]/20 hover:border-[#8A5A36]/60'
                        }`}
                      >
                        {tier.isPopular && (
                          <span className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#8A5A36] text-white tracking-wide">
                            {isBengali ? 'সর্বাধিক প্রয়োজনীয়' : 'Most Needed'}
                          </span>
                        )}

                        <div>
                          <div className="text-xl font-serif-heading font-bold text-[#2D6A4F]">
                            ₹{tier.amount.toLocaleString('en-IN')}
                            <span className="text-xs font-sans font-normal text-stone-500">
                              {frequency === 'monthly' ? (isBengali ? '/মাস' : '/mo') : ''}
                            </span>
                          </div>
                          <div className="text-xs font-bold text-[#4A3B32] mt-0.5">
                            {tier.title}
                          </div>
                        </div>

                        <p className="text-[11px] text-[#6C4A31] mt-2 leading-relaxed">
                          {tier.coverage}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Custom Amount Field */}
              <div className="p-4 rounded-xl bg-[#F4EFE6] border border-[#8A5A36]/20 flex flex-col sm:flex-row items-center justify-between gap-3">
                <label htmlFor="customAmountInput" className="text-xs font-bold text-[#6C4A31] uppercase tracking-wider whitespace-nowrap">
                  {t.customAmount}
                </label>
                <div className="relative w-full sm:w-48">
                  <span className="absolute left-3 top-2.5 text-stone-500 font-bold text-sm">₹</span>
                  <input
                    id="customAmountInput"
                    type="text"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    placeholder="e.g. 2100"
                    className="w-full pl-7 pr-3 py-2 rounded-lg bg-white border border-[#8A5A36]/30 text-sm font-bold text-[#2D6A4F] focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
                  />
                </div>
              </div>

              {/* Donor Cause Selection */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#8A5A36] uppercase tracking-wider">
                  {t.directContribution}
                </label>
                <select
                  value={selectedCause}
                  onChange={(e) => setSelectedCause(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg bg-white border border-[#8A5A36]/30 text-xs sm:text-sm text-[#4A3B32] font-medium focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
                >
                  <option value={isBengali ? 'গ্রামীণ ছাত্রাবাস ও অতিথি কক্ষ তহবিল' : 'Rural Student Hostel & Guest Room Fund'}>
                    {isBengali ? 'গ্রামীণ ছাত্রাবাস ও অতিথি কক্ষ (Guest Room) তহবিল' : 'Rural Student Hostel & Guest Room Fund'}
                  </option>
                  <option value={isBengali ? 'শিক্ষার উদ্দেশ্যে সামাজিক সহায়তা (শুধুমাত্র আমাদের সম্প্রদায়ের জন্য)' : 'Social Help for Educational Purpose (Only for Our Community) — Female Higher Education'}>
                    {isBengali ? 'শিক্ষার উদ্দেশ্যে সামাজিক সহায়তা (শুধুমাত্র আমাদের সম্প্রদায়ের জন্য) — নারী উচ্চশিক্ষায় বিশেষ অগ্রাধিকার' : 'Social Help for Educational Purpose (Only for Our Community) — Female Higher Education'}
                  </option>
                  <option value={isBengali ? 'তপশিলি অধিকার ও আইনি সুরক্ষা' : 'SC Constitutional Legal Defense & Advocacy'}>
                    {isBengali ? 'তপশিলি অধিকার ও আইনি সুরক্ষা' : 'SC Constitutional Legal Defense & Advocacy'}
                  </option>
                  <option value={isBengali ? 'সাধারণ সমাজকল্যাণ তহবিল' : 'General Social Welfare Corpus'}>
                    {isBengali ? 'সাধারণ সমাজকল্যাণ তহবিল (যেখানে সবচেয়ে জরুরি)' : 'General Social Welfare Corpus (Where Most Urgently Needed)'}
                  </option>
                </select>
              </div>

              {/* Payment Methods */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-[#8A5A36] uppercase tracking-wider">
                  {t.paymentMethod}
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('UPI')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold border flex items-center justify-center gap-1.5 transition-all ${
                      paymentMethod === 'UPI'
                        ? 'bg-[#2D6A4F] text-white border-[#2D6A4F]'
                        : 'bg-white text-[#6C4A31] border-[#8A5A36]/30 hover:border-[#2D6A4F]'
                    }`}
                  >
                    <QrCode className="w-3.5 h-3.5" />
                    <span>UPI / QR</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('NetBanking')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold border flex items-center justify-center gap-1.5 transition-all ${
                      paymentMethod === 'NetBanking'
                        ? 'bg-[#2D6A4F] text-white border-[#2D6A4F]'
                        : 'bg-white text-[#6C4A31] border-[#8A5A36]/30 hover:border-[#2D6A4F]'
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>NetBanking</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('Card')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold border flex items-center justify-center gap-1.5 transition-all ${
                      paymentMethod === 'Card'
                        ? 'bg-[#2D6A4F] text-white border-[#2D6A4F]'
                        : 'bg-white text-[#6C4A31] border-[#8A5A36]/30 hover:border-[#2D6A4F]'
                    }`}
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Debit/Card</span>
                  </button>
                </div>
              </div>

            </div>

            {/* Right: Donor Details & Donation Form */}
            <div className="lg:col-span-5 bg-[#FAF7F2] rounded-2xl border-2 border-[#8A5A36]/25 p-6 sm:p-7 shadow-xs space-y-5">
              <div className="pb-3 border-b border-[#8A5A36]/20">
                <span className="text-xs font-bold text-[#8A5A36] uppercase tracking-wider">
                  {isBengali ? 'দাতার বিবরণ ও অনুদান তথ্য' : 'Donor Information & Contribution Details'}
                </span>
                <h3 className="text-lg font-serif-heading font-bold text-[#2D6A4F] mt-0.5">
                  {t.donorSummary}
                </h3>
              </div>

              {/* Amount preview badge */}
              <div className="p-3.5 rounded-xl bg-[#F4EFE6] border border-[#8A5A36]/20 flex items-center justify-between">
                <div>
                  <div className="text-xs text-[#8A5A36]">{t.pledgedAmount}</div>
                  <div className="text-2xl font-serif-heading font-bold text-[#2D6A4F]">
                    ₹{activeAmount.toLocaleString('en-IN')}
                    {frequency === 'monthly' && (
                      <span className="text-xs font-sans text-stone-500 font-normal">
                        {isBengali ? ' / মাস' : ' / month'}
                      </span>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block px-2.5 py-1 rounded bg-[#2D6A4F]/10 text-[#2D6A4F] text-xs font-bold">
                    {isBengali ? 'স্বচ্ছ সামাজিক অনুদান' : '100% Transparent'}
                  </span>
                </div>
              </div>

              <form onSubmit={handleSubmitDonation} className="space-y-3.5">
                <div>
                  <label htmlFor="donorName" className="block text-xs font-semibold text-[#4A3B32] mb-1">
                    {t.fullName}
                  </label>
                  <input
                    id="donorName"
                    type="text"
                    required
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    placeholder={isBengali ? 'উদাঃ অমল কুমার সাহা' : 'e.g. Ramesh Chandra'}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-[#8A5A36]/30 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="donorEmail" className="block text-xs font-semibold text-[#4A3B32] mb-1">
                      {t.email}
                    </label>
                    <input
                      id="donorEmail"
                      type="email"
                      required
                      value={donorEmail}
                      onChange={(e) => setDonorEmail(e.target.value)}
                      placeholder="donor@example.com"
                      className="w-full px-3 py-2 rounded-lg bg-white border border-[#8A5A36]/30 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
                    />
                  </div>

                  <div>
                    <label htmlFor="donorPhone" className="block text-xs font-semibold text-[#4A3B32] mb-1">
                      {t.mobile}
                    </label>
                    <input
                      id="donorPhone"
                      type="tel"
                      value={donorPhone}
                      onChange={(e) => setDonorPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-3 py-2 rounded-lg bg-white border border-[#8A5A36]/30 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="donorPan" className="block text-xs font-semibold text-[#4A3B32] mb-1">
                    {isBengali ? 'প্যান / ভোটার / আধার কার্ড (ঐচ্ছিক)' : 'PAN / ID Number (Optional)'}
                  </label>
                  <input
                    id="donorPan"
                    type="text"
                    maxLength={10}
                    value={donorPan}
                    onChange={(e) => setDonorPan(e.target.value.toUpperCase())}
                    placeholder="ABCDE1234F"
                    className="w-full px-3 py-2 rounded-lg bg-white border border-[#8A5A36]/30 text-xs sm:text-sm font-mono uppercase focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isProcessing || activeAmount <= 0}
                  className="w-full py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-[#2D6A4F] hover:bg-[#20513B] shadow-sm flex items-center justify-center gap-2 transition-all active:scale-[0.99] disabled:opacity-50"
                >
                  {isProcessing ? (
                    <span>{t.generatingCertificate}</span>
                  ) : (
                    <>
                      <Heart className="w-4 h-4 fill-emerald-200 text-emerald-200" />
                      <span>{isBengali ? `₹${activeAmount.toLocaleString('en-IN')} অনুদান প্রদান করুন` : `Proceed with ₹${activeAmount.toLocaleString('en-IN')} Support`}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Trust Badge */}
              <div className="pt-2 text-center text-[11px] text-[#6C4A31] space-y-1">
                <div className="flex items-center justify-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#2D6A4F]" />
                  <span className="font-semibold">
                    {isBengali ? '২৫৬-বিট সুরক্ষিত ও নির্ভরযোগ্য ব্যবস্থা' : 'Secured by 256-Bit Bank Grade Encryption'}
                  </span>
                </div>
                <p>
                  {isBengali 
                    ? 'অনুদান সরাসরি গ্রামীণ ছাত্রাবাসের আবাসিক ব্যবস্থা, সদস্যদের অতিথি কক্ষ এবং শুধুমাত্র আমাদের সম্প্রদায়ের জন্য শিক্ষার উদ্দেশ্যে সামাজিক সহায়তায় ব্যবহৃত হয়।'
                    : 'Contributions directly sustain our student hostel arrangements, Guest Room, and Social Help for Educational Purpose (Only for Our Community).'}
                </p>
              </div>

            </div>

          </div>
        )}

        {/* Rupee Allocation Transparency Section */}
        <div id="transparency" className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#FAF7F2] border border-[#8A5A36]/25">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#8A5A36]/20">
            <div>
              <span className="text-xs font-bold text-[#8A5A36] uppercase tracking-wider">
                {isBengali ? 'আর্থিক স্বচ্ছতা ও জনদায়বদ্ধতা' : 'Financial Transparency & Accountability'}
              </span>
              <h3 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#2D6A4F] mt-0.5">
                {isBengali ? 'প্রতিটি টাকার ১০০% স্বচ্ছ সমাজকল্যাণমূলক ব্যবহার' : '100% Transparent Grassroots Rupee Allocation'}
              </h3>
            </div>
            <div className="text-xs text-[#6C4A31]">
              {isBengali 
                ? 'স্বতন্ত্র চাটার্ড অ্যাকাউন্ট্যান্ট দ্বারা প্রতি বছর নিরীক্ষিত ও জনসমক্ষে উন্মুক্ত।'
                : 'Audited by independent Chartered Accountants annually. Available for public scrutiny.'}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            {TRANSPARENCY_STATS.map((stat, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#F4EFE6] border border-[#8A5A36]/20 space-y-2">
                <div className="text-3xl font-serif-heading font-bold text-[#2D6A4F]">
                  {stat.percentage}
                </div>
                <div className="text-sm font-bold text-[#4A3B32]">
                  {isBengali
                    ? (idx === 0 ? 'ছাত্রাবাস ও শিক্ষার উদ্দেশ্যে সামাজিক সহায়তা (শুধুমাত্র আমাদের সম্প্রদায়ের জন্য)' : idx === 1 ? 'দুস্থ ও বিপন্ন সদস্যদের সহায়তা ও অতিথি কক্ষ' : 'সাংবিধানিক অধিকার রক্ষা ও প্রকাশনা')
                    : stat.label}
                </div>
                <p className="text-xs text-[#6C4A31] leading-relaxed">
                  {isBengali
                    ? (idx === 0 ? '৫২বি ইন্ডিয়ান মিরর স্ট্রিটে ছাত্রাবাসের আবাসিক ব্যবস্থা, নারী উচ্চশিক্ষায় বিশেষ অগ্রাধিকার ও পাঠাগার পরিচালনার জন্য।' : idx === 1 ? 'বিপন্ন পরিবার ও বিধবা মহিলাদের আর্থিক সহায়তা এবং সদস্যদের অতিথি কক্ষ রক্ষণাবেক্ষণের জন্য।' : 'আইনি সচেতনতা, সাময়িকী প্রকাশ ও অফিসিয়াল কমপ্লায়েন্স সংক্রান্ত খরচ।')
                    : stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
