
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import Network from "./pages/Network";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound";
import Company from "./pages/Company";
import EnergyMaestro from "./pages/EnergyMaestro";
import ProductDetail from "./pages/ProductDetail";
import HospitalityIndustry from "./pages/industries/Hospitality";
import AutoDealershipIndustry from "./pages/industries/AutoDealership";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/network" element={<Network />} />
          <Route path="/energy-maestro" element={<EnergyMaestro />} />
          <Route path="/company" element={<Company />} />
          <Route path="/support" element={<Support />} />
          
          {/* Industry Pages */}
          <Route path="/industries/hospitality" element={<HospitalityIndustry />} />
          <Route path="/industries/auto-dealership" element={<AutoDealershipIndustry />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
