import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";
import HeroSlider from "@/components/HeroSlider";
import { SEO, generateOrganizationSchema, generateLocalBusinessSchema, generateFAQSchema } from "@/components/SEO";
import { ChevronRight, Paintbrush, Eye, Factory, Truck, ShieldCheck, MapPin, Phone, FileText, MessageCircle, Star } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Import images
import workstationImg from "@/assets/workstation.jpg";
import storageImg from "@/assets/storage.jpg";
import chairExecutiveImg from "@/assets/chair-executive.jpg";
import deskExecutiveImg from "@/assets/desk-executive.jpg";
import loungeImg from "@/assets/lounge.jpg";
import meetingRoomImg from "@/assets/meeting-room.jpg";
import receptionDeskImg from "@/assets/reception-desk.jpg";
import officeIsometricImg from "@/assets/office-isometric.jpg";
import bookshelfImg from "@/assets/bookshelf.jpg";
import heroOfficeImg from "@/assets/hero-office.jpg";
import consultationImg from "@/assets/consultation.jpg";
import customDesignImg from "@/assets/custom-design-studio.jpg";
import deliveryImg from "@/assets/delivery-service.jpg";
import factoryImg from "@/assets/factory-floor.jpg";

// Bestseller images
import matrixFlowManager from "@/assets/products/matrix-flow-manager.jpg";
import infinityExecutive from "@/assets/products/infinity-executive.jpg";
import crownExecutive from "@/assets/products/crown-executive.jpg";
import eliteExecutive from "@/assets/products/elite-executive.jpg";

// Explore images
import ambassadorExecutive from "@/assets/products/ambassador-executive.jpg";
import waveComfortStaff from "@/assets/products/wave-comfort-staff.jpg";
import nexaExecutive from "@/assets/products/nexa-executive.jpg";
import diamondExecutive from "@/assets/products/diamond-executive.jpg";

const faqs = [
  {
    question: "What types of office furniture does Woodex manufacture?",
    answer: "We manufacture a complete range — executive desks, manager tables, staff workstations, ergonomic chairs, conference tables, reception desks, filing cabinets, bookshelves, office sofas, and café/lounge furniture. Every piece can be customized to your specifications.",
  },
  {
    question: "Can I get furniture customized to my office space and brand colors?",
    answer: "Absolutely. Customization is our core strength. We offer custom sizing, finish colors, material selection (MDF melamine, veneer, glass, fabric, leather), and branded elements — all based on your space measurements and brand guidelines.",
  },
  {
    question: "Do you offer free site visits and 3D design?",
    answer: "Yes. For corporate and bulk orders, we provide a complimentary site visit, space assessment, and photorealistic 3D design layout — so you can visualize your workspace before placing an order.",
  },
  {
    question: "What is the delivery timeline?",
    answer: "Standard production takes 10–15 working days depending on the order size and customization level. Ready-stock items ship within 3–5 working days. We provide a confirmed timeline at the time of order.",
  },
  {
    question: "Do you deliver across Pakistan?",
    answer: "Yes — we deliver nationwide. Priority delivery is available for Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, Multan, and Peshawar. For other cities, delivery timelines are confirmed at the time of order.",
  },
  {
    question: "What warranty do you offer?",
    answer: "We offer up to a 3-year structural warranty on desks, tables, and workstations. Office chairs come with a 1-year warranty on wheels, gas lift, and base mechanism. Terms vary by product — details are listed on each product page.",
  },
  {
    question: "What materials do you use?",
    answer: "We use high-quality MDF with melamine finish, imported PVC edge banding, export-grade 18-gauge MS powder-coated frames, alloy steel chair bases, Master MoltyFoam cushioning, and premium upholstery fabrics (mesh, polyester, velvet, synthetic leather).",
  },
  {
    question: "How can I request a quote?",
    answer: "You can request an instant quote via our E-Quote form, call us at +92 322 4000 768, or message us on WhatsApp. Just share your requirements (product type, quantity, space dimensions) and we'll respond within 24 hours.",
  },
  {
    question: "Do you handle large corporate projects?",
    answer: "Yes — we specialize in turnkey office fit-outs. From 10-seat startups to 500+ seat corporate offices, we manage the entire process: design consultation, 3D planning, manufacturing, delivery, and installation.",
  },
  {
    question: "Can I visit your showroom?",
    answer: "Yes! Our showroom and office is located at LG 89, Zainab Tower, Model Town Link Road, Lahore. Visit us Monday to Friday, 10:30 AM – 7:30 PM, or Saturday by appointment. Walk-ins are welcome.",
  },
];

