import { Language } from '../context/LanguageContext';

export interface LocalizedPillar {
  id: string;
  title: string;
  tagline: string;
  description: string;
  keyInitiatives: string[];
  icon: string;
  impactNumber: string;
  impactLabel: string;
}

export interface LocalizedMilestone {
  year: string;
  title: string;
  location: string;
  description: string;
  badge: string;
}

export interface LocalizedDonationTier {
  id: string;
  amount: number;
  title: string;
  impact: string;
  coverage: string;
  isPopular?: boolean;
}

export interface LocalizedLegalFAQ {
  id: string;
  articleOrAct: string;
  question: string;
  answer: string;
  practicalStep: string;
}

export const TRANSLATIONS = {
  en: {
    // Top Bar & Navbar
    taxExemptionBadge: 'Registered Non-Profit | Est. 1936-37',
    regDetails: 'Central Office: 52B Indian Mirror Street, Kol-13 • Birthplace: 77 Maniktala St, Kol-6',
    helplineTitle: 'Central Office Helpline:',
    orgName: 'Bangiya Saha Samity',
    orgFullTitle: 'Bangiya Saha Samity (Sunri Samaj)',
    orgSubtitle: 'A Social Organisation of the Scheduled Caste Sunri Community of W.B',
    navHome: 'Home',
    navAbout: 'About Us',
    navHeritage: 'Cultural Heritage',
    navMembership: 'Membership',
    navEvents: 'Events & Activities',
    navNews: 'News & Updates',
    navGallery: 'Gallery',
    navDonate: 'Donate / Support Us',
    navContact: 'Contact Us',
    navDonationBtn: 'Donate',
    quickNav: 'Quick Navigation',

    // Hero Section (Requested Structure)
    heroHeadline: 'Empowering the Sunri Community Through Unity, Heritage & Social Development',
    heroSubheadline: 'Building a stronger future while preserving our rich cultural heritage.',
    btnBecomeMember: 'Become a Member',
    btnContactUs: 'Contact Us',
    btnDonateNow: 'Donate / Support Us',

    // Hero Section
    preHeaderBadge: 'Founded 1936-37 • Central Office: 52B Indian Mirror Street, Kolkata',
    ambedkarQuote: '"In the Year 1950 in the Constitution of India, Dr. Baba Saheb Ambedkar included Sunri as a Scheduled Caste community thereon."',
    ambedkarAuthor: '— Constitutional Protection of Sunri Community',
    heroEyebrow: 'Social Organization of the Scheduled Caste Sunri Community of West Bengal',
    heroTitleStart: 'Dedicated to the Social, Educational & ',
    heroTitleAccent: 'Constitutional Rights',
    heroTitleEnd: ' of the Sunri Samaj.',
    heroDescription: 'Established in 1936-37 at Maa Jagat Janani Temple (77 Maniktala Street) with our Central Office in our four-storeyed building at 52B Indian Mirror Street, Kolkata. Residential hostel arrangements are made for rural students (with a Guest Room facility for community members), alongside Social Help for Educational Purpose (Only for Our Community) with a special priority for female higher education, defending Scheduled Caste status, and extending distress relief to vulnerable members.',
    heroBadge1Title: 'Established 1936-37',
    heroBadge1Desc: 'Founded at Maa Jagat Janani Temple, 77 Maniktala Street by distinguished persons of Sunri Samaj.',
    heroBadge2Title: 'Dr. Ambedkar Inclusion (1950)',
    heroBadge2Desc: 'Dr. Baba Saheb Ambedkar included Sunri as a Scheduled Caste community in the Constitution of India.',
    heroBadge3Title: 'Rural Students Hostel & Guest Room',
    heroBadge3Desc: 'At 52B Indian Mirror Street, residential hostel arrangements are made for rural students alongside a Guest Room facility for community members.',
    heroCtaDonate: 'Support Hostel & Educational Social Help',
    heroCtaExplore: 'Explore History & Objectives',
    heroCtaLegalAid: 'Constitutional SC Protection Desk',
    statsSubtitle: 'Historical Milestones of Bangiya Saha Samity (Sunri Samaj)',

    // Metrics
    metrics: [
      { label: 'Historic Foundation', value: '1936-37', subtext: 'Maa Jagat Janani Temple, 77 Maniktala St' },
      { label: 'SC Constitutional Recognition', value: '1950', subtext: 'Included by Dr. Baba Saheb Ambedkar' },
      { label: 'Central Office Acquired', value: '1956', subtext: '4-Storeyed Building, 52B Indian Mirror St' },
      { label: 'Hostel & Guest Room', value: 'Up to 50', subtext: 'Hostel Arrangements & Member Guest Room' },
    ],

    // Mission / Objectives Section
    missionBadge: 'Founding Constitutional Charter',
    missionHeading: 'The Five Sacred Objectives of the Society',
    missionSubtitle: 'Centered on educational support—highlighting a special priority for female higher education—alongside Social Help for Educational Purpose (Only for Our Community), social reform, and constitutional rights.',
    keyInitiativesHeader: 'Key Strategic Focus Areas:',
    verifiedDirectImpact: 'Constitutional Mandate',
    sponsorPillarBtn: 'Support This Objective',

    // History / Milestones Section (Replacing old stories)
    storiesBadge: 'Historical Chronicle & Milestones',
    storiesHeading: 'From 1936 Foundation to Constitutional SC Recognition',
    storiesSubtitle: 'The inspiring journey of Bangiya Saha Samity (Sunri Samaj) across 88+ years of community service and leadership.',
    readFullStoryBtn: 'View Detailed History',
    readStoryModalTitle: 'Historical Chronicle Archive',
    filterAll: 'All Milestones',
    categoryEducation: 'Foundation Era (1936-37)',
    categoryLegal: 'Dr. Ambedkar Landmark (1950)',
    categoryCommunity: 'Central Office Acquisition (1956)',
    categoryFellowship: 'Rural Students Hostel',

    // Donation Section
    donationBadge: 'Social Help for Educational Purpose (Only for Our Community)',
    donationHeading: 'Support Rural Hostel & Social Help for Educational Purpose',
    donationSubtitle: 'Every contribution directly finances residential hostel arrangements for rural students and our Guest Room facility for community members at 52B Indian Mirror Street, Social Help for Educational Purpose (Only for Our Community) with a special priority for female higher education, and relief for distressed members.',
    frequencyOnce: 'One-Time Contribution',
    frequencyMonthly: 'Monthly Community Patron',
    selectTierHeader: 'Choose a Welfare Fund Tier:',
    popularBadge: 'High Need',
    customAmountLabel: 'Or Enter Custom Donation Amount (₹)',
    panMandatoryNotice: 'Official donor receipt will be issued in the name of Bangiya Saha Samity.',
    directTransferTitle: 'Direct Bank Transfer / NEFT / IMPS',
    bankName: 'State Bank of India (SBI)',
    accountName: 'Bangiya Saha Samity (Sunri Samaj)',
    accountNumber: '38192019360',
    ifscCode: 'SBIN0000084',
    branchName: 'Bowbazar / Esplanade Branch, Kolkata',
    proceedPaymentBtn: 'Complete Contribution',
    donorLedgerHeader: 'Community Charity Allocation',
    taxCertNote: 'Official donation receipt and acknowledgment will be issued in the name of Bangiya Saha Samity.',

    // Constitutional Rights Hub
    legalBadge: 'Constitutional Rights & SC Protection',
    legalHeading: 'Dr. Ambedkar Constitutional Safeguards & Retaining SC Status',
    legalSubtitle: 'In 1950, Dr. Baba Saheb Ambedkar included Sunri as a Scheduled Caste community. Explore how the Samity vigorously protects community rights, reservations, and welfare privileges.',
    practicalLegalAction: 'Community Action & Practical Support:',
    emergencyContactBoxTitle: 'Central Office Consultation & Certificate Support',
    emergencyContactBoxDesc: 'For guidance regarding SC digital certificates, legislative reservation queries, Guest Room availability, or hostel admission at 52B Indian Mirror Street.',
    callLawyerBtn: 'Contact Central Office Advocate',

    // Contact & Footer
    contactHeadquarters: 'Central Office: 52B Indian Mirror Street, Kolkata - 700013',
    contactBirthplace: 'Historic Birthplace: Maa Jagat Janani Temple, 77 Maniktala Street, Kolkata - 700006',
    contactHostel: 'Rural Students Hostel & Guest Room: 52B Indian Mirror Street, Kolkata (Guest Room for Community Members)',
    footerAboutText: 'Bangiya Saha Samity (Sunri Samaj) is dedicated to the social, economic, educational, and constitutional development of the Scheduled Caste Sunri Community in West Bengal.',
  },

  bn: {
    // Top Bar & Navbar
    taxExemptionBadge: 'নিবন্ধিত জনকল্যাণ প্রতিষ্ঠান | স্থাপিত ১৯৩৬-৩৭',
    regDetails: 'কেন্দ্রীয় কার্যালয়: ৫২বি ইন্ডিয়ান মিরর স্ট্রিট, কোল-১৩ • প্রতিষ্ঠাস্থল: ৭৭ মানিকতলা স্ট্রিট, কোল-৬',
    helplineTitle: 'কেন্দ্রীয় কার্যালয় হেল্পলাইন:',
    orgName: 'বঙ্গীয় সাহা সমিতি',
    orgFullTitle: 'বঙ্গীয় সাহা সমিতি (শুঁড়ি সমাজ)',
    orgSubtitle: 'পশ্চিমবঙ্গের তপশিলি জাতি শুঁড়ি সমাজের একটি সামাজিক সংগঠন',
    navHome: 'প্রথম পাতা',
    navAbout: 'আমাদের সম্পর্কে',
    navHeritage: 'সাংস্কৃতিক ঐতিহ্য',
    navMembership: 'সদস্যপদ',
    navEvents: 'অনুষ্ঠান ও কর্মসূচি',
    navNews: 'সংবাদ ও আপডেট',
    navGallery: 'গ্যালারি',
    navDonate: 'সহায়তা ও অনুদান',
    navContact: 'যোগাযোগ',
    navDonationBtn: 'অনুদান দিন',
    quickNav: 'দ্রুত নেভিগেশন',

    // Hero Section (Requested Structure)
    heroHeadline: 'ঐক্য, ঐতিহ্য ও সামাজিক উন্নয়নের মাধ্যমে শুঁড়ি সমাজের ক্ষমতায়ন',
    heroSubheadline: 'আমাদের সমৃদ্ধ সাংস্কৃতিক ঐতিহ্য অক্ষুণ্ণ রেখে একটি উন্নত ও স্বনির্ভর ভবিষ্যৎ নির্মাণ।',
    btnBecomeMember: 'সদস্য হন',
    btnContactUs: 'যোগাযোগ করুন',
    btnDonateNow: 'সহায়তা ও অনুদান',

    // Hero Section
    preHeaderBadge: 'স্থাপিত ১৯৩৬-৩৭ • কেন্দ্রীয় কার্যালয়: ৫২বি ইন্ডিয়ান মিরর স্ট্রিট, কলকাতা',
    ambedkarQuote: '"১৯৫০ সালে ভারতের সংবিধানে ড. বাবাসাহেব আম্বেদকর শুঁড়ি সম্প্রদায়কে তপশিলি জাতি হিসেবে অন্তর্ভুক্ত করেন।"',
    ambedkarAuthor: '— তপশিলি শুঁড়ি সমাজের ঐতিহাসিক সাংবিধানিক স্বীকৃতি',
    heroEyebrow: 'পশ্চিমবঙ্গের তপশিলি জাতি শুঁড়ি সমাজের সামাজিক ও সাংবিধানিক সংগঠন',
    heroTitleStart: 'শুঁড়ি সমাজের সামাজিক, শিক্ষাগত ও ',
    heroTitleAccent: 'সাংবিধানিক অধিকারের সুরক্ষায়',
    heroTitleEnd: ' নিবেদিত প্রতিষ্ঠান।',
    heroDescription: '১৯৩৬-৩৭ সালে কলকাতার ৭৭ মানিকতলা স্ট্রিটের মা জগৎ জননী মন্দিরে শুঁড়ি সমাজের বিশিষ্ট ব্যক্তিবর্গের দ্বারা প্রতিষ্ঠিত। ৫২বি ইন্ডিয়ান মিরর স্ট্রিটে নিজস্ব চারতলা ভবনে কেন্দ্রীয় কার্যালয় অবস্থিত। এখানে গ্রামীণ শিক্ষার্থীদের জন্য ছাত্রাবাসের আবাসিক ব্যবস্থা করা হয় এবং সমাজের সদস্যদের জন্য অতিথি কক্ষের (Guest Room) সুবিধা রয়েছে। শুধুমাত্র আমাদের সম্প্রদায়ের জন্য শিক্ষার উদ্দেশ্যে সামাজিক সহায়তা, নারী উচ্চশিক্ষায় বিশেষ অগ্রাধিকার, সংবিধানে তপশিলি মর্যাদা সংরক্ষণ এবং দুস্থ ও বিপন্ন মানুষদের সেবা করাই আমাদের অঙ্গীকার।',
    heroBadge1Title: 'ঐতিহাসিক প্রতিষ্ঠা (১৯৩৬-৩৭)',
    heroBadge1Desc: 'কলকাতার ৭৭ মানিকতলা স্ট্রিটের মা জগৎ জননী মন্দিরে সমাজের বিশিষ্ট ব্যক্তিবর্গ দ্বারা গঠিত।',
    heroBadge2Title: 'ড. আম্বেদকর কর্তৃক স্বীকৃতি (১৯৫০)',
    heroBadge2Desc: 'ভারতের সংবিধানে ড. বাবাসাহেব আম্বেদকর কর্তৃক শুঁড়ি সম্প্রদায়কে তপশিলি জাতি হিসেবে অন্তর্ভুক্তকরণ।',
    heroBadge3Title: 'গ্রামীণ ছাত্রাবাস ও অতিথি কক্ষ',
    heroBadge3Desc: '৫২বি ইন্ডিয়ান মিরর স্ট্রিটে দূরবর্তী গ্রামীণ শিক্ষার্থীদের জন্য আবাসিক ব্যবস্থা করা হয় এবং সমাজের সদস্যদের জন্য অতিথি কক্ষের (Guest Room) সুবিধা রয়েছে।',
    heroCtaDonate: 'ছাত্রাবাস ও শিক্ষার সামাজিক সহায়তায় অনুদান দিন',
    heroCtaExplore: 'ইতিহাস ও উদ্দেশ্যসমূহ দেখুন',
    heroCtaLegalAid: 'তপশিলি অধিকার ও আইনি সহায়তা ডেস্ক',
    statsSubtitle: 'পশ্চিমবঙ্গে তপশিলি জাতি শুঁড়ি সম্প্রদায়ের সেবায় ৮৮+ বছরের ঐতিহাসিক মাইলফলক',

    // Metrics
    metrics: [
      { label: 'ঐতিহাসিক প্রতিষ্ঠা', value: '১৯৩৬-৩৭', subtext: 'মা জগৎ জননী মন্দির, ৭৭ মানিকতলা স্ট্রিট' },
      { label: 'সংবিধানে তপশিলি স্বীকৃতি', value: '১৯৫০', subtext: 'ড. বাবাসাহেব আম্বেদকর কর্তৃক সংবিধানে অন্তর্ভুক্ত' },
      { label: 'স্থায়ী কেন্দ্রীয় কার্যালয়', value: '১৯৫৬', subtext: '৪ তলা ভবন, ৫২বি ইন্ডিয়ান মিরর স্ট্রিট' },
      { label: 'ছাত্রাবাস ও অতিথি কক্ষ', value: '৫০ আসন পর্যন্ত', subtext: 'আবাসিক ব্যবস্থা ও সদস্যদের জন্য অতিথি কক্ষ' },
    ],

    // Mission / Objectives Section
    missionBadge: 'সংগঠনের সংবিধান ও লক্ষ্য',
    missionHeading: 'বঙ্গীয় সাহা সমিতির ৫টি সাংবিধানিক উদ্দেশ্য',
    missionSubtitle: 'নারী উচ্চশিক্ষায় বিশেষ অগ্রাধিকারসহ শিক্ষা সহায়তা, শুধুমাত্র আমাদের সম্প্রদায়ের জন্য শিক্ষার উদ্দেশ্যে সামাজিক সহায়তা, সামাজিক সংস্কার ও সাংবিধানিক অধিকার রক্ষায় গৃহীত পঞ্চমুখী কর্মসূচি।',
    keyInitiativesHeader: 'প্রধান বাস্তবায়ন কর্মসূচি:',
    verifiedDirectImpact: 'সংবিধানসম্মত উদ্দেশ্য',
    sponsorPillarBtn: 'এই উদ্দেশ্যে পাশে থাকুন',

    // History / Milestones Section
    storiesBadge: 'ঐতিহাসিক ইতিবৃত্ত ও মাইলফলক',
    storiesHeading: '১৯৩৬ সালের প্রতিষ্ঠা থেকে সাংবিধানিক তপশিলি স্বীকৃতি',
    storiesSubtitle: '৮৮ বছরেরও বেশি সময় ধরে শুঁড়ি সমাজের ঐতিহ্য, আত্মমর্যাদা প্রতিষ্ঠা ও সমাজ সংস্কারের গৌরবময় ইতিবৃত্ত।',
    readFullStoryBtn: 'বিস্তারিত ইতিহাস পড়ুন',
    readStoryModalTitle: 'ঐতিহাসিক নথিপত্র ও ইতিবৃত্ত',
    filterAll: 'সকল ঐতিহাসিক অধ্যায়',
    categoryEducation: 'প্রতিষ্ঠা পর্ব (১৯৩৬-৩৭)',
    categoryLegal: 'ড. আম্বেদকর সাংবিধানিক স্বীকৃতি (১৯৫০)',
    categoryCommunity: 'স্থায়ী ভবন ক্রয় (১৯৫৬)',
    categoryFellowship: 'গ্রামীণ ছাত্রাবাস ও ৪ তলা ভবন',

    // Donation Section
    donationBadge: 'শিক্ষার উদ্দেশ্যে সামাজিক সহায়তা (শুধুমাত্র আমাদের সম্প্রদায়ের জন্য)',
    donationHeading: 'গ্রামীণ ছাত্রাবাস ও শিক্ষার উদ্দেশ্যে সামাজিক সহায়তায় অংশ নিন',
    donationSubtitle: 'আপনার প্রতিটি অনুদান সরাসরি ৫২বি ইন্ডিয়ান মিরর স্ট্রিটের ছাত্রাবাসে শিক্ষার্থীদের আবাসিক ব্যবস্থা ও সদস্যদের জন্য অতিথি কক্ষ (Guest Room) পরিচালনা, শুধুমাত্র আমাদের সম্প্রদায়ের জন্য শিক্ষার উদ্দেশ্যে সামাজিক সহায়তা (নারী উচ্চশিক্ষায় বিশেষ অগ্রাধিকারসহ) এবং সমাজের দুস্থ ও বিপন্ন মানুষদের জরুরি ত্রাণের কাজে ব্যবহৃত হয়।',
    frequencyOnce: 'এককালীন অনুদান',
    frequencyMonthly: 'মাসিক পৃষ্ঠপোষক অনুদান',
    selectTierHeader: 'কল্যাণ তহবিলের পরিমাণ নির্বাচন করুন:',
    popularBadge: 'সর্বাধিক প্রয়োজনীয়',
    customAmountLabel: 'অথবা ইচ্ছানুযায়ী অনুদানের পরিমাণ লিখুন (₹)',
    panMandatoryNotice: 'বঙ্গীয় সাহা সমিতির নামে অনুদানের অফিসিয়াল রসিদ প্রদান করা হবে।',
    directTransferTitle: 'সরাসরি ব্যাংক ট্রান্সফার / NEFT / IMPS',
    bankName: 'স্টেট ব্যাঙ্ক অব ইন্ডিয়া (SBI)',
    accountName: 'Bangiya Saha Samity (Sunri Samaj)',
    accountNumber: '38192019360',
    ifscCode: 'SBIN0000084',
    branchName: 'বউবাজার / এসপ্ল্যানেড শাখা, কলকাতা',
    proceedPaymentBtn: 'অনুদানের প্রক্রিয়া সম্পূর্ণ করুন',
    donorLedgerHeader: 'তহবিল ব্যবহারের স্বচ্ছতা বিবরণী',
    taxCertNote: 'বঙ্গীয় সাহা সমিতির পক্ষ থেকে অনুদানের অফিসিয়াল স্বীকৃতি ও রসিদ প্রদান করা হবে।',

    // Constitutional Rights Hub
    legalBadge: 'সাংবিধানিক অধিকার ও তপশিলি মর্যাদা সুরক্ষা',
    legalHeading: 'ড. আম্বেদকরের সাংবিধানিক রক্ষাকবচ ও তপশিলি (SC) মর্যাদা সংরক্ষণ',
    legalSubtitle: '১৯৫০ সালে ড. বাবাসাহেব আম্বেদকর শুঁড়ি সম্প্রদায়কে তপশিলি জাতি হিসেবে অন্তর্ভুক্ত করেন। জানুন কীভাবে সমিতি এই মর্যাদা অক্ষুণ্ণ রাখতে এবং সংরক্ষণ অধিকার রক্ষায় নিরবচ্ছিন্ন সংগ্রাম চালিয়ে যাচ্ছে।',
    practicalLegalAction: 'আইনি পদক্ষেপ ও সরাসরি সহায়তা:',
    emergencyContactBoxTitle: 'কেন্দ্রীয় কার্যালয় থেকে পরামর্শ ও সহায়তা',
    emergencyContactBoxDesc: 'ডিজিটাল এসসি সার্টিফিকেট প্রাপ্তি, সংরক্ষণ সংক্রান্ত সমস্যা অথবা ৫২বি ইন্ডিয়ান মিরর স্ট্রিটে ছাত্রাবাসে ভর্তির জন্য যোগাযোগ করুন।',
    callLawyerBtn: 'কেন্দ্রীয় কার্যালয়ের সাথে কথা বলুন',

    // Contact & Footer
    contactHeadquarters: 'কেন্দ্রীয় কার্যালয়: ৫২বি ইন্ডিয়ান মিরর স্ট্রিট, কলকাতা - ৭০০০১৩',
    contactBirthplace: 'ঐতিহাসিক জন্মস্থান: মা জগৎ জননী মন্দির, ৭৭ মানিকতলা স্ট্রিট, কলকাতা - ৭০০০০৬',
    contactHostel: 'গ্রামীণ ছাত্রাবাস ও অতিথি কক্ষ: ৫২বি ইন্ডিয়ান মিরর স্ট্রিট, কলকাতা (সমাজের সদস্যদের জন্য অতিথি কক্ষের সুবিধা)',
    footerAboutText: 'বঙ্গীয় সাহা সমিতি (শুঁড়ি সমাজ) পশ্চিমবঙ্গের তপশিলি জাতি শুঁড়ি সম্প্রদায়ের সামাজিক, অর্থনৈতিক, শিক্ষাগত ও সাংবিধানিক অধিকারের সার্বিক উন্নয়নে নিবেদিত একটি ঐতিহাসিক সামাজিক প্রতিষ্ঠান।',
  }
};

