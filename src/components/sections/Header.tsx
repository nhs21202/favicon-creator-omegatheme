import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import logo from "@/assets/omegatheme-logo-full.png";

export const Header = () => {
  return (
    <header className="border-b bg-background sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="https://omegatheme.com">
              <img src={logo} alt="OmegaTheme" className="h-8" />
            </a>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="https://omegatheme.com" className="text-sm font-medium text-accent transition-smooth hover:text-accent/80">
              Home
            </a>
            <a href="https://omegatheme.com/services" className="text-sm font-medium transition-smooth hover:text-accent">
              Services
            </a>
            <a href="https://omegatheme.com/blog" className="text-sm font-medium transition-smooth hover:text-accent">
              Blog
            </a>
            <a href="https://omegatheme.com/about" className="text-sm font-medium transition-smooth hover:text-accent flex items-center gap-1">
              About Us
              <ChevronDown className="w-3 h-3" />
            </a>
            <a href="https://omegatheme.com/support" className="text-sm font-medium transition-smooth hover:text-accent flex items-center gap-1">
              Support
              <ChevronDown className="w-3 h-3" />
            </a>
            <Button 
              className="bg-foreground hover:bg-foreground/90 text-background rounded-md px-6"
              onClick={() => window.open('https://www.shopify.com/free-trial?utm_source=3447663-impact&utm_medium=cpa&irclickid=wKVWISUo6xycRkmWlC0EAxtPUkp3KF3Nd0CGSA0&irgwc=1&partner=3447663&affpt=excluded&utm_channel=affiliates&iradid=1061744', '_blank')}
            >
              Start Shopify Trial
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
