import { Brain, Heart, TrendingUp, Factory, BarChart, ShoppingCart, Eye, Linkedin, MapPin, Bot, Mic, DollarSign } from "lucide-react";

const features = [
  { icon: Brain, title: "Recruit AI", description: "Automate hiring, scoring, and candidate engagement." },
  { icon: Heart, title: "Hospital AI", description: "Streamline appointment systems and patient communication." },
  { icon: ShoppingCart, title: "E-commerce AI", description: "Personalize experiences and boost conversions." },
  { icon: BarChart, title: "Dashboard AI", description: "Integrate analytics across every department." },
  { icon: Factory, title: "Industry 4.0 AI", description: "Predict machine failures and optimize throughput." },
  { icon: Eye, title: "Vision AI", description: "Convert CCTV data into safety insights." },
  { icon: Linkedin, title: "LinkedIn AI", description: "Generate qualified leads on autopilot." },
  { icon: Mic, title: "Voice AI", description: "AI voice support across Arabic and English." },
  { icon: Bot, title: "Agentic AI (RPA)", description: "Build automations that think, validate, and recover." },
  { icon: DollarSign, title: "Finance AI", description: "Stay audit-ready and prevent fraud with proactive insights." },
  { icon: MapPin, title: "Locator AI", description: "Seamless indoor navigation for malls and warehouses." },
];

const PlatformSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 animate-fade-in-up">
            The complete AI suite for Gulf enterprises
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-card p-6 rounded-xl border border-border hover:border-accent transition-all hover:shadow-lg animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
