import { IMAGES, type ImageKey, type SiteImage } from '../config/images';

export function resolveImage(img: ImageKey | string, alt = ''): SiteImage {
  if (img in IMAGES) return IMAGES[img as ImageKey];
  return { src: img, alt };
}

const isUnsplash = (src: string) => src.startsWith('https://images.unsplash.com/');

/** Build an optimised URL (WebP/AVIF via Unsplash's CDN) at a given width. */
export function imageUrl(src: string, width: number, height?: number): string {
  if (!isUnsplash(src)) return src;
  const p = new URLSearchParams({ auto: 'format', fit: 'crop', q: '70', w: String(width) });
  if (height) p.set('h', String(height));
  return `${src}?${p.toString()}`;
}

/** srcset for responsive delivery. Local images are returned as-is. */
export function imageSrcset(src: string, widths: number[], ratio?: number): string | undefined {
  if (!isUnsplash(src)) return undefined;
  return widths.map((w) => `${imageUrl(src, w, ratio ? Math.round(w / ratio) : undefined)} ${w}w`).join(', ');
}
