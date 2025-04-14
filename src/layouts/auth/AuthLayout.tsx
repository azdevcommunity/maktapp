import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const AuthLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const showBackButton = location.pathname === '/forgot-password' || location.pathname.startsWith('/reset-password');

  return (
    <div className="flex min-h-screen">
      {/* Left side - image */}
      <div className="w-[920px] p-3 hidden md:block bg-cover bg-center min-h-screen" 
        style={{ backgroundImage: "url('/login_first.png')" }}>
      </div>

      {/* Right side - content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header with logo and language selector */}
        <div className="flex justify-between items-center pt-8 pb-12 px-5">
          <div className="flex items-center">
            <img src="/logo.svg" alt="Maktapp Logo" className="h-8" />
          </div>
          
          <div className="flex space-x-2">
            <button className="px-2 hover:font-medium">AZ</button>
            <button className="px-2 hover:font-medium">EN</button>
            <button className="px-2 hover:font-medium">RU</button>
          </div>
        </div>

        {/* Content container */}
        <div className="flex-1 flex flex-col items-center justify-between px-8 md:px-28">
          {showBackButton && (
            <button 
              onClick={() => navigate('/login')} 
              className="self-start mb-6 w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white mt-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          <div className={`w-[360px] max-w-[360px] mb-20 ${showBackButton ? 'mt-0' : 'space-y-8'}`}>
            {/* Content (Login/Register form) */}
            <Outlet />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout; 