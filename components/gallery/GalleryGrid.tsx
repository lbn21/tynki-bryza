'use client';

import { useState, lazy, Suspense } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { galleryImages } from '@/lib/gallery-data';

const GalleryLightbox = lazy(() => import('./GalleryLightbox'));

export default function GalleryGrid() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
        {galleryImages.map((image, i) => (
          <motion.button
            key={image.src}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: Math.min(i * 0.03, 0.3) }}
            onClick={() => setLightboxIndex(i)}
            className="relative aspect-[4/3] rounded-lg overflow-hidden bg-bg-alt cursor-pointer group"
            aria-label={`Otwórz zdjęcie: ${image.alt}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              quality={75}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </motion.button>
        ))}
      </div>

      {lightboxIndex >= 0 && (
        <Suspense fallback={null}>
          <GalleryLightbox
            images={galleryImages}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(-1)}
          />
        </Suspense>
      )}
    </>
  );
}
