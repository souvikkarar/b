export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const MAIN_NAV: NavItem[] = [
  {
    label: 'Academy',
    href: '/academy/',
    children: [
      { label: 'Music Academy', href: '/academy/' },
      { label: 'All courses', href: '/courses/' },
      { label: 'Guitar', href: '/courses/guitar/' },
      { label: 'Keyboard', href: '/courses/keyboard/' },
      { label: 'Western Vocals', href: '/courses/western-vocals/' },
      { label: 'Hindustani Classical', href: '/courses/hindustani-classical-vocal/' },
    ],
  },
  { label: 'Courses', href: '/courses/' },
  { label: 'Concerts', href: '/concerts/' },
  { label: 'Studio', href: '/studio/' },
  { label: 'About', href: '/about/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact', href: '/contact/' },
];

export const FOOTER_NAV = {
  Academy: [
    { label: 'Music Academy', href: '/academy/' },
    { label: 'All courses', href: '/courses/' },
    { label: 'Guitar classes', href: '/courses/guitar/' },
    { label: 'Keyboard classes', href: '/courses/keyboard/' },
    { label: 'Western vocal classes', href: '/courses/western-vocals/' },
    { label: 'Hindustani classical vocal', href: '/courses/hindustani-classical-vocal/' },
  ],
  Muzicks: [
    { label: 'Concerts & events', href: '/concerts/' },
    { label: 'Studio & jamming', href: '/studio/' },
    { label: 'About', href: '/about/' },
    { label: 'Blog', href: '/blog/' },
    { label: 'Contact', href: '/contact/' },
  ],
};
