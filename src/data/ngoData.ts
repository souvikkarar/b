import { CommunityStory, DonationTier, LegalFAQ, MissionPillar } from '../types';

export const NGO_DETAILS = {
  name: 'Bangiya Saha Samity (Sunri Samaj)',
  shortName: 'Bangiya Saha Samity',
  hindiName: 'বঙ্গীয় সাহা সমিতি (শুঁড়ি সমাজ)',
  subHeading: "West Bengal 'Sunri' Samaj",
  establishedYear: '1934 (Regd. 1936–37)',
  birthplace: '77, Maniktala Street, Kolkata – 700006 (Simla) — Maa Jagat Janani Temple',
  headquarters: '52B, INDIAN MIRROR STREET, KOLKATA-700013 (Opposite G. D. Hospital), Taltala (Central Office)',
  hostelInfo: 'Student Hostel (Residential arrangements made for up to 50 students, including Female Wing since 2018) & Guest Room for Community Members',
  buildingInfo: 'Four-Storeyed Central Office Building at 52B, INDIAN MIRROR STREET, KOLKATA-700013 (Opposite G. D. Hospital), Taltala, with Student Hostel & Guest Room Facility',
  constitutionalRecognition: 'British Govt of India Act 1935 & Indian Constitution 1950 by Dr. B.R. Ambedkar',
  registrationNo: '4522 of 1936–37',
  darpanId: 'WB/2018/0192841',
  officialStatus: 'Registered Non-Profit Social Welfare Organisation (Est. 1936-37)',
  taxExemption: 'Registered Non-Profit Social Welfare Organisation (Est. 1936-37)',
  helpline: '033-22271599 / 9433041597 (M)',
  emergencyLegalPhone: '+91 94330 41597',
  email: 'bangiyasahasamity1@gmail.com',
  regionalOffice: '77, Maniktala Street, Kolkata – 700006 (Simla)',
  headOffice: {
    address: '52B, INDIAN MIRROR STREET, KOLKATA-700013',
    landmark: '(Opposite G. D. Hospital), Taltala — Central Office, Hostel & Guest Room Facility',
    regdNo: 'Regd. No. 4522 of 1936–37',
    phone: '033-22271599 / 9433041597 (M)',
    email: 'bangiyasahasamity1@gmail.com',
    visitingHours: 'Mon - Sat: 10:00 AM - 7:00 PM | Sun: 11:00 AM - 4:00 PM',
  },
  bengaliHeadOffice: {
    address: '৫২বি, ইন্ডিয়ান মিরর স্ট্রিট, কলকাতা – ৭০০০১৩',
    landmark: '(জি.ডি. হাসপাতালের বিপরীতে), তালতলা — কেন্দ্রীয় কার্যালয়, ছাত্রাবাস ও অতিথি কক্ষ',
    regdNo: 'রেজিস্ট্রি নং ৪৫২২ অব ১৯৩৬–৩৭',
    phone: '033-22271599 / 9433041597 (M)',
    email: 'bangiyasahasamity1@gmail.com',
    visitingHours: 'সোম - শনি: সকাল ১০:০০ - সন্ধ্যা ৭:০০ | রবি: সকাল ১১:০০ - বিকাল ৪:০০',
  },
  registeredSite: {
    templeName: 'Maa Jagat Janani Temple',
    address: '77, Maniktala Street, Kolkata – 700006 (Simla)',
    historicalSignificance: 'Birthplace where distinguished community leaders established the Samity in 1934.',
  },
  bengaliRegisteredSite: {
    templeName: 'মা জগৎ জননী মন্দির',
    address: '৭৭, মানিকতলা স্ট্রিট, কলকাতা – ৭০০০১৬ (সিমলা)',
    historicalSignificance: '১৯৩৪ সালে যে পবিত্র স্থানে সমাজের বিশিষ্ট ব্যক্তিবর্গ সমিতি প্রতিষ্ঠা করেছিলেন।',
  },
  membershipPolicy: 'Life Membership Enrolment (No recurring monthly subscriptions) & Voluntary Contributions',
  motto: 'Education • Unity • Social Reform • Constitutional Rights | শিক্ষা, ঐক্য, সমাজ সংস্কার ও সাংবিধানিক অধিকার'
};

export const IMPACT_METRICS = [
  { label: 'Foundation & Regd.', value: '1934 / 1936-37', subtext: '77 Maniktala St, Simla (Regd. No. 4522)' },
  { label: 'SC Recognition', value: '1935 & 1950', subtext: 'British Act 1935 & Babasaheb Dr. Ambedkar' },
  { label: 'Central Office Acquired', value: '1956', subtext: '52B Indian Mirror St (Opp. G.D. Hospital)' },
  { label: 'Hostel & Guest Room', value: 'Up to 50 Students', subtext: 'Female Wing (Est. 2018) & Member Guest Room' },
  { label: 'Supreme Court Victory', value: 'Sept 5, 2000', subtext: 'SC Certificates Restored via Sadhan Pande' },
  { label: 'Community Service', value: '90+ Years', subtext: 'Continuous educational & social welfare programs' }
];

export const HISTORICAL_MILESTONES = [
  {
    year: '1934 - 1935',
    title: 'Founding at 77 Maniktala St & 1935 Government of India Act',
    bengaliTitle: '৭৭ মানিকতলা স্ট্রিটে শুভ প্রতিষ্ঠা ও ১৯৩৫ সালের ভারত শাসন আইন',
    location: '77, Maniktala Street, Kolkata – 700006 (Simla)',
    bengaliLocation: '৭৭, মানিকতলা স্ট্রিট, কলকাতা – ৭০০০১৬ (সিমলা)',
    description: 'Under the Government of India Act of 1935 enacted by the British administration, the economically and socially backward Sunri community was designated as a "Scheduled Caste" due to official government notifications citing occupational segregation, alongside large numbers of impoverished laborers and agricultural workers. Under these circumstances, philanthropic and eminent individuals established Bangiya Saha Samity (Sunri Samaj) in 1934 at 77, Maniktala Street (Simla) in Maa Jagat Janani Temple, making residential arrangements for rural students pursuing higher education.',
    bengaliDescription: 'ব্রিটিশ প্রশাসনের ১৯৩৫ সালের ভারত শাসন আইনের অধীনে শুঁড়ি সমাজকে "তপশিলি জাতি" (Scheduled Caste) হিসেবে চিহ্নিত করা হয়। এই পরিস্থিতিতে সমাজের দানশীল ও প্রখ্যাত ব্যক্তিদের উদ্যোগে ১৯৩৪ সালে কলকাতার ৭৭, মানিকতলা স্ট্রিটে (সিমলা) মা জগৎ জননী মন্দিরে বঙ্গীয় সাহা সমিতি (শুঁড়ি সমাজ) প্রতিষ্ঠিত হয় এবং গ্রামীণ ছাত্রদের উচ্চশিক্ষার জন্য আবাসিক ব্যবস্থা করা হয়।',
    badge: 'Foundation Era',
    bengaliBadge: 'প্রতিষ্ঠা পর্ব (১৯৩৪-৩৫)'
  },
  {
    year: '1936–37',
    title: 'Official Registration: Regd. No. 4522 of 1936–37',
    bengaliTitle: 'সোসাইটি হিসেবে বিধিবদ্ধ নিবন্ধন: নং ৪৫২২ (১৯৩৬-৩৭)',
    location: 'Kolkata, West Bengal',
    bengaliLocation: 'কলকাতা, পশ্চিমবঙ্গ',
    description: 'The society was formally incorporated and registered under the Societies Registration Act as Bangiya Saha Samity (Sunri Samaj) under Registration No. 4522 of 1936–37 with its 5 sacred objectives.',
    bengaliDescription: 'সোসাইটি রেজিস্ট্রেশন অ্যাক্টের অধীনে ৪৫২২ অব ১৯৩৬-৩৭ নম্বরে বঙ্গীয় সাহা সমিতি (শুঁড়ি সমাজ) বিধিবদ্ধভাবে নিবন্ধিত হয় এবং তার ৫টি সাংবিধানিক উদ্দেশ্য গৃহীত হয়।',
    badge: 'Official Registration',
    bengaliBadge: 'বিধিবদ্ধ নিবন্ধন (১৯৩৬-৩৭)'
  },
  {
    year: '1950 & 1956',
    title: 'Dr. Ambedkar Constitutional Inclusion & 52B Indian Mirror St Purchase',
    bengaliTitle: 'ড. আম্বেদকর কর্তৃক সংবিধানে অন্তর্ভুক্তি ও ৫২বি ইন্ডিয়ান মিরর স্ট্রিট ক্রয়',
    location: 'Constitution of India & 52B Indian Mirror St, Kol-13',
    bengaliLocation: 'ভারতের সংবিধান ও ৫২বি ইন্ডিয়ান মিরর স্ট্রিট, কোল-১৩',
    description: 'In 1950, the chief architect of the Indian Constitution, Babasaheb Dr. B. R. Ambedkar, reaffirmed our inclusion in the Scheduled Caste list. Later in 1956, our classification was listed as "Sunri (Excluding Saha)". Around that time, with financial assistance of well-wishers and community families, a parcel of land with a single room was purchased at 52B, Indian Mirror Street, Kolkata – 700013 (Opposite G.D. Hospital, Taltala). Within a few years, a four-storey building was erected, serving as the Central Office where hostel arrangements for rural students and Guest Room facilities for community members are made.',
    bengaliDescription: '১৯৫০ সালে ভারতীয় সংবিধানের প্রধান রূপকার বাবাসাহেব ড. বি. আর. আম্বেদকর শুঁড়ি সম্প্রদায়কে তপশিলি জাতি তালিকায় অন্তর্ভুক্ত করেন। ১৯৫৬ সালে সংশোধনের পর শ্রেণিবিন্যাস হয় "Sunri (Excluding Saha)"। একই সময়ে সমাজের সদস্যদের আর্থিক সহায়তায় ৫২বি, ইন্ডিয়ান মিরর স্ট্রিটে (জি.ডি. হাসপাতালের বিপরীতে, তালতলা) এক কামরাসহ জমি ক্রয় করা হয় ও চারতলা ভবন নির্মাণ করে কেন্দ্রীয় কার্যালয়, ছাত্রাবাস ও সমাজের সদস্যদের জন্য অতিথি কক্ষের ব্যবস্থা করা হয়।',
    badge: 'Ambedkar & Central Office',
    bengaliBadge: 'ড. আম্বেদকর ও ৫২বি ভবন'
  },
  {
    year: '1965 – 2000',
    title: 'Supreme Court Stays & Historic Victory of Sept 5, 2000',
    bengaliTitle: 'সুপ্রিম কোর্টে আইনি লড়াই ও ৫ সেপ্টেম্বর ২০০০-এর ঐতিহাসিক বিজয়',
    location: 'Supreme Court of India & Govt of West Bengal',
    bengaliLocation: 'ভারতের সুপ্রিম কোর্ট ও পশ্চিমবঙ্গ সরকার',
    description: 'Issuance of Scheduled Caste certificates to the "Saha Sunri" community was stayed by Supreme Court orders twice—first in 1965, and again in 1996. The Samity waged an unyielding legal battle and secured a favorable verdict in the Supreme Court. Effective September 5, 2000, issuance of SC certificates was restored under directions from the Chief Secretary, Govt of West Bengal, with the instrumental intervention of then MLA, Shri Sadhan Pande.',
    bengaliDescription: 'সাহা শুঁড়ি সম্প্রদায়ের তপশিলি জাতি শংসাপত্র প্রদান সুপ্রিম কোর্টের নির্দেশে দুবার স্থগিত হয়—প্রথমবার ১৯৬৫ সালে এবং পুনরায় ১৯৯৬ সালে। সমিতি সুপ্রিম কোর্টে দীর্ঘ আইনি লড়াই চালিয়ে বিজয় ছিনিয়ে আনে এবং তৎকালীন বিধায়ক শ্রী সাধন পাণ্ডের সক্রিয় হস্তক্ষেপে ও মুখ্যসচিবের নির্দেশে ৫ সেপ্টেম্বর ২০০০ থেকে শংসাপত্র প্রদান পুনরায় চালু হয়।',
    badge: 'Legal Milestone',
    bengaliBadge: 'সুপ্রিম কোর্টে ঐতিহাসিক জয়'
  },
  {
    year: '2018 – Present',
    title: 'Hostel Expansion to 50 Students, Female Wing & Guest Room',
    bengaliTitle: 'ছাত্রাবাস সম্প্রসারণ (৫০ জন শিক্ষার্থী), ছাত্রী বিভাগ ও অতিথি কক্ষ',
    location: '52B, Indian Mirror Street, Kolkata – 700013',
    bengaliLocation: '৫২বি, ইন্ডিয়ান মিরর স্ট্রিট, কলকাতা – ৭০০০১৩',
    description: 'Under the guidance of the Executive Committee, residential hostel arrangements were modernized for up to 50 rural students with dedicated female student facilities instituted in 2018, alongside a Guest Room facility for community members. The Samity continues Social Help for Educational Purpose (Only for Our Community), prioritizing female higher education.',
    bengaliDescription: 'কার্যনির্বাহী সমিতির পরিচালনায় কেন্দ্রীয় ছাত্রাবাসের আধুনিকীকরণ করে ৫০ জন গ্রামীণ শিক্ষার্থীর আবাসিক ব্যবস্থা করা হয় এবং ২০১৮ সালে ছাত্রীদের জন্য স্বতন্ত্র আবাসন ব্যবস্থা ও সমাজের সদস্যদের জন্য অতিথি কক্ষের (Guest Room) সুবিধা চালু হয়। সমিতি শুধুমাত্র আমাদের সম্প্রদায়ের জন্য শিক্ষার উদ্দেশ্যে সামাজিক সহায়তা ও নারী উচ্চশিক্ষায় বিশেষ অগ্রাধিকার দিয়ে কাজ করে চলেছে।',
    badge: 'Modern Revival',
    bengaliBadge: 'আধুনিক সংস্কার ও ৫০ আসন'
  }
];

