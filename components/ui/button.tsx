import { clsx } from "clsx";
import type { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'outlineLight';
  size?: 'sm' | 'md' | 'lg';
};
export function Button({ className, variant="primary", size="md", ...props }: Props) {
  const base = "rounded-2xl px-5 py-3 transition";
  const variants = {
    primary: "bg-brand-black text-white hover:opacity-90",
    secondary: "bg-brand-red text-white hover:opacity-95",
    outline: "border border-white text-white hover:bg-white hover:text-black",
    outlineLight: "border border-white text-white hover:bg-white hover:text-black",
    ghost: "text-white hover:bg-neutral-800"
  };
  const sizes = { sm: "text-sm", md: "text-base", lg: "text-lg" };
  return <button className={clsx(base, variants[variant], sizes[size], className)} {...props} />;
}