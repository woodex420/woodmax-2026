import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import heroImage from "@/assets/services-hero.jpg";
import workstationImage from "@/assets/workstation.jpg";
import loungeImage from "@/assets/lounge.jpg";
import meetingRoom from "@/assets/meeting-room.jpg";
import consultationImage from "@/assets/consultation.jpg";
import officeIsometric from "@/assets/office-isometric.jpg";
import storageImage from "@/assets/storage.jpg";
import deskStanding from "@/assets/desk-standing.jpg";
import chairExecutive from "@/assets/chair-executive.jpg";
import {
  Search, ChevronRight, ArrowRight, Clock, User, Tag,
  TrendingUp, BookOpen, Calendar
} from "lucide-react";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Ergonomics", "Office Design", "Productivity", "Trends", "Guides"];

  const featuredPost = {
    title: "The Complete Guide to Ergonomic Office Setup in 2025",
    excerpt: "Discover how proper ergonomic furniture can boost productivity by 25% and reduce workplace injuries. From chair selection to desk height optimization, everything you need to know.",
    category: "Ergonomics",
    author: "Woodex Team",
    date: "Feb 15, 2025",
    readTime: "8 min read",
    image: workstationImage,
  };

  const posts = [
    {
      title: "Top 10 Executive Chair Features to Look For",
      excerpt: "What separates a good executive chair from a great one? We break down the must-have features for comfort and support.",
      category: "Guides",
      author: "Woodex Team",
      date: "Feb 10, 2025",
      readTime: "5 min read",
      image: chairExecutive,
    },
    {
      title: "How Open Plan Offices Are Evolving in Pakistan",
      excerpt: "The hybrid model is changing how Pakistani companies think about office layouts. Here's what's trending.",
      category: "Trends",
      author: "Woodex Team",
      date: "Feb 5, 2025",
      readTime: "6 min read",
      image: meetingRoom,
    },
    {
      title: "5 Ways to Boost Productivity with Office Design",
      excerpt: "Small changes in your workspace design can lead to big improvements in employee focus and output.",
      category: "Productivity",
      author: "Woodex Team",
      date: "Jan 28, 2025",
      readTime: "4 min read",
      image: loungeImage,
    },
    {
      title: "Standing Desks: Are They Worth the Investment?",
      excerpt: "We analyze the health benefits, productivity impact, and ROI of standing desks for modern offices.",
      category: "Ergonomics",
      author: "Woodex Team",
      date: "Jan 20, 2025",
      readTime: "7 min read",
      image: deskStanding,
    },
    {
      title: "Office Storage Solutions for Small Spaces",
      excerpt: "Maximize your office storage without sacrificing aesthetics. Smart solutions for compact workspaces.",
      category: "Office Design",
      author: "Woodex Team",
      date: "Jan 14, 2025",
      readTime: "5 min read",
      image: storageImage,
    },
    {
      title: "Creating the Perfect Meeting Room",
      excerpt: "From conference tables to AV-ready furniture, here's how to design meeting rooms that inspire collaboration.",
      category: "Office Design",
      author: "Woodex Team",
      date: "Jan 8, 2025",
      readTime: "6 min read",
      image: consultationImage,
    },
    {
      title: "Color Psychology in Office Furniture",
      excerpt: "How furniture colors affect mood, creativity, and productivity. A designer's guide to choosing the right palette.",
      category: "Trends",
      author: "Woodex Team",
      date: "Dec 28, 2024",
      readTime: "4 min read",
      image: officeIsometric,
    },
  ];

  const popularTags = ["Ergonomic Chairs", "Standing Desks", "Office Layout", "Productivity", "Meeting Room", "Storage", "Executive Furniture", "Workspace"];

  const filtered = posts.filter((p) => {
    const matchCategory = activeCategory === "All" || p.category === activeCategory;
    const matchSearch =
      searchQuery === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Blog | Woodex Office Furniture Pakistan"
        description="Read expert articles on ergonomic office furniture, workspace design, productivity tips, and industry trends from Woodex Pakistan."
      />
      <Navbar />

      {/* Hero */}
      <section
        className="relative h-[340px] md:h-[400px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <Badge className="bg-accent text-accent-foreground mb-4 px-3 py-1 text-xs font-semibold">
              INSIGHTS & TIPS
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Our <span className="text-accent">Blog</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl mb-6">
              Expert insights on office furniture, ergonomics, and workspace design
            </p>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-accent">Blog</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-1">Featured <span className="text-accent">Article</span></h2>
          <p className="text-muted-foreground text-sm">Our most popular read this month</p>
        </div>
        <Card className="overflow-hidden border-0 shadow-lg group cursor-pointer">
          <div className="grid md:grid-cols-2">
            <div className="relative h-64 md:h-auto overflow-hidden">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-accent text-accent-foreground">{featuredPost.category}</Badge>
              </div>
            </div>
            <CardContent className="p-8 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {featuredPost.date}</span>
                <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {featuredPost.readTime}</span>
                <span className="flex items-center gap-1"><User className="h-3 w-3" /> {featuredPost.author}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-accent transition-colors leading-tight">
                {featuredPost.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{featuredPost.excerpt}</p>
              <Button className="w-fit bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
                Read Article <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </div>
        </Card>
      </section>

      {/* Blog Grid with Sidebar */}
      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_300px] gap-10">
            {/* Main Content */}
            <div>
              {/* Filters */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                <div className="flex items-center gap-1 flex-wrap">
                  {categories.map((cat) => (
                    <Button
                      key={cat}
                      variant={activeCategory === cat ? "default" : "ghost"}
                      size="sm"
                      className={activeCategory === cat ? "bg-accent text-accent-foreground hover:bg-accent/90" : ""}
                      onClick={() => setActiveCategory(cat)}
                    >
                      {cat}
                    </Button>
                  ))}
                </div>
                <div className="relative w-full sm:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search articles..."
                    className="pl-9"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Posts Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                {filtered.map((post, i) => (
                  <Card key={i} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300 border-border/50">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-accent/90 text-accent-foreground text-xs backdrop-blur-sm">{post.category}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                        <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                        <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                      </div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors leading-snug line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{post.excerpt}</p>
                      <Button variant="link" className="px-0 text-accent hover:text-accent/80 text-sm">
                        Read More <ArrowRight className="h-3 w-3 ml-1" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filtered.length === 0 && (
                <div className="text-center py-16">
                  <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
                  <Button variant="outline" className="mt-4" onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}>
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Popular Tags */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Tag className="h-4 w-4 text-accent" /> Popular Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors"
                        onClick={() => setSearchQuery(tag)}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Trending */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-accent" /> Trending
                  </h3>
                  <div className="space-y-4">
                    {posts.slice(0, 4).map((post, i) => (
                      <div key={i} className="flex gap-3 group cursor-pointer">
                        <span className="text-2xl font-bold text-accent/30 group-hover:text-accent transition-colors">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h4 className="text-sm font-semibold group-hover:text-accent transition-colors line-clamp-2 leading-snug">
                            {post.title}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-1">{post.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter CTA */}
              <Card className="bg-accent text-accent-foreground border-0">
                <CardContent className="p-6 text-center">
                  <BookOpen className="h-8 w-8 mx-auto mb-3 opacity-80" />
                  <h3 className="font-bold text-lg mb-2">Stay Updated</h3>
                  <p className="text-sm opacity-85 mb-4">Get the latest office design tips delivered to your inbox.</p>
                  <Input
                    placeholder="Your email address"
                    className="mb-3 bg-accent-foreground/10 border-accent-foreground/20 placeholder:text-accent-foreground/50 text-accent-foreground"
                  />
                  <Button variant="secondary" className="w-full">Subscribe</Button>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-primary text-primary-foreground border-0">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Expert Advice?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-85">
              Our furniture consultants can help you choose the perfect setup for your workspace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/e-quotation">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
                  Get Free Consultation <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
