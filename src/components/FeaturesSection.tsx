import { Button } from "@/components/ui/button";
import dashboardAI from "@/assets/dashboard-ai.jpg";
import agenticAI from "@/assets/agentic-ai.jpg";
import visionAI from "@/assets/vision-ai.jpg";

const features = [
  {
    badge: "For Customers",
    title: "Instant service, localized experiences",
    image: dashboardAI,
    layout: "default",
    items: [
      {
        title: "Hospital AI",
        description: "Manage patient bookings and inquiries with 24/7 multilingual support."
      },
      {
        title: "E-commerce AI",
        description: "Engage customers with AI-driven avatars and voice guidance."
      },
      {
        title: "Help Center",
        description: "Help customers find accurate answers when and where they need them."
      }
    ]
  },
  {
    badge: "For Teams",
    title: "Smarter workflows, fewer bottlenecks",
    image: agenticAI,
    layout: "split",
    items: [
      {
        title: "Recruit AI",
        description: "Automate candidate screening and interviews in Arabic & English."
      },
      {
        title: "Agentic AI",
        description: "Automate tasks with intelligent RPA workflows."
      },
      {
        title: "Voice AI",
        description: "Handle bilingual (Arabic + English) customer conversations naturally."
      }
    ]
  },
  {
    badge: "For Leaders",
    title: "Clarity, control, measurable outcomes",
    image: visionAI,
    layout: "default",
    items: [
      {
        title: "Dashboard AI",
        description: "Get boardroom-ready insights across HR, CX, and operations."
      },
      {
        title: "Industry 4.0 AI",
        description: "Predict downtime and optimize production efficiency."
      },
      {
        title: "Vision AI",
        description: "Turn CCTV into safety and compliance intelligence."
      },
      {
        title: "LinkedIn AI",
        description: "Generate and nurture leads automatically."
      },
      {
        title: "Finance AI",
        description: "Streamline compliance and detect fraud in real time."
      }
    ]
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-[#17110e]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            AI-first customer service for customers, agents, and leaders
          </h2>
        </div>
        <div className="space-y-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 md:p-12 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {feature.layout === 'default' ? (
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <span className={`inline-flex items-center gap-2 ${index === 0 ? 'bg-orange-500' : 'bg-green-500'} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                      <span className="w-2 h-2 bg-white rounded-full" />
                      {feature.badge}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold text-black">{feature.title}</h3>
                    <div className="space-y-4 border-t pt-4">
                      {feature.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="space-y-2 border-b pb-4 last:border-b-0">
                          <h4 className="text-xl font-semibold text-black">{item.title}</h4>
                          <p className="text-black/80">{item.description}</p>
                        </div>
                      ))}
                    </div>
                    <Button variant="default" size="lg" className="mt-4 bg-black text-white hover:bg-gray-800">Learn More</Button>
                  </div>
                  <div className="relative">
                    <img src={feature.image} alt={feature.title} className="rounded-2xl" />
                  </div>
                </div>
              ) : (
                <div>
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                      <span className="inline-flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        <span className="w-2 h-2 bg-white rounded-full" />
                        {feature.badge}
                      </span>
                      <h3 className="text-3xl md:text-4xl font-bold text-black">{feature.title}</h3>
                    </div>
                    <div className="relative">
                      <img src={feature.image} alt={feature.title} className="rounded-2xl" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-8 mt-12 border-t pt-8">
                    {feature.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="space-y-2">
                        <h4 className="text-xl font-semibold text-black">{item.title}</h4>
                        <p className="text-black/80">{item.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className="text-left mt-8">
                    <Button variant="default" size="lg" className="bg-black text-white hover:bg-gray-800">Learn More</Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
