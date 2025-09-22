import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import TVHighlightSection from "@/components/TVHighlightSection";
import BespokeAISection from "@/components/BespokeAISection";
import ChatbotSection from "@/components/ChatbotSection";
import ChatbotWidget from "@/components/ChatbotWidget";
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
        <ChatbotSection />
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
};

export default Index;