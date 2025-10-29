import HeroSection from "@/components/sections/hero";
import TrustedCompanies from "@/components/sections/trusted-companies";
import TalentCategories from "@/components/sections/talent-categories";
import TalentSpotlight from "@/components/sections/talent-spotlight";
import JobShowcase from "@/components/sections/job-showcase";
import TestimonialsSection from "@/components/sections/testimonials";
import CtaSection from "@/components/sections/cta";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 lg:gap-20">
      <HeroSection />
      <TrustedCompanies />
      <TalentCategories />
      <TalentSpotlight />
      <JobShowcase />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
}
