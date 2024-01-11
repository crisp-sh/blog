"use client";

import * as TooltipUI from "@radix-ui/react-tooltip";
import clsx from "clsx";

import useMousePosition from "@/hooks/usemouseposition";

type Side = "top" | "right" | "bottom" | "left";

interface Props {
  title: string;
  side: Side;
  width?: string;
  visible?: boolean;
  children: React.ReactNode;
  triggerRef: React.RefObject<HTMLDivElement>;
}

const Tooltip = (props: Props) => {
  const { title, side, width, children, triggerRef } = props;
  const mousePosition = useMousePosition(triggerRef);

  return (
    <TooltipUI.Provider delayDuration={0} skipDelayDuration={10}>
      <TooltipUI.Root>
        <TooltipUI.Trigger asChild>{children}</TooltipUI.Trigger>
        <TooltipUI.Portal>
          <TooltipUI.Content
            className={clsx(`w-[${width}] bg-tertiary border border-secondary text-primary text-sm px-3 py-2 z-[99999] normal-case no-wrap`)}
            side={side}
            sideOffset={6}
            hidden={title === ""}
            style={{ 
              position: 'absolute', 
              left: `${mousePosition.x}px`, 
              top: `${mousePosition.y}px` 
            }}
          >
            {title}
          </TooltipUI.Content>
        </TooltipUI.Portal>
      </TooltipUI.Root>
    </TooltipUI.Provider>
  );
};

export default Tooltip;