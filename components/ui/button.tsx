import { clsx } from "clsx";
import type { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'outlineLight';
  size?: 'sm' | 'md' | 'lg';
};
export function Button({ className, variant="primary", size="md", ...props }: Props) {
  // Base styles shared by all button variants
  const base = "rounded-2xl px-5 py-3 transition";

  // Tailwind classes keyed by visual variant
  const variants = {
    primary: "bg-brand-black text-white hover:opacity-90",
    secondary: "bg-brand-red text-white hover:opacity-95",
    outline: "border border-black text-black hover:bg-black hover:text-white",
    outlineLight: "border border-white text-white hover:bg-white hover:text-black",
    ghost: "text-black hover:bg-neutral-100"
  };

  // Tailwind classes keyed by size option
  const sizes = { sm: "text-sm", md: "text-base", lg: "text-lg" };

  // Compose class names based on props and render the button
  return <button className={clsx(base, variants[variant], sizes[size], className)} {...props} />;
}
