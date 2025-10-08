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
    <section className="py-20 px-4 bg-background" itemScope itemType="https://schema.org/ItemList">
      <div className="container mx-auto max-w-6xl">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Try More OmegaTheme Apps and Tools
          </h2>
          <p className="text-lg text-muted-foreground">
            Cross-sell recommendations: Discover related tools and apps to enhance your store
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {tools.map((tool, index) => (
            <Card 
              key={index} 
              className="p-6 shadow-soft transition-smooth hover:shadow-medium hover:-translate-y-1 flex flex-col"
              itemScope
              itemProp="itemListElement"
              itemType="https://schema.org/SoftwareApplication"
            >
              <meta itemProp="position" content={String(index + 1)} />
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-lg mb-4">
                <img src={tool.logo} alt={tool.title} className="w-full h-full object-contain" itemProp="image" />
              </div>
              <h3 className="text-lg font-bold mb-2" itemProp="name">{tool.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 flex-grow" itemProp="description">{tool.description}</p>
              <link itemProp="url" href={tool.url} />
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full mt-auto hover:bg-foreground hover:text-background"
                onClick={() => window.open(tool.url, '_blank')}
              >
                Try Now
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="gradient-shopify p-8 shadow-medium text-foreground">
            <h3 className="text-2xl font-bold mb-2">
              Need Advanced Website Tools?
            </h3>
            <p className="mb-6 opacity-90">
              Explore OmegaTheme's powerful Shopify apps and premium tools
            </p>
            <Button 
              size="lg" 
              className="bg-foreground text-background hover:bg-foreground/90"
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
