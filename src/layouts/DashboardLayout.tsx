import { AppSidebar } from '@/components/ui/app-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  // const location = useLocation();

  // // Navigation items for dashboard
  // const navItems = [
  //   { label: 'Overview', path: '/dashboard' },
  //   { label: 'Settings', path: '/dashboard/settings' },
  // ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <SidebarProvider>
        <AppSidebar />
        {/* Main content */}
      </SidebarProvider>
      <main className="flex-1 px-8 pt-8 pb-8 w-full">
        <Outlet />
      </main>

    </div>
  );
};

export default DashboardLayout; 