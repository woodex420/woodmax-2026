import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { 
  Sofa, 
  TreePine, 
  Layers, 
  ChevronRight, 
  Check,
  RotateCcw,
  Eye,
  Smartphone,
  Download,
  Share2,
  Info
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import officeImage from "@/assets/custom-design-studio.jpg";

interface Material {
  id: string;
  name: string;
  color: string;
  texture?: string;
  price: number;
  category: "fabric" | "wood" | "frame";
  subcategory?: string;
}

interface Hotspot {
  id: string;
  x: number;
  y: number;
  label: string;
  category: "fabric" | "wood" | "frame";
  description: string;
}

const materials: Material[] = [
  // Fabrics
  { id: "velvet-navy", name: "Navy Velvet", color: "hsl(220, 70%, 25%)", price: 200, category: "fabric", subcategory: "Velvet" },
  { id: "velvet-emerald", name: "Emerald Velvet", color: "hsl(150, 60%, 30%)", price: 200, category: "fabric", subcategory: "Velvet" },
  { id: "velvet-burgundy", name: "Burgundy Velvet", color: "hsl(345, 60%, 30%)", price: 200, category: "fabric", subcategory: "Velvet" },
  { id: "linen-beige", name: "Beige Linen", color: "hsl(40, 30%, 75%)", price: 120, category: "fabric", subcategory: "Linen" },
  { id: "linen-grey", name: "Grey Linen", color: "hsl(0, 0%, 65%)", price: 120, category: "fabric", subcategory: "Linen" },
  { id: "linen-ivory", name: "Ivory Linen", color: "hsl(45, 50%, 90%)", price: 120, category: "fabric", subcategory: "Linen" },
  { id: "leather-tan", name: "Tan Leather", color: "hsl(25, 60%, 45%)", price: 350, category: "fabric", subcategory: "Leather" },
  { id: "leather-black", name: "Black Leather", color: "hsl(0, 0%, 15%)", price: 350, category: "fabric", subcategory: "Leather" },
  { id: "leather-cognac", name: "Cognac Leather", color: "hsl(20, 70%, 35%)", price: 400, category: "fabric", subcategory: "Leather" },
  { id: "mesh-charcoal", name: "Charcoal Mesh", color: "hsl(0, 0%, 30%)", price: 180, category: "fabric", subcategory: "Mesh" },
  { id: "mesh-blue", name: "Blue Mesh", color: "hsl(210, 50%, 45%)", price: 180, category: "fabric", subcategory: "Mesh" },
  
  // Woods
  { id: "oak-natural", name: "Natural Oak", color: "hsl(35, 50%, 65%)", price: 0, category: "wood", subcategory: "Oak" },
  { id: "oak-white", name: "White Oak", color: "hsl(40, 30%, 80%)", price: 50, category: "wood", subcategory: "Oak" },
  { id: "walnut-dark", name: "Dark Walnut", color: "hsl(25, 40%, 30%)", price: 100, category: "wood", subcategory: "Walnut" },
  { id: "walnut-medium", name: "Medium Walnut", color: "hsl(30, 45%, 40%)", price: 80, category: "wood", subcategory: "Walnut" },
  { id: "ash-black", name: "Black Ash", color: "hsl(0, 0%, 12%)", price: 120, category: "wood", subcategory: "Ash" },
  { id: "ash-natural", name: "Natural Ash", color: "hsl(45, 35%, 75%)", price: 60, category: "wood", subcategory: "Ash" },
  { id: "cherry-american", name: "American Cherry", color: "hsl(15, 55%, 45%)", price: 150, category: "wood", subcategory: "Cherry" },
  { id: "mahogany", name: "Mahogany", color: "hsl(10, 50%, 35%)", price: 180, category: "wood", subcategory: "Exotic" },
  { id: "teak", name: "Teak", color: "hsl(35, 45%, 45%)", price: 200, category: "wood", subcategory: "Exotic" },
  { id: "laminate-white", name: "White Laminate", color: "hsl(0, 0%, 95%)", price: 0, category: "wood", subcategory: "Laminate" },
  { id: "laminate-grey", name: "Grey Laminate", color: "hsl(0, 0%, 60%)", price: 0, category: "wood", subcategory: "Laminate" },
  
  // MS Frames
  { id: "frame-matte-black", name: "Matte Black", color: "hsl(0, 0%, 10%)", price: 0, category: "frame", subcategory: "Powder Coated" },
  { id: "frame-brushed-gold", name: "Brushed Gold", color: "hsl(45, 80%, 55%)", price: 150, category: "frame", subcategory: "Metal" },
  { id: "frame-industrial-grey", name: "Industrial Grey", color: "hsl(0, 0%, 45%)", price: 50, category: "frame", subcategory: "Powder Coated" },
  { id: "frame-chrome", name: "Chrome", color: "hsl(0, 0%, 80%)", price: 100, category: "frame", subcategory: "Metal" },
  { id: "frame-bronze", name: "Antique Bronze", color: "hsl(30, 40%, 35%)", price: 120, category: "frame", subcategory: "Metal" },
  { id: "frame-white", name: "Matte White", color: "hsl(0, 0%, 92%)", price: 0, category: "frame", subcategory: "Powder Coated" },
  { id: "frame-copper", name: "Copper", color: "hsl(20, 70%, 50%)", price: 180, category: "frame", subcategory: "Metal" },
  { id: "frame-rose-gold", name: "Rose Gold", color: "hsl(350, 40%, 70%)", price: 200, category: "frame", subcategory: "Metal" },
];

const hotspots: Hotspot[] = [
  { id: "seat-1", x: 32, y: 62, label: "Chair Upholstery", category: "fabric", description: "Seat & back fabric" },
  { id: "seat-2", x: 52, y: 58, label: "Desk Chair", category: "fabric", description: "Ergonomic mesh back" },
  { id: "desk-1", x: 42, y: 48, label: "Workstation Top", category: "wood", description: "Desktop surface" },
  { id: "storage-1", x: 12, y: 42, label: "Storage Cabinet", category: "wood", description: "Cabinet finish" },
  { id: "frame-1", x: 45, y: 72, label: "Chair Base", category: "frame", description: "Metal frame finish" },
  { id: "frame-2", x: 25, y: 82, label: "Table Legs", category: "frame", description: "Support structure" },
  { id: "partition", x: 60, y: 35, label: "Partition Panel", category: "fabric", description: "Acoustic fabric" },
  { id: "desk-2", x: 75, y: 55, label: "Meeting Table", category: "wood", description: "Conference table top" },
];

const basePrice = 45000;

const InteractiveConfigurator = () => {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<"fabric" | "wood" | "frame">("fabric");
  const [componentMaterials, setComponentMaterials] = useState<Record<string, Material>>({});
  const [hoveredMaterial, setHoveredMaterial] = useState<Material | null>(null);

  const handleMaterialSelect = (material: Material) => {
    if (activeHotspot) {
      setComponentMaterials(prev => ({
        ...prev,
        [activeHotspot]: material
      }));
    }
  };

  const handleHotspotClick = (hotspot: Hotspot) => {
    setActiveHotspot(activeHotspot === hotspot.id ? null : hotspot.id);
    setActiveCategory(hotspot.category);
  };

  const resetConfiguration = () => {
    setComponentMaterials({});
    setActiveHotspot(null);
  };

  const filteredMaterials = useMemo(() => 
    materials.filter(m => m.category === activeCategory),
    [activeCategory]
  );

  const totalPrice = useMemo(() => {
    const additionalCost = Object.values(componentMaterials).reduce((sum, mat) => sum + mat.price, 0);
    return basePrice + additionalCost;
  }, [componentMaterials]);

  const groupedMaterials = useMemo(() => {
    const groups: Record<string, Material[]> = {};
    filteredMaterials.forEach(mat => {
      const key = mat.subcategory || "Other";
      if (!groups[key]) groups[key] = [];
      groups[key].push(mat);
    });
    return groups;
  }, [filteredMaterials]);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case "fabric": return <Sofa className="h-4 w-4" />;
      case "wood": return <TreePine className="h-4 w-4" />;
      case "frame": return <Layers className="h-4 w-4" />;
      default: return null;
    }
  };

  const activeHotspotData = hotspots.find(h => h.id === activeHotspot);

  return (
    <div className="min-h-screen bg-gradient-to-br from-muted/50 via-background to-muted/30">
      {/* Header Bar */}
      <div className="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-xl font-bold">Woodex Configurator</h1>
                <p className="text-sm text-muted-foreground">Customize Your Workspace</p>
              </div>
              <Badge variant="secondary" className="hidden md:flex">
                {Object.keys(componentMaterials).length} Customizations Applied
              </Badge>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" onClick={resetConfiguration} className="hidden sm:flex">
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset
              </Button>
              <Button variant="ghost" size="sm" className="hidden md:flex">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <div className="h-6 w-px bg-border hidden md:block" />
              <div className="text-right">
                <div className="text-xs text-muted-foreground">Total Price</div>
                <div className="text-lg font-bold text-accent">
                  PKR {totalPrice.toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)]">
        {/* Main 3D Viewer */}
        <div className="flex-1 relative">
          <div className="sticky top-20 p-4 lg:p-8">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-muted aspect-[16/10]">
              {/* Office Scene with Material Overlays */}
              <div className="relative w-full h-full">
                <img 
                  src={officeImage} 
                  alt="Office Configuration"
                  className="w-full h-full object-cover"
                />
                
                {/* Material Overlay Effects */}
                {Object.entries(componentMaterials).map(([hotspotId, material]) => {
                  const hotspot = hotspots.find(h => h.id === hotspotId);
                  if (!hotspot) return null;
                  
                  return (
                    <div
                      key={hotspotId}
                      className="absolute pointer-events-none transition-all duration-500"
                      style={{
                        left: `${hotspot.x - 8}%`,
                        top: `${hotspot.y - 8}%`,
                        width: '16%',
                        height: '16%',
                        background: `radial-gradient(circle, ${material.color}40 0%, transparent 70%)`,
                        borderRadius: '50%',
                        filter: 'blur(20px)',
                      }}
                    />
                  );
                })}
                
                {/* Hotspots */}
                {hotspots.map((hotspot) => {
                  const appliedMaterial = componentMaterials[hotspot.id];
                  const isActive = activeHotspot === hotspot.id;
                  
                  return (
                    <button
                      key={hotspot.id}
                      onClick={() => handleHotspotClick(hotspot)}
                      className={cn(
                        "absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group z-10",
                        isActive ? "scale-125" : "hover:scale-110"
                      )}
                      style={{ 
                        left: `${hotspot.x}%`, 
                        top: `${hotspot.y}%`,
                      }}
                    >
                      {/* Pulse Animation */}
                      <span className={cn(
                        "absolute inset-0 rounded-full animate-ping",
                        isActive ? "bg-accent/40" : "bg-white/30"
                      )} style={{ animationDuration: '2s' }} />
                      
                      {/* Main Button */}
                      <span className={cn(
                        "relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border-2 shadow-xl transition-all",
                        isActive 
                          ? "bg-accent border-white" 
                          : "bg-white/95 border-white/50 hover:bg-accent hover:border-white"
                      )}>
                        {appliedMaterial ? (
                          <span 
                            className="w-6 h-6 md:w-7 md:h-7 rounded-full border-2 border-white shadow-inner"
                            style={{ backgroundColor: appliedMaterial.color }}
                          />
                        ) : (
                          <span className={cn(
                            "transition-colors",
                            isActive ? "text-white" : "text-primary group-hover:text-white"
                          )}>
                            {getCategoryIcon(hotspot.category)}
                          </span>
                        )}
                      </span>
                      
                      {/* Tooltip */}
                      <span className={cn(
                        "absolute left-1/2 -translate-x-1/2 -bottom-12 whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium shadow-lg transition-all pointer-events-none",
                        isActive 
                          ? "bg-accent text-white opacity-100" 
                          : "bg-primary text-white opacity-0 group-hover:opacity-100"
                      )}>
                        {hotspot.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Component Info */}
              {activeHotspotData && (
                <div className="absolute bottom-4 left-4 right-4 md:right-auto md:max-w-sm bg-background/95 backdrop-blur-md rounded-xl p-4 shadow-xl border border-border">
                  <div className="flex items-start gap-3">
                    <div className={cn(
                      "p-2 rounded-lg",
                      activeHotspotData.category === "fabric" && "bg-accent/20 text-accent",
                      activeHotspotData.category === "wood" && "bg-wood/20 text-wood-dark",
                      activeHotspotData.category === "frame" && "bg-muted text-muted-foreground",
                    )}>
                      {getCategoryIcon(activeHotspotData.category)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold">{activeHotspotData.label}</h4>
                        <Badge variant="outline" className="capitalize text-xs">
                          {activeHotspotData.category}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        {activeHotspotData.description}
                      </p>
                      {componentMaterials[activeHotspotData.id] && (
                        <div className="flex items-center gap-2 mt-2">
                          <span 
                            className="w-5 h-5 rounded border border-border"
                            style={{ backgroundColor: componentMaterials[activeHotspotData.id].color }}
                          />
                          <span className="text-sm font-medium">
                            {componentMaterials[activeHotspotData.id].name}
                          </span>
                          {componentMaterials[activeHotspotData.id].price > 0 && (
                            <span className="text-xs text-accent font-semibold">
                              +PKR {componentMaterials[activeHotspotData.id].price}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* View Controls */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <Button size="icon" variant="secondary" className="rounded-full shadow-lg">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="secondary" className="rounded-full shadow-lg hidden md:flex">
                  <Smartphone className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Info className="h-4 w-4" />
              <span>Click on hotspots to customize materials in real-time</span>
            </div>
          </div>
        </div>

        {/* Configuration Panel */}
        <div className="w-full lg:w-[420px] xl:w-[480px] bg-background border-l border-border">
          <div className="sticky top-20 h-[calc(100vh-80px)] overflow-y-auto">
            <div className="p-6">
              {/* Category Tabs */}
              <Tabs value={activeCategory} onValueChange={(v) => setActiveCategory(v as typeof activeCategory)}>
                <TabsList className="w-full grid grid-cols-3 mb-6">
                  <TabsTrigger value="fabric" className="flex items-center gap-2">
                    <Sofa className="h-4 w-4" />
                    <span className="hidden sm:inline">Fabric</span>
                  </TabsTrigger>
                  <TabsTrigger value="wood" className="flex items-center gap-2">
                    <TreePine className="h-4 w-4" />
                    <span className="hidden sm:inline">Wood</span>
                  </TabsTrigger>
                  <TabsTrigger value="frame" className="flex items-center gap-2">
                    <Layers className="h-4 w-4" />
                    <span className="hidden sm:inline">Frame</span>
                  </TabsTrigger>
                </TabsList>

                {["fabric", "wood", "frame"].map((cat) => (
                  <TabsContent key={cat} value={cat} className="space-y-6 mt-0">
                    {/* Hotspot Quick Select */}
                    <div>
                      <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                        Select Component
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {hotspots.filter(h => h.category === cat).map((hotspot) => (
                          <button
                            key={hotspot.id}
                            onClick={() => handleHotspotClick(hotspot)}
                            className={cn(
                              "px-3 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-2",
                              activeHotspot === hotspot.id
                                ? "bg-accent text-white"
                                : "bg-muted hover:bg-accent/20"
                            )}
                          >
                            {componentMaterials[hotspot.id] && (
                              <span 
                                className="w-3 h-3 rounded-full border border-white/50"
                                style={{ backgroundColor: componentMaterials[hotspot.id].color }}
                              />
                            )}
                            {hotspot.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Material Groups */}
                    {Object.entries(groupedMaterials).map(([subcategory, mats]) => (
                      <div key={subcategory}>
                        <div className="flex items-center gap-2 mb-3">
                          <h3 className="text-sm font-semibold">{subcategory}</h3>
                          <span className="text-xs text-muted-foreground">({mats.length})</span>
                        </div>
                        <div className="grid grid-cols-4 gap-3">
                          {mats.map((material) => {
                            const isSelected = activeHotspot && componentMaterials[activeHotspot]?.id === material.id;
                            
                            return (
                              <button
                                key={material.id}
                                onClick={() => handleMaterialSelect(material)}
                                onMouseEnter={() => setHoveredMaterial(material)}
                                onMouseLeave={() => setHoveredMaterial(null)}
                                disabled={!activeHotspot}
                                className={cn(
                                  "group relative transition-all duration-200",
                                  !activeHotspot && "opacity-50 cursor-not-allowed"
                                )}
                              >
                                <div 
                                  className={cn(
                                    "aspect-square rounded-xl border-2 transition-all shadow-sm",
                                    isSelected 
                                      ? "border-accent ring-2 ring-accent ring-offset-2 scale-105" 
                                      : "border-border group-hover:border-accent/50 group-hover:scale-105 group-hover:shadow-md"
                                  )}
                                  style={{ 
                                    backgroundColor: material.color,
                                    backgroundImage: material.category === "wood" 
                                      ? "repeating-linear-gradient(90deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px, transparent 1px, transparent 4px)" 
                                      : material.category === "fabric"
                                      ? "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 1px)"
                                      : undefined,
                                    backgroundSize: material.category === "fabric" ? "4px 4px" : undefined,
                                  }}
                                >
                                  {isSelected && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                      <Check className="h-5 w-5 text-white drop-shadow-lg" />
                                    </div>
                                  )}
                                </div>
                                <div className="mt-1.5 text-center">
                                  <p className="text-xs font-medium leading-tight truncate">{material.name}</p>
                                  {material.price > 0 && (
                                    <p className="text-[10px] text-accent font-semibold">+PKR {material.price}</p>
                                  )}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                ))}
              </Tabs>

              {/* Hovered Material Preview */}
              {hoveredMaterial && (
                <div className="fixed bottom-4 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-8 bg-background border border-border rounded-xl p-3 shadow-xl flex items-center gap-3 z-50">
                  <div 
                    className="w-12 h-12 rounded-lg border"
                    style={{ backgroundColor: hoveredMaterial.color }}
                  />
                  <div>
                    <p className="font-medium">{hoveredMaterial.name}</p>
                    <p className="text-xs text-muted-foreground capitalize">{hoveredMaterial.subcategory} • {hoveredMaterial.category}</p>
                  </div>
                </div>
              )}

              {/* Summary Section */}
              <div className="mt-8 pt-6 border-t border-border">
                <h3 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wide">
                  Configuration Summary
                </h3>
                
                {Object.keys(componentMaterials).length === 0 ? (
                  <p className="text-sm text-muted-foreground text-center py-4">
                    No customizations yet. Click a hotspot to start.
                  </p>
                ) : (
                  <div className="space-y-2">
                    {Object.entries(componentMaterials).map(([hotspotId, material]) => {
                      const hotspot = hotspots.find(h => h.id === hotspotId);
                      return (
                        <div key={hotspotId} className="flex items-center justify-between p-2 bg-muted/50 rounded-lg">
                          <div className="flex items-center gap-2">
                            <span 
                              className="w-6 h-6 rounded border border-border"
                              style={{ backgroundColor: material.color }}
                            />
                            <div>
                              <p className="text-sm font-medium">{hotspot?.label}</p>
                              <p className="text-xs text-muted-foreground">{material.name}</p>
                            </div>
                          </div>
                          {material.price > 0 && (
                            <span className="text-xs font-semibold text-accent">+PKR {material.price}</span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Price Breakdown */}
                <div className="mt-6 p-4 bg-accent/10 rounded-xl">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Base Price</span>
                    <span className="font-medium">PKR {basePrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Customizations</span>
                    <span className="font-medium text-accent">
                      +PKR {(totalPrice - basePrice).toLocaleString()}
                    </span>
                  </div>
                  <div className="h-px bg-border my-3" />
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Total</span>
                    <span className="text-xl font-bold text-accent">PKR {totalPrice.toLocaleString()}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 space-y-3">
                  <Button className="w-full h-12 text-base bg-accent hover:bg-accent/90">
                    <Download className="h-4 w-4 mr-2" />
                    Save Configuration
                  </Button>
                  <Button variant="outline" className="w-full h-12 text-base">
                    Request Quote
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveConfigurator;
