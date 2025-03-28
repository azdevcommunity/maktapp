import { Outlet, Link, useLocation } from 'react-router-dom';

const DashboardLayout = () => {
  const location = useLocation();
  
  // Navigation items for dashboard
  const navItems = [
    { label: 'Overview', path: '/dashboard' },
    { label: 'Settings', path: '/dashboard/settings' },
  ];
  
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 border-r">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">Dashboard</h2>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`block p-2 rounded ${
                    location.pathname === item.path
                      ? 'bg-blue-100 text-blue-700'
                      : 'hover:bg-gray-200'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      
      {/* Main content */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout; 