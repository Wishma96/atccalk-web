import type { Metadata } from 'next';

import HeroSection from '@/pageComponents/homePage/HeroSection';
import AgencySection from '@/pageComponents/homePage/AgencySection';
import FeaturesSection from '@/pageComponents/homePage/FeaturesSection';
import BentoDestinationsSection from '@/pageComponents/homePage/BentoDestinationsSection';
import VehicleSection from '@/pageComponents/homePage/VehicleSection';
import ToursPackages from '@/pageComponents/homePage/ToursPackages';
import Testimonials from '@/pageComponents/homePage/Testimonials';
import DownloadAppSection from '@/pageComponents/homePage/DownloadAppSection';
import TravelBlogs from '@/pageComponents/homePage/TravelBlogs';
import { buildMetadata } from '@/utils/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Chauffeur Tours & Travel in Sri Lanka',
  description:
    'Discover Sri Lanka with ATCCA private chauffeur tours, premium vehicles, airport transfers, and custom travel experiences.',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AgencySection />
      <FeaturesSection />
      <BentoDestinationsSection />
      <VehicleSection />
      <ToursPackages />
      <Testimonials />
      <DownloadAppSection />
      <TravelBlogs />
    </>
  );
}
