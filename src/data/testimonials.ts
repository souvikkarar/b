/**
 * Testimonials. Add ONLY real, attributable quotes with the person's permission.
 * The testimonial section stays hidden while this list is empty.
 */
export interface Testimonial {
  quote: string;
  name: string;
  /** e.g. 'Guitar student', 'Parent of a keyboard student', 'Event organiser' */
  role: string;
  course?: string;
  image?: string;
}

export const TESTIMONIALS: Testimonial[] = [];
