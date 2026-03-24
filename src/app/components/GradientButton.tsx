import { ReactNode } from "react";

interface GradientButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "secondary";
  className?: string;
}

export function GradientButton({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}: GradientButtonProps) {
  const baseStyles =
    "rounded-xl py-3.5 px-6 font-medium transition-all hover:scale-[1.02]";

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-[#d4a574] to-[#f59e0b] text-black shadow-lg shadow-[#d4a574]/30 hover:shadow-xl hover:shadow-[#d4a574]/40",
    secondary:
      "border border-white/10 bg-white/5 text-white hover:bg-white/10",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
