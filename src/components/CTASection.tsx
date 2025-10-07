import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Your AI-first transformation starts here.
          </h2>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
            Empower your enterprise with measurable, scalable, and compliant AI.
          </p>

          <Button 
            variant="hero-outline" 
            size="lg" 
            className="text-lg px-8 py-6 h-auto group"
          >
            Book a Strategy Call
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
