"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg" | "icon";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  asChild?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/30 hover:bg-emerald-300 focus-visible:outline-emerald-300",
  secondary:
    "bg-slate-800 text-white hover:bg-slate-700 border border-slate-700 focus-visible:outline-slate-300",
  ghost:
    "bg-transparent text-slate-200 hover:bg-slate-800/60 focus-visible:outline-slate-300",
  outline:
    "border border-slate-700 text-slate-100 hover:bg-slate-800/60 focus-visible:outline-emerald-300",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-12 px-6 text-base",
  lg: "h-14 px-8 text-lg",
  icon: "h-12 w-12",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      leftIcon,
      rightIcon,
      children,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    const content = (
      <>
        {leftIcon && (
          <span className="text-lg transition-transform group-hover:-translate-y-0.5">
            {leftIcon}
          </span>
        )}
        <span>{children}</span>
        {rightIcon && (
          <span className="text-lg transition-transform group-hover:translate-x-0.5">
            {rightIcon}
          </span>
        )}
      </>
    );

    return (
      <Comp
        ref={ref}
        className={cn(
          "group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {asChild ? children : content}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export default Button;
