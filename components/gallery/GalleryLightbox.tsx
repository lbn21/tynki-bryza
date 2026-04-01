'use client';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import type { GalleryImage } from '@/lib/gallery-data';

interface GalleryLightboxProps {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
}

export default function GalleryLightbox({ images, index, onClose }: GalleryLightboxProps) {
  return (
    <Lightbox
      open={index >= 0}
      close={onClose}
      index={index}
      slides={images.map((img) => ({
        src: img.src,
        alt: img.alt,
        width: img.width,
        height: img.height,
      }))}
      styles={{
        container: { backgroundColor: 'rgba(0, 0, 0, 0.9)' },
      }}
      carousel={{ finite: false }}
      controller={{ closeOnBackdropClick: true }}
    />
  );
}
