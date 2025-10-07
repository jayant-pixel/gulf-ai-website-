import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const tabs = [
  "Integrations",
  "Knowledge Hub",
  "Fin AI Copilot",
  "Fin AI Agent",
  "Tickets",
  "Inbox"
];

const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState(2);

  return (
    <section className="relative py-24 bg-gradient-to-b from-transparent to-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground max-w-4xl mx-auto animate-fade-in-up">
            Platform is the only complete AI-first customer service platform
          </h2>

          {/* Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  activeTab === index
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Product Screenshot */}
          <div className="relative max-w-6xl mx-auto animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-card border border-border">
              <div className="aspect-video bg-gradient-to-br from-muted to-secondary flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="text-6xl">💬</div>
                  <p className="text-xl font-semibold text-muted-foreground">
                    {tabs[activeTab]} Interface
                  </p>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto">
                    A personal AI assistant for every support agent with instant answers and intelligent suggestions.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="secondary"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full shadow-lg"
              onClick={() => setActiveTab((prev) => (prev > 0 ? prev - 1 : tabs.length - 1))}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full shadow-lg"
              onClick={() => setActiveTab((prev) => (prev < tabs.length - 1 ? prev + 1 : 0))}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          <p className="text-lg text-muted-foreground animate-fade-in">
            A personal AI assistant for every support agent.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
