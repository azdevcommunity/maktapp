"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
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
  const [open, setOpen] = useState(false)

  return (
    <header className={cn("w-full text-white", className)} style={{ backgroundColor: "#000000A3" }}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img src={logo.src} alt={logo.alt} width={62} height={62} />
            </a>
          </div>

          {/* Desktop Navigation */}
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

          {/* Action Buttons */}
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

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-gray-900 text-white border-gray-800">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="text-gray-200 hover:text-white transition-colors py-2 text-lg"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
                <div className="flex flex-col space-y-4 mt-8 pt-4 border-t border-gray-800">
                  {languageSelector && (
                    <Button
                      variant="outline"
                      className="rounded-full border-gray-600 text-sm font-medium h-9 px-4 bg-transparent hover:bg-gray-800 hover:text-white self-start"
                      onClick={() => languageSelector.onLanguageChange?.(languageSelector.currentLanguage)}
                    >
                      {languageSelector.currentLanguage}
                    </Button>
                  )}

                  {loginButton && (
                    <Button asChild className="bg-teal-500 hover:bg-teal-600 text-white self-start">
                      <a
                        href={loginButton.href || "#"}
                        onClick={() => {
                          setOpen(false)
                          loginButton.onClick?.()
                        }}
                      >
                        {loginButton.text}
                      </a>
                    </Button>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

