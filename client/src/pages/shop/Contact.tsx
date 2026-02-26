import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageCircle, Building2, Users, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { SEO, generateLocalBusinessSchema, generateFAQSchema } from "@/components/SEO";
import heroImage from "@/assets/hero-office.jpg";

const Contact = () => {
  const faqSchema = generateFAQSchema([
    { question: "What areas do you deliver to?", answer: "We deliver nationwide across Pakistan including all major cities and remote areas." },
    { question: "How long does delivery take?", answer: "Standard delivery is 7-14 business days. Express options available for urgent orders." },
    { question: "Do you offer installation services?", answer: "Yes, professional installation is included free with all furniture orders." },
    { question: "What warranty do you provide?", answer: "All products come with 5-7 year warranty covering manufacturing defects." },
  ]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you within 24 hours.");
  };

  const contactInfo = [
    { 
      icon: Phone, 
      title: "Phone", 
      content: "+92 42 3578 9012",
      subtext: "Mon-Sat: 9AM-7PM"
    },
    { 
      icon: MessageCircle, 
      title: "WhatsApp", 
      content: "+92 300 1234567",
      subtext: "Quick responses 24/7"
    },
    { 
      icon: Mail, 
      title: "Email", 
      content: "info@woodex.pk",
      subtext: "sales@woodex.pk"
    },
    { 
      icon: MapPin, 
      title: "Head Office", 
      content: "Gulberg III, Lahore",
      subtext: "Punjab, Pakistan"
    },
    { 
      icon: Clock, 
      title: "Working Hours", 
      content: "Mon-Sat: 9AM-7PM",
      subtext: "Sunday: Closed"
    },
  ];

  const locations = [
    { 
      city: "Lahore", 
      address: "45-A Industrial Area, Gulberg III", 
      status: "Headquarters",
      phone: "+92 42 3578 9012",
      email: "lahore@woodex.pk"
    },
    { 
      city: "Karachi", 
      address: "Plot 12, SITE Industrial Area", 
      status: "Sales Office",
      phone: "+92 21 3456 7890",
      email: "karachi@woodex.pk"
    },
    { 
      city: "Islamabad", 
      address: "Blue Area, Jinnah Avenue", 
      status: "Sales Office",
      phone: "+92 51 2345 6789",
      email: "islamabad@woodex.pk"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact Us - Office Furniture Inquiries"
        description="Contact WOODEX for office furniture quotes, design consultations, and B2B inquiries. Offices in Lahore, Karachi, Islamabad. WhatsApp: +92 300 1234567"
        keywords="contact WOODEX, office furniture Lahore, furniture quote Pakistan, B2B furniture inquiry"
        canonical="https://woodex.pk/contact"
        structuredData={[generateLocalBusinessSchema(), faqSchema]}
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
              Contact
              <span className="block text-accent">Us</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              Let's transform your office together. Reach out to our team and we'll respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="py-4 bg-accent">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-accent-foreground">
            <a href="tel:+923001234567" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="h-5 w-5" />
              <span>+92 300 1234567</span>
            </a>
            <a href="https://wa.me/923001234567" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp Us</span>
            </a>
            <a href="mailto:info@woodex.pk" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="h-5 w-5" />
              <span>info@woodex.pk</span>
            </a>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-24">
          {/* Contact Form */}
          <Card className="shadow-xl">
            <CardContent className="p-8 lg:p-10">
              <h2 className="text-3xl font-bold mb-2">Send us a Message</h2>
              <p className="text-muted-foreground mb-8">Fill out the form and we'll get back to you within 24 hours.</p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="Muhammad" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Ali" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="ali@company.pk" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone / WhatsApp *</Label>
                    <Input id="phone" type="tel" placeholder="+92 300 1234567" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inquiry">Inquiry Type *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="quote">Request a Quote</SelectItem>
                      <SelectItem value="consultation">Design Consultation</SelectItem>
                      <SelectItem value="b2b">B2B Partnership</SelectItem>
                      <SelectItem value="support">Customer Support</SelectItem>
                      <SelectItem value="warranty">Warranty Claim</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input id="subject" placeholder="How can we help you?" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea id="message" rows={5} placeholder="Please describe your inquiry in detail..." required />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="shadow-xl">
              <CardContent className="p-8 lg:p-10">
                <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, i) => (
                    <div key={i} className="flex gap-4 group">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-all">
                          <info.icon className="h-7 w-7 text-accent" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">{info.title}</h3>
                        <p className="text-foreground font-medium">{info.content}</p>
                        {info.subtext && (
                          <p className="text-muted-foreground text-sm">{info.subtext}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-accent/5 border-accent/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Users className="h-7 w-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Prefer Instant Response?</h3>
                    <p className="text-muted-foreground mb-4">
                      For urgent inquiries, reach us on WhatsApp for immediate assistance with quotes, consultations, and questions.
                    </p>
                    <a href="https://wa.me/923001234567">
                      <Button>
                        <MessageCircle className="h-4 w-4 mr-2" />
                        WhatsApp Us Now
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Locations */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Locations</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Serving businesses across Pakistan with showrooms in major cities
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {locations.map((location, i) => (
              <Card key={i} className="hover:shadow-xl hover:border-accent transition-all">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Building2 className="h-8 w-8 text-accent" />
                  </div>
                  <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-3">
                    {location.status}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{location.city}</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{location.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                      <a href={`tel:${location.phone.replace(/\s/g, '')}`} className="text-muted-foreground hover:text-accent transition-colors">
                        {location.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                      <a href={`mailto:${location.email}`} className="text-muted-foreground hover:text-accent transition-colors">
                        {location.email}
                      </a>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-6">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="mb-24 bg-muted/50 rounded-2xl p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto grid gap-4">
            {[
              { q: "What areas do you deliver to?", a: "We deliver nationwide across Pakistan including all major cities and remote areas." },
              { q: "How long does delivery take?", a: "Standard delivery is 7-14 business days. Express options available for urgent orders." },
              { q: "Do you offer installation services?", a: "Yes, professional installation is included free with all furniture orders." },
              { q: "What warranty do you provide?", a: "All products come with 5-7 year warranty covering manufacturing defects." },
            ].map((item, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">{item.q}</h3>
                      <p className="text-sm text-muted-foreground">{item.a}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-accent text-accent-foreground rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Request a free consultation and quote for your office furniture project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/e-quotation">
              <Button size="lg" variant="secondary" className="min-w-[200px]">
                Get Free Quote
              </Button>
            </Link>
            <Link to="/showrooms">
              <Button size="lg" variant="secondary" className="min-w-[200px]">
                Visit Showroom
              </Button>
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;