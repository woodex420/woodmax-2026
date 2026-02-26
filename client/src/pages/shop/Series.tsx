import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEO, generateBreadcrumbSchema, generateFAQSchema } from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import chairImage from "@/assets/chair-executive.jpg";
import deskImage from "@/assets/desk-standing.jpg";
import workstationImage from "@/assets/workstation.jpg";
import loungeImage from "@/assets/lounge.jpg";
import heroImage from "@/assets/hero-office.jpg";
import meetingRoom from "@/assets/meeting-room.jpg";
import {
  Award, Sparkles, Users2, Package, Shield, Truck, ChevronRight,
  ArrowRight, Check, Star, Heart
} from "lucide-react";

const Series = () => {
  const [activeSeries, setActiveSeries] = useState<string | null>(null);

  const series = [
    {
      id: "executive",
      name: "Executive Series",
      tagline: "Leadership deserves luxury",
      desc: "Premium furniture collection for C-suite and senior management offices. Crafted with the finest materials and attention to detail, this collection embodies sophistication and authority.",
      image: chairImage,
      icon: Award,
      badge: "Premium",
      features: ["Italian leather upholstery", "Solid wood construction", "Customizable finishes", "Lifetime structural warranty"],
      priceRange: "PKR 150,000 - 450,000",
      productCount: 15,
    },
    {
      id: "modern",
      name: "Modern Series",
      tagline: "Contemporary design meets functionality",
      desc: "Sleek, minimalist furniture for modern workspaces. Perfect for tech companies and creative agencies seeking a clean, professional aesthetic with maximum functionality.",
      image: deskImage,
      icon: Sparkles,
      badge: "Bestseller",
      features: ["Clean lines", "Integrated cable management", "Height-adjustable options", "Eco-friendly materials"],
      priceRange: "PKR 80,000 - 250,000",
      productCount: 20,
    },
    {
      id: "collaborative",
      name: "Collaborative Series",
      tagline: "Built for teamwork",
      desc: "Flexible furniture systems designed for open-plan offices. Enhance productivity and collaboration with modular solutions that adapt to your team's evolving needs.",
      image: workstationImage,
      icon: Users2,
      badge: "Popular",
      features: ["Modular design", "Quick reconfiguration", "Acoustic privacy panels", "Integrated power outlets"],
      priceRange: "PKR 60,000 - 200,000",
      productCount: 18,
    },
    {
      id: "comfort",
      name: "Comfort Series",
      tagline: "Where wellness meets design",
      desc: "Ergonomically designed furniture that prioritizes employee health and comfort. Perfect for companies that value employee wellbeing and long-term productivity.",
      image: loungeImage,
      icon: Heart,
      badge: "New",
      features: ["Ergonomic certification", "Breathable materials", "Adjustable components", "Posture support"],
      priceRange: "PKR 50,000 - 180,000",
      productCount: 12,
    },
  ];

  const faqs = [
    { question: "What furniture series is best for a corporate office?", answer: "Our Executive Series is ideal for corporate offices, offering premium materials, professional aesthetics, and lasting durability. For open-plan corporate spaces, the Collaborative Series provides flexible, modular solutions." },
    { question: "Can I mix furniture from different series?", answer: "Absolutely! Many of our clients combine pieces from multiple series. For example, Executive Series in private offices with Collaborative Series in open areas. Our design team can help you create a cohesive look across series." },
    { question: "What is the lead time for series orders?", answer: "Standard items ship within 5-7 business days. Custom configurations typically take 2-4 weeks. Large project orders (50+ pieces) may require 4-6 weeks. We offer express options for urgent requirements." },
    { question: "Do you offer bulk pricing for series purchases?", answer: "Yes, we offer tiered pricing for bulk orders. Orders of 10+ pieces receive 10% off, 25+ pieces get 15% off, and 50+ pieces qualify for our best project pricing. Contact our B2B team for a custom quote." },
    { question: "What warranty covers the furniture series?", answer: "All series come with a 5-7 year structural warranty. The Executive Series includes a lifetime structural warranty. Upholstery and mechanisms are covered for 3-5 years depending on the series." },
    { question: "Can furniture be customized within a series?", answer: "Yes! Each series offers customization options including fabric/leather choices, wood finishes, sizes, and configurations. Our Custom Design Studio can also create bespoke pieces based on any series." },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://woodex.pk" },
    { name: "Furniture Series", url: "https://woodex.pk/series" },
  ]);

  const faqSchema = generateFAQSchema(faqs);

  const filtered = activeSeries
    ? series.filter((s) => s.id === activeSeries)
    : series;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Furniture Series - Premium Office Collections | WoodEx Pakistan"
        description="Explore WoodEx curated furniture series: Executive, Modern, Collaborative & Comfort. Premium office furniture collections with 5-7 year warranty. Factory-direct prices in Pakistan."
        keywords="office furniture series Pakistan, executive furniture collection, modern office furniture, ergonomic furniture series, office chairs Lahore"
        canonical="https://woodex.pk/series"
        structuredData={[breadcrumbSchema, faqSchema]}
      />
      <Navbar />

      {/* Hero Banner */}
      <section
        className="relative h-[380px] md:h-[440px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <Badge className="bg-accent text-accent-foreground mb-4 px-3 py-1 text-xs font-semibold">
              CURATED COLLECTIONS
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Furniture <span className="text-accent">Series</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl mb-6">
              Curated collections designed for different work styles and office environments across Pakistan
            </p>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-accent">Furniture Series</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-4 bg-accent">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-accent-foreground">
            <div className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              <span className="font-medium">4 Curated Series</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span className="font-medium">5-7 Year Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5" />
              <span className="font-medium">Free Nationwide Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5" />
              <span className="font-medium">4.8/5 Customer Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Series Filter Tabs */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-1 overflow-x-auto py-3">
            <Button
              variant={activeSeries === null ? "default" : "ghost"}
              size="sm"
              className={activeSeries === null ? "bg-accent text-accent-foreground hover:bg-accent/90" : ""}
              onClick={() => setActiveSeries(null)}
            >
              All Series
            </Button>
            {series.map((s) => (
              <Button
                key={s.id}
                variant={activeSeries === s.id ? "default" : "ghost"}
                size="sm"
                className={activeSeries === s.id ? "bg-accent text-accent-foreground hover:bg-accent/90" : ""}
                onClick={() => setActiveSeries(s.id)}
              >
                {s.name.replace(" Series", "")}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Series Cards */}
      <div className="container mx-auto px-4 py-16">
        <div className="space-y-16">
          {filtered.map((item, i) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-shadow border-border/50">
              <div className={`grid lg:grid-cols-2 gap-0 ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                <div className={`relative group overflow-hidden ${i % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  {item.badge && (
                    <Badge className="absolute top-6 left-6 z-10 bg-accent text-accent-foreground">
                      {item.badge}
                    </Badge>
                  )}
                  <img
                    src={item.image}
                    alt={`${item.name} - WoodEx Office Furniture Pakistan`}
                    className="w-full h-full object-cover min-h-[450px] group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg px-3 py-2">
                    <span className="text-xs text-muted-foreground">{item.productCount} Products</span>
                  </div>
                </div>
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <item.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">{item.name}</h2>
                  <p className="text-lg text-accent mb-4 italic">{item.tagline}</p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{item.desc}</p>

                  <div className="mb-6">
                    <p className="font-semibold mb-3">Key Features:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {item.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-accent flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8 p-4 bg-muted rounded-lg flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Starting from</p>
                      <p className="text-xl font-bold">{item.priceRange}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">Factory Direct</Badge>
                  </div>

                  <div className="flex gap-4">
                    <Link to="/shop">
                      <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
                        Explore Series <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Link to="/e-quotation">
                      <Button size="lg" variant="outline">Request Catalog</Button>
                    </Link>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Comparison Table */}
      <section className="bg-secondary/50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Compare <span className="text-accent">Series</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Find the perfect collection for your workspace</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-bold">Feature</th>
                  {series.map((s) => (
                    <th key={s.id} className="text-center py-4 px-4 font-bold">{s.name.replace(" Series", "")}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Price Range", values: series.map((s) => s.priceRange.split(" - ")[0]) },
                  { label: "Warranty", values: ["Lifetime", "7 Years", "5 Years", "5 Years"] },
                  { label: "Customization", values: ["Full", "Moderate", "High", "Moderate"] },
                  { label: "Best For", values: ["C-Suite", "Tech/Creative", "Open Plan", "Wellness"] },
                  { label: "Lead Time", values: ["3-4 weeks", "1-2 weeks", "2-3 weeks", "1-2 weeks"] },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">{row.label}</td>
                    {row.values.map((val, j) => (
                      <td key={j} className="py-3 px-4 text-center text-muted-foreground">{val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Frequently Asked <span className="text-accent">Questions</span>
            </h2>
            <p className="text-muted-foreground">Everything you need to know about our furniture series</p>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* SEO Content Block */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-sm">
            <h2 className="text-2xl font-bold mb-4">
              Premium Office Furniture Series in Pakistan – WoodEx Collections
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              WoodEx offers four carefully curated furniture series designed to meet the diverse needs of modern Pakistani workspaces. Whether you're outfitting an executive boardroom in Islamabad, a tech startup in Lahore, or a collaborative coworking space in Karachi, our collections deliver the perfect balance of style, comfort, and durability.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Our <strong>Executive Series</strong> features premium Italian leather and solid wood construction, designed for C-suite offices and boardrooms. The <strong>Modern Series</strong> combines clean aesthetics with integrated cable management and height-adjustable options, making it the top choice for technology companies across Pakistan.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              For open-plan offices, the <strong>Collaborative Series</strong> provides modular, reconfigurable furniture systems with acoustic privacy panels and integrated power outlets. The <strong>Comfort Series</strong> focuses on ergonomic certification and breathable materials, prioritizing employee wellness and long-term productivity.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              All WoodEx furniture series come with factory-direct pricing, free nationwide delivery, and a 5-7 year warranty. Visit our showrooms in Lahore and Islamabad or request a free consultation to find the perfect series for your workspace. Bulk order discounts available for corporate and B2B clients.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-accent text-accent-foreground border-0">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help Choosing a Series?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Our furniture consultants will help you select the perfect collection for your workspace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/e-quotation">
                <Button size="lg" variant="secondary" className="gap-2">
                  Get Free Quote <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10">
                  Book Consultation
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      <Footer />
    </div>
  );
};

export default Series;
