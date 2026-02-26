import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SEO, generateOrganizationSchema } from "@/components/SEO";
import { Target, Eye, Award, Users, Factory, Shield, Truck, Heart, CheckCircle2 } from "lucide-react";
import factoryImage from "@/assets/factory-floor.jpg";
import heroImage from "@/assets/hero-office.jpg";

const About = () => {
  const values = [{
    icon: Target,
    title: "Quality Craftsmanship",
    desc: "Every piece reflects superior Pakistani manufacturing with the finest materials and attention to detail"
  }, {
    icon: Users,
    title: "Customer-Centric Innovation",
    desc: "Technology serving business needs with 3D visualization, automated quotations, and personalized service"
  }, {
    icon: Eye,
    title: "Transparency & Trust",
    desc: "Clear pricing, honest communication, and a quote-first approach that prioritizes your needs"
  }, {
    icon: Award,
    title: "Continuous Improvement",
    desc: "Evolving with market demands, investing in R&D, and setting new industry standards"
  }];
  const milestones = [{
    year: "2015",
    event: "Foundation",
    desc: "Established our Lahore-based manufacturing facility with a vision to transform Pakistani office furniture"
  }, {
    year: "2018",
    event: "B2B Focus",
    desc: "Pivoted to B2B model, establishing partnerships with leading corporations across Pakistan"
  }, {
    year: "2020",
    event: "Digital Transformation",
    desc: "Launched Pakistan's first B2B furniture e-commerce platform with 3D visualization"
  }, {
    year: "2023",
    event: "1,000+ Clients",
    desc: "Milestone achievement: Served over 1,000 businesses across all major Pakistani cities"
  }, {
    year: "2024",
    event: "Technology Leadership",
    desc: "Introduced AI-powered design consultation and automated quotation systems"
  }, {
    year: "2025",
    event: "Market Leader",
    desc: "1,200+ clients, 56 products, 11 categories, nationwide delivery network established"
  }];
  const stats = [{
    number: "1,200+",
    label: "Satisfied Clients"
  }, {
    number: "56",
    label: "Premium Products"
  }, {
    number: "11",
    label: "Product Categories"
  }, {
    number: "5-7 Years",
    label: "Warranty Coverage"
  }, {
    number: "15+",
    label: "Years Experience"
  }, {
    number: "95%",
    label: "Client Retention"
  }];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About WOODEX - Pakistan's #1 B2B Furniture Manufacturer"
        description="Learn about WOODEX, Pakistan's leading B2B office furniture manufacturer. 1,200+ satisfied clients, 15+ years experience, factory-direct quality with 5-7 year warranty."
        keywords="about WOODEX, office furniture manufacturer Pakistan, B2B furniture company, furniture factory Lahore"
        canonical="https://woodex.pk/about"
        structuredData={generateOrganizationSchema()}
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
              About WoodEx
              <span className="block text-accent">Furniture</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              Empowering Pakistani businesses with world-class office furniture solutions through innovation, quality craftsmanship, and exceptional customer service.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-4 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center text-accent-foreground">
            {stats.map((stat, i) => <div key={i}>
                <div className="text-2xl font-bold mb-1">{stat.number}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>)}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        {/* Mission & Vision */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-accent hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  "Empowering Pakistani businesses with world-class office furniture solutions through innovation, quality craftsmanship, and exceptional customer service. We aim to transform every workspace into an environment that inspires productivity and success."
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-accent hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  "To be Pakistan's most trusted and technologically advanced office furniture manufacturer, setting the standard for B2B furniture excellence across South Asia. We envision a future where every business has access to premium, customized furniture solutions."
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Our Story */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                WoodEx began with a simple vision: to revolutionize the Pakistani office furniture industry by combining traditional craftsmanship with modern technology and design.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded in Lahore, we started as a small manufacturing unit with a team of skilled artisans. Today, we've grown into Pakistan's leading B2B furniture platform, serving over 1,200 businesses nationwide.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our quote-first strategy prioritizes relationship building over immediate sales, allowing us to deeply understand client needs and deliver truly customized solutions that exceed expectations.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={factoryImage} alt="WoodEx Factory" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => <Card key={i} className="hover:shadow-xl transition-all hover:border-accent">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.desc}</p>
                </CardContent>
              </Card>)}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-24 bg-muted/50 rounded-2xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose WoodEx?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              What sets us apart from the competition
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{
            icon: Factory,
            title: "Factory Direct",
            desc: "No middlemen means better prices and quality control"
          }, {
            icon: Shield,
            title: "5-7 Year Warranty",
            desc: "Industry-leading warranty coverage on all products"
          }, {
            icon: Truck,
            title: "Nationwide Delivery",
            desc: "Free delivery and installation across Pakistan"
          }, {
            icon: Heart,
            title: "Customer First",
            desc: "Dedicated support from quote to installation"
          }].map((item, i) => <div key={i} className="text-center">
                <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>)}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From a small workshop to Pakistan's leading furniture manufacturer
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {milestones.map((milestone, i) => <div key={i} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-24 text-right">
                    <div className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <Card className="flex-1 hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{milestone.event}</h3>
                      <p className="text-muted-foreground">{milestone.desc}</p>
                    </CardContent>
                  </Card>
                </div>)}
            </div>
          </div>
        </section>

        {/* Business Philosophy */}
        <section className="mb-24">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-12">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">Our Business Philosophy</h2>
                <p className="text-xl leading-relaxed opacity-90 mb-8">
                  WoodEx operates on a <span className="font-bold">quote-first strategy</span> that prioritizes relationship building over immediate sales. This approach enables:
                </p>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  {["Deep understanding of client needs before any recommendation", "Customization options beyond standard product offerings", "Premium value justified by truly personalized service", "Long-term client relationships with high repeat business"].map((item, i) => <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5 text-accent" />
                      <span className="opacity-90">{item}</span>
                    </div>)}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA */}
        <section className="bg-accent text-accent-foreground rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Transform Your Office Space</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join 1,200+ satisfied businesses that trust WoodEx for premium office furniture solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/e-quotation">
              <Button size="lg" variant="secondary" className="min-w-[200px]">
                Get Free Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="min-w-[200px]">
                Contact Us
              </Button>
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;