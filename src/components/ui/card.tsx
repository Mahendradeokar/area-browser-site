import type { ComponentProps } from "react"

export const Card = ({ className, children, ...delegeted }: ComponentProps<"div">) => {
  return <div className={className} {...delegeted}>
    {children}
  </div>
}

export const CardTitle = ({ className, children, ...delegeted }: ComponentProps<"h2">) => {
  return (
    <h2 className={className} {...delegeted}>
      {children}
    </h2>
  )
}

export const CardDescription = ({ className, children, ...delegeted }: ComponentProps<"p">) => {
  return (
    <p className={className} {...delegeted}>
      {children}
    </p>
  )
}

export const CardContent = ({ className, children, ...delegeted }: ComponentProps<"div">) => {
  return (
    <div className={className} {...delegeted}>
      {children}
    </div>
  )
}