export const LOCALIZED_PILLARS: Record<Language, LocalizedPillar[]> = {
  en: [
    {
      id: 'obj-education',
      title: 'Educational Support, Female Higher Education & Libraries',
      tagline: 'Promoting education with special priority for female higher education and Social Help for Educational Purpose (Only for Our Community).',
      description: 'To improve and develop in all respects the position of Sunri Community (Excluding Saha) as a whole and particularly in West Bengal by all legitimate means to promote and spread education and culture and diffuse useful knowledge among the Sunri community through Social Help for Educational Purpose (Only for Our Community), highlighting a special priority for female higher education, founding and maintaining educational institutions and libraries, controlling publication of journals, periodicals, pamphlets and books, holding meetings and conferences and sending preachers amongst the Sunri Community.',
      keyInitiatives: [
        'Social Help for Educational Purpose (Only for Our Community) for deserving students',
        'Highlighting special priority for female higher education across West Bengal',
        'Foundation and maintenance of community educational institutions and libraries',
        'Controlling and managing publication of journals, periodical pamphlets, and books',
        'Holding regular meetings, educational conferences, and sending preachers amongst the community'
      ],
      icon: 'GraduationCap',
      impactNumber: 'Only for Our Community',
      impactLabel: 'Objective 1'
    },
    {
      id: 'obj-social-reform',
      title: 'Eradicating Social Evils & Introducing Social Reforms',
      tagline: 'Uplifting social, economic, and cultural unity while eliminating harmful practices.',
      description: 'To help the Sunri Community in eradicating social evils and harmful practices to introducing social reforms, improve its position socially, economically, commercially as well as education and culture in promoting unity and a spirit of fellowship amongst the different sections and members.',
      keyInitiatives: [
        'Eradicating outdated social evils, dowry demands, and harmful customs',
        'Introducing progressive social reforms and economic enterprise support',
        'Fostering fraternal unity and harmony across all sections of Sunri Samaj',
        'Organizing youth fellowship camps, commercial seminars, and leadership assemblies'
      ],
      icon: 'Users',
      impactNumber: 'Social Reform',
      impactLabel: 'Objective 2'
    },
    {
      id: 'obj-constitutional-sc',
      title: 'Retaining Sunri in Scheduled Caste List & Protecting Reservations',
      tagline: 'Resisting any attempt of exclusion and safeguarding legislative and service reservations.',
      description: 'To move Government for retaining Sunri Community in the list of Scheduled Caste under the Constitution of India and to resist any attempt for excluding the Sunri community from such list, and also to take necessary steps so that the members of the Sunri Community continue to enjoy all the benefits and privileges available to the Scheduled Caste in the matter of social, economic and educational development and reservation of seats in the Legislature and Government services.',
      keyInitiatives: [
        'Petitions and legal representation before Central & State SC Commissions',
        'Resisting any attempt to exclude the Sunri community from the SC schedule',
        'Safeguarding reservation of seats in Legislature and Government services',
        'Assisting community youth in securing genuine SC caste certificates without harassment'
      ],
      icon: 'ShieldCheck',
      impactNumber: 'Dr. Ambedkar (1950)',
      impactLabel: 'Objective 3'
    },
    {
      id: 'obj-safeguard-interests',
      title: 'Safeguarding & Promoting Community Interests',
      tagline: 'Protecting the communal and civic rights of every member of the Sunri Samaj.',
      description: 'To safeguard and promote the communal interests of the Sunri Community throughout West Bengal with dignity, democratic strength, and organized solidarity.',
      keyInitiatives: [
        'Representing community demands before state administrative bodies and ministries',
        'Establishing district-level coordination units across West Bengal',
        'Preserving historic institutional heritage, records, and properties',
        'Annual state conferences fostering fraternal solidarity and collective voice'
      ],
      icon: 'Scale',
      impactNumber: 'West Bengal',
      impactLabel: 'Objective 4'
    },
    {
      id: 'obj-distress-charity',
      title: 'Distress Charities & Relief to Vulnerable Men and Women',
      tagline: 'Compassionate assistance to distressed members and vulnerable women and men as funds permit.',
      description: 'To grant charities to the distressed of the community and to render help to vulnerable women and men of the community as the funds permit.',
      keyInitiatives: [
        'Direct monetary charity to distressed community families in critical need',
        'Sustenance help and medical grants for vulnerable, elderly, and widowed women',
        'Residential hostel arrangements made at 52B Indian Mirror Street for rural students',
        'Guest Room facility available for community members visiting Kolkata'
      ],
      icon: 'HeartHandshake',
      impactNumber: 'Distress Grants',
      impactLabel: 'Objective 5'
    }
  ],

  bn: [
    {
      id: 'obj-education',
      title: 'শিক্ষা বিস্তার, শিক্ষার উদ্দেশ্যে সামাজিক সহায়তা, নারী উচ্চশিক্ষা ও পাঠাগার',
      tagline: 'নারী উচ্চশিক্ষায় বিশেষ অগ্রাধিকার ও শুধুমাত্র আমাদের সম্প্রদায়ের জন্য শিক্ষার উদ্দেশ্যে সামাজিক সহায়তা প্রদান।',
      description: 'পশ্চিমবঙ্গে ও সামগ্রিকভাবে শুঁড়ি সমাজের (সাহা ব্যতীত) সর্বাঙ্গীণ উন্নতি ও অবস্থান পরিবর্তনের লক্ষ্যে বৈধ উপায়ে শিক্ষা ও সংস্কৃতির বিকাশ ঘটানো, শুধুমাত্র আমাদের সম্প্রদায়ের জন্য শিক্ষার উদ্দেশ্যে সামাজিক সহায়তা প্রদান, নারী উচ্চশিক্ষায় বিশেষ অগ্রাধিকার দেওয়া, শিক্ষাপ্রতিষ্ঠান ও পাঠাগার স্থাপন ও পরিচালনা করা এবং সাময়িকী, পত্রিকা, পুস্তিকা ও বই প্রকাশনা নিয়ন্ত্রণ, সম্মেলন আয়োজন ও সমাজে প্রচারক প্রেরণ করা।',
      keyInitiatives: [
        'শুধুমাত্র আমাদের সম্প্রদায়ের জন্য শিক্ষার উদ্দেশ্যে সামাজিক সহায়তা প্রদান',
        'সমগ্র পশ্চিমবঙ্গ জুড়ে নারী উচ্চশিক্ষায় বিশেষ অগ্রাধিকার প্রদান',
        'সম্প্রদায়ের পাঠাগার ও অধ্যয়ন কেন্দ্র স্থাপন এবং নিয়মিত পরিচালনা',
        'সমাজ সচেতনতামূলক সাময়িকী, পত্রিকা, পুস্তিকা ও গ্রন্থ প্রকাশ ও নিয়ন্ত্রণ',
        'নিয়মিত সমাবেশ, সম্মেলন আহ্বান এবং সমাজ সংস্কারক ও প্রচারক প্রেরণ'
      ],
      icon: 'GraduationCap',
      impactNumber: 'শুধুমাত্র আমাদের সম্প্রদায়ের জন্য',
      impactLabel: 'সাংবিধানিক উদ্দেশ্য ১'
    },
    {
      id: 'obj-social-reform',
      title: 'সামাজিক কুপ্রথা বিলোপ, সংস্কার সাধন ও ভ্রাতৃত্ববোধ স্থাপন',
      tagline: 'ক্ষতিকর প্রথা দূরীকরণ এবং সামাজিক, অর্থনৈতিক ও বাণিজ্যিক মর্যাদার উন্নয়ন।',
      description: 'শুঁড়ি সমাজ থেকে সকল প্রকার সামাজিক কুপ্রথা ও ক্ষতিকর আচার-আচরণ নির্মূল করতে সহায়তা করা, প্রগতিশীল সমাজ সংস্কার প্রবর্তন করা এবং সামাজিক, অর্থনৈতিক, বাণিজ্যিক ও শিক্ষাগত অবস্থানের উন্নতি ঘটিয়ে সমাজের বিভিন্ন স্তর ও সদস্যদের মধ্যে ভ্রাতৃত্ববোধ ও সংহতি স্থাপন করা।',
      keyInitiatives: [
        'পণপ্রথা, ক্ষতিকর কুসংস্কার ও প্রাচীন সামাজিক অনাচার দূরীকরণ',
        'যুব সমাজের মধ্যে ব্যবসা-বাণিজ্য ও বাণিজ্যিক স্বনির্ভরতার পরামর্শ প্রদান',
        'সমাজের সকল স্তরের মানুষের মধ্যে অটুট ঐক্য ও সৌভ্রাতৃত্বের বন্ধন সৃষ্টি',
        'সামাজিক সংস্কার সভা, যুব সম্মেলন ও আত্মমর্যাদা বিষয়ক আলোচনার আয়োজন'
      ],
      icon: 'Users',
      impactNumber: 'সামাজিক ঐক্য',
      impactLabel: 'সাংবিধানিক উদ্দেশ্য ২'
    },
    {
      id: 'obj-constitutional-sc',
      title: 'সংবিধানে তপশিলি জাতি (SC) তালিকায় অন্তর্ভুক্তি রক্ষা ও সংরক্ষণ অধিকার',
      tagline: 'তপশিলি তালিকা থেকে বাদ দেওয়ার যে কোনো অপচেষ্টা প্রতিরোধ ও সাংবিধানিক সুবিধা সুরক্ষা।',
      description: 'ভারতের সংবিধানের অধীনে তপশিলি জাতির (SC) তালিকায় শুঁড়ি সম্প্রদায়কে স্থায়ীভাবে অন্তর্ভুক্ত রাখার জন্য সরকারকে সচেষ্ট করা এবং এই তালিকা থেকে শুঁড়ি সম্প্রদায়কে বাদ দেওয়ার যে কোনো অপচেষ্টা প্রতিহত করা; এবং শুঁড়ি সম্প্রদায়ের সদস্যরা যাতে সামাজিক, অর্থনৈতিক ও শিক্ষাগত উন্নয়ন এবং আইনসভা ও সরকারি চাকরিতে আসন সংরক্ষণের সমস্ত সুবিধা অব্যাহতভাবে ভোগ করতে পারেন তার জন্য প্রয়োজনীয় সকল পদক্ষেপ গ্রহণ করা।',
      keyInitiatives: [
        'কেন্দ্রীয় ও রাজ্য তপশিলি জাতি কমিশনের নিকট আইনগত স্মারকলিপি পেশ',
        'সংবিধানে শুঁড়ি সমাজের তপশিলি মর্যাদা অক্ষুণ্ণ রাখতে আইনি প্রতিরোধ',
        'সরকারি চাকরি ও উচ্চশিক্ষায় বিধিবদ্ধ সংরক্ষণ কোটার নিরাপত্তা বিধান',
        'আইনসভায় আসন সংরক্ষণ ও শিক্ষার্থীদের ডিজিটাল কাস্ট সার্টিফিকেট লাভে সহায়তা'
      ],
      icon: 'ShieldCheck',
      impactNumber: 'ড. আম্বেদকর (১৯৫০)',
      impactLabel: 'সাংবিধানিক উদ্দেশ্য ৩'
    },
    {
      id: 'obj-safeguard-interests',
      title: 'সম্প্রদায়ের সামগ্রিক ও নাগরিক স্বার্থ সুনিশ্চিত করা',
      tagline: 'শুঁড়ি সমাজের প্রতিটি সদস্যের নাগরিক অধিকার, আত্মমর্যাদা ও যৌথ স্বার্থের সুরক্ষা।',
      description: 'সমগ্র পশ্চিমবঙ্গ জুড়ে শুঁড়ি সম্প্রদায়ের সার্বিক সামাজিক, সাম্প্রদায়িক ও নাগরিক স্বার্থ সংরক্ষণ ও বিকাশ সাধন করা।',
      keyInitiatives: [
        'প্রশাসনিক স্তর ও সরকারি দফতরে সম্প্রদায়ের ন্যায়সঙ্গত দাবি উত্থাপন',
        'পশ্চিমবঙ্গের বিভিন্ন জেলায় সমন্বয় শাখা ও সহায়তা সেল গঠন',
        'সমিতির ঐতিহাসিক সম্পত্তি, নথিপত্র ও ঐতিহ্য যথাযথভাবে সংরক্ষণ',
        'বার্ষিক সাধারণ সভা ও রাজ্যস্তরের সম্মেলনের মাধ্যমে ঐক্য সুদৃঢ়করণ'
      ],
      icon: 'Scale',
      impactNumber: 'পশ্চিমবঙ্গ',
      impactLabel: 'সাংবিধানিক উদ্দেশ্য ৪'
    },
    {
      id: 'obj-distress-charity',
      title: 'দুস্থ ও বিপন্ন মানুষদের ত্রাণ বিতরণ ও সাহায্য প্রদান',
      tagline: 'তহবিলের সামর্থ্য অনুযায়ী বিপন্ন পরিবার এবং দুস্থ নারী-পুরুষদের পাশে দাঁড়ানো।',
      description: 'সমাজের দুস্থ ও বিপন্ন মানুষদের দাতব্য সাহায্য প্রদান করা এবং তহবিলের সংস্থান অনুযায়ী সমাজের বিপন্ন নারী ও পুরুষদের সর্বতোভাবে সহায়তা প্রদান করা।',
      keyInitiatives: [
        'আর্থিক সংকটে নিমজ্জিত দরিদ্র পরিবারগুলোকে এককালীন দাতব্য আর্থিক সহায়তা',
        'বিপন্ন, প্রবীণ ও বিধবা মহিলাদের চিকিৎসা অনুদান ও ভরণপোষণ ভাতা',
        '৫২বি ইন্ডিয়ান মিরর স্ট্রিটে দূরবর্তী গ্রামীণ শিক্ষার্থীদের আবাসিক ব্যবস্থা করা হয়',
        'সমাজের সদস্যদের জন্য অতিথি কক্ষের (Guest Room) সুবিধা ও জরুরি মানবিক ত্রাণ'
      ],
      icon: 'HeartHandshake',
      impactNumber: 'দাতব্য অনুদান',
      impactLabel: 'সাংবিধানিক উদ্দেশ্য ৫'
    }
  ]
};

