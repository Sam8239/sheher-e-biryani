"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "accent" | "ghost" | "glass" | "none";
  size?: "default" | "none";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", children, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center gap-2 font-medium leading-[1] cursor-pointer rounded-full border transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97] [&>svg]:shrink-0";

    const variants = {
      primary: "bg-primary text-primary-foreground border-primary hover:brightness-110",
      outline: "bg-transparent text-primary border-primary/30 hover:bg-primary/5",
      accent: "bg-accent text-accent-foreground border-accent hover:brightness-110",
      ghost: "bg-transparent border-transparent hover:bg-white/10 text-white",
      glass: "bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/15",
      none: "bg-transparent border-transparent",
    };

    const sizes = {
      default: "h-10 px-6 text-sm",
      none: "",
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
export type { ButtonProps };