export const SOCIETY_OBJECTIVES: MissionPillar[] = [
  {
    id: 'education-scholarships',
    title: 'Educational Support, Female Higher Education & Libraries',
    hindiTitle: 'শিক্ষা বিস্তার, শিক্ষার উদ্দেশ্যে সামাজিক সহায়তা, নারী উচ্চশিক্ষা ও পাঠাগার',
    tagline: 'Promoting education with special priority for female higher education and Social Help for Educational Purpose (Only for Our Community).',
    description: 'To improve and develop in all respects the position of Sunri Community (Excluding Saha) as a whole and particularly in West Bengal by all legitimate means to promote and spread education and culture and diffuse useful knowledge among the Sunri community through Social Help for Educational Purpose (Only for Our Community), highlighting a special priority for female higher education, founding and maintaining educational institutions and libraries, controlling publication of journals, periodicals, pamphlets and books, holding meetings and conferences and sending preachers amongst the Sunri Community.',
    keyInitiatives: [
      'Social Help for Educational Purpose (Only for Our Community) for deserving students',
      'Highlighting special priority for female higher education across West Bengal',
      'Establishing and maintaining community libraries and study resources',
      'Controlling publication of journals, periodical pamphlets, and community books',
      'Convening social assemblies, educational conferences, and youth symposiums'
    ],
    icon: 'GraduationCap',
    impactNumber: 'Only for Our Community',
    impactLabel: 'Core Objective 1'
  },
  {
    id: 'social-reforms',
    title: 'Eradicating Social Evils & Introducing Social Reforms',
    hindiTitle: 'সামাজিক কুপ্রথা নির্মূল, সংস্কার সাধন ও ঐক্যবোধ প্রচার',
    tagline: 'Advancing social, economic, and cultural unity while eliminating harmful practices.',
    description: 'To help the Sunri Community in eradicating social evils and harmful practices to introducing social reforms, improve its position socially, economically, commercially as well as education and culture in promoting unity and a spirit of fellowship amongst the different sections and members.',
    keyInitiatives: [
      'Rooting out harmful social dogmas, superstitious customs, and dowry',
      'Fostering commercial, trade, and economic enterprise amongst youth',
      'Deepening fraternal unity and solidarity across all sections and members',
      'Sending social preachers and organizers across districts of West Bengal'
    ],
    icon: 'Users',
    impactNumber: 'Social Unity',
    impactLabel: 'Core Objective 2'
  },
  {
    id: 'constitutional-sc-protection',
    title: 'Retaining Sunri Community in Constitution SC List',
    hindiTitle: 'সংবিধানে তপশিলি জাতি (SC) তালিকাভুক্তির অধিকার সংরক্ষণ',
    tagline: 'Resisting any attempt of exclusion and safeguarding full constitutional reservations.',
    description: 'To move Government for retaining Sunri Community in the list of Scheduled Caste under the Constitution of India and to resist any attempt for excluding the Sunri community from such list, and also to take necessary steps so that the members of the Sunri Community continue to enjoy all the benefits and privileges available to the Scheduled Caste in the matter of social, economic and educational development and reservation of seats in the Legislature and Government services.',
    keyInitiatives: [
      'Active constitutional representations before Central & State SC Commissions',
      'Defending statutory SC reservation in government jobs and educational quotas',
      'Safeguarding political and legislative representation under Articles 330 & 332',
      'Free legal aid and certificate verification assistance for community youth'
    ],
    icon: 'ShieldCheck',
    impactNumber: 'Dr. Ambedkar (1950)',
    impactLabel: 'Core Objective 3'
  },
  {
    id: 'safeguard-interests',
    title: 'Safeguarding & Promoting Community Interests',
    hindiTitle: 'সম্প্রদায়ের সামগ্রিক ও নাগরিক স্বার্থ সুনিশ্চিত করা',
    tagline: 'Protecting the communal dignity, civic rights, and collective aspirations of the community.',
    description: 'To safeguard and promote the communal interests of the Sunri Community throughout West Bengal with dignity, democratic strength, and organized solidarity.',
    keyInitiatives: [
      'Representing community demands to state ministries and district magistrates',
      'Creating sub-divisional welfare bodies and grievance counseling cells',
      'Protecting community properties and historic institutional heritage',
      'Organizing annual conferences and cultural exchange forums'
    ],
    icon: 'Scale',
    impactNumber: 'West Bengal',
    impactLabel: 'Core Objective 4'
  },
  {
    id: 'distress-charities',
    title: 'Charities to Distressed & Relief to Vulnerable Men and Women',
    hindiTitle: 'দুস্থ ও সহায়-সম্বলহীন মানুষের জন্য কল্যাণকর সেবা ও অনুদান',
    tagline: 'Extending benevolence to distressed families and vulnerable members as funds permit.',
    description: 'To grant charities to the distressed of the community and to render help to vulnerable women and men of the community as the funds permit.',
    keyInitiatives: [
      'Direct charitable financial assistance to destitute families in distress',
      'Emergency medical aid and sustenance grants to elderly and widowed women',
      'Residential hostel arrangements made at 52B Indian Mirror Street for rural students',
      'Guest Room facility available for community members visiting Kolkata'
    ],
    icon: 'HeartHandshake',
    impactNumber: 'Distress Grants',
    impactLabel: 'Core Objective 5'
  }
];

export const MISSION_PILLARS: MissionPillar[] = SOCIETY_OBJECTIVES;

export const DONATION_TIERS: DonationTier[] = [
  {
    id: 'hostel-1500',
    amount: 1500,
    title: 'Rural Student Hostel Maintenance',
    impact: 'Supports 1 Rural Student at 52B Indian Mirror St',
    coverage: 'Supports the 3rd & 4th floor hostel residential arrangements, study desks, and electricity for rural students studying in Kolkata colleges.',
    isPopular: true
  },
  {
    id: 'scholarship-3000',
    amount: 3000,
    title: 'Social Help for Educational Purpose (Only for Our Community)',
    impact: 'Only for Our Community • Female Higher Education Priority',
    coverage: 'Educational financial support strictly Only for Our Community, with a special priority for female higher education in West Bengal.',
  },
  {
    id: 'charity-1000',
    amount: 1000,
    title: 'Charity Aid for Distressed Men and Women',
    impact: 'Emergency Relief for 1 Destitute Community Member',
    coverage: 'Direct relief grants to distressed, elderly, or widowed members of the community.',
  },
  {
    id: 'publication-500',
    amount: 500,
    title: 'Publications, Journals & Library Fund',
    impact: 'Printing of Community Periodicals & Pamphlets',
    coverage: 'Supports publication of informative journals, historical pamphlets, and maintenance of educational libraries.',
  }
];

export const LEGAL_FAQS: LegalFAQ[] = [
  {
    id: 'faq-1',
    articleOrAct: 'The Constitution (Scheduled Castes) Order, 1950',
    question: 'How was the Sunri community included as a Scheduled Caste in West Bengal?',
    answer: 'In the Year 1950 in the Constitution of India, Dr. Baba Saheb Ambedkar included Sunri as a Scheduled Caste community. This granted constitutional reservations in government jobs, education, and legislature to uplift the community.',
    practicalStep: 'The Samity actively petitions and coordinates with authorities to ensure eligible Sunri families obtain valid SC certificates without bureaucratic delays.'
  },
  {
    id: 'faq-2',
    articleOrAct: 'Constitutional Objective 3 of Bangiya Saha Samity',
    question: 'What actions does the Samity take to retain Sunri in the Scheduled Caste list?',
    answer: 'The constitutional objective of the Samity is to move the Government for retaining Sunri Community in the list of Scheduled Caste under the Constitution of India, resist any attempt to exclude the community, and safeguard all benefits and legislative seat reservations.',
    practicalStep: 'We maintain ongoing vigilance and legal documentation with the Ministry of Social Justice & Empowerment and the National Commission for Scheduled Castes.'
  },
  {
    id: 'faq-3',
    articleOrAct: 'Rural Students Welfare Initiative & Guest Room (Est. 1956)',
    question: 'Who can apply for the Student Hostel and Guest Room at 52B Indian Mirror Street?',
    answer: 'In our four-storeyed Central Office building, residential hostel arrangements are made for up to 50 rural students (with a dedicated female wing introduced in 2018) pursuing higher education in Kolkata colleges, and a Guest Room facility is also available for community members.',
    practicalStep: 'Students and community members seeking hostel or Guest Room accommodation can submit an application directly at our Central Office, 52B Indian Mirror Street, Kolkata - 700013.'
  },
  {
    id: 'faq-4',
    articleOrAct: 'Charity & Distress Relief Rules',
    question: 'How does the Samity render help to distressed community members?',
    answer: 'As mandated by our founding objectives, the Samity grants charities to the distressed of the community and renders help to vulnerable women and men of the community as funds permit.',
    practicalStep: 'Applications for medical emergencies, widow sustenance, or Social Help for Educational Purpose (Only for Our Community) can be submitted to the General Secretary at the Central Office.'
  }
];

export const TRANSPARENCY_STATS = [
  { percentage: '80%', label: 'Student Hostel & Social Help for Educational Purpose (Only for Our Community)', description: 'Hostel arrangements at 52B Indian Mirror St, book grants, and special priority for female higher education' },
  { percentage: '12%', label: 'Distress Charities & Vulnerable Member Relief', description: 'Direct assistance to destitute families, widows, and medical emergency aid' },
  { percentage: '8%', label: 'Constitutional SC Advocacy & Publications', description: 'Legal representations, publishing community journals, periodicals & pamphlets' },
];

export const WEST_BENGAL_DISTRICTS = [
  'Kolkata',
  'North 24 Parganas',
  'South 24 Parganas',
  'Howrah',
  'Hooghly',
  'Purba Medinipur',
  'Paschim Medinipur',
  'Jhargram',
  'Purba Bardhaman',
  'Paschim Bardhaman',
  'Birbhum',
  'Bankura',
  'Purulia',
  'Nadia',
  'Murshidabad',
  'Malda',
  'Uttar Dinajpur',
  'Dakshin Dinajpur',
  'Jalpaiguri',
  'Alipurduar',
  'Cooch Behar',
  'Darjeeling',
  'Kalimpong'
];

export const WEST_BENGAL_DISTRICTS_BN: Record<string, string> = {
  'Kolkata': 'কলকাতা',
  'North 24 Parganas': 'উত্তর ২৪ পরগনা',
  'South 24 Parganas': 'দক্ষিণ ২৪ পরগনা',
  'Howrah': 'হাওড়া',
  'Hooghly': 'হুগলি',
  'Purba Medinipur': 'পূর্ব মেদিনীপুর',
  'Paschim Medinipur': 'পশ্চিম মেদিনীপুর',
  'Jhargram': 'ঝাড়গ্রাম',
  'Purba Bardhaman': 'পূর্ব বর্ধমান',
  'Paschim Bardhaman': 'পশ্চিম বর্ধমান',
  'Birbhum': 'বীরভূম',
  'Bankura': 'বাঁকুড়া',
  'Purulia': 'পুরুলিয়া',
  'Nadia': 'নদিয়া',
  'Murshidabad': 'মুর্শিদাবাদ',
  'Malda': 'মালদা',
  'Uttar Dinajpur': 'উত্তর দিনাজপুর',
  'Dakshin Dinajpur': 'দক্ষিণ দিনাজপুর',
  'Jalpaiguri': 'জলপাইগুড়ি',
  'Alipurduar': 'আলিপুরদুয়ার',
  'Cooch Behar': 'কোচবিহার',
  'Darjeeling': 'দার্জিলিং',
  'Kalimpong': 'কালিম্পং'
};

