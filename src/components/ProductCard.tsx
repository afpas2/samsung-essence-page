import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ProductCardProps {
  image: string;
  title: string;
  subtitle: string;
  alt: string;
}

const ProductCard = ({ image, title, subtitle, alt }: ProductCardProps) => {
  return (
    <Card className="bg-card border-card-border hover:shadow-lg transition-all duration-300 group">
      <div className="p-6">
        {/* Product Image */}
        <div className="aspect-square mb-6 flex items-center justify-center bg-muted rounded-xl overflow-hidden">
          <img
            src={image}
            alt={alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Info */}
        <div className="text-center space-y-3">
          <h3 className="card-title text-foreground">{title}</h3>
          <p className="text-muted-foreground text-sm">{subtitle}</p>
          
          {/* CTA Button */}
          <Button 
            variant="outline"
            className="w-full rounded-[25px] border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 font-medium"
          >
            Learn More
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;