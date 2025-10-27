import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Insights = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link
            to="/"
            className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2" size={18} />
            Back to Home
          </Link>

          <div className="text-center mb-12">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-primary">
              Insights for the Growing Business
            </h1>
            <p className="text-xl text-muted-foreground">
              We share lessons, frameworks, and resources for entrepreneurs navigating growth in Nigeria's creative and retail economy.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <p className="text-lg text-muted-foreground">
              Our insights section is coming soon. Check back for articles, frameworks, and resources designed to help you build and grow your business.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Insights;

