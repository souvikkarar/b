import { SITE, CONTACT, SOCIAL } from '../config/site.config';

const sameAs = Object.values(SOCIAL).filter(Boolean);

export const ORG_ID = `${SITE.url}/#organization`;

/** Organization + MusicSchool (an EducationalOrganization), with real, configured details only. */
export function organizationSchema() {
  const a = CONTACT.address;
  return {
    '@context': 'https://schema.org',
    '@type': ['MusicSchool', 'LocalBusiness'],
    '@id': ORG_ID,
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/favicon.svg`,
    description: SITE.description,
    ...(CONTACT.email && { email: CONTACT.email }),
    ...(CONTACT.phone && { telephone: CONTACT.phone }),
    ...(a.street && {
      address: {
        '@type': 'PostalAddress',
        streetAddress: a.street,
        addressLocality: a.locality ? `${a.locality}, ${a.city}` : a.city,
        addressRegion: a.region,
        postalCode: a.postalCode,
        addressCountry: a.country,
      },
    }),
    areaServed: CONTACT.serviceArea.map((name) => ({ '@type': 'Place', name })),
    ...(CONTACT.hours.length && {
      openingHours: CONTACT.hours.map((h) => `${h.days} ${h.hours}`),
    }),
    ...(sameAs.length && { sameAs }),
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: new URL(item.href, SITE.url).href,
    })),
  };
}

export function courseSchema(c: { name: string; description: string; url: string; modes: { online: boolean; offline: boolean } }) {
  const instances = [
    c.modes.offline && { '@type': 'CourseInstance', courseMode: 'onsite', location: { '@type': 'Place', name: `${CONTACT.address.city}, ${CONTACT.address.region}` } },
    c.modes.online && { '@type': 'CourseInstance', courseMode: 'online' },
  ].filter(Boolean);
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: c.name,
    description: c.description,
    url: c.url,
    provider: { '@type': 'Organization', '@id': ORG_ID, name: SITE.name, url: SITE.url },
    ...(instances.length && { hasCourseInstance: instances }),
  };
}

export function personSchema(p: { name: string; role: string; description: string; image?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: p.name,
    jobTitle: p.role,
    description: p.description,
    worksFor: { '@id': ORG_ID },
    ...(p.image && { image: new URL(p.image, SITE.url).href }),
  };
}

export function articleSchema(a: { title: string; description: string; url: string; image?: string; author: string; published: Date; updated?: Date }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.title,
    description: a.description,
    mainEntityOfPage: a.url,
    ...(a.image && { image: a.image }),
    author: { '@type': 'Person', name: a.author },
    publisher: { '@id': ORG_ID, '@type': 'Organization', name: SITE.name, logo: { '@type': 'ImageObject', url: `${SITE.url}/favicon.svg` } },
    datePublished: a.published.toISOString(),
    dateModified: (a.updated ?? a.published).toISOString(),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}
