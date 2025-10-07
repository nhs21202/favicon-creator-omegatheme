import { Zap, Palette, Box, Smartphone, Shield, Globe } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Instant Generation",
      description: "Create favicons in seconds without any signup or registration required."
    },
    {
      icon: Palette,
      title: "Text, Emoji & Image Support",
      description: "Generate favicons from custom text, hundreds of emojis, or upload your own images."
    },
    {
      icon: Box,
      title: "Multiple Formats",
      description: "Download in ICO, PNG, and SVG formats for maximum compatibility across all platforms."
    },
    {
      icon: Smartphone,
      title: "Fully Responsive",
      description: "Works perfectly on any device - desktop, tablet, or mobile. Generate favicons anywhere."
    },
    {
      icon: Shield,
      title: "Safe and Private",
      description: "Your data is never stored on our servers. Everything is processed locally in your browser."
    },
    {
      icon: Globe,
      title: "Browser Compatible",
      description: "Generated favicons work across all modern browsers and platforms without any issues."
    }
  ];

  return (
    <section className="py-20 px-4 gradient-hero">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Use the Favicon Generator Tool
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional favicon creation made simple with powerful features
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-card rounded-lg p-6 shadow-soft transition-smooth hover:shadow-medium">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
