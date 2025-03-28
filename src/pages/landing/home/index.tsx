import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import TabbedInterface from "@/components/tabbed-interface"
import LMSBenefitsSlider from "@/components/lms-benefits-slider"
import EducationBenefits from "@/components/education-benefits"
import AppDownloadSection from "@/components/app-download-section"
import QuestionsComponent from "@/components/questions-component"

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <TabbedInterface />
      <LMSBenefitsSlider />
      <EducationBenefits />
      <AppDownloadSection />
      <QuestionsComponent />
    </>
  )
}

export default Home 