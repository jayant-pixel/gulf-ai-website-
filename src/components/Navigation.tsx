import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-primary-foreground rounded-sm" />
            </div>
            <span className="font-bold text-lg">GulfAI</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
