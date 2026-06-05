import Hero from "@/components/sections/Hero";
import TrustMarquee from "@/components/sections/TrustMarquee";
import CircleAbout from "@/components/sections/CircleAbout";
import Philosophy from "@/components/sections/Philosophy";
import TreatmentsSlider from "@/components/sections/TreatmentsSlider";
import ProcessSteps from "@/components/sections/ProcessSteps";
import SuccessStories from "@/components/sections/SuccessStories";
import ComparisonTable from "@/components/sections/ComparisonTable";
import FAQAccordion from "@/components/sections/FAQAccordion";
import FinalCTA from "@/components/sections/FinalCTA";
import HealthPortal from "@/components/sections/HealthPortal";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <CircleAbout />
      <TreatmentsSlider />
      <SuccessStories />
      <TrustMarquee />
      <ProcessSteps />
      <ComparisonTable />
      <HealthPortal />
      <FinalCTA />
      <Philosophy />
      <FAQAccordion />
    </main>
  );
}
