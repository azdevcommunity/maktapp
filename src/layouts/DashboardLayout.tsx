import { AppSidebar } from '@/components/ui/app-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { DailyMonitoringHeader } from '@/components/ui/daily-monitoring-header';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setCollapsed(true);
      }
    };

    // Initial check
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    if (isMobile) {
      setMobileMenuOpen(!mobileMenuOpen);
    } else {
      setCollapsed(!collapsed);
    }
  };

  return (
    <div
      className="min-h-screen relative flex flex-col w-full"
      data-sidebar-collapsed={collapsed}
    >
      {/* Mobile menu button - visible only on small screens */}
      <div className="fixed top-4 left-4 z-30 md:hidden">
        <Button 
          variant="ghost" 
          size="sm"
          className="p-1"
          onClick={toggleSidebar}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      <DailyMonitoringHeader 
        className="transition-all duration-300 ease-in-out"
        style={{
          marginLeft: isMobile ? '0' : (collapsed ? '70px' : '250px'),
        }} 
      />

      <SidebarProvider>
        <div 
          className={`fixed h-screen z-20 transition-all duration-300 ease-in-out
            ${isMobile 
              ? mobileMenuOpen 
                ? 'translate-x-0' 
                : '-translate-x-full'
              : collapsed 
                ? 'w-[70px]' 
                : 'w-[250px]'
            }`}
        >
          <AppSidebar
            collapsed={isMobile ? false : collapsed}
            onToggle={isMobile ? undefined : toggleSidebar}
          />
        </div>
        
        {/* Overlay for mobile menu */}
        {isMobile && mobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-10"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        <main
          className={`flex-1 transition-all duration-300 ease-in-out overflow-hidden 
            ${isMobile 
              ? 'ml-0 w-full' 
              : collapsed 
                ? 'ml-[70px]' 
                : 'ml-[250px]'
            }`}
        >
          <div className="max-w-7xl mx-auto  pt-0">
            <Outlet />
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayout; 