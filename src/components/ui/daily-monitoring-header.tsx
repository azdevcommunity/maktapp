import type React from "react"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import SearchIcon from "@/components/icons/SearchIcon"
import BellIcon from "@/components/icons/BellIcon"

interface HeaderProps {
  userName?: string
  userDescription?: string
  userAvatarUrl?: string
  onSearch?: (query: string) => void
  currentLanguage?: string
  onLanguageChange?: (language: string) => void
  className?: string
  style?: React.CSSProperties
}

export function DailyMonitoringHeader({
  userName = "Name Surname",
  userDescription = "Lorem ipsum dolor",
  userAvatarUrl = "/images/pp_img.jpg",
  onSearch = () => {},
  currentLanguage = "EN",
  onLanguageChange = () => {},
  className = "",
  style = {},
}: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchQuery)
  }

  return (
    <header className={`sticky top-0 z-50 py-3 px-4 flex items-center justify-between border-b border-gray-100 bg-[#FCFCFD] ${className}`} style={style}>
      <div className="relative w-80 max-w-md">
        <form onSubmit={handleSearch}>
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 rounded-md border border-[#CECFD2] focus:outline-none focus:ring-1 focus:ring-[#CECFD2]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </form>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          className="rounded-sm px-3 py-2 h-auto font-medium text-sm"
          onClick={() => onLanguageChange(currentLanguage === "EN" ? "FR" : "EN")}
        >
          {currentLanguage}
        </Button>

        <Button variant="ghost" size="icon" className="rounded-full">
          <BellIcon className="h-5 w-5 text-gray-600" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2 p-0 h-auto">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full overflow-hidden">
                  <img
                    src={userAvatarUrl  }
                    alt="User avatar"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="font-medium text-sm">{userName}</p>
                  <p className="text-xs text-gray-500">{userDescription}</p>
                </div>
                <ChevronDown className="h-4 w-4 text-gray-400 ml-1" />
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
