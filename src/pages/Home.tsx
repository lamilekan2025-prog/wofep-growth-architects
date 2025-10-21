import { ArrowRight, Building2, Megaphone, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <HeroSlider />

      {/* Who We Are Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-primary">
              Industry Expertise That Delivers Real Growth.
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
               Every sector we serve is unique — but the challenge is the same: turning ideas into structured, scalable operations.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              At WoFEP, we blend consulting expertise with real-world understanding of the fashion, retail, 
              and logistics ecosystems to deliver clarity, strategy, and measurable improvement.
                        
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
