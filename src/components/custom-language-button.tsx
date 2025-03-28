import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface LanguageButtonProps extends ButtonProps {
  language: string
}

export function LanguageButton({ language, className, ...props }: LanguageButtonProps) {
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

