# Muzicks website — setup & deployment

Static Astro site (TypeScript, Tailwind CSS v4, React only for the enquiry forms), deployed to Cloudflare.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint       # astro check (types)
npm run build      # outputs dist/
```

## Where to edit content (no component code needed)

| What | File |
|---|---|
| Business name, phone, WhatsApp, email, address, hours, Google Maps/Business links, demo-class flag | `src/config/site.config.ts` |
| Navigation and footer links | `src/config/navigation.ts` |
| Photos (swap stock for original photography) | `src/config/images.ts` |
| Courses — all nine landing pages | `src/data/courses.ts` |
| Concerts: performances, videos, collaborations, gallery, event types | `src/data/concerts.ts` |
| Studio facilities, services, booking steps | `src/data/studio.ts` |
| Testimonials (section hidden while empty) | `src/data/testimonials.ts` |
| Founder bio and philosophy | `src/data/about.ts` |
| Homepage FAQs and "Why Muzicks" | `src/data/home.ts` |
| Blog posts | `src/content/blog/*.md` |

Values marked `VERIFY` in the config were copied from the previous muzicks.com and should be confirmed. Values marked `TODO` are unknown and their UI hides until filled in. Nothing on the site invents reviews, events, brand partners, studio equipment, prices or statistics.

### Publishing a blog post

Create `src/content/blog/my-post-slug.md`:

```md
---
title: Post title
seoTitle: Optional SEO title (≤ 60 characters)
description: Meta description (≤ 160 characters)
category: Music Learning   # one of the categories in src/content.config.ts
author: Muzicks
pubDate: 2026-12-01
updatedDate: 2026-12-10     # optional
image: /images/blog/my-image.jpg   # or a full URL
imageAlt: Describe the image
draft: false
---

Your article in Markdown. Use ## headings — they build the table of contents.
```

## Enquiry forms (required before launch)

Forms POST JSON to the URL in `PUBLIC_FORM_ENDPOINT`. Until it is set, forms **do not pretend to succeed**: visitors see a clear message and a one-tap WhatsApp button with their details pre-filled.

Any service that accepts a JSON POST works, for example:

- **Formspree** — create a form, use `https://formspree.io/f/<id>`.
- **Web3Forms / Basin / Getform** — similar.
- **Your own Cloudflare Worker** that emails the enquiry or stores it.

Each submission includes `formType` (`course`, `concert`, `studio`, `general`), `subject`, `page` and the form fields. A hidden honeypot field (`company_website`) drops simple bots.

### Spam protection (optional)

Set `PUBLIC_TURNSTILE_SITE_KEY` to enable Cloudflare Turnstile. The token is sent as `cf-turnstile-response` — verify it on your endpoint with the Turnstile secret key.

## Environment variables

| Variable | Required | Purpose |
|---|---|---|
| `PUBLIC_FORM_ENDPOINT` | Yes, for forms | URL that receives enquiry submissions |
| `PUBLIC_TURNSTILE_SITE_KEY` | No | Enables Cloudflare Turnstile on forms |

Set them in Cloudflare (Workers & Pages → your project → Settings → Variables) **as build variables**, because they are read at build time.

## Deploy to Cloudflare

**From GitHub (recommended):** Cloudflare dashboard → Workers & Pages → Create → Import a repository → choose this repo.

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy` (Workers) — or for Pages, output directory `dist`

**From your computer:**

```bash
npx wrangler login
npm run deploy
```

`wrangler.jsonc` serves `dist/` and uses the generated `404.html` for unknown URLs. `public/_redirects` maps old WordPress URLs to the new structure.

## SEO checklist after launch

- Verify the domain in Google Search Console and submit `https://www.muzicks.com/sitemap-index.xml`.
- Add the Google Business Profile URL and Maps embed in `site.config.ts`.
- Validate structured data with Google's Rich Results Test.
- Replace stock photographs with original Muzicks photography (keep descriptive `alt` text).
