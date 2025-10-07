import { Button } from "@/components/ui/button";
import { Sparkles, Users, BarChart3 } from "lucide-react";

const features = [
  {
    badge: "For customers",
    badgeColor: "bg-accent",
    title: "Instant service, exceptional experiences",
    icon: Sparkles,
    items: [
      {
        title: "Fin AI Agent",
        description: "Provide 24/7 support and resolve 50% of support volume, instantly. It's so much more than an AI chatbot."
      },
      {
        title: "Omnichannel",
        description: "Deliver exceptional experiences wherever your customers are—across channels, at scale."
      },
      {
        title: "Help Center",
        description: "Help customers find accurate answers when and where they need them."
      }
    ]
  },
  {
    badge: "For support agents",
    badgeColor: "bg-success",
    title: "AI-first tools for more efficient agents",
    icon: Users,
    items: [
      {
        title: "Inbox",
        description: "Maximize productivity with an AI-enhanced inbox."
      },
      {
        title: "Fin AI Copilot",
        description: "A personal AI assistant for every support agent."
      },
      {
        title: "Tickets",
        description: "Resolve complex issues quickly with tickets optimized for collaboration."
      }
    ]
  },
  {
    badge: "For support leaders",
    badgeColor: "bg-blue-500",
    title: "Tools and insights to empower your support team",
    icon: BarChart3,
    items: [
      {
        title: "AI Insights & Reporting",
        description: "Robust reporting and insights for your entire support operation."
      },
      {
        title: "Workflows",
        description: "Build powerful automations with our no-code visual builder."
      },
      {
        title: "Outbound messaging",
        description: "Send proactive messages to get ahead of issues and reduce inbound volume."
      }
    ]
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            AI-first customer service for customers, agents, and leaders
          </h2>
        </div>

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
                      Learn more
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
