"use client";
import React, { Fragment, forwardRef, AnchorHTMLAttributes } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useTheme } from "next-themes";
import ThemeSwitcher from "./ThemeSwitcher";

import { inter } from "@/fonts"

import { Popover, Transition } from "@headlessui/react";
import clsx from "clsx";

const links = [
  { label: "Home", href: "/", index: 1 },
  // { label: "About", href: "/about", index: 2 },
  { label: "Writing", href: "/blog", index: 3 },
  // { label: "Gear", href: "/gear" },
  { label: "Projects", href: "/projects", index: 4 },
];

type MyLinkProps = {
  href: string;
  onClick?: () => void;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const MyLink = forwardRef<HTMLAnchorElement, MyLinkProps>(({ href, onClick, ...rest }, ref) => (
  <Link href={href} ref={ref} onClick={onClick} {...rest}>

  </Link>
));

MyLink.displayName = 'MyLink';

export default function Navigation() {
  const pathname = `/${usePathname().split("/")[1]}`;
  const { theme } = useTheme();

  return (
    // lg:top-0 lg:left-0 
    <div>
      <div className="animate-in-reverse fixed top-0 right-0 flex items-center justify-end bg-primary/90 backdrop-blur-lg max-lg:w-full">
        <div className="flex justify-between items-center w-full">
          {/* logo placeholder */}
          <p className={`max-lg:block hidden text-lg text-secondary ml-2`}>
            Crisp.sh
          </p>
          <div className="mr-4">
            <ThemeSwitcher />
          </div>
        </div><Popover className="relative">
          {({ close }) => (
            <>
              <Popover.Button className="flex items-center gap-1 text-secondary py-5 px-4 focus-visible:outline-none focus:ring-0">
                Menu
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
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
                  className="absolute z-[11] top-[64px] right-0 p-4 w-[164px] overflow-hidden origin-top focus:outline-none border text-left border-primary bg-primary"
                >
                  <div className="grid text-lg animate-in">
                    {links.map((link) => (
                      <MyLink
                        key={link.href}
                        href={link.href}
                        onClick={() => close()} // Close the popover when a link is clicked
                        className={clsx(
                          "animate-in px-4 py-2 hover:text-secondary transition-colors",
                          pathname === link.href ? "text-secondary" : "font-normal"
                        )}
                        style={{ "--index": link.index } as React.CSSProperties}
                      >
                        {link.label}
                      </MyLink>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  );
}
