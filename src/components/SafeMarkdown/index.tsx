import clsx from "clsx";
import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";

type SafeMarkdownProps = {
  markdown: string;
};

export function SafeMarkdown({ markdown }: SafeMarkdownProps) {
  return (
    <div
      className={clsx(
        "prose-h1:font-medium",
        "prose-h2:font-medium",
        "prose-h3:font-medium",
        "prose-h4:font-medium",
        "prose-h5:font-medium",
        "prose-h6:font-medium",
        "prose prose-invert prose-green",
        "w-full max-w-none",
        "overflow-hidden",
        "prose-a:transition-colors",
        "prose-a:no-underline",
        "prose-a:text-green-400",
        "prose-a:hover:text-green-300",
        "prose-a:hover:underline",
        "prose-strong:text-green-100",
        "prose-code:text-green-300",
        "prose-pre:bg-slate-800",
        "prose-pre:border prose-pre:border-green-800/40",
        "prose-img:mx-auto",
        "md:prose-lg"
      )}
    >
      <ReactMarkdown
        rehypePlugins={[rehypeSanitize]}
        remarkPlugins={[remarkGfm]}
        components={{
          table: ({ node, ...props }) => {
            if (!node?.children) return "";

            return (
              <div className="overflow-auto">
                <table className="w-full min-w-[600px]" {...props} />
              </div>
            );
          },
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
