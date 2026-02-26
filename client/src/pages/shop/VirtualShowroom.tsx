import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import workstationImage from "@/assets/workstation.jpg";
import meetingImage from "@/assets/meeting-room.jpg";
import heroImage from "@/assets/hero-office.jpg";
import { Box, Armchair, LayoutGrid, Archive, Sofa, Play, Maximize2, Palette, Package, Shield, Truck } from "lucide-react";

const VirtualShowroom = () => {
  const categories = [
    { icon: Armchair, label: "Executive Chairs" },
    { icon: LayoutGrid, label: "Workstations" },
    { icon: Archive, label: "Storage" },
    { icon: Box, label: "Desks" },
    { icon: Sofa, label: "Lounge" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Banner */}
      <section 
        className="relative h-[340px] md:h-[400px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-accent text-accent-foreground">
              <Box className="h-3 w-3 mr-1" />
              NEW FEATURE
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Virtual
              <span className="block text-accent">Showroom</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-6">
              Experience our furniture in immersive 3D. Design your perfect office space with real-time visualization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary">
                <Play className="h-5 w-5 mr-2" />
                Launch 3D Configurator
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Watch Demo Video
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-4 bg-accent">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-accent-foreground">
            <div className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              <span className="font-medium">56 Products</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span className="font-medium">5-7 Year Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5" />
              <span className="font-medium">Free Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-16">
          {categories.map((cat, i) => (
            <Button
              key={i}
              variant="outline"
              className="h-auto py-6 flex flex-col gap-2 hover:border-accent hover:bg-accent/5"
            >
              <cat.icon className="h-6 w-6" />
              <span className="text-sm">{cat.label}</span>
            </Button>
          ))}
        </div>

        {/* Room Templates */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Pre-Designed Room Templates</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all">
              <div className="aspect-video overflow-hidden relative">
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button size="lg">
                    <Maximize2 className="h-5 w-5 mr-2" />
                    View in 3D
                  </Button>
                </div>
                <img 
                  src={workstationImage} 
                  alt="Open Office Layout"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">Open Office Layout</h3>
                <p className="text-muted-foreground mb-4">
                  Modern workstation configuration for 20-30 employees with collaborative zones
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Est. PKR 850,000</span>
                  <Button variant="outline">Customize</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all">
              <div className="aspect-video overflow-hidden relative">
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button size="lg">
                    <Maximize2 className="h-5 w-5 mr-2" />
                    View in 3D
                  </Button>
                </div>
                <img 
                  src={meetingImage} 
                  alt="Executive Suite"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">Executive Suite</h3>
                <p className="text-muted-foreground mb-4">
                  Premium office setup with executive desk, meeting area, and storage solutions
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Est. PKR 450,000</span>
                  <Button variant="outline">Customize</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 3D Configurator Section */}
        <Card className="bg-muted mb-16">
          <CardContent className="py-32 text-center">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-background flex items-center justify-center mb-6 shadow-lg">
                <Box className="h-12 w-12 text-accent animate-pulse" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Interactive 3D Configurator</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                Design your perfect office space with our advanced 3D visualization tool. Drag and drop furniture, change materials, and see real-time pricing updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">
                  <Play className="h-5 w-5 mr-2" />
                  Launch Full Configurator
                </Button>
                <Button size="lg" variant="outline">
                  Watch Tutorial
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8">Configurator Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Maximize2 className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Real-Time Visualization</h3>
                <p className="text-muted-foreground">
                  See exactly how furniture will look in your space with photorealistic 3D rendering and accurate measurements
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <LayoutGrid className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Custom Layouts</h3>
                <p className="text-muted-foreground">
                  Design multiple layouts and compare options to find the perfect configuration for your team size and workflow
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Palette className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Material Selection</h3>
                <p className="text-muted-foreground">
                  Choose from hundreds of finishes, fabrics, and colors to match your brand identity and aesthetic preferences
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VirtualShowroom;