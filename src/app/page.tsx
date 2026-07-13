import { HeroSection } from "@/components/home/hero-section";
import { AboutPreview } from "@/components/home/about-preview";
import { VisionMission } from "@/components/home/vision-mission";
import { KeyStats } from "@/components/home/key-stats";
import { PastorPreview } from "@/components/home/pastor-preview";
import { MinistriesPreview } from "@/components/home/ministries-preview";
import { SundaySchoolPreview } from "@/components/home/sunday-school-preview";
import { SermonsPreview } from "@/components/home/sermons-preview";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { EventsPreview } from "@/components/home/events-preview";
import { CTASection } from "@/components/shared/cta-section";

/**
 * Home page — Centre Évangélique Arche de l'Alliance
 * Server Component that composes all home sections.
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <VisionMission />
      <KeyStats />
      <PastorPreview />
      <MinistriesPreview />
      <SundaySchoolPreview />
      <SermonsPreview />
      <TestimonialsSection />
      <EventsPreview />
      <CTASection />
    </>
  );
}