export const LOCALIZED_MILESTONES: Record<Language, LocalizedMilestone[]> = {
  en: [
    {
      year: '1934 - 1935',
      title: 'Founding at 77 Maniktala St & 1935 Govt of India Act',
      location: '77, Maniktala Street, Kolkata – 700006 (Simla)',
      description: 'Under the Government of India Act of 1935 enacted by the British administration, the economically and socially backward Sunri community was designated as a "Scheduled Caste" via official notifications due to historical occupational segregation, alongside large numbers of impoverished laborers and agricultural workers. In 1934, philanthropic and eminent individuals established Bangiya Saha Samity (Sunri Samaj) at 77, Maniktala Street (Simla) in Maa Jagat Janani Temple, where residential arrangements were made for rural students pursuing higher education.',
      badge: 'Foundation Era (1934-35)'
    },
    {
      year: '1936–37',
      title: 'Formal Incorporation: Regd. No. 4522 of 1936–37',
      location: 'Kolkata, West Bengal',
      description: 'The society was formally incorporated and registered under the Societies Registration Act as Bangiya Saha Samity (Sunri Samaj) under Registration No. 4522 of 1936–37 with its 5 sacred constitutional objectives.',
      badge: 'Registration (1936-37)'
    },
    {
      year: '1950 & 1956',
      title: 'Dr. Ambedkar SC Inclusion & 52B Indian Mirror St Purchase',
      location: '52B, Indian Mirror Street, Kolkata – 700013 (Opp. G.D. Hospital)',
      description: 'In 1950, Babasaheb Dr. B. R. Ambedkar reaffirmed our inclusion in the Scheduled Caste list. Later in 1956, our classification was listed as "Sunri (Excluding Saha)". Around that time, with financial assistance of well-wishers and community families, a parcel of land with a single room was purchased at 52B, Indian Mirror Street, Kolkata – 700013 (Opposite G.D. Hospital, Taltala). Within a few years, a four-storey building was erected, serving as our Central Office where rural student hostel arrangements and a Guest Room facility for community members are maintained.',
      badge: 'Ambedkar & 52B Property'
    },
    {
      year: '1965 – 2000',
      title: 'Supreme Court Stays & Landmark Victory of Sept 5, 2000',
      location: 'Supreme Court of India & Govt of West Bengal',
      description: 'Issuance of Scheduled Caste certificates to the "Saha Sunri" community was stayed twice by Supreme Court orders (1965 and 1996). The Samity fought an unyielding legal battle and secured a favorable Supreme Court verdict. Effective September 5, 2000, issuance of SC certificates was restored under directions from the Chief Secretary, Govt of West Bengal, with the instrumental intervention of then MLA, Shri Sadhan Pande.',
      badge: 'Supreme Court Victory'
    },
    {
      year: '2018 – Present',
      title: '50-Student Hostel Expansion, Female Wing & Guest Room',
      location: '52B, Indian Mirror Street, Kolkata – 700013',
      description: 'Through the dedicated efforts of the Central Executive Committee and Advisory Board, the four-storeyed Central Office building underwent extensive modern renovations: residential hostel arrangements are made for up to 50 students (with dedicated female facilities opened in 2018, reflecting our special priority for female higher education), alongside a Guest Room facility for community members.',
      badge: '50-Bed Hostel & Guest Room'
    }
  ],

  bn: [
    {
      year: '১৯৩৪ - ১৯৩৫',
      title: '৭৭ মানিকতলা স্ট্রিটে শুভ প্রতিষ্ঠা ও ১৯৩৫ সালের ভারত শাসন আইন',
      location: '৭৭, মানিকতলা স্ট্রিট, কলকাতা – ৭০০০১৬ (সিমলা)',
      description: 'ব্রিটিশ প্রশাসন প্রণীত ১৯৩৫ সালের ভারত শাসন আইনের অধীনে শুঁড়ি সমাজকে "তপশিলি জাতি" (Scheduled Caste) হিসেবে চিহ্নিত করা হয়। এই পরিস্থিতিতে সমাজের দানশীল ও প্রখ্যাত ব্যক্তিদের উদ্যোগে ১৯৩৪ সালে কলকাতার ৭৭, মানিকতলা স্ট্রিটে (সিমলা) মা জগৎ জননী মন্দিরে বঙ্গীয় সাহা সমিতি (শুঁড়ি সমাজ) প্রতিষ্ঠিত হয় এবং গ্রামীণ ছাত্রদের উচ্চশিক্ষার জন্য আবাসিক ব্যবস্থা করা হয়।',
      badge: 'প্রতিষ্ঠা ও ব্রিটিশ স্বীকৃতি (১৯৩৪-৩৫)'
    },
    {
      year: '১৯৩৬–৩৭',
      title: 'বিধিবদ্ধ রেজিস্ট্রেশন: রেজিস্ট্রি নং ৪৫২২ অব ১৯৩৬–৩৭',
      location: 'কলকাতা, পশ্চিমবঙ্গ',
      description: 'সোসাইটি রেজিস্ট্রেশন অ্যাক্টের অধীনে ৪৫২২ অব ১৯৩৬-৩৭ নম্বরে বঙ্গীয় সাহা সমিতি (শুঁড়ি সমাজ) বিধিবদ্ধভাবে নিবন্ধিত হয় এবং তার ৫টি সাংবিধানিক উদ্দেশ্য গৃহীত হয়।',
      badge: 'বিধিবদ্ধ নিবন্ধন (১৯৩৬-৩৭)'
    },
    {
      year: '১৯৫০ ও ১৯৫৬',
      title: 'ড. আম্বেদকর কর্তৃক সংবিধানে অন্তর্ভুক্তি ও ৫২বি ইন্ডিয়ান মিরর স্ট্রিট ক্রয়',
      location: '৫২বি, ইন্ডিয়ান মিরর স্ট্রিট, কলকাতা – ৭০০০১৩ (জি.ডি. হাসপাতালের বিপরীতে)',
      description: '১৯৫০ সালে সংবিধানের প্রধান রূপকার বাবাসাহেব ড. বি. আর. আম্বেদকর শুঁড়ি সম্প্রদায়কে তপশিলি জাতি তালিকায় অন্তর্ভুক্ত করেন। ১৯৫৬ সালে সংশোধনের পর শ্রেণিবিন্যাস হয় "Sunri (Excluding Saha)"। একই সময়ে সমাজের সদস্যদের আর্থিক সহায়তায় ৫২বি, ইন্ডিয়ান মিরর স্ট্রিটে (জি.ডি. হাসপাতালের বিপরীতে, তালতলা) এক কামরাসহ জমি ক্রয় করে চারতলা ভবন নির্মাণ, কেন্দ্রীয় কার্যালয়, ছাত্রাবাসের আবাসিক ব্যবস্থা ও সমাজের সদস্যদের জন্য অতিথি কক্ষ (Guest Room) চালু হয়।',
      badge: 'ড. আম্বেদকর ও ৫২বি ভবন'
    },
    {
      year: '১৯৬৫ – ২০০০',
      title: 'সুপ্রিম কোর্টে আইনি লড়াই ও ৫ সেপ্টেম্বর ২০০০-এর ঐতিহাসিক বিজয়',
      location: 'ভারতের সর্বোচ্চ আদালত (Supreme Court) ও পশ্চিমবঙ্গ সরকার',
      description: 'সাহা শুঁড়ি সম্প্রদায়ের তপশিলি জাতি শংসাপত্র প্রদান সুপ্রিম কোর্টের নির্দেশে দুবার স্থগিত হয় (১৯৬৫ ও ১৯৯৬ সালে)। সমিতি সুপ্রিম কোর্টে দীর্ঘ আইনি লড়াই চালিয়ে বিজয় ছিনিয়ে আনে এবং তৎকালীন বিধায়ক শ্রী সাধন পাণ্ডের সক্রিয় হস্তক্ষেপে ও মুখ্যসচিবের নির্দেশে ৫ সেপ্টেম্বর ২০০০ থেকে শংসাপত্র প্রদান পুনরায় চালু হয়।',
      badge: 'সুপ্রিম কোর্টের ঐতিহাসিক বিজয়'
    },
    {
      year: '২০১৮ – বর্তমান',
      title: '৫০ আসনের ছাত্রাবাস, ছাত্রী শাখা ও অতিথি কক্ষ',
      location: '৫২বি, ইন্ডিয়ান মিরর স্ট্রিট, কলকাতা – ৭০০০১৩',
      description: 'কেন্দ্রীয় কার্যনির্বাহী কমিটি ও উপদেষ্টা মণ্ডলীর পরিচালনায় ৫২বি কেন্দ্রীয় কার্যালয়ের সার্বিক সংস্কার এবং ৫০ জন শিক্ষার্থীর জন্য আবাসিক ব্যবস্থা করা হয় (২০১৮ সালে নারী উচ্চশিক্ষায় বিশেষ অগ্রাধিকার দিয়ে ছাত্রীদের বিভাগ চালু হয়)। পাশাপাশি সমাজের সদস্যদের জন্য অতিথি কক্ষের (Guest Room) সুবিধা উপলব্ধ রয়েছে।',
      badge: '৫০ আসনের ছাত্রাবাস ও অতিথি কক্ষ'
    }
  ]
};

