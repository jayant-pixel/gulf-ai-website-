import { Button } from "@/components/ui/button";
import { Sparkles, Users, BarChart3 } from "lucide-react";

const features = [
  {
    badge: "For Customers",
    badgeColor: "bg-accent",
    title: "Instant service, localized experiences",
    icon: Sparkles,
    items: [
      {
        title: "Hospital AI",
        description: "24/7 appointment booking in Arabic & English."
      },
      {
        title: "E-commerce AI",
        description: "Voice and avatar assistants that increase engagement."
      },
      {
        title: "Help Center",
        description: "Always-accurate answers in every language and channel."
      }
    ]
  },
  {
    badge: "For Teams",
    badgeColor: "bg-success",
    title: "Smarter workflows, fewer bottlenecks",
    icon: Users,
    items: [
      {
        title: "Recruit AI",
        description: "Resume screening and candidate calls made effortless."
      },
      {
        title: "Agentic AI",
        description: "Intelligent automations for document validation and process flow."
      },
      {
        title: "Voice AI",
        description: "Natural, bilingual communication integrated into your systems."
      }
    ]
  },
  {
    badge: "For Leaders",
    badgeColor: "bg-blue-500",
    title: "Clarity, control, measurable outcomes",
    icon: BarChart3,
    items: [
      {
        title: "Dashboard AI",
        description: "Unified reporting for HR, CX, and operations."
      },
      {
        title: "Industry 4.0 AI",
        description: "Predictive maintenance for maximum uptime."
      },
      {
        title: "Vision AI",
        description: "Real-time safety and compliance analytics."
      },
      {
        title: "LinkedIn AI",
        description: "Automated lead generation and outreach."
      },
      {
        title: "Finance AI",
        description: "Real-time fraud alerts and compliance insights."
      }
    ]
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="space-y-24">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`animate-fade-in-up ${index % 2 === 0 ? 'bg-card' : 'bg-primary text-primary-foreground'} rounded-3xl p-8 md:p-12`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <span className={`inline-flex items-center gap-2 ${feature.badgeColor} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                      <span className="w-2 h-2 bg-white rounded-full" />
                      {feature.badge}
                    </span>
                    
                    <h3 className="text-3xl md:text-4xl font-bold">
                      {feature.title}
                    </h3>

                    <div className="space-y-4">
                      {feature.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="space-y-2">
                          <h4 className="text-xl font-semibold">{item.title}</h4>
                          <p className={index % 2 === 0 ? 'text-muted-foreground' : 'text-primary-foreground/80'}>
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    <Button 
                      variant={index % 2 === 0 ? "default" : "hero-outline"} 
                      size="lg"
                      className="mt-4"
                    >
                      Learn More
                    </Button>
                  </div>

                  <div className="relative">
                    <div className={`aspect-video rounded-2xl ${index % 2 === 0 ? 'bg-secondary' : 'bg-primary-foreground/10'} flex items-center justify-center`}>
                      <feature.icon className={`w-24 h-24 ${index % 2 === 0 ? 'text-muted-foreground' : 'text-primary-foreground/40'}`} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
