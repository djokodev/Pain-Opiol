import type { ReactNode } from "react";

type WhatsAppButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "light" | "outline";
  className?: string;
  ariaLabel?: string;
};

const variants = {
  primary:
    "bg-orange-600 text-white shadow-[0_12px_30px_rgba(234,88,12,0.22)] hover:bg-orange-700",
  light: "bg-white text-stone-900 hover:bg-orange-50",
  outline:
    "border border-orange-200 bg-white text-orange-700 hover:border-orange-300 hover:bg-orange-50",
};

export function WhatsAppButton({
  children,
  href,
  variant = "primary",
  className = "",
  ariaLabel,
}: WhatsAppButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-center text-sm font-extrabold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600 active:scale-[0.98] ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
