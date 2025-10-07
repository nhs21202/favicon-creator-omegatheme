import { Button } from "@/components/ui/button";
import logo from "@/assets/omegatheme-logo.png";

export const Header = () => {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="OmegaTheme" className="h-8" />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium transition-smooth hover:text-primary">
              Home
            </a>
            <a href="#" className="text-sm font-medium transition-smooth hover:text-primary">
              Services
            </a>
            <a href="#" className="text-sm font-medium transition-smooth hover:text-primary">
              Blog
            </a>
            <a href="#" className="text-sm font-medium transition-smooth hover:text-primary">
              About Us
            </a>
            <Button className="gradient-primary">Start Shopify Trial</Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
