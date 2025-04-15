"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu"
import { LanguageButton } from "./custom-language-button"

export interface NavItem {
  label: string
  href: string
}

export interface HeaderProps {
  logo?: {
    src: string
    alt: string
    text?: string
  }
  navItems: NavItem[]
  languageSelector?: {
    currentLanguage: string
    onLanguageChange?: (language: string) => void
  }
  loginButton?: {
    text: string
    onClick?: () => void
    href?: string
  }
  className?: string
}

const Header = ({
  logo = {
    src: "/logo.svg",
    alt: "Logo",
    text: "makt'app",
  },
  navItems = [
    { label: "Əsas səhifə", href: "/" },
    { label: "Rollar", href: "/roles" },
    { label: "Əlaqə", href: "/contact" },
    { label: "Məktəb qeydiyyatı", href: "/register" },
  ],
  languageSelector = {
    currentLanguage: "AZ",
    onLanguageChange: () => {},
  },
  loginButton = {
    text: "Daxil ol",
    href: "/login",
    onClick: () => {},
  },
  className,
}: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const headerHeightClass = "h-16"
  const backgroundColor = "#000000A3"

  useEffect(() => {
    const elements = [document.documentElement, document.body];
    
    if (isMobileMenuOpen) {
      elements.forEach(el => {
        el.style.overflow = 'hidden';
        el.style.height = '100%';
        el.style.position = 'relative';
      });
    } else {
      elements.forEach(el => {
        el.style.overflow = '';
        el.style.height = '';
        el.style.position = '';
      });
    }

    return () => {
      elements.forEach(el => {
        el.style.overflow = '';
        el.style.height = '';
        el.style.position = '';
      });
    }
  }, [isMobileMenuOpen])

  return (
    <div className="relative z-10 w-full text-white" style={{ backgroundColor }}>
      <header className={cn(headerHeightClass, className)}>
        <div className={cn("container mx-auto px-4 flex items-center justify-between", headerHeightClass)}>
          <div className="flex items-center md:flex-1">
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-white mr-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="!h-6 !w-6" /> : <Menu className="!h-6 !w-6" />}
              </Button>
            </div>
            <a href="/" className="hidden md:flex items-center">
              <img src={logo.src} alt={logo.alt} width={62} height={62} />
            </a>
          </div>
          <div className="flex items-center justify-center flex-1">
            <a href="/" className="flex items-center md:hidden">
              <img src={logo.src} alt={logo.alt} width={50} height={50} />
            </a>
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList className="flex items-center space-x-8">
                {navItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      href={item.href}
                      className="text-gray-200 hover:text-white transition-colors text-sm font-medium"
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex items-center justify-end md:flex-1">
            <div className="md:hidden">
              {languageSelector && (
                <LanguageButton
                  language={languageSelector.currentLanguage}
                  onClick={() => languageSelector.onLanguageChange?.(languageSelector.currentLanguage)}
                  isMobile={true}
                />
              )}
            </div>
            <div className="hidden md:flex items-center space-x-4">
              {languageSelector && (
                <LanguageButton
                  language={languageSelector.currentLanguage}
                  onClick={() => languageSelector.onLanguageChange?.(languageSelector.currentLanguage)}
                />
              )}
              {loginButton && (
                <Button asChild className="bg-teal-500 hover:bg-teal-600 text-white">
                  <a href={loginButton.href || "#"} onClick={loginButton.onClick}>
                    {loginButton.text}
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu integrated into the header */}
      <div 
        className={cn(
          "md:hidden container mx-auto px-4 flex flex-col items-center justify-center",
          "transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "opacity-100 py-8 " : "opacity-0 h-0 py-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center space-y-6 text-xl">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-gray-200 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-8 flex flex-col items-center space-y-4">
          {loginButton && (
            <Button asChild className="bg-teal-500 hover:bg-teal-600 text-white px-16 py-3 rounded-xl text-sm ">
              <a
                href={loginButton.href || "#"}
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  loginButton.onClick?.()
                }}
              >
                {loginButton.text}
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header

