import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-5xl font-bold mb-6 text-primary">Services</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Detailed service information coming soon.
            </p>
            <Button asChild>
              <Link to="/contact">
                Get in Touch <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
