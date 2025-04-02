"use client"

import { useState, useEffect } from "react"
import ArrowLeft from "@/components/icons/ArrowLeft"
import ArrowRight from "@/components/icons/ArrowRight"
import { SliderImage } from "@/lib/role-content"

interface StatisticsSliderProps {
  images: SliderImage[]
  className?: string
}

export default function StatisticsSlider({ 
  images, 
  className = "" 
}: StatisticsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [, setIsMobile] = useState(false)

  // Check for mobile view on component mount and window resize
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

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className={`bg-white rounded-3xl md:px-32 px-4 md:py-12 py-7 ${className}`}>
      {/* Desktop layout - buttons on sides of image */}
      <div className="hidden md:flex justify-center items-center space-x-10">
        <div className="flex justify-center space-x-4">
          <button onClick={prevSlide} aria-label="Previous slide">
            <ArrowLeft width={50} height={50}/>
          </button>
        </div>
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          width={800}
          height={500}
          className="w-full h-auto rounded-lg border"
        />
        <div className="flex justify-center space-x-4">
          <button onClick={nextSlide} aria-label="Next slide">
            <ArrowRight width={50} height={50}/>
          </button>
        </div>
      </div>

      {/* Mobile layout - image on top, buttons below */}
      <div className="flex md:hidden flex-col items-center">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          width={800}
          height={500}
          className="w-full h-auto rounded-lg border mb-6"
        />
        <div className="flex justify-center space-x-4">
          <button onClick={prevSlide} className="rounded-full p-2 pb-0" aria-label="Previous slide">
            <ArrowLeft width={24} height={24}/>
          </button>
          <button onClick={nextSlide} className="rounded-full p-2 pb-0" aria-label="Next slide">
            <ArrowRight width={24} height={24}/>
          </button>
        </div>
      </div>
    </div>
  )
} 