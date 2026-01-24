import clsx from "clsx";
import { ReactNode } from "react";
import {
  AlertTriangle,
  Info,
  XCircle,
  CheckCircle2,
  FileText,
  LucideIcon,
} from "lucide-react";

type ErrorVariant = "error" | "warning" | "info" | "success" | "empty";

type ErrorMessageProps = {
  title: string;
  description: ReactNode;
  variant?: ErrorVariant;
  pageTitle?: string;
};

const variantConfig: Record<
  ErrorVariant,
  {
    icon: LucideIcon;
    container: string;
    title: string;
    description: string;
  }
> = {
  error: {
    icon: XCircle,
    container: "border-red-500/30 bg-red-500/5",
    title: "text-red-400",
    description: "text-red-300/80",
  },
  warning: {
    icon: AlertTriangle,
    container: "border-yellow-500/30 bg-yellow-500/5",
    title: "text-yellow-400",
    description: "text-yellow-300/80",
  },
  info: {
    icon: Info,
    container: "border-green-500/30 bg-green-500/5",
    title: "text-green-300",
    description: "text-green-300/80",
  },
  success: {
    icon: CheckCircle2,
    container: "border-emerald-500/30 bg-emerald-500/5",
    title: "text-emerald-400",
    description: "text-emerald-300/80",
  },
  empty: {
    icon: FileText,
    container: "border-green-900/40 bg-slate-800/40",
    title: "text-green-200",
    description: "text-green-300/80",
  },
};

export default function ErrorMessage({
  title,
  description,
  variant = "info",
  pageTitle,
}: ErrorMessageProps) {
  const config = variantConfig[variant];
  const Icon = config.icon;

  return (
    <>
      {pageTitle && <title>{pageTitle}</title>}

      <section
        className={clsx(
          "min-h-80 mb-16 rounded-xl",
          "flex items-center justify-center text-center",
          "border p-8",
          "bg-slate-900",
          config.container,
        )}
        role="status"
        aria-live="polite"
      >
        <div className="flex flex-col items-center gap-4 max-w-xl">
          <Icon className="w-10 h-10 text-green-400" />

          <h1
            className={clsx("text-3xl sm:text-4xl font-medium", config.title)}
          >
            {title}
          </h1>

          <p className={clsx("text-base", config.description)}>{description}</p>
        </div>
      </section>
    </>
  );
}
