"use client";

import clsx from "clsx";
import {
  CircleXIcon,
  FileTextIcon,
  HouseIcon,
  MenuIcon,
  PlusIcon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function MenuAdmin() {
  const [isOpen, setIsOpen] = useState(false);

  function handleNavigate() {
    setIsOpen(false);
  }

  const navClasses = clsx(
    "bg-slate-900 text-green-100",
    "border border-green-900/40 rounded-lg",
    "flex flex-col gap-1",
    "transition-all duration-300",
    "mb-6",
    !isOpen && "h-11 overflow-hidden",
    "sm:h-auto sm:overflow-visible sm:flex-row sm:flex-wrap",
  );

  const itemBaseClasses = clsx(
    "flex items-center gap-2",
    "px-4 h-11 rounded-lg",
    "text-green-200",
    "transition-colors",
    "hover:bg-slate-800/60 hover:text-green-400",
    "shrink-0",
  );

  const toggleButtonClasses = clsx(
    itemBaseClasses,
    "sm:hidden",
    "font-medium",
    "cursor-pointer",
  );

  return (
    <nav className={navClasses}>
      {/* Toggle mobile */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={toggleButtonClasses}
      >
        {isOpen ? (
          <>
            <CircleXIcon className="w-4 h-4" />
            Fechar menu
          </>
        ) : (
          <>
            <MenuIcon className="w-4 h-4" />
            Menu
          </>
        )}
      </button>

      {/* Links */}
      <a href="/" target="_blank" className={itemBaseClasses} rel="noreferrer">
        <HouseIcon className="w-4 h-4" />
        Home
      </a>

      <Link
        href="/admin/post"
        className={itemBaseClasses}
        onClick={handleNavigate}
      >
        <FileTextIcon className="w-4 h-4" />
        Posts
      </Link>

      <Link
        href="/admin/post/new"
        className={itemBaseClasses}
        onClick={handleNavigate}
      >
        <PlusIcon className="w-4 h-4" />
        Criar post
      </Link>
    </nav>
  );
}
