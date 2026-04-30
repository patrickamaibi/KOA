import * as React from "react"
import { cn } from "../../utils/cn"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost"
  size?: "default" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-display tracking-widest uppercase transition-all duration-300 rounded-[4px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-koa-accent disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-koa-gradient shadow-glow-green text-white hover:opacity-90 relative overflow-hidden group": variant === "primary",
            "border-2 border-koa-accent text-koa-accent hover:bg-koa-accent hover:text-koa-dark": variant === "ghost",
            "h-10 px-6 py-2 text-sm": size === "default",
            "h-12 px-8 py-3 text-base": size === "lg",
          },
          className
        )}
        {...props}
      >
        {variant === "primary" && (
          <span className="absolute top-0 left-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12" />
        )}
        {props.children}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button }
