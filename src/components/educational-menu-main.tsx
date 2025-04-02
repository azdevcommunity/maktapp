"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { MenuItem as RoleMenuItem } from "@/lib/role-content"

interface MenuItem {
    id: string
    icon: React.ReactNode
    label: string
    href?: string
    onClick?: () => void
}

interface EducationalMenuProps {
    items?: RoleMenuItem[]
    onItemClick?: (id: string) => void
    className?: string
    expanded?: boolean
}

export default function EducationalMenuMain({ items, onItemClick, className = ""}: EducationalMenuProps) {
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
            id: "education",
            icon: <img src="/education_icon.png" alt="education" className="w-10 h-10" />,
            label: "Education",
        },
        {
            id: "academic-management",
            icon: <img src="/academic_icon.png" alt="academic" className="w-10 h-10" />,
            label: "Academic Management",
        },
        {
            id: "contact",
            icon: <img src="/contact_icon.png" alt="contact" className="w-10 h-10" />,
            label: "Contact",
        },
        {
            id: "note",
            icon: <img src="/note_icon.png" alt="note" className="w-10 h-10" />,
            label: "Note",
        },
        {
            id: "agendas",
            icon: <img src="/calendar_icon.png" alt="calendar" className="w-10 h-10" />,
            label: "Agendas",
        },
    ]

    const menuItems = mapItemsToMenuItems(items)

    const handleItemClick = (id: string) => {
        if (onItemClick) {
            onItemClick(id)
        }
    }

    return (
        <div className={`bg-white rounded-3xl p-4 ${className}`}>
            <div className={`flex flex-col items-center gap-4 w-full p-4 `}>
                <Button
                    className="flex items-center gap-2 bg-brand-100 text-black hover:bg-[#d0f0ea] rounded-[20px] py-2 h-auto border border-[#4bbba3] w-36"
                >
                    <img
                        src="/menu_icon.png"
                        alt="menu"
                        className="w-10 h-10"
                    />
                    <span className="text-xl font-normal">Menu</span>
                </Button>

                <div className="w-full flex flex-col gap-4 mt-2">
                    {menuItems.map((item) => (
                        <Button
                            key={item.id}
                            variant="outline"
                            onClick={() => handleItemClick(item.id)}
                            className="flex justify-start items-center gap-4 rounded-[20px] px-6 py-2 h-auto border-[#4bbba3] border text-black hover:bg-[#f0f9f7] w-full"
                        >
                            <div className="flex-shrink-0">{item.icon}</div>
                            <span className="text-xl font-normal max-sm:text-base break-words whitespace-pre-wrap">{item.label}</span>
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    )
}

