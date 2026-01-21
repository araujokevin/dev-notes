"use client";

import clsx from "clsx";
import { Trash2Icon } from "lucide-react";

type DeletePostButtonProps = {
  id: string;
  title: string;
};

export function DeletePostButton({ id, title }: DeletePostButtonProps) {
  function handleClick() {
    alert("Botão clicado " + id);
  }

  return (
    <button
      className={clsx(
        "text-red-400 transition cursor-pointer",
        "[&_svg]:w-4 [&_svg]:h-4",
        "hover:text-red-500 hover:scale-110",
        "opacity-70 group-hover:opacity-100",
      )}
      aria-label={`Apagar post: ${title}`}
      title={`Apagar post: ${title}`}
      onClick={handleClick}
    >
      <Trash2Icon />
    </button>
  );
}
