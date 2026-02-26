import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Factory, Palette, Truck, ShieldCheck } from "lucide-react";

import heroSofaImg from "@/assets/hero-sofa.jpg";
import heroOfficeImg from "@/assets/hero-office.jpg";
import loungeImg from "@/assets/lounge.jpg";

interface Slide {
  id: number;
  subtitle: string;
  title: string;
  supportingText: string;
  buttons: { text: string; link: string; variant: "primary" | "outline" }[];
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    subtitle: "Pakistan's Leading Office Furniture Manufacturer",
    title: "Custom Office Furniture\n— Designed for Your Space,\nBuilt in Our Factory",
    supportingText: "From concept to installation — we design, manufacture, and deliver premium office furniture tailored to your workspace, brand identity, and budget. No middlemen. No compromise.",
    buttons: [
      { text: "Explore Our Collection", link: "/shop", variant: "primary" },
      { text: "Get Free 3D Design", link: "/e-quotation", variant: "outline" },
    ],
    image: heroOfficeImg,
  },
  {
    id: 2,
    subtitle: "Complete Workspace Solutions",
    title: "We Don't Just\nSell Furniture —\nWe Build Workspaces",
    supportingText: "Free site visit. Free 3D layout. Free budget estimation. From a single executive desk to a 500-seat corporate office — Woodex handles everything.",
    buttons: [
      { text: "Request Free Consultation", link: "/contact", variant: "primary" },
      { text: "View Our Projects", link: "/projects", variant: "outline" },
    ],
    image: heroSofaImg,
  },
  {
    id: 3,
    subtitle: "Introducing the Woodex Lounge Series",
    title: "Luxury Meets\nFunctionality —\nItalian-Inspired Furniture",
    supportingText: "Elevate your space with our premium lounge collection — handcrafted sofas, accent chairs, and coffee tables with imported materials and flawless finishing.",
    buttons: [
      { text: "Shop Lounge Series", link: "/shop", variant: "primary" },
      { text: "Get E-Quote", link: "/e-quotation", variant: "outline" },
    ],
    image: loungeImg,
  },
];

const trustBadges = [
  { icon: Factory, title: "Direct Factory Prices", desc: "No middlemen — buy straight from our Lahore manufacturing facility" },
  { icon: Palette, title: "Free 3D Design", desc: "We create a photorealistic layout of your workspace before production" },
  { icon: Truck, title: "Nationwide Delivery", desc: "Free delivery & professional installation across Pakistan" },
  { icon: ShieldCheck, title: "Up to 3-Year Warranty", desc: "Structural warranty on all furniture — chairs, desks, and workstations" },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const slide = slides[currentSlide];

  return (
    <section className="w-full bg-background">
      {/* Main Hero — split layout */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-[420px] md:min-h-[480px] lg:min-h-[520px] gap-6">
          {/* Left: Text */}
          <div className="py-10 md:py-16">
            <p className="text-sm text-muted-foreground tracking-wide mb-3">{slide.subtitle}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-[1.1] whitespace-pre-line mb-4">
              {slide.title}
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-md">
              {slide.supportingText}
            </p>
            <div className="flex flex-wrap gap-3">
              {slide.buttons.map((btn, i) => (
                <Link
                  key={i}
                  to={btn.link}
                  className={`inline-block text-sm font-semibold tracking-wider px-8 py-3 transition-colors ${
                    btn.variant === "primary"
                      ? "bg-foreground text-background hover:bg-foreground/90"
                      : "border-2 border-foreground text-foreground hover:bg-foreground hover:text-background"
                  }`}
                >
                  {btn.text}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative flex items-center justify-center h-full">
            <img
              key={`img-${slide.id}`}
              src={slide.image}
              alt={slide.title.replace(/\n/g, " ")}
              className="w-full h-[320px] md:h-[420px] lg:h-[480px] object-contain transition-opacity duration-500"
            />
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 pb-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-foreground scale-110"
                : "bg-foreground/20 hover:bg-foreground/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Trust Badges Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map((badge, i) => (
              <div key={i} className="flex items-center gap-3">
                <badge.icon className="h-7 w-7 text-muted-foreground flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-sm font-bold text-foreground">{badge.title}</p>
                  <p className="text-xs text-muted-foreground">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
