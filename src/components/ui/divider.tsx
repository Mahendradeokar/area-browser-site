import type { ComponentProps } from "react"
import { cn } from "~/lib/utils"

export const Divider = ({ className, ...delegeted }: ComponentProps<"hr">) => {
  return <hr className={cn("h-[1px] scale-y-[0.75] origin-center border-0 bg-divider my-0", className ?? "")}  {...delegeted} />
}
