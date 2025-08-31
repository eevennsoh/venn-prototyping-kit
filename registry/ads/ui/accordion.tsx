"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { cn } from "@/lib/utils";
import { IconWrapper } from "@/registry/ads/lib/icon-wrapper";
import ChevronDownIconCore from "@atlaskit/icon/core/chevron-down";

const ChevronDownIcon = IconWrapper(ChevronDownIconCore);

function Accordion({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" className={cn("w-full", className)} {...props} />;
}

function AccordionItem({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return <AccordionPrimitive.Item data-slot="accordion-item" className={cn("border-border border-b last:border-b-0", className)} {...props} />;
}

function AccordionTrigger({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          [
            // Layout & Positioning
            "flex flex-1 items-start justify-between gap-4",
            "py-4 text-left",

            // Typography
            "font-body",

            // Visual States
            "rounded-sm",
            "transition-all",
            "outline-none",
            "hover:underline",

            // Interactive States
            "hover:cursor-pointer",

            // Focus States
            "focus-visible:ring-border-focused focus-visible:ring-2 focus-visible:outline-none",

            // Disabled State
            "disabled:border-border-disabled disabled:text-text-disabled disabled:pointer-events-none",

            // Icon Animation - shadcn style direct targeting
            "[&[data-state=open]>span]:rotate-180",
          ].join(" "),
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon size="small" appearance="subtle" label="Toggle" className="pointer-events-none shrink-0 transition-transform duration-(--ds-duration-medium)" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className={[
        // Animation
        "data-[state=closed]:animate-accordion-up",
        "data-[state=open]:animate-accordion-down",

        // Layout
        "font-body-small overflow-hidden",

        // Prevent layout shift by constraining width
        "w-full",
      ].join(" ")}
      {...props}
    >
      <div className={cn("pt-0 pb-4 break-words", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
