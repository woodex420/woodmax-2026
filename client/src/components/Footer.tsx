import { Link } from "react-router-dom";
import { Instagram, Twitter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="mt-20">
      {/* Newsletter Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <h3 className="text-lg font-semibold">Sign up to newsletter</h3>
            <div className="flex gap-2 w-full max-w-md">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-transparent border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50 rounded-none"
              />
              <Button variant="outline" size="icon" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-none shrink-0">
                →
              </Button>
            </div>
            <div className="flex gap-3">
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-muted border-t border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* About Us */}
            <div className="lg:col-span-2">
              <h4 className="font-bold text-sm mb-4">About us</h4>
              <div className="mb-3">
                <span className="text-lg font-black tracking-tight">WOOD</span>
                <span className="text-lg font-light tracking-tight">EX</span>
                <span className="text-[6px] align-super ml-0.5 text-muted-foreground">FURNITURE</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                WOODEX is a leading Pakistan-based manufacturer, designer and supplier of modern office furniture. Committed to provide workplace furniture that delivers great value by combining modern design, dependable quality and exceptional service.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-sm mb-4">Quick Links</h4>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li><Link to="/services/custom-design" className="hover:text-foreground transition-colors flex items-center gap-1"><span className="text-accent">›</span> WDS - Design Studio</Link></li>
                <li><Link to="/services/delivery-installation" className="hover:text-foreground transition-colors flex items-center gap-1"><span className="text-accent">›</span> Delivery & Installation</Link></li>
                <li><Link to="/materials" className="hover:text-foreground transition-colors flex items-center gap-1"><span className="text-accent">›</span> Material and Colors</Link></li>
                <li><Link to="/warranty" className="hover:text-foreground transition-colors flex items-center gap-1"><span className="text-accent">›</span> Warranty</Link></li>
                <li><Link to="/projects" className="hover:text-foreground transition-colors flex items-center gap-1"><span className="text-accent">›</span> Project Gallery</Link></li>
              </ul>
            </div>

            {/* Shop */}
            <div>
              <h4 className="font-bold text-sm mb-4">Shop</h4>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li><Link to="/shop?category=executive" className="hover:text-foreground transition-colors flex items-center gap-1"><span className="text-accent">›</span> Chairs</Link></li>
                <li><Link to="/shop?category=desks" className="hover:text-foreground transition-colors flex items-center gap-1"><span className="text-accent">›</span> Executive Desks</Link></li>
                <li><Link to="/shop?category=workstations" className="hover:text-foreground transition-colors flex items-center gap-1"><span className="text-accent">›</span> Workstations</Link></li>
                <li><Link to="/shop?category=storage" className="hover:text-foreground transition-colors flex items-center gap-1"><span className="text-accent">›</span> Storage Cabinets</Link></li>
                <li><Link to="/shop?category=sofas" className="hover:text-foreground transition-colors flex items-center gap-1"><span className="text-accent">›</span> Lounge Seating</Link></li>
              </ul>
            </div>

            {/* Learn More */}
            <div>
              <h4 className="font-bold text-sm mb-4">Learn More</h4>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li><Link to="/materials" className="hover:text-foreground transition-colors flex items-center gap-1"><span className="text-accent">›</span> Material Grades</Link></li>
                <li><Link to="/blog" className="hover:text-foreground transition-colors flex items-center gap-1"><span className="text-accent">›</span> Inspirations</Link></li>
                <li><Link to="/services/space-planning" className="hover:text-foreground transition-colors flex items-center gap-1"><span className="text-accent">›</span> Planning Ideas</Link></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="font-bold text-sm mb-4">Contact us</h4>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li><Link to="/contact" className="hover:text-foreground transition-colors flex items-center gap-1"><span className="text-accent">›</span> Contact Us</Link></li>
                <li><Link to="/b2b" className="hover:text-foreground transition-colors flex items-center gap-1"><span className="text-accent">›</span> Become a Distributor</Link></li>
                <li><Link to="/about" className="hover:text-foreground transition-colors flex items-center gap-1"><span className="text-accent">›</span> About us</Link></li>
                <li><Link to="/showrooms" className="hover:text-foreground transition-colors flex items-center gap-1"><span className="text-accent">›</span> Our Showrooms</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border">
          <div className="container mx-auto px-4 py-4">
            <p className="text-xs text-muted-foreground text-center">
              © 2025 WoodEx Furniture. All rights reserved. | Payment: JazzCash • easypaisa
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
