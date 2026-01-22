import { findAllPostAdmin } from "@/lib/post/queries/admin";
import clsx from "clsx";
import Link from "next/link";
import { DeletePostButton } from "../admin/DeletePostButton";

export default async function PostsListAdmin() {
  const posts = await findAllPostAdmin();

  return (
    <div className="my-16 space-y-3">
      {posts.map((post) => {
        return (
          <div
            key={post.id}
            className={clsx(
              "group flex items-center justify-between gap-4",
              "rounded-lg border border-green-900/40",
              "px-4 py-3 transition-colors",
              "hover:bg-slate-800/60",
              !post.published && "bg-slate-800/80 border-green-700/40",
            )}
          >
            <div className="flex flex-col gap-1">
              <Link
                href={`/admin/post/${post.id}`}
                className={clsx(
                  "text-green-200 font-medium",
                  "group-hover:text-green-400 transition-colors",
                )}
              >
                {post.title}
              </Link>

              {!post.published && (
                <span className="text-xs text-green-400/70 italic">
                  Não publicado
                </span>
              )}
            </div>
            <DeletePostButton id={post.id} title={post.title} />
          </div>
        );
      })}

      <div
        className={clsx(
          "fixed inset-0 z-50 bg-black/50 backdrop-blur-xs",
          "flex items-center justify-center",
        )}
      >
        <div
          className={clsx(
            "bg-slate-900 p-6 rounded-lg max-w-xl mx-6",
            "flex flex-col gap-6",
            "shadow-lg shadow-black/50",
          )}
        >
          <h3 className="text-xl">Excluir post?</h3>
          <p className="text-slate-400">Essa ação não pode ser desfeita.</p>
          <p>
            Isso excluirá o post:{" "}
            <span className="font-bold">Lorem ipsum dolor sit.</span>.
          </p>
          <div className="flex items-center gap-6 justify-end">
            <button
              className={clsx(
                "bg-red-50 hover:bg-red-200 transition text-red-500",
                "flex items-center justify-center",
                "py-2 px-4 rounded-lg cursor-pointer",
                "border border-red-300",
              )}
            >
              Cancelar
            </button>
            <button
              className={clsx(
                "bg-green-50 hover:bg-green-200 transition text-green-500",
                "flex items-center justify-center",
                "py-2 px-4 rounded-lg cursor-pointer",
                "border border-green-300",
              )}
            >
              Excluir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
