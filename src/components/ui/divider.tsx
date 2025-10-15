import type { ComponentProps } from "react"

export const Divider = ({ className, ...delegeted }: ComponentProps<"hr">) => {
  return <hr className="h-[1px] scale-y-[0.75] origin-center border-0 bg-divider my-0"  {...delegeted} />
}
