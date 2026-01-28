import clsx from "clsx";
import { useId } from "react";

type InputCheckboxProps = {
  label?: string;
  helperText?: string;
  error?: string;
} & Omit<React.ComponentProps<"input">, "type">;

export function InputCheckbox({
  label,
  helperText,
  error,
  disabled,
  className,
  ...props
}: InputCheckboxProps) {
  const id = useId();
  const hasError = Boolean(error);

  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={id}
        className={clsx(
          "flex items-center gap-3 cursor-pointer",
          "text-sm text-green-200",
          disabled && "cursor-not-allowed opacity-60",
        )}
      >
        <input
          id={id}
          type="checkbox"
          disabled={disabled}
          aria-invalid={hasError}
          aria-describedby={
            hasError ? `${id}-error` : helperText ? `${id}-helper` : undefined
          }
          className={clsx(
            "h-4 w-4 shrink-0",
            "rounded border border-green-900/40",
            "bg-slate-900",
            "text-green-400",
            "transition",
            "focus:outline-none focus:ring-2 focus:ring-green-500/60",
            "checked:bg-green-500 checked:border-green-500",
            "disabled:bg-slate-800 disabled:border-green-800",
            hasError &&
              "border-red-500 focus:ring-red-500/60 checked:bg-red-500",
            className,
          )}
          {...props}
        />

        {label}
      </label>

      {helperText && !hasError && (
        <span id={`${id}-helper`} className="text-xs text-green-400/70 pl-7">
          {helperText}
        </span>
      )}

      {hasError && (
        <span id={`${id}-error`} className="text-xs text-red-400 pl-7">
          {error}
        </span>
      )}
    </div>
  );
}
