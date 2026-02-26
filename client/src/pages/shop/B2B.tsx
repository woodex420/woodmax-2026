import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { SEO, generateBreadcrumbSchema } from "@/components/SEO";
import { Building2, TrendingDown, HeadphonesIcon, FileCheck, Clock, Award, Users, Shield, Truck, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-office.jpg";

const B2B = () => {
  const benefits = [{
    icon: TrendingDown,
    title: "Volume Discounts",
    desc: "Up to 40% off on bulk orders for corporate clients across Pakistan"
  }, {
    icon: HeadphonesIcon,
    title: "Dedicated Account Manager",
    desc: "Personal support for all your furniture needs and queries"
  }, {
    icon: FileCheck,
    title: "Flexible Payment Terms",
    desc: "Customized payment plans, credit facility, and leasing options"
  }, {
    icon: Clock,
    title: "Priority Delivery",
    desc: "Fast-track production and installation for business clients"
  }, {
    icon: Award,
    title: "Extended 7-Year Warranty",
    desc: "Enhanced warranty coverage exclusively for enterprise clients"
  }, {
    icon: Building2,
    title: "Project Management",
    desc: "End-to-end coordination for large-scale office fit-outs"
  }];
  const industries = [{
    name: "Corporate Offices",
    count: "450+ Projects"
  }, {
    name: "Co-working Spaces",
    count: "120+ Projects"
  }, {
    name: "Educational Institutions",
    count: "200+ Projects"
  }, {
    name: "Healthcare Facilities",
    count: "85+ Projects"
  }, {
    name: "Government Organizations",
    count: "65+ Projects"
  }, {
    name: "Hospitality & Hotels",
    count: "95+ Projects"
  }, {
    name: "Real Estate Developers",
    count: "150+ Projects"
  }, {
    name: "Banks & Financial",
    count: "180+ Projects"
  }];
  const features = [{
    icon: Users,
    title: "1,200+ Satisfied Clients",
    desc: "Trusted by businesses across Pakistan"
  }, {
    icon: Shield,
    title: "Quality Guaranteed",
    desc: "Premium materials with ISO certification"
  }, {
    icon: Truck,
    title: "Nationwide Delivery",
    desc: "Free delivery & installation in all major cities"
  }, {
    icon: FileCheck,
    title: "Custom Solutions",
    desc: "Tailored furniture to match your brand"
  }];
  const breadcrumbSchema = generateBreadcrumbSchema([{
    name: "Home",
    url: "https://woodex.pk"
  }, {
    name: "B2B",
    url: "https://woodex.pk/b2b"
  }]);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="B2B Office Furniture Solutions - Corporate Discounts" 
        description="Enterprise B2B office furniture solutions with up to 40% volume discounts. Dedicated account manager, flexible payment terms, 7-year extended warranty for businesses." 
        keywords="B2B office furniture, corporate furniture Pakistan, bulk office chairs, enterprise furniture solutions, volume discounts" 
        canonical="https://woodex.pk/b2b" 
        structuredData={breadcrumbSchema} 
      />
      <Navbar />
      
      {/* Hero Banner */}
      <section 
        className="relative h-[340px] md:h-[400px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              B2B Office Furniture
              <span className="block text-accent">Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-6">
              Partner with Pakistan's leading office furniture manufacturer. Volume pricing, dedicated support, and flexible terms for businesses of all sizes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/e-quotation">
                <Button size="lg" variant="secondary">
                  Request B2B Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-4 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-accent-foreground">
            {features.map((feature, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-foreground/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">{feature.title}</h3>
                  <p className="text-xs opacity-90">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        {/* Benefits Grid */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose WoodEx for B2B?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We understand the unique needs of businesses. Our B2B program is designed to provide maximum value, flexibility, and support.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <Card key={i} className="hover:shadow-xl transition-all hover:border-accent">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <benefit.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Industries */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From startups to Fortune 500 companies, we've furnished workspaces across every major industry in Pakistan.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, i) => (
              <Card key={i} className="hover:shadow-xl hover:border-accent transition-all cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <Building2 className="h-10 w-10 mx-auto mb-4 text-muted-foreground group-hover:text-accent transition-colors" />
                  <h3 className="font-bold mb-2">{industry.name}</h3>
                  <p className="text-sm text-accent font-medium">{industry.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* B2B Process */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our B2B Process</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A streamlined process designed for efficiency and transparency
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[{
              step: "01",
              title: "Consultation",
              desc: "Free needs assessment and space planning consultation with our experts"
            }, {
              step: "02",
              title: "Custom Proposal",
              desc: "Detailed quotation with 3D visualization and product recommendations"
            }, {
              step: "03",
              title: "Agreement",
              desc: "Flexible payment terms, timelines, and project milestones"
            }, {
              step: "04",
              title: "Delivery & Setup",
              desc: "Professional installation with minimal disruption to your operations"
            }].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center mx-auto mb-6 text-2xl">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-accent text-accent-foreground rounded-2xl p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact our B2B team to discuss volume pricing, custom solutions, and partnership opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/e-quotation">
              <Button size="lg" variant="secondary" className="min-w-[200px]">
                Request B2B Quote
              </Button>
            </Link>
            <a href="tel:+923001234567">
              <Button size="lg" variant="secondary" className="min-w-[200px]">
                Call: +92 300 1234567
              </Button>
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default B2B;