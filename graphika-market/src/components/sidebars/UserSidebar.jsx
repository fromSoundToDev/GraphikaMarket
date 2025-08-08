import React from "react";
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
  Palette as PaletteIcon,
  Camera,
  FileText,
  User,
  LogOut,
} from "lucide-react";

const userMenuItems = [
  {
    title: "Tableau de bord",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Design",
    url: "/order-design",
    icon: PaletteIcon,
  },
  {
    title: "Impression",
    url: "/order-print",
    icon: Camera,
  },
  {
    title: "Mes Commandes",
    url: "/orders",
    icon: FileText,
  },
  {
    title: "Profil",
    url: "/profile",
    icon: User,
  },
];

export function UserSidebar() {
  const { user } = useAuth();
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
            <PaletteIcon className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold">Graphika</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {userMenuItems.map(function (item) {
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild={true}
                      isActive={location.pathname === item.url}
                    >
                      <Link to={item.url} className="text-white">
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
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
              <SidebarMenuButton asChild={true}>
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
