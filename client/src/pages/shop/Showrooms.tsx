import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import showroomImage from "@/assets/showroom-exterior.jpg";
import { MapPin, Phone, Clock, Mail, Navigation, Calendar, CheckCircle2, Package, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Showrooms = () => {
  const showrooms = [
    {
      name: "Lahore - Headquarters",
      address: "45-A Industrial Area, Gulberg III, Lahore, Punjab",
      phone: "+92 42 3578 9012",
      whatsapp: "+92 300 1234567",
      email: "lahore@woodex.pk",
      hours: "Mon-Sat: 9:00 AM - 7:00 PM",
      closed: "Sunday: Closed",
      features: ["Full 56 product range", "3D visualization studio", "Design consultation center", "Factory tours available"],
      isHQ: true,
    },
    {
      name: "Karachi",
      address: "Plot 12, SITE Industrial Area, Karachi, Sindh",
      phone: "+92 21 3456 7890",
      whatsapp: "+92 321 9876543",
      email: "karachi@woodex.pk",
      hours: "Mon-Sat: 9:00 AM - 6:00 PM",
      closed: "Sunday: Closed",
      features: ["Executive furniture displays", "Corporate solutions center", "B2B services hub"],
      isHQ: false,
    },
    {
      name: "Islamabad",
      address: "Blue Area, Jinnah Avenue, Islamabad, Federal Capital",
      phone: "+92 51 2345 6789",
      whatsapp: "+92 333 4567890",
      email: "islamabad@woodex.pk",
      hours: "Mon-Sat: 9:30 AM - 6:30 PM",
      closed: "Sunday: Closed",
      features: ["Government project specialists", "Premium collections", "Consultation services"],
      isHQ: false,
    },
  ];

  const showroomFeatures = [
    { title: "Live Product Displays", desc: "Experience our furniture in real office setups" },
    { title: "3D Design Studio", desc: "Visualize your workspace before ordering" },
    { title: "Expert Consultants", desc: "Get personalized advice from our team" },
    { title: "Material Samples", desc: "Touch and feel our premium materials" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Banner */}
      <section 
        className="relative h-[340px] md:h-[400px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${showroomImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Visit Our
              <span className="block text-accent">Showrooms</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              Experience Pakistan's finest office furniture collection in person. Walk-ins welcome or schedule a personalized visit.
            </p>
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
              <Users className="h-5 w-5" />
              <span className="font-medium">Expert Consultants</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-12 bg-muted/50 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {showroomFeatures.map((feature, i) => (
              <div key={i} className="text-center">
                <h3 className="font-bold mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Showroom Cards */}
        <section className="mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            {showrooms.map((showroom, i) => (
              <Card key={i} className={`hover:shadow-xl transition-all ${showroom.isHQ ? 'border-2 border-accent' : ''}`}>
                {showroom.isHQ && (
                  <div className="bg-accent text-accent-foreground text-center py-2 text-sm font-medium">
                    Factory & Headquarters
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">{showroom.name}</h3>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-sm text-muted-foreground">{showroom.address}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium">Phone</p>
                        <a href={`tel:${showroom.phone.replace(/\s/g, '')}`} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                          {showroom.phone}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <a href={`mailto:${showroom.email}`} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                          {showroom.email}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium">Hours</p>
                        <p className="text-sm text-muted-foreground">{showroom.hours}</p>
                        <p className="text-sm text-muted-foreground">{showroom.closed}</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6 mb-6">
                    <p className="font-bold mb-4">Showroom Features:</p>
                    <ul className="space-y-2">
                      {showroom.features.map((feature, j) => (
                        <li key={j} className="text-sm text-muted-foreground flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full">
                      <Navigation className="h-4 w-4 mr-2" />
                      Get Directions
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule Visit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* What to Expect */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What to Expect</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Make the most of your showroom visit
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Browse", desc: "Explore our complete range of 56 premium products across 11 categories" },
              { step: "02", title: "Experience", desc: "Test chairs, desks, and workstations to find your perfect match" },
              { step: "03", title: "Consult", desc: "Speak with our design experts about your specific requirements" },
              { step: "04", title: "Visualize", desc: "See your office design come to life with 3D visualization" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center mx-auto mb-4 text-xl">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Virtual Showroom CTA */}
        <section className="mb-20 bg-muted rounded-2xl p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Can't Visit in Person?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Experience our showroom from anywhere in Pakistan. Take a virtual tour, schedule a video consultation, or browse our complete catalog online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/virtual-showroom">
                  <Button size="lg">Virtual Showroom Tour</Button>
                </Link>
                <Link to="/shop">
                  <Button size="lg" variant="outline">Browse Catalog</Button>
                </Link>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-block p-8 bg-background rounded-2xl shadow-lg">
                <div className="text-6xl font-bold text-accent mb-2">56</div>
                <p className="text-lg font-medium">Products Available</p>
                <p className="text-sm text-muted-foreground">Across 11 categories</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-accent text-accent-foreground rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Schedule Your Showroom Visit</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Book an appointment with our design consultants for a personalized showroom tour and expert advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="min-w-[200px]">
                Schedule Appointment
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

export default Showrooms;