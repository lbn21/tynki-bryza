export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const galleryImages: GalleryImage[] = Array.from({ length: 32 }, (_, i) => ({
  src: `/gallery/realizacja-${String(i + 1).padStart(2, '0')}.jpg`,
  alt: `Realizacja tynków maszynowych – zdjęcie ${i + 1}`,
  width: 800,
  height: 600,
}));
