import { FileImage, FileCode, Image } from "lucide-react";
import { Card } from "@/components/ui/card";

export const FormatExplainer = () => {
  const formats = [
    {
      icon: FileImage,
      title: "ICO Format",
      description: "Standard favicon format supported by all browsers. This is the most widely used format for favicons and works across all platforms including legacy browsers."
    },
    {
      icon: Image,
      title: "PNG Format",
      description: "High-quality web image format with transparency support. Perfect for modern websites and applications. Offers better quality and smaller file sizes than ICO."
    },
    {
      icon: FileCode,
      title: "SVG Format",
      description: "Scalable vector graphics that remain sharp at any size. Ideal for modern browsers and responsive designs. The file size is minimal and quality is always perfect."
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Understanding Favicon Formats
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the right format for your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {formats.map((format, index) => (
            <Card key={index} className="p-6 shadow-soft">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-success/10 mb-4">
                <format.icon className="w-6 h-6 text-success" />
              </div>
              <h3 className="text-xl font-bold mb-3">{format.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{format.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
