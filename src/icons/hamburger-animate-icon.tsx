import type { ComponentProps } from "react"
import { cn } from "~/lib/utils"

const Bar = ({ className }: ComponentProps<"div">) => {
  return (
    <div className={cn("h-(--bar-height) opacity-100 bg-foreground transform origin-center transition-transform ease-out-emil duration-300", className)}></div>
  )
}

export const HamberAnimateIcon = ({ className, isOpen }: ComponentProps<"div"> & { isOpen: boolean }) => {
  return (
    <div className={cn("grid gap-(--bar-height)", className)} style={{
      ["--bar-height" as string]: "max(1px, 20%)" // This will be used in gap also due to specificity war between class and inline styles. spoiler inline style wins
    }}>
      {isOpen ? (
        <>
          <Bar className="rotate-45 translate-y-[200%]" />
          <Bar className="opacity-0" />
          <Bar className="-rotate-45 -translate-y-[200%]" />
        </>
      ) : (
        <>
          <Bar />
          <Bar />
          <Bar />
        </>
      )}
    </div>
  )
}
