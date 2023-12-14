import { useEffect, useState } from "react";
import { Listbox } from "@headlessui/react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

import { Check, CheckFat, DotOutline, DotsThree, MoonStars, Sun, TerminalWindow, Tree, UserCircleGear } from "@phosphor-icons/react";
import CheckIcon from "@heroicons/react/20/solid/CheckIcon";

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
                  "relative w-8 h-8 cursor-default rounded-full flex items-center justify-center focus:outline-none"
                )}
              >
                {resolvedTheme === "dark" ? (
                  <MoonStars size={22} weight="duotone" className="text-secondary" />
                ) : resolvedTheme === "light" ? (
                  <Sun size={22} weight="duotone" className="text-secondary" />
                ) : resolvedTheme === "terminal" ? (
                  <TerminalWindow size={22} weight="duotone" className="text-secondary" />
                ) : resolvedTheme === "sakura" ? (
                  <Tree size={22} weight="duotone" className="text-secondary" />
                ) : (
                  <UserCircleGear size={22} weight="duotone" className="text-secondary" />
                )}
              </Listbox.Button>
              <AnimatePresence>
                {open && (
                  <Listbox.Options
                    as={motion.ul}
                    static
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1 }}
                    transition={{ type: "spring", bounce: 0.3, duration: 0.3 }}
                    className="absolute bg-primary z-[11] top-[48px] left-[-17px] p-2 overflow-hidden text-base w-[164px] focus-visible:outline-none focus:ring-0 capitalize border border-primary"
                  >
                    {themes.map((theme) => (
                      <Listbox.Option
                        key={theme}
                        className={({ active }) =>
                          clsx(
                            "relative cursor-default select-none py-2 pl-10 pr-4",
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
                              <span className="absolute inset-y-0 left-0 flex items-center pl-2 dark:text-neutral-50">
                                <DotOutline size={22} weight="fill" className="text-primary" />
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