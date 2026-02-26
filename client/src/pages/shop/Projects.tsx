import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-office.jpg";
import workstationImage from "@/assets/workstation.jpg";
import loungeImage from "@/assets/lounge.jpg";
import meetingRoom from "@/assets/meeting-room.jpg";
import receptionDesk from "@/assets/reception-desk.jpg";
import factoryFloor from "@/assets/factory-floor.jpg";
import storageImage from "@/assets/storage.jpg";
import consultationImage from "@/assets/consultation.jpg";
import officeIsometric from "@/assets/office-isometric.jpg";
import {
  Users, Package, Building2, Award, MapPin, Calendar,
  ArrowRight, ChevronRight, Star, Filter, Eye
} from "lucide-react";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Corporate", "Technology", "Healthcare", "Education", "Hospitality"];

  const projects = [
    {
      name: "Tech Startup Hub",
      client: "InnovateTech Solutions",
      category: "Technology",
      size: "500+ workstations",
      location: "Lahore, Pakistan",
      year: "2025",
      image: workstationImage,
      desc: "Complete office furnishing for a rapidly growing tech company, featuring collaborative workspaces and modern aesthetics.",
      featured: true,
    },
    {
      name: "Corporate Headquarters",
      client: "Global Finance Corp",
      category: "Corporate",
      size: "1,200+ seats",
      location: "Islamabad, Pakistan",
      year: "2024",
      image: heroImage,
      desc: "Premium executive offices and employee workstations across 5 floors, combining luxury with functionality.",
      featured: true,
    },
    {
      name: "Creative Agency Space",
      client: "Design Studios",
      category: "Technology",
      size: "300+ workstations",
      location: "Karachi, Pakistan",
      year: "2024",
      image: loungeImage,
      desc: "Dynamic workspace with flexible furniture arrangements, breakout areas, and collaborative zones.",
      featured: false,
    },
    {
      name: "Modern Hospital Wing",
      client: "City Medical Center",
      category: "Healthcare",
      size: "200+ units",
      location: "Lahore, Pakistan",
      year: "2025",
      image: meetingRoom,
      desc: "Ergonomic and hygienic furniture solutions for patient rooms, waiting areas, and staff lounges.",
      featured: false,
    },
    {
      name: "University Library Renovation",
      client: "National University",
      category: "Education",
      size: "800+ seats",
      location: "Faisalabad, Pakistan",
      year: "2023",
      image: receptionDesk,
      desc: "Complete library transformation with study pods, collaborative tables, and ergonomic reading chairs.",
      featured: false,
    },
    {
      name: "5-Star Hotel Lobby",
      client: "Royal Grand Hotels",
      category: "Hospitality",
      size: "150+ pieces",
      location: "Islamabad, Pakistan",
      year: "2024",
      image: storageImage,
      desc: "Luxury lobby and lounge furnishing with custom-designed reception desks and premium seating.",
      featured: false,
    },
  ];

  const stats = [
    { icon: Building2, number: "1,000+", label: "Projects Completed" },
    { icon: Package, number: "50,000+", label: "Furniture Pieces Installed" },
    { icon: Users, number: "500+", label: "Corporate Clients" },
    { icon: Award, number: "98%", label: "Client Satisfaction" },
  ];

  const testimonials = [
    {
      name: "Ahmed Khan",
      role: "CEO, InnovateTech",
      text: "Woodex transformed our entire office in just 3 weeks. The quality and attention to detail exceeded our expectations.",
      rating: 5,
    },
    {
      name: "Sara Malik",
      role: "Facilities Manager, Global Finance",
      text: "Professional team, premium furniture, and flawless execution. Our employees love the new workspace.",
      rating: 5,
    },
    {
      name: "Dr. Rashid Ali",
      role: "Director, City Medical Center",
      text: "The ergonomic solutions provided by Woodex have significantly improved comfort for both staff and patients.",
      rating: 5,
    },
  ];

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Our Projects | Woodex Office Furniture Pakistan"
        description="Explore successful office transformation projects by Woodex across Pakistan. Corporate, healthcare, education & hospitality furniture solutions."
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
              PORTFOLIO
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Our <span className="text-accent">Projects</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl mb-6">
              Showcasing successful office transformations across diverse industries in Pakistan
            </p>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-accent">Projects</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-5 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-accent-foreground">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center justify-center gap-3">
                <div className="h-10 w-10 rounded-full bg-accent-foreground/10 flex items-center justify-center">
                  <stat.icon className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <div className="text-xl font-bold">{stat.number}</div>
                  <div className="text-xs opacity-85">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects - Large Cards */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Our most impactful workspace transformations
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project, i) => (
            <Card
              key={i}
              className="overflow-hidden group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-accent text-accent-foreground text-xs">Featured</Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-2xl font-bold mb-1">{project.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-white/80">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {project.year}
                    </span>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary">{project.category}</Badge>
                  <Badge variant="outline">{project.size}</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{project.client}</p>
                <p className="text-muted-foreground">{project.desc}</p>
                <Button variant="link" className="px-0 mt-3 text-accent hover:text-accent/80">
                  View Details <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* All Projects with Category Filter */}
      <section className="bg-secondary/50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
            <div>
              <h2 className="text-3xl font-bold mb-1">
                All <span className="text-accent">Projects</span>
              </h2>
              <p className="text-muted-foreground text-sm">
                Browse our complete portfolio of workspace transformations
              </p>
            </div>
            <div className="flex items-center gap-1 flex-wrap">
              <Filter className="h-4 w-4 text-muted-foreground mr-1" />
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={activeCategory === cat ? "default" : "outline"}
                  size="sm"
                  className={activeCategory === cat ? "bg-accent text-accent-foreground hover:bg-accent/90" : ""}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <Card
                key={i}
                className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 border-border/50"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center">
                        <Eye className="h-5 w-5 text-accent-foreground" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="text-xs bg-background/90 backdrop-blur-sm">
                      {project.year}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-accent/10 text-accent border-accent/20 text-xs">{project.category}</Badge>
                    <Badge variant="outline" className="text-xs">{project.size}</Badge>
                  </div>
                  <h3 className="text-lg font-bold mb-1 group-hover:text-accent transition-colors">{project.name}</h3>
                  <p className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> {project.location}
                  </p>
                  <p className="text-sm text-muted-foreground line-clamp-2">{project.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Our <span className="text-accent">Process</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            How we deliver exceptional workspace solutions from concept to completion
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Consultation", desc: "Understanding your needs, space, and budget requirements.", image: consultationImage },
            { step: "02", title: "Space Planning", desc: "3D visualization and layout optimization for maximum efficiency.", image: officeIsometric },
            { step: "03", title: "Manufacturing", desc: "Custom production at our state-of-the-art factory facility.", image: factoryFloor },
            { step: "04", title: "Installation", desc: "Professional delivery, assembly, and setup at your location.", image: meetingRoom },
          ].map((item, i) => (
            <div key={i} className="group text-center">
              <div className="relative h-44 rounded-xl overflow-hidden mb-4">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="text-5xl font-bold text-accent">{item.step}</span>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Client <span className="text-accent">Testimonials</span>
            </h2>
            <p className="opacity-80 max-w-xl mx-auto">What our clients say about working with Woodex</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Card key={i} className="bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="mb-6 opacity-90 italic leading-relaxed">"{t.text}"</p>
                  <div>
                    <p className="font-bold">{t.name}</p>
                    <p className="text-sm opacity-70">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-accent text-accent-foreground border-0 overflow-hidden">
          <CardContent className="p-12 text-center relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Create Your Success Story</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Ready to transform your workspace? Contact us to discuss your project requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/e-quotation">
                <Button size="lg" variant="secondary" className="gap-2">
                  Get Free Quote <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10">
                  Contact Us
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

export default Projects;