export const KEY_ACTIVITIES = [
  {
    id: 'social-welfare',
    title: 'Social Welfare',
    bengaliTitle: 'সমাজ কল্যাণ ও নিঃস্ব সেবা',
    category: 'Social Welfare',
    description: 'Extending distress charities, emergency medical relief, and direct sustenance to destitute widows, elderly citizens, and impoverished families of the Sunri community.',
    bengaliDescription: 'সমাজের চরম দরিদ্র, বৃদ্ধ, বিধবা ও বিপন্ন পরিবারবর্গকে সরাসরি আর্থিক অনুদান, আপৎকালীন চিকিৎসা সহায়তা এবং সামাজিক সুরক্ষা প্রদান।',
    icon: 'HeartHandshake',
    highlights: ['Medical emergency relief funds', 'Support for destitute widows and elderly', 'Disaster & crisis interventions', 'Helpline assistance'],
    bengaliHighlights: ['আপৎকালীন চিকিৎসা ত্রাণ তহবিল', 'দুস্থ বিধবা ও প্রবীণদের সহায়তা', 'সংকটকালীন ও দুর্যোগে পাশে দাঁড়ানো', 'জরুরি সহায়তা হেল্পলাইন'],
    badge: 'Benevolence',
    bengaliBadge: 'নিঃস্ব সেবা'
  },
  {
    id: 'community-development',
    title: 'Community Development',
    bengaliTitle: 'সামাজিক উন্নয়ন ও পরিকাঠামো',
    category: 'Community Development',
    description: 'Fostering grassroots solidarity, commercial enterprise, clearing institutional liabilities, Guest Room arrangements for community members, and district liaison sub-divisions across West Bengal.',
    bengaliDescription: 'পশ্চিমবঙ্গের প্রতিটি জেলা ও মহকুমায় শাখা গঠন, সদস্যদের জন্য অতিথি কক্ষ (Guest Room)-এর ব্যবস্থা, তরুণ উদ্যোক্তাদের বাণিজ্যিক সহায়তা এবং সামাজিক ঐক্য সুদৃঢ়করণ।',
    icon: 'Building2',
    highlights: ['Central Office 4-storey infrastructure', 'Guest Room for community members', 'Youth self-reliance initiatives', 'Community assemblies'],
    bengaliHighlights: ['কেন্দ্রীয় কার্যালয়ের ৪ তলা পরিকাঠামো', 'সদস্যদের জন্য অতিথি কক্ষ (Guest Room)', 'যুব সম্প্রদায়ের স্বনির্ভরতা উদ্যোগ', 'সামাজিক সম্মেলন ও সমাবেশ'],
    badge: 'Empowerment',
    bengaliBadge: 'ক্ষমতায়ন'
  },
  {
    id: 'cultural-preservation',
    title: 'Cultural Preservation',
    bengaliTitle: 'ঐতিহ্য ও সংস্কৃতি সংরক্ষণ',
    category: 'Cultural Preservation',
    description: 'Preserving Sunri historical identity, celebrating traditional festivals, publishing heritage periodicals, and chronicling community history.',
    bengaliDescription: 'শুঁড়ি সমাজের প্রাচীন ঐতিহ্য, লোকসংস্কৃতি ও ইতিহাস সংরক্ষণ, ঐতিহাসিক সাময়িকী ও গবেষণা পুস্তিকা প্রকাশনা।',
    icon: 'Sparkles',
    highlights: ['Maa Jagat Janani & Jagaddhatri Puja', 'Publication of journals & pamphlets', 'Historical documentation', 'Annual commemorative gatherings'],
    bengaliHighlights: ['মা জগৎ জননী ও জগদ্ধাত্রী পূজা', 'ঐতিহাসিক সাময়িকী ও পুস্তিকা প্রকাশনা', 'গবেষণাধর্মী নথি সংরক্ষণ', 'বার্ষিক স্মৃতি সম্মেলন ও মিলনমেলা'],
    badge: 'Heritage',
    bengaliBadge: 'ঐতিহ্য'
  },
  {
    id: 'educational-support',
    title: 'Educational Support & Social Help (Only for Our Community)',
    bengaliTitle: 'শিক্ষা বিস্তার, ছাত্রাবাস ও সামাজিক সহায়তা (শুধুমাত্র আমাদের সম্প্রদায়ের জন্য)',
    category: 'Educational Support',
    description: 'Residential arrangements are made at 52B Indian Mirror St for up to 50 rural students, alongside Social Help for Educational Purpose (Only for Our Community) with special priority for female higher education.',
    bengaliDescription: 'কলকাতায় উচ্চশিক্ষারত ৫০ জন গ্রামীণ শিক্ষার্থীর জন্য আবাসিক ব্যবস্থা করা হয় (২০১৮ সাল থেকে ছাত্রী শাখা) এবং শুধুমাত্র আমাদের সম্প্রদায়ের জন্য শিক্ষার উদ্দেশ্যে সামাজিক সহায়তা ও নারী উচ্চশিক্ষায় বিশেষ অগ্রাধিকার।',
    icon: 'GraduationCap',
    highlights: ['50-student hostel arrangements', 'Female higher education priority', 'Social Help for Educational Purpose (Only for Our Community)', 'Educational book grants'],
    bengaliHighlights: ['৫০ আসনের ছাত্রাবাসে আবাসিক ব্যবস্থা', 'নারী উচ্চশিক্ষায় বিশেষ অগ্রাধিকার', 'শিক্ষার উদ্দেশ্যে সামাজিক সহায়তা (শুধুমাত্র আমাদের সম্প্রদায়ের জন্য)', 'বিনামূল্যে পাঠ্যপুস্তক অনুদান'],
    badge: 'Education',
    bengaliBadge: 'শিক্ষা বিস্তার'
  },
  {
    id: 'community-engagement',
    title: 'Community Engagement',
    bengaliTitle: 'সামাজিক যোগাযোগ ও সম্প্রীতি',
    category: 'Community Engagement',
    description: 'Mobilizing community members across West Bengal through conferences, get-togethers, youth mentoring, and active civic participation.',
    bengaliDescription: 'বার্ষিক সম্মেলন, যুব সম্মেলন, পারস্পরিক যোগাযোগ বৃদ্ধি এবং সামাজিক অধিকার সচেতনতা ক্যাম্পের ধারাবাহিক আয়োজন।',
    icon: 'Users',
    highlights: ['Get-Together assemblies (Vivekananda Hall)', 'Life membership outreach drives', 'Legal awareness workshops', 'Career guidance symposiums'],
    bengaliHighlights: ['বিবেকানন্দ হলে প্রীতি সম্মেলন', 'আজীবন সদস্যপদ প্রসার কর্মসূচি', 'আইনি সচেতনতা ও পরামর্শ কর্মশালা', 'কর্মমুখী দিকনির্দেশনা সভা'],
    badge: 'Unity',
    bengaliBadge: 'সামাজিক ঐক্য'
  }
];

export const ADVISORY_BOARD_MEMBERS = [
  {
    id: 'adv-chairperson',
    name: 'Mrs. Namita Saha',
    designation: 'Ex. M.L.A',
    role: 'Chairperson',
    bengaliName: 'শ্রীমতী নমিতা সাহা',
    bengaliDesignation: 'প্রাক্তন বিধায়ক',
    bengaliRole: 'সভানেত্রী (উপদেষ্টা মণ্ডলী)',
    tier: 'Advisory' as const,
    bio: 'Respected patron and former Member of the Legislative Assembly (Ex. M.L.A), providing veteran guidance, civic advocacy, and moral leadership to Bangiya Saha Samity.',
    bengaliBio: 'বিশিষ্ট সমাজহিতৈষী ও পশ্চিমবঙ্গ বিধানসভার প্রাক্তন বিধায়িকা; উপদেষ্টা মণ্ডলীর সভানেত্রী হিসেবে বঙ্গীয় সাহা সমিতির সার্বিক দিকনির্দেশনা ও সমাজের অগ্রগতিতে অভিভাবকের ভূমিকা পালন করছেন।',
    contactNote: 'Advisory Board, Bangiya Saha Samity',
    imageUrl: '/Namita-Saha.jpg'
  },
  {
    id: 'adv-chief',
    name: 'Krishna Kanta Saha (Kesto Da)',
    designation: 'Senior Community Elder',
    role: 'Chief Advisor',
    bengaliName: 'কৃষ্ণ কান্ত সাহা (কেষ্ট দা)',
    bengaliDesignation: 'বরিষ্ঠ সমাজ অভিভাবক',
    bengaliRole: 'প্রধান উপদেষ্টা',
    tier: 'Advisory' as const,
    bio: 'Affectionately known across the community as "Kesto Da", serving as Chief Advisor with decades of dedication to community harmony, student welfare, and cultural preservation.',
    bengaliBio: 'সমগ্র সমাজে বিশিষ্ট অভিভাবক "কেষ্ট দা" নামে পরিচিত প্রধান উপদেষ্টা; দীর্ঘদিন ধরে সমাজের ঐক্য, ছাত্রকল্যাণ ও অধিকার রক্ষায় নিরলস ভূমিকা পালন করছেন।',
    contactNote: 'Advisory Board, Bangiya Saha Samity',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
  }
];

export const CENTRAL_OFFICE_BEARERS = [
  {
    id: 'ob-president',
    name: 'Bikash Biswas',
    role: 'President',
    bengaliName: 'বিকাশ বিশ্বাস',
    bengaliRole: 'সভাপতি',
    tier: 'OfficeBearer' as const,
    bio: 'Presides over the Central Executive Committee, leading organizational policy, institutional administration, and constitutional rights safeguarding for the Sunri community.',
    bengaliBio: 'কেন্দ্রীয় কার্যনির্বাহী সমিতির সভাপতি হিসেবে প্রাতিষ্ঠানিক নীতি নির্ধারণ, প্রশাসনিক পরিচালনা এবং শুঁড়ি সমাজের সামগ্রিক অধিকার রক্ষায় নেতৃত্ব দিচ্ছেন।',
    contactNote: 'Central Secretariat, 52B Indian Mirror St',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'ob-secretary',
    name: 'Subir Saha',
    role: 'Secretary',
    bengaliName: 'সুবীর সাহা',
    bengaliRole: 'সম্পাদক',
    tier: 'OfficeBearer' as const,
    bio: 'Leads day-to-day administrative operations, student hostel management at 52B Indian Mirror Street, public relations, and inter-district coordination.',
    bengaliBio: 'সমিতির সম্পাদক হিসেবে কেন্দ্রীয় কার্যালয় পরিচালনা, ছাত্রাবাস প্রশাসন, সামাজিক জনসংযোগ ও জেলা সমন্বয়ের সার্বিক প্রশাসনিক দায়িত্ব পালন করছেন।',
    contactNote: 'Central Secretariat, 52B Indian Mirror St',
    imageUrl: '/members/subir-saha.jpg'
  },
  {
    id: 'ob-treasurer',
    name: 'Ashis Kumar Saha',
    role: 'Treasurer',
    bengaliName: 'আশিস কুমার সাহা',
    bengaliRole: 'কোষাধ্যক্ষ',
    tier: 'OfficeBearer' as const,
    bio: 'Oversees organizational financial stewardship, annual statutory audits, Social Help for Educational Purpose (Only for Our Community) funds, and transparent institutional accounting.',
    bengaliBio: 'কোষাধ্যক্ষ হিসেবে সমিতির আর্থিক হিসাবরক্ষণ, বার্ষিক বিধিবদ্ধ অডিট ও ছাত্রাবাস এবং শিক্ষার উদ্দেশ্যে সামাজিক সহায়তা (শুধুমাত্র আমাদের সম্প্রদায়ের জন্য) তহবিলের স্বচ্ছ পরিচালনা নিশ্চিত করছেন।',
    contactNote: 'Finance Desk, 52B Indian Mirror St',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'ob-asst-sec-1',
    name: 'Sandip Khan',
    role: 'Asstt. Secretary',
    bengaliName: 'সন্দীপ খাঁ',
    bengaliRole: 'সহকারী সম্পাদক',
    tier: 'Secretariat' as const,
    bio: 'Assists in secretarial operations, community records, youth initiatives, and administrative coordination.',
    bengaliBio: 'সহকারী সম্পাদক হিসেবে প্রশাসনিক কার্যক্রমে সহায়তা, নথিপত্র ব্যবস্থাপনা ও সামাজিক যোগাযোগে নিযুক্ত।',
    contactNote: 'Central Secretariat, Kolkata',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'ob-asst-sec-2',
    name: 'Snehasish Biswas',
    role: 'Asstt. Secretary',
    bengaliName: 'স্নেহাশিস বিশ্বাস',
    bengaliRole: 'সহকারী সম্পাদক',
    tier: 'Secretariat' as const,
    bio: 'Coordinates event logistics, student outreach, and youth fellowship programs across districts.',
    bengaliBio: 'সহকারী সম্পাদক হিসেবে বিভিন্ন কর্মসূচি পরিচালনা, শিক্ষার্থী ও যুব সমাজের সাথে সক্রিয় যোগাযোগ রক্ষা করেন।',
    contactNote: 'Central Secretariat, Kolkata',
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'ob-asst-treas-1',
    name: 'Ujjal Biswas',
    role: 'Asstt. Treasurer',
    bengaliName: 'উজ্জ্বল বিশ্বাস',
    bengaliRole: 'সহকারী কোষাধ্যক্ষ',
    tier: 'Secretariat' as const,
    bio: 'Assists the Treasurer with hostel ledger records, verification of expenditures, and donation registries.',
    bengaliBio: 'সহকারী কোষাধ্যক্ষ হিসেবে দৈনন্দিন হিসাব পরীক্ষা, ছাত্রাবাস ব্যয় নিরীক্ষা ও অনুদান খতিয়ান পরিচালনায় যুক্ত।',
    contactNote: 'Finance Desk, Kolkata',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'ob-asst-treas-2',
    name: 'Mrinal Saha',
    role: 'Asstt. Treasurer',
    bengaliName: 'মৃণাল সাহা',
    bengaliRole: 'সহকারী কোষাধ্যক্ষ',
    tier: 'Secretariat' as const,
    bio: 'Supports statutory audit reconciliations, banking transactions, and annual financial statements.',
    bengaliBio: 'সহকারী কোষাধ্যক্ষ হিসেবে ব্যাংক লেনদেন, বার্ষিক আর্থিক বিবরণী ও অডিট কার্যক্রমে সহযোগিতা করেন।',
    contactNote: 'Finance Desk, Kolkata',
    imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80'
  }
];

