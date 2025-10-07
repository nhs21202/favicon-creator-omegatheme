import { Upload, Settings, Download } from "lucide-react";

export const HowToUse = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload or Enter Content",
      description: "Upload an image, enter text/emoji, or choose from our extensive emoji library."
    },
    {
      icon: Settings,
      title: "Customize Your Design",
      description: "Adjust colors, fonts, sizes, and shapes to match your brand perfectly."
    },
    {
      icon: Download,
      title: "Generate & Download",
      description: "Click generate and download your favicon in multiple formats instantly."
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How to Use Favicon Generator Tool
          </h2>
          <p className="text-lg text-muted-foreground">
            Create professional favicons in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="relative">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 mt-4">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
