import { Button } from "@/components/ui/button";
import bespokeImage from "@/assets/bespoke-ai-appliances.jpg";

const BespokeAISection = () => {
  return (
    <section className="bg-primary py-16 lg:py-24 transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Bespoke Image */}
          <div className="relative">
            <img
              src={bespokeImage}
              alt="Samsung Bespoke AI kitchen appliances collection"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6 text-primary-foreground">
            <h2 className="section-title">
              Bespoke AI
            </h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Smart appliances that adapt to your lifestyle. 
              AI technology that learns your preferences and optimizes your home routine.
            </p>
            <div className="flex items-center gap-2 text-accent">
              <span className="text-lg font-medium">Powered by Galaxy AI</span>
              <span className="text-2xl">✨</span>
            </div>
            <Button 
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-[25px] px-8 py-3 font-semibold transition-all duration-200"
            >
              Discover Bespoke
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BespokeAISection;