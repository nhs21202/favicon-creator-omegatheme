import { MapPin, Building2, Mail, Facebook, Youtube, MessageCircle } from "lucide-react";
import logo from "@/assets/omegatheme-logo-full.png";

export const Footer = () => {
  return (
    <footer className="bg-[#3d4f5c] text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8">
          <img src={logo} alt="OmegaTheme" className="h-12 mb-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h4 className="text-accent font-bold mb-4 text-lg">About Growth</h4>
            <p className="text-sm opacity-80 leading-relaxed">
              Innovative tech for eCommerce growth
            </p>
          </div>

          <div>
            <h4 className="text-accent font-bold mb-4 text-lg">Information</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li><a href="#" className="hover:text-accent transition-smooth">App Store Analytics</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Brand Name Generator</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Contact Us</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Terms of Use</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">App Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-accent font-bold mb-4 text-lg">Contact Info</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>8th floor, Hoa Cuong Building 18/11 Thai Ha, Dong Da Dist, Hanoi</span>
              </li>
              <li className="flex items-start gap-2">
                <Building2 className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Head: Hoa Cuong Building 18/11 Thai Ha, Dong Da Dist, Hanoi</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:contact@omegatheme.com" className="hover:text-accent transition-smooth">
                  contact@omegatheme.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Facebook className="w-4 h-4 flex-shrink-0" />
                <a href="#" className="hover:text-accent transition-smooth">Facebook OmegaTheme</a>
              </li>
              <li className="flex items-center gap-2">
                <Youtube className="w-4 h-4 flex-shrink-0" />
                <a href="#" className="hover:text-accent transition-smooth">Youtube OmegaTheme</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 flex-shrink-0" />
                <a href="#" className="hover:text-accent transition-smooth">Wechat OmegaTheme</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm opacity-70">
          <p className="mb-2">
            Copyright © <a href="#" className="hover:text-accent transition-smooth">XIPAT Flexible Solutions</a>. All Rights Reserved
          </p>
          <p className="text-xs">
            All product and company names are trademarks™ or registered® trademarks of their respective holders. Use of them does not imply any affiliation with or endorsement by them.
          </p>
        </div>
      </div>
    </footer>
  );
};
