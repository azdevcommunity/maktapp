import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface CardProps {
  title: string
  imageSrc: string
  imageAlt: string
  className?: string
}

export default function FeatureCardWImage({ title, imageSrc, imageAlt, className }: CardProps) {
  return (
    <Card className={cn("overflow-hidden rounded-3xl bg-white h-full flex flex-col p-8 border-none !shadow-none", className)}>
      <h2 className="text-[28px] font-medium text-gray-800  mb-8">{title}</h2>

      <div className="relative flex-grow flex items-center justify-center">
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt}
          width={320}
          height={227}
          className="object-contain"
        />
      </div>
    </Card>
  )
}

