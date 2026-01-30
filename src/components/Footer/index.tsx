import Link from "next/link";

export function Footer() {
  return (
    <footer className="pb-16 text-center text-green-300/70">
      <p className="text-sm">
        <span>Copyright &copy; {new Date().getFullYear()} · </span>
        <Link
          href="/"
          className="text-green-300 hover:text-green-400 transition-colors"
        >
          The Dev Blog
        </Link>
      </p>
    </footer>
  );
}
