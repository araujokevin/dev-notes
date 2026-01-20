import { findAllPostAdmin } from "@/lib/post/queries/admin";
import clsx from "clsx";
import { Trash2Icon } from "lucide-react";
import Link from "next/link";

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

            <button
              className={clsx(
                "text-red-400 transition cursor-pointer",
                "[&_svg]:w-4 [&_svg]:h-4",
                "hover:text-red-500 hover:scale-110",
                "opacity-70 group-hover:opacity-100",
              )}
              aria-label={`Apagar post: ${post.title}`}
              title={`Apagar post: ${post.title}`}
            >
              <Trash2Icon />
            </button>
          </div>
        );
      })}
    </div>
  );
}
