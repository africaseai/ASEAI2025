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
import LionelBriand from "./pages/speakers/LionelBriand";
import WalidMaalej from "./pages/speakers/WalidMaalej";
import SimonPeytonJones from "./pages/speakers/SimonPeytonJones";
import AhmedHassan from "./pages/speakers/AhmedHassan";

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
          <Route path="/speakers/lionel-briand" element={<LionelBriand />} />
          <Route path="/speakers/walid-maalej" element={<WalidMaalej />} />
          <Route path="/speakers/simon-peyton-jones" element={<SimonPeytonJones />} />
          <Route path="/speakers/ahmed-hassan" element={<AhmedHassan />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
