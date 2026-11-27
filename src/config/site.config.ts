/**
 * Muzicks — central business configuration.
 *
 * Everything here is shown on the site and used in structured data (schema.org).
 * Values marked VERIFY were taken from the current muzicks.com and should be
 * confirmed by the owner. Values marked TODO are unknown — leave them empty
 * ('' / null) and the related UI simply hides itself.
 */

export const SITE = {
  name: 'Muzicks',
  legalName: 'Muzicks',
  url: 'https://www.muzicks.com', // canonical domain
  tagline: 'Where music is learned, performed and experienced.',
  description:
    'Muzicks is a music academy in Kolkata offering guitar, keyboard, vocal and instrument classes online and in person, plus live performances and creative studio sessions.',
  locale: 'en_IN',
  language: 'en-IN',
  /** Default social-share image (1200×630). Replace with an original photo, e.g. '/og-default.jpg'. */
  defaultOgImage: 'https://images.unsplash.com/photo-1748597603496-a0d58f4d7932?auto=format&fit=crop&q=70&w=1200&h=630',
  foundingYear: null as number | null, // TODO
};

export const CONTACT = {
  /** Digits only with country code, used for tel: and wa.me links. VERIFY */
  phone: '+919804270201',
  phoneDisplay: '+91 98042 70201',
  /** WhatsApp number, digits only with country code. VERIFY */
  whatsapp: '919804270201',
  email: 'info@muzicks.com', // VERIFY
  address: {
    street: '2 No. Sitalatala Street', // VERIFY
    locality: 'Belgharia',
    city: 'Kolkata',
    region: 'West Bengal',
    postalCode: '700056',
    country: 'IN',
  },
  serviceArea: ['Kolkata', 'West Bengal', 'Online across India and worldwide'],
  /** e.g. [{ days: 'Mon–Sat', hours: '10:00–20:00' }]. TODO — hidden while empty. */
  hours: [] as { days: string; hours: string }[],
  /** Google Maps embed URL (https://www.google.com/maps/embed?pb=...). TODO */
  mapEmbedUrl: '',
  /** Link to the Google Business Profile. TODO */
  googleBusinessUrl: '',
};

export const SOCIAL = {
  instagram: 'https://www.instagram.com/muzicks_/',
  youtube: 'https://www.youtube.com/@debikakararofficial',
  facebook: 'https://www.facebook.com/profile.php?id=61569821193406',
  x: 'https://x.com/Muzicks_',
};

/** Is a free/demo trial class actually offered? (muzicks.com shows "Book demo class".) VERIFY */
export const OFFERS_DEMO_CLASS = true;

/**
 * Form delivery. Set PUBLIC_FORM_ENDPOINT in the environment (Cloudflare build settings)
 * to any endpoint that accepts a JSON POST — e.g. Formspree, Web3Forms, Basin, or your
 * own Cloudflare Worker. Optional: PUBLIC_TURNSTILE_SITE_KEY for Cloudflare Turnstile.
 * See DEPLOYMENT.md.
 */
export const FORMS = {
  endpoint: (import.meta.env.PUBLIC_FORM_ENDPOINT as string | undefined) ?? '',
  turnstileSiteKey: (import.meta.env.PUBLIC_TURNSTILE_SITE_KEY as string | undefined) ?? '',
};
