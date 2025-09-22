import ProductCard from "./ProductCard";
import galaxyS25Ultra from "@/assets/galaxy-s25-ultra.jpg";
import galaxyZFlip7 from "@/assets/galaxy-z-flip7.jpg";
import galaxyWatch8 from "@/assets/galaxy-watch8.jpg";

const ProductsSection = () => {
  const products = [
    {
      image: galaxyS25Ultra,
      title: "Galaxy S25 Ultra",
      subtitle: "Galaxy AI ✨",
      alt: "Samsung Galaxy S25 Ultra with S Pen"
    },
    {
      image: galaxyZFlip7,
      title: "Galaxy Z Flip7", 
      subtitle: "Design dobrável inovador",
      alt: "Samsung Galaxy Z Flip7 foldable smartphone"
    },
    {
      image: galaxyWatch8,
      title: "Galaxy Watch8",
      subtitle: "Estilo e saúde no pulso",
      alt: "Samsung Galaxy Watch8 smartwatch"
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title text-samsung-black mb-4">
            Explore Nossa Linha Galaxy
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Descubra os mais recentes dispositivos Galaxy com tecnologia de ponta 
            e recursos de inteligência artificial integrados.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              subtitle={product.subtitle}
              alt={product.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;