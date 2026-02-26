import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "product";
  structuredData?: object;
}

export const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = "https://lovable.dev/opengraph-image-p98pqg.png",
  ogType = "website",
  structuredData,
}: SEOProps) => {
  const fullTitle = title.includes("WOODEX") ? title : `${title} | WOODEX`;
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

// Predefined structured data generators
export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "WOODEX",
  url: "https://woodex.pk",
  logo: "https://woodex.pk/logo.png",
  description: "Pakistan's premier B2B office furniture manufacturer",
  address: {
    "@type": "PostalAddress",
    streetAddress: "45-A Industrial Area, Gulberg III",
    addressLocality: "Lahore",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+92-42-3578-9012",
    contactType: "sales",
    availableLanguage: ["English", "Urdu"],
  },
  sameAs: [
    "https://facebook.com/woodexpk",
    "https://instagram.com/woodexpk",
    "https://linkedin.com/company/woodexpk",
  ],
});

export const generateProductSchema = (product: {
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: product.name,
  description: product.description,
  image: product.image,
  category: product.category,
  brand: {
    "@type": "Brand",
    name: "WOODEX",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "PKR",
    price: product.price,
    availability: "https://schema.org/InStock",
    seller: {
      "@type": "Organization",
      name: "WOODEX",
    },
  },
});

export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FurnitureStore",
  name: "WOODEX",
  image: "https://woodex.pk/logo.png",
  "@id": "https://woodex.pk",
  url: "https://woodex.pk",
  telephone: "+92-42-3578-9012",
  priceRange: "PKR 8,500 - PKR 125,000",
  address: {
    "@type": "PostalAddress",
    streetAddress: "45-A Industrial Area, Gulberg III",
    addressLocality: "Lahore",
    addressRegion: "Punjab",
    postalCode: "54000",
    addressCountry: "PK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.5204,
    longitude: 74.3587,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "1200",
  },
});

export default SEO;
