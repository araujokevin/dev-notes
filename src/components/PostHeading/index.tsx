import clsx from "clsx";
import Link from "next/link";

type PostHeadingProps = {
  children: React.ReactNode;
  url: string;
  as?: "h1" | "h2";
};

export function PostHeading({
  children,
  url,
  as: Tag = "h2",
}: PostHeadingProps) {
  const headingClassesMap = {
    h1: "text-2xl/tight font-medium sm:text-4xl text-green-100",
    h2: "text-2xl/tight font-medium text-green-100",
  };

  const commomClasses = "";
  return (
    <Tag className={clsx(headingClassesMap[Tag], commomClasses)}>
      <Link className="transition-colors group-hover:text-green-400" href={url}>
        {children}
      </Link>
    </Tag>
  );
}
