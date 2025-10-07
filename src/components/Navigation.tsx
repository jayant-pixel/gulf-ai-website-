import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-primary-foreground rounded-sm" />
              </div>
              <span className="font-bold text-lg">Platform</span>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              <button className="text-sm font-medium hover:text-accent transition-colors">
                Product
              </button>
              <button className="text-sm font-medium hover:text-accent transition-colors">
                Resources
              </button>
              <button className="text-sm font-medium hover:text-accent transition-colors">
                Pricing
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden sm:inline-flex">
              Contact Sales
            </Button>
            <Button variant="ghost" className="hidden sm:inline-flex">
              Sign in
            </Button>
            <Button variant="ghost" className="hidden sm:inline-flex">
              View demo
            </Button>
            <Button variant="default" className="bg-primary">
              Start free trial
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
