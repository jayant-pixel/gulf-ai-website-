import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import backgroundImage from "@/assets/final background.jpg";
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

const HeroSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <div className="relative">
      <img src={backgroundImage} alt="Background" className="w-full h-auto" />
      <div className="absolute inset-0 z-10 flex flex-col h-full">
        <main className="pt-20 md:pt-32 pb-24 px-6 md:px-12">
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Gulf's Advanced AI & Analytics Company
            </h1>
            <p className="mt-6 text-lg text-gray-200">
              From voice automation to analytics dashboards, GulfAI builds localized, production-ready AI systems that deliver measurable outcomes for Gulf enterprises.
            </p>
            <div className="mt-8 flex items-center space-x-4">
              <Button variant="hero" size="lg">See a Gulf Pilot</Button>
              <Button variant="hero-outline" size="lg">Start Your AI Transformation</Button>
            </div>
          </div>
        </main>
        <div className="h-64"></div>
        <section className="py-20 px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            AI for Gulf enterprises delivering measurable outcomes
          </h2>
          <div className="mt-12 flex justify-center space-x-8 text-white">
            {products.map((product, index) => (
              <a
                key={product.title}
                href="#"
                className={`hover:text-white ${currentIndex === index ? 'text-white font-semibold border-b-2 border-primary pb-2' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentIndex(index);
                }}
              >
                {product.title}
              </a>
            ))}
          </div>
          <div className="mt-12 relative max-w-6xl mx-auto flex justify-center">
            <img alt={products[currentIndex].title} className="rounded-lg shadow-2xl" src={products[currentIndex].image} />
            <button className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/50 dark:bg-black/50 p-2 rounded-full text-text-light dark:text-text-dark hover:bg-white dark:hover:bg-black" onClick={prevSlide}>
              <ChevronLeft />
            </button>
            <button className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/50 dark:bg-black/50 p-2 rounded-full text-text-light dark:text-text-dark hover:bg-white dark:hover:bg-black" onClick={nextSlide}>
              <ChevronRight />
            </button>
          </div>
          <p className="mt-8 text-lg text-subtext-light dark:text-subtext-dark">{products[currentIndex].description}</p>
        </section>
        <div className="h-24"></div>
      </div>
    </div>
  );
};

export default HeroSection;