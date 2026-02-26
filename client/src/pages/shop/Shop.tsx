import { useState, useMemo, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEO, generateBreadcrumbSchema, generateFAQSchema } from "@/components/SEO";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  allProducts,
  executiveChairs,
  managerChairs,
  staffChairs,
  visitorChairs,
  formatPrice,
  Product,
} from "@/data/products";
import { api } from "@/services/api";
import { Shield, Truck, Phone, Grid3X3, LayoutList, ChevronRight, SlidersHorizontal, Eye, ShoppingCart } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  
  const [activeCategory, setActiveCategory] = useState<string | null>(categoryParam);
  const [sortBy, setSortBy] = useState("default");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [productsData, setProductsData] = useState<Product[]>(allProducts);

  const shopFaqs = [
    { question: "Can I see products before buying?", answer: "Yes! Visit our Lahore showroom (Gulberg III) or Islamabad showroom to test any product in person. Walk-ins are welcome Mon-Sat 9AM-7PM, or book an appointment for a personalized consultation with our furniture experts." },
    { question: "Is online pricing the same as showroom pricing?", answer: "Yes, our online prices match showroom prices. In fact, online-exclusive deals and seasonal offers may give you additional savings. All prices are factory-direct with no middleman markups." },
    { question: "Can I modify or customize products?", answer: "Absolutely! Most of our products can be customized — upholstery color, fabric type, arm style, base finish, and even logo embroidery. Visit our Custom Design page or contact our team for bespoke options." },
    { question: "What about installation and assembly?", answer: "Professional installation is available nationwide. In Lahore, we offer free doorstep assembly. For other cities, assembly service is available at a nominal fee. Self-assembly instructions (Urdu/English) are also included." },
    { question: "Do you offer bulk discounts for offices?", answer: "Yes! 10-25 units get 10% off with free delivery in Lahore. 26-50 units get 15% off with free nationwide delivery and professional installation. 51-100 units get 20% off with a dedicated project manager. For 100+ units, we offer custom pricing." },
    { question: "What warranty do your chairs come with?", answer: "All chairs include: 5-year mechanism warranty (covers all moving parts and gas lift), 3-year structural warranty (frame, base, armrests), and 1-year upholstery warranty. Extended warranty options are available for executive chairs." },
    { question: "How long does delivery take?", answer: "Lahore (city limits): 2-3 business days, free for orders above Rs. 50,000. Major cities (Karachi, Islamabad, Faisalabad): 4-6 business days. Rest of Pakistan: 6-10 business days with tracking provided. Express delivery available." },
    { question: "What payment options are available?", answer: "We accept credit/debit cards, bank transfers, and easy installments. All transactions are SSL encrypted and PCI compliant. Corporate accounts with net-30 payment terms are available for verified businesses." },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://woodex.pk" },
    { name: "Shop", url: "https://woodex.pk/shop" },
  ]);

  const faqSchema = generateFAQSchema(shopFaqs);

  const filteredProducts = useMemo(() => {
    let products: Product[];
    if (!activeCategory) {
      products = [...productsData];
    } else {
      switch (activeCategory) {
        case "executive": products = [...executiveChairs]; break;
        case "manager": products = [...managerChairs]; break;
        case "staff": products = [...staffChairs]; break;
        case "visitor": products = [...visitorChairs]; break;
        default: products = [...allProducts];
      }
    }

    switch (sortBy) {
      case "price-low": products.sort((a, b) => a.price - b.price); break;
      case "price-high": products.sort((a, b) => b.price - a.price); break;
      case "name-az": products.sort((a, b) => a.name.localeCompare(b.name)); break;
      case "name-za": products.sort((a, b) => b.name.localeCompare(a.name)); break;
    }

    return products;
  }, [activeCategory, sortBy]);

  // fetch products from API on mount
  useEffect(() => {
    api.products.list()
      .then((data) => {
        if (Array.isArray(data)) setProductsData(data as Product[]);
      })
      .catch(console.error);
  }, []);

  const categoryFilters = [
    { id: null, name: "All Products", count: allProducts.length },
    { id: "executive", name: "Executive Chairs", count: executiveChairs.length },
    { id: "manager", name: "Manager Chairs", count: managerChairs.length },
    { id: "staff", name: "Staff Chairs", count: staffChairs.length },
    { id: "visitor", name: "Visitor Chairs", count: visitorChairs.length },
  ];

  const handleCategoryChange = (categoryId: string | null) => {
    setActiveCategory(categoryId);
    if (categoryId) {
      setSearchParams({ category: categoryId });
    } else {
      setSearchParams({});
    }
  };

  const activeCategoryName = categoryFilters.find(c => c.id === activeCategory)?.name || "All Products";

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${activeCategoryName} - Shop Office Furniture Online | WoodEx Pakistan`}
        description="Shop 56+ premium office chairs in Pakistan. Executive leather chairs, ergonomic mesh seating, staff chairs, visitor chairs. 5-year warranty, BIFMA certified, factory-direct prices. Free delivery nationwide."
        keywords="buy office furniture Pakistan, office chairs online, executive chairs Lahore, ergonomic mesh chairs, office furniture factory direct, buy office chair Karachi, office seating Islamabad"
        canonical="https://woodex.pk/shop"
        structuredData={[breadcrumbSchema, faqSchema]}
      />
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground font-medium">Shop</span>
            {activeCategory && (
              <>
                <ChevronRight className="h-3 w-3" />
                <span className="text-foreground font-medium">{activeCategoryName}</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <section className="py-3 bg-accent">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 text-xs text-accent-foreground">
            <div className="flex items-center gap-1.5">
              <Shield className="h-4 w-4" />
              <span className="font-medium">5-7 Year Warranty</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Truck className="h-4 w-4" />
              <span className="font-medium">Free Nationwide Delivery</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone className="h-4 w-4" />
              <span className="font-medium">Expert Consultation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content: Sidebar + Products */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar */}
          <aside className="lg:w-[240px] flex-shrink-0">
            <div className="sticky top-20">
              {/* Categories */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <SlidersHorizontal className="h-4 w-4" />
                  <h3 className="text-sm font-bold uppercase tracking-wider">Categories</h3>
                </div>
                <div className="space-y-1">
                  {categoryFilters.map((filter) => (
                    <button
                      key={filter.id || "all"}
                      onClick={() => handleCategoryChange(filter.id)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 text-sm rounded-none transition-colors ${
                        activeCategory === filter.id
                          ? "bg-foreground text-background font-semibold"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      <span>{filter.name}</span>
                      <span className={`text-xs ${activeCategory === filter.id ? 'text-background/70' : 'text-muted-foreground/50'}`}>
                        ({filter.count})
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range Info */}
              <div className="mb-8 p-4 bg-muted/50 border border-border">
                <h3 className="text-xs font-bold uppercase tracking-wider mb-3">Price Range</h3>
                <p className="text-sm text-muted-foreground">
                  Rs. 8,500 – Rs. 82,000
                </p>
                <p className="text-[10px] text-muted-foreground mt-1">Factory-direct pricing</p>
              </div>

              {/* Quick Actions */}
              <div className="space-y-2">
                <Link to="/e-quotation" className="block">
                  <Button variant="outline" size="sm" className="w-full justify-start border-foreground rounded-none text-xs font-semibold">
                    <ShoppingCart className="h-3.5 w-3.5 mr-2" />
                    Get E-Quotation
                  </Button>
                </Link>
                <Link to="/services/custom-design" className="block">
                  <Button variant="outline" size="sm" className="w-full justify-start border-border rounded-none text-xs">
                    Custom Design →
                  </Button>
                </Link>
              </div>
            </div>
          </aside>

          {/* Products Area */}
          <main className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
              <div>
                <h1 className="text-xl font-bold">{activeCategoryName}</h1>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Showing {filteredProducts.length} products
                </p>
              </div>
              <div className="flex items-center gap-3">
                {/* Sort */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[160px] h-9 text-xs rounded-none border-border">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Default</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="name-az">Name: A–Z</SelectItem>
                    <SelectItem value="name-za">Name: Z–A</SelectItem>
                  </SelectContent>
                </Select>

                {/* View Toggle */}
                <div className="hidden md:flex border border-border">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-foreground text-background' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 ${viewMode === 'list' ? 'bg-foreground text-background' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    <LayoutList className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            {viewMode === "grid" ? (
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredProducts.map((product) => (
                  <Link key={product.id} to={`/product/${product.id}`} className="group">
                    <Card className="overflow-hidden border border-border shadow-none hover:shadow-lg transition-all duration-300 rounded-none h-full">
                      <div className="aspect-square overflow-hidden relative bg-muted">
                        {product.badge && (
                          <Badge className="absolute top-2 left-2 z-10 bg-accent text-accent-foreground text-[10px] rounded-none px-2 py-0.5">
                            {product.badge}
                          </Badge>
                        )}
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        {/* Quick View Overlay */}
                        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-background text-foreground text-xs font-semibold px-4 py-2 flex items-center gap-1.5">
                              <Eye className="h-3.5 w-3.5" />
                              Quick View
                            </div>
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-3 bg-card border-t border-border">
                        <p className="text-[10px] text-accent font-medium uppercase tracking-wider mb-1">
                          {product.category}
                        </p>
                        <h3 className="text-xs font-bold mb-2 line-clamp-2 min-h-[32px] leading-tight">
                          {product.name}
                        </h3>
                        <span className="text-sm font-bold">
                          {formatPrice(product.price)}
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              /* List View */
              <div className="space-y-3">
                {filteredProducts.map((product) => (
                  <Link key={product.id} to={`/product/${product.id}`} className="group block">
                    <Card className="overflow-hidden border border-border shadow-none hover:shadow-md transition-all duration-300 rounded-none">
                      <div className="flex">
                        <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 overflow-hidden bg-muted relative">
                          {product.badge && (
                            <Badge className="absolute top-2 left-2 z-10 bg-accent text-accent-foreground text-[10px] rounded-none px-2 py-0.5">
                              {product.badge}
                            </Badge>
                          )}
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>
                        <CardContent className="p-4 flex flex-col justify-center flex-1">
                          <p className="text-[10px] text-accent font-medium uppercase tracking-wider mb-1">
                            {product.category}
                          </p>
                          <h3 className="text-sm font-bold mb-1">{product.name}</h3>
                          {product.description ? (
                            <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                              {product.description}
                            </p>
                          ) : product.features ? (
                            <p className="text-xs text-muted-foreground line-clamp-1 mb-2">
                              {Object.values(product.features).slice(0, 2).join(" • ")}
                            </p>
                          ) : null}
                          <div className="flex items-center justify-between mt-auto">
                            <span className="text-base font-bold">{formatPrice(product.price)}</span>
                            <Button size="sm" variant="outline" className="rounded-none text-xs border-foreground h-8">
                              View Details
                            </Button>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </main>
        </div>

        {/* CTA */}
        <section className="mt-16 mb-8 bg-foreground text-background p-10 md:p-14 text-center">
          <h2 className="text-2xl font-bold mb-3">Start Building Your Perfect Office</h2>
          <p className="text-sm mb-6 max-w-xl mx-auto opacity-80">
            Can't find what you're looking for? Our team can help you find the perfect furniture or create custom solutions tailored to your space and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <Link to="/e-quotation">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-none font-bold">
                Request Custom Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="rounded-none font-bold border-background text-background hover:bg-background hover:text-foreground">
                Contact Sales Team
              </Button>
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-xs opacity-60">
            <span>Popular: Ergonomic Chairs</span>
            <span>•</span>
            <span>Executive Desks</span>
            <span>•</span>
            <span>Conference Tables</span>
            <span>•</span>
            <span>Workstations</span>
          </div>
        </section>
      </div>

      {/* FAQ Accordion */}
      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Frequently Asked <span className="text-accent">Questions</span>
              </h2>
              <p className="text-muted-foreground text-sm">Everything you need to know before buying</p>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {shopFaqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg px-6 bg-background">
                  <AccordionTrigger className="text-left font-semibold hover:text-accent text-sm">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* SEO Content Block */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              Buy Office Furniture Online in Pakistan – WoodEx Shop
            </h2>
            <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
              Welcome to <strong>WoodEx</strong>, Pakistan's premier destination for premium office furniture. Browse our collection of <strong>56+ ergonomic office chairs</strong>, executive desks, workstations, and storage solutions — all at factory-direct prices with nationwide free delivery.
            </p>
            <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
              Our <strong>Executive Chairs</strong> feature Italian leather, adjustable lumbar support, and premium finishes starting from Rs. 35,000. <strong>Manager Chairs</strong> offer the perfect balance of comfort and value for mid-level professionals. <strong>Staff Chairs</strong> provide ergonomic support at budget-friendly prices, and our <strong>Visitor Chairs</strong> ensure a great first impression for clients and guests.
            </p>
            <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
              Every WoodEx product comes with a <strong>5-7 year structural warranty</strong>, free professional assembly, and expert consultation. Whether you're furnishing a single home office or a 500-seat corporate headquarters, we offer bulk pricing, customization options, and dedicated project management.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Shop online or visit our showrooms in <strong>Lahore</strong> and <strong>Islamabad</strong>. We deliver across Pakistan including Karachi, Faisalabad, Rawalpindi, Multan, and Peshawar. Request a free e-quotation or book a consultation with our office design experts today.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;
