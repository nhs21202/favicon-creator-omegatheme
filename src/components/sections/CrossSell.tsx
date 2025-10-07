import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Image, FileJson, Palette, Code } from "lucide-react";

export const CrossSell = () => {
  const tools = [
    {
      icon: Image,
      title: "Image Resizer",
      description: "Resize images to any dimension while maintaining quality and aspect ratio."
    },
    {
      icon: FileJson,
      title: "JSON Formatter",
      description: "Format and validate JSON data with syntax highlighting and error detection."
    },
    {
      icon: Palette,
      title: "Color Picker",
      description: "Extract colors from images and create beautiful color palettes instantly."
    },
    {
      icon: Code,
      title: "Meta Tag Generator",
      description: "Generate SEO-friendly meta tags for your website in seconds."
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
            <Card key={index} className="p-6 shadow-soft transition-smooth hover:shadow-medium hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 mb-4">
                <tool.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold mb-2">{tool.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{tool.description}</p>
              <Button variant="outline" size="sm" className="w-full">
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
            <Button size="lg" variant="secondary">
              Explore All Tools
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};
