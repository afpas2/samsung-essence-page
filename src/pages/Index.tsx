import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import TVHighlightSection from "@/components/TVHighlightSection";
import BespokeAISection from "@/components/BespokeAISection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <TVHighlightSection />
        <BespokeAISection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;