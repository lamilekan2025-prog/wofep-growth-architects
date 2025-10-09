import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-5xl font-bold mb-6 text-primary text-center">Get in Touch</h1>
            <p className="text-xl text-muted-foreground mb-12 text-center">
              Ready to build structure and scale your business? Let's start a conversation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card p-8 rounded-lg border border-border">
                <Mail className="text-primary mb-4" size={32} />
                <h3 className="font-serif text-2xl font-semibold mb-2 text-primary">Email Us</h3>
                <a 
                  href="mailto:hello@wofepcompany.com" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  hello@wofepcompany.com
                </a>
              </div>

              <div className="bg-card p-8 rounded-lg border border-border">
                <Linkedin className="text-primary mb-4" size={32} />
                <h3 className="font-serif text-2xl font-semibold mb-2 text-primary">Connect on LinkedIn</h3>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Follow us on LinkedIn
                </a>
              </div>
            </div>

            <div className="mt-12 bg-secondary p-8 rounded-lg text-center">
              <h3 className="font-serif text-2xl font-semibold mb-4 text-primary">Based in Lagos, Nigeria</h3>
              <p className="text-muted-foreground">
                Proudly serving entrepreneurs and businesses across Africa and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
