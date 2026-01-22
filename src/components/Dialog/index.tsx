"use client";

import clsx from "clsx";
import { ReactNode } from "react";
import { Button } from "@/components/Button";

type DialogProps = {
  isOpen: boolean;

  title: string;
  description?: string;
  children?: ReactNode;

  confirmLabel?: string;
  cancelLabel?: string;

  onConfirm: () => void;
  onCancel: () => void;

  isLoading?: boolean;
};

export function Dialog({
  isOpen,
  title,
  description,
  children,
  confirmLabel = "Confirmar",
  cancelLabel = "Cancelar",
  onCancel,
  onConfirm,
  isLoading = false,
}: DialogProps) {
  if (!isOpen) return null;

  function handleBackdropClick() {
    if (isLoading) return;
    onCancel();
  }

  return (
    <div
      className={clsx(
        "fixed inset-0 z-50",
        "bg-black/60 backdrop-blur-sm",
        "flex items-center justify-center",
      )}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
    >
      <div
        className={clsx(
          "bg-slate-900 rounded-xl",
          "border border-green-900/40",
          "shadow-xl shadow-black/60",
          "max-w-xl w-full mx-6",
          "p-6 sm:p-8",
          "flex flex-col gap-6",
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex flex-col gap-2">
          <h3 id="dialog-title" className="text-2xl font-medium text-green-200">
            {title}
          </h3>

          {description && (
            <p id="dialog-description" className="text-sm text-green-400/70">
              {description}
            </p>
          )}
        </header>

        {children && <div className="text-green-200/80">{children}</div>}

        <div className="flex items-center justify-end gap-4 pt-2">
          <Button onClick={onCancel} disabled={isLoading}>
            {cancelLabel}
          </Button>

          <Button variant="danger" onClick={onConfirm} disabled={isLoading}>
            {confirmLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
