import Hero from '@/components/home/Hero';
import ServicesOverview from '@/components/home/ServicesOverview';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import GalleryPreview from '@/components/home/GalleryPreview';
import CTABanner from '@/components/home/CTABanner';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <GalleryPreview />
      <CTABanner />
    </>
  );
}
