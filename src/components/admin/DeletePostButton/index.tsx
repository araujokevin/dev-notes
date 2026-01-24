"use client";

import { deletePostAction } from "@/actions/post/delete-post-action";
import { Dialog } from "@/components/Dialog";
import clsx from "clsx";
import { Trash2Icon } from "lucide-react";
import { useState, useTransition } from "react";

type DeletePostButtonProps = {
  postId: string;
  postTitle: string;
};

export function DeletePostButton({ postId, postTitle }: DeletePostButtonProps) {
  const [isPending, startTransition] = useTransition();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  function openDialog() {
    setIsDialogOpen(true);
  }

  function closeDialog() {
    if (isPending) return;
    setIsDialogOpen(false);
  }

  function confirmDelete() {
    startTransition(async () => {
      const result = await deletePostAction(postId);
      setIsDialogOpen(false);

      if (result.error) {
        alert(`Erro: ${result.error}`);
      }
    });
  }

  return (
    <>
      <button
        className={clsx(
          "text-red-400 transition cursor-pointer",
          "[&_svg]:w-4 [&_svg]:h-4",
          "hover:text-red-500 hover:scale-110",
          "opacity-70 group-hover:opacity-100",
          "disabled:text-green-100 disabled:cursor-not-allowed disabled:hover:scale-100",
        )}
        aria-label={`Excluir post: ${postTitle}`}
        title={`Excluir post: ${postTitle}`}
        onClick={openDialog}
        disabled={isPending}
      >
        <Trash2Icon />
      </button>

      <Dialog
        isOpen={isDialogOpen}
        title="Excluir post?"
        description="Essa ação não pode ser desfeita."
        confirmLabel="Excluir"
        cancelLabel="Cancelar"
        onCancel={closeDialog}
        onConfirm={confirmDelete}
        isLoading={isPending}
      >
        <p>
          O post{" "}
          <span className="font-semibold text-green-300">{postTitle}</span> será
          removido permanentemente.
        </p>
      </Dialog>
    </>
  );
}
