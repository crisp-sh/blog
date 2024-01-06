"use client";
import React, { Fragment, forwardRef, AnchorHTMLAttributes } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useTheme } from "next-themes";
import ThemeSwitcher from "./ThemeSwitcher";

import { inter } from "@/fonts"

import { Popover, Transition } from "@headlessui/react";
import clsx from "clsx";
import { PlusIcon } from "@radix-ui/react-icons";

import ConnectLinks from "@/components/ConnectLinks";
import { Button } from "@/components/ui/Button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/Drawer"

const links = [
  { label: "Home", href: "/", index: 1 },
  // { label: "About", href: "/about", index: 2 },
  { label: "Writing", href: "/blog", index: 2 },
  // { label: "Gear", href: "/gear" },
  { label: "Projects", href: "/projects", index: 3 },
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
    <aside className="z-[11] animate-in fixed top-0 right-0 flex items-center justify-end bg-primary/100 max-lg:backdrop-blur-lg max-lg:w-full max-lg:border-b max-lg:border-primary ">
      <div className="flex justify-between items-center w-full">
        <Link href="/">
          <p className={`max-lg:block hidden text-xl text-primary font-theme px-6 tracking-tight`}>
            Sellers H. Crisp
          </p>
        </Link>
        <div className="">
          <ThemeSwitcher />
        </div>
      </div>
      <Popover className="relative">
        {({ close }) => (
          <>
            <Popover.Button className="flex items-center gap-1 text-secondary py-5 px-6 focus-visible:outline-none focus:ring-0 cursor-pointer">
              Menu
              <PlusIcon className="w-5 h-5" fill="currentColor" />
            </Popover.Button>
            <Popover.Panel
              className="absolute z-[11] top-[64px] right-0 w-[164px] p-4 overflow-hidden origin-top focus:outline-none border text-left border-primary bg-primary max-lg:border-t-0"
            >
              <div className="grid text-lg animate-in">
                {links.map((link) => (
                  <MyLink
                    key={link.href}
                    href={link.href}
                    onClick={() => close()} // Close the popover when a link is clicked
                    className={clsx(
                      "animate-in text-right text-xl px-4 py-2 hover:text-secondary transition-colors",
                      pathname === link.href ? "text-secondary" : "font-normal"
                    )}
                    style={{ "--index": link.index } as React.CSSProperties}
                  >
                    {link.label}
                  </MyLink>
                ))}
                <Drawer>
                  <DrawerTrigger asChild>
                    <p
                      className="animate-in text-right text-xl px-4 py-2 hover:text-secondary transition-colors cursor-pointer"
                      style={{ "--index": 4 } as React.CSSProperties}
                    >
                      Links
                    </p>
                  </DrawerTrigger>
                  <DrawerContent>
                    <div className="mx-auto w-full max-w-sm">
                      <DrawerHeader>
                        <DrawerTitle>Connect with me</DrawerTitle>
                        <DrawerDescription></DrawerDescription>
                      </DrawerHeader>
                      <ul className="flex-grow flex grid-cols-1 gap-2 lg:gap-3 justify-center items-center animated-list animate-in">
                        {ConnectLinks.map((link) => (
                          <li className="transition-opacity col-span-1" key={link.label}>
                            <Link
                              href={link.href}
                              className="transition-opacity no-underline content-center	w-auto border border-primary p-4 bg-tertiary inline-grid"
                            >
                              <div className="flex items-center gap-3">
                                <span className="text-xl">{link.icon}</span>
                                {link.label}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="w-5 h-5 ml-auto text-secondary"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <DrawerFooter>
                        <DrawerClose asChild>
                          <Button variant="link" size="lg">
                            <span>Close</span>
                          </Button>
                        </DrawerClose>
                      </DrawerFooter>
                    </div>
                  </DrawerContent>
                </Drawer>
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
    </aside>
  );
}
