import { clsx } from "clsx";
import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";

// Base styles shared by all button variants
const baseStyles = "rounded-2xl px-5 py-3 transition";

// Tailwind classes keyed by visual variant
const variantStyles = {
  primary: "bg-brand-black text-white hover:opacity-90",
  secondary: "bg-brand-red text-white hover:opacity-95",
  outline: "border border-black text-black hover:bg-black hover:text-white",
  outlineLight: "border border-white text-white hover:bg-white hover:text-black",
  ghost: "text-black hover:bg-neutral-100",
} as const;

// Tailwind classes keyed by size option
const sizeStyles = { sm: "text-sm", md: "text-base", lg: "text-lg" } as const;

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variantStyles;
  size?: keyof typeof sizeStyles;
};

/**
 * Generic button component with variant and size options.
 *
 * @example
 * ```tsx
 * <Button variant="outline" size="sm">Click</Button>
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", type = "button", ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={clsx(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

