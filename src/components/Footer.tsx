const Footer = () => {
  const footerLinks = [
    "Support",
    "Contact", 
    "Privacy Policy",
    "Terms of Use",
    "Sustainability"
  ];

  return (
    <footer className="bg-muted py-12 transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center space-y-6">
          {/* Footer Navigation */}
          <nav className="flex flex-wrap justify-center gap-8">
            {footerLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <div className="border-t border-border pt-6">
            <p className="text-muted-foreground text-sm">
              © 2025 Samsung Inspired Landing Page. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;