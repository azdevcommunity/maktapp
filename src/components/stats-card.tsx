"use client"

import type { FC } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import RadioButtonIcon from "@/components/icons/RadioButtonIcon"

interface StatItem {
    label: string
    value: number
    color: "primary" | "secondary"
}

interface StatsCardProps {
    title?: string
    leftSection: {
        title: string
        percentage: number
        stats: StatItem[]
    }
    rightSection: {
        title: string
        percentage: number
        stats: StatItem[]
    }
}

const ProgressCircle: FC<{ percentage: number; color: "primary" | "secondary" }> = ({ percentage, color }) => {
    const radius = 50
    const strokeWidth = 20
    const circumference = 2 * Math.PI * radius

    let strokeDashoffset;
    if (percentage <= 0) {
        strokeDashoffset = circumference;
    } else if (percentage >= 100) {
        strokeDashoffset = 0;
    } else {
        const baseOffset = circumference * (1 - percentage / 100);
        strokeDashoffset = baseOffset + strokeWidth;
    }

    return (
        <div className="relative w-40 h-40 flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 150 150">
                <circle
                    cx="75"
                    cy="75"
                    r={radius}
                    fill="none"
                    stroke={color === "primary" ? "#B3E7E3" : "#B3E7E3"}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                />
                <circle
                    cx="75"
                    cy="75"
                    r={radius}
                    fill="none"
                    stroke={color === "primary" ? "#0AA89E" : "#0AA89E"}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    transform="rotate(-90 75 75)"
                    strokeLinecap="round"
                />
            </svg>
            <div className="absolute text-2xl font-medium">{percentage}%</div>
        </div>
    )
}

const StatLegendItem: FC<StatItem> = ({ label, value, color }) => {
    return (
        <div className="flex items-center gap-1 bg-white rounded-full px-4 pl-2 py-1 whitespace-nowrap">
            <div className="flex items-center gap-1.5">
                <div
                    className={`w-4 h-4 rounded-full  ${color === "primary"
                        ? label.toLowerCase().includes("completed")
                            ? "bg-brand-500"
                            : "bg-brand-200"
                        : label.toLowerCase().includes("participating")
                            ? "bg-brand-500"
                            : "bg-brand-200"
                        }`}
                />
                <span className="text-gray-700">{label}</span>
            </div>
            <span className="ml-1">{value}</span>
        </div>
    )
}

export function StatsCard({ title, leftSection, rightSection }: StatsCardProps) {
    const [isClicked, setIsClicked] = useState(false)

    const handleClick = () => {
        setIsClicked(!isClicked)
    }

    return (
        <Card
            className={`relative w-full max-w-xl border max-h-96 !rounded-3xl cursor-pointer transition-colors duration-200 
                ${isClicked ? "bg-brand-100 border-brand-300" : "bg-gray-100"}`}
            onClick={handleClick}
        >
            {isClicked && (
                <div className="absolute top-8 right-4 text-brand-500">
                    <RadioButtonIcon />
                </div>
            )}
            {title && (
                <CardHeader className="pb-0 ml-3">
                    <Badge
                        variant="outline"
                        className={`w-fit border-brand-800 text-brand-800 hover:bg-brand-50 px-4 py-2 text-md rounded-lg font-medium select-none 
                            ${isClicked ? "bg-brand-400 border-transparent text-white" : "bg-brand-100"}`}
                    >
                        {title}
                    </Badge>
                </CardHeader>
            )}
            <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6 relative">
                    {/* Add vertical divider that only shows on md screens and up */}
                    <div className="absolute hidden md:block w-px bg-gray-200 left-1/2 top-[32px] bottom-0" />

                    <div className="">
                        <div className="mx-3">
                            <h2 className="text-lg mb-1">{leftSection.title}</h2>
                            <div className="border-t border-gray-200" />
                        </div>
                        <div className="flex flex-col items-center">
                            <ProgressCircle percentage={leftSection.percentage} color="primary" />
                            <div className="flex flex-col gap-2">
                                {leftSection.stats.map((stat, index) => (
                                    <StatLegendItem key={index} {...stat} />
                                ))}
                            </div>
                        </div>
                    </div>


                    <div className="w-full">
                        <div className="mx-3">
                            <h2 className="text-lg mb-1">{rightSection.title}</h2>
                            <div className="border-t border-gray-200" />
                        </div>
                        <div className="flex flex-col items-center">
                            <ProgressCircle percentage={rightSection.percentage} color="secondary" />
                            <div className="flex flex-col gap-2 justify-center items-center">
                                {rightSection.stats.map((stat, index) => (
                                    <StatLegendItem key={index} {...stat} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
