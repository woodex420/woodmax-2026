import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import InteractiveConfigurator from "@/components/InteractiveConfigurator";
import customDesignImage from "@/assets/custom-design-studio.jpg";
import receptionImage from "@/assets/reception-desk.jpg";
import loungeImage from "@/assets/lounge.jpg";
import { Palette, Ruler, Sparkles, CheckCircle2, Package, Clock, ArrowRight, MousePointer2 } from "lucide-react";

const CustomDesign = () => {
  const services = [
    {
      icon: MousePointer2,
      title: "Interactive Configurator",
      desc: "Visualize your custom furniture with our live 3D configurator. Select materials, colors, and finishes in real-time.",
    },
    {
      icon: Palette,
      title: "Bespoke Designs",
      desc: "Create furniture that perfectly matches your brand identity, workspace aesthetics, and functional requirements.",
    },
    {
      icon: Ruler,
      title: "Custom Dimensions",
      desc: "Furniture built to your exact measurements. Perfect for unique spaces, non-standard layouts, and specific needs.",
    },
    {
      icon: Sparkles,
      title: "Material Selection",
      desc: "Choose from premium woods, metals, fabrics, and finishes. Over 200 material and color combinations available.",
    },
    {
      icon: Package,
      title: "Prototype Development",
      desc: "Full-scale prototypes for approval before production. Make changes until it's exactly what you want.",
    },
    {
      icon: Clock,
      title: "Production Timeline",
      desc: "Custom pieces delivered in 6-8 weeks. Rush production available for urgent projects.",
    },
  ];

  const designProcess = [
    { 
      phase: "Discovery", 
      desc: "Understanding your vision, requirements, space constraints, and design preferences",
      duration: "1-2 weeks",
      icon: "💡"
    },
    { 
      phase: "Concept Design", 
      desc: "Initial sketches, 3D models, and material boards for your review",
      duration: "1-2 weeks",
      icon: "✏️"
    },
    { 
      phase: "Refinement", 
      desc: "Incorporate feedback, finalize designs, and approve specifications",
      duration: "1 week",
      icon: "🔧"
    },
    { 
      phase: "Prototype", 
      desc: "Build full-scale prototype for your approval and testing",
      duration: "2-3 weeks",
      icon: "🎯"
    },
    { 
      phase: "Production", 
      desc: "Manufacturing your custom pieces with regular progress updates",
      duration: "4-6 weeks",
      icon: "🏭"
    },
    { 
      phase: "Delivery", 
      desc: "Professional delivery, installation, and final walkthrough",
      duration: "1 week",
      icon: "🚚"
    },
  ];

  const portfolioItems = [
    { title: "Executive Suite", category: "Corporate", image: customDesignImage },
    { title: "Modern Reception", category: "Hospitality", image: receptionImage },
    { title: "Lounge Area", category: "Relaxation", image: loungeImage },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Custom Furniture Design - Bespoke Office Solutions"
        description="Create bespoke office furniture tailored to your specifications. 200+ materials, expert craftsmanship, 6-8 week production. From concept to creation."
        keywords="custom office furniture, bespoke furniture Pakistan, custom design studio, tailored furniture solutions"
        canonical="https://woodex.pk/services/custom-design"
      />
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[420px] md:h-[480px] overflow-hidden">
        <img 
          src={customDesignImage} 
          alt="WoodEx Custom Design Studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-semibold mb-4">
                Bespoke Furniture Design
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Custom Design <br />
                <span className="text-accent">Services</span>
              </h1>
              <p className="text-base md:text-lg text-white/90 max-w-xl leading-relaxed mb-6">
                Bring your vision to life with our bespoke furniture design service. From initial concept to final creation, we craft unique pieces tailored precisely to your specifications and brand identity.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/e-quotation">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 h-12">
                    Start Your Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-6 h-12">
                    Book Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-accent text-accent-foreground py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">500+</div>
              <div className="text-xs md:text-sm opacity-90">Custom Projects</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">200+</div>
              <div className="text-xs md:text-sm opacity-90">Material Options</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">25+</div>
              <div className="text-xs md:text-sm opacity-90">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">100%</div>
              <div className="text-xs md:text-sm opacity-90">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Page Interactive Configurator */}
      <InteractiveConfigurator />

      <div className="container mx-auto px-4 py-20">
        {/* Services Grid */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Our Custom Design Services</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Every piece is designed and crafted specifically for you. No two projects are the same—each is a unique reflection of your vision.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <Card key={i} className="group border-border/50 hover:border-accent/50 hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-8 pb-8">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 group-hover:bg-accent group-hover:scale-110 flex items-center justify-center mb-6 transition-all duration-300">
                    <service.icon className="h-8 w-8 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Portfolio Gallery */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">Recent Custom Projects</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolioItems.map((item, i) => (
              <div key={i} className="relative h-96 rounded-2xl overflow-hidden group cursor-pointer">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <span className="text-accent text-sm font-semibold mb-2">{item.category}</span>
                  <h3 className="text-white text-2xl font-bold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Design Process */}
        <div className="mb-24 bg-muted/50 rounded-3xl p-8 md:p-16">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Process</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">The Design Journey</h2>
          </div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designProcess.map((phase, i) => (
              <Card key={i} className="relative overflow-hidden bg-background hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-3xl">{phase.icon}</div>
                    <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center text-sm">
                      {i + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{phase.phase}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{phase.desc}</p>
                  <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold">
                    {phase.duration}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Image + Content Section */}
        <div className="mb-24 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <img 
              src={receptionImage} 
              alt="Custom Reception Desk" 
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -top-6 -left-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg hidden md:block">
              <div className="text-3xl font-bold">200+</div>
              <div className="text-sm">Material Options</div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Materials</span>
            <h2 className="text-4xl font-bold mt-3 mb-6">Premium Materials & Finishes</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Choose from our extensive library of premium materials, finishes, and fabrics. From exotic hardwoods to contemporary metals, we source only the finest materials for your custom pieces.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {["Solid hardwoods", "Premium veneers", "Leather & fabric", "Metals & glass", "Laminates", "Stone surfaces"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
            <Link to="/materials">
              <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                View Material Library
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Pricing Info */}
        <div className="mb-24">
          <Card className="max-w-4xl mx-auto border-2 border-accent/20 overflow-hidden">
            <div className="bg-accent text-accent-foreground p-6 text-center">
              <h3 className="text-2xl font-bold">Investment & Timeline</h3>
            </div>
            <CardContent className="p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-lg mb-2">Design Fee</h4>
                    <p className="text-3xl font-bold text-accent">PKR 150,000 - 450,000</p>
                    <p className="text-muted-foreground text-sm mt-1">Fully credited toward final order</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Minimum Order</h4>
                    <p className="text-3xl font-bold text-accent">PKR 750,000</p>
                    <p className="text-muted-foreground text-sm mt-1">For custom design projects</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-lg mb-2">Timeline</h4>
                    <p className="text-3xl font-bold text-accent">10-16 Weeks</p>
                    <p className="text-muted-foreground text-sm mt-1">From consultation to delivery</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Warranty</h4>
                    <p className="text-3xl font-bold text-accent">5 Years</p>
                    <p className="text-muted-foreground text-sm mt-1">Comprehensive coverage included</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Card */}
        <Card className="bg-primary text-primary-foreground border-0 shadow-2xl overflow-hidden">
          <CardContent className="p-12 md:p-16 relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="text-center relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Your Custom Project</h2>
              <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto opacity-90 leading-relaxed">
                Schedule a consultation with our expert design team. Bring sketches, inspiration photos, mood boards, or just your ideas—we'll help bring them to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/e-quotation">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-10 h-14 text-lg">
                    Request Custom Quote
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-10 h-14 text-lg">
                    Book Consultation
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

export default CustomDesign;
