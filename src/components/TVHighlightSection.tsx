import { Button } from "@/components/ui/button";
import tvImage from "@/assets/samsung-tv-highlight.jpg";

const TVHighlightSection = () => {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="section-title text-samsung-black">
              Experiência Visual Revolucionária
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Descubra a nova era da televisão com tecnologia QLED 8K e 
              inteligência artificial integrada para uma experiência única.
            </p>
            <Button 
              size="lg"
              className="bg-samsung-black text-white hover:bg-gray-800 rounded-[25px] px-8 py-3 font-semibold transition-all duration-200"
            >
              Explorar TVs
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