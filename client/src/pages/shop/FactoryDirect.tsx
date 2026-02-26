import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import factoryImage from "@/assets/factory-floor.jpg";
import workstationImage from "@/assets/workstation.jpg";
import deskImage from "@/assets/desk-executive.jpg";
import { Factory, TrendingDown, Award, Zap, Shield, Clock, ArrowRight, CheckCircle2 } from "lucide-react";

const FactoryDirect = () => {
  const benefits = [
    { icon: TrendingDown, title: "30-50% Lower Prices", desc: "Eliminate middleman markups. Most furniture buyers in Pakistan pay 30–50% more than they need to. Buy directly from our Lahore facility at transparent, factory-direct prices." },
    { icon: Factory, title: "Full Manufacturing Control", desc: "We control every step — from design to CNC cutting, edging, assembly, and finishing. This means consistent quality, faster turnaround, and full customization." },
    { icon: Award, title: "Quality Guaranteed", desc: "We use imported MDF with melamine finish, PVC edge banding, 18-gauge MS powder-coated frames, alloy steel bases, and Master MoltyFoam cushioning." },
    { icon: Zap, title: "Fast Production", desc: "Standard production takes 10–15 working days. Ready-stock items ship within 3–5 working days. Custom orders get a confirmed timeline at order." },
    { icon: Shield, title: "Up to 3-Year Warranty", desc: "Structural warranty on desks, tables, and workstations. 1-year warranty on chair wheels, gas lifts, and base mechanisms." },
    { icon: Clock, title: "Priority Service", desc: "Factory-direct customers get priority production slots, dedicated project managers, and real-time production updates." },
  ];

  const stats = [
    { number: "1,200+", label: "Offices Furnished" },
    { number: "7+", label: "Years Manufacturing" },
    { number: "50+", label: "Cities Delivered To" },
    { number: "100%", label: "Custom-Made" },
  ];

  const comparisons = [
    { feature: "Product Price", retail: "100% (Market Rate)", factory: "50-70% (Factory Price)" },
    { feature: "Customization", retail: "Limited / Fixed", factory: "Full Custom (Size, Color, Material)" },
    { feature: "Lead Time", retail: "8-12 weeks", factory: "10-15 working days" },
    { feature: "Warranty", retail: "1 year (if any)", factory: "Up to 3 years structural" },
    { feature: "Support", retail: "Standard / None", factory: "Dedicated Project Manager" },
    { feature: "3D Design", retail: "Not Available", factory: "Free Photorealistic 3D Layout" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Factory Direct Office Furniture in Pakistan — No Middlemen — Woodex"
        description="Buy office furniture direct from our Lahore factory — no middlemen, no showroom markup. Woodex manufactures desks, chairs, workstations & complete office fit-outs at transparent, factory-direct prices."
        keywords="factory direct furniture Pakistan, office furniture manufacturer Lahore, wholesale office furniture, custom furniture factory Pakistan"
        canonical="https://woodexfurniture.pk/factory-direct"
      />
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[420px] md:h-[480px] overflow-hidden">
        <img src={factoryImage} alt="Woodex Factory Direct Manufacturing Facility" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-semibold mb-4">
                Factory Direct Pricing
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Why Pay Retail When You <br />
                <span className="text-accent">Can Buy Direct?</span>
              </h1>
              <p className="text-base md:text-lg text-white/90 max-w-xl leading-relaxed mb-6">
                Most furniture buyers in Pakistan pay 30–50% more than they need to — because their furniture passes through importers, distributors, and showrooms. At Woodex, you buy straight from the factory.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/e-quotation">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 h-12">
                    Get Factory Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-6 h-12">
                    Schedule Factory Tour
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-accent text-accent-foreground py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-bold mb-1">{stat.number}</div>
                <div className="text-xs md:text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        {/* Benefits Grid */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Benefits</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Why Buy Factory Direct?</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Skip the retail markup and buy directly from Pakistan's leading office furniture manufacturer
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <Card key={i} className="group border-border/50 hover:border-accent/50 hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-8 pb-8">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 group-hover:bg-accent group-hover:scale-110 flex items-center justify-center mb-6 transition-all duration-300">
                    <benefit.icon className="h-8 w-8 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-24 bg-muted/50 rounded-3xl p-8 md:p-16">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Comparison</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">Retail vs Factory Direct</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-background rounded-2xl overflow-hidden shadow-lg border border-border/50">
              <div className="grid grid-cols-3 bg-primary text-primary-foreground font-bold text-center">
                <div className="p-4">Feature</div>
                <div className="p-4">Retail</div>
                <div className="p-4 bg-accent text-accent-foreground">Factory Direct</div>
              </div>
              {comparisons.map((row, i) => (
                <div key={i} className={`grid grid-cols-3 text-center ${i % 2 === 0 ? 'bg-background' : 'bg-muted/30'}`}>
                  <div className="p-4 font-medium text-left pl-6">{row.feature}</div>
                  <div className="p-4 text-muted-foreground">{row.retail}</div>
                  <div className="p-4 font-bold text-accent">{row.factory}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Factory Facility Section */}
        <div className="mb-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Facility</span>
            <h2 className="text-4xl font-bold mt-3 mb-6">State-of-the-Art Manufacturing</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Our Lahore facility houses the latest in furniture manufacturing technology. From precision CNC machines to climate-controlled finishing rooms, every aspect is designed for quality.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Modern CNC & automated machinery",
                "Imported MDF, melamine & PVC materials",
                "In-house quality control at every stage",
                "Climate-controlled finishing area",
                "Professional assembly & packaging"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                Book Factory Tour <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="relative">
            <img src={workstationImage} alt="Manufacturing Facility" className="rounded-2xl shadow-2xl w-full" />
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg hidden md:block">
              <div className="text-3xl font-bold">1,200+</div>
              <div className="text-sm">Offices Furnished</div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Process</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">How Factory Direct Works</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Consult & Design", desc: "Share your requirements via call, WhatsApp, or E-Quote. Get a free 3D layout and itemized quote within 48 hours.", icon: "📞" },
              { step: "2", title: "Manufacturing", desc: "Your furniture is crafted in our factory using imported materials with strict quality control at every stage.", icon: "🏭" },
              { step: "3", title: "Delivery & Install", desc: "Delivered straight from factory to your door with professional installation — anywhere in Pakistan.", icon: "🚚" },
            ].map((item, i) => (
              <Card key={i} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center mx-auto mb-4 text-xl">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Product Gallery */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Products</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">Made in Our Factory</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative h-80 rounded-2xl overflow-hidden group">
              <img src={deskImage} alt="Executive Desks" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold">Executive Desks</h3>
                  <p className="text-white/80 text-sm">Premium MDF melamine & veneer finishes</p>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden group">
              <img src={workstationImage} alt="Workstations" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold">Workstations</h3>
                  <p className="text-white/80 text-sm">Modular clusters for any team size</p>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden group">
              <img src={factoryImage} alt="Custom Furniture" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold">Custom Designs</h3>
                  <p className="text-white/80 text-sm">Built to your exact specifications</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Card */}
        <Card className="bg-primary text-primary-foreground border-0 shadow-2xl overflow-hidden">
          <CardContent className="p-12 md:p-16 relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="text-center relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Saving Today</h2>
              <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto opacity-90 leading-relaxed">
                Get factory-direct pricing on your next furniture order. Free 3D design, free consultation, and free delivery across Pakistan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/e-quotation">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-10 h-14 text-lg">
                    Get Factory Quote
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-10 h-14 text-lg">
                    Schedule Factory Tour
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default FactoryDirect;
