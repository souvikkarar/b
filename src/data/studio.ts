import type { ImageKey } from '../config/images';

/**
 * Studio & creative spaces.
 *
 * The number of rooms, their equipment and capacities are NOT yet confirmed.
 * Each facility below is an editable template. Set `confirmed: true` once the
 * details are real; unconfirmed facilities are labelled "Details coming soon"
 * and never show invented equipment or capacity.
 */

export interface Facility {
  slug: string;
  name: string;
  confirmed: boolean;
  image: ImageKey | string;
  gallery?: string[];
  description: string;
  suitableFor: string[];
  equipment: string[]; // leave empty until confirmed
  capacity: string; // e.g. 'Up to 6 musicians' — leave '' until confirmed
  location: string; // e.g. 'Belgharia, Kolkata' — leave '' until confirmed
  amenities: string[];
}

export const FACILITIES: Facility[] = [
  {
    slug: 'jam-room',
    name: 'Jam Room',
    confirmed: false,
    image: 'rehearsal',
    description: 'A space for bands and groups of musicians to play together, try ideas and rehearse sets.',
    suitableFor: ['Band rehearsals', 'Jamming sessions', 'Group practice'],
    equipment: [],
    capacity: '',
    location: '',
    amenities: [],
  },
  {
    slug: 'practice-room',
    name: 'Practice Room',
    confirmed: false,
    image: 'drums',
    description: 'A focused room for individual musicians to practise without interruption.',
    suitableFor: ['Instrument practice', 'Vocal practice', 'Exam preparation'],
    equipment: [],
    capacity: '',
    location: '',
    amenities: [],
  },
  {
    slug: 'production-space',
    name: 'Production Space',
    confirmed: false,
    image: 'mixer',
    description: 'A space for music-related production work. Services will be listed here once confirmed.',
    suitableFor: ['Demo work', 'Songwriting sessions'],
    equipment: [],
    capacity: '',
    location: '',
    amenities: [],
  },
];

/** Service categories. Only mark `offered: true` when confirmed. */
export const STUDIO_SERVICES = [
  { name: 'Collaborative jamming', text: 'Play with other musicians in a relaxed, creative setting.', offered: false },
  { name: 'Rehearsal sessions', text: 'Prepare a set before a gig, competition or recording.', offered: false },
  { name: 'Instrument practice', text: 'Book quiet time to focus on your instrument or voice.', offered: false },
  { name: 'Group music sessions', text: 'Workshops and guided sessions for groups.', offered: false },
  { name: 'Recording-related services', text: 'Details will be shared once available.', offered: false },
];

export const BOOKING_STEPS = [
  { title: 'Send an enquiry', text: 'Tell us the facility, date, time, duration and what you plan to do.' },
  { title: 'We check availability', text: 'Our team reviews your request and gets back to you.' },
  { title: 'Confirmation', text: 'Your session is booked only when we confirm it with you directly.' },
];

export const STUDIO_FAQS = [
  { q: 'How do I book a studio session?', a: 'Send an enquiry or message us on WhatsApp. Every booking is confirmed manually by our team — there is no automatic booking.' },
  { q: 'Can I bring my own instruments?', a: 'Please mention your equipment needs in the enquiry and we will let you know what is available.' },
  { q: 'Do I need to be a Muzicks student?', a: 'Please ask in your enquiry. We will share who the spaces are open to once details are confirmed.' },
  { q: 'What does a session cost?', a: 'Pricing will be shared in response to your enquiry, based on the facility and duration.' },
];