const categories = [
  { name: "Executive Tables", desc: "Command attention with premium executive desks in MDF melamine, veneer, and glass finishes.", image: deskExecutiveImg, link: "/shop?category=executive" },
  { name: "Office Chairs", desc: "Ergonomic chairs with Master MoltyFoam cushioning, lumbar support, and alloy steel frames.", image: chairExecutiveImg, link: "/shop?category=chairs" },
  { name: "Workstations", desc: "Modular 2, 4, 6, and 8-person workstation clusters with privacy panels and wire management.", image: workstationImg, link: "/shop?category=workstations" },
  { name: "Conference Tables", desc: "Premium conference tables from 6-seat to 20-seat configurations with power/data integration.", image: meetingRoomImg, link: "/shop?category=conference" },
  { name: "Reception & Front Desk", desc: "Custom reception counters designed to reflect your brand identity.", image: receptionDeskImg, link: "/shop?category=reception" },
  { name: "Storage & Filing", desc: "Filing cabinets, bookshelves, lockers, and rack systems for organized workspaces.", image: bookshelfImg, link: "/shop?category=storage" },
  { name: "Office Sofas & Lounge", desc: "Italian-inspired sofa sets, waiting area seating, and café furniture.", image: loungeImg, link: "/shop?category=lounge" },
  { name: "Home Office", desc: "Work-from-home desks, compact bookshelves, and ergonomic chairs for small spaces.", image: officeIsometricImg, link: "/shop?category=home-office" },
];

const uspCards = [
  { icon: Paintbrush, heading: "Tailored to Your Space", body: "Our design consultants visit your site, understand your workflow, team size, and brand aesthetic — then create a furniture plan that fits perfectly." },
  { icon: Eye, heading: "See Your Office Before It's Built", body: "We create detailed 3D renders of your workspace — complete with furniture placement, color options, and spatial planning — so you can approve before manufacturing." },
  { icon: Factory, heading: "Premium Quality, No Middleman Markup", body: "We design and manufacture everything in-house at our Lahore facility. Every quote is itemized — no hidden costs." },
  { icon: Truck, heading: "Delivered, Assembled & Ready to Use", body: "Our trained installation team ensures every desk, chair, and workstation is set up perfectly at your location — anywhere in Pakistan." },
  { icon: ShieldCheck, heading: "Built to Last, Backed by Warranty", body: "Up to 3-year structural warranty on furniture. 1-year warranty on chair wheels, gas lifts, and base mechanisms. Support is a WhatsApp message away." },
  { icon: MapPin, heading: "Serving All of Pakistan", body: "Based in Lahore, delivering everywhere. Priority shipping for Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, Multan, and Peshawar." },
];

const processSteps = [
  { step: "01", icon: "📞", title: "Consultation", desc: "Tell us about your space, team size, budget, and style preferences — via call, WhatsApp, or our free E-Quote form." },
  { step: "02", icon: "🎨", title: "3D Design & Approval", desc: "Our designers create a custom 3D layout of your workspace. You review, tweak, and approve before we start production." },
  { step: "03", icon: "🏭", title: "Manufacturing", desc: "Your furniture is crafted in our Lahore factory using imported MDF, melamine, premium foam, alloy steel, and PVC edging." },
  { step: "04", icon: "🚚", title: "Delivery & Installation", desc: "We deliver to your doorstep and professionally install everything — desks, chairs, workstations, storage — ready for your team." },
];

const testimonials = [
  {
    name: "Ahmed R.",
    role: "Operations Director, Lahore",
    text: "Woodex furnished our entire 8,000 sq. ft. office in Lahore — from the reception desk to 60 workstations. The 3D design they showed us was exactly what was delivered. Exceptional quality and service.",
  },
  {
    name: "Sara K.",
    role: "HR Manager, Islamabad",
    text: "We compared five vendors and Woodex offered the best balance of design, build quality, and price. Their installation team was professional and finished in one day. Highly recommended.",
  },
  {
    name: "Usman T.",
    role: "Facility Manager, Karachi",
    text: "The ergonomic chairs we ordered for our call center have made a huge difference — fewer complaints about back pain and the team loves the look. Great after-sales support too.",
  },
];

