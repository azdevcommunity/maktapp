import React from "react"
import { cn } from "@/lib/utils"

interface SpacerProps {
  x?: number
  y?: number
  className?: string
}

/**
 * Spacer component for adding horizontal or vertical spacing
 * 
 * @param x - Horizontal spacing in pixels (optional)
 * @param y - Vertical spacing in pixels (optional)
 * @param className - Additional CSS classes (optional)
 */
const Spacer: React.FC<SpacerProps> = ({ 
  x = 0, 
  y = 0, 
  className 
}) => {
  return (
    <div 
      className={cn(className)}
      style={{ 
        width: x ? `${x}px` : undefined,
        height: y ? `${y}px` : undefined,
        minWidth: x ? `${x}px` : undefined,
        minHeight: y ? `${y}px` : undefined,
        display: "block"
      }}
      aria-hidden="true"
    />
  )
}

export { Spacer } 