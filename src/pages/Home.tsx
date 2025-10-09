import { ArrowRight, Building2, Megaphone, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-home.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(135deg, hsl(280 45% 30% / 0.95) 0%, hsl(280 35% 20% / 0.95) 100%), url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Building Structure.<br />Powering Growth.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 animate-fade-in">
              The WoFEP Company is a boutique consulting firm helping start-ups and early-stage businesses
              in the fashion, retail, and logistics industries build structure, scale operations, and grow sustainably.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/contact">
                  Let's Talk Growth <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/services">
                  Explore Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-primary">
              We help fashion, retail, and logistics businesses move from idea to impact.
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              At WoFEP, we understand the realities of building a business from the ground up — limited resources,
              lean teams, and ambitious goals.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our approach blends management consulting precision with creative and supply chain industry insight
              to help entrepreneurs structure their operations, strengthen their teams, and position their brands
              for long-term success.
            </p>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/about">
                Learn About Our Story <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
            Our Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="border-border hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Building2 className="text-primary" size={24} />
                </div>
                <CardTitle className="font-serif text-2xl">Business Operations & Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We assist founders in designing efficient systems, workflows, and management structures for scalability.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Megaphone className="text-primary" size={24} />
                </div>
                <CardTitle className="font-serif text-2xl">Brand & Marketing Advisory</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We guide businesses in defining their brand story, improving communication, and attracting loyal customers.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="text-primary" size={24} />
                </div>
                <CardTitle className="font-serif text-2xl">Human Capital & Team Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We build capacity within teams through structure, delegation, and leadership training.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="text-primary" size={24} />
                </div>
                <CardTitle className="font-serif text-2xl">Process & Performance Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We streamline production and operational processes to improve quality and reduce costs.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/services">
                See Full Service Overview <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-primary">
              Built for Early-Stage Growth
            </h2>
            <p className="text-lg text-muted-foreground">
              We partner with founders and creative entrepreneurs shaping the next generation of African brands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-all duration-300">
              <h3 className="font-serif text-2xl font-semibold mb-4 text-primary">Fashion</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Bespoke ateliers</li>
                <li>Ready-to-wear labels</li>
                <li>Production studios</li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-all duration-300">
              <h3 className="font-serif text-2xl font-semibold mb-4 text-primary">Retail</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Concept stores</li>
                <li>Beauty and lifestyle brands</li>
                <li>Boutique retailers</li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-all duration-300">
              <h3 className="font-serif text-2xl font-semibold mb-4 text-primary">Logistics</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Courier services</li>
                <li>Delivery start-ups</li>
                <li>Fulfillment partners</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">
              We believe growth starts with structure.
            </h2>
            <blockquote className="text-xl md:text-2xl mb-6 italic">
              "Our mission is to help founders build businesses that can stand without them — with systems,
              strategy, and structure that create room for innovation and impact."
            </blockquote>
            <p className="text-primary-foreground/80">— The WoFEP Company Team</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-primary">
              Let's Build Your Growth Story.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to formalize your operations, empower your team, and scale your brand?
              Let's turn your business potential into performance.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/contact">
                Start a Conversation <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
