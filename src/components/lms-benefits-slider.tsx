"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

type SlideData = {
  role: string
  avatar: string
  benefits: string[]
}

export default function LMSBenefitsSlider() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  const slides: SlideData[] = [
    {
      role: "Principal",
      avatar: "/principal-avatar.svg",
      benefits: [
        "For administrators, an LMS offers considerable time and cost benefits.",
        "Its user-friendly interface simplifies onboarding and training, while its robust tracking features free up administrative time for more strategic educational objectives.",
        "It is a centralized repository for assessments, communications, instructional materials, curriculum, and student records",
      ],
    },
    {
      role: "Teachers",
      avatar: "/teacher-avatar.svg",
      benefits: [
        "Teachers can create, distribute, and grade assignments efficiently in one place.",
        "The platform enables easy sharing of resources and collaboration with colleagues.",
        "Automated grading and analytics provide insights into student performance and areas needing attention.",
      ],
    },
    {
      role: "Students",
      avatar: "/student-avatar.svg",
      benefits: [
        "Students gain 24/7 access to learning materials and assignments from any device.",
        "Interactive content and personalized learning paths enhance engagement and knowledge retention.",
        "Immediate feedback on assessments helps students understand their progress and areas for improvement.",
      ],
    },
    {
      role: "Parents",
      avatar: "/parent-avatar.svg",
      benefits: [
        "Parents can monitor their child's progress, assignments, and grades in real-time.",
        "Direct communication channels with teachers improve parent-teacher collaboration.",
        "Visibility into curriculum and learning objectives helps parents better support their child's education at home.",
      ],
    },
  ]

  // Auto-slide functionality
  useEffect(() => {
    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
      }, 5000) // Change slide every 5 seconds
    }

    startAutoPlay()

    // Clean up interval on component unmount
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [slides.length])

  // Reset auto-slide timer when manually changing slides
  const resetAutoPlayTimer = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
      autoPlayRef.current = setInterval(() => {
        setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
      }, 5000)
    }
  }

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    resetAutoPlayTimer()
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    resetAutoPlayTimer()
  }

  const goToSlide = (index: number) => {
    setActiveSlide(index)
    resetAutoPlayTimer()
  }

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      nextSlide()
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      prevSlide()
    }
  }

  const paginationDotStyle = {
    width: "36px",
    borderRadius: "64px",
    border: "1px solid transparent",
    backgroundImage: `
      url('/lms-benefits-bg-2.png'),
      url('/lms-benefits-bg.png')
    `,
    backgroundOrigin: "border-box",
    backgroundClip: "padding-box, border-box",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    opacity: 0.4,
  }

  return (
    <div className="w-full px-4 sm:px-6 md:px-10 py-14 bg-white">
      <div className="max-w-screen-xl mx-auto">

        {/* Fixed header */}
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">The Benefits of Using an LMS</h1>
          <p className="text-lg text-gray-600">
            Implementing an LMS brings value to every stakeholder in education— students, teachers, administrators, and
            parents.
          </p>
        </div>

        {/* Slider container */}
        <div className="relative">
          {/* Slide content with matching border color */}
          <div
            className="rounded-2xl p-[1.5px] bg-[linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.1)),url(/lms-benefits-bg.png),url(/lms-benefits-bg-2.png)] bg-cover bg-center"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="bg-[linear-gradient(0deg,rgba(255,255,255,0.84),rgba(255,255,255,0.84)),url(/lms-benefits-bg.png),url(/lms-benefits-bg-2.png)] bg-cover bg-center rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-4 mb-4 ">
                <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 bg-white rounded-full p-1 overflow-hidde">
                  {/* Placeholder avatar - in a real implementation, you would use actual images */}
                  <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 mt-1">{slides[activeSlide].role}</h2>
                <div className="ml-auto">
                  <button className="bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    More info
                  </button>
                </div>
              </div>

              <ul className="space-y-4 pl-5">
                {slides[activeSlide].benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pagination dots container with gradient background */}
          <div className="flex justify-center mt-6 gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "transition-all duration-300",
                  activeSlide === index ? "" : "w-8 h-2 rounded-full bg-gray-300 hover:bg-gray-400",
                )}
                style={activeSlide === index ? paginationDotStyle : {}}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>

  )
}