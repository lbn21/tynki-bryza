import type { Metadata } from 'next';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import CTABanner from '@/components/home/CTABanner';

export const metadata: Metadata = {
  title: 'Realizacje',
  description:
    'Galeria naszych realizacji – zobacz przykłady profesjonalnych tynków maszynowych wykonanych przez firmę Baryza.',
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-primary pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            Nasze Realizacje
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Galeria wykonanych prac
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
