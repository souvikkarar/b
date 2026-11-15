// Content for the /legends page ("Our Legends" / "স্মরণীয় ব্যক্তিত্ব").
//
// HOW TO FILL THIS IN
// - Every field marked TODO must come from the Samity's own verified records.
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
  /** 3–4 points: contribution to the Sunri community / Scheduled Caste rights */
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
    // Widely documented; Samity to confirm wording.
    years: { en: '1891 – 1956', bn: '১৮৯১ – ১৯৫৬' },
    role: { en: 'Architect of the Indian Constitution', bn: 'ভারতীয় সংবিধানের প্রধান রূপকার' },
    bio: { en: [], bn: [] }, // TODO
    contributions: { en: [], bn: [] }, // TODO: specific link to the Sunri community
    photo: '/legends/br-ambedkar.jpg',
  },
  {
    id: 'gopinath-saha',
    name: { en: 'Shahid Gopinath Saha', bn: 'শহীদ গোপীনাথ সাহা' }, // TODO: confirm name/spelling
    years: EMPTY_TEXT, // TODO
    role: EMPTY_TEXT, // TODO
    bio: { en: [], bn: [] }, // TODO
    contributions: { en: [], bn: [] }, // TODO
    photo: '/legends/gopinath-saha.webp',
  },
  {
    id: 'banku-bihari-mondal',
    name: { en: 'Banku Bihari Mondal', bn: 'বঙ্কুবিহারী মণ্ডল' }, // TODO: confirm Bengali spelling
    years: EMPTY_TEXT, // TODO
    role: EMPTY_TEXT, // TODO
    bio: { en: [], bn: [] }, // TODO
    contributions: { en: [], bn: [] }, // TODO
    photo: '/legends/banku-bihari-mondal.webp',
  },
];
