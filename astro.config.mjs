// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// Static site, deployed to Cloudflare (Workers static assets / Pages).
export default defineConfig({
  site: 'https://www.muzicks.com',
  trailingSlash: 'always',
  output: 'static',
  build: { format: 'directory' },
  integrations: [
    react(),
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  server: { port: 3000, host: true },
});
