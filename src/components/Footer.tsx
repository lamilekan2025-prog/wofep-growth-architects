import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">The WoFEP Company</h3>
            <p className="text-primary-foreground/80 text-sm">
              Building structure. Powering growth.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Home
              </Link>
              <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                About
              </Link>
              <Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Services
              </Link>
              <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Industries</h4>
            <div className="flex flex-col gap-2 text-primary-foreground/80 text-sm">
              <span>Fashion</span>
              <span>Retail</span>
              <span>Logistics</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="mailto:hello@wofepcompany.com"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                hello@wofepcompany.com
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/80 text-sm">
              © 2025 The WoFEP Company. All Rights Reserved.
            </p>
            <p className="text-primary-foreground/80 text-sm">
              Proudly based in Lagos, Nigeria.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