export const VICE_PRESIDENTS_LIST = [
  {
    slNo: 1,
    name: 'Uttam Khan',
    bengaliName: 'উত্তম খাঁ',
    role: 'Vice President',
    bengaliRole: 'সহ-সভাপতি',
    region: 'Kolkata & Central Coordination',
    bengaliRegion: 'কলকাতা ও কেন্দ্রীয় সমন্বয়'
  },
  {
    slNo: 2,
    name: 'Amiya Saha - Adv.',
    district: 'Birbhum',
    bengaliName: 'অমিয় সাহা (আইনজীবী)',
    bengaliDistrict: 'বীরভূম',
    role: 'Vice President',
    bengaliRole: 'সহ-সভাপতি',
    region: 'Birbhum District & Legal Cell',
    bengaliRegion: 'বীরভূম জেলা ও আইনি সেল'
  },
  {
    slNo: 3,
    name: 'Uddhab Chandra Saha',
    district: 'Bankura',
    bengaliName: 'উদ্ধব চন্দ্র সাহা',
    bengaliDistrict: 'বাঁকুড়া',
    role: 'Vice President',
    bengaliRole: 'সহ-সভাপতি',
    region: 'Bankura District Region',
    bengaliRegion: 'বাঁকুড়া জেলা অঞ্চল'
  },
  {
    slNo: 4,
    name: 'Nikhilesh Khan',
    bengaliName: 'নিখিলেশ খাঁ',
    role: 'Vice President',
    bengaliRole: 'সহ-সভাপতি',
    region: 'Western Bengal Coordination',
    bengaliRegion: 'পশ্চিমাঞ্চলীয় শাখা সমন্বয়'
  },
  {
    slNo: 5,
    name: 'Smt. Hasi Saha',
    bengaliName: 'শ্রীমতী হাসি সাহা',
    role: 'Vice President',
    bengaliRole: 'সহ-সভাপতি',
    region: "Women's Empowerment & Social Welfare",
    bengaliRegion: 'মহিলা ক্ষমতায়ন ও সমাজকল্যাণ'
  },
  {
    slNo: 6,
    name: 'Sampad Kr. Mondal',
    district: 'Hooghly',
    bengaliName: 'সম্পদ কুমার মণ্ডল',
    bengaliDistrict: 'হুগলি',
    role: 'Vice President',
    bengaliRole: 'সহ-সভাপতি',
    region: 'Hooghly District Region',
    bengaliRegion: 'হুগলি জেলা অঞ্চল'
  },
  {
    slNo: 7,
    name: 'Somnath Saha',
    bengaliName: 'সোমনাথ সাহা',
    role: 'Vice President',
    bengaliRole: 'সহ-সভাপতি',
    region: 'South Bengal Coordination',
    bengaliRegion: 'দক্ষিণবঙ্গ সমন্বয়'
  },
  {
    slNo: 8,
    name: 'Sadhan Mondal',
    district: 'Bankura',
    bengaliName: 'সাধন মণ্ডল',
    bengaliDistrict: 'বাঁকুড়া',
    role: 'Vice President',
    bengaliRole: 'সহ-সভাপতি',
    region: 'Bankura District Region',
    bengaliRegion: 'বাঁকুড়া জেলা অঞ্চল'
  }
];

export const EXECUTIVE_COMMITTEE_LIST = [
  { slNo: 1, name: 'Dr. Pradip Kumar Mullick', bengaliName: 'ডাঃ প্রদীপ কুমার মল্লিক', portfolio: 'Healthcare & Medical Aid Cell', bengaliPortfolio: 'স্বাস্থ্য ও চিকিৎসা সহায়তা সেল' },
  { slNo: 2, name: 'Rajendra Kr. Saha', bengaliName: 'রাজেন্দ্র কুমার সাহা', portfolio: 'Hostel Maintenance & Infrastructure', bengaliPortfolio: 'ছাত্রাবাস সংস্কার ও পরিকাঠামো' },
  { slNo: 3, name: 'Amal Mullick', bengaliName: 'অমল মল্লিক', portfolio: 'General Administration & Secretariat', bengaliPortfolio: 'সাধারণ প্রশাসন ও সচিবালয়' },
  { slNo: 4, name: 'Amal Saha', bengaliName: 'অমল সাহা', portfolio: 'Community Welfare & Relief', bengaliPortfolio: 'সমাজকল্যাণ ও দুস্থ সাহায্য' },
  { slNo: 5, name: 'Dipak Saha', bengaliName: 'দীপক সাহা', portfolio: 'Social Help for Educational Purpose (Only for Our Community)', bengaliPortfolio: 'শিক্ষার উদ্দেশ্যে সামাজিক সহায়তা (শুধুমাত্র আমাদের সম্প্রদায়ের জন্য)' },
  { slNo: 6, name: 'Chittaranjan Mondal', district: 'Bankura', bengaliName: 'চিত্তরঞ্জন মণ্ডল', bengaliDistrict: 'বাঁকুড়া', portfolio: 'District Coordination (Bankura)', bengaliPortfolio: 'জেলা সমন্বয় (বাঁকুড়া)' },
  { slNo: 7, name: 'Prasanta Kr. Saha', district: 'Burdwan-E', bengaliName: 'প্রশান্ত কুমার সাহা', bengaliDistrict: 'পূর্ব বর্ধমান', portfolio: 'District Coordination (East Burdwan)', bengaliPortfolio: 'জেলা সমন্বয় (পূর্ব বর্ধমান)' },
  { slNo: 8, name: 'Tarak Nath Saha', bengaliName: 'তারক নাথ সাহা', portfolio: 'Conventions & Cultural Events', bengaliPortfolio: 'সম্মেলন ও সাংস্কৃতিক অনুষ্ঠান' },
  { slNo: 9, name: 'Uttam Mondal', district: 'Bankura', bengaliName: 'উত্তম মণ্ডল', bengaliDistrict: 'বাঁকুড়া', portfolio: 'Rural Outreach & Grassroots Contact', bengaliPortfolio: 'গ্রামীণ উন্নয়ন ও জনসংযোগ' },
  { slNo: 10, name: 'Saikat Sarkar', bengaliName: 'সৈকত সরকার', portfolio: 'Youth Development & Digital Affairs', bengaliPortfolio: 'যুব সংগঠন ও প্রযুক্তি বিষয়ক সেল' },
  { slNo: 11, name: 'Gopal Saha', bengaliName: 'গোপাল সাহা', portfolio: 'Life Membership Verification', bengaliPortfolio: 'আজীবন সদস্যপদ যাচাই' },
  { slNo: 12, name: 'Pijus Kanti Saha', district: '24 Pgs-N', bengaliName: 'পীযূষ কান্তি সাহা', bengaliDistrict: 'উত্তর ২৪ পরগনা', portfolio: 'District Coordination (North 24 Pgs)', bengaliPortfolio: 'জেলা সমন্বয় (উত্তর ২৪ পরগনা)' },
  { slNo: 13, name: 'Debjit Podder', bengaliName: 'দেবজিৎ পোদ্দার', portfolio: 'Publications & Community Bulletin', bengaliPortfolio: 'মুখপত্র ও প্রকাশনা সেল' },
  { slNo: 14, name: 'Swarnova Nayek', district: 'Howrah', bengaliName: 'স্বর্ণাভ নায়ক', bengaliDistrict: 'হাওড়া', portfolio: 'District Coordination (Howrah)', bengaliPortfolio: 'জেলা সমন্বয় (হাওড়া)' },
  { slNo: 15, name: 'Atindronath Shaw', bengaliName: 'অতীন্দ্রনাথ শ', portfolio: 'Legal Awareness & SC Rights Desk', bengaliPortfolio: 'আইনি সচেতনতা ও তপশিলি অধিকার' },
  { slNo: 16, name: 'Apu Saha', bengaliName: 'অপু সাহা', portfolio: 'Student Hostel Welfare & Amenities', bengaliPortfolio: 'ছাত্রাবাস কল্যাণ ও সুযোগ-সুবিধা' }
];

