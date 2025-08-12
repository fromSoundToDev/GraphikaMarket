import { SidebarProvider, SidebarInset } from '../components/ui/sidebar';
import { useAuth } from '../contexts/AuthContext';
import { AdminSidebar } from '../components/sidebars/AdminSidebar';
import { GraphisteSidebar } from '../components/sidebars/GraphisteSidebar';
import { UserSidebar } from '../components/sidebars/UserSidebar';
import { Search } from "lucide-react";
import { Input } from "../components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import  ThemeToggle  from "./ThemeToggleButton";

function DashboardLayout({ children }) {
  const { isAdmin, isGraphiste, isUser, user } = useAuth();

  const getSidebar = () => {
    if (isAdmin()) return <AdminSidebar />;
    if (isGraphiste()) return <GraphisteSidebar />;
    if (isUser()) return <UserSidebar />;
    return null;
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        
        {/* Sidebar */}
        {getSidebar()}

        {/* Contenu principal */}

        <SidebarInset className="flex flex-col flex-1">
          {/* HEADER */}
          <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
            {/* Search */}
            <div className="relative w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search anything..."
                className="pl-10 bg-gray-100 border-none rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Profil + ThemeToggle */}
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <div className="flex items-center gap-2">
                <Avatar className="w-8 h-8">
                  <AvatarImage src={user?.avatar || ""} />
                  <AvatarFallback>{user?.name?.[0] || "U"}</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium text-gray-800">
                  {user?.name || "Utilisateur"}
                </span>
              </div>
            </div>
          </header>

          {/* CONTENU */}
          <main className="flex-1 p-6">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

export default DashboardLayout;
