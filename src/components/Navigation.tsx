import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/weblogo.png"
              alt="The WoFEP Company logo"
              className="h-12 w-auto"
            />
            <span className="font-serif text-2xl font-semibold text-primary">The WoFEP Company</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/services" className="text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link to="/industries" className="text-foreground hover:text-primary transition-colors">
              Industries
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:text-primary transition-colors py-2"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:text-primary transition-colors py-2"
              >
                About
              </Link>
              <Link
                to="/services"
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:text-primary transition-colors py-2"
              >
                Services
              </Link>
              <Link
                to="/industries"
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:text-primary transition-colors py-2"
              >
                Industries
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:text-primary transition-colors py-2"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
