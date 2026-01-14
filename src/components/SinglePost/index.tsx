import { findPostBySlugCached } from "@/lib/post/queries";
import Image from "next/image";
import { PostHeading } from "../PostHeading";
import { PostDate } from "../PostDate";
import { SafeMarkdown } from "../SafeMarkdown";

type SinglePostProps = {
  slug: string;
};

export async function SinglePost({ slug }: SinglePostProps) {
  const post = await findPostBySlugCached(slug);

  return (
    <article className="mb-16">
      <header className="group flex flex-col gap-4 mb-6">
        <Image
          className="rounded-xl border border-green-800/40"
          src={post.coverImageUrl}
          width={1200}
          height={720}
          alt={post.title}
        />

        <PostHeading url={`/post/${post.slug}`}>{post.title}</PostHeading>

        <p className="text-green-300/70 text-sm">
          {post.author} <span className="mx-1">·</span>{" "}
          <PostDate dateTime={post.createdAt} />
        </p>
      </header>

      <p className="text-xl mb-6 text-green-200/80">{post.excerpt}</p>

      <div className="prose prose-invert prose-green max-w-none">
        <SafeMarkdown markdown={post.content} />
      </div>
    </article>
  );
}
