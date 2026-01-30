"use client";

import clsx from "clsx";
import { Button } from "@/components/Button";
import { ImageUpIcon } from "lucide-react";
import { useRef, useTransition } from "react";
import { IMAGE_UPLOAD_MAX_SIZE } from "@/lib/constants";
import { toast } from "react-toastify";
import { uploadImageAction } from "@/actions/upload/upload-image-action";

type ImageUploaderProps = {
  label?: string;
  helperText?: string;
  disabled?: boolean;
  className?: string;
  onChange?: (file: File | null) => void;
};

export function ImageUploader({
  label = "Imagem de capa",
  helperText = "PNG, JPG ou WebP. Tamanho recomendado: 1200×720.",
  disabled = false,
  className,
  onChange,
}: ImageUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, startTransition] = useTransition();

  function handleChooseFile() {
    if (disabled) return;
    fileInputRef.current?.click();
  }

  function handleFileChange() {
    if (!fileInputRef.current) return;

    const fileInput = fileInputRef.current;
    const file = fileInput.files?.[0];

    if (!file) return;

    if (file.size > IMAGE_UPLOAD_MAX_SIZE) {
      const readableMaxSize = IMAGE_UPLOAD_MAX_SIZE / 1024;
      toast.error(`Imagem muito grande. Máx.: ${readableMaxSize}KB`);
      fileInput.value = "";
      return;
    }

    onChange?.(file);

    const formData = new FormData();
    formData.append("file", file);

    startTransition(async () => {
      const result = await uploadImageAction();
    });

    fileInput.value = "";
  }

  return (
    <div
      className={clsx(
        "flex flex-col gap-3",
        "rounded-lg border border-green-900/40",
        "bg-slate-900",
        "p-4",
        className,
      )}
    >
      {/* Label */}
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium text-green-200">{label}</span>
        {helperText && (
          <span className="text-xs text-green-400/70">{helperText}</span>
        )}
      </div>

      {/* Action */}
      <div className="flex items-center gap-3">
        <Button
          type="button"
          onClick={handleChooseFile}
          disabled={disabled}
          className="flex items-center gap-2"
        >
          <ImageUpIcon className="w-4 h-4" />
          Enviar imagem
        </Button>
      </div>

      {/* Hidden input */}
      <input
        ref={fileInputRef}
        type="file"
        name="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
        disabled={disabled}
      />
    </div>
  );
}
