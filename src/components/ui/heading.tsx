import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "~/lib/utils";

// Waste of time - tailwind as a feature which will do this fuck

const textVariants = cva([], {
  variants: {
    variant: {
      h1: "font-display tracking-display leading-display",
      h2: "font-h2 tracking-h2 leading-h2",
      h3: "font-h3 tracking-h3 leading-h3",
      h4: "font-h4 tracking-h4 leading-h4",
      p: "font-paragraph tracking-paragraph leading-paragraph",
      caption: "font-caption tracking-caption leading-caption",
      text: "font-text tracking-text leading-text",
    }
  },
  defaultVariants: {
    variant: "h1"
  }
})

type TextOwnProps = {
  className?: string;
} & VariantProps<typeof textVariants>

type TextProps<As extends React.ElementType> = TextOwnProps & {
  as: As;
} & Omit<React.ComponentPropsWithoutRef<As>, keyof TextOwnProps | "as">;

export function Text<As extends React.ElementType = "p">(
  props: TextProps<As>
) {
  const {
    as,
    variant,
    className,
    ...restProps
  } = props;

  const Component = as ?? "h1";

  return (
    <Component
      {...(restProps as React.ComponentPropsWithoutRef<As>)}
      className={cn(
        textVariants({ variant, className }),
      )}
    />
  );
}
