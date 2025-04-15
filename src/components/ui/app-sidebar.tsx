import * as React from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useLocation, Link } from "react-router-dom"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

// Menu items data
const educationItems = [
  {
    title: "Daily monitoring",
    icon: "i-building-2",
    url: "#",
  },
  {
    title: "Statistics",
    icon: "i-bar-chart-2",
    url: "/dashboard/statistics",
    isActive: true,
  },
  {
    title: "Timetable",
    icon: "i-calendar",
    url: "#",
  },
  {
    title: "Classes",
    icon: "i-users",
    url: "#",
  },
  {
    title: "Journal",
    icon: "i-book-open",
    url: "#",
  },
  {
    title: "Report",
    icon: "i-file-text",
    url: "#",
  },
  {
    title: "Announcements",
    icon: "i-megaphone",
    url: "#",
  },
]

const managementItems = [
  {
    title: "Contact",
    icon: "i-contact",
    url: "#",
    isActive: false,
  },
  {
    title: "Note",
    icon: "i-clipboard",
    url: "#",
    isActive: false,
  },
  {
    title: "Agenda",
    icon: "i-calendar-days",
    url: "#",
    isActive: false,
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [educationOpen, setEducationOpen] = React.useState(true)
  const [managementOpen, setManagementOpen] = React.useState(false)
  const location = useLocation()

  // Check if item is active based on current pathname
  const isActive = (url: string) => {
    return location.pathname === url
  }

  return (
    <Sidebar {...props} className="border-r ">
      <SidebarHeader className="flex flex-row items-center justify-center py-6 space-x-2 !bg-[#FCFCFD]">
        <img src="/logo.svg" alt="E-Maktapp" className="w-10 h-10" />
        <div className="text-2xl font-semibold text-gray-800">E-Maktapp</div>
      </SidebarHeader>
      <SidebarContent className="!bg-[#FCFCFD]">
        <Collapsible
          open={educationOpen}
          onOpenChange={setEducationOpen}
          className="w-full transition-all duration-200 ease-in-out"
        >
          <SidebarGroup>
            <CollapsibleTrigger asChild>
              <SidebarGroupLabel className="flex cursor-pointer items-center justify-between py-3 text-md font-medium hover:bg-gray-100 text-gray-800 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50">
                <span className="flex items-center gap-2">
                  <span>Education</span>
                </span>
                <span className="transition-transform duration-200">
                  {educationOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </span>
              </SidebarGroupLabel>
            </CollapsibleTrigger>
            <CollapsibleContent className="animate-accordion-down">
              <SidebarGroupContent>
                <SidebarMenu>
                  {educationItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        isActive={isActive(item.url)}
                        className={cn(
                          "my-1 py-3",
                          isActive(item.url) && "!bg-brand-500 !hover:bg-brand-600 !text-white rounded-xl",
                          !isActive(item.url) && "hover:!bg-brand-100"
                        )}
                      >
                        <Link to={item.url} className="flex items-center gap-2">
                          <span className={cn(item.icon, "mr-2 inline-block h-5 w-5")}>
                            {item.title === "Daily monitoring" && <BuildingIcon />}
                            {item.title === "Statistics" && <StatisticsIcon />}
                            {item.title === "Timetable" && <TimetableIcon />}
                            {item.title === "Classes" && <ClassesIcon />}
                            {item.title === "Journal" && <JournalIcon />}
                            {item.title === "Report" && <ReportIcon />}
                            {item.title === "Announcements" && <AnnouncementsIcon />}
                          </span>
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

        <Collapsible
          open={managementOpen}
          onOpenChange={setManagementOpen}
          className="w-full transition-all duration-200 ease-in-out"
        >
          <SidebarGroup>
            <CollapsibleTrigger asChild>
              <SidebarGroupLabel className="flex cursor-pointer items-center justify-between py-3 text-md font-medium hover:bg-gray-100 text-gray-800 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50">
                <span className="flex items-center gap-2">
                  <span>Management</span>
                </span>
                <span className="transition-transform duration-200">
                  {managementOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </span>
              </SidebarGroupLabel>
            </CollapsibleTrigger>
            <CollapsibleContent className="animate-accordion-down">
              <SidebarGroupContent>
                <SidebarMenu>
                  {managementItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild className={cn(
                          "my-1 py-3",
                          isActive(item.url) && "!bg-brand-500 !hover:bg-brand-600 !text-white rounded-xl",
                          !isActive(item.url) && "hover:!bg-brand-100"
                        )}>
                        <Link to={item.url} className="flex items-center gap-2">
                          <span className={cn(item.icon, "mr-2 inline-block h-5 w-5")}>
                            {item.title === "Contact" && <ContactIcon />}
                            {item.title === "Note" && <NoteIcon />}
                            {item.title === "Agenda" && <AgendaIcon />}
                          </span>
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}

// Custom icons to match the design
function BuildingIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 22V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v20" />
      <path d="M6 12H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2" />
      <path d="M18 12h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2" />
      <path d="M10 7h4" />
      <path d="M10 11h4" />
      <path d="M10 15h4" />
    </svg>
  )
}

function StatisticsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 20V10" />
      <path d="M12 20V4" />
      <path d="M6 20v-6" />
    </svg>
  )
}

function TimetableIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}

function ClassesIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function JournalIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}

function ReportIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
  )
}

function AnnouncementsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 11h18" />
      <path d="M5 6h14" />
      <path d="M7 16h10" />
    </svg>
  )
}

function ContactIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <circle cx="12" cy="10" r="2" />
      <line x1="8" x2="8" y1="2" y2="4" />
      <line x1="16" x2="16" y1="2" y2="4" />
    </svg>
  )
}

function NoteIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
      <rect width="6" height="4" x="9" y="3" rx="2" />
      <path d="M9 12h6" />
      <path d="M9 16h6" />
    </svg>
  )
}

function AgendaIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}
