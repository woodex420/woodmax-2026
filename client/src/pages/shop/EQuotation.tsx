import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, FileText, Clock, DollarSign, Users, Phone, MessageCircle, Shield, Truck, Award } from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import heroImage from "@/assets/hero-office.jpg";

const EQuotation = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Quote request submitted! We'll respond within 24 hours.");
  };

  const benefits = [
    { icon: Clock, title: "24-Hour Response", desc: "Receive detailed quotes within one business day" },
    { icon: DollarSign, title: "Transparent Pricing", desc: "Clear breakdown of costs with no hidden fees" },
    { icon: CheckCircle2, title: "No Obligation", desc: "Free quotes with no pressure to commit" },
    { icon: Users, title: "Expert Advice", desc: "Personalized recommendations for your needs" },
  ];

  const features = [
    "Free 3D visualization of your space",
    "Customization options available",
    "Factory-direct pricing",
    "Nationwide delivery across Pakistan",
    "5-7 year warranty on all products",
    "Professional installation included",
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Get Free Quote - Office Furniture Quotation"
        description="Request a free office furniture quote. Transparent pricing, 24-hour response, no obligation. Get personalized recommendations for your workspace needs."
        keywords="office furniture quote, free quotation, furniture pricing Pakistan, B2B furniture quote"
        canonical="https://woodex.pk/e-quotation"
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
            <span className="inline-flex items-center bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
              <FileText className="h-4 w-4 mr-2" />
              Free Quote Service
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Get Your Free
              <span className="block text-accent">Quotation</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              Fast, transparent pricing for all your office furniture needs. Fill out the form and receive a detailed quote within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-4 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 text-accent-foreground">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-accent-foreground/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="h-5 w-5 lg:h-6 lg:w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">{benefit.title}</h3>
                  <p className="text-xs opacity-90 hidden sm:block">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-10 lg:py-16">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
          {/* Quote Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-0">
              <CardContent className="p-6 lg:p-8">
                <h2 className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8">Request a Quote</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Row 1: Name & Company */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">Full Name *</Label>
                      <Input 
                        id="name" 
                        placeholder="Muhammad Ali" 
                        required 
                        className="h-11 bg-background border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-sm font-medium">Company Name *</Label>
                      <Input 
                        id="company" 
                        placeholder="Your Company Pvt Ltd" 
                        required 
                        className="h-11 bg-background border-border"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">Email Address *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="ali@company.pk" 
                        required 
                        className="h-11 bg-background border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium">Phone / WhatsApp *</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+92 300 1234567" 
                        required 
                        className="h-11 bg-background border-border"
                      />
                    </div>
                  </div>

                  {/* Row 3: City & Project Type */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="city" className="text-sm font-medium">City *</Label>
                      <Select>
                        <SelectTrigger className="h-11 bg-background border-border">
                          <SelectValue placeholder="Select city" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="lahore">Lahore</SelectItem>
                          <SelectItem value="karachi">Karachi</SelectItem>
                          <SelectItem value="islamabad">Islamabad</SelectItem>
                          <SelectItem value="rawalpindi">Rawalpindi</SelectItem>
                          <SelectItem value="faisalabad">Faisalabad</SelectItem>
                          <SelectItem value="multan">Multan</SelectItem>
                          <SelectItem value="peshawar">Peshawar</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="project" className="text-sm font-medium">Project Type *</Label>
                      <Select>
                        <SelectTrigger className="h-11 bg-background border-border">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new-office">New Office Setup</SelectItem>
                          <SelectItem value="renovation">Office Renovation</SelectItem>
                          <SelectItem value="expansion">Office Expansion</SelectItem>
                          <SelectItem value="replacement">Furniture Replacement</SelectItem>
                          <SelectItem value="custom">Custom Project</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Row 4: Employees & Budget */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="employees" className="text-sm font-medium">Number of Employees</Label>
                      <Select>
                        <SelectTrigger className="h-11 bg-background border-border">
                          <SelectValue placeholder="Select range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 employees</SelectItem>
                          <SelectItem value="11-50">11-50 employees</SelectItem>
                          <SelectItem value="51-100">51-100 employees</SelectItem>
                          <SelectItem value="101-250">101-250 employees</SelectItem>
                          <SelectItem value="250+">250+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget" className="text-sm font-medium">Budget Range (PKR)</Label>
                      <Select>
                        <SelectTrigger className="h-11 bg-background border-border">
                          <SelectValue placeholder="Select budget" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-500k">Under 500,000</SelectItem>
                          <SelectItem value="500k-1m">500,000 - 1,000,000</SelectItem>
                          <SelectItem value="1m-3m">1,000,000 - 3,000,000</SelectItem>
                          <SelectItem value="3m-5m">3,000,000 - 5,000,000</SelectItem>
                          <SelectItem value="5m-10m">5,000,000 - 10,000,000</SelectItem>
                          <SelectItem value="10m+">10,000,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Row 5: Requirements */}
                  <div className="space-y-2">
                    <Label htmlFor="requirements" className="text-sm font-medium">Requirements & Details *</Label>
                    <Textarea
                      id="requirements"
                      placeholder="Please describe your furniture needs: types of furniture required, preferred style, specific features, space dimensions, delivery timeline, and any other requirements..."
                      rows={5}
                      required
                      className="bg-background border-border resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full h-12 font-semibold text-base">
                    Submit Quote Request
                  </Button>

                  <p className="text-xs text-muted-foreground text-center pt-1">
                    By submitting, you agree to our privacy policy. Your information is secure and will only be used for this quotation.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* What's Included */}
            <Card className="border shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-5">What's Included</h3>
                <ul className="space-y-3">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card className="border shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-5">Prefer to Talk?</h3>
                <div className="space-y-3">
                  <a 
                    href="tel:+923001234567" 
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Call Us</p>
                      <p className="text-sm text-muted-foreground">+92 300 1234567</p>
                    </div>
                  </a>
                  <a 
                    href="https://wa.me/923001234567" 
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">WhatsApp</p>
                      <p className="text-sm text-muted-foreground">Quick Response</p>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Trust Badge */}
            <Card className="bg-primary text-primary-foreground border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold mb-2">Trusted by 1,200+ Businesses</h3>
                <p className="text-sm opacity-80 leading-relaxed">
                  Join Pakistan's leading companies who trust WoodEx for their office furniture needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Process Section */}
        <section className="mt-16 lg:mt-20">
          <div className="text-center mb-10 lg:mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Happens Next?</h2>
            <p className="text-base lg:text-lg text-muted-foreground">Our simple 3-step quotation process</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "1", title: "We Review", desc: "Our team reviews your requirements and prepares a detailed assessment within hours" },
              { step: "2", title: "We Design", desc: "We create a customized quotation with product recommendations and 3D visualization" },
              { step: "3", title: "You Decide", desc: "Receive your quote within 24 hours with no obligation to purchase" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center mx-auto mb-4 text-xl lg:text-2xl">
                  {item.step}
                </div>
                <h3 className="text-lg lg:text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm lg:text-base text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 lg:mt-20 bg-accent text-accent-foreground rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
          <p className="text-base lg:text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Our sales team is available to discuss your requirements and provide instant guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+923001234567">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Call Now: +92 300 1234567
              </Button>
            </a>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Visit Contact Page
              </Button>
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default EQuotation;