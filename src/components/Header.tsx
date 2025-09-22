import { Search, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const navItems = [
    "Loja",
    "Mobile", 
    "TV & AV",
    "Eletrodomésticos",
    "IT",
    "Acessórios"
  ];

  return (
    <header className="border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-samsung-black tracking-wide">
              SAMSUNG
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 hover:text-samsung-black font-medium text-sm transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="p-2">
              <Search className="w-5 h-5 text-gray-600" />
            </Button>
            <Button variant="ghost" size="sm" className="p-2">
              <ShoppingCart className="w-5 h-5 text-gray-600" />
            </Button>
            <Button variant="ghost" size="sm" className="p-2">
              <User className="w-5 h-5 text-gray-600" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;