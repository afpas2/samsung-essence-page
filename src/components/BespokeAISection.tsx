import { Button } from "@/components/ui/button";
import bespokeImage from "@/assets/bespoke-ai-appliances.jpg";

const BespokeAISection = () => {
  return (
    <section className="bg-samsung-black py-16 lg:py-24">
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
          <div className="space-y-6 text-white">
            <h2 className="section-title">
              Bespoke AI
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Eletrodomésticos inteligentes que se adaptam ao seu estilo de vida. 
              Tecnologia AI que aprende suas preferências e otimiza sua rotina doméstica.
            </p>
            <div className="flex items-center gap-2 text-samsung-blue-light">
              <span className="text-lg font-medium">Powered by Galaxy AI</span>
              <span className="text-2xl">✨</span>
            </div>
            <Button 
              size="lg"
              className="bg-white text-samsung-black hover:bg-gray-100 rounded-[25px] px-8 py-3 font-semibold transition-all duration-200"
            >
              Descobrir Bespoke
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BespokeAISection;