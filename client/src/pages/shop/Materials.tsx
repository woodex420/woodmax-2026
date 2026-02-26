import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import heroImage from "@/assets/hero-office.jpg";
import customDesignImage from "@/assets/custom-design-studio.jpg";
import loungeImage from "@/assets/lounge.jpg";
import { Palette, Shield, Package, Truck, CheckCircle2, ArrowRight, Sparkles, Layers } from "lucide-react";

const Materials = () => {
  const materials = [
    {
      icon: Layers,
      category: "Wood Finishes",
      options: ["Oak", "Walnut", "Maple", "Cherry", "Mahogany", "Ash"],
      desc: "Premium natural wood veneers and solid wood options sourced from certified sustainable forests.",
    },
    {
      icon: Sparkles,
      category: "Fabric Upholstery",
      options: ["Wool Blend", "Performance Fabric", "Microfiber", "Canvas", "Velvet"],
      desc: "Durable, stain-resistant fabrics available in hundreds of colors and textures.",
    },
    {
      icon: Shield,
      category: "Leather",
      options: ["Full Grain", "Top Grain", "Bonded Leather", "Vegan Leather"],
      desc: "Genuine and synthetic leather options in various grades for executive furniture.",
    },
    {
      icon: Package,
      category: "Laminates",
      options: ["HPL", "Acrylic", "Wood Grain", "Solid Colors", "Textured"],
      desc: "Low-maintenance, highly durable surface finishes perfect for high-traffic areas.",
    },
  ];

  const colors = [
    { name: "Black", hex: "#000000" },
    { name: "Charcoal", hex: "#36454F" },
    { name: "Navy", hex: "#000080" },
    { name: "Gray", hex: "#808080" },
    { name: "White", hex: "#FFFFFF" },
    { name: "Beige", hex: "#F5F5DC" },
    { name: "Brown", hex: "#8B4513" },
    { name: "Burgundy", hex: "#800020" },
    { name: "Forest Green", hex: "#228B22" },
    { name: "Royal Blue", hex: "#4169E1" },
    { name: "Cream", hex: "#FFFDD0" },
    { name: "Taupe", hex: "#483C32" },
  ];

  const woodFinishes = [
    { name: "Light Oak", gradient: "linear-gradient(135deg, #D4A76A 0%, #C19A6B 100%)" },
    { name: "Walnut", gradient: "linear-gradient(135deg, #5C4033 0%, #3E2723 100%)" },
    { name: "White Ash", gradient: "linear-gradient(135deg, #F5F5DC 0%, #E8E8E8 100%)" },
    { name: "Dark Cherry", gradient: "linear-gradient(135deg, #8B4513 0%, #654321 100%)" },
    { name: "Mahogany", gradient: "linear-gradient(135deg, #C04000 0%, #8B0000 100%)" },
    { name: "Maple", gradient: "linear-gradient(135deg, #FFE4B5 0%, #DEB887 100%)" },
  ];

  const benefits = [
    "All materials are environmentally certified",
    "Fire-retardant fabric options available",
    "UV-resistant finishes for longevity",
    "Easy-clean and antimicrobial options",
    "Custom color matching service",
    "Physical sample kits available",
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Materials & Finishes - Premium Office Furniture Options"
        description="Explore 200+ material options for your custom office furniture. Premium woods, fabrics, leather, and laminates. Request a free sample kit."
        keywords="furniture materials, wood finishes, fabric upholstery, office furniture materials Pakistan"
        canonical="https://woodex.pk/materials"
      />
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[420px] md:h-[480px] overflow-hidden">
        <img 
          src={heroImage} 
          alt="Premium Materials & Finishes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-semibold mb-4">
                200+ Options Available
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Materials & <br />
                <span className="text-accent">Finishes</span>
              </h1>
              <p className="text-base md:text-lg text-white/90 max-w-xl leading-relaxed mb-6">
                Choose from our extensive library of premium materials, finishes, and colors. Every piece can be customized to match your brand and workspace aesthetics.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/e-quotation">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 h-12">
                    Request Sample Kit
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/showrooms">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-6 h-12">
                    Visit Showroom
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
              <div className="text-3xl md:text-4xl font-bold mb-1">200+</div>
              <div className="text-xs md:text-sm opacity-90">Color Options</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">50+</div>
              <div className="text-xs md:text-sm opacity-90">Wood Finishes</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">100%</div>
              <div className="text-xs md:text-sm opacity-90">Quality Certified</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">Free</div>
              <div className="text-xs md:text-sm opacity-90">Sample Kits</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        {/* Material Categories */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Categories</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Material Options</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Every material is carefully selected for durability, aesthetics, and sustainability
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {materials.map((material, i) => (
              <Card key={i} className="group border-border/50 hover:border-accent/50 hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 group-hover:bg-accent flex items-center justify-center flex-shrink-0 transition-all duration-300">
                      <material.icon className="h-8 w-8 text-accent group-hover:text-accent-foreground transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">{material.category}</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{material.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {material.options.map((option, j) => (
                          <Badge key={j} variant="secondary" className="bg-muted hover:bg-accent/10 transition-colors">
                            {option}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Wood Finishes Gallery */}
        <div className="mb-24 bg-muted/50 rounded-3xl p-8 md:p-16">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Wood Collection</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">Premium Wood Finishes</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {woodFinishes.map((finish, i) => (
              <div key={i} className="text-center group cursor-pointer">
                <div 
                  className="w-full aspect-square rounded-2xl border-2 border-border mb-4 shadow-md group-hover:shadow-xl group-hover:scale-105 transition-all duration-300"
                  style={{ background: finish.gradient }}
                />
                <p className="font-semibold">{finish.name}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground text-center mt-8">
            All wood finishes available in matte, satin, or high-gloss options
          </p>
        </div>

        {/* Image + Content Section */}
        <div className="mb-24 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src={customDesignImage} 
              alt="Material Selection Process" 
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg hidden md:block">
              <div className="text-3xl font-bold">Free</div>
              <div className="text-sm">Sample Kit</div>
            </div>
          </div>
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Quality Promise</span>
            <h2 className="text-4xl font-bold mt-3 mb-6">Why Our Materials Stand Out</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We source materials from certified suppliers worldwide, ensuring every piece of furniture meets our exacting quality standards. From eco-friendly options to premium luxury finishes, we have the perfect material for your project.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="font-medium text-sm">{benefit}</span>
                </div>
              ))}
            </div>
            <Link to="/services/custom-design">
              <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                Custom Design Studio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Color Palette */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Colors</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">Upholstery Color Options</h2>
          </div>
          <Card className="border-border/50 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-6">
                {colors.map((color, i) => (
                  <div key={i} className="text-center group cursor-pointer">
                    <div 
                      className="w-full aspect-square rounded-xl border-2 border-border mx-auto mb-3 shadow-sm group-hover:shadow-lg group-hover:scale-110 transition-all duration-300"
                      style={{ backgroundColor: color.hex }}
                    />
                    <p className="text-xs font-medium">{color.name}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-8 text-center">
                Over 200 additional fabric colors available. Request a physical sample book for the complete range.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Image Gallery */}
        <div className="mb-24">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative h-80 rounded-2xl overflow-hidden group">
              <img src={customDesignImage} alt="Custom Materials" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">Custom Material Selection</h3>
                  <p className="text-white/80">Work with our designers to find the perfect match</p>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden group">
              <img src={loungeImage} alt="Finished Products" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">Finished Excellence</h3>
                  <p className="text-white/80">See the final result in our showrooms</p>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Need Help Choosing?</h2>
              <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto opacity-90 leading-relaxed">
                Our design consultants can help you select the perfect materials and colors for your space. Request a free sample kit or visit our showroom.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/e-quotation">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-10 h-14 text-lg">
                    Request Sample Kit
                  </Button>
                </Link>
                <Link to="/showrooms">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-10 h-14 text-lg">
                    Visit Showroom
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

export default Materials;
