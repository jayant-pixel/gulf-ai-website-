import { MessageSquare, Inbox, Ticket, HelpCircle, Users, BarChart } from "lucide-react";

const features = [
  "Messenger",
  "Inbox views",
  "Help Center customization",
  "Multiple Help Centers",
  "Workload management",
  "Multiple team Inboxes",
  "Macros",
  "Inbound and outbound phone calls",
  "Messenger calls",
  "Messenger screensharing",
  "Interactive voice response",
  "Fin Custom Answers",
  "Workflows for Fin",
  "Content targeting",
  "Multiple content sources",
  "Pre-built reports",
  "Custom reports",
  "Conversation topics",
  "App Store",
  "APIs and SDKs"
];

const PlatformSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 animate-fade-in-up">
            The complete customer service platform
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Features List */}
            <div className="space-y-2 animate-fade-in-up">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="py-4 border-b border-border hover:bg-muted/50 transition-colors px-4 rounded-lg"
                  style={{ animationDelay: `${index * 0.02}s` }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-foreground font-medium">{feature}</span>
                    <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Product Preview */}
            <div className="sticky top-24 animate-fade-in">
              <div className="bg-gradient-to-br from-muted to-secondary rounded-2xl p-8 shadow-xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between bg-card p-4 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                        <MessageSquare className="w-5 h-5 text-accent-foreground" />
                      </div>
                      <div>
                        <p className="font-semibold">Fin</p>
                        <p className="text-sm text-muted-foreground">AI Agent</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 bg-muted rounded flex items-center justify-center">
                        <Inbox className="w-4 h-4" />
                      </div>
                      <div className="w-8 h-8 bg-muted rounded flex items-center justify-center">
                        <Ticket className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-card p-4 rounded-lg">
                      <p className="text-sm mb-2 text-muted-foreground">Hello, Paul.</p>
                      <p className="font-semibold text-lg mb-4">How can I help?</p>
                      <div className="bg-accent/10 text-accent px-3 py-2 rounded-lg text-sm inline-block">
                        How many API calls can I make each month?
                      </div>
                    </div>

                    <div className="bg-card p-4 rounded-lg space-y-3">
                      <p className="text-sm text-muted-foreground">
                        Since you're on the Premium Plan, 15k API requests are included in your plan each month. You get 12k requests for the base plan, with an extra 3k per seat included with the Enterprise API add-on.
                      </p>
                      <div className="bg-accent text-accent-foreground px-4 py-2 rounded-lg text-sm font-medium inline-block">
                        Can I purchase it in 3 easy-for-the-green-card-way?
                      </div>
                      <p className="text-sm text-muted-foreground">
                        What's included in your plan? 💡
                        <br />
                        FAQ: Using APIs ↗
                      </p>
                    </div>

                    <div className="bg-card p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        Great, that's answered. You'll receive a confirmation by email.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-muted-foreground" />
                    <BarChart className="w-5 h-5 text-muted-foreground" />
                    <HelpCircle className="w-5 h-5 text-muted-foreground" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
