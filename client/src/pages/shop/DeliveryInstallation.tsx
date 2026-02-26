import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import deliveryImage from "@/assets/delivery-truck.jpg";
import showroomImage from "@/assets/showroom-exterior.jpg";
import meetingImage from "@/assets/meeting-room.jpg";
import { Truck, Clock, Shield, CheckCircle2, Package, MapPin, ArrowRight } from "lucide-react";

const DeliveryInstallation = () => {
  const features = [{
    icon: Truck,
    title: "Pakistan-Wide Coverage",
    desc: "Delivery to all major cities across Pakistan with our modern fleet equipped with real-time GPS tracking."
  }, {
    icon: Clock,
    title: "Flexible Scheduling",
    desc: "Choose delivery times that work for your business. Weekend and evening delivery available upon request."
  }, {
    icon: Shield,
    title: "Fully Insured Transit",
    desc: "All deliveries are comprehensively insured. Your furniture is protected from warehouse to final installation."
  }, {
    icon: Package,
    title: "White Glove Service",
    desc: "Professional unpacking, expert assembly, and precise placement. Complete packaging material removal included."
  }, {
    icon: MapPin,
    title: "Real-Time Tracking",
    desc: "Track your delivery in real-time with SMS and email updates at every stage of the delivery process."
  }, {
    icon: CheckCircle2,
    title: "Quality Inspection",
    desc: "Comprehensive quality check and detailed walkthrough to ensure everything exceeds your expectations."
  }];
  const process = [{
    step: "1",
    title: "Order Confirmation",
    desc: "Receive order details and delivery estimate"
  }, {
    step: "2",
    title: "Preparation",
    desc: "Furniture prepared and packaged at our warehouse"
  }, {
    step: "3",
    title: "Dispatch",
    desc: "Team dispatched with real-time tracking link"
  }, {
    step: "4",
    title: "Delivery",
    desc: "Professional delivery and installation at your site"
  }, {
    step: "5",
    title: "Inspection",
    desc: "Final walkthrough and quality verification"
  }];
  const cities = [{
    name: "Lahore",
    time: "1-2 days",
    cost: "PKR 15,000"
  }, {
    name: "Karachi",
    time: "3-5 days",
    cost: "PKR 35,000"
  }, {
    name: "Islamabad",
    time: "2-3 days",
    cost: "PKR 25,000"
  }, {
    name: "Faisalabad",
    time: "1-2 days",
    cost: "PKR 18,000"
  }, {
    name: "Multan",
    time: "2-3 days",
    cost: "PKR 22,000"
  }, {
    name: "Peshawar",
    time: "3-4 days",
    cost: "PKR 30,000"
  }];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Delivery & Installation - Nationwide Furniture Service"
        description="Professional furniture delivery and installation across Pakistan. White glove service, real-time tracking, fully insured transit. 50+ cities covered."
        keywords="furniture delivery Pakistan, office furniture installation, nationwide delivery, professional assembly"
        canonical="https://woodex.pk/services/delivery-installation"
      />
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[420px] md:h-[480px] overflow-hidden">
        <img src={deliveryImage} alt="Professional Delivery & Installation Services" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-semibold mb-4">
                White Glove Service
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Delivery & <br />
                <span className="text-accent">Installation</span>
              </h1>
              <p className="text-base md:text-lg text-white/90 max-w-xl leading-relaxed mb-6">
                Professional delivery and expert installation services across Pakistan. From our warehouse to your workplace, we handle everything with precision and care.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/e-quotation">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 h-12">
                    Get Delivery Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-6 h-12">
                    Schedule Delivery
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
              <div className="text-3xl md:text-4xl font-bold mb-1">50+</div>
              <div className="text-xs md:text-sm opacity-90">Cities Covered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">10,000+</div>
              <div className="text-xs md:text-sm opacity-90">Deliveries Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">99.5%</div>
              <div className="text-xs md:text-sm opacity-90">On-Time Delivery</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">24/7</div>
              <div className="text-xs md:text-sm opacity-90">Tracking Available</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        {/* Features Grid */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Why Choose WoodEx Delivery</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Professional, reliable, and fully insured delivery services across Pakistan
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => <Card key={i} className="group border-border/50 hover:border-accent/50 hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardContent className="pt-8 pb-8">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 group-hover:bg-accent group-hover:scale-110 flex items-center justify-center mb-6 transition-all duration-300">
                    <feature.icon className="h-8 w-8 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* Image + Content Section */}
        <div className="mb-24 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src={showroomImage} alt="Professional Installation" className="rounded-2xl shadow-2xl w-full" />
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg hidden md:block">
              <div className="text-3xl font-bold">5 Year</div>
              <div className="text-sm">Installation Warranty</div>
            </div>
          </div>
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Expert Team</span>
            <h2 className="text-4xl font-bold mt-3 mb-6">Professional Installation Included</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Our trained installation teams have years of experience setting up office spaces of all sizes. From single executive desks to complete corporate fit-outs, we ensure every piece is perfectly assembled and positioned.
            </p>
            <ul className="space-y-4">
              {["Trained & certified installers", "Full assembly & positioning", "Cable management included", "Packaging removal & cleanup", "Post-installation support"].map((item, i) => <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>)}
            </ul>
          </div>
        </div>

        {/* Process Timeline */}
        <div className="mb-24 bg-muted/50 rounded-3xl p-8 md:p-16">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">How It Works</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">Our Delivery Process</h2>
          </div>
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-accent/20 hidden md:block" />
            {process.map((item, i) => <div key={i} className="flex gap-6 mb-10 last:mb-0 relative">
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-14 h-14 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center text-xl shadow-lg">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1 bg-background rounded-xl p-6 shadow-sm border border-border/50">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-lg">{item.desc}</p>
                </div>
              </div>)}
          </div>
        </div>

        {/* Delivery Zones */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Coverage</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Delivery Zones & Pricing</h2>
            <p className="text-muted-foreground text-lg">Standard delivery rates for major cities</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {cities.map((city, i) => <Card key={i} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-accent/30">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold">{city.name}</h3>
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-sm text-muted-foreground">Delivery Time</span>
                      <p className="font-semibold">{city.time}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-muted-foreground">Starting from</span>
                      <p className="font-bold text-accent text-lg">{city.cost}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-24">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative h-80 rounded-2xl overflow-hidden group">
              <img src={meetingImage} alt="Office Setup" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">Complete Office Setup</h3>
                  <p className="text-white/80">End-to-end installation service</p>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden group">
              <img src={showroomImage} alt="Showroom Display" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">Showroom Quality</h3>
                  <p className="text-white/80">Every installation meets showroom standards</p>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Schedule?</h2>
              <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto opacity-90 leading-relaxed">
                Get a detailed delivery quote based on your location and order size. Competitive rates starting from PKR 15,000 for Lahore.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/e-quotation">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-10 h-14 text-lg">
                    Request Delivery Quote
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-white hover:bg-white font-semibold px-10 h-14 text-lg text-primary">
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

export default DeliveryInstallation;