import clsx from "clsx";
import Link from "next/link";

export function Header() {
  return (
    <header>
      <h1
        className={clsx(
          "text-4xl/normal font-light py-8",
          "sm:text-5xl/normal sm:py-10",
          "md:text-6xl/normal md:py-11",
          "lg:text-7xl/normal lg:py-12"
        )}
      >
        <Link
          href="/"
          className="text-green-200 hover:text-green-400 transition-colors"
        >
          Dev Notes
        </Link>
      </h1>

      <p className="text-green-400 text-xs uppercase tracking-widest -mt-6 mb-4">
        by Kevin Araújo
      </p>
    </header>
  );
}
