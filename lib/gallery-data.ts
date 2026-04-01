export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const galleryImages: GalleryImage[] = Array.from({ length: 32 }, (_, i) => ({
  src: `/gallery/realizacja-${String(i + 1).padStart(2, '0')}.jpg`,
  alt: `Realizacja tynk\u00f3w maszynowych \u2013 zdj\u0119cie ${i + 1}`,
  width: 800,
  height: 600,
}));
