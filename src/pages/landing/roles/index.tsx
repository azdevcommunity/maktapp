import { useState, useRef, useEffect } from "react"
import RoleTabs from "@/components/role-tabs"
import EducationalMenuMain from "@/components/educational-menu-main"
import EducationalMenuGrid from "@/components/educational-menu-grid"
import StatisticsSlider from "@/components/statistics-slider"
import { roleContent, getRoleContent } from "@/lib/role-content"

export default function UserRoles() {
  const [activeRole, setActiveRole] = useState<string>(roleContent[0].id)
  const [, setIndicatorStyle] = useState({})
  const [, setIsMobile] = useState(false)
  const currentRole = getRoleContent(activeRole) || roleContent[0]
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({})

  // Effect to update indicator style when activeRole changes
  useEffect(() => {
    const activeTab = tabRefs.current[activeRole]
    if (activeTab) {
      setIndicatorStyle({
        left: `${activeTab.offsetLeft}px`,
        width: `${activeTab.offsetWidth}px`,
      })
    }
  }, [activeRole])

  // Effect to detect mobile screens
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  // Function to get the title based on screen width (safe for SSR)
  const getPageTitle = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768 ? "Rollar" : "User roles"
    }
    return "User roles" // Default for SSR
  }

  return (
    <div className="w-full bg-gray-100 min-h-screen">
      <main className="container mx-auto px-4 py-4 max-w-screen-xl w-full">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center my-36 md:mb-16">
          {getPageTitle()}
        </h1>

        {/* Role Tabs */}
        <RoleTabs
          roles={roleContent}
          defaultRole={activeRole}
          onChange={setActiveRole}
        />

        {/* Role Description */}
        <div className="mb-8">
          <div className="bg-white rounded-3xl p-6">
            <div className="flex items-start md:items-center md:justify-start gap-4 flex-col md:flex-row">
              <div className="flex-shrink-0 w-14 h-14 md:w-20 md:h-20 sm:w-16 sm:h-16 rounded-full flex items-center justify-center md:flex-row ">
                <img
                  src="/info_icon.png"
                  alt="mak.app logo"
                  className="mr-2"
                />
              </div>
              <p className="text-gray-700 leading-relaxed text-base">{currentRole.description}</p>
            </div>
          </div>
        </div>

        {/* Permissions Grid - Desktop */}
        <div className="hidden md:flex md:flex-row mb-12 space-x-4">
          {/* Main Permissions */}
          <EducationalMenuMain 
            items={currentRole.mainPermissions} 
            className="w-3/6" 
          />

          {/* Sub Permissions */}
          {currentRole.subPermissions && currentRole.subPermissions.length > 0 && (
            <EducationalMenuGrid 
              category={currentRole.subPermissions[0]} 
              className="px-20 w-full" 
            />
          )}
        </div>

        {/* Permissions Grid - Mobile */}
        <div className="md:hidden space-y-8">
          {/* Main Menu */}
          <EducationalMenuMain items={currentRole.mainPermissions} />

          {/* Sub Permissions */}
          {currentRole.subPermissions && currentRole.subPermissions.length > 0 && (
            <EducationalMenuGrid category={currentRole.subPermissions[0]} />
          )}
        </div>

        {/* Statistics Preview */}
        <div className="mt-12 mb-12">
          <StatisticsSlider images={currentRole.sliderImages} />
        </div>
      </main>
    </div>
  )
}
