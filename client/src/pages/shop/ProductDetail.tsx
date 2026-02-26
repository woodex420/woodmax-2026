import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEO, generateBreadcrumbSchema, generateProductSchema, generateFAQSchema } from "@/components/SEO";
import { allProducts, formatPrice, Product } from "@/data/products"; // fallback
import { api } from "@/services/api";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Shield, Truck, Phone, ChevronRight, ArrowLeft, Check,
  Star, ArrowRight, Package, RotateCcw, MessageSquare
} from "lucide-react";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (productId) {
      api.products.getById?.(productId)
        .then((data) => {
          if (data) setProduct(data as Product);
        })
        .catch(console.error)
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [productId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">Loading...</div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
          <Link to="/shop"><Button>Back to Shop</Button></Link>
        </div>
        <Footer />
      </div>
    );
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://woodex.pk" },
    { name: "Shop", url: "https://woodex.pk/shop" },
    { name: product.category, url: `https://woodex.pk/shop?category=${product.category.toLowerCase().replace(" ", "-")}` },
    { name: product.name, url: `https://woodex.pk/product/${product.id}` },
  ]);

  const productSchema = generateProductSchema({
    name: product.name,
    description: product.description || `Premium ${product.category} from WoodEx`,
    price: product.price,
    image: product.image,
    category: product.category,
  });

  const productFaqs = [
    { question: `What is the warranty on the ${product.name}?`, answer: `The ${product.name} comes with a 5-7 year structural warranty covering the frame, base, and mechanism. Upholstery and fabric are covered for 3 years. Extended warranty options are available.` },
    { question: `Is the ${product.name} available for customization?`, answer: "Yes! You can customize the upholstery color, fabric type, arm style, and base finish. Visit our Custom Design page or contact our team for bespoke options." },
    { question: "What is the delivery timeline?", answer: "Standard delivery within Lahore takes 3-5 business days. Nationwide delivery typically takes 5-10 business days. Express delivery options are available for urgent orders." },
    { question: "Can I see this product in a showroom?", answer: "Yes, you can visit our showrooms in Lahore (Gulberg III) and Islamabad to see and test this product. Book an appointment for a personalized walkthrough." },
    { question: "Do you offer bulk pricing for offices?", answer: "Absolutely! We offer tiered discounts for bulk orders: 10% off for 10+ units, 15% off for 25+ units, and custom project pricing for 50+ units. Contact our B2B team for details." },
  ];

  const faqSchema = generateFAQSchema(productFaqs);

  const relatedProducts = allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${product.name} - ${product.category} | WoodEx Pakistan`}
        description={product.description || `Buy ${product.name} - Premium ${product.category} at factory-direct price ${formatPrice(product.price)}. 5-7 year warranty, free delivery across Pakistan.`}
        keywords={`${product.name}, ${product.category}, office chair Pakistan, buy office furniture online, ergonomic chair Lahore`}
        canonical={`https://woodex.pk/product/${product.id}`}
        ogType="product"
        structuredData={[breadcrumbSchema, productSchema, faqSchema]}
      />
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/shop" className="hover:text-foreground transition-colors">Shop</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to={`/shop?category=${product.category.toLowerCase().replace(" ", "-")}`} className="hover:text-foreground transition-colors">
              {product.category}
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground font-medium truncate max-w-[200px]">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Link to="/shop" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="h-4 w-4" /> Back to Shop
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative">
              {product.badge && (
                <Badge className="absolute top-4 left-4 z-10 bg-accent text-accent-foreground">
                  {product.badge}
                </Badge>
              )}
              <div className="aspect-square bg-muted rounded-2xl overflow-hidden">
                <img
                  src={product.image}
                  alt={`${product.name} - ${product.category} by WoodEx Pakistan`}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Mini trust badges below image */}
              <div className="flex items-center justify-center gap-6 mt-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><RotateCcw className="h-3 w-3" /> Easy Returns</span>
                <span className="flex items-center gap-1"><Package className="h-3 w-3" /> Secure Packaging</span>
                <span className="flex items-center gap-1"><Shield className="h-3 w-3" /> Quality Assured</span>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <p className="text-sm text-accent font-medium uppercase tracking-wide">{product.category}</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Star className="h-3 w-3 fill-accent text-accent" />
                  <Star className="h-3 w-3 fill-accent text-accent" />
                  <Star className="h-3 w-3 fill-accent text-accent" />
                  <Star className="h-3 w-3 fill-accent text-accent" />
                  <Star className="h-3 w-3 fill-accent text-accent" />
                  <span className="ml-1">(4.8)</span>
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>

              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-3xl font-bold text-accent">{formatPrice(product.price)}</span>
                <span className="text-sm text-muted-foreground line-through">
                  {formatPrice(Math.round(product.price * 1.15))}
                </span>
                <Badge variant="secondary" className="text-xs">Save 15%</Badge>
              </div>
              <p className="text-xs text-muted-foreground mb-6">Inclusive of all taxes • Factory-direct pricing</p>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                {product.description || `Premium ${product.category.toLowerCase()} designed for maximum comfort and durability. Built with high-quality materials and backed by our 5-7 year warranty. Ideal for modern offices in Pakistan.`}
              </p>

              {/* Features */}
              {product.features && (
                <div className="mb-8">
                  <h3 className="font-bold mb-4">Specifications</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {Object.entries(product.features).map(([key, value]) => (
                      <div key={key} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">{key}:</span>{" "}
                          <span className="text-muted-foreground">{value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/e-quotation" className="flex-1">
                  <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
                    Get Quote <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/contact" className="flex-1">
                  <Button size="lg" variant="outline" className="w-full gap-2">
                    <MessageSquare className="h-4 w-4" /> Contact Sales
                  </Button>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-muted/30 rounded-xl border border-border">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <span className="text-sm font-medium block">5-7 Year Warranty</span>
                    <span className="text-xs text-muted-foreground">Structural guarantee</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Truck className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <span className="text-sm font-medium block">Free Delivery</span>
                    <span className="text-xs text-muted-foreground">Nationwide shipping</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <span className="text-sm font-medium block">Expert Support</span>
                    <span className="text-xs text-muted-foreground">Mon-Sat 9AM-7PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product FAQ Accordion */}
      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Frequently Asked <span className="text-accent">Questions</span>
              </h2>
              <p className="text-muted-foreground text-sm">Common questions about the {product.name}</p>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {productFaqs.map((faq, i) => (
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
            <h2 className="text-xl font-bold mb-4">
              Buy {product.name} Online in Pakistan – WoodEx
            </h2>
            <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
              The <strong>{product.name}</strong> is a premium {product.category.toLowerCase()} from WoodEx, Pakistan's leading office furniture manufacturer. Designed for modern offices, this chair combines ergonomic support with professional aesthetics, making it perfect for long working hours.
            </p>
            <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
              Priced at <strong>{formatPrice(product.price)}</strong> with factory-direct savings, this {product.category.toLowerCase()} comes with a 5-7 year structural warranty and free nationwide delivery across Pakistan including Lahore, Islamabad, Karachi, Faisalabad, and Rawalpindi.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Whether you're furnishing a single office or an entire corporate headquarters, WoodEx offers bulk pricing, customization options, and expert consultation. Visit our showrooms or request an e-quotation to get started. All WoodEx products are manufactured at our state-of-the-art facility, ensuring consistent quality and fast delivery times.
            </p>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Related <span className="text-accent">Products</span></h2>
              <Link to="/shop">
                <Button variant="link" className="text-accent gap-1">
                  View All <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link key={relatedProduct.id} to={`/product/${relatedProduct.id}`}>
                  <Card className="group overflow-hidden hover:shadow-lg transition-all border-border/50">
                    <div className="aspect-square overflow-hidden relative">
                      {relatedProduct.badge && (
                        <Badge className="absolute top-3 left-3 z-10 bg-accent text-accent-foreground text-xs">
                          {relatedProduct.badge}
                        </Badge>
                      )}
                      <img
                        src={relatedProduct.image}
                        alt={`${relatedProduct.name} - ${relatedProduct.category}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <CardContent className="p-4">
                      <p className="text-xs text-accent font-medium mb-1">{relatedProduct.category}</p>
                      <h3 className="font-bold mb-2 line-clamp-2 text-sm group-hover:text-accent transition-colors">{relatedProduct.name}</h3>
                      <span className="text-lg font-bold">{formatPrice(relatedProduct.price)}</span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default ProductDetail;
