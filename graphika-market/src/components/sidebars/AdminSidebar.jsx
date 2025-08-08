import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../../components/ui/sidebar";
import { useAuth } from "../../contexts/AuthContext";
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  Palette,
  Settings,
  LogOut,
  Megaphone,
  Bell,
} from "lucide-react";

const adminMenuItems = [
  {
    title: "Tableau de bord",
    url: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Utilisateurs",
    url: "/admin/users",
    icon: Users,
  },
  {
    title: "Commandes",
    url: "/admin/orders",
    icon: ShoppingCart,
  },
  {
    title: "Graphistes",
    url: "/admin/graphistes",
    icon: Palette,
  },
  {
    title: "Publicités",
    url: "/admin/ads",
    icon: Megaphone,
  },
  {
    title: "Notifications",
    url: "/admin/notifications",
    icon: Bell,
  },
];

export function AdminSidebar() {
  const { user } = useAuth();
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
            <Palette className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold">Graphika Admin</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {adminMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={location.pathname === item.url}
                  >
                    <Link to={item.url} className="text-white">
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <div className="space-y-2">
          <div className="text-sm text-gray-600">
            Connecté en tant que {user && user.name}
          </div>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link to="/">
                  <button className="flex w-full text-left">
                    <LogOut className="mr-2"/>
                    <span>Déconnexion</span>
                  </button>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
