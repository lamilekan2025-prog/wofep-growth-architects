import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Megaphone, Users, TrendingUp, CheckCircle2, Circle, ChevronRight } from "lucide-react";
import servicesImage from "@/assets/services.jpeg";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background image with overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(135deg, hsl(280 45% 30% / 0.6) 0%, hsl(280 35% 20% / 0.6) 100%), url(${servicesImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Fixed content overlay */}
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Structure. Strategy. Systems that scale.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 animate-fade-in">
              We help founders and early-stage teams streamline their operations, strengthen their brand, and set up the foundation for sustainable growth. Our consulting services are designed for start-ups ready to move from informal to organized — and from ambition to achievement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/contact">
                  Let's Work Together <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Service Pillars */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
              What We Do
            </h2>
          </div>

          {/* Service 1: Business Operations & Strategy */}
          <div className="max-w-5xl mx-auto mb-16">
            <Card className="border-border hover:shadow-lg transition-all duration-300 mb-8">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="text-primary" size={32} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="font-serif text-3xl mb-3 text-primary">
                      Business Operations & Strategy
                    </CardTitle>
                    <CardDescription className="text-lg">
                      We help businesses design the internal structure and systems that drive efficiency and scalability. From workflows to delegation, we ensure every process supports your long-term goals.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-primary mb-4">What We Offer</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">Business structure design & process mapping</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">Standard Operating Procedures (SOPs) and workflow documentation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">Performance tracking systems</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">Operational cost reduction and efficiency audits</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">Founder workload optimization through delegation frameworks</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-primary mb-4">Expected Outcomes</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <ChevronRight className="text-primary mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">Up to 15% reduction in operational costs</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <ChevronRight className="text-primary mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">20% improvement in productivity</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <ChevronRight className="text-primary mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">Clearer team roles and accountability</span>
                      </li>
                    </ul>
                    <div className="mt-6 p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-primary">Who It's For:</span> Growing brands that need better systems, structure, and execution discipline.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service 2: Brand & Marketing Advisory */}
            <Card className="border-border hover:shadow-lg transition-all duration-300 mb-8">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Megaphone className="text-primary" size={32} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="font-serif text-3xl mb-3 text-primary">
                      Brand & Marketing Advisory
                    </CardTitle>
                    <CardDescription className="text-lg">
                      Your brand is more than visuals — it's how you're understood and experienced. We guide creative and retail businesses to define their brand story, improve visibility, and attract loyal customers.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-primary mb-4">What We Offer</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">Brand positioning and identity development</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">Marketing strategy and campaign planning</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">Customer experience mapping</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">Digital and social media strategy alignment</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">Communication tone and storytelling framework</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-primary mb-4">Expected Outcomes</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <ChevronRight className="text-primary mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">20%+ increase in customer satisfaction</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <ChevronRight className="text-primary mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">More consistent brand messaging</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <ChevronRight className="text-primary mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">Strengthened customer engagement and loyalty</span>
                      </li>
                    </ul>
                    <div className="mt-6 p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-primary">Who It's For:</span> Fashion, beauty, and lifestyle brands seeking to elevate perception and strengthen market presence.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service 3: Human Capital & Team Development */}
            <Card className="border-border hover:shadow-lg transition-all duration-300 mb-8">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="text-primary" size={32} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="font-serif text-3xl mb-3 text-primary">
                      Human Capital & Team Development
                    </CardTitle>
                    <CardDescription className="text-lg">
                      People are your most valuable resource. We help you build capable, motivated, and empowered teams that operate efficiently and take ownership of results.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-primary mb-4">What We Offer</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">Staff training and leadership development</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">Performance appraisal systems</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">Employee feedback frameworks</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">Team structure and reporting hierarchy design</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">Recruitment and onboarding process optimization</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-primary mb-4">Expected Outcomes</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <ChevronRight className="text-primary mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">30% improvement in onboarding efficiency</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <ChevronRight className="text-primary mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">Increased team autonomy and decision-making confidence</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <ChevronRight className="text-primary mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">Stronger alignment between leadership and staff</span>
                      </li>
                    </ul>
                    <div className="mt-6 p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-primary">Who It's For:</span> Founders seeking to reduce dependency and improve team capacity.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service 4: Process & Performance Optimization */}
            <Card className="border-border hover:shadow-lg transition-all duration-300 mb-8">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="text-primary" size={32} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="font-serif text-3xl mb-3 text-primary">
                      Process & Performance Optimization
                    </CardTitle>
                    <CardDescription className="text-lg">
                      We refine and improve your production, retail, or logistics processes to save time, reduce waste, and enhance quality. Every system is designed around your current scale and realistic growth targets.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-primary mb-4">What We Offer</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">Production workflow assessment</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">Quality control systems</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">KPI tracking dashboards</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">Technology recommendations for monitoring and reporting</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">Continuous improvement reviews</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-primary mb-4">Expected Outcomes</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <ChevronRight className="text-primary mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">25% reduction in errors and inconsistencies</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <ChevronRight className="text-primary mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">Better process visibility and quality control</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <ChevronRight className="text-primary mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-muted-foreground">Enhanced scalability and customer satisfaction</span>
                      </li>
                    </ul>
                    <div className="mt-6 p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-primary">Who It's For:</span> Brands managing in-house production or logistics operations.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
              Our Consulting Process
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="relative">
                <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-all duration-300 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-primary">1</span>
                    </div>
                    <h3 className="font-serif text-xl font-semibold mb-3 text-primary">
                      Discovery & Assessment
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      We evaluate your current business structure, processes, and team workflows.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary/20 -ml-6 z-0">
                  <div className="w-4 h-4 rounded-full bg-primary absolute -right-2 -top-2"></div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-all duration-300 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-primary">2</span>
                    </div>
                    <h3 className="font-serif text-xl font-semibold mb-3 text-primary">
                      Strategy Design
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      We develop tailored frameworks and recommendations.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary/20 -ml-6 z-0">
                  <div className="w-4 h-4 rounded-full bg-primary absolute -right-2 -top-2"></div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-all duration-300 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-primary">3</span>
                    </div>
                    <h3 className="font-serif text-xl font-semibold mb-3 text-primary">
                      Implementation Support
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      We provide hands-on guidance as new systems are deployed.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary/20 -ml-6 z-0">
                  <div className="w-4 h-4 rounded-full bg-primary absolute -right-2 -top-2"></div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-all duration-300 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-primary">4</span>
                    </div>
                    <h3 className="font-serif text-xl font-semibold mb-3 text-primary">
                      Review & Optimization
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      We measure outcomes and refine for sustainable growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose WoFEP */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-6 text-primary">
              We speak the language of creative business — and strategy.
            </h2>
            <p className="text-lg text-muted-foreground mb-12 text-center">
              We understand that start-ups in fashion, retail, and logistics face unique challenges — from managing production timelines to building reliable teams and scaling sustainably.
            </p>
            <p className="text-lg text-muted-foreground mb-12 text-center">
              Our work bridges creative ambition with strategic discipline, ensuring every decision strengthens your structure, not just your story.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-border hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Industry-specific expertise</h3>
                      <p className="text-sm text-muted-foreground">We understand the unique challenges of creative and consumer sectors.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Tailored frameworks — not generic templates</h3>
                      <p className="text-sm text-muted-foreground">Every solution is customized to your business context.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Practical implementation support</h3>
                      <p className="text-sm text-muted-foreground">We're with you through execution, not just strategy.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Founder-focused, results-driven advisory</h3>
                      <p className="text-sm text-muted-foreground">Your success is our success — measured by tangible outcomes.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-primary">
              Let's Build What's Next for Your Business.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're restructuring your operations, improving efficiency, or preparing for scale — we'll help you put the right systems in place.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/contact">
                Start a Project <ArrowRight className="ml-2" size={20} />
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
