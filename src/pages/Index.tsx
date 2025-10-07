import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import CEOLetter from "@/components/CEOLetter";
import StatsSection from "@/components/StatsSection";
import PlatformSection from "@/components/PlatformSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <CEOLetter />
        <FeaturesSection />
        <StatsSection />
        <PlatformSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
