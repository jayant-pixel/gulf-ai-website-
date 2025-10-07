import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const CopilotSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                A personal AI copilot for every Gulf team.
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                GulfAI Copilot brings contextual support across your workflows — helping teams make faster, more informed decisions.
              </p>
              <Button size="lg" className="mt-4">
                Learn More
              </Button>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-xl animate-fade-in">
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-border">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold">GulfAI Copilot</p>
                    <p className="text-sm text-muted-foreground">Your AI assistant</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-muted/50 p-4 rounded-lg border-l-4 border-accent">
                    <p className="text-sm text-muted-foreground mb-2">Question:</p>
                    <p className="font-medium mb-3">
                      What are the exceptions to our refund policy?
                    </p>
                    <p className="text-sm text-muted-foreground">
                      → Returns accepted for defects, dissatisfaction, or verified mistakes.
                    </p>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg border-l-4 border-success">
                    <p className="text-sm text-muted-foreground mb-2">Question:</p>
                    <p className="font-medium mb-3">
                      How do I process an exchange?
                    </p>
                    <p className="text-sm text-muted-foreground">
                      → Review, approve, and confirm within your team workflow.
                    </p>
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

export default CopilotSection;
