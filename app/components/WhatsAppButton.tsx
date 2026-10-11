import type { ReactNode } from "react";

type WhatsAppButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "light" | "outline";
  className?: string;
  ariaLabel?: string;
};

const variants = {
  primary: "bg-feuille text-white hover:bg-feuille-fonce",
  light: "bg-white text-cacao hover:bg-soleil",
  outline:
    "border-2 border-cacao bg-transparent text-cacao hover:bg-cacao hover:text-white",
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
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3 text-center text-[0.95rem] font-bold transition-colors duration-150 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-soleil active:translate-y-px ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
