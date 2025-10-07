import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import recruitAI from "@/assets/recruit-ai.jpg";
import hospitalAI from "@/assets/hospital-ai.jpg";
import financeAI from "@/assets/finance-ai.jpg";
import industryAI from "@/assets/industry-ai.jpg";
import dashboardAI from "@/assets/dashboard-ai.jpg";
import ecommerceAI from "@/assets/ecommerce-ai.jpg";
import visionAI from "@/assets/vision-ai.jpg";
import linkedinAI from "@/assets/linkedin-ai.jpg";
import locatorAI from "@/assets/locator-ai.jpg";
import agenticAI from "@/assets/agentic-ai.jpg";
import voiceAI from "@/assets/voice-ai.jpg";

const products = [
  {
    title: "Recruit AI",
    description: "Automate candidate screening and interviews in Arabic & English.",
    image: recruitAI,
  },
  {
    title: "Hospital AI",
    description: "Manage patient bookings and inquiries with 24/7 multilingual support.",
    image: hospitalAI,
  },
  {
    title: "Finance AI",
    description: "Streamline compliance and detect fraud in real time.",
    image: financeAI,
  },
  {
    title: "Industry 4.0 AI",
    description: "Predict downtime and optimize production efficiency.",
    image: industryAI,
  },
  {
    title: "Dashboard AI",
    description: "Get boardroom-ready insights across HR, CX, and operations.",
    image: dashboardAI,
  },
  {
    title: "E-commerce AI",
    description: "Engage customers with AI-driven avatars and voice guidance.",
    image: ecommerceAI,
  },
  {
    title: "Vision AI",
    description: "Turn CCTV into safety and compliance intelligence.",
    image: visionAI,
  },
  {
    title: "LinkedIn AI",
    description: "Generate and nurture leads automatically.",
    image: linkedinAI,
  },
  {
    title: "Locator AI",
    description: "Deliver seamless navigation in malls, expos, and warehouses.",
    image: locatorAI,
  },
  {
    title: "Agentic AI",
    description: "Automate tasks with intelligent RPA workflows.",
    image: agenticAI,
  },
  {
    title: "Voice AI",
    description: "Handle bilingual (Arabic + English) customer conversations naturally.",
    image: voiceAI,
  },
];

const ProductShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            AI for Gulf enterprises delivering measurable outcomes
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-3xl bg-background border border-border">
            <div className="aspect-video relative">
              <img
                src={products[currentIndex].image}
                alt={products[currentIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <h3 className="text-3xl font-bold text-white mb-2">
                  {products[currentIndex].title}
                </h3>
                <p className="text-lg text-white/90">
                  {products[currentIndex].description}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex gap-2">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-accent"
                      : "w-2 bg-muted hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
