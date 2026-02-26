import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SEO, generateBreadcrumbSchema } from "@/components/SEO";
import customDesignImage from "@/assets/custom-design-studio.jpg";
import deliveryImage from "@/assets/delivery-service.jpg";
import spacePlanningImage from "@/assets/space-planning-design.jpg";
import projectQuotingImage from "@/assets/project-quoting.jpg";
import factoryImage from "@/assets/factory-floor.jpg";
import servicesHero from "@/assets/services-hero.jpg";
import { Ruler, Palette, Truck, CheckCircle2, Clock, Award, HeadphonesIcon, Package, Factory, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Ruler,
      title: "Space Planning & Design",
      desc: "Transform your workspace with our professional 3D design and floor planning services. Our expert consultants analyze your space, workflow, and team needs to create optimal office layouts.",
      image: spacePlanningImage,
      link: "/services/space-planning",
      features: ["Free on-site consultation", "Professional 3D visualization", "CAD floor plans", "Ergonomic assessments"],
    },
    {
      icon: Palette,
      title: "Custom Design Studio",
      desc: "Bespoke furniture manufacturing tailored to your exact specifications. From corporate branding integration to unique space requirements, we bring your vision to life.",
      image: customDesignImage,
      link: "/services/custom-design",
      features: ["Custom dimensions", "200+ material options", "Brand integration", "6-8 week production"],
    },
    {
      icon: Truck,
      title: "Delivery & Installation",
      desc: "Professional delivery across Pakistan with expert installation services. Our trained teams ensure your furniture is assembled correctly and ready to use.",
      image: deliveryImage,
      link: "/services/delivery-installation",
      features: ["50+ cities covered", "White glove service", "Professional assembly", "Quality inspection"],
    },
    {
      icon: Package,
      title: "Project Quoting",
      desc: "Get detailed quotations for large-scale projects with dedicated project management. We handle everything from assessment to final installation.",
      image: projectQuotingImage,
      link: "/services/project-quoting",
      features: ["Itemized quotations", "Volume discounts", "Project manager assigned", "Timeline tracking"],
    },
    {
      icon: Factory,
      title: "Factory Direct",
      desc: "Buy directly from our manufacturing facility and save 30-50% compared to retail prices. No middlemen, just premium quality at honest prices.",
      image: factoryImage,
      link: "/services/factory-direct",
      features: ["30-50% savings", "5-year warranty", "Priority production", "Direct QC"],
    },
  ];

  const whyChoose = [
    {
      icon: Award,
      title: "Factory-Direct Quality",
      desc: "No middlemen - direct from our manufacturing facility to your office, ensuring the best prices and quality control.",
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      desc: "Ready-stock items ship within 3-5 days. Custom orders delivered in 6-8 weeks with priority production available.",
    },
    {
      icon: HeadphonesIcon,
      title: "Lifetime Support",
      desc: "Comprehensive warranty coverage with dedicated after-sales support team available via phone, WhatsApp, or email.",
    },
  ];

  const stats = [
    { number: "1,200+", label: "Happy Clients" },
    { number: "25+", label: "Years Experience" },
    { number: "50+", label: "Cities Covered" },
    { number: "98%", label: "Satisfaction Rate" },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://woodex.pk" },
    { name: "Services", url: "https://woodex.pk/services" },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Office Furniture Services - Design, Delivery & Installation"
        description="Complete office furniture services: space planning, custom design studio, nationwide delivery & installation, project management. Free consultation available."
        keywords="office furniture services Pakistan, space planning, custom furniture design, furniture installation, office fit-out"
        canonical="https://woodex.pk/services"
        structuredData={breadcrumbSchema}
      />
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[420px] md:h-[480px] overflow-hidden">
        <img
          src={servicesHero}
          alt="WoodEx Complete Office Solutions"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-semibold mb-4">
                End-to-End Solutions
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                360-Degree Office <br />
                <span className="text-accent">Solutions</span>
              </h1>
              <p className="text-base md:text-lg text-white/90 max-w-xl leading-relaxed mb-6">
                From consultation to installation - complete turnkey solutions for your office furniture needs. One partner for all your workspace requirements.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/e-quotation">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 h-12">
                    Get Free Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-6 h-12">
                    Free Consultation
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
        {/* Services Grid */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Our Services</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Comprehensive solutions for every aspect of your office furniture needs
            </p>
          </div>
          <div className="space-y-8">
            {services.map((service, i) => (
              <Card
                key={i}
                className="overflow-hidden border-border/50 hover:border-accent/30 hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className={`grid md:grid-cols-2 gap-0 ${i % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                    <div className={`aspect-video md:aspect-auto md:min-h-[360px] overflow-hidden ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className={`p-8 md:p-12 flex flex-col justify-center ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                      <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                        <service.icon className="h-8 w-8 text-accent" />
                      </div>
                      <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                      <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                        {service.desc}
                      </p>
                      <ul className="grid grid-cols-2 gap-3 mb-8">
                        {service.features.map((feature, j) => (
                          <li key={j} className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                            <span className="text-sm font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link to={service.link}>
                        <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground w-fit">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose WoodEx */}
        <div className="mb-24 bg-muted/50 rounded-3xl p-8 md:p-16">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Us</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">Why Choose WoodEx?</h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              Pakistan's most trusted office furniture manufacturer with over 25 years of excellence
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {whyChoose.map((item, i) => (
              <Card key={i} className="border-border/50 hover:border-accent/30 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <item.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Card */}
        <Card className="bg-primary text-primary-foreground border-0 shadow-2xl overflow-hidden">
          <CardContent className="p-12 md:p-16 relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="text-center relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto opacity-90 leading-relaxed">
                Request a free consultation with our design experts and receive a detailed quote within 24 hours
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/e-quotation">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-10 h-14 text-lg">
                    Get Free Quote
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-10 h-14 text-lg">
                    Contact Us
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

export default Services;
