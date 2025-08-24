import { clsx } from "clsx";
import type { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'outlineLight';
  size?: 'sm' | 'md' | 'lg';
};
export function Button({ className, variant="primary", size="md", ...props }: Props) {
  const base = "rounded-2xl px-5 py-3 transition bg-black text-white border border-white hover:opacity-90";
  const variants = {
    primary: "",
    secondary: "",
    outline: "",
    outlineLight: "",
    ghost: ""
  };
  const sizes = { sm: "text-sm", md: "text-base", lg: "text-lg" };
  return <button className={clsx(base, variants[variant], sizes[size], className)} {...props} />;
}