'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { galleryImages } from '@/lib/gallery-data';

export default function GalleryPreview() {
  const previewImages = galleryImages.slice(0, 6);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Nasze Realizacje"
          subtitle="Przyk\u0142ady naszych prac \u2014 jako\u015b\u0107, kt\u00f3r\u0105 wida\u0107"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {previewImages.map((image, i) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative aspect-[4/3] rounded-lg overflow-hidden bg-bg-alt"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
                quality={80}
              />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button href="/realizacje" variant="secondary">
            Zobacz wi\u0119cej realizacji \u2192
          </Button>
        </div>
      </div>
    </section>
  );
}
