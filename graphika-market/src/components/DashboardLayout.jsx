import { SidebarProvider, SidebarInset } from '../components/ui/sidebar';
import { useAuth } from '../contexts/AuthContext';
import { AdminSidebar } from '../components/sidebars/AdminSidebar';
import { GraphisteSidebar } from '../components/sidebars/GraphisteSidebar';
import { UserSidebar } from '../components/sidebars/UserSidebar';

function DashboardLayout({ children }) {
  const { isAdmin, isGraphiste, isUser } = useAuth();
  

  const getSidebar = function () {
    if (isAdmin()) {
      return <AdminSidebar />;
    }
    if (isGraphiste()) {
      return <GraphisteSidebar />;
    }
      else if (isUser()) {
    return <UserSidebar />;
    }
   
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        {getSidebar()}
        <SidebarInset>
          {children}
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

export default DashboardLayout;
