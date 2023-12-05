"use client";
import { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

import NavLink from "./ui/NavLink";
import ThemeSwitcher from "./ThemeSwitcher";

import { Popover, Transition } from "@headlessui/react";
import clsx from "clsx";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  // { label: "Gear", href: "/gear" },
  { label: "Projects", href: "/projects" },
];

export default function Navigation() {
  const pathname = `/${usePathname().split("/")[1]}`; // active paths on dynamic subpages
  const { theme } = useTheme();
  
  return (
    <aside className="z-[10] fixed bottom-0 right-0 bg-secondary p-4 shadow-xl flex items-center border border-primary">
      <div className="mr-4">
        <ThemeSwitcher />
      </div>
      <Popover className="relative">
        <Popover.Button className="flex items-center gap-1 text-secondary p-1 focus-visible:outline-none focus:ring-0">
          Menu
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 active:rotate-45"
          >
            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
          </svg>
        </Popover.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-10"
          leaveFrom="opacity-100 translate-y-1"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel
            className="absolute z-[9] bottom-12 right-[-17px] p-2 overflow-auto text-base origin-bottom-right w-[156px] bg-secondary dark:bg-secondary focus:outline-none sm:text-sm border border-primary border-b-0"
            style={
              theme === "terminal" 
              ? { background: "#33255b" } 
              : theme === "orchid"
              ? { background: "#4b143d" } 
              : {}}
          >
            <div className="grid">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "px-4 py-2 hover:text-secondary transition-colors",
                    pathname === link.href
                      ? "font-bold text-secondary"
                      : "font-normal"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </aside>
  );
}