export const LOCALIZED_DONATION_TIERS: Record<Language, LocalizedDonationTier[]> = {
  en: [
    {
      id: 'hostel-1500',
      amount: 1500,
      title: 'Rural Student Hostel & Guest Room Maintenance',
      impact: 'Supports Rural Student Lodging at 52B Indian Mirror St',
      coverage: 'Supports residential hostel arrangements for rural college students and Guest Room upkeep for community members at 52B Indian Mirror Street.',
      isPopular: true,
    },
    {
      id: 'scholarship-3000',
      amount: 3000,
      title: 'Social Help for Educational Purpose (Only for Our Community)',
      impact: 'Only for Our Community • Female Higher Education Priority',
      coverage: 'Educational financial assistance strictly Only for Our Community, highlighting a special priority for female higher education in West Bengal.',
    },
    {
      id: 'charity-1000',
      amount: 1000,
      title: 'Distress Relief for Vulnerable Community Members',
      impact: 'Emergency Relief for 1 Destitute Family',
      coverage: 'Direct humanitarian relief and medical support for vulnerable, elderly, or widowed members.',
    },
    {
      id: 'publication-500',
      amount: 500,
      title: 'Publications, Journals & Community Library Fund',
      impact: 'Printing of Periodicals, Pamphlets & Book Maintenance',
      coverage: 'Funds publication of informative community journals, periodicals, and maintenance of educational libraries.',
    },
  ],

  bn: [
    {
      id: 'hostel-1500',
      amount: 1500,
      title: 'গ্রামীণ ছাত্রাবাস ও অতিথি কক্ষ রক্ষণাবেক্ষণ অনুদান',
      impact: '৫২বি ইন্ডিয়ান মিরর স্ট্রিটে ১ জন শিক্ষার্থীর ১ মাসের আবাসন সহায়তা',
      coverage: 'কলকাতায় অধ্যয়নরত গ্রামীণ শিক্ষার্থীর আবাসিক ব্যবস্থা ও সমাজের সদস্যদের অতিথি কক্ষের (Guest Room) রক্ষণাবেক্ষণে ব্যবহৃত হয়।',
      isPopular: true,
    },
    {
      id: 'scholarship-3000',
      amount: 3000,
      title: 'শিক্ষার উদ্দেশ্যে সামাজিক সহায়তা (শুধুমাত্র আমাদের সম্প্রদায়ের জন্য)',
      impact: 'শুধুমাত্র আমাদের সম্প্রদায়ের জন্য • নারী উচ্চশিক্ষায় বিশেষ অগ্রাধিকার',
      coverage: 'শুধুমাত্র আমাদের সম্প্রদায়ের জন্য প্রদত্ত শিক্ষাগত সামাজিক সহায়তা, বিশেষ করে নারী উচ্চশিক্ষায় বিশেষ অগ্রাধিকারসহ পাঠ্যবই ও ফি সহায়তা।',
    },
    {
      id: 'charity-1000',
      amount: 1000,
      title: 'দুস্থ ও বিপন্ন মানুষদের জরুরি ত্রাণ অনুদান',
      impact: '১টি বিপন্ন পরিবারের আপৎকালীন চিকিৎসা ও খাদ্য সহায়তা',
      coverage: 'সমাজের বিপন্ন, বয়োবৃদ্ধ অথবা বিধবা মহিলাদের সরাসরি চিকিৎসা অনুদান ও মানবিক সেবা প্রদান।',
    },
    {
      id: 'publication-500',
      amount: 500,
      title: 'পত্রিকা প্রকাশনা, সাময়িকী ও পাঠাগার তহবিল',
      impact: 'সামাজিক পুস্তিকা, সাময়িকী প্রকাশ ও পাঠাগারের বই সংগ্রহ',
      coverage: 'সমাজের জ্ঞান প্রচার, সাময়িকী ও পুস্তিকা মুদ্রণ এবং পাঠাগার রক্ষণাবেক্ষণের জন্য ব্যবহৃত হয়।',
    },
  ],
};

