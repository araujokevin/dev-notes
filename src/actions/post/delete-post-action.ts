"use server";

import { drizzleDb } from "@/db/drizzle";
import { postsTable } from "@/db/drizzle/schemas";
import { postRepository } from "@/repositories/post";
import { asyncDelay } from "@/utils/async-delay";
import { logColor } from "@/utils/log-color";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function deletePostAction(id: string) {
  await asyncDelay(1000);
  logColor(id);

  if (!id || typeof id !== "string") {
    return {
      error: "Dados inválidos",
    };
  }

  const post = await postRepository.findById(id).catch(() => undefined);

  if (!post) {
    return { error: "Post não existe" };
  }

  await drizzleDb.delete(postsTable).where(eq(postsTable.id, id));

  // ✅ revalidação estável e sem erro de TS
  revalidatePath("/admin/posts");
  revalidatePath("/posts");
  revalidatePath(`/post/${post.slug}`);
  revalidatePath("/");

  return { error: "" };
}
