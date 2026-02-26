import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import quotingImage from "@/assets/project-quoting.jpg";
import meetingImage from "@/assets/meeting-room.jpg";
import consultationImage from "@/assets/consultation.jpg";
import { FileText, Calculator, Users, ClipboardCheck, TrendingUp, MessageSquare, ArrowRight, CheckCircle2, Building2, GraduationCap, Hotel, Stethoscope } from "lucide-react";

const ProjectQuoting = () => {
  const features = [
    {
      icon: FileText,
      title: "Detailed Proposals",
      desc: "Comprehensive quotes with itemized breakdowns, 3D renderings, and material specifications.",
    },
    {
      icon: Calculator,
      title: "Transparent Pricing",
      desc: "Clear pricing structure with no hidden costs. All taxes, delivery, and installation included.",
    },
    {
      icon: Users,
      title: "Dedicated Project Manager",
      desc: "Assigned project manager from quote to completion. Single point of contact throughout.",
    },
    {
      icon: ClipboardCheck,
      title: "Turnkey Solutions",
      desc: "Complete project management including design, manufacturing, delivery, and installation.",
    },
    {
      icon: TrendingUp,
      title: "Volume Discounts",
      desc: "Special pricing for large projects. Bulk ordering discounts up to 25% for qualified projects.",
    },
    {
      icon: MessageSquare,
      title: "Flexible Terms",
      desc: "Customized payment plans and leasing options available for large-scale projects.",
    },
  ];

  const projectTypes = [
    {
      icon: Building2,
      title: "Office Fit-Outs",
      desc: "Complete office furniture solutions from 10 to 1000+ workstations across Pakistan",
      minBudget: "PKR 1,500,000+",
    },
    {
      icon: Hotel,
      title: "Commercial Spaces",
      desc: "Hotels, restaurants, retail spaces, and hospitality furniture installations",
      minBudget: "PKR 3,000,000+",
    },
    {
      icon: GraduationCap,
      title: "Educational Institutions",
      desc: "Schools, universities, training centers, libraries, and modern learning spaces",
      minBudget: "PKR 2,250,000+",
    },
    {
      icon: Stethoscope,
      title: "Healthcare Facilities",
      desc: "Hospitals, clinics, medical offices, and healthcare furniture solutions",
      minBudget: "PKR 4,500,000+",
    },
  ];

  const processSteps = [
    {
      step: "1",
      title: "Initial Consultation",
      desc: "Comprehensive site visit and detailed requirement gathering session with your team",
      timeline: "Day 1-2",
    },
    {
      step: "2",
      title: "Design & Planning",
      desc: "Professional space planning, photorealistic 3D visualization, and strategic product selection",
      timeline: "Day 3-7",
    },
    {
      step: "3",
      title: "Quote Preparation",
      desc: "Detailed comprehensive proposal with transparent pricing, realistic timeline, and complete specifications",
      timeline: "Day 8-10",
    },
    {
      step: "4",
      title: "Presentation & Revision",
      desc: "Professional presentation of proposal and refinement based on your detailed feedback",
      timeline: "Day 11-14",
    },
    {
      step: "5",
      title: "Final Approval",
      desc: "Official sign-off on final quote, project schedule, and commencement plan",
      timeline: "Day 15",
    },
  ];

  const stats = [
    { number: "200+", label: "Projects Completed" },
    { number: "PKR 2B+", label: "Total Value Delivered" },
    { number: "98%", label: "On-Time Delivery" },
    { number: "14", label: "Days to Quote" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[420px] md:h-[480px] overflow-hidden">
        <img 
          src={quotingImage} 
          alt="Project Based Quoting & Management"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-semibold mb-4">
                Enterprise Solutions
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Project Based <br />
                <span className="text-accent">Quoting</span>
              </h1>
              <p className="text-base md:text-lg text-white/90 max-w-xl leading-relaxed mb-6">
                Specialized comprehensive quotes for large-scale furniture projects across Pakistan. From initial concept to final completion, we handle everything with transparent fixed pricing and guaranteed timelines.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/e-quotation">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 h-12">
                    Request Project Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-6 h-12">
                    Schedule Consultation
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
        {/* Features Grid */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">What's Included</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Comprehensive Project Support</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Our project-based quotes include everything you need for a successful, hassle-free furniture installation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <Card key={i} className="group border-border/50 hover:border-accent/50 hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-8 pb-8">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 group-hover:bg-accent group-hover:scale-110 flex items-center justify-center mb-6 transition-all duration-300">
                    <feature.icon className="h-8 w-8 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Project Types */}
        <div className="mb-24 bg-muted/50 rounded-3xl p-8 md:p-16">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Industries</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">Project Types We Handle</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projectTypes.map((project, i) => (
              <Card key={i} className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-accent/30 overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 group-hover:bg-accent flex items-center justify-center flex-shrink-0 transition-all duration-300">
                      <project.icon className="h-8 w-8 text-accent group-hover:text-accent-foreground transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{project.desc}</p>
                      <div className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-lg font-bold text-lg">
                        {project.minBudget}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Image + Content Section */}
        <div className="mb-24 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src={consultationImage} 
              alt="Project Consultation" 
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg hidden md:block">
              <div className="text-3xl font-bold">25%</div>
              <div className="text-sm">Volume Discount</div>
            </div>
          </div>
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-4xl font-bold mt-3 mb-6">End-to-End Project Management</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              From initial consultation to final installation, our dedicated project managers ensure your furniture project runs smoothly. We handle all the complexities so you can focus on your business.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Single point of contact throughout",
                "Regular progress updates & reporting",
                "Quality assurance at every stage",
                "On-time delivery guarantee",
                "Post-installation support",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                Meet Our Project Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Process Timeline */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Timeline</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">Our Quoting Process</h2>
          </div>
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-accent/20 hidden md:block" />
            {processSteps.map((item, i) => (
              <div key={i} className="relative mb-8 last:mb-0">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center text-xl flex-shrink-0 relative z-10 shadow-lg">
                    {item.step}
                  </div>
                  <Card className="flex-1 hover:shadow-md transition-shadow border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-2xl font-bold">{item.title}</h3>
                        <span className="text-sm text-accent font-semibold bg-accent/10 px-3 py-1 rounded-full">{item.timeline}</span>
                      </div>
                      <p className="text-muted-foreground text-lg leading-relaxed">{item.desc}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-24">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative h-80 rounded-2xl overflow-hidden group">
              <img src={meetingImage} alt="Corporate Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">Corporate Headquarters</h3>
                  <p className="text-white/80">500+ workstation project in Karachi</p>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden group">
              <img src={consultationImage} alt="Educational Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">University Campus</h3>
                  <p className="text-white/80">Complete learning space transformation</p>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Your Project Quote</h2>
              <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto opacity-90 leading-relaxed">
                Ready to discuss your large-scale project? Get a comprehensive detailed quote within 14 business days. Minimum project value: PKR 1,500,000.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/e-quotation">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-10 h-14 text-lg">
                    Request Project Quote
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-10 h-14 text-lg">
                    Schedule Consultation
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

export default ProjectQuoting;
