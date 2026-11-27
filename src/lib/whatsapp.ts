import { CONTACT } from '../config/site.config';

export type EnquiryKind = 'general' | 'course' | 'concert' | 'studio';

const MESSAGES: Record<EnquiryKind, (topic?: string) => string> = {
  general: () => 'Hello Muzicks! I have a question and would like to know more.',
  course: (topic) =>
    topic
      ? `Hello Muzicks! I'm interested in ${topic} classes. Could you share details about online and in-person lessons?`
      : "Hello Muzicks! I'd like to know more about your music courses.",
  concert: () => "Hello Muzicks! I'd like to enquire about booking a live performance for an event.",
  studio: () => "Hello Muzicks! I'd like to enquire about booking a studio session.",
};

/** Returns a wa.me link with a pre-filled message, or '' when no number is configured. */
export function whatsappLink(kind: EnquiryKind = 'general', topic?: string, customText?: string): string {
  if (!CONTACT.whatsapp) return '';
  const text = customText ?? MESSAGES[kind](topic);
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;
}
