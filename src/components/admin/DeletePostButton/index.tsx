"use client";

import { deletePostAction } from "@/actions/post/delete-post-action";
import clsx from "clsx";
import { Trash2Icon } from "lucide-react";
import { useTransition } from "react";

type DeletePostButtonProps = {
  id: string;
  title: string;
};

export function DeletePostButton({ id, title }: DeletePostButtonProps) {
  const [isPending, startTransition] = useTransition();

  function handleClick() {
    if (!confirm("Tem certeza?")) return;

    startTransition(async () => {
      const result = await deletePostAction(id);
      alert(`O result é: ${result}`);
    });
  }

  return (
    <button
      className={clsx(
        "text-red-400 transition cursor-pointer",
        "[&_svg]:w-4 [&_svg]:h-4",
        "hover:text-red-500 hover:scale-110",
        "opacity-70 group-hover:opacity-100",
        "disabled:text-green-100 disabled:cursor-not-allowed disabled:hover:scale-100",
      )}
      aria-label={`Apagar post: ${title}`}
      title={`Apagar post: ${title}`}
      onClick={handleClick}
      disabled={isPending}
    >
      <Trash2Icon />
    </button>
  );
}