const seriesCards = [
  { name: "Cubicle Series", desc: "Modular, space-efficient workstations for open-plan offices and call centers.", image: workstationImg },
  { name: "Lounge Series", desc: "Italian-inspired sofas, accent chairs, and coffee tables for executive lounges and waiting areas.", image: loungeImg },
  { name: "Executive Series", desc: "Premium desks, high-back chairs, and storage units for C-suite offices and boardrooms.", image: deskExecutiveImg },
  { name: "Home Office Series", desc: "Compact desks, bookshelves, and ergonomic chairs — designed for remote work and small spaces.", image: officeIsometricImg },
];

const bestsellers = [
  { name: "Matrix Flow Manager Chair", category: "Manager Chairs", series: "MatrixFlow", price: "PKR 42,000", image: matrixFlowManager, colors: ["#333", "#666", "#8B7355"] },
  { name: "Crown Executive Chair", category: "Executive Chairs", series: "Crown", price: "PKR 65,000", image: crownExecutive, colors: ["#333", "#1a1a1a"] },
  { name: "Elite Executive Chair", category: "Executive Chairs", series: "Elite", price: "PKR 58,000", image: eliteExecutive, colors: ["#333", "#8B7355", "#A0522D"] },
  { name: "Infinity Executive Desk", category: "Executive Desks", series: "Infinity", price: "PKR 85,000", image: infinityExecutive, colors: ["#F5F5DC", "#333", "#8B7355", "#A0522D"] },
  { name: "Ambassador Executive Chair", category: "Executive Chairs", series: "Ambassador", price: "PKR 60,000", image: ambassadorExecutive, colors: ["#333", "#1a1a1a"] },
  { name: "Nexa Executive Chair", category: "Executive Chairs", series: "Nexa", price: "PKR 55,000", image: nexaExecutive, colors: ["#333", "#8B7355"] },
  { name: "Wave Comfort Staff Chair", category: "Staff Chairs", series: "Wave", price: "PKR 25,000", image: waveComfortStaff, colors: ["#333", "#666"] },
  { name: "Diamond Executive Chair", category: "Executive Chairs", series: "Diamond", price: "PKR 48,000", image: diamondExecutive, colors: ["#333", "#A0522D"] },
];

