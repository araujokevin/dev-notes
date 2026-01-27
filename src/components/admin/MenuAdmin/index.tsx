"use client";

import { Button } from "@/components/Button";
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
    "sm:hidden font-medium border-0",
  );

  const menuItems = [
    {
      label: "Home",
      href: "/",
      icon: HouseIcon,
      external: true,
    },
    {
      label: "Posts",
      href: "/admin/post",
      icon: FileTextIcon,
    },
    {
      label: "Criar post",
      href: "/admin/post/new",
      icon: PlusIcon,
    },
  ];

  return (
    <nav className={navClasses}>
      {/* Toggle mobile */}
      <Button
        type="button"
        variant="default"
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
      </Button>

      {/* Links */}
      {menuItems.map(({ label, href, icon: Icon, external }) => {
        if (external) {
          return (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className={itemBaseClasses}
            >
              <Icon className="w-4 h-4" />
              {label}
            </a>
          );
        }

        return (
          <Link
            key={label}
            href={href}
            className={itemBaseClasses}
            onClick={handleNavigate}
          >
            <Icon className="w-4 h-4" />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
