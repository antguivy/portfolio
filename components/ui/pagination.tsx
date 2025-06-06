import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-hidden focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-2xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-2xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-2xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-2xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-8 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

type TButtonRef = HTMLButtonElement;
type TButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & 
  VariantProps<typeof buttonVariants> & { 
    asChild?: boolean; 
    isLoading?: boolean;
  };

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: TButtonProps) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

// Asegurar que los variants del ButtonGroup coincidan con los del Button
const buttonGroupVariants = cva("inline-flex", {
  variants: {
    variant: {
      default: "",
      destructive: "",
      outline: "",
      secondary: "",
      ghost: "",
      link: "",
    },
    size: {
      default: "",
      sm: "",
      lg: "",
      icon: "",
    },
  },
  defaultVariants: {
    variant: "outline",
    size: "sm",
  },
});

interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof buttonGroupVariants> {}

function ButtonGroup({ 
  className, 
  variant = "outline", 
  size = "sm", 
  children, 
  ...props 
}: ButtonGroupProps) {
  const groupClasses = cn(buttonGroupVariants({ variant, size, className }));

  return (
    <div className={groupClasses} {...props}>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement<TButtonProps>(child) && child.type === Button) {
          const isIconOnly = React.Children.count(child.props.children) === 1 && React.isValidElement(child.props.children);
          
          // Asegurarse de que los tamaños de iconos sean válidos
          let buttonSize = size;
          if (isIconOnly && (index === 0 || index === React.Children.count(children) - 1)) {
            buttonSize = "icon";
          }

          return React.cloneElement(child, {
            variant,
            size: buttonSize,
            className: cn(
              child.props.className,
              "first:rounded-r-none last:rounded-l-none [&:not(:first-child):not(:last-child)]:rounded-none",
              index !== 0 && "-ml-px"
            ),
          });
        }
        return child;
      })}
    </div>
  );
}

export { Button, ButtonGroup, buttonVariants }