"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { PermissionCategory, MenuItem as RoleMenuItem } from "@/lib/role-content"

interface MenuItem {
  id: string
  icon: React.ReactNode
  label: string
  href?: string
  onClick?: () => void
}

interface EducationalMenuGridProps {
  items?: RoleMenuItem[]
  category?: PermissionCategory
  onItemClick?: (id: string) => void
  className?: string
  showHeader?: boolean
}

export default function EducationalMenuGrid({
  items,
  category,
  onItemClick,
  className = "",
  showHeader = true,
}: EducationalMenuGridProps) {
  // Convert RoleMenuItem to MenuItem with ReactNode icon
  const mapItemsToMenuItems = (items: RoleMenuItem[] | undefined): MenuItem[] => {
    if (!items) return defaultItems
    
    return items.map(item => ({
      id: item.id,
      icon: <img src={item.icon} alt={item.label.toLowerCase()} className="w-10 h-10" />,
      label: item.label,
      href: item.href
    }))
  }

  const defaultItems: MenuItem[] = [
    {
      id: "daily-monitoring",
      icon: <img src="/daily_monitoring_icon.png" alt="daily monitoring" className="w-10 h-10" />,
      label: "Daily monitoring",
    },
    {
      id: "class",
      icon: <img src="/class_icon.png" alt="class" className="w-10 h-10" />,
      label: "Class",
    },
    {
      id: "timetable",
      icon: <img src="/timetable_icon.png" alt="timetable" className="w-10 h-10" />,
      label: "Timetable",
    },
    {
      id: "statistic",
      icon: <img src="/statistic_icon.png" alt="statistic" className="w-10 h-10" />,
      label: "Statistic",
    },
    {
      id: "journal",
      icon: <img src="/journal_icon.png" alt="journal" className="w-10 h-10" />,
      label: "Journal",
    },
    {
      id: "report",
      icon: <img src="/report_icon.png" alt="report" className="w-10 h-10" />,
      label: "Report",
    },
    {
      id: "daybook",
      icon: <img src="/daybook_icon.png" alt="daybook" className="w-10 h-10" />,
      label: "Daybook",
    },
    {
      id: "announcements",
      icon: <img src="/announcements_icon.png" alt="announcements" className="w-10 h-10" />,
      label: "Announcements",
    },
  ]

  // Use items if provided, otherwise use permissions from category if provided, otherwise use default
  const menuItems = items 
    ? mapItemsToMenuItems(items) 
    : (category && category.permissions) 
      ? mapItemsToMenuItems(category.permissions) 
      : defaultItems

  const handleItemClick = (id: string) => {
    if (onItemClick) {
      onItemClick(id)
    }
  }

  return (
    <div className={`bg-white rounded-3xl p-4 ${className} flex flex-col items-center justify-center`}>
      <div className={`flex flex-col items-center gap-6 w-full p-4`}>
        {showHeader && category && (
          <Button
            variant="outline"
            className="flex justify-start items-center gap-4 rounded-[20px] px-6 py-2 h-auto border-[#4bbba3] border text-black hover:bg-brand-200 w-48 bg-brand-100"
          >
            <div className="flex-shrink-0">
              <img src={category.icon} alt={category.name.toLowerCase()} className="w-10 h-10" />
            </div>
            <span className="text-xl font-normal">{category.name}</span>
          </Button>
        )}

        {showHeader && !category && (
          <Button
            variant="outline"
            className="flex justify-start items-center gap-4 rounded-[20px] px-6 py-2 h-auto border-[#4bbba3] border text-black hover:bg-[#f0f9f7] w-48"
          >
            <div className="flex-shrink-0">
              <img src="/education_icon.png" alt="education" className="w-10 h-10" />
            </div>
            <span className="text-xl font-normal">Education</span>
          </Button>
        )}

        <div className="w-full flex flex-wrap gap-6 items-center justify-center mt-2">
          {menuItems.map((item) => (
            <Button
              key={item.id}
              variant="outline"
              onClick={() => handleItemClick(item.id)}
              className="flex justify-start items-center gap-4 rounded-[20px] px-6 py-2 h-auto border-[#4bbba3] border text-black hover:bg-[#f0f9f7] w-full md:w-[284px]"
            >
              <div className="flex-shrink-0">{item.icon}</div>
              <span className="text-xl font-normal max-sm:text-lg">{item.label}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

