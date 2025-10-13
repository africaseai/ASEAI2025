import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MoatazChouchen from "./pages/speakers/MoatazChouchen";
import BruceMaxim from "./pages/speakers/BruceMaxim";
import MichelChaudron from "./pages/speakers/MichelChaudron";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/speakers/moataz-chouchen" element={<MoatazChouchen />} />
          <Route path="/speakers/bruce-maxim" element={<BruceMaxim />} />
          <Route path="/speakers/michel-chaudron" element={<MichelChaudron />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
