import { Facebook, Twitter, Linkedin, Youtube, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              OMEGA<span className="text-primary">THEME</span>
            </h3>
            <p className="text-sm opacity-80">
              Professional web tools and Shopify apps to help you build better online experiences.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Tools</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:text-primary transition-smooth">Favicon Generator</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Image Resizer</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Color Picker</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">JSON Formatter</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:text-primary transition-smooth">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Services</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              <a href="#" className="w-8 h-8 rounded bg-background/10 flex items-center justify-center hover:bg-primary transition-smooth">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded bg-background/10 flex items-center justify-center hover:bg-primary transition-smooth">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded bg-background/10 flex items-center justify-center hover:bg-primary transition-smooth">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded bg-background/10 flex items-center justify-center hover:bg-primary transition-smooth">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm opacity-80">
              <Mail className="w-4 h-4" />
              <a href="mailto:contact@omegatheme.com" className="hover:text-primary transition-smooth">
                contact@omegatheme.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} OmegaTheme. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
