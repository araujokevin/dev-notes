import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

type ButtonVariant = "default" | "danger";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function Button({
  variant = "default",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        "px-4 py-2 rounded-lg",
        "transition-colors cursor-pointer",
        "disabled:text-slate-400 disabled:border-slate-700 disabled:bg-slate-800 disabled:cursor-not-allowed disabled:hover:scale-100",

        variant === "default" && [
          "border border-green-800/40",
          "text-green-300",
          "hover:bg-slate-800 hover:text-green-200",
        ],
        variant === "danger" && [
          "bg-red-500/10 text-red-400",
          "border border-red-500/30",
          "hover:bg-red-500/20 hover:text-red-300",
        ],
        className,
      )}
    />
  );
}
