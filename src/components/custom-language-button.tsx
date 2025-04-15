import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

interface LanguageButtonProps extends ButtonProps {
  language: string
  isMobile?: boolean
}

export function LanguageButton({ language, className, isMobile = false, ...props }: LanguageButtonProps) {
  if (isMobile) {
    return (
      <Button
        variant="ghost"
        className={cn(
          "flex items-center rounded-md px-2 py-1 text-white !hover:bg-transparent text-md !gap-0",
          className,
        )}
        {...props}
      >
        {language} <ChevronDown className=" !h-6 !w-6" />
      </Button>
    )
  }

  return (
    <Button
      variant="outline"
      className={cn(
        "rounded-xl border-white text-sm font-medium h-9 px-3 bg-transparent hover:bg-white hover:text-black",
        className,
      )}
      {...props}
    >
      {language}
    </Button>
  )
}

