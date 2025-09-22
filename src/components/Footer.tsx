const Footer = () => {
  const footerLinks = [
    "Suporte",
    "Contato", 
    "Política de Privacidade",
    "Termos de Uso",
    "Sustentabilidade"
  ];

  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center space-y-6">
          {/* Footer Navigation */}
          <nav className="flex flex-wrap justify-center gap-8">
            {footerLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-gray-500 hover:text-samsung-black text-sm font-medium transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <div className="border-t border-gray-200 pt-6">
            <p className="text-gray-400 text-sm">
              © 2025 Samsung Inspired Landing Page. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;