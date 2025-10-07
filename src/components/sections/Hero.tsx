import { FaviconGenerator } from "@/components/generator/FaviconGenerator";

export const Hero = () => {
  return (
    <section className="gradient-hero py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
            Favicon Generator – Free Online Tool
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Create favicons from text, emojis, or images instantly. No signup required, fully free to use.
          </p>
        </div>
        
        <FaviconGenerator />
      </div>
    </section>
  );
};
