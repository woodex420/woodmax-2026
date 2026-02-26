import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, FileText, Headphones, Clock, Award, Phone, Mail, Users, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-office.jpg";

const Warranty = () => {
  const coverage = [
    "Manufacturing defects in materials and workmanship",
    "Structural integrity of frames, bases, and mechanisms",
    "Hardware components including hinges, slides, and locks",
    "Upholstery fabrics and cushioning under normal use",
    "Wood, laminate, and veneer surface finishes",
    "Pneumatic cylinders and hydraulic systems in chairs",
    "Electrical components in height-adjustable desks",
    "Mesh fabric and foam in ergonomic seating",
  ];

  const notCovered = [
    "Normal wear and tear from everyday use",
    "Damage from improper use, abuse, or neglect",
    "Modifications made by unauthorized parties",
    "Accidental damage including cuts, burns, or stains",
    "Damage from moving or improper transportation",
    "Fading from direct sunlight exposure",
    "Commercial rental or sub-lease use",
  ];

  const warrantyTiers = [
    { 
      title: "Standard Warranty", 
      years: "5 Years", 
      desc: "Included with all products",
      features: ["Manufacturing defects", "Structural issues", "Hardware failures", "Standard support"]
    },
    { 
      title: "Premium Warranty", 
      years: "7 Years", 
      desc: "For B2B and bulk orders",
      features: ["Everything in Standard", "Priority support", "On-site repairs", "Extended coverage"],
      popular: true
    },
    { 
      title: "Extended Coverage", 
      years: "10 Years", 
      desc: "Available for purchase",
      features: ["Everything in Premium", "Comprehensive coverage", "Replacement guarantee", "VIP support"]
    },
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Warranty &
              <span className="block text-accent">Protection</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              We stand behind the quality of every piece. Enjoy peace of mind with Pakistan's most comprehensive furniture warranty.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-4 bg-accent">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-accent-foreground">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span className="font-medium">5-7 Year Coverage</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              <span className="font-medium">Quality Guaranteed</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span className="font-medium">Fast Claim Process</span>
            </div>
            <div className="flex items-center gap-2">
              <Headphones className="h-5 w-5" />
              <span className="font-medium">24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Warranty Tiers */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Warranty Options</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose the protection level that's right for your business
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {warrantyTiers.map((tier, i) => (
              <Card key={i} className={`relative ${tier.popular ? 'border-2 border-accent shadow-xl' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold mb-2">{tier.title}</h3>
                  <div className="text-5xl font-bold text-accent mb-2">{tier.years}</div>
                  <p className="text-sm text-muted-foreground mb-6">{tier.desc}</p>
                  <ul className="space-y-3 text-left mb-8">
                    {tier.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Coverage Details */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* What's Covered */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold">What's Covered</h3>
                </div>
                <ul className="space-y-3">
                  {coverage.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* What's Not Covered */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                    <FileText className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold">Exclusions</h3>
                </div>
                <ul className="space-y-3">
                  {notCovered.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 flex-shrink-0 mt-0.5 flex items-center justify-center">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full" />
                      </div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Claim Process */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">How to File a Warranty Claim</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Simple, hassle-free process to get your issues resolved
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Contact Us", desc: "Call, WhatsApp, or email our support team with your order details and issue description" },
              { step: "02", title: "Assessment", desc: "Our team will evaluate the issue, possibly requesting photos or scheduling an inspection" },
              { step: "03", title: "Approval", desc: "Once approved, we'll arrange for repair, replacement, or credit based on the situation" },
              { step: "04", title: "Resolution", desc: "Most claims are resolved within 7-14 business days with minimal disruption to you" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center mx-auto mb-4 text-xl">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Important Notes */}
        <section className="mb-20">
          <Card className="bg-muted/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Important Information</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold mb-3">Registration</h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    Your warranty is automatically registered upon purchase. Keep your invoice and order number for future reference.
                  </p>
                  <h4 className="font-bold mb-3">Transferability</h4>
                  <p className="text-muted-foreground text-sm">
                    Warranties are non-transferable and apply only to the original purchaser and delivery location.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-3">Care & Maintenance</h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    Proper care extends the life of your furniture. Follow the care instructions provided with each product to maintain warranty coverage.
                  </p>
                  <h4 className="font-bold mb-3">Commercial Use</h4>
                  <p className="text-muted-foreground text-sm">
                    All our warranties cover normal commercial office use. Extended commercial warranties available for high-traffic environments.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Support */}
        <section className="bg-accent text-accent-foreground rounded-2xl p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Headphones className="h-16 w-16 mb-6 opacity-90" />
              <h2 className="text-4xl font-bold mb-4">Need Warranty Support?</h2>
              <p className="text-lg opacity-90 mb-8">
                Our dedicated support team is ready to assist with warranty claims, questions, and product issues.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 opacity-80" />
                  <div>
                    <p className="font-bold">Warranty Hotline</p>
                    <a href="tel:+923001234567" className="opacity-90 hover:opacity-100">+92 300 1234567</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 opacity-80" />
                  <div>
                    <p className="font-bold">Email Support</p>
                    <a href="mailto:warranty@woodex.pk" className="opacity-90 hover:opacity-100">warranty@woodex.pk</a>
                  </div>
                </div>
                <p className="text-sm opacity-80 mt-4">
                  Available Mon-Sat, 9:00 AM - 6:00 PM PKT
                </p>
              </div>
            </div>
            <div className="text-center">
              <Card className="bg-accent-foreground/10 border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Quick Claim Form</h3>
                  <p className="opacity-90 mb-6">
                    File your warranty claim online and get a response within 24 hours.
                  </p>
                  <Link to="/contact">
                    <Button size="lg" variant="secondary">
                      Submit Warranty Claim
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Warranty;