export const LEADERSHIP_MEMBERS = [
  // 1. Advisory Board
  {
    id: 'adv-namita-saha',
    name: 'Mrs. Namita Saha',
    bengaliName: 'শ্রীমতী নমিতা সাহা',
    role: 'Chairperson (Ex. M.L.A)',
    bengaliRole: 'সভানেত্রী, উপদেষ্টা মণ্ডলী (প্রাক্তন বিধায়ক)',
    tier: 'Advisory' as const,
    bio: 'Distinguished Chairperson of the Advisory Board and former Member of the Legislative Assembly (Ex. M.L.A), providing veteran guidance, legislative perspective, and moral leadership to Bangiya Saha Samity.',
    bengaliBio: 'উপদেষ্টা মণ্ডলীর সভানেত্রী ও প্রাক্তন বিধায়িকা; বঙ্গীয় সাহা সমিতির সার্বিক দিকনির্দেশনা ও সমাজের অগ্রগতিতে অভিভাবক হিসেবে পথ প্রদর্শন করছেন।',
    contactNote: 'Advisory Board, Bangiya Saha Samity',
    imageUrl: '/Namita-Saha.jpg'
  },
  {
    id: 'adv-krishna-kanta-saha',
    name: 'Krishna Kanta Saha (Kesto Da)',
    bengaliName: 'কৃষ্ণ কান্ত সাহা (কেষ্ট দা)',
    role: 'Chief Advisor',
    bengaliRole: 'প্রধান উপদেষ্টা',
    tier: 'Advisory' as const,
    bio: 'Affectionately known across the community as "Kesto Da", serving as Chief Advisor with decades of selfless service for community unity, student hostel support, and social welfare.',
    bengaliBio: 'সমগ্র সমাজে বিশিষ্ট অভিভাবক "কেষ্ট দা" নামে পরিচিত প্রধান উপদেষ্টা; দীর্ঘদিন ধরে সমাজের ঐক্য, ছাত্রকল্যাণ ও অধিকার রক্ষায় নিরলস ভূমিকা পালন করছেন।',
    contactNote: 'Advisory Board, Bangiya Saha Samity',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
  },

  // 2. Central Office Bearers
  {
    id: 'exec-pres',
    name: 'Bikash Biswas',
    bengaliName: 'বিকাশ বিশ্বাস',
    role: 'President',
    bengaliRole: 'সভাপতি',
    tier: 'OfficeBearer' as const,
    bio: 'Presides over the Central Executive Committee, leading administrative governance, community representation, and educational welfare initiatives across West Bengal.',
    bengaliBio: 'কেন্দ্রীয় কার্যনির্বাহী সমিতির সভাপতি হিসেবে সাংগঠনিক নীতি নির্ধারণ, প্রশাসনিক পরিচালনা এবং শুঁড়ি সমাজের সাংবিধানিক অধিকার সুরক্ষায় নেতৃত্ব দিচ্ছেন।',
    contactNote: 'Central Secretariat, 52B Indian Mirror St',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'exec-sec',
    name: 'Subir Saha',
    bengaliName: 'সুবীর সাহা',
    role: 'Secretary',
    bengaliRole: 'সম্পাদক',
    tier: 'OfficeBearer' as const,
    bio: 'Leads the Central Secretariat, overseeing daily administrative operations, 50-student residential hostel administration at 52B Indian Mirror St, publications, and state-wide member relations.',
    bengaliBio: 'সমিতির সম্পাদক হিসেবে কেন্দ্রীয় কার্যালয় পরিচালনা, ৫০ আসনের ছাত্রাবাস প্রশাসন, প্রকাশনা ও রাজ্যব্যাপী সদস্য সমন্বয়ের সার্বিক দায়িত্ব পালন করছেন।',
    contactNote: 'Central Secretariat, 52B Indian Mirror St',
    imageUrl: '/members/subir-saha.jpg'
  },
  {
    id: 'exec-treasurer',
    name: 'Ashis Kumar Saha',
    bengaliName: 'আশিস কুমার সাহা',
    role: 'Treasurer',
    bengaliRole: 'কোষাধ্যক্ষ',
    tier: 'OfficeBearer' as const,
    bio: 'Oversees organizational finances, annual statutory audits, banking operations, Social Help for Educational Purpose (Only for Our Community), and institutional compliance.',
    bengaliBio: 'সমিতির কোষাধ্যক্ষ হিসেবে আর্থিক হিসাবরক্ষণ, বিধিবদ্ধ বার্ষিক অডিট ও শিক্ষার উদ্দেশ্যে সামাজিক সহায়তা (শুধুমাত্র আমাদের সম্প্রদায়ের জন্য) তহবিলের স্বচ্ছ পরিচালনা নিশ্চিত করছেন।',
    contactNote: 'Finance Desk, 52B Indian Mirror St',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'exec-asst-sec-1',
    name: 'Sandip Khan',
    bengaliName: 'সন্দীপ খাঁ',
    role: 'Asstt. Secretary',
    bengaliRole: 'সহকারী সম্পাদক',
    tier: 'Secretariat' as const,
    bio: 'Supports the Secretary in administration, legal correspondences, membership verification, and student affairs.',
    bengaliBio: 'সহকারী সম্পাদক হিসেবে প্রশাসনিক কার্যক্রমে সহায়তা, নথিপত্র ব্যবস্থাপনা ও সামাজিক যোগাযোগে নিযুক্ত।',
    contactNote: 'Central Secretariat, Kolkata',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'exec-asst-sec-2',
    name: 'Snehasish Biswas',
    bengaliName: 'স্নেহাশিস বিশ্বাস',
    role: 'Asstt. Secretary',
    bengaliRole: 'সহকারী সম্পাদক',
    tier: 'Secretariat' as const,
    bio: 'Coordinates event logistics, student outreach, and youth fellowship programs across districts.',
    bengaliBio: 'সহকারী সম্পাদক হিসেবে বিভিন্ন কর্মসূচি পরিচালনা, শিক্ষার্থী ও যুব সমাজের সাথে সক্রিয় যোগাযোগ রক্ষা করেন।',
    contactNote: 'Central Secretariat, Kolkata',
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'exec-asst-treas-1',
    name: 'Ujjal Biswas',
    bengaliName: 'উজ্জ্বল বিশ্বাস',
    role: 'Asstt. Treasurer',
    bengaliRole: 'সহকারী কোষাধ্যক্ষ',
    tier: 'Secretariat' as const,
    bio: 'Assists in treasury management, daily maintenance accounts, hostel fee registers, and donor acknowledgments.',
    bengaliBio: 'সহকারী কোষাধ্যক্ষ হিসেবে দৈনন্দিন হিসাব পরীক্ষা, ছাত্রাবাস ব্যয় নিরীক্ষা ও অনুদান খতিয়ান পরিচালনায় যুক্ত।',
    contactNote: 'Finance Desk, Kolkata',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'exec-asst-treas-2',
    name: 'Mrinal Saha',
    bengaliName: 'মৃণাল সাহা',
    role: 'Asstt. Treasurer',
    bengaliRole: 'সহকারী কোষাধ্যক্ষ',
    tier: 'Secretariat' as const,
    bio: 'Supports statutory audit reconciliations, banking transactions, and annual financial statements.',
    bengaliBio: 'সহকারী কোষাধ্যক্ষ হিসেবে ব্যাংক লেনদেন, বার্ষিক আর্থিক বিবরণী ও অডিট কার্যক্রমে সহযোগিতা করেন।',
    contactNote: 'Finance Desk, Kolkata',
    imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80'
  },

  // 3. Vice Presidents
  {
    id: 'vp-uttam-khan',
    name: 'Uttam Khan',
    bengaliName: 'উত্তম খাঁ',
    role: 'Vice President',
    bengaliRole: 'সহ-সভাপতি',
    tier: 'VicePresident' as const,
    bio: 'Vice President of Bangiya Saha Samity, coordinating urban outreach, Kolkata general body meetings, and community assemblies.',
    bengaliBio: 'সমিতির সহ-সভাপতি হিসেবে কেন্দ্রীয় সম্মেলন ও মহানগরের সদস্যদের সাথে সমন্বয় সাধনে সক্রিয় ভূমিকা পালন করছেন।',
    contactNote: 'Kolkata Central Region',
    imageUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'vp-amiya-saha',
    name: 'Amiya Saha - Adv.',
    district: 'Birbhum',
    bengaliName: 'অমিয় সাহা (আইনজীবী)',
    bengaliDistrict: 'বীরভূম',
    role: 'Vice President (Birbhum)',
    bengaliRole: 'সহ-সভাপতি (বীরভূম)',
    tier: 'VicePresident' as const,
    bio: 'Advocate and Vice President heading legal aid counseling and district community development across Birbhum.',
    bengaliBio: 'আইনজীবী ও সহ-সভাপতি; বীরভূম জেলায় আইনি সহায়তা ও সামাজিক উন্নয়ন কার্যক্রমের দিকনির্দেশক।',
    contactNote: 'Birbhum District & Legal Cell',
    imageUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'vp-uddhab-saha',
    name: 'Uddhab Chandra Saha',
    district: 'Bankura',
    bengaliName: 'উদ্ধব চন্দ্র সাহা',
    bengaliDistrict: 'বাঁকুড়া',
    role: 'Vice President (Bankura)',
    bengaliRole: 'সহ-সভাপতি (বাঁকুড়া)',
    tier: 'VicePresident' as const,
    bio: 'Vice President guiding educational welfare and grassroots outreach in Bankura district and Western Rarh Bengal.',
    bengaliBio: 'বাঁকুড়া জেলায় শিক্ষার উদ্দেশ্যে সামাজিক সহায়তা (শুধুমাত্র আমাদের সম্প্রদায়ের জন্য), গ্রামীণ ছাত্রাবাস যোগাযোগ ও সামাজিক কার্যক্রমের সমন্বয়কারী সহ-সভাপতি।',
    contactNote: 'Bankura District Region',
    imageUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'vp-nikhilesh-khan',
    name: 'Nikhilesh Khan',
    bengaliName: 'নিখিলেশ খাঁ',
    role: 'Vice President',
    bengaliRole: 'সহ-সভাপতি',
    tier: 'VicePresident' as const,
    bio: 'Vice President steering regional unity, life membership drives, and community welfare initiatives.',
    bengaliBio: 'সহ-সভাপতি হিসেবে সামাজিক ঐক্য বৃদ্ধি ও আজীবন সদস্যপদ কার্যক্রমে নিবেদিতপ্রাণ।',
    contactNote: 'Regional Liaison Council',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'vp-hasi-saha',
    name: 'Smt. Hasi Saha',
    bengaliName: 'শ্রীমতী হাসি সাহা',
    role: 'Vice President',
    bengaliRole: 'সহ-সভাপতি',
    tier: 'VicePresident' as const,
    bio: 'Vice President championing women empowerment, female higher education priority, student hostel admissions, and family counseling.',
    bengaliBio: 'নারী উন্নয়ন, নারী উচ্চশিক্ষায় বিশেষ অগ্রাধিকার ও সামাজিক কল্যাণমূলক কার্যক্রমে বিশেষ নেতৃত্ব দিচ্ছেন সহ-সভাপতি শ্রীমতী হাসি সাহা।',
    contactNote: "Women's Empowerment Cell",
    imageUrl: '/members/hasi-saha.jpg'
  },
  {
    id: 'vp-sampad-mondal',
    name: 'Sampad Kr. Mondal',
    district: 'Hooghly',
    bengaliName: 'সম্পদ কুমার মণ্ডল',
    bengaliDistrict: 'হুগলি',
    role: 'Vice President (Hooghly)',
    bengaliRole: 'সহ-সভাপতি (হুগলি)',
    tier: 'VicePresident' as const,
    bio: 'Vice President coordinating community welfare and student mentoring programs in Hooghly district.',
    bengaliBio: 'হুগলি জেলায় সমাজকল্যাণ, ছাত্রছাত্রীদের দিকনির্দেশনা ও সাংগঠনিক সম্প্রসারণে নিবেদিত সহ-সভাপতি।',
    contactNote: 'Hooghly District Region',
    imageUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'vp-somnath-saha',
    name: 'Somnath Saha',
    bengaliName: 'সোমনাথ সাহা',
    role: 'Vice President',
    bengaliRole: 'সহ-সভাপতি',
    tier: 'VicePresident' as const,
    bio: 'Vice President guiding annual general conventions, civic representations, and cultural heritage documentation.',
    bengaliBio: 'বার্ষিক সম্মেলন পরিচালনা ও সাংস্কৃতিক ঐতিহ্য সংরক্ষণে সক্রিয় সহ-সভাপতি।',
    contactNote: 'South Bengal Coordination',
    imageUrl: 'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'vp-sadhan-mondal',
    name: 'Sadhan Mondal',
    district: 'Bankura',
    bengaliName: 'সাধন মণ্ডল',
    bengaliDistrict: 'বাঁকুড়া',
    role: 'Vice President (Bankura)',
    bengaliRole: 'সহ-সভাপতি (বাঁকুড়া)',
    tier: 'VicePresident' as const,
    bio: 'Vice President advancing grassroots community organization and rural student welfare in Bankura district.',
    bengaliBio: 'বাঁকুড়া জেলায় স্থানীয় স্তরে সামাজিক ঐক্য ও গ্রামীণ ছাত্রদের কল্যাণে নিয়োজিত সহ-সভাপতি।',
    contactNote: 'Bankura District Region',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80'
  },

  // 4. Notable Executive Committee Members
  {
    id: 'cm-pradip-mullick',
    name: 'Dr. Pradip Kumar Mullick',
    bengaliName: 'ডাঃ প্রদীপ কুমার মল্লিক',
    role: 'Executive Member (Medical Cell)',
    bengaliRole: 'কার্যনির্বাহী সদস্য (স্বাস্থ্য সেল)',
    tier: 'Committee' as const,
    bio: 'Executive committee member guiding community healthcare assistance, medical camps, and hostel student wellness.',
    bengaliBio: 'কার্যনির্বাহী সদস্য ও চিকিৎসক; গ্রামীণ শিক্ষার্থীদের স্বাস্থ্যসেবা ও সমাজের দুঃস্থ মানুষের চিকিৎসা সহায়তায় অগ্রণী।',
    contactNote: 'Healthcare & Medical Aid Desk',
    imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'cm-swarnova-nayek',
    name: 'Swarnova Nayek',
    district: 'Howrah',
    bengaliName: 'স্বর্ণাভ নায়ক',
    bengaliDistrict: 'হাওড়া',
    role: 'Executive Member (Howrah)',
    bengaliRole: 'কার্যনির্বাহী সদস্য (হাওড়া)',
    tier: 'Committee' as const,
    bio: 'Executive committee member coordinating youth initiatives, Social Help for Educational Purpose (Only for Our Community), and community outreach across Howrah.',
    bengaliBio: 'হাওড়া জেলার কার্যনির্বাহী সদস্য; তরুণ প্রজন্মকে সামাজিক কাজে উদ্বুদ্ধকরণ ও শিক্ষার উদ্দেশ্যে সামাজিক সহায়তার (শুধুমাত্র আমাদের সম্প্রদায়ের জন্য) সমন্বয়কারী।',
    contactNote: 'Howrah District Coordination',
    imageUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'cm-pijus-saha',
    name: 'Pijus Kanti Saha',
    district: '24 Pgs-N',
    bengaliName: 'পীযূষ কান্তি সাহা',
    bengaliDistrict: 'উত্তর ২৪ পরগনা',
    role: 'Executive Member (24 Pgs-N)',
    bengaliRole: 'কার্যনির্বাহী সদস্য (উত্তর ২৪ পরগনা)',
    tier: 'Committee' as const,
    bio: 'Executive committee member steering district liaison, caste certificate assistance, and member welfare in North 24 Parganas.',
    bengaliBio: 'উত্তর ২৪ পরগনার কার্যনির্বাহী সদস্য; এসসি শংসাপত্র ও স্থানীয় সদস্যদের কল্যাণে দায়িত্বরত।',
    contactNote: 'North 24 Parganas Liaison',
    imageUrl: '/members/pijus-kanti-saha.jpg',
    imagePosition: '50% 22%', // focus on the face in this tall portrait
  },
  {
    id: 'cm-prasanta-saha',
    name: 'Prasanta Kr. Saha',
    district: 'Burdwan-E',
    bengaliName: 'প্রশান্ত কুমার সাহা',
    bengaliDistrict: 'পূর্ব বর্ধমান',
    role: 'Executive Member (Burdwan-E)',
    bengaliRole: 'কার্যনির্বাহী সদস্য (পূর্ব বর্ধমান)',
    tier: 'Committee' as const,
    bio: 'Executive committee member organizing rural educational support and district coordination across East Burdwan.',
    bengaliBio: 'পূর্ব বর্ধমান জেলার কার্যনির্বাহী সদস্য; গ্রামীণ শিক্ষা ও সামাজিক সমন্বয়ক।',
    contactNote: 'East Burdwan Coordination',
    imageUrl: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=400&q=80'
  }
];

