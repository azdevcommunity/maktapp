import { AppSidebar } from '@/components/ui/app-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div 
      className="min-h-screen relative"
      data-sidebar-collapsed={collapsed}
    >
      <SidebarProvider>
        <AppSidebar 
          collapsed={collapsed} 
          onToggle={() => setCollapsed(!collapsed)} 
        />
        <main 
          className="absolute transition-all duration-300 ease-in-out px-8 pt-8 pb-8"
          style={{
            left: collapsed ? '70px' : '250px',
            right: 0
          }}
        >
          <Outlet />
        </main>
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayout; 