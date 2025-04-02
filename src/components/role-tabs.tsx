"use client"

import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

type Role = {
  id: string
  name: string
}

type RoleTabsProps = {
  roles: Role[]
  defaultRole?: string
  onChange?: (roleId: string) => void
  className?: string
}

export default function RoleTabs({ roles, defaultRole, onChange, className }: RoleTabsProps) {
  const [activeRole, setActiveRole] = useState<string>(defaultRole || (roles.length > 0 ? roles[0].id : ""))
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: "0px",
    width: "0px",
  })
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({})

  // Update indicator position when active role changes
  useEffect(() => {
    const activeTab = tabRefs.current[activeRole]
    if (activeTab) {
      setIndicatorStyle({
        left: `${activeTab.offsetLeft}px`,
        width: `${activeTab.offsetWidth}px`,
      })
    }
  }, [activeRole])

  // Update indicator on window resize
  useEffect(() => {
    const handleResize = () => {
      const activeTab = tabRefs.current[activeRole]
      if (activeTab) {
        setIndicatorStyle({
          left: `${activeTab.offsetLeft}px`,
          width: `${activeTab.offsetWidth}px`,
        })
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [activeRole])

  // Initial measurement after component mounts
  useEffect(() => {
    const activeTab = tabRefs.current[activeRole]
    if (activeTab) {
      setIndicatorStyle({
        left: `${activeTab.offsetLeft}px`,
        width: `${activeTab.offsetWidth}px`,
      })
    }
  }, [])

  const handleRoleChange = (roleId: string) => {
    setActiveRole(roleId)
    if (onChange) {
      onChange(roleId)
    }
  }

  return (
    <div className={cn("w-full px-4 md:px-0 md:max-w-xl mx-auto", className)}>
      <div className="w-full max-w-xl mx-auto mb-8 flex justify-center">
        {/* Outer container matching the image style */}
        <div
          className="relative flex items-center justify-between bg-white rounded-2xl border-2 border-brand-500 p-1 space-x-1 w-full md:w-auto mx-auto"
          role="tablist"
          aria-label="User roles"
        >
          {/* Sliding indicator */}
          <div
            className="absolute h-[calc(100%-0.5rem)] top-1 bg-brand-500 md:rounded-2xl rounded-lg transition-all duration-300 ease-in-out z-0"
            style={indicatorStyle}
          />
          {/* Tab buttons */}
          {roles.map((role) => (
            <button
              key={role.id}
              id={`tab-${role.id}`}
              role="tab"
              aria-selected={activeRole === role.id}
              aria-controls={`tabpanel-${role.id}`}
              ref={(el) => {
                tabRefs.current[role.id] = el
              }}
              onClick={() => handleRoleChange(role.id)}
              className={cn(
                "relative z-10 py-2 px-3 md:py-2.5 md:px-6 text-sm md:text-base font-medium rounded-full transition-colors duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-500", 
                activeRole === role.id
                  ? "text-white" // Active text color
                  : "text-gray-700 hover:text-gray-900", // Inactive text color
              )}
            >
              {role.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