export const ORGANIZATIONAL_HIERARCHY = [
  {
    level: 'Tier 1: Advisory Board',
    bengaliLevel: 'প্রথম স্তর: উপদেষ্টা মণ্ডলী (Advisory Board)',
    desc: 'Led by Chairperson Mrs. Namita Saha (Ex. M.L.A) & Chief Advisor Krishna Kanta Saha (Kesto Da), providing supreme guiding principles, legislative counsel, and moral stewardship.',
    bengaliDesc: 'সভানেত্রী শ্রীমতী নমিতা সাহা (প্রাক্তন বিধায়ক) ও প্রধান উপদেষ্টা কৃষ্ণ কান্ত সাহা (কেষ্ট দা)-র নেতৃত্বে নীতি নির্ধারণ, সাংবিধানিক পথপ্রদর্শন ও অভিভাবকত্ব।'
  },
  {
    level: 'Tier 2: Apex Office Bearers (Central Administration)',
    bengaliLevel: 'দ্বিতীয় স্তর: কেন্দ্রীয় পদাধিকারী পরিষদ (Apex Executive)',
    desc: 'President Bikash Biswas, Secretary Subir Saha, and Treasurer Ashis Kumar Saha holding primary executive authority over the 52B Indian Mirror Street Central Office, student hostel, Guest Room facility, and finances.',
    bengaliDesc: 'সভাপতি বিকাশ বিশ্বাস, সম্পাদক সুবীর সাহা ও কোষাধ্যক্ষ আশিস কুমার সাহা—কেন্দ্রীয় কার্যালয় পরিচালনা, ছাত্রাবাস ও অতিথি কক্ষ (Guest Room) প্রশাসন ও আর্থিক ব্যবস্থার প্রধান চালিকাশক্তি।'
  },
  {
    level: 'Tier 3: Vice Presidents’ Council & Joint Secretariat',
    bengaliLevel: 'তৃতীয় স্তর: সহ-সভাপতি পরিষদ ও সহকারী সচিবালয়',
    desc: '8 Regional Vice Presidents (covering Birbhum, Bankura, Hooghly, etc.) alongside Assistant Secretaries (Sandip Khan, Snehasish Biswas) and Assistant Treasurers (Ujjal Biswas, Mrinal Saha).',
    bengaliDesc: '৮ জন সহ-সভাপতি (বীরভূম, বাঁকুড়া, হুগলি ইত্যাদি অঞ্চল), সহকারী সম্পাদকবৃন্দ (সন্দীপ খাঁ, স্নেহাশিস বিশ্বাস) এবং সহকারী কোষাধ্যক্ষবৃন্দ (উজ্জ্বল বিশ্বাস, মৃণাল সাহা)।'
  },
  {
    level: 'Tier 4: General Executive Committee (16 Members)',
    bengaliLevel: 'চতুর্থ স্তর: কার্যনির্বাহী পরিষদ (১৬ জন সদস্য)',
    desc: '16 elected Executive Committee members representing districts across West Bengal (Bankura, Burdwan-E, Howrah, North 24 Parganas, Kolkata) managing healthcare, hostel, Guest Room, Social Help for Educational Purpose (Only for Our Community), and legal desks.',
    bengaliDesc: 'পশ্চিমবঙ্গের বিভিন্ন জেলার ১৬ জন নির্বাচিত সদস্য—যাঁরা ছাত্রাবাস, অতিথি কক্ষ, শিক্ষার উদ্দেশ্যে সামাজিক সহায়তা (শুধুমাত্র আমাদের সম্প্রদায়ের জন্য), স্বাস্থ্য সহায়তা ও আইনি সেল পরিচালনায় প্রত্যক্ষ দায়িত্ব পালন করেন।'
  },
  {
    level: 'Tier 5: District Liaison Councils & Life Members',
    bengaliLevel: 'পঞ্চম স্তর: জেলা সমন্বয় সেল ও সাধারণ আজীবন সদস্যমণ্ডলী',
    desc: 'Local community network connecting Sunri community families across 23 districts of West Bengal, providing SC certificate facilitation and exercising democratic voting rights.',
    bengaliDesc: 'পশ্চিমবঙ্গের ২৩টি জেলায় স্থানীয় স্তরের সমন্বয়, তপশিলি জাতি শংসাপত্র সহায়তা ও আজীবন সদস্যদের সক্রিয় অংশগ্রহণ।'
  }
];

