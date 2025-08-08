import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import DashboardLayout from "./components/DashboardLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import BecomeGraphiste from "./pages/BecomeGraphiste";
import OrderDesign from "./pages/OrderDesign";
import OrderPrint from "./pages/OrderPrint";
import Conception from "./pages/Conception";
import Impressions from "./pages/Impressions";
import Supports from "./pages/Supports";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";
import GraphisteDashboard from "./pages/GraphisteDashboard";
import GraphisteMissions from "./pages/GraphisteMissions";
import GraphisteProfile from "./pages/GraphisteProfile";
import AdminDashboard from "./pages/AdminDashboard";
import AdminUsers from "./pages/AdminUsers";
import AdminOrders from "./pages/AdminOrders";
import AdminGraphistes from "./pages/AdminGraphistes";
import AdminAds from "./pages/AdminAds";
import AdminNotifications from "./pages/AdminNotifications";
import About from "./pages/About";
import Help from "./pages/Help";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
          <Routes>
            {/* Public Routes with Layout */}
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/login" element={<Layout><Login /></Layout>} />
            <Route path="/register" element={<Layout><Register /></Layout>} />
            <Route path="/contact" element={<Layout><Contact /></Layout>} />
            <Route path="/become-graphiste" element={<Layout><BecomeGraphiste /></Layout>} />
            <Route path="/conception" element={<Layout><Conception /></Layout>} />
            <Route path="/impressions" element={<Layout><Impressions /></Layout>} />
            <Route path="/supports" element={<Layout><Supports /></Layout>} />
            <Route path="/about" element={<Layout><About /></Layout>} />
            <Route path="/help" element={<Layout><Help /></Layout>} />
            <Route path="/terms" element={<Layout><Terms /></Layout>} />
            <Route path="/privacy" element={<Layout><Privacy /></Layout>} />
            
            {/* User Routes with DashboardLayout */}
            <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
            <Route path="/order-design" element={<DashboardLayout><OrderDesign /></DashboardLayout>} />
            <Route path="/order-print" element={<DashboardLayout><OrderPrint /></DashboardLayout>} />
            <Route path="/orders" element={<DashboardLayout><Orders /></DashboardLayout>} />
            <Route path="/profile" element={<DashboardLayout><Profile /></DashboardLayout>} />
            
            {/* Graphiste Routes with DashboardLayout */}
            <Route path="/graphiste" element={<DashboardLayout><GraphisteDashboard /></DashboardLayout>} />
            <Route path="/graphiste/missions" element={<DashboardLayout><GraphisteMissions /></DashboardLayout>} />
            <Route path="/graphiste/profile" element={<DashboardLayout><GraphisteProfile /></DashboardLayout>} />
            
            {/* Admin Routes with DashboardLayout */}
            <Route path="/admin" element={<DashboardLayout><AdminDashboard /></DashboardLayout>} />
            <Route path="/admin/users" element={<DashboardLayout><AdminUsers /></DashboardLayout>} />
            <Route path="/admin/orders" element={<DashboardLayout><AdminOrders /></DashboardLayout>} />
            <Route path="/admin/graphistes" element={<DashboardLayout><AdminGraphistes /></DashboardLayout>} />
            <Route path="/admin/ads" element={<DashboardLayout><AdminAds /></DashboardLayout>} />
            <Route path="/admin/notifications" element={<DashboardLayout><AdminNotifications /></DashboardLayout>} />
            
            <Route path="*" element={<Layout><NotFound /></Layout>} />
          </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
