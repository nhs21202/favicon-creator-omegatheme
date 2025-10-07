import { Hero } from "@/components/sections/Hero";
import { HowToUse } from "@/components/sections/HowToUse";
import { Features } from "@/components/sections/Features";
import { FormatExplainer } from "@/components/sections/FormatExplainer";
import { FAQ } from "@/components/sections/FAQ";
import { CrossSell } from "@/components/sections/CrossSell";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <HowToUse />
        <Features />
        <FormatExplainer />
        <FAQ />
        <CrossSell />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
