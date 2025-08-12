import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
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
  Megaphone,
  Bell,
  LogOut,
} from "lucide-react";

const adminMenuItems = [
  { title: "Tableau de bord", url: "/admin", icon: LayoutDashboard },
  { title: "Utilisateurs", url: "/admin/users", icon: Users },
  { title: "Commandes", url: "/admin/orders", icon: ShoppingCart },
  { title: "Graphistes", url: "/admin/graphistes", icon: Palette },
  { title: "Publicités", url: "/admin/ads", icon: Megaphone },
  { title: "Notifications", url: "/admin/notifications", icon: Bell },
];

export function AdminSidebar() {
  const { logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <Sidebar className="bg-white border-r border-gray-200 flex flex-col">
      {/* MENU */}
      <SidebarContent className="flex-1 overflow-y-auto">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1 p-2">
              {adminMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      to={item.url}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        location.pathname === item.url
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      {item.title}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* FOOTER */}
      <SidebarFooter className="p-4 border-t border-gray-200">
        <SidebarMenu>
          <SidebarMenuItem>
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm font-medium text-red-500 hover:bg-red-50 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              Déconnexion
            </button>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
