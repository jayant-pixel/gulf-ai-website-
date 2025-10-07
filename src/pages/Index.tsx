import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProductShowcase from "@/components/ProductShowcase";
import CEOLetter from "@/components/CEOLetter";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StatsSection from "@/components/StatsSection";
import PlatformSection from "@/components/PlatformSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ProductShowcase />
        <CEOLetter />
        <FeaturesSection />
        <TestimonialsSection />
        <StatsSection />
        <PlatformSection />
      </main>
    </div>
  );
};

export default Index;
