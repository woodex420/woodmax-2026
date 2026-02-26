import { Toaster } from "@/components/ui/toaster";
import { Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import LoginPage from "./pages/shop/LoginPage";
import Index from "./pages/shop/Index";
import Shop from "./pages/shop/Shop";
import ProductDetail from "./pages/shop/ProductDetail";
import VirtualShowroom from "./pages/shop/VirtualShowroom";
import Series from "./pages/shop/Series";
import Projects from "./pages/shop/Projects";
import Services from "./pages/shop/Services";
import DeliveryInstallation from "./pages/shop/DeliveryInstallation";
import FactoryDirect from "./pages/shop/FactoryDirect";
import ProjectQuoting from "./pages/shop/ProjectQuoting";
import CustomDesign from "./pages/shop/CustomDesign";
import SpacePlanning from "./pages/shop/SpacePlanning";
import B2B from "./pages/shop/B2B";
import About from "./pages/shop/About";
import Contact from "./pages/shop/Contact";
import EQuotation from "./pages/shop/EQuotation";
import Materials from "./pages/shop/Materials";
import Showrooms from "./pages/shop/Showrooms";
import Warranty from "./pages/shop/Warranty";
import NotFound from "./pages/shop/NotFound";
import AgentDashboard from "./pages/shop/AgentDashboard";
import KnowledgeBase from "./pages/shop/KnowledgeBase";
import Blog from "./pages/shop/Blog";
import AdminLayout from "./layouts/AdminLayout";
import DashboardPage from "./pages/admin/DashboardPage";
import ProductsPage from "./pages/admin/ProductsPage";
import KnowledgePage from "./pages/admin/KnowledgePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<Index />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/virtual-showroom" element={<VirtualShowroom />} />
            <Route path="/series" element={<Series />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/delivery-installation" element={<DeliveryInstallation />} />
            <Route path="/services/factory-direct" element={<FactoryDirect />} />
            <Route path="/services/project-quoting" element={<ProjectQuoting />} />
            <Route path="/services/custom-design" element={<CustomDesign />} />
            <Route path="/services/space-planning" element={<SpacePlanning />} />
            <Route path="/b2b" element={<B2B />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/e-quotation" element={<EQuotation />} />
            <Route path="/materials" element={<Materials />} />
            <Route path="/showrooms" element={<Showrooms />} />
            <Route path="/warranty" element={<Warranty />} />
            <Route path="/agent-dashboard" element={<AgentDashboard />} />
            <Route path="/knowledge-base" element={<KnowledgeBase />} />
            <Route path="/blog" element={<Blog />} />
            
            {/* Protected Admin Routes */}
            <Route 
              path="/admin" 
              element={<ProtectedRoute element={<AdminLayout />} />}
            >
              <Route index element={<DashboardPage />} />
              <Route path="products" element={<ProductsPage />} />
              <Route path="knowledge" element={<KnowledgePage />} />
            </Route>

            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
