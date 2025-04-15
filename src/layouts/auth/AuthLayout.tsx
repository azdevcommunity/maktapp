import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Define your image URLs here
const carouselImages = [
  '/auth_carousel_1.png',
  '/auth_carousel_2.png',
  '/auth_carousel_3.png',
  // Add more image paths as needed
];

const AuthLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const showBackButton = location.pathname === '/forgot-password' || location.pathname.startsWith('/reset-password');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="flex min-h-screen">
      {/* Left side - image carousel */}
      <div className="w-[920px] hidden md:flex flex-col justify-between bg-cover bg-center min-h-screen transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${carouselImages[currentImageIndex]})` }}>
        <div></div>
        <div className="flex justify-center space-x-2 p-4 bg-black/30 backdrop-blur">
          {carouselImages.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 rounded-full ${
                index === currentImageIndex ? 'bg-teal-400 w-8' : 'bg-gray-300 bg-opacity-50 w-6'
              } transition-all duration-500 ease-in-out`}
            />
          ))}
        </div>
      </div>

      {/* Right side - content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header with logo and language selector */}
        <div className="flex justify-between items-center pt-8 pb-12 px-5">
          <div className="flex items-center" onClick={() => navigate('/')}>
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
          <div className={`w-full sm:w-[360px] max-w-[360px] mb-20 ${showBackButton ? 'mt-0' : 'space-y-8'}`}>
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