import { ArrowRight, Target, Eye, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-about.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(135deg, hsl(280 45% 30% / 0.90) 0%, hsl(280 35% 20% / 0.90) 100%), url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              We help founders build structured, scalable, and sustainable businesses.
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 animate-fade-in">
              The WoFEP Company is a boutique consulting firm supporting start-ups and early-stage businesses
              in the fashion, retail, and logistics industries.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-primary">
              Born from a passion for growth — and a commitment to structure.
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                The WoFEP Company began with a simple observation: many creative and retail entrepreneurs
                in Africa build brilliant ideas but struggle to sustain them.
              </p>
              <p>
                They have products, passion, and customers — but lack the structure and systems that help
                a business grow beyond the founder.
              </p>
              <p className="text-foreground font-medium">
                We exist to close that gap.
              </p>
              <p>
                Founded in Lagos, we combine business consulting expertise with hands-on experience in
                fashion, retail, and logistics operations.
              </p>
              <p>
                Our approach is grounded in understanding — of people, process, and the realities of
                building in dynamic markets like Nigeria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-card p-8 rounded-lg border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Target className="text-primary" size={28} />
              </div>
              <h3 className="font-serif text-3xl font-bold mb-4 text-primary">Our Mission</h3>
              <p className="text-lg text-muted-foreground">
                To empower start-ups and early-stage businesses with the structure, strategy, and systems
                they need to grow sustainably.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="text-primary" size={28} />
              </div>
              <h3 className="font-serif text-3xl font-bold mb-4 text-primary">Our Vision</h3>
              <p className="text-lg text-muted-foreground">
                To become Africa's most trusted partner for transforming early-stage brands into
                operationally excellent, high-impact businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12 text-center text-primary">
              Our Philosophy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="text-accent" size={28} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-foreground">Structure Enables Creativity</h3>
                  <p className="text-muted-foreground">
                    Great ideas thrive in organized environments. We design systems that free founders
                    to focus on what matters.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="text-accent" size={28} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-foreground">Growth Should Be Measurable</h3>
                  <p className="text-muted-foreground">
                    We don't just talk strategy — we define KPIs, track progress, and drive performance.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="text-accent" size={28} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-foreground">People Build Brands</h3>
                  <p className="text-muted-foreground">
                    We help teams develop the confidence, skills, and autonomy to deliver excellence.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="text-accent" size={28} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-foreground">Sustainability Over Hype</h3>
                  <p className="text-muted-foreground">
                    We believe in steady, strategic growth — not overnight success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The WoFEP Difference */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-center">
              What Makes Us Different
            </h2>
            <p className="text-xl text-center mb-12 text-primary-foreground/90">
              We don't offer templates. We co-create transformation.
            </p>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Each engagement is built around your brand's realities — your team, your customers, your market.
            </p>
            <p className="text-lg mb-12 text-primary-foreground/90">
              Our process combines management consulting frameworks with practical experience in fashion
              production, retail operations, and logistics management.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-primary-foreground/10 rounded-lg p-4 text-center">
                <p className="font-semibold">Deep sector understanding</p>
                <p className="text-sm text-primary-foreground/80 mt-2">Fashion • Retail • Logistics</p>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-4 text-center">
                <p className="font-semibold">Early-stage specialization</p>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-4 text-center">
                <p className="font-semibold">Strategy + Execution model</p>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-4 text-center">
                <p className="font-semibold">People-first consulting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12 text-center text-primary">
              Our Work in Three Steps
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold font-serif">
                  1
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-2 text-primary">Diagnose</h3>
                  <p className="text-lg text-muted-foreground">
                    We assess your business structure, workflow, and team dynamics to identify key challenges.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold font-serif">
                  2
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-2 text-primary">Design</h3>
                  <p className="text-lg text-muted-foreground">
                    We develop strategies and systems that fit your scale and resources.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold font-serif">
                  3
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-2 text-primary">Deliver</h3>
                  <p className="text-lg text-muted-foreground">
                    We guide implementation, monitor performance, and build internal capacity for continuous growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our People */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-primary">
              Led by Practitioners Who Understand Growth from the Ground Up
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our team brings together professionals from business strategy, marketing, and creative industry
              operations — united by a shared goal: helping small businesses build big systems.
            </p>
            <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg">
              <p className="text-lg italic text-foreground mb-4">
                "Building structure is the foundation of growth. Every business deserves clarity, consistency,
                and confidence — and that's what we help founders create."
              </p>
              <p className="text-muted-foreground font-medium">
                — B. Ochuke Okareko, Lead Consultant, The WoFEP Company
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-primary">
              Let's build your business for scale.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to move your operations from reactive to organized? Let's work together to structure your growth.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/contact">
                Work With Us <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
