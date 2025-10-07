import ceoIllustration from "@/assets/ceo-illustration.jpg";

const CEOLetter = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                An open letter from our CEO: welcome to the age of AI-first
              </h2>
              
              <div className="space-y-4 text-lg text-foreground/80">
                <p>
                  In customer service, we all share the same goal: to provide best-in-class customer experiences.
                </p>
                
                <p>
                  AI represents an unprecedented new way—not just to achieve that goal—but to redefine it. Our AI-first platform is built on a single AI system with three major components designed to transform customer service for everyone:
                </p>
                
                <div className="space-y-3 pl-4 border-l-4 border-accent">
                  <p className="font-semibold">
                    <span className="text-accent">AI Agent</span> empowers agents to resolve customer inquiries 24/7. AI Copilot provides instant, always-on support for agents coming in 2020) provides holistic AI insights and recommendations for support leaders.
                  </p>
                </div>
                
                <p>
                  All three learn from every customer conversation to improve the system. That's what makes Platform the only complete AI-first customer service platform. And we are determined to make Platform the best, and the only customer service platform you will ever need.
                </p>
              </div>

              <div className="pt-4">
                <div className="text-2xl font-bold mb-2">Eoghan McCabe</div>
                <div className="text-muted-foreground">CEO and Co-founder</div>
                <p className="text-sm text-muted-foreground mt-2 italic">
                  P.S. Read our 'Things we believe' page to see our plan on the future of Customer Service
                </p>
              </div>
            </div>

            <div className="animate-fade-in">
              <img 
                src={ceoIllustration} 
                alt="AI Illustration" 
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOLetter;
