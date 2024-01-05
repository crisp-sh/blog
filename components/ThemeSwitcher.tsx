import React, { useEffect, useState } from "react";

import { Listbox } from "@headlessui/react";

import { useTheme } from "next-themes";
import { AnimatePresence } from "framer-motion";
import clsx from "clsx";

import { MoonStars, Sun, TerminalWindow, Tree, UserCircleGear } from "@phosphor-icons/react";
import { ChevronRightIcon } from "@radix-ui/react-icons";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme, themes } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Listbox value={theme} onChange={(value) => setTheme(value)}>
        {({ open }) => {
          const iconClassName = clsx(
            "w-5 h-5 text-secondary hover:text-primary cursor-pointer transition-colors",
            open ? "text-primary" : "text-secondary"
          );
          return (
            <div className="relative">
              <Listbox.Button
                className={clsx(
                  "relative py-5 px-4 cursor-default rounded-full flex items-center justify-center focus:outline-none hover:cursor-pointer"
                )}
              >
                {resolvedTheme === "dark" ? (
                  <MoonStars size={22} weight="light" className="text-secondary" />
                ) : resolvedTheme === "light" ? (
                  <Sun size={22} weight="light" className="text-secondary" />
                ) : resolvedTheme === "terminal" ? (
                  <TerminalWindow size={22} weight="light" className="text-secondary" />
                ) : resolvedTheme === "sakura" ? (
                  <Tree size={22} weight="light" className="text-secondary" />
                ) : (
                  <UserCircleGear size={22} weight="light" className="text-secondary" />
                )}
              </Listbox.Button>
              <AnimatePresence>
                {open && (
                  <Listbox.Options
                    className="absolute bg-primary z-[11] top-[63px] left-[4px] overflow-hidden text-base min-w-[164px] p-2 focus-visible:outline-none focus:ring-0 capitalize border border-primary max-lg:border-t-0"
                  >
                    {themes.map((theme) => (
                      <Listbox.Option
                        key={theme}
                        className={({ active }) =>
                          clsx(
                            "animate-in relative cursor-default select-none py-2 pl-10 pr-4 hover:cursor-pointer",
                            active ? "bg-tertiary" : ""
                          )
                        }
                        value={theme}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${selected ? "font-normal" : "font-normal"
                                }`}
                            >
                              {theme == "system" ? "System" : theme}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                {/* <DotOutline size={22} weight="fill" className="text-primary" /> */}
                                <ChevronRightIcon className={clsx(
                                  "w-4 h-4 text-secondary hover:text-primary cursor-pointer transition-colors",
                                  open ? "text-primary" : "text-secondary")}
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                )}
              </AnimatePresence>
            </div>
          );
        }}
      </Listbox>
    </>
  );
}