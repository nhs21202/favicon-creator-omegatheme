import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import trustifyLogo from "@/assets/trustify-logo.png";
import googleReviewsLogo from "@/assets/google-reviews-logo.png";
import shoppableVideoLogo from "@/assets/shoppable-video-logo.png";
import etsyReviewsLogo from "@/assets/etsy-reviews-logo.png";

export const CrossSell = () => {
  const tools = [
    {
      logo: trustifyLogo,
      title: "Trustify: Testimonial Reviews",
      description: "Drive sales with visual customer reviews from Amazon & Ali",
      url: "https://apps.shopify.com/trustify"
    },
    {
      logo: googleReviewsLogo,
      title: "Google Reviews by Trustify",
      description: "Display Google Reviews & Get Reviews via Google Review Opt-in",
      url: "https://apps.shopify.com/google-reviews-importer"
    },
    {
      logo: shoppableVideoLogo,
      title: "Trustify: Shoppable Video UGC",
      description: "Embed Tiktok, Youtube, Vimeo videos on your storefront",
      url: "https://apps.shopify.com/related-videos-by-omega"
    },
    {
      logo: etsyReviewsLogo,
      title: "Etsy Reviews Importer",
      description: "Strengthen store trust with authentic Etsy photo reviews",
      url: "https://apps.shopify.com/etsy-reviews-importer"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Try More OmegaTheme Tools
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover our collection of free online tools for developers and designers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {tools.map((tool, index) => (
            <Card key={index} className="p-6 shadow-soft transition-smooth hover:shadow-medium hover:-translate-y-1 flex flex-col">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-lg mb-4">
                <img src={tool.logo} alt={tool.title} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-lg font-bold mb-2">{tool.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 flex-grow">{tool.description}</p>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full mt-auto"
                onClick={() => window.open(tool.url, '_blank')}
              >
                Try Now
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="gradient-primary p-8 shadow-medium text-primary-foreground">
            <h3 className="text-2xl font-bold mb-2">
              Need Advanced Website Tools?
            </h3>
            <p className="mb-6 opacity-90">
              Explore OmegaTheme's powerful Shopify apps and premium tools
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => window.open('https://apps.shopify.com/partners/omegaapps', '_blank')}
            >
              Explore All Tools
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};
