// Content for the /legends page ("Our Legends" / "স্মরণীয় ব্যক্তিত্ব").
//
// HOW TO EDIT
// - Content should come from verified sources or the Samity's own records.
// - Leave a field empty ('' or []) until it is confirmed: the page shows a neat
//   "to be added" note instead of inventing anything.
// - Photos: put the image in /public/legends/ (e.g. public/legends/gopinath-saha.jpg)
//   and set `photo: '/legends/gopinath-saha.jpg'`. Use only photos you have rights to.
// - `id` is the link anchor: /legends#gopinath-saha

export interface Bilingual {
  en: string;
  bn: string;
}

export interface Legend {
  id: string;
  name: Bilingual;
  /** e.g. { en: '1891 – 1956', bn: '১৮৯১ – ১৯৫৬' } */
  years: Bilingual;
  /** One-line title shown under the name */
  role: Bilingual;
  /** 2–3 short paragraphs */
  bio: { en: string[]; bn: string[] };
  /** 3–5 points: contribution to the Sunri community / Scheduled Caste rights */
  contributions: { en: string[]; bn: string[] };
  /** Optional short quote */
  quote?: Bilingual;
  /** Optional key dates */
  milestones?: { year: Bilingual; text: Bilingual }[];
  /** Path under /public, e.g. '/legends/br-ambedkar.jpg' */
  photo?: string;
}

const EMPTY_TEXT: Bilingual = { en: '', bn: '' };

export const LEGENDS: Legend[] = [
  {
    id: 'br-ambedkar',
    name: { en: 'Dr. B. R. Ambedkar', bn: 'ড. বি. আর. আম্বেদকর' },
    years: { en: '1891 – 1956', bn: '১৮৯১ – ১৯৫৬' },
    role: { en: 'Architect of the Indian Constitution', bn: 'ভারতীয় সংবিধানের প্রধান রূপকার' },
    bio: {
      en: [
        'Dr. Bhimrao Ramji Ambedkar (1891–1956) was a jurist, economist and social reformer. Born into a community that faced untouchability, he rose to become one of the most influential figures of modern India. He chaired the Drafting Committee of the Constituent Assembly, served as India’s first Law Minister, and is honoured as the chief architect of the Constitution of India.',
        'The Sunri community long faced social stigma and exclusion because of its traditional association with distilling and the liquor trade. The Constitution he shaped answered this directly: Article 17 abolished untouchability, later made punishable under the Untouchability (Offences) Act, 1955, and further provisions created safeguards for Scheduled Castes in education, public employment and the legislatures.',
        'Article 341 empowers the President to notify the Scheduled Castes of each state, and under the Constitution (Scheduled Castes) Order, 1950, “Sunri (excluding Saha)” is recognised as a Scheduled Caste in West Bengal. Bengal also holds a special place in his story: in 1946, after his defeat in Bombay, the Scheduled Caste leaders of Bengal, led by Jogendra Nath Mandal, helped him win a seat in the Constituent Assembly from Bengal.',
      ],
      bn: [
        'ড. ভীমরাও রামজি আম্বেদকর (১৮৯১–১৯৫৬) ছিলেন একজন আইনবিদ, অর্থনীতিবিদ ও সমাজ সংস্কারক। অস্পৃশ্যতার শিকার এক সম্প্রদায়ে জন্মগ্রহণ করে তিনি আধুনিক ভারতের অন্যতম শ্রেষ্ঠ ব্যক্তিত্বে পরিণত হন। তিনি সংবিধান সভার খসড়া কমিটির সভাপতি ও স্বাধীন ভারতের প্রথম আইনমন্ত্রী ছিলেন এবং ভারতীয় সংবিধানের প্রধান রূপকার হিসেবে সর্বজনশ্রদ্ধেয়।',
        'চোলাই ও মদ ব্যবসার সঙ্গে ঐতিহ্যগত সম্পর্কের কারণে শুঁড়ি সম্প্রদায় দীর্ঘকাল সামাজিক কলঙ্ক ও বঞ্চনার শিকার হয়েছে। তাঁর হাতে গড়া সংবিধান এর সরাসরি জবাব দিয়েছে: ১৭ অনুচ্ছেদ অস্পৃশ্যতা বিলোপ করেছে, যা পরে অস্পৃশ্যতা (অপরাধ) আইন, ১৯৫৫-এর মাধ্যমে দণ্ডনীয় হয়, এবং অন্যান্য বিধানে শিক্ষা, সরকারি চাকরি ও আইনসভায় তপশিলি জাতির জন্য রক্ষাকবচ তৈরি হয়েছে।',
        '৩৪১ অনুচ্ছেদ রাষ্ট্রপতিকে প্রতিটি রাজ্যের তপশিলি জাতির তালিকা ঘোষণার ক্ষমতা দিয়েছে, এবং সংবিধান (তপশিলি জাতি) আদেশ, ১৯৫০ অনুযায়ী পশ্চিমবঙ্গে “শুঁড়ি (সাহা ব্যতীত)” তপশিলি জাতি হিসেবে স্বীকৃত। বাংলার সঙ্গে তাঁর সম্পর্কও বিশেষ: ১৯৪৬ সালে বোম্বাইয়ে পরাজয়ের পর যোগেন্দ্রনাথ মণ্ডলের নেতৃত্বে বাংলার তপশিলি নেতারা তাঁকে বাংলা থেকে সংবিধান সভায় নির্বাচিত হতে সাহায্য করেন।',
      ],
    },
    contributions: {
      en: [
        'Chaired the Drafting Committee that framed the Constitution of India, and served as the country’s first Law Minister.',
        'Article 341 and the Presidential Order of 1950 recognise “Sunri (excluding Saha)” as a Scheduled Caste in West Bengal, securing reservations in education, employment and legislatures.',
        'Article 17 abolished untouchability, later made punishable by the Untouchability (Offences) Act, 1955 — vital protection for a community long stigmatised for its traditional trade.',
        'Articles 330 and 332 reserve seats for Scheduled Castes in the Lok Sabha and state assemblies; Article 46 directs the State to promote their educational and economic interests.',
        'Elected to the Constituent Assembly from Bengal in 1946 with the support of Bengal’s Scheduled Caste leaders, led by Jogendra Nath Mandal.',
      ],
      bn: [
        'সংবিধান সভার খসড়া কমিটির সভাপতি হিসেবে ভারতের সংবিধান প্রণয়নে নেতৃত্ব দেন এবং দেশের প্রথম আইনমন্ত্রী হন।',
        '৩৪১ অনুচ্ছেদ ও ১৯৫০ সালের রাষ্ট্রপতির আদেশে পশ্চিমবঙ্গে “শুঁড়ি (সাহা ব্যতীত)” তপশিলি জাতি হিসেবে স্বীকৃত, যার ফলে শিক্ষা, চাকরি ও আইনসভায় সংরক্ষণ নিশ্চিত হয়।',
        '১৭ অনুচ্ছেদে অস্পৃশ্যতা বিলোপ, যা পরে অস্পৃশ্যতা (অপরাধ) আইন, ১৯৫৫-এ দণ্ডনীয় হয় — ঐতিহ্যগত পেশার কারণে কলঙ্কিত সম্প্রদায়ের জন্য গুরুত্বপূর্ণ আইনি সুরক্ষা।',
        '৩৩০ ও ৩৩২ অনুচ্ছেদে লোকসভা ও রাজ্য বিধানসভায় তপশিলি জাতির জন্য আসন সংরক্ষণ; ৪৬ অনুচ্ছেদে তাঁদের শিক্ষাগত ও অর্থনৈতিক স্বার্থ রক্ষায় রাষ্ট্রের প্রতি নির্দেশ।',
        '১৯৪৬ সালে যোগেন্দ্রনাথ মণ্ডলের নেতৃত্বে বাংলার তপশিলি নেতাদের সমর্থনে বাংলা থেকে সংবিধান সভায় নির্বাচিত হন।',
      ],
    },
    photo: '/legends/br-ambedkar.jpg',
  },
  {
    id: 'gopinath-saha',
    name: { en: 'Shahid Gopinath Saha', bn: 'শহীদ গোপীনাথ সাহা' },
    // Sources differ on his exact birth date (December 1905 is the most cited).
    years: { en: '1905 – 1924', bn: '১৯০৫ – ১৯২৪' },
    role: { en: 'Revolutionary and martyr of the freedom struggle', bn: 'স্বাধীনতা সংগ্রামের বিপ্লবী ও শহীদ' },
    bio: {
      en: [
        'Gopinath Saha, born in Serampore (Hooghly), was a young Bengali revolutionary of the Indian independence movement. On 12 January 1924 he attempted to assassinate Charles Tegart, the Calcutta police officer feared by revolutionaries, but mistakenly killed a civilian, Ernest Day.',
        'He was tried and hanged in Alipore Central Jail on 1 March 1924, while still a young man. His fearless conduct at his trial made him a symbol of youthful sacrifice in Bengal, and the case drew attention across the country.',
        'His contribution to the Sunri community is symbolic rather than legislative. At a time when marginalised communities were fighting to shed social stigma and assert their dignity, his sacrifice became a lasting source of pride and self-respect. The Samity keeps his legacy alive with annual tributes on his birth and martyrdom anniversaries.',
      ],
      bn: [
        'হুগলির শ্রীরামপুরে জন্মগ্রহণকারী গোপীনাথ সাহা ছিলেন ভারতের স্বাধীনতা আন্দোলনের এক তরুণ বাঙালি বিপ্লবী। ১৯২৪ সালের ১২ জানুয়ারি তিনি বিপ্লবীদের কাছে ত্রাস কলকাতা পুলিশের কর্মকর্তা চার্লস টেগার্টকে হত্যার চেষ্টা করেন, কিন্তু ভুলবশত আর্নেস্ট ডে নামে এক সাধারণ ব্যক্তি নিহত হন।',
        'বিচারের পর ১৯২৪ সালের ১ মার্চ আলিপুর কেন্দ্রীয় কারাগারে অল্প বয়সেই তাঁর ফাঁসি হয়। বিচারে তাঁর নির্ভীক আচরণ তাঁকে বাংলায় তরুণ আত্মত্যাগের প্রতীকে পরিণত করে, এবং এই মামলা সারা দেশে আলোড়ন তোলে।',
        'শুঁড়ি সমাজে তাঁর অবদান আইনগত নয়, প্রতীকী। যখন প্রান্তিক সম্প্রদায়গুলি সামাজিক কলঙ্ক ঝেড়ে ফেলে মর্যাদা প্রতিষ্ঠার লড়াই করছিল, তখন তাঁর আত্মবলিদান সমাজের কাছে গর্ব ও আত্মসম্মানের চিরন্তন উৎস হয়ে ওঠে। প্রতি বছর তাঁর জন্মজয়ন্তী ও আত্মবলিদান দিবসে শ্রদ্ধা নিবেদনের মাধ্যমে সমিতি তাঁর স্মৃতি জাগরূক রাখে।',
      ],
    },
    contributions: {
      en: [
        'Gave his life for India’s freedom at a young age — hanged in Alipore Central Jail on 1 March 1924.',
        'A symbol of self-respect and patriotism for a community long fighting social stigma.',
        'Honoured by the Bangiya Saha Samity through annual birth and martyrdom anniversary tributes that inspire younger generations.',
      ],
      bn: [
        'অল্প বয়সে দেশের স্বাধীনতার জন্য প্রাণ উৎসর্গ — ১৯২৪ সালের ১ মার্চ আলিপুর কেন্দ্রীয় কারাগারে ফাঁসি।',
        'সামাজিক কলঙ্কের বিরুদ্ধে দীর্ঘ লড়াই করা সমাজের কাছে আত্মসম্মান ও দেশপ্রেমের প্রতীক।',
        'বঙ্গীয় সাহা সমিতির উদ্যোগে প্রতি বছর জন্মজয়ন্তী ও আত্মবলিদান দিবসে শ্রদ্ধা নিবেদন, যা নতুন প্রজন্মকে অনুপ্রাণিত করে।',
      ],
    },
    photo: '/legends/gopinath-saha.webp',
  },
  {
    id: 'banku-bihari-mondal',
    name: { en: 'Banku Bihari Mondal', bn: 'বঙ্কুবিহারী মণ্ডল' }, // TODO: confirm Bengali spelling
    years: EMPTY_TEXT, // TODO: birth and death years
    role: { en: 'Legislator and community builder', bn: 'বিধায়ক ও সমাজ-গঠক' },
    bio: {
      en: [
        'Banku Bihari Mondal was a Scheduled Caste member of the Bengal Legislative Assembly during the crucial years around India’s independence and partition, when Bengal’s political and demographic boundaries were being redrawn. In the Assembly he gave a political voice to the Scheduled Castes of Bengal.',
        'He also helped build the community’s lasting institutions. Commemorative plaques at 52B Indian Mirror Street, Kolkata record his foundational role, alongside Purna Chandra Saha and the core committee, in establishing the Bangiya Saha Samity building and its student hostel (Chhatrabas) in January 1951. The hostel has since supported generations of Sunri students who came to Kolkata for higher education.',
      ],
      bn: [
        'বঙ্কুবিহারী মণ্ডল ছিলেন ভারতের স্বাধীনতা ও দেশভাগের সন্ধিক্ষণে বঙ্গীয় বিধানসভার একজন তপশিলি জাতিভুক্ত সদস্য, যখন বাংলার রাজনৈতিক ও জনবিন্যাসের সীমানা নতুন করে নির্ধারিত হচ্ছিল। বিধানসভায় তিনি বাংলার তপশিলি জাতির রাজনৈতিক কণ্ঠস্বর হয়ে উঠেছিলেন।',
        'সমাজের স্থায়ী প্রতিষ্ঠান গড়ে তোলাতেও তাঁর ভূমিকা ছিল অগ্রণী। কলকাতার ৫২বি ইন্ডিয়ান মিরর স্ট্রিটের স্মারক ফলকে লিপিবদ্ধ আছে যে, ১৯৫১ সালের জানুয়ারিতে পূর্ণচন্দ্র সাহা ও মূল কমিটির সঙ্গে মিলে তিনি বঙ্গীয় সাহা সমিতির ভবন ও ছাত্রাবাস প্রতিষ্ঠায় প্রধান ভূমিকা নেন। এই ছাত্রাবাস প্রজন্মের পর প্রজন্ম ধরে উচ্চশিক্ষার জন্য কলকাতায় আসা শুঁড়ি ছাত্রছাত্রীদের পাশে থেকেছে।',
      ],
    },
    contributions: {
      en: [
        'Represented Scheduled Caste interests as a member of the Bengal Legislative Assembly around independence and partition.',
        'Helped establish the Bangiya Saha Samity building at 52B Indian Mirror Street, Kolkata (January 1951), as recorded on its commemorative plaques.',
        'A founder of the student hostel (Chhatrabas) that has supported generations of Sunri students in higher education.',
      ],
      bn: [
        'স্বাধীনতা ও দেশভাগের সময়ে বঙ্গীয় বিধানসভার সদস্য হিসেবে তপশিলি জাতির স্বার্থের প্রতিনিধিত্ব।',
        'কলকাতার ৫২বি ইন্ডিয়ান মিরর স্ট্রিটে বঙ্গীয় সাহা সমিতি ভবন প্রতিষ্ঠায় অগ্রণী ভূমিকা (জানুয়ারি ১৯৫১), যা স্মারক ফলকে লিপিবদ্ধ।',
        'উচ্চশিক্ষার পথে প্রজন্মের পর প্রজন্ম শুঁড়ি ছাত্রছাত্রীদের সহায় ছাত্রাবাসের অন্যতম প্রতিষ্ঠাতা।',
      ],
    },
    photo: '/legends/banku-bihari-mondal.webp',
  },
];