export const CULTURAL_HERITAGE_ITEMS = [
  {
    id: 'history-origin',
    title: 'Historical Origin & The 1935 Government of India Act',
    bengaliTitle: 'ঐতিহাসিক পটভূমি ও ১৯৩৫ সালের ভারত শাসন আইন',
    era: 'Pre-Independence & 1935',
    bengaliEra: 'স্বাধীনতা-পূর্ব ও ১৯৩৫',
    summary: 'The Sunri community carries a deep socio-cultural history in Bengal. Designated as a Scheduled Caste under the Government of India Act of 1935.',
    bengaliSummary: 'ব্রিটিশ প্রশাসন প্রণীত ১৯৩৫ সালের ভারত শাসন আইনের অধীনে অর্থনৈতিক ও সামাজিকভাবে অনগ্রসর শুঁড়ি সমাজকে তপশিলি জাতি হিসেবে ঘোষণা করা হয়।',
    culturalSignificance: 'Formally established community identity in public statute, leading directly to the founding of Bangiya Saha Samity in 1934.',
    bengaliCulturalSignificance: '১৯৩৪ সালে বঙ্গীয় সাহা সমিতির প্রতিষ্ঠা এবং সমাজে শিক্ষার প্রসারে এই আইন ঐতিহাসিক ভূমিকা রাখে।',
    details: [
      'Historical vocational classification associated with trade and agro-craft',
      'Widespread rural population engaged as agricultural workers and laborers',
      'British notification in 1935 providing first statutory recognition of socio-economic backwardness',
      'Congregation of distinguished community elders at 77 Maniktala Street in 1934 to form an enduring protective society'
    ],
    bengaliDetails: [
      'ঐতিহ্যগত পেশা ও কৃষিভিত্তিক গ্রামীণ জীবনের দীর্ঘ ঐতিহ্য',
      'চরম দারিদ্র্য ও অনগ্রসরতা দূরীকরণে ব্রিটিশ গেজেট বিজ্ঞপ্তি',
      '১৯৩৪ সালে মা জগৎ জননী মন্দিরে শুঁড়ি সমাজের বিশিষ্ট ব্যক্তিবর্গের সমন্বয়',
      'গ্রামীণ ছাত্রদের উচ্চশিক্ষার জন্য কলকাতায় আবাসিক ব্যবস্থা করা হয়'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ambedkar-constitutional',
    title: 'Dr. B. R. Ambedkar’s Constitutional Inclusion (1950)',
    bengaliTitle: 'ড. বাবাসাহেব আম্বেদকর কর্তৃক সংবিধানে অন্তর্ভুক্তি (১৯৫০)',
    era: '1950 & 1956 Amendment',
    bengaliEra: '১৯৫০ ও ১৯৫৬ সংশোধন',
    summary: 'Babasaheb Dr. B. R. Ambedkar enshrined the Sunri community in the Constitution (Scheduled Castes) Order, 1950.',
    bengaliSummary: 'স্বাধীন ভারতের সংবিধানে বাবাসাহেব ড. আম্বেদকর শুঁড়ি সম্প্রদায়কে স্থায়ীভাবে তপশিলি তালিকায় অন্তর্ভুক্ত করেন।',
    culturalSignificance: 'Guaranteed affirmative representation in legislature, public services, and universities.',
    bengaliCulturalSignificance: 'শিক্ষা, সরকারি চাকরি ও আইনসভায় স্থায়ী সংরক্ষণের অধিকার সুনিশ্চিত করে।',
    details: [
      'Inclusion under The Constitution (Scheduled Castes) Order, 1950',
      'Later codified in 1956 as Sunri (Excluding Saha) following state re-organizations',
      'Establishment of the permanent Central Office at 52B Indian Mirror Street in 1956',
      'Four-storey building construction funded through community donations and well-wishers'
    ],
    bengaliDetails: [
      '১৯৫০ সালের সংবিধান আদেশে তপশিলি জাতির স্বীকৃতি',
      '১৯৫৬ সালে রাজ্য পুনর্গঠনের পর শ্রেণীবিভাগ সংরক্ষণ',
      '১৯৫৬ সালে সদস্যদের সহযোগিতায় ৫২বি ইন্ডিয়ান মিরর স্ট্রিটে স্থায়ী জমি ক্রয়',
      'চারতলা ভবন নির্মাণ ও স্থায়ী কেন্দ্রীয় কার্যালয় প্রতিষ্ঠা'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'supreme-court-triumph',
    title: 'Supreme Court Stays & Victory of September 5, 2000',
    bengaliTitle: 'সুপ্রিম কোর্টে আইনি লড়াই ও ৫ সেপ্টেম্বর ২০০০-এর ঐতিহাসিক জয়',
    era: '1965 – 2000',
    bengaliEra: '১৯৬৫ – ২০০০',
    summary: 'A 35-year legal resistance against arbitrary stays on Scheduled Caste certificate issuance.',
    bengaliSummary: 'সাহা শুঁড়ি সম্প্রদায়ের শংসাপত্র প্রদান বন্ধের বিরুদ্ধে ৩৫ বছরের দীর্ঘ আইনি লড়াই ও সুপ্রিম কোর্টের চূড়ান্ত রায়।',
    culturalSignificance: 'Landmark victory restoring democratic and educational rights to tens of thousands of Sunri youths.',
    bengaliCulturalSignificance: 'হাজার হাজার ছাত্রছাত্রীর তপশিলি জাতি শংসাপত্র প্রাপ্তির পথ সুগম হয়।',
    details: [
      'First stay in 1965 and second stay in 1996 challenging certificate issuance to Saha Sunris',
      'Samity mobilised legal defence in the Supreme Court of India',
      'Decisive verdict in favour of the community',
      'Government circular issued on Sept 5, 2000 under Chief Secretary following MLA Sadhan Pande’s intervention'
    ],
    bengaliDetails: [
      '১৯৬৫ ও ১৯৯৬ সালে সুপ্রিম কোর্টের মাধ্যমে শংসাপত্র স্থগিতের অপচেষ্টা',
      'বঙ্গীয় সাহা সমিতির সক্রিয় প্রতিরোধ ও সুপ্রিম কোর্টে জয়',
      'তৎকালীন বিধায়ক শ্রী সাধন পাণ্ডের ঐকান্তিক মধ্যস্থতা',
      '৫ সেপ্টেম্বর ২০০০ রাজ্য মুখ্যসচিবের নির্দেশে শংসাপত্র পুনরায় চালু'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1453733197781-704fa5988299?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'festivals-rituals',
    title: 'Festivals, Cultural Traditions & Maa Jagat Janani',
    bengaliTitle: 'উৎসব, ঐতিহ্য ও শ্রীশ্রী মা জগৎ জননী পূজা',
    era: 'Living Tradition',
    bengaliEra: 'জীবন্ত ঐতিহ্য',
    summary: 'Celebration of sacred community observances centered around Maa Jagat Janani, Saraswati Puja, and Ambedkar Jayanti.',
    bengaliSummary: 'মা জগৎ জননী ও জগদ্ধাত্রী পূজা, সরস্বতী পূজা, আম্বেদকর জয়ন্তী ও পহেলা বৈশাখ উদযাপন।',
    culturalSignificance: 'Strengthens community fraternity and cultural identity across generations.',
    bengaliCulturalSignificance: 'প্রজন্মের পর প্রজন্ম ধরে পারস্পরিক সৌহার্দ্য ও সাংস্কৃতিক ঐক্য অক্ষুণ্ণ রাখে।',
    details: [
      'Foundational worship at Maa Jagat Janani Temple (77 Maniktala Street)',
      'Hostel Saraswati Puja organized annually by rural resident students',
      'Babasaheb Dr. B. R. Ambedkar Jayanti observed with constitutional awareness programs',
      'Poila Boishakh cultural get-togethers and scholarly felicitations'
    ],
    bengaliDetails: [
      '৭৭ মানিকতলা স্ট্রিটের মা জগৎ জননী মন্দিরে ঐতিহ্যবাহী পূজা',
      'ছাত্রাবাসের আবাসিক শিক্ষার্থীদের পরিচালনায় সরস্বতী পূজা',
      'বাবাসাহেব আম্বেদকর জয়ন্তী ও সংবিধান সচেতনতা দিবস পালন',
      'পহেলা বৈশাখ ও মিলনমেলা উৎসব'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1514222709107-a180c68d72b4?auto=format&fit=crop&w=800&q=80'
  }
];

export const UPCOMING_EVENTS = [
  {
    id: 'event-1',
    title: 'Annual State Convention & Community Get-Together 2026',
    bengaliTitle: 'বার্ষিক রাজ্য সম্মেলন ও শুঁড়ি সমাজের মিলনমেলা ২০২৬',
    date: 'April 19, 2026',
    bengaliDate: '১৯ এপ্রিল ২০২৬',
    time: '10:30 AM – 5:00 PM',
    bengaliTime: 'সকাল ১০:৩০ – বিকাল ৫:০০',
    venue: 'Vivekananda Society Hall, 151 Vivekananda Rd, Kolkata – 700006',
    bengaliVenue: 'বিবেকানন্দ সোসাইটি হল, ১৫১ বিবেকানন্দ রোড, কলকাতা – ৭০০০১৬',
    category: 'Upcoming' as const,
    description: 'Special plenary session of the Sunri community to review student hostel development, district outreach, and ongoing constitutional representations in New Delhi.',
    bengaliDescription: 'ছাত্রাবাস উন্নয়ন, জেলা শাখা সম্প্রসারণ ও নয়া দিল্লিতে সাংবিধানিক অধিকার বিষয়ে শুঁড়ি সমাজের বিশেষ সম্মেলন।',
    attendees: '500+ Community Delegates Expected',
    bengaliAttendees: '৫০০+ সমাজের প্রতিনিধিবৃন্দ',
    isFeatured: true
  },
  {
    id: 'event-2',
    title: 'Dr. B. R. Ambedkar Commemorative Lecture & Youth Career Workshop',
    bengaliTitle: 'ড. বাবাসাহেব আম্বেদকর স্মারক বক্তৃতা ও যুব কর্মশালা',
    date: 'May 10, 2026',
    bengaliDate: '১০ মে ২০২৬',
    time: '2:00 PM – 6:00 PM',
    bengaliTime: 'দুপুর ২:০০ – সন্ধ্যা ৬:০০',
    venue: 'Central Office Auditorium, 52B Indian Mirror Street, Kolkata – 700013',
    bengaliVenue: 'কেন্দ্রীয় কার্যালয় প্রেক্ষাগৃহ, ৫২বি ইন্ডিয়ান মিরর স্ট্রিট, কলকাতা – ৭০০০১৩',
    category: 'Upcoming' as const,
    description: 'Career counseling for Sunri college students, guidance on West Bengal Civil Service (WBCS) examinations, and digital SC certificate verification.',
    bengaliDescription: 'কলেজের ছাত্রছাত্রীদের জন্য কর্মমুখী প্রশিক্ষণ, ডব্লিউবিসিএস পরীক্ষার প্রস্তুতি ও ডিজিটাল কাস্ট সার্টিফিকেট সংক্রান্ত সহায়তা।',
    attendees: 'Students & Youth',
    bengaliAttendees: 'কলেজ শিক্ষার্থী ও যুব সমাজ'
  },
  {
    id: 'event-3',
    title: 'Social Help for Educational Purpose (Only for Our Community) & Book Distribution',
    bengaliTitle: 'শিক্ষার উদ্দেশ্যে সামাজিক সহায়তা (শুধুমাত্র আমাদের সম্প্রদায়ের জন্য) ও পাঠ্যপুস্তক বিতরণ',
    date: 'June 21, 2026',
    bengaliDate: '২১ জুন ২০২৬',
    time: '11:00 AM – 3:30 PM',
    bengaliTime: 'সকাল ১১:০০ – বিকাল ৩:৩০',
    venue: 'Student Hostel Annex, 52B Indian Mirror Street (4th Floor), Kolkata',
    bengaliVenue: 'ছাত্রাবাস প্রাঙ্গণ, ৫২বি ইন্ডিয়ান মিরর স্ট্রিট (৪র্থ তল), কলকাতা',
    category: 'Upcoming' as const,
    description: 'Distribution of semester book grants and Social Help for Educational Purpose (Only for Our Community) for undergraduate and postgraduate students, highlighting a special priority for female higher education.',
    bengaliDescription: 'শুধুমাত্র আমাদের সম্প্রদায়ের জন্য উচ্চশিক্ষারত ছাত্রছাত্রীদের শিক্ষার উদ্দেশ্যে সামাজিক সহায়তা ও পাঠ্যপুস্তক বিতরণ, যেখানে নারী উচ্চশিক্ষায় বিশেষ অগ্রাধিকার দেওয়া হয়।',
    attendees: 'Community Students & Guardians',
    bengaliAttendees: 'সম্প্রদায়ের শিক্ষার্থী ও অভিভাবকবৃন্দ'
  }
];

export const PAST_EVENTS = [
  {
    id: 'past-1',
    title: 'Historic Sunri Community Get-Together at Vivekananda Society Hall',
    bengaliTitle: 'বিবেকানন্দ সোসাইটি হলে শুঁড়ি সমাজের ঐতিহাসিক মিলনমেলা',
    date: 'March 24, 2019',
    bengaliDate: '২৪ মার্চ ২০১৯',
    venue: '151 Vivekananda Road, Kolkata – 700006',
    bengaliVenue: '১৫১ বিবেকানন্দ রোড, কলকাতা – ৭০০০১৬',
    category: 'Past' as const,
    description: 'Grand assembly convened by the Executive Committee, celebrating the hostel expansion to 50 students, community welfare schemes, and social advocacy for community welfare.',
    bengaliDescription: 'কার্যনির্বাহী সমিতির উদ্যোগে আয়োজিত ঐতিহাসিক মহাসম্মেলন, যেখানে ছাত্রাবাস ৫০ আসনে সম্প্রসারণ ও রাজ্যজুড়ে সামাজিক কল্যাণমূলক উদ্যোগের ঘোষণা হয়।'
  },
  {
    id: 'past-2',
    title: 'Female Student Wing Inauguration at 52B Indian Mirror Street',
    bengaliTitle: '৫২বি ইন্ডিয়ান মিরর স্ট্রিটে ছাত্রী শাখার শুভ উদ্বোধন',
    date: 'August 15, 2018',
    bengaliDate: '১৫ আগস্ট ২০১৮',
    venue: 'Central Office Building, 52B Indian Mirror Street, Kolkata – 700013',
    bengaliVenue: 'কেন্দ্রীয় কার্যালয় ভবন, ৫২বি ইন্ডিয়ান মিরর স্ট্রিট, কলকাতা – ৭০০০১৩',
    category: 'Past' as const,
    description: 'Dedicated residential arrangements made for female college students pursuing higher studies in Kolkata, fulfilling the society mission of special priority for female higher education.',
    bengaliDescription: 'কলকাতায় কলেজে পাঠরত দূরবর্তী জেলার ছাত্রীদের জন্য পৃথক নিরাপদ আবাসিক ব্যবস্থা করা হয়, যা নারী উচ্চশিক্ষায় আমাদের বিশেষ অগ্রাধিকারের প্রতীক।'
  },
  {
    id: 'past-3',
    title: 'SC Certificate Restoration Declaration Rally (Historic Sept 5, 2000)',
    bengaliTitle: 'তপশিলি জাতি শংসাপত্র পুনরুদ্ধার সংবর্ধনা সমাবেশ (২০০০)',
    date: 'September 5, 2000',
    bengaliDate: '৫ সেপ্টেম্বর ২০০০',
    venue: '77 Maniktala Street & Kolkata Secretariat',
    bengaliVenue: '৭৭ মানিকতলা স্ট্রিট ও কলকাতা মহাকরণ চত্বর',
    category: 'Past' as const,
    description: 'Celebration of the Supreme Court favorable verdict and West Bengal Chief Secretary directive restoring issuance of SC certificates under MLA Sadhan Pande.',
    bengaliDescription: 'সুপ্রিম কোর্টের রায়ের পর রাজ্য সরকারের নির্দেশিকা জারির মাধ্যমে শংসাপত্র পুনরুদ্ধার উপলক্ষে বিজয় সমাবেশ।'
  }
];

export const LATEST_NEWS_UPDATES = [
  {
    id: 'news-1',
    title: 'Comprehensive Upgradation of Central Student Hostel & Study Facilities',
    bengaliTitle: 'কেন্দ্রীয় ছাত্রাবাস ও পাঠাগার সুযোগ-সুবিধার সার্বিক মানোন্নয়ন',
    date: 'Official Notice',
    bengaliDate: 'অফিসিয়াল নোটিশ',
    category: 'Announcement' as const,
    bengaliCategory: 'বিজ্ঞপ্তি',
    summary: 'The Executive Committee announces upgraded hostel amenities and digital study resources for collegiate students.',
    bengaliSummary: 'কার্যনির্বাহী সমিতির উদ্যোগে ছাত্রাবাসের সুযোগ-সুবিধা ও ডিজিটাল অধ্যয়ন কেন্দ্রের মানোন্নয়ন সম্পন্ন।',
    content: 'Bangiya Saha Samity has completed modernization works at the four-storey Central Office, student hostel, and Guest Room for community members at 52B Indian Mirror Street. Residential arrangements are made for rural students pursuing higher studies in Kolkata, alongside dedicated quiet study rooms and enhanced welfare support.',
    bengaliContent: '৫২বি ইন্ডিয়ান মিরর স্ট্রিটের চারতলা কেন্দ্রীয় কার্যালয়ে গ্রামীণ শিক্ষার্থীদের জন্য আবাসিক ব্যবস্থা করা হয় এবং উন্নত স্টাডি হল, বিশুদ্ধ পানীয় জল ও সমাজের সদস্যদের জন্য অতিথি কক্ষ (Guest Room) সুবিধা চালু রয়েছে।',
    author: 'Executive Committee',
    bengaliAuthor: 'কার্যনির্বাহী সমিতি',
    readTime: '3 min read',
    bengaliReadTime: '৩ মিনিট পাঠ',
    badge: 'Official Notice',
    bengaliBadge: 'অফিসিয়াল নোটিশ'
  },
  {
    id: 'news-2',
    title: 'Delegation to National Commission for Scheduled Castes in New Delhi',
    bengaliTitle: 'নয়া দিল্লিতে জাতীয় তপশিলি জাতি কমিশনে প্রতিনিধি দলের স্মারকলিপি',
    date: 'Legal Defense Cell',
    bengaliDate: 'আইনি সেল বিজ্ঞপ্তি',
    category: 'Press Release' as const,
    bengaliCategory: 'প্রেস রিলিজ',
    summary: 'Formal memorandum submitted concerning Union Ministry of Home Affairs ambiguous remarks on "Sunri (Excluding Saha)".',
    bengaliSummary: 'কেন্দ্রীয় তালিকায় "Sunri (Excluding Saha)" সংক্রান্ত বিভ্রান্তি দূর করতে নয়া দিল্লিতে আনুষ্ঠানিক স্মারকলিপি পেশ।',
    content: 'A high-level Samity delegation held meetings with the Chairman of the National Commission for Scheduled Castes in New Delhi and previously with the Minister for Backward Classes Welfare Shri Churamoni Mahato, urging swift corrective notifications so no eligible family is harassed during digital verification.',
    bengaliContent: 'নয়া দিল্লিতে জাতীয় কমিশনের চেয়ারম্যানের সাথে বৈঠকে স্পষ্ট নির্দেশিকা জারির দাবি জানানো হয় যাতে কোনো শুঁড়ি পরিবার বিভ্রান্তির শিকার না হয়।',
    author: 'Legal Advocacy Wing',
    bengaliAuthor: 'আইনি সুরক্ষা সেল',
    readTime: '4 min read',
    bengaliReadTime: '৪ মিনিট পাঠ',
    badge: 'Constitutional Rights',
    bengaliBadge: 'সাংবিধানিক অধিকার'
  },
  {
    id: 'news-3',
    title: 'Hostel Admissions Open for Rural Students (50 Capacity with Female Wing)',
    bengaliTitle: 'গ্রামীণ ছাত্রছাত্রীদের জন্য ছাত্রাবাসে ভর্তি প্রক্রিয়া শুরু (৫০ আসন)',
    date: 'Academic Session 2026',
    bengaliDate: 'শিক্ষাবর্ষ ২০২৬',
    category: 'Community News' as const,
    bengaliCategory: 'সমাজ সংবাদ',
    summary: 'Applications invited from underprivileged students from West Bengal districts admitted to colleges in Kolkata.',
    bengaliSummary: 'কলকাতার কলেজ ও বিশ্ববিদ্যালয়ে পাঠরত দূরবর্তী জেলার শিক্ষার্থীদের জন্য স্বল্পব্যয়ে আবাসনের আবেদন শুরু।',
    content: 'The 4th floor hostel is a sanctuary where clean lodging arrangements are made alongside study desks, electricity, and community mentorship. Additionally, Guest Room facilities are available for community members visiting Kolkata.',
    bengaliContent: 'পড়াশোনার সুব্যবস্থাসহ ছাত্রছাত্রীদের আবাসিক ব্যবস্থা করা হয় এবং আসন শূন্য থাকলে নিয়মানুযায়ী আবেদন করা যায়। পাশাপাশি সমাজের সদস্যদের জন্য অতিথি কক্ষের (Guest Room) সুবিধাও রয়েছে।',
    author: 'Hostel Superintendent',
    bengaliAuthor: 'ছাত্রাবাস তত্ত্বাবধায়ক',
    readTime: '2 min read',
    bengaliReadTime: '২ মিনিট পাঠ',
    badge: 'Admissions',
    bengaliBadge: 'ভর্তি প্রক্রিয়া'
  },
  {
    id: 'news-4',
    title: 'Quarterly Research Journal & Community Bulletin: Volume 48 Released',
    bengaliTitle: 'ত্রৈমাসিক গবেষণাধর্মী পত্রিকা ও বুলেটিন: ৪৮তম সংখ্যা প্রকাশিত',
    date: 'Publication Wing',
    bengaliDate: 'প্রকাশনা সেল',
    category: 'Newsletter' as const,
    bengaliCategory: 'বুলেটিন',
    summary: 'Featuring articles on Sunri community history, constitutional reservation jurisprudence, and student academic honors.',
    bengaliSummary: 'শুঁড়ি সমাজের ইতিহাস, আইনগত অধিকার ও কৃতি শিক্ষার্থীদের সাফল্যের বিবরণ সম্বলিত নতুন সংখ্যা প্রকাশিত।',
    content: 'Available for digital download or collection from the library room at our Central Office, 52B Indian Mirror Street, Kolkata – 700013.',
    bengaliContent: 'কেন্দ্রীয় কার্যালয়ের পাঠাগার থেকে সরাসরি অথবা অনলাইনে পিডিএফ আকারে সংগ্রহের সুব্যবস্থা রয়েছে।',
    author: 'Editorial Board',
    bengaliAuthor: 'সম্পাদনা পর্ষদ',
    readTime: '5 min read',
    bengaliReadTime: '৫ মিনিট পাঠ',
    badge: 'Publication',
    bengaliBadge: 'প্রকাশনা',
    downloadUrl: '#'
  }
];

export const GALLERY_ITEMS = [
  {
    id: 'gal-1',
    title: 'Central Office, Student Hostel & Guest Room at 52B Indian Mirror Street',
    bengaliTitle: '৫২বি ইন্ডিয়ান মিরর স্ট্রিটে কেন্দ্রীয় কার্যালয়, ছাত্রাবাস ও অতিথি কক্ষ',
    category: 'Photos' as const,
    bengaliCategory: 'আলোকচিত্র',
    imageUrl: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80',
    description: 'The renovated four-storeyed Central Office building in Kolkata housing offices, library, 50-student residential hostel arrangements, and a Guest Room facility for community members.',
    bengaliDescription: 'কলকাতায় অবস্থিত চারতলা ভবন—যেখানে কেন্দ্রীয় কার্যালয়, পাঠাগার, ৫০ জন শিক্ষার্থীর আবাসিক ব্যবস্থা ও সমাজের সদস্যদের জন্য অতিথি কক্ষ (Guest Room) রয়েছে।',
    date: 'Established 1956 • Renovated 2018–2022',
    bengaliDate: 'স্থাপিত ১৯৫৬ • সংস্কার ২০১৮–২০২২',
    location: '52B, Indian Mirror Street, Kolkata – 700013 (Opp. G.D. Hospital, Taltala)',
    bengaliLocation: '৫২বি, ইন্ডিয়ান মিরর স্ট্রিট, কলকাতা – ৭০০০১৩ (জি.ডি. হাসপাতালের বিপরীতে, তালতলা)'
  },
  {
    id: 'gal-2',
    title: 'Foundational Birthplace: Maa Jagat Janani Temple',
    bengaliTitle: 'ঐতিহাসিক জন্মস্থান: শ্রীশ্রী মা জগৎ জননী মন্দির',
    category: 'Cultural Programs' as const,
    bengaliCategory: 'সাংস্কৃতিক',
    imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    description: 'The historic site in Simla, North Kolkata where distinguished community elders founded Bangiya Saha Samity in 1934.',
    bengaliDescription: '১৯৩৪ সালে যে পবিত্র স্থানে সমাজের বিশিষ্ট ব্যক্তিবর্গ বঙ্গীয় সাহা সমিতির সূচনা করেছিলেন।',
    date: 'Founded 1934 (Regd. 1936–37)',
    bengaliDate: 'প্রতিষ্ঠা ১৯৩৪ (নিবন্ধন ১৯৩৬-৩৭)',
    location: '77, Maniktala Street, Kolkata – 700006 (Simla)',
    bengaliLocation: '৭৭, মানিকতলা স্ট্রিট, কলকাতা – ৭০০০১৬ (সিমলা)'
  },
  {
    id: 'gal-3',
    title: 'Annual State Get-Together & Convention at Vivekananda Society Hall',
    bengaliTitle: 'বিবেকানন্দ সোসাইটি হলে শুঁড়ি সমাজের বার্ষিক সম্মেলন',
    category: 'Community Activities' as const,
    bengaliCategory: 'সমাজ কর্মকাণ্ড',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    description: 'Community members from across 23 districts gathering to celebrate unity, student awards, and civic progress.',
    bengaliDescription: 'পশ্চিমবঙ্গের বিভিন্ন জেলা থেকে সমবেত সদস্যদের নিয়ে মহা সম্মেলন ও ছাত্র সংবর্ধনা।',
    date: 'March 24, 2019 & Annual Assemblies',
    bengaliDate: '২৪ মার্চ ২০১৯ ও বার্ষিক সমাবেশ',
    location: 'Vivekananda Society Hall, Kolkata',
    bengaliLocation: 'বিবেকানন্দ সোসাইটি হল, কলকাতা'
  },
  {
    id: 'gal-4',
    title: 'Hostel Students Academic Study Circle & Library',
    bengaliTitle: 'ছাত্রাবাসের অধ্যয়ন চক্র ও পাঠাগার কার্যক্রম',
    category: 'Community Activities' as const,
    bengaliCategory: 'সমাজ কর্মকাণ্ড',
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
    description: 'Rural collegiate students in Kolkata utilizing the quiet study room, reference books, and academic counseling.',
    bengaliDescription: 'দূরবর্তী জেলার কলেজ শিক্ষার্থীদের পড়াশোনা ও প্রতিযোগিতামূলক পরীক্ষার প্রস্তুতি।',
    date: 'Active Daily',
    bengaliDate: 'নিয়মিত পরিচালিত',
    location: '3rd & 4th Floor, 52B Indian Mirror Street',
    bengaliLocation: '৩য় ও ৪র্থ তল, ৫২বি ইন্ডিয়ান মিরর স্ট্রিট'
  },
  {
    id: 'gal-5',
    title: 'Saraswati Puja & Cultural Celebration by Hostel Residents',
    bengaliTitle: 'ছাত্রাবাসে ঐতিহ্যবাহী সরস্বতী পূজা ও সাংস্কৃতিক উৎসব',
    category: 'Cultural Programs' as const,
    bengaliCategory: 'সাংস্কৃতিক',
    imageUrl: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=800&q=80',
    description: 'Traditional celebration of art, learning, and cultural fellowship organized by student residents and members.',
    bengaliDescription: 'বিদ্যার দেবী মা সরস্বতীর আরাধনা এবং ছাত্রছাত্রীদের সাংস্কৃতিক পরিবেশনা।',
    date: 'Annual Vasant Panchami',
    bengaliDate: 'বার্ষিক বসন্ত পঞ্চমী',
    location: 'Central Courtyard, 52B Indian Mirror Street',
    bengaliLocation: 'কেন্দ্রীয় প্রাঙ্গণ, ৫২বি ইন্ডিয়ান মিরর স্ট্রিট'
  },
  {
    id: 'gal-6',
    title: 'Historic Legal Archiving & Video Documentary on Sept 5, 2000',
    bengaliTitle: 'ভিডিও তথ্যচিত্র: ২০০০ সালের সুপ্রিম কোর্টের ঐতিহাসিক বিজয়',
    category: 'Videos' as const,
    bengaliCategory: 'ভিডিও ও তথ্যচিত্র',
    imageUrl: 'https://images.unsplash.com/photo-1453733197781-704fa5988299?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://www.youtube.com',
    description: 'Archival documentation of the 35-year legal campaign leading to the Supreme Court order and restoration circular.',
    bengaliDescription: 'আইনি বিজয়ের নথিপত্র এবং তৎকালীন বিধায়ক শ্রী সাধন পাণ্ডের হস্তক্ষেপে সরকারি নির্দেশিকার ইতিহাস।',
    date: 'Sept 5, 2000 Archive',
    bengaliDate: '৫ সেপ্টেম্বর ২০০০ আর্কাইভ',
    location: 'Supreme Court of India & State Secretariat',
    bengaliLocation: 'ভারতের সুপ্রিম কোর্ট ও রাজ্য সচিবালয়'
  }
];

export const SPONSORSHIP_PROGRAMS = [
  {
    id: 'spon-hostel-bed',
    title: 'Sponsor a Rural Student Hostel Bed (Annual)',
    bengaliTitle: 'গ্রামীণ ছাত্রের বার্ষিক আবাসন পৃষ্ঠপোষকতা',
    amount: 18000,
    frequency: 'Per Student / Year',
    bengaliFrequency: 'প্রতি ছাত্র / বার্ষিক',
    description: 'Makes residential arrangements for year-round subsidized lodging, study desk, electricity, and drinking water at 52B Indian Mirror Street.',
    bengaliDescription: '৫২বি ভবনে ১ জন দরিদ্র গ্রামীণ ছাত্রের সারাবছরের থাকা, বিদ্যুৎ ও পড়াশোনার খরচ বহন করে।'
  },
  {
    id: 'spon-female-scholarship',
    title: 'Social Help for Educational Purpose (Only for Our Community) — Female Higher Education',
    bengaliTitle: 'শিক্ষার উদ্দেশ্যে সামাজিক সহায়তা (শুধুমাত্র আমাদের সম্প্রদায়ের জন্য) — নারী উচ্চশিক্ষা',
    amount: 10000,
    frequency: 'Only for Our Community',
    bengaliFrequency: 'শুধুমাত্র আমাদের সম্প্রদায়ের জন্য',
    description: 'Direct educational support strictly Only for Our Community, with a special priority for female higher education tuition and textbooks.',
    bengaliDescription: 'শুধুমাত্র আমাদের সম্প্রদায়ের জন্য প্রদত্ত শিক্ষাগত সামাজিক সহায়তা, যেখানে নারী উচ্চশিক্ষায় বিশেষ অগ্রাধিকার দেওয়া হয়।'
  },
  {
    id: 'spon-library-endowment',
    title: 'Community Library & Research Publication Fund',
    bengaliTitle: 'পাঠাগার ও গবেষণা পুস্তিকা প্রকাশনা তহবিল',
    amount: 5000,
    frequency: 'Per Volume Grant',
    bengaliFrequency: 'প্রতি প্রকাশনা অনুদান',
    description: 'Funds the printing of quarterly community journals, pamphlets, and archival historical research on the Sunri community.',
    bengaliDescription: 'সামাজিক ইতিহাস, অধিকার বিষয়ক পুস্তিকা মুদ্রণ ও পাঠাগারের নতুন বই ক্রয়ে ব্যবহৃত হয়।'
  }
];

export const VOLUNTEER_ROLES = [
  {
    id: 'vol-academic-tutor',
    title: 'Student Academic Tutor & Mentor',
    bengaliTitle: 'ছাত্রাবাসের একাডেমিক পরামর্শদাতা',
    commitment: '2-4 hours / week',
    bengaliCommitment: 'সপ্তাহে ২-৪ ঘণ্টা',
    description: 'Guide resident collegiate students in English, Mathematics, Science, or Civil Service entrance examinations.',
    bengaliDescription: 'ছাত্রাবাসের শিক্ষার্থীদের সরকারি চাকরির পরীক্ষা ও সাধারণ পাঠ্যক্রমে দিকনির্দেশনা প্রদান।'
  },
  {
    id: 'vol-legal-advocacy',
    title: 'Legal Aid & SC Certificate Guidance Cell',
    bengaliTitle: 'আইন ও শংসাপত্র সহায়তা কর্মী',
    commitment: 'Flexible',
    bengaliCommitment: 'সময়োপযোগী',
    description: 'Assist community youths with online SDO/BDO certificate documentation and resolution of administrative queries.',
    bengaliDescription: 'ডিজিটাল কাস্ট সার্টিফিকেট আবেদন ও প্রশাসনিক জটিলতা নিরসনে সদস্যদের প্রত্যক্ষ সহায়তা।'
  },
  {
    id: 'vol-welfare-relief',
    title: 'Social Welfare & Health Relief Volunteer',
    bengaliTitle: 'সমাজসেবা ও ত্রাণ বিতরণ স্বেচ্ছাসেবক',
    commitment: 'Event-based',
    bengaliCommitment: 'কার্যক্রমভিত্তিক',
    description: 'Participate in distress charity distribution, medical camps, and family emergency response across districts.',
    bengaliDescription: 'বিপন্ন মানুষের চিকিৎসা সহায়তা ও গ্রামীণ সমাজসেবা উদ্যোগে প্রত্যক্ষ অংশগ্রহণ।'
  }
];

export const BANK_DETAILS = {
  bankName: 'State Bank of India',
  accountName: 'Bangiya Saha Samity (Sunri Samaj)',
  accountNumber: '38192019360',
  ifscCode: 'SBIN0000084',
  branch: 'Bowbazar / Esplanade Branch, Kolkata',
  micrCode: '700002018',
  taxStatus: 'Registered Non-Profit Organisation (Regd. No. 4522 of 1936–37)'
};

export const NEWSLETTER_ARCHIVE = [
  {
    id: 'arch-1',
    issue: 'Volume 48 (Spring 2026)',
    bengaliIssue: 'খণ্ড ৪৮ (বসন্ত সংখ্যা ২০২৬)',
    publishDate: 'March 2026',
    bengaliPublishDate: 'মার্চ ২০২৬',
    title: 'Constitutional Safeguards & Sunri Scheduled Caste Heritage',
    bengaliTitle: 'সাংবিধানিক রক্ষাকবচ ও শুঁড়ি সমাজের তপশিলি ঐতিহ্য',
    description: 'Quarterly review of Social Help for Educational Purpose (Only for Our Community), female higher education priority, hostel improvements, and historic court precedents.',
    bengaliDescription: 'শুধুমাত্র আমাদের সম্প্রদায়ের জন্য শিক্ষার উদ্দেশ্যে সামাজিক সহায়তা, নারী উচ্চশিক্ষায় অগ্রাধিকার, ছাত্রাবাস উন্নয়ন এবং সুপ্রিম কোর্টের নজিরসমূহ নিয়ে বিশদ আলোচনা।',
    pages: '36 Pages',
    bengaliPages: '৩৬ পৃষ্ঠা',
    pdfUrl: '#'
  },
  {
    id: 'arch-2',
    issue: 'Volume 47 (Winter 2025)',
    bengaliIssue: 'খণ্ড ৪৭ (শীত সংখ্যা ২০২৫)',
    publishDate: 'December 2025',
    bengaliPublishDate: 'ডিসেম্বর ২০২৫',
    title: 'Hostel Students Academic Excellence & Rural Outreach',
    bengaliTitle: 'ছাত্রাবাসের শিক্ষার্থীদের সাফল্য ও গ্রামীণ সংহতি',
    description: 'Profiles of Sunri civil service exam qualifiers and state university rank holders residing at 52B.',
    bengaliDescription: '৫২বি ভবনে থাকা কৃতি শিক্ষার্থীদের সরকারি চাকুরির সাফল্য ও অনুপ্রেরণামূলক কাহিনী।',
    pages: '28 Pages',
    bengaliPages: '২৮ পৃষ্ঠা',
    pdfUrl: '#'
  },
  {
    id: 'arch-3',
    issue: 'Volume 46 (Autumn 2025)',
    bengaliIssue: 'খণ্ড ৪৬ (শরৎ সংখ্যা ২০২৫)',
    publishDate: 'September 2025',
    bengaliPublishDate: 'সেপ্টেম্বর ২০২৫',
    title: 'Special Commemorative Issue: 88 Years of Continuous Service',
    bengaliTitle: 'বিশেষ স্মারক সংখ্যা: ৮৮ বছরের নিরবচ্ছিন্ন সমাজসেবা',
    description: 'Archival letters from 1936 founders, temple resolutions at 77 Maniktala St, and future vision.',
    bengaliDescription: '১৯৩৬ সালের প্রতিষ্ঠাতাদের পত্রাবলী ও আগামী দিনের উন্নয়ন পরিকল্পনা।',
    pages: '44 Pages',
    bengaliPages: '৪৪ পৃষ্ঠা',
    pdfUrl: '#'
  }
];