export const LOCALIZED_TIERS = LOCALIZED_DONATION_TIERS;

export const LOCALIZED_LEGAL_FAQS: Record<Language, LocalizedLegalFAQ[]> = {
  en: [
    {
      id: 'faq-1',
      articleOrAct: 'British 1935 Act & 1950 Indian Constitution',
      question: 'How was the Sunri community recognized as a Scheduled Caste in West Bengal?',
      answer: 'Under the Government of India Act of 1935 enacted by the British administration, the economically and socially backward Sunri community was designated as a "Scheduled Caste" via official notifications due to historical occupational segregation, while the majority lived as impoverished laborers and agricultural workers. In 1950, the chief architect of the Indian Constitution, Babasaheb Dr. B. R. Ambedkar, reaffirmed our inclusion in the Scheduled Caste list.',
      practicalStep: 'The Samity assists community members across all districts of West Bengal in securing authentic digital SC certificates.'
    },
    {
      id: 'faq-2',
      articleOrAct: 'Supreme Court Landmark Verdict (Sept 5, 2000)',
      question: 'What were the Supreme Court stays on Saha Sunri SC certificates, and how were they resolved?',
      answer: 'Issuance of Scheduled Caste certificates to the "Saha Sunri" community was stayed twice by Supreme Court orders—first in 1965, and again in 1996. The Samity waged an unyielding legal struggle and won a favorable Supreme Court verdict. Effective September 5, 2000, issuance of SC certificates was restored under directions from the Chief Secretary, Govt of West Bengal, with the instrumental intervention of then MLA, Shri Sadhan Pande.',
      practicalStep: 'Copies of the historic Sept 5, 2000 government circular and Supreme Court judgments are available at the Central Office for reference.'
    },
    {
      id: 'faq-3',
      articleOrAct: '52B Indian Mirror Street Hostel & Guest Room',
      question: 'How does the Student Hostel operate, and is a Guest Room facility available?',
      answer: 'Acquired in 1956 and located at 52B, Indian Mirror Street (opposite G.D. Hospital, Taltala), the four-storeyed Central Office building is where residential hostel arrangements are made for up to 50 rural college and university students (with a dedicated female wing introduced in 2018), alongside a Guest Room facility for community members visiting Kolkata.',
      practicalStep: 'Eligible students and community members seeking hostel or Guest Room accommodation can apply directly at our Central Office.'
    },
    {
      id: 'faq-4',
      articleOrAct: 'MHA "Sunri (Excluding Saha)" Advocacy & NCSC Delhi',
      question: 'What steps is the Samity taking regarding MHA ambiguities and exclusion attempts?',
      answer: 'Ambiguous remarks in the Union Ministry of Home Affairs Scheduled Caste list concerning "Sunri (Excluding Saha)" have hindered members from obtaining certificates. In response, our delegations met then Minister for Backward Classes Welfare Shri Churamoni Mahato and submitted a formal memorandum to the Chairman of the National Commission for Scheduled Castes in New Delhi.',
      practicalStep: 'Any community member facing certificate denial due to surname ambiguities is provided direct institutional legal assistance.'
    },
    {
      id: 'faq-5',
      articleOrAct: 'Life Membership & Social Help for Educational Purpose',
      question: 'What is the Samity’s membership model and how can community members support?',
      answer: 'The Samity does not collect recurring monthly subscriptions; only Life Memberships are enrolled. Voluntary contributions toward hostel maintenance, Guest Room upkeep, Social Help for Educational Purpose (Only for Our Community) with special priority for female higher education, and distress relief are gratefully received and managed transparently.',
      practicalStep: 'You can enroll as a Life Member or make a voluntary contribution directly through our Central Office or bank transfer.'
    }
  ],

  bn: [
    {
      id: 'faq-1',
      articleOrAct: 'ব্রিটিশ ১৯৩৫ সালের আইন ও ১৯৫০ সালের সংবিধান',
      question: 'পশ্চিমবঙ্গে কীভাবে শুঁড়ি সম্প্রদায় সংবিধানে তপশিলি জাতি (SC) হিসেবে স্বীকৃতি লাভ করে?',
      answer: 'ব্রিটিশ প্রশাসন কর্তৃক প্রণীত ১৯৩৫ সালের ভারত শাসন আইনের অধীনে অর্থনৈতিক ও সামাজিকভাবে অনগ্রসর শুঁড়ি সমাজকে সরকারি বিজ্ঞপ্তির মাধ্যমে "তপশিলি জাতি" (Scheduled Caste) হিসেবে চিহ্নিত করা হয়। সমাজের বিরাট অংশ ছিল চরম দারিদ্র্যে নিমজ্জিত কৃষিশ্রমিক ও দিনমজুর। পরবর্তীতে ১৯৫০ সালে ভারতীয় সংবিধানের প্রধান রূপকার বাবাসাহেব ড. বি. আর. আম্বেদকর তপশিলি তালিকায় আমাদের অন্তর্ভুক্তি পুনর্নিশ্চিত করেন।',
      practicalStep: 'সমিতি পশ্চিমবঙ্গের সকল জেলার সদস্যদের সঠিক ডিজিটাল এসসি কাস্ট সার্টিফিকেট প্রাপ্তিতে এবং প্রশাসনিক জটিলতা নিরসনে সার্বক্ষণিক সহায়তা প্রদান করে।'
    },
    {
      id: 'faq-2',
      articleOrAct: 'সুপ্রিম কোর্টের ঐতিহাসিক বিজয় (৫ সেপ্টেম্বর ২০০০)',
      question: 'সাহা শুঁড়িদের তপশিলি শংসাপত্র প্রদানে সুপ্রিম কোর্টের স্থগিতাদেশ কীভাবে প্রত্যাহার হয়?',
      answer: '"সাহা শুঁড়ি" সম্প্রদায়ের তপশিলি জাতি শংসাপত্র প্রদান সুপ্রিম কোর্টের নির্দেশে দুবার স্থগিত করা হয়েছিল—প্রথমবার ১৯৬৫ সালে এবং দ্বিতীয়বার ১৯৯৬ সালে। সমিতি সুপ্রিম কোর্টে দীর্ঘ আপসহীন আইনি লড়াই পরিচালনা করে অনুকূল রায় লাভ করে এবং তৎকালীন বিধায়ক শ্রী সাধন পাণ্ডের ঐকান্তিক মধ্যস্থতায় ও পশ্চিমবঙ্গ সরকারের মুখ্যসচিবের নির্দেশে ৫ সেপ্টেম্বর ২০০০ তারিখ থেকে পুনরায় শংসাপত্র প্রদান চালু হয়।',
      practicalStep: 'তৎকালীন নির্দেশিকা ও রায়ের সার্টিফায়েড কপি সদস্যদের সুবিধার্থে সমিতির কেন্দ্রীয় কার্যালয়ে সংরক্ষিত রয়েছে।'
    },
    {
      id: 'faq-3',
      articleOrAct: '৫২বি ইন্ডিয়ান মিরর স্ট্রিট ছাত্রাবাস ও অতিথি কক্ষ',
      question: 'সম্প্রসারিত ছাত্রাবাস কীভাবে পরিচালিত হয় এবং অতিথি কক্ষের কী কী সুবিধা রয়েছে?',
      answer: '১৯৫৬ সালে প্রতিষ্ঠিত ৫২বি, ইন্ডিয়ান মিরর স্ট্রিটে (জি.ডি. হাসপাতালের বিপরীতে, তালতলা) অবস্থিত চারতলা কেন্দ্রীয় কার্যালয় ভবনে গ্রামীণ শিক্ষার্থীদের জন্য ৫০ আসন পর্যন্ত ছাত্রাবাসের আবাসিক ব্যবস্থা করা হয় (২০১৮ সালে ছাত্রীদের জন্য বিশেষ শাখা চালু হয়েছে) এবং সমাজের সদস্যদের জন্য অতিথি কক্ষের (Guest Room) সুবিধা উপলব্ধ রয়েছে।',
      practicalStep: 'উচ্চশিক্ষার জন্য আগ্রহী ছাত্রছাত্রী ও অতিথি কক্ষ ব্যবহারের জন্য সমাজের সদস্যরা সরাসরি কেন্দ্রীয় কার্যালয়ে আবেদন করতে পারেন।'
    },
    {
      id: 'faq-4',
      articleOrAct: 'স্বরাষ্ট্র মন্ত্রকের "Sunri (Excluding Saha)" জটিলতা ও নয়া দিল্লি স্মারকলিপি',
      question: 'কেন্দ্রীয় তালিকায় "সাহা" পদবী সংক্রান্ত অস্পষ্টতা নিরসনে সমিতি কী পদক্ষেপ নিয়েছে?',
      answer: 'কেন্দ্রীয় স্বরাষ্ট্র মন্ত্রকের তালিকায় "Sunri (Excluding Saha)" সংক্রান্ত অস্পষ্ট মন্তব্যের কারণে বহু সদস্যের শংসাপত্র প্রাপ্তিতে বাধা সৃষ্টি হচ্ছিল। এর প্রতিকারে তৎকালীন অনগ্রসর শ্রেণি কল্যাণ মন্ত্রী শ্রী চূড়ামণি মাহাতোর সাথে প্রতিনিধি দল সাক্ষাৎ করে এবং নয়া দিল্লিতে জাতীয় তপশিলি জাতি কমিশনের চেয়ারম্যানের নিকট আনুষ্ঠানিক স্মারকলিপি পেশ করা হয়।',
      practicalStep: 'পদবী সংক্রান্ত কারণে কোনো সদস্য সমস্যায় পড়লে সমিতির সহায়তা ডেস্কে যোগাযোগ করার পরামর্শ দেওয়া হচ্ছে।'
    },
    {
      id: 'faq-5',
      articleOrAct: 'আজীবন সদস্যপদ ও কল্যাণ অনুদান নীতি',
      question: 'সমিতির সদস্যপদ সংক্রান্ত নিয়ম কী এবং কীভাবে আর্থিক সহযোগিতা করা যায়?',
      answer: 'সমিতি কোনো মাসিক চাঁদা গ্রহণ করে না; শুধুমাত্র আজীবন সদস্যপদ (Life Membership) প্রদান করা হয়। ছাত্রাবাস পরিচালনা, অতিথি কক্ষ রক্ষণাবেক্ষণ, শুধুমাত্র আমাদের সম্প্রদায়ের জন্য শিক্ষার উদ্দেশ্যে সামাজিক সহায়তা (নারী উচ্চশিক্ষায় বিশেষ অগ্রাধিকারসহ) ও আইনি সুরক্ষার লক্ষ্যে স্বেচ্ছায় প্রদত্ত সকল অনুদান সম্পূর্ণ স্বচ্ছতার সাথে পরিচালনা করা হয়।',
      practicalStep: 'কেন্দ্রীয় কার্যালয়ে বা সরাসরি ব্যাংক অ্যাকাউন্টের মাধ্যমে অনুদান দিয়ে অফিসিয়াল রসিদ সংগ্রহ করা যায়।'
    }
  ]
};

export const LOCALIZED_TRANSPARENCY_STATS: Record<Language, { percentage: string; label: string; description: string }[]> = {
  en: [
    { percentage: '80%', label: 'Rural Hostel & Social Help for Educational Purpose (Only for Our Community)', description: 'Hostel arrangements & Guest Room at 52B Indian Mirror St, with special priority for female higher education' },
    { percentage: '12%', label: 'Distress Charities & Vulnerable Member Relief', description: 'Direct assistance to destitute families, widows, and medical emergency aid' },
    { percentage: '8%', label: 'Constitutional SC Defense & Publications', description: 'Representations for retaining SC status, publishing journals, periodicals & pamphlets' },
  ],
  bn: [
    { percentage: '৮০%', label: 'গ্রামীণ ছাত্রাবাস ও শিক্ষার উদ্দেশ্যে সামাজিক সহায়তা (শুধুমাত্র আমাদের সম্প্রদায়ের জন্য)', description: '৫২বি ইন্ডিয়ান মিরর স্ট্রিটে ছাত্রাবাসের আবাসিক ব্যবস্থা ও অতিথি কক্ষ পরিচালনা এবং নারী উচ্চশিক্ষায় বিশেষ অগ্রাধিকার' },
    { percentage: '১২%', label: 'দুস্থ ও বিপন্ন মানুষের ত্রাণ অনুদান', description: 'বিপন্ন পরিবার, বিধবা মহিলা ও অসুস্থ সদস্যদের আর্থিক সহায়তা প্রদান' },
    { percentage: '৮%', label: 'সাংবিধানিক অধিকার রক্ষা ও প্রকাশনা', description: 'সংবিধানে এসসি মর্যাদা রক্ষা, সাময়িকী, পুস্তিকা ও গবেষণামূলক গ্রন্থ প্রকাশনা' },
  ],
};
