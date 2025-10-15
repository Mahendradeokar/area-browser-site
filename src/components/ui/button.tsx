import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps } from "react";
import { cn } from "~/lib/utils";

const buttonVariants = cva("inline-flex justify-center items-center text-center focus:ring active:scale-95 transition-all rounded-full gap-0.5 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] hover:bg-secondary text-background text-link font-secondary font-bold", {
  variants: {
    variant: {
      primary: "bg-primary",
      secondary: "bg-primary-light "
    },
    size: {
      md: "h-12 py-4 px-6 has-[>svg]:px-4"
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md"
  }
})


export const Button = ({ className, variant, size, children, ...delegeted }: ComponentProps<"button"> & VariantProps<typeof buttonVariants>) => {
  return <button className={cn(buttonVariants({ variant, size, className }))} {...delegeted}>
    {children}
  </button>
}