const Index = () => {
  const structuredData = {
    ...generateOrganizationSchema(),
    ...generateLocalBusinessSchema(),
  };
  const faqSchema = generateFAQSchema(faqs);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Best Office Furniture in Pakistan | Custom Design & Manufacturing — Woodex"
        description="Woodex Furniture — Pakistan's leading custom office furniture manufacturer. Executive desks, ergonomic chairs, workstations & complete office fit-outs. Free 3D design, factory-direct prices, nationwide delivery. Call +92 322 4000 768"
        keywords="office furniture Pakistan, ergonomic chairs Lahore, executive desks, office workstations, custom office furniture, factory direct furniture Pakistan"
        canonical="https://woodexfurniture.pk"
        structuredData={[structuredData, faqSchema]}
      />
      <Navbar />

      {/* Hero Slider */}
      <HeroSlider />

      {/* WHO WE ARE — Intro Block */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Who We Are</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Pakistan's Most Trusted Office Furniture Brand</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Woodex Furniture is a premium furniture design, manufacturing, and supply company headquartered in Lahore, Pakistan. Since our founding, we've furnished over 1,200+ offices across the country — from ambitious startups to large-scale corporate headquarters.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                We're not a reseller. Every piece of furniture is designed in-house, manufactured in our own facility using imported materials, and delivered with professional installation — giving you unmatched quality at factory-direct prices.
              </p>
              <Link to="/about" className="text-sm font-medium text-accent hover:underline inline-flex items-center gap-1">
                Learn More About Woodex <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="overflow-hidden">
              <img src={factoryImg} alt="Woodex Furniture Manufacturing Facility" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* 8-Category Product Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Our Collection</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Explore Our Furniture Range</h2>
          <p className="text-sm text-muted-foreground mb-8 max-w-2xl">
            From ergonomic office chairs to complete workstation systems — browse furniture designed for performance, comfort, and style.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat, i) => (
              <Link key={i} to={cat.link} className="group">
                <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-4">
                    <h3 className="text-sm font-bold text-white mb-1">{cat.name}</h3>
                    <p className="text-[10px] text-white/80 line-clamp-2 leading-relaxed">{cat.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-14 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-baseline gap-3 mb-2">
            <span className="text-xs text-muted-foreground uppercase tracking-widest">Best Sellers</span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold mb-2">Our Most Popular Products</h2>
          <p className="text-xs text-muted-foreground mb-8">Hand-picked favorites trusted by offices across Lahore, Karachi, and Islamabad.</p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5">
            {bestsellers.slice(0, 8).map((product, index) => (
              <Link key={index} to="/shop" className="group">
                <div className="bg-background border border-border hover:shadow-md transition-all duration-300">
                  <div className="aspect-[3/4] bg-muted overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-3">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-0.5">{product.category}</p>
                    <h3 className="text-xs font-bold mb-1 line-clamp-2 min-h-[32px]">{product.name}</h3>
                    <p className="text-[10px] text-muted-foreground mb-2">{product.series}</p>
                    <div className="flex gap-1 mb-2">
                      {product.colors.map((color, ci) => (
                        <span key={ci} className="w-3 h-3 rounded-full border border-border" style={{ backgroundColor: color }} />
                      ))}
                    </div>
                    <p className="text-sm font-bold">{product.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/shop">
              <Button variant="outline" className="border-foreground text-sm font-medium rounded-none px-8">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Woodex — USP Section */}
      <section className="py-14 bg-muted/30">
        <div className="container mx-auto px-4">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">The Woodex Advantage</p>
          <h2 className="text-xl md:text-2xl font-bold mb-8">Why 1,200+ Businesses Choose Woodex</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {uspCards.map((card, i) => (
              <div key={i} className="bg-background border border-border p-6 hover:shadow-md transition-shadow">
                <card.icon className="h-8 w-8 text-accent mb-4" strokeWidth={1.5} />
                <h3 className="text-sm font-bold mb-2">{card.heading}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-14 border-t border-border">
        <div className="container mx-auto px-4">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2 text-center">How It Works</p>
          <h2 className="text-xl md:text-2xl font-bold mb-8 text-center">From Idea to Installation — in 4 Simple Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl mb-3">{step.icon}</div>
                <div className="text-xs text-muted-foreground font-bold mb-1">STEP {step.step}</div>
                <h3 className="text-sm font-bold mb-2">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 flex flex-wrap gap-3 justify-center">
            <Link to="/e-quotation">
              <Button className="rounded-none px-6 text-sm">Start Your Project</Button>
            </Link>
            <Link to="/e-quotation">
              <Button variant="outline" className="rounded-none px-6 text-sm border-foreground">Get Free E-Quote</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-14 bg-muted/30">
        <div className="container mx-auto px-4">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Our Work</p>
          <h2 className="text-xl md:text-2xl font-bold mb-2">Workspaces We've Transformed</h2>
          <p className="text-xs text-muted-foreground mb-8 max-w-2xl">From corporate offices and co-working spaces to medical clinics and educational institutions — explore real projects designed, manufactured, and installed by Woodex.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { img: heroOfficeImg, label: "Corporate Office" },
              { img: meetingRoomImg, label: "Meeting Room" },
              { img: workstationImg, label: "Open Plan Workspace" },
              { img: receptionDeskImg, label: "Reception Area" },
              { img: consultationImg, label: "Consultation Room" },
              { img: customDesignImg, label: "Custom Design Studio" },
            ].map((project, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden group">
                <img src={project.img} alt={project.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <span className="text-white text-xs font-bold">{project.label}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/projects">
              <Button variant="outline" className="border-foreground text-sm font-medium rounded-none px-8">
                View Full Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-12 border-t border-b border-border bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "1,200+", label: "Offices Furnished" },
              { number: "7+", label: "Years of Manufacturing Excellence" },
              { number: "50+", label: "Cities Delivered To" },
              { number: "100%", label: "Custom-Made to Order" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-black text-foreground mb-1">{stat.number}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">What Our Clients Say</p>
          <h2 className="text-xl md:text-2xl font-bold mb-8">Real Experiences. Real Feedback.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="border border-border p-6 bg-background">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, si) => (
                    <Star key={si} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4 italic">"{t.text}"</p>
                <p className="text-sm font-bold">{t.name}</p>
                <p className="text-[10px] text-muted-foreground">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Block — Ergonomic Chairs */}
      <section className="py-16 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-lg font-bold mb-2">Ergonomic Office Chairs in Pakistan — Comfort That Works as Hard as You Do</h2>
            <div className="space-y-3 text-xs text-muted-foreground leading-relaxed">
              <p>
                At Woodex, we believe a great office chair is the foundation of a productive workspace. That's why every ergonomic chair we manufacture is built to support your posture, reduce fatigue, and keep you comfortable through 8–10 hour workdays.
              </p>
              <p>
                <strong>What Makes Woodex Chairs Different:</strong> Master MoltyFoam Cushioning — high-density foam that retains its shape year after year. Alloy Steel Frames — engineered for durability and tested for 250+ lbs weight capacity. Full Adjustability — seat height, armrest position, tilt tension, recline locking, and lumbar depth. Breathable Mesh Backs — keeps you cool with targeted lumbar support. 1-Year Component Warranty covering wheels, gas lift, and base mechanism.
              </p>
              <p>
                Our Chair Range: Executive Chairs · Manager Chairs · Staff/Task Chairs · Visitor & Multi-Use Chairs · High-Back Mesh Chairs · Gaming & Home Office Chairs. A poor chair doesn't just cause discomfort — it causes back pain, low energy, and reduced output. Invest in seating that keeps your team healthy and focused.
              </p>
            </div>
            <div className="mt-4 flex gap-3">
              <Link to="/shop?category=chairs" className="text-xs font-semibold text-accent hover:underline">Shop All Ergonomic Chairs →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Furniture Series Showcase */}
      <section className="py-14 bg-muted/30">
        <div className="container mx-auto px-4">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Signature Series</p>
          <h2 className="text-xl md:text-2xl font-bold mb-2">Explore Our Furniture Series</h2>
          <p className="text-xs text-muted-foreground mb-8">Curated collections designed around specific aesthetics and functional needs.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {seriesCards.map((s, i) => (
              <Link key={i} to="/series" className="group">
                <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                  <img src={s.image} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-4">
                    <h3 className="text-sm font-bold text-white mb-1">{s.name}</h3>
                    <p className="text-[10px] text-white/80 line-clamp-2">{s.desc}</p>
                    <span className="text-[10px] text-white font-semibold mt-1">Explore →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Workspace?</h2>
          <p className="text-sm opacity-80 mb-8 max-w-xl mx-auto">
            Get a free consultation, 3D workspace design, and itemized quote — with zero obligation. Let's build something exceptional together.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="tel:+923224000768">
              <Button variant="outline" className="rounded-none px-6 text-sm border-background text-background hover:bg-background hover:text-foreground">
                <Phone className="h-4 w-4 mr-2" /> Call Now
              </Button>
            </a>
            <Link to="/e-quotation">
              <Button className="rounded-none px-6 text-sm bg-accent text-accent-foreground hover:bg-accent/90">
                <FileText className="h-4 w-4 mr-2" /> Request Free E-Quote
              </Button>
            </Link>
            <a href="https://wa.me/923224000768" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="rounded-none px-6 text-sm border-background text-background hover:bg-background hover:text-foreground">
                <MessageCircle className="h-4 w-4 mr-2" /> WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 border-t border-border">
        <div className="container mx-auto px-4">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Frequently Asked Questions</p>
          <h2 className="text-lg font-bold mb-6">Got Questions? We've Got Answers.</h2>
          <div className="max-w-3xl">
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border border-border px-4 bg-background">
                  <AccordionTrigger className="text-sm font-medium hover:no-underline py-3">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs text-muted-foreground pb-3">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
