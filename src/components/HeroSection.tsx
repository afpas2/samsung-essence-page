import { Button } from "@/components/ui/button";
import heroImage from "@/assets/galaxy-z-fold7-hero.jpg";

const HeroSection = () => {
  return (
    <section className="bg-background py-16 lg:py-24 transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Hero Title */}
          <h1 className="hero-title text-foreground mb-4">
            Galaxy Z Fold7
          </h1>
          
          {/* Hero Subtitle */}
          <p className="text-lg text-muted-foreground mb-8 flex items-center justify-center gap-2">
            Galaxy AI 
            <span className="text-2xl">✨</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-[25px] px-8 py-3 font-semibold transition-all duration-200"
            >
              Buy Now
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-[25px] px-8 py-3 font-semibold transition-all duration-200"
            >
              Learn More
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