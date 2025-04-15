"use client"

import { useState, useRef, useEffect } from "react"
import { AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"
import { Spacer } from "./ui/spacer"

type Tab = {
  id: string
  label: string
  content: {
    title: string
    warning?: {
      text: string
    }
    description: string
    image: string
  }
}

const tabs: Tab[] = [
  {
    id: "daily-monitoring",
    label: "Daily monitoring",
    content: {
      title: "Daily monitoring",
      warning: {
        text: "Limited control over learning during the school day",
      },
      description:
        "Daily monitoring allows management to monitor the teacher's lesson plan, the teaching resources to be used in the lesson, teaching methods, assigned tasks and student attendance, improving the quality of teaching and creating an environment of transparency.",
      image: "/infosections/daily_monitoring.svg",
    },
  },
  {
    id: "statistic",
    label: "Statistic",
    content: {
      title: "Statistics",
      warning: {
        text: "Inefficient administrative processes:",
      },
      description:
        "LMS can simplify administrative processes such as record keeping, grading, and communication between teachers, students, and parents. It can save schools time and resources and improve overall efficiency",
      image: "/infosections/statistics.svg",
    },
  },
  {
    id: "class",
    label: "Class",
    content: {
      title: "Class performance",
      warning: {
        text: "Limited access to student data",
      },
      description:
        "An LMS can provide detailed analytics on student performance, allowing teachers to identify strengths and weaknesses and tailor instruction accordingly. This can help ensure that students receive the support they need to succeed.",
      image: "/infosections/class_performance.svg",
    },
  },
  {
    id: "timetable",
    label: "Teacher's timetable",
    content: {
      title: "Teacher's timetable",
      warning: {
        text: "Limited access to professional development",
      },
      description:
        "An LMS can provide teachers with access to ongoing professional development and training opportunities, regardless of their location. This can help to improve the quality of teaching and enhance teacher skills, ultimately leading to better learning outcomes for students.",
      image: "/infosections/timetable.svg",
    },
  },
  {
    id: "thematic-plan",
    label: "Thematic plan",
    content: {
      title: "Thematic plan",
      warning: {
        text: "Limited access to teaching resources for teachers reduces the quality of teaching, creating a resource gap",
      },
      description:
        "The ability of a teacher to share teaching resources with other teachers, creating a wealth of resources, improves the quality of teaching and gives teachers experience",
      image: "/infosections/thematic_plan.svg",
    },
  },
  {
    id: "performance",
    label: "Student performance",
    content: {
      title: "Student performance",
      warning: {
        text: "Passive participation of parents in the educational process",
      },
      description:
        "LMS provides real-time updates on students' academic performance and improves communication with teachers. This feature opens the door to effective collaboration, allowing parents to actively participate in their students' learning process.",
      image: "/infosections/student_performance.svg",
    },
  },
]

export default function TabbedInterface() {
  const [activeTab, setActiveTab] = useState(tabs[0].id)
  const tabsRef = useRef<HTMLDivElement>(null)
  const activeTabRef = useRef<HTMLButtonElement>(null)
  const isMobile = useMobile()

  // Find the active tab content
  const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content

  // Scroll active tab into view on mobile
  useEffect(() => {
    if (isMobile && activeTabRef.current && tabsRef.current) {
      const tabElement = activeTabRef.current
      const container = tabsRef.current

      // Calculate the scroll position to center the active tab
      const scrollLeft = tabElement.offsetLeft - container.clientWidth / 2 + tabElement.clientWidth / 2

      // Scroll to the calculated position
      container.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      })
    }
  }, [activeTab, isMobile])

  // Add this useEffect to center tabs initially on mobile
  useEffect(() => {
    if (isMobile && tabsRef.current) {
      // Center the tabs container initially
      const container = tabsRef.current
      const innerContainer = container.firstElementChild as HTMLElement

      if (innerContainer) {
        const initialScrollLeft = (innerContainer.scrollWidth - container.clientWidth) / 2

        container.scrollLeft = initialScrollLeft
      }
    }
  }, [isMobile])

  return (
    <div className="bg-[#F2F2F0] px-4 sm:px-6 md:px-10">
      <div className="w-full max-w-screen-xl mx-auto bg-white rounded-3xl overflow-hidden">
        {/* Tabs navigation - sticky top positioning */}
        <div className="sticky top-0 z-10 py-4 mt-10 bg-white">
          {/* Desktop view - centered without scrolling */}
          <div className="hidden md:flex justify-center px-4 sm:px-6 md:px-10">
            <div className="flex gap-2 flex-wrap justify-center">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-normal whitespace-nowrap transition-colors",
                    activeTab === tab.id
                      ? "bg-brand-500 text-white"
                      : "bg-brand-500/10 text-gray-700 hover:bg-brand-500/15",
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile view - scrollable with centered initial view */}
          <div
            ref={tabsRef}
            className="flex md:hidden overflow-x-auto gap-2 no-scrollbar pb-1 px-4 sm:px-6"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="flex gap-2 min-w-max px-1 mx-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  ref={tab.id === activeTab ? activeTabRef : null}
                  data-tab-id={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-normal whitespace-nowrap transition-colors",
                    activeTab === tab.id
                      ? "bg-brand-500 text-white"
                      : "bg-brand-500/10 text-gray-700 hover:bg-brand-500/15",
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab content */}
        {activeTabContent && (
          <div className="px-6 pb-8 max-sm:px-4 pt-5">
            <h2 className="text-2xl font-medium text-center mb-4">{activeTabContent.title}</h2>

            {/* Warning banner */}
            {activeTabContent.warning && (
              <div className="flex items-center justify-center mb-4">
                <div className="bg-red-100 text-red-500 border-red-600 border px-4 py-2 rounded-md flex items-center gap-2 max-w-fit mx-auto">
                  <AlertCircle className="w-4 h-4" />
                  <span>{activeTabContent.warning.text}</span>
                </div>
              </div>
            )}

            {/* Description */}
            <p className="text-center text-gray-700 mb-6 max-w-2xl mx-auto">{activeTabContent.description}</p>

            {/* Image within MacBook Mockup */}
            <div className="flex justify-center">
              {/* Container for mockup and content */}
              <div className="relative w-full max-w-3xl aspect-[16/10]"> {/* Adjust max-w and aspect ratio as needed */}
                {/* MacBook Mockup Image (as background or foreground) */}
                <img
                  src="/daily_monitoring.svg" // Make sure this path is correct
                  alt="MacBook Mockup"
                  className="absolute inset-0 w-full h-full object-contain z-0" // Use object-contain or object-cover
                />
                {/* Content Image positioned inside the mockup screen */}
                <div className="absolute inset-0 flex items-center justify-center z-10 p-[6%] pt-[10px] ml-1 lg:p-[6%] lg:pt-5 md:p-[6%] md:pt-5"> {/* Adjust padding based on mockup's screen bezel */}
                  <img
                    src={activeTabContent.image || "/auth_carousel_1.png"}
                    alt={activeTabContent.title}
                    className="object-contain w-full h-full" // Make content image fill the padded area
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Spacer y={100} />
    </div>
  )
}

