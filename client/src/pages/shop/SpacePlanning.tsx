import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SEO, generateFAQSchema } from "@/components/SEO";
import spacePlanningImage from "@/assets/space-planning-design.jpg";
import meetingImage from "@/assets/meeting-room.jpg";
import workstationImage from "@/assets/workstation.jpg";
import heroOfficeImg from "@/assets/hero-office.jpg";
import { Lightbulb, Layers, Maximize2, Users, TrendingUp, Zap, CheckCircle2, ArrowRight, Building2, Landmark, HeartPulse, GraduationCap, Headphones, Scale } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { question: "Do we need to buy furniture from Woodex to use your design service?", answer: "No obligation to purchase from us, but clients who buy furniture get 50-100% design fee adjustment based on order value." },
  { question: "Can you work with our existing furniture?", answer: "Absolutely! We can design around your current furniture and suggest complementary pieces or reconfigurations." },
  { question: "How long does the design process take?", answer: "Standard timeline is 7-10 working days from site visit to final design. Rush service available for urgent projects." },
  { question: "Do you provide design services outside major cities?", answer: "Yes, we offer virtual design services nationwide using photos, videos, and measurements you provide." },
  { question: "Can you coordinate with our contractors?", answer: "Yes, we regularly work with construction teams and can provide detailed specifications for implementation." },
  { question: "What software do you use for designs?", answer: "We use AutoCAD for 2D planning, 3ds Max for 3D rendering, and SketchUp for quick visualizations." },
  { question: "Will the 3D design look exactly like the final result?", answer: "Our photorealistic renders are 95% accurate. Minor variations may occur in lighting and exact material shades." },
  { question: "Can you design in phases for gradual implementation?", answer: "Yes, we can create phase-wise plans for businesses wanting to upgrade gradually within budget constraints." },
];

