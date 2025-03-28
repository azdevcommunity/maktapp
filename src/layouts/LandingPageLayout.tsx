import { Outlet } from 'react-router-dom'
import Header from '../components/header'
import Footer from '../components/footer'

const LandingPageLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header
        logo={{
          src: "/logo.svg",
          alt: "makt'app Logo",
          text: "makt'app",
        }}
        navItems={[
          { label: "Əsas səhifə", href: "/" },
          { label: "Rollar", href: "/roles" },
          { label: "Əlaqə", href: "/contact" },
          { label: "Məktəb qeydiyyatı", href: "/register" },
        ]}
        languageSelector={{
          currentLanguage: "AZ",
          onLanguageChange: (lang) => console.log(`Language changed to: ${lang}`),
        }}
        loginButton={{
          text: "Daxil ol",
          href: "/login",
          onClick: () => console.log("Login button clicked"),
        }}
      />
      <main className="flex-grow bg-[#F2F2F0] w-full overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default LandingPageLayout 