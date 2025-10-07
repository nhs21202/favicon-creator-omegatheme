import { Button } from "@/components/ui/button";
import logo from "@/assets/omegatheme-logo-full.png";

export const Header = () => {
  return (
    <header className="border-b bg-background sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="OmegaTheme" className="h-10" />
          </div>
          <nav className="hidden md:flex items-center gap-8">
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
            <a href="#" className="text-sm font-medium transition-smooth hover:text-primary">
              Support
            </a>
            <Button className="gradient-primary">Start Shopify Trial</Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
