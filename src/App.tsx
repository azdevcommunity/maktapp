import Header from "./components/header"
import HeroSection from "./components/hero-section"
import FeaturesSection from "./components/features-section"
import TabbedInterface from "./components/tabbed-interface"
import LMSBenefitsSlider from "./components/lms-benefits-slider"
import EducationBenefits from "./components/education-benefits"
import AppDownloadSection from "./components/app-download-section"
import QuestionsComponent from "./components/questions-component"
import Footer from "./components/footer"
function App() {
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
      <main className="flex flex-col  bg-white w-full overflow-x-hidden">
        <HeroSection />
        <FeaturesSection />
        <TabbedInterface />
        <LMSBenefitsSlider />
        <EducationBenefits />
        <AppDownloadSection/>
        <QuestionsComponent/>
        <Footer/>
      </main>
    </div>
  )
}

export default App
