import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Target, Users, TrendingUp, Building2, Megaphone, Truck } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <div className="pt-32 pb-20 bg-gradient-to-b from-background to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-primary">
              Industry Expertise That Delivers Real Growth
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Every sector we serve is unique — but the challenge is the same: turning ideas into structured, scalable operations.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              At WoFEP, we blend consulting expertise with real-world understanding of the fashion, retail, and logistics ecosystems to deliver clarity, strategy, and measurable improvement.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/contact">
                Start Your Growth Journey <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Fashion Industry Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Building2 className="text-primary" size={32} />
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-primary">
                Fashion: From Creative Vision to Operational Excellence
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                From bespoke and ready-to-wear fashion brands, we work to strengthen your production systems, improve team efficiency, and establish quality and consistency at every stage.
              </p>
              <p className="text-lg text-muted-foreground">
                Our consulting approach balances artistry with structure — ensuring your brand's creative identity is supported by strong operational foundations.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <Card className="border-border hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-primary flex items-center gap-2">
                    <Target className="text-primary" size={24} />
                    How We Help
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-1 flex-shrink-0" size={16} />
                      <span className="text-muted-foreground">Production planning and workflow optimization</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-1 flex-shrink-0" size={16} />
                      <span className="text-muted-foreground">Staff structure and delegation systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-1 flex-shrink-0" size={16} />
                      <span className="text-muted-foreground">Quality control and finishing standards</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-1 flex-shrink-0" size={16} />
                      <span className="text-muted-foreground">Brand positioning and customer experience strategy</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-1 flex-shrink-0" size={16} />
                      <span className="text-muted-foreground">Cost control and vendor management frameworks</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-primary flex items-center gap-2">
                    <TrendingUp className="text-primary" size={24} />
                    Expected Outcomes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-1 flex-shrink-0" size={16} />
                      <span className="text-muted-foreground">Fewer production errors and delays</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-1 flex-shrink-0" size={16} />
                      <span className="text-muted-foreground">Stronger alignment between creative and production teams</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-1 flex-shrink-0" size={16} />
                      <span className="text-muted-foreground">Improved customer satisfaction and delivery reliability</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Retail Industry Section */}
      <section className="py-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Megaphone className="text-primary" size={32} />
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-primary">
                Retail: Structure That Enhances the Customer Experience
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We help fashion, beauty, and lifestyle retailers streamline operations and strengthen their customer engagement strategy.
              </p>
              <p className="text-lg text-muted-foreground">
                From in-store management to brand storytelling and marketing analytics, we help you create a business that runs smoothly and sells confidently.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <Card className="border-border hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-primary flex items-center gap-2">
                    <Target className="text-primary" size={24} />
                    How We Help
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-1 flex-shrink-0" size={16} />
                      <span className="text-muted-foreground">Retail operations and inventory management systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-1 flex-shrink-0" size={16} />
                      <span className="text-muted-foreground">Brand experience and store communication strategy</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-1 flex-shrink-0" size={16} />
                      <span className="text-muted-foreground">Marketing campaign planning and data review</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-1 flex-shrink-0" size={16} />
                      <span className="text-muted-foreground">Staff training and customer service process design</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-1 flex-shrink-0" size={16} />
                      <span className="text-muted-foreground">SOPs for merchandising and sales management</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-primary flex items-center gap-2">
                    <TrendingUp className="text-primary" size={24} />
                    Expected Outcomes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-1 flex-shrink-0" size={16} />
                      <span className="text-muted-foreground">Greater operational consistency</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-1 flex-shrink-0" size={16} />
                      <span className="text-muted-foreground">Clearer brand communication across touchpoints</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-1 flex-shrink-0" size={16} />
                      <span className="text-muted-foreground">Increased repeat sales and customer loyalty</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics Industry Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Truck className="text-primary" size={32} />
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-primary">
                Logistics: Efficiency That Drives Growth
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                In today's fast-moving market, logistics is the backbone of customer satisfaction.
              </p>
              <p className="text-lg text-muted-foreground">
                We help emerging logistics companies build reliable systems for delivery management, team coordination, and service quality — enabling scale without chaos.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <Card className="border-border hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-primary flex items-center gap-2">
                    <Target className="text-primary" size={24} />
                    How We Help
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-1 flex-shrink-0" size={16} />
                      <span className="text-muted-foreground">Workflow mapping for dispatch and fulfillment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-1 flex-shrink-0" size={16} />
                      <span className="text-muted-foreground">Route and time optimization frameworks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-1 flex-shrink-0" size={16} />
                      <span className="text-muted-foreground">Staff accountability systems and reporting structures</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-1 flex-shrink-0" size={16} />
                      <span className="text-muted-foreground">Technology recommendations for tracking and coordination</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-1 flex-shrink-0" size={16} />
                      <span className="text-muted-foreground">Customer service and complaint resolution design</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-primary flex items-center gap-2">
                    <TrendingUp className="text-primary" size={24} />
                    Expected Outcomes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-1 flex-shrink-0" size={16} />
                      <span className="text-muted-foreground">Reduced turnaround time and operational costs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-1 flex-shrink-0" size={16} />
                      <span className="text-muted-foreground">Improved reliability and team coordination</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-1 flex-shrink-0" size={16} />
                      <span className="text-muted-foreground">Stronger client trust and service reputation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Industry Impact Section */}
      <section className="py-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Users className="text-primary" size={32} />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-primary">
              Our Approach Works Across Creative and Consumer Sectors
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're producing garments, managing inventory, or coordinating deliveries — the principles of structure, clarity, and accountability are universal.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our methods adapt to your context, scale, and goals — delivering tangible results across industries.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-all duration-300">
                <Building2 className="text-primary mx-auto mb-4" size={32} />
                <h3 className="font-serif text-xl font-semibold mb-2 text-primary">Fashion</h3>
                <p className="text-muted-foreground text-sm">Creative vision meets operational excellence</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-all duration-300">
                <Megaphone className="text-primary mx-auto mb-4" size={32} />
                <h3 className="font-serif text-xl font-semibold mb-2 text-primary">Retail</h3>
                <p className="text-muted-foreground text-sm">Structure that enhances customer experience</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-all duration-300">
                <Truck className="text-primary mx-auto mb-4" size={32} />
                <h3 className="font-serif text-xl font-semibold mb-2 text-primary">Logistics</h3>
                <p className="text-muted-foreground text-sm">Efficiency that drives growth</p>
              </div>
            </div>

            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/contact">
                Let's Build Your Growth Story <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