const SpacePlanning = () => {
  const services = [
    { icon: Lightbulb, title: "Space Planning & Layout", desc: "Optimal desk arrangements for workflow, traffic flow analysis, departmental zoning, future expansion planning, and natural light optimization." },
    { icon: Layers, title: "3D Visualization & Rendering", desc: "Photorealistic 3D models, virtual walkthrough videos, multiple design options, real-time modifications, material & color selection, and lighting simulation." },
    { icon: Maximize2, title: "Ergonomic Assessment", desc: "Workstation height calculations, monitor placement planning, chair and desk matching, break area positioning, standing desk integration, and accessibility compliance." },
    { icon: Users, title: "Interior Design Consultation", desc: "Color psychology for productivity, branding integration, biophilic design elements, acoustic treatment planning, artwork selection, and wayfinding signage." },
    { icon: TrendingUp, title: "MEP Coordination", desc: "Electrical outlet planning, data/network point mapping, HVAC optimization, lighting design, fire safety compliance, and security system integration." },
    { icon: Zap, title: "Furniture Specification", desc: "Budget optimization, product recommendations, custom furniture design, vendor coordination, quality benchmarking, and warranty planning." },
  ];

  const process = [
    { step: "Discovery Meeting", day: "Day 1", desc: "We visit your space or conduct a virtual consultation to understand business objectives, employee count, budget, timeline, and brand guidelines." },
    { step: "Site Analysis", day: "Day 2-3", desc: "Detailed assessment: accurate measurements, structural limitations, natural light mapping, existing MEP documentation, and employee workflow study." },
    { step: "Design Development", day: "Day 4-7", desc: "2D floor plans with dimensions, 3D rendered visualizations, 2-3 furniture layout concepts, material and finish boards, and preliminary cost estimation." },
    { step: "Revision & Refinement", day: "Day 8-10", desc: "Present designs, gather stakeholder feedback, unlimited revisions until approval, final material selection, budget finalization, and implementation timeline." },
    { step: "Implementation Support", day: "Ongoing", desc: "Detailed furniture specifications, vendor coordination, installation supervision, quality checks, and 6-month layout optimization review." },
  ];

  const designPhilosophies = [
    { title: "Activity-Based Working (ABW)", items: ["Focus zones for deep work", "Collaboration areas for teamwork", "Phone booths for private calls", "Casual zones for informal meetings"] },
    { title: "Biophilic Design", items: ["Natural light maximization", "Indoor plant recommendations", "Natural material selection", "Green wall possibilities"] },
    { title: "Flexible & Agile Spaces", items: ["Modular furniture systems", "Moveable partitions", "Hot-desking options", "Scalable layouts"] },
    { title: "Cultural Sensitivity", items: ["Prayer room positioning", "Gender-appropriate spaces", "Traditional hospitality areas", "Executive hierarchy considerations"] },
  ];

  const specializations = [
    { icon: Building2, title: "IT & Software Companies", desc: "Open-plan agile workspaces, scrum rooms, gaming/recreation zones, 24/7 operation considerations." },
    { icon: Landmark, title: "Banking & Financial Services", desc: "Secure cash handling areas, customer service optimization, privacy-compliant layouts." },
    { icon: HeartPulse, title: "Healthcare Facilities", desc: "Patient flow optimization, hygiene-focused materials, accessibility compliance, waiting area comfort." },
    { icon: GraduationCap, title: "Educational Institutions", desc: "Flexible classroom layouts, administrative efficiency, student service centers, faculty collaboration spaces." },
    { icon: Headphones, title: "Call Centers & BPOs", desc: "High-density efficient layouts, acoustic treatment planning, supervisor sight lines, shift-change optimization." },
    { icon: Scale, title: "Law Firms & Consultancies", desc: "Client confidentiality layouts, partner office hierarchy, library and research areas, document storage planning." },
  ];

  const packages = [
    { name: "Basic Package", area: "Up to 2,000 sq ft", price: "PKR 50,000 – 75,000", features: ["Basic 2D layout + 3D views", "2 design concepts", "1 revision round", "Digital delivery only"], recommended: false },
    { name: "Professional Package", area: "2,000 – 5,000 sq ft", price: "PKR 100,000 – 150,000", features: ["Complete 2D + 3D package", "3 design concepts", "3 revision rounds", "Printed presentation boards"], recommended: true },
    { name: "Enterprise Package", area: "5,000+ sq ft", price: "From PKR 200,000", features: ["Comprehensive design services", "Multiple zones/floors", "Unlimited revisions", "Project management included"], recommended: false },
  ];

  const benefits = [
    { title: "Maximize Space Utilization", desc: "Our designs typically achieve 30-40% better space utilization, meaning you can accommodate more employees or reduce real estate costs." },
    { title: "Increase Productivity", desc: "Ergonomic layouts and proper zoning reduce distractions and movement waste, boosting productivity by an average of 25%." },
    { title: "Enhance Brand Image", desc: "A professionally designed office impresses clients, attracts talent, and reinforces your brand values." },
    { title: "Reduce Long-term Costs", desc: "Proper planning prevents expensive modifications later. Our future-ready designs adapt to your growth without reconstruction." },
    { title: "Improve Employee Satisfaction", desc: "Well-designed workspaces reduce stress, improve collaboration, and show employees you value their well-being." },
    { title: "Ensure Compliance", desc: "We ensure your design meets building codes, fire safety regulations, and accessibility requirements from day one." },
  ];

  const faqSchema = generateFAQSchema(faqs);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Workspace Design Services Pakistan | Office Interior Design | Woodex"
        description="Professional workspace design services in Pakistan. Free 3D visualization, space planning, ergonomic layouts. Transform your office with expert designers. Get a free consultation today!"
        keywords="workspace design Pakistan, office interior design Lahore, space planning, 3D office visualization, ergonomic office layout"
        canonical="https://woodexfurniture.pk/services/space-planning"
        structuredData={[faqSchema]}
      />
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[420px] md:h-[480px] overflow-hidden">
        <img src={spacePlanningImage} alt="Professional Workspace Design Services" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-semibold mb-4">
                Professional Workspace Design
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Professional Workspace <br />
                <span className="text-accent">Design Services</span>
              </h1>
              <p className="text-base md:text-lg text-white/90 max-w-xl leading-relaxed mb-6">
                Free 3D visualization, space optimization, and ergonomic planning by Pakistan's leading office design experts. Transform your office into a productivity powerhouse.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/e-quotation">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 h-12">
                    Get Free Design Consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-6 h-12">
                    View Design Portfolio
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="bg-accent text-accent-foreground py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div><div className="text-3xl md:text-4xl font-bold mb-1">500+</div><div className="text-xs md:text-sm opacity-90">Offices Designed</div></div>
            <div><div className="text-3xl md:text-4xl font-bold mb-1">Certified</div><div className="text-xs md:text-sm opacity-90">Interior Designers</div></div>
            <div><div className="text-3xl md:text-4xl font-bold mb-1">48-Hour</div><div className="text-xs md:text-sm opacity-90">Turnaround</div></div>
            <div><div className="text-3xl md:text-4xl font-bold mb-1">Unlimited</div><div className="text-xs md:text-sm opacity-90">Revisions</div></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        {/* Service Intro */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why It Matters</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Why Professional Workspace Design Matters</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Your office layout directly impacts employee productivity, collaboration, and well-being. Studies show that well-designed workspaces can increase productivity by up to 25% and reduce employee turnover by 20%.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4"><div className="text-3xl font-bold text-accent mb-1">40%</div><div className="text-sm text-muted-foreground">Space utilization improvement</div></div>
            <div className="p-4"><div className="text-3xl font-bold text-accent mb-1">25%</div><div className="text-sm text-muted-foreground">Productivity increase</div></div>
            <div className="p-4"><div className="text-3xl font-bold text-accent mb-1">30%</div><div className="text-sm text-muted-foreground">Reduction in workplace injuries</div></div>
            <div className="p-4"><div className="text-3xl font-bold text-accent mb-1">50%</div><div className="text-sm text-muted-foreground">Better collaboration scores</div></div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Complete Workspace Design Solutions</h2>
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

        {/* Process Timeline */}
        <div className="mb-24 bg-muted/50 rounded-3xl p-8 md:p-16">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">How We Work</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">From Concept to Reality in 5 Simple Steps</h2>
          </div>
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-accent/20 hidden md:block" />
            {process.map((phase, i) => (
              <div key={i} className="relative mb-8 last:mb-0">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center text-xl flex-shrink-0 relative z-10 shadow-lg">
                    {i + 1}
                  </div>
                  <Card className="flex-1 hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold">{phase.step}</h3>
                        <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full font-medium">{phase.day}</span>
                      </div>
                      <p className="text-muted-foreground">{phase.desc}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Design Philosophies */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Approach</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">Creating Workspaces That Work</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designPhilosophies.map((p, i) => (
              <Card key={i} className="border-border/50 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 pb-6">
                  <h3 className="text-lg font-bold mb-4">{p.title}</h3>
                  <ul className="space-y-2">
                    {p.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Industry Specializations */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Specializations</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">Industry-Specific Expertise</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializations.map((spec, i) => (
              <Card key={i} className="group border-border/50 hover:border-accent/50 hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-8 pb-8">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 group-hover:bg-accent group-hover:scale-110 flex items-center justify-center mb-6 transition-all duration-300">
                    <spec.icon className="h-8 w-8 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{spec.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{spec.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Benefits</span>
            <h2 className="text-4xl font-bold mt-3 mb-6">ROI That Makes Sense</h2>
            <div className="grid grid-cols-1 gap-4">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-bold">{b.title}</span>
                    <p className="text-sm text-muted-foreground">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src={meetingImage} alt="Well Planned Meeting Room" className="rounded-2xl shadow-2xl w-full" />
          </div>
        </div>

        {/* Pricing Packages */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Pricing</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">Transparent Pricing for Every Budget</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, i) => (
              <Card key={i} className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${pkg.recommended ? 'border-2 border-accent ring-2 ring-accent/20 scale-105' : 'border-border/50'}`}>
                {pkg.recommended && (
                  <div className="absolute top-0 left-0 right-0 bg-accent text-accent-foreground text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <CardContent className={`p-8 ${pkg.recommended ? 'pt-12' : ''}`}>
                  <h3 className="text-xl font-bold mb-1">{pkg.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{pkg.area}</p>
                  <div className="text-3xl font-bold text-accent mb-6">{pkg.price}</div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/e-quotation">
                    <Button className={`w-full ${pkg.recommended ? 'bg-accent hover:bg-accent/90' : ''}`} variant={pkg.recommended ? 'default' : 'outline'}>
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-8 text-sm">
            * Design fees are 100% adjustable against furniture orders above PKR 2,000,000
          </p>
        </div>

        {/* Portfolio Gallery */}
        <div className="mb-24">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative h-80 rounded-2xl overflow-hidden group">
              <img src={workstationImage} alt="Open Plan Workspaces" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">Open Plan Workspaces</h3>
                  <p className="text-white/80">40% more employees in same space</p>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden group">
              <img src={heroOfficeImg} alt="Corporate Headquarters" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">Corporate Headquarters</h3>
                  <p className="text-white/80">25% reduction in real estate costs</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">FAQs</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">Design Service FAQs</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border border-border px-4 bg-background">
                  <AccordionTrigger className="text-sm font-medium hover:no-underline py-3">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground pb-3">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* CTA Card */}
        <Card className="bg-primary text-primary-foreground border-0 shadow-2xl overflow-hidden">
          <CardContent className="p-12 md:p-16 relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="text-center relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Workspace?</h2>
              <p className="text-xl md:text-2xl mb-4 max-w-2xl mx-auto opacity-90 leading-relaxed">
                Get your free design consultation today.
              </p>
              <p className="text-sm mb-10 opacity-70">Limited Time Offer: First 10 consultations each month receive 25% discount on design fees</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/e-quotation">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-10 h-14 text-lg">
                    Get Free Design Consultation
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-10 h-14 text-lg">
                    Book Free Consultation
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

export default SpacePlanning;
