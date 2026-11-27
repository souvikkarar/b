import type { ImageKey } from '../config/images';

/**
 * Concerts & performances.
 *
 * Add only REAL performances, videos and collaborations here. Empty lists hide
 * their section or show a tasteful "being updated" note — nothing is invented.
 */

export interface Performance {
  title: string;
  date: string; // ISO date, e.g. '2025-12-20'
  venue: string;
  city: string;
  description?: string;
  image?: string; // URL or /public path
  imageAlt?: string;
}

export interface PerformanceVideo {
  title: string;
  /** YouTube video id, e.g. 'dQw4w9WgXcQ' */
  youtubeId: string;
}

export interface Collaboration {
  name: string;
  logo?: string;
  url?: string;
}

/** Past concerts. TODO: add real performances. */
export const PERFORMANCES: Performance[] = [];

/** Performance videos (YouTube). TODO: add real video ids. */
export const VIDEOS: PerformanceVideo[] = [];

/** Brand collaborations. TODO: add only real, approved collaborations. */
export const COLLABORATIONS: Collaboration[] = [];

/**
 * Illustrative photographs for the gallery until original performance photos are added.
 * Replace with real photos and set `illustrative: false`.
 */
export const GALLERY: { image: ImageKey; caption: string; illustrative: boolean }[] = [
  { image: 'stageLight', caption: 'Stage lights and atmosphere', illustrative: true },
  { image: 'bandOnStage', caption: 'Full-band performance', illustrative: true },
  { image: 'tabla', caption: 'Classical performance', illustrative: true },
  { image: 'concertCrowd', caption: 'Live audience', illustrative: true },
  { image: 'bollywood', caption: 'Vocal performance', illustrative: true },
];

/** Event types we can discuss. These are booking categories, not claims of past events. */
export const EVENT_TYPES = [
  { name: 'Corporate events', text: 'Conferences, annual days, product launches and team celebrations.' },
  { name: 'Private events', text: 'Weddings, receptions, birthdays and family celebrations.' },
  { name: 'Cultural events', text: 'Festivals, cultural evenings and community programmes.' },
  { name: 'College festivals', text: 'Fests, cultural nights and student events.' },
  { name: 'Live concerts', text: 'Ticketed or invited live music performances.' },
  { name: 'Brand activations', text: 'Live music for launches, retail and experiential campaigns.' },
  { name: 'Institutional events', text: 'Schools, institutions and organisations.' },
];

/** Performance formats that can be discussed for an event. */
export const FORMATS = [
  { name: 'Solo acoustic', text: 'Voice and guitar — intimate, flexible and easy to stage.' },
  { name: 'Duo', text: 'Two musicians for a fuller sound with a small footprint.' },
  { name: 'Ensemble', text: 'A larger line-up for concerts and stage shows.' },
  { name: 'Background music', text: 'Unobtrusive live music for dinners and receptions.' },
  { name: 'Workshops', text: 'Interactive music sessions for schools, teams and communities.' },
];

export const CONCERT_FAQS = [
  { q: 'How do I book Muzicks for an event?', a: 'Send an enquiry with your event date, location and audience, or message us on WhatsApp. We will reply to discuss availability, format and requirements.' },
  { q: 'How far in advance should I enquire?', a: 'As early as possible, especially for weekends and festive seasons. Availability is confirmed only after we discuss your event.' },
  { q: 'Can the set list be customised?', a: 'Yes. We will discuss the mood of your event, your audience and any songs you would like included.' },
  { q: 'Do you perform outside Kolkata?', a: 'Please share your event location in the enquiry and we will let you know what is possible.' },
  { q: 'What technical setup is needed?', a: 'It depends on the format and venue. We will discuss sound, power and space requirements after your enquiry.' },
];
