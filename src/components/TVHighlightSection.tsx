import { Button } from "@/components/ui/button";
import tvImage from "@/assets/samsung-tv-highlight.jpg";

const TVHighlightSection = () => {
  return (
    <section className="bg-muted py-16 lg:py-24 transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="section-title text-foreground">
              Revolutionary Visual Experience
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Discover the new era of television with QLED 8K technology and 
              integrated artificial intelligence for a unique experience.
            </p>
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-[25px] px-8 py-3 font-semibold transition-all duration-200"
            >
              Explore TVs
            </Button>
          </div>

          {/* TV Image */}
          <div className="relative">
            <img
              src={tvImage}
              alt="Samsung QLED 8K Smart TV in modern living room"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TVHighlightSection;