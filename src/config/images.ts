/**
 * Image registry. Royalty-free photographs from Unsplash (Unsplash License) are used
 * as illustrative stand-ins. Replace any `src` with original Muzicks photography —
 * either a full URL or a path under /public (e.g. '/images/classes/guitar.jpg').
 */
export interface SiteImage {
  src: string;
  alt: string;
  credit?: string;
}

const u = (id: string) => `https://images.unsplash.com/${id}`;

export const IMAGES = {
  heroPerformer: { src: u('photo-1748597603496-a0d58f4d7932'), alt: 'A singer performing into a microphone with her eyes closed', credit: 'Josias Garibay / Unsplash' },
  guitar: { src: u('photo-1471478331149-c72f17e33c73'), alt: 'A musician playing an acoustic guitar in soft light', credit: 'Gabriel Gurrola / Unsplash' },
  keyboard: { src: u('photo-1761243839303-618ae0906300'), alt: 'A young learner’s hand resting on piano keys', credit: 'Barnabas Piper / Unsplash' },
  ukulele: { src: u('photo-1758002102952-6d61ea980980'), alt: 'A wooden ukulele against a red background', credit: 'Alex He / Unsplash' },
  flute: { src: u('photo-1645772647876-76f184a402a1'), alt: 'A bansuri flute held by a musician', credit: 'Saubhagya Gandharv / Unsplash' },
  harmonica: { src: u('photo-1682271920907-781daffc09a6'), alt: 'A harmonica resting on a wooden table', credit: 'Ali Rashedi / Unsplash' },
  violin: { src: u('photo-1566913485242-694e995731b4'), alt: 'A musician playing the violin', credit: 'Joel Timothy / Unsplash' },
  westernVocals: { src: u('photo-1748597603496-a0d58f4d7932'), alt: 'A vocalist singing into a microphone', credit: 'Josias Garibay / Unsplash' },
  hindustani: { src: u('photo-1653246458437-fd78a9265711'), alt: 'An Indian classical musician with a tanpura before a microphone', credit: 'Saubhagya Gandharv / Unsplash' },
  bollywood: { src: u('photo-1738658414561-187c6f972c4f'), alt: 'A singer performing on stage under lights', credit: 'Ridho Jr. / Unsplash' },
  youngLearner: { src: u('photo-1577877777751-3f1ec20a0715'), alt: 'A girl practising the piano', credit: 'Arseny Togulev / Unsplash' },
  adultLearner: { src: u('photo-1547357812-4a336d835928'), alt: 'An adult playing the guitar', credit: 'Priscilla Du Preez / Unsplash' },
  concertCrowd: { src: u('photo-1540039155733-5bb30b53aa14'), alt: 'An audience facing a brightly lit concert stage', credit: 'ActionVance / Unsplash' },
  stageLight: { src: u('photo-1470229722913-7c0e2dbbafd3'), alt: 'Stage lights cutting through haze above an audience', credit: 'Yvette de Wit / Unsplash' },
  bandOnStage: { src: u('photo-1524368535928-5b5e00ddc76b'), alt: 'A band performing on stage in front of an audience', credit: 'Vishnu R Nair / Unsplash' },
  tabla: { src: u('photo-1719650932798-bda508a2b209'), alt: 'A classical tabla player on stage under warm lights', credit: 'Piyanshu Sharma / Unsplash' },
  mixer: { src: u('photo-1535406208535-1429839cfd13'), alt: 'Close-up of an audio mixing desk', credit: 'Adi Goldstein / Unsplash' },
  rehearsal: { src: u('photo-1606050580429-51524688f2e7'), alt: 'A guitarist rehearsing in a studio', credit: 'Immo Wegmann / Unsplash' },
  drums: { src: u('photo-1768264229230-4b1f14e65c12'), alt: 'A drum kit under dramatic lighting', credit: 'Spencer Plouzek / Unsplash' },
} satisfies Record<string, SiteImage>;

export type ImageKey = keyof typeof IMAGES;
