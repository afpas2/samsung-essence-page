import { Button } from "@/components/ui/button";
import heroImage from "@/assets/galaxy-z-fold7-hero.jpg";

const HeroSection = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Hero Title */}
          <h1 className="hero-title text-samsung-black mb-4">
            Galaxy Z Fold7
          </h1>
          
          {/* Hero Subtitle */}
          <p className="text-lg text-gray-500 mb-8 flex items-center justify-center gap-2">
            Galaxy AI 
            <span className="text-2xl">✨</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg"
              className="bg-samsung-black text-white hover:bg-gray-800 rounded-[25px] px-8 py-3 font-semibold transition-all duration-200"
            >
              Comprar
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-samsung-black text-samsung-black hover:bg-samsung-black hover:text-white rounded-[25px] px-8 py-3 font-semibold transition-all duration-200"
            >
              Saiba Mais
            </Button>
          </div>

          {/* Hero Product Image */}
          <div className="max-w-4xl mx-auto">
            <img
              src={heroImage}
              alt="Samsung Galaxy Z Fold7 smartphone with innovative folding design"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;