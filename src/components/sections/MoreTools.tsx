import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const MoreTools = () => {
  const tools = [
    {
      title: "Logo Maker",
      description: "Create professional logos in minutes with our AI-powered design tool.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Text to Image",
      description: "Convert any text into beautiful images with custom fonts and styles.",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "PNG to WebP",
      description: "Convert PNG images to WebP format for faster website loading times.",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Gradient Generator",
      description: "Create stunning CSS gradients with our interactive gradient builder.",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "QR Code Generator",
      description: "Generate custom QR codes for your website, social media, or business.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "CSS Minifier",
      description: "Minify and optimize your CSS code to reduce file size and improve performance.",
      color: "from-teal-500 to-blue-500"
    }
  ];

  return (
    <section className="py-20 px-4 gradient-hero">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            More Tools Like This
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our complete collection of free online utilities
          </p>
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6 min-w-max px-4">
            {tools.map((tool, index) => (
              <Card
                key={index}
                className="w-80 flex-shrink-0 p-6 shadow-soft transition-smooth hover:shadow-medium hover:-translate-y-1"
              >
                <div className={`h-32 rounded-lg bg-gradient-to-br ${tool.color} mb-4`} />
                <h3 className="text-xl font-bold mb-2">{tool.title}</h3>
                <p className="text-muted-foreground mb-4">{tool.description}</p>
                <Button variant="outline" className="w-full">
                  Try Tool
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
