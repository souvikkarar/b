import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const BLOG_CATEGORIES = [
  'Music Learning',
  'Guitar & Instruments',
  'Vocal Training',
  'Hindustani Classical Music',
  'Bollywood Music',
  'Music Theory',
  'Music Events',
  'Music Studio & Creativity',
] as const;

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    /** Optional separate SEO <title>; defaults to `title | Muzicks Blog` */
    seoTitle: z.string().optional(),
    description: z.string().max(170),
    category: z.enum(BLOG_CATEGORIES),
    author: z.string().default('Muzicks'),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.string(),
    imageAlt: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
