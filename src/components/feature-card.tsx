import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface CardProps {
    title: string
    className?: string
    description: string[]
}

export const FeatureCard: React.FC<CardProps> = ({ title, description, className }) => {
    return (
        <Card className={cn("overflow-hidden rounded-3xl bg-white h-full flex flex-col p-8 border-none !shadow-none", className)}>
            <h2 className="text-[28px] font-medium text-gray-800  mb-8">{title}</h2>
            <div className="relative flex-grow flex items-start justify-start flex-col space-y-2 !whitespace-break-spaces">
                {description.map((desc: string) => {
                    return <div className="text-gray-800 text-xl">{desc}</div>
                })}
            </div>

        </Card>
    )
}

