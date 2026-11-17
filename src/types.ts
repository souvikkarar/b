export type PageId = 
  | 'home' 
  | 'about' 
  | 'heritage'
  | 'legends'
  | 'updates'
  | 'contact';

export const PAGE_ROUTES: Record<PageId, string> = {
  home: '/',
  about: '/about',
  heritage: '/heritage',
  legends: '/legends',
  updates: '/updates',
  contact: '/contact',
};

export const ROUTE_TO_PAGE: Record<string, PageId> = {
  '/': 'home',
  '/about': 'about',
  '/heritage': 'heritage',
  '/legends': 'legends',
  '/updates': 'updates',
  '/contact': 'contact',
};

/** True when a URL hash is a legacy page link like #about (not an in-page anchor like #gopinath-saha). */
export function isLegacyPageHash(hash: string): boolean {
  const cleaned = hash.replace(/^#\/?/, '').trim().toLowerCase();
  return cleaned.length > 0 && cleaned in PAGE_ROUTES;
}

export function getPageFromPath(pathname: string, hash?: string): PageId {
  // Support legacy hash if present (e.g., /#about, #about, /#/about)
  if (hash) {
    const cleanedHash = hash.replace(/^#\/?/, '').trim().toLowerCase();
    if (cleanedHash in PAGE_ROUTES) {
      return cleanedHash as PageId;
    }
  }

  // Normalize pathname: remove trailing slash unless root
  const cleanPath = pathname.length > 1 ? pathname.replace(/\/+$/, '').toLowerCase() : pathname;
  if (cleanPath in ROUTE_TO_PAGE) {
    return ROUTE_TO_PAGE[cleanPath];
  }

  // Check first path segment
  const segment = cleanPath.split('/')[1]?.toLowerCase();
  if (segment && segment in PAGE_ROUTES) {
    return segment as PageId;
  }

  return 'home';
}

export interface MissionPillar {
  id: string;
  title: string;
  hindiTitle: string;
  tagline: string;
  description: string;
  keyInitiatives: string[];
  icon: string;
  impactNumber: string;
  impactLabel: string;
}

export interface ActivityCard {
  id: string;
  title: string;
  bengaliTitle: string;
  category: 'Social Welfare' | 'Community Development' | 'Cultural Preservation' | 'Educational Support' | 'Community Engagement';
  description: string;
  bengaliDescription: string;
  icon: string;
  highlights: string[];
  bengaliHighlights?: string[];
  badge: string;
  bengaliBadge?: string;
}

export interface LeadershipMember {
  id: string;
  name: string;
  bengaliName: string;
  role: string;
  bengaliRole: string;
  tier: 'Advisory' | 'OfficeBearer' | 'VicePresident' | 'Secretariat' | 'Committee' | 'Executive';
  bio: string;
  bengaliBio: string;
  contactNote?: string;
  bengaliContactNote?: string;
  imageUrl?: string;
  district?: string;
  bengaliDistrict?: string;
}

export interface EventItem {
  id: string;
  title: string;
  bengaliTitle: string;
  date: string;
  bengaliDate: string;
  time?: string;
  bengaliTime?: string;
  venue: string;
  bengaliVenue: string;
  category: 'Upcoming' | 'Past';
  description: string;
  bengaliDescription: string;
  attendees?: string;
  bengaliAttendees?: string;
  isFeatured?: boolean;
}

export interface NewsItem {
  id: string;
  title: string;
  bengaliTitle: string;
  date: string;
  category: 'Announcement' | 'Community News' | 'Press Release' | 'Newsletter';
  bengaliCategory?: string;
  summary: string;
  bengaliSummary: string;
  content: string;
  bengaliContent: string;
  author: string;
  bengaliAuthor?: string;
  readTime: string;
  bengaliReadTime?: string;
  badge: string;
  bengaliBadge?: string;
  downloadUrl?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  bengaliTitle: string;
  category: 'Photos' | 'Videos' | 'Community Activities' | 'Cultural Programs';
  bengaliCategory?: string;
  imageUrl: string;
  videoUrl?: string;
  description: string;
  bengaliDescription: string;
  date: string;
  bengaliDate?: string;
  location: string;
  bengaliLocation?: string;
}

export interface HeritageItem {
  id: string;
  title: string;
  bengaliTitle: string;
  era: string;
  bengaliEra?: string;
  summary: string;
  bengaliSummary: string;
  details: string[];
  bengaliDetails: string[];
  culturalSignificance: string;
  bengaliCulturalSignificance: string;
  imageUrl?: string;
}

export interface MembershipFormData {
  fullName: string;
  fatherName: string;
  dob?: string;
  dateOfBirth?: string;
  occupation: string;
  address: string;
  mobileNumber: string;
  email: string;
  district: string;
  membershipType: 'Life Member' | 'Patron Member' | 'Student Associate' | string;
  notes?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface CommunityStory {
  id: string;
  name: string;
  role: string;
  village: string;
  state: string;
  category: 'Education' | 'Legal Protection' | 'Community Leadership' | 'Youth Fellowship';
  summary: string;
  fullStory: string;
  quote: string;
  imageUrl: string;
  achievementBadge: string;
  year: string;
}

export interface DonationTier {
  id: string;
  amount: number;
  title: string;
  impact: string;
  coverage: string;
  isPopular?: boolean;
}

export interface LegalFAQ {
  id: string;
  articleOrAct: string;
  question: string;
  answer: string;
  practicalStep: string;
}

export interface DonationRecord {
  donorName: string;
  email: string;
  phone: string;
  panNumber: string;
  amount: number;
  cause: string;
  paymentMethod: 'UPI' | 'NetBanking' | 'Card';
  date: string;
  receiptNumber: string;
}
