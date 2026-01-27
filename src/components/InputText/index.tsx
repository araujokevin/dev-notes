import clsx from "clsx";
import { useId } from "react";

type InputTextProps = {
  label?: string;
  helperText?: string;
  error?: string;
} & React.ComponentProps<"input">;

export function InputText({
  label,
  helperText,
  error,
  className,
  disabled,
  ...props
}: InputTextProps) {
  const id = useId();
  const hasError = Boolean(error);

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label
          htmlFor={id}
          className={clsx(
            "text-sm font-medium",
            hasError ? "text-red-400" : "text-green-200",
          )}
        >
          {label}
        </label>
      )}

      <input
        id={id}
        disabled={disabled}
        aria-invalid={hasError}
        {...props}
        className={clsx(
          "w-full rounded-lg px-3 py-2 text-sm",
          "bg-slate-900 text-green-100",
          "border border-green-900/40",
          "placeholder:text-green-400/40",
          "transition-colors",
          "focus:outline-none focus:ring-2 focus:ring-green-500/40",
          "focus:border-green-500/60",
          "disabled:cursor-not-allowed disabled:opacity-60",
          hasError &&
            "border-red-500/40 focus:border-red-500/60 focus:ring-red-500/30",
          className,
        )}
      />

      {(helperText || error) && (
        <span
          className={clsx(
            "text-xs",
            error ? "text-red-400" : "text-green-400/70",
          )}
        >
          {error ?? helperText}
        </span>
      )}
    </div>
  );
}
