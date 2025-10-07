import { Button } from "@/components/ui/button";

const StatsSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Leading the market where it matters most
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Organizations across the Gulf choose GulfAI for measurable ROI, compliance-ready automation, and enterprise-grade delivery.
              </p>
              <p className="text-lg text-muted-foreground">
                From pilot to production, we help leaders see results within weeks.
              </p>
              <Button size="lg" className="mt-4">
                See Customer Outcomes
              </Button>
            </div>

            <div className="bg-background rounded-2xl p-8 shadow-xl animate-fade-in">
              <h3 className="text-2xl font-bold mb-8 text-foreground">
                Competitive Advantage
              </h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-muted-foreground">Implementation Speed</span>
                    <span className="text-sm font-bold text-accent">95%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-accent rounded-full" style={{ width: '95%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-muted-foreground">Customer Satisfaction</span>
                    <span className="text-sm font-bold text-success">92%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-success rounded-full" style={{ width: '92%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-muted-foreground">ROI Achievement</span>
                    <span className="text-sm font-bold text-blue-500">88%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: '88%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-muted-foreground">Compliance Ready</span>
                    <span className="text-sm font-bold text-cyan-500">97%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-500 rounded-full" style={{ width: '97%' }} />
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Data based on 100+ Gulf enterprise deployments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
