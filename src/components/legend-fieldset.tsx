import { ComponentProps, ElementType, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface LegendFieldsetProps extends ComponentProps<"legend"> {
  children: ReactNode
  icon: ElementType
}

export const LegendFieldset = ({ children, icon: Icon, className }: LegendFieldsetProps) => {
  return (
    <legend className={twMerge("mb-4 flex w-full items-center justify-center gap-2 border-b border-green-300 pb-2 text-center font-medium text-green-600", className)}>
      <Icon />
      {children}
    </legend>
  )
}