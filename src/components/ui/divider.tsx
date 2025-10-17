import type { ComponentProps } from "react"
import { cn } from "~/lib/utils"

export const Divider = ({ className, ...delegeted }: ComponentProps<"hr">) => {
  return <hr className={cn("h-[2px] border-0 bg-divider my-0", className ?? "")}  {...delegeted} />
}
