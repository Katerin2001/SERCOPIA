import Hero from '@/components/Hero';
import VideoSection from '@/components/VideoSection';
import FeaturesSection from '@/components/FeaturesSection';
import PricingSection from '@/components/PricingSection';
import Testimonials from '@/components/Testimonials';

import dynamic from "next/dynamic";
const TestPage = dynamic(() => import("../content/docs/test.mdx"));

export default function HomePage() {
  return (
    <main>
      <Hero />
      <VideoSection />
      <FeaturesSection />
      <Testimonials />
      <PricingSection />
      <TestPage />
    </main>
  );
}
