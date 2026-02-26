import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, Search, ShoppingCart, User, FileText, ChevronDown } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  const shopCategories = [
    { name: "All Products", path: "/shop" },
    { name: "Executive Chairs", path: "/shop?category=executive" },
    { name: "Manager Chairs", path: "/shop?category=manager" },
    { name: "Staff Chairs", path: "/shop?category=staff" },
    { name: "Visitor Chairs", path: "/shop?category=visitor" },
    { name: "Office Desks", path: "/shop?category=desks" },
    { name: "Workstations", path: "/shop?category=workstations" },
    { name: "Office Sofas", path: "/shop?category=sofas" },
    { name: "Meeting Tables", path: "/shop?category=meeting" },
    { name: "Reception Desks", path: "/shop?category=reception" },
  ];

  const servicesItems = [
    { name: "All Services", path: "/services" },
    { name: "Delivery & Installation", path: "/services/delivery-installation" },
    { name: "Factory Direct", path: "/services/factory-direct" },
    { name: "Project Based Quoting", path: "/services/project-quoting" },
    { name: "Custom Design", path: "/services/custom-design" },
    { name: "Space Planning", path: "/services/space-planning" },
  ];

  const mainNavItems = [
    { name: "Series", path: "/series" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Top Utility Bar */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-8">
            <div className="flex items-center gap-0 text-xs text-muted-foreground">
              <Link to="/showrooms" className="hover:text-foreground transition-colors px-2 first:pl-0">
                Showrooms
              </Link>
              <span className="text-border">|</span>
              <Link to="/materials" className="hover:text-foreground transition-colors px-2">
                Material and Colors
              </Link>
              <span className="text-border">|</span>
              <Link to="/warranty" className="hover:text-foreground transition-colors px-2">
                Warranty
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Bar */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-baseline">
              <span className="text-3xl md:text-4xl font-black tracking-tight text-foreground" style={{ fontFamily: "'Arial Black', 'Helvetica Neue', sans-serif" }}>
                WOOD
              </span>
              <span className="text-3xl md:text-4xl font-light tracking-tight text-foreground" style={{ fontFamily: "'Arial', 'Helvetica Neue', sans-serif" }}>
                EX
              </span>
              <span className="text-[8px] align-super ml-0.5 text-muted-foreground">®</span>
            </Link>
            <div className="flex items-center gap-4">
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                <Search className="h-5 w-5" />
              </button>
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                <User className="h-5 w-5" />
              </button>
              <button className="text-muted-foreground hover:text-foreground transition-colors relative">
                <ShoppingCart className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-11">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center h-full">
              {/* Shop Dropdown */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-sm font-medium px-5 h-11 rounded-none bg-transparent hover:bg-muted transition-colors data-[state=open]:bg-muted border-r border-border">
                      Chairs
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[280px] p-3 bg-background border border-border shadow-lg">
                        <div className="grid gap-0.5">
                          {shopCategories.map((item) => (
                            <Link key={item.path} to={item.path}>
                              <div className="block select-none px-3 py-2.5 text-sm leading-none no-underline outline-none transition-colors hover:bg-muted">
                                {item.name}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <Link to="/shop?category=desks" className="text-sm font-medium px-5 h-11 flex items-center border-r border-border hover:bg-muted transition-colors">
                Desks
              </Link>

              <Link to="/shop?category=storage" className="text-sm font-medium px-5 h-11 flex items-center border-r border-border hover:bg-muted transition-colors">
                Storage
              </Link>

              <Link to="/shop?category=sofas" className="text-sm font-medium px-5 h-11 flex items-center border-r border-border hover:bg-muted transition-colors">
                Lounge
              </Link>

              {/* Services Dropdown */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-sm font-medium px-5 h-11 rounded-none bg-transparent hover:bg-muted transition-colors data-[state=open]:bg-muted border-r border-border">
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[280px] p-3 bg-background border border-border shadow-lg">
                        <div className="grid gap-0.5">
                          {servicesItems.map((item) => (
                            <Link key={item.path} to={item.path}>
                              <div className="block select-none px-3 py-2.5 text-sm leading-none no-underline outline-none transition-colors hover:bg-muted">
                                {item.name}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              {mainNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-sm font-medium px-5 h-11 flex items-center border-r border-border hover:bg-muted transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right Side - Inspirations + E-Quotation */}
            <div className="hidden lg:flex items-center gap-0 ml-auto h-full">
              <Link to="/blog" className="text-sm font-medium px-5 h-11 flex items-center border-l border-border hover:bg-muted transition-colors">
                Inspirations
              </Link>
              <Link to="/e-quotation" className="text-sm font-medium px-5 h-11 flex items-center gap-2 border-l border-border hover:bg-muted transition-colors">
                <FileText className="h-4 w-4" />
                E-Quotation
              </Link>
            </div>

            {/* Mobile Menu */}
            <div className="lg:hidden flex items-center justify-between w-full">
              <span className="text-sm font-bold">Menu</span>
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px]">
                  <div className="flex flex-col gap-4 mt-8">
                    <Link to="/" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-accent transition-colors">
                      Home
                    </Link>

                    <Collapsible open={shopOpen} onOpenChange={setShopOpen}>
                      <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-medium hover:text-accent transition-colors">
                        Shop
                        <ChevronDown className={`h-4 w-4 transition-transform ${shopOpen ? 'rotate-180' : ''}`} />
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <div className="flex flex-col gap-3 mt-2 ml-4">
                          {shopCategories.map((item) => (
                            <Link key={item.path} to={item.path} onClick={() => { setIsOpen(false); setShopOpen(false); }} className="text-base hover:text-accent transition-colors">
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </CollapsibleContent>
                    </Collapsible>

                    <Collapsible open={servicesOpen} onOpenChange={setServicesOpen}>
                      <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-medium hover:text-accent transition-colors">
                        Services
                        <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <div className="flex flex-col gap-3 mt-2 ml-4">
                          {servicesItems.map((item) => (
                            <Link key={item.path} to={item.path} onClick={() => { setIsOpen(false); setServicesOpen(false); }} className="text-base hover:text-accent transition-colors">
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </CollapsibleContent>
                    </Collapsible>

                    {mainNavItems.map((item) => (
                      <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-accent transition-colors">
                        {item.name}
                      </Link>
                    ))}

                    <Link to="/blog" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-accent">
                      Inspirations
                    </Link>
                    <Link to="/b2b" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-accent">
                      B2B
                    </Link>
                    <Link to="/e-quotation" onClick={() => setIsOpen(false)}>
                      <Button className="w-full mt-4">E-Quotation</Button>
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
