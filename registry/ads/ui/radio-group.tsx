"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

import { cn } from "@/lib/utils";

function RadioGroup({ className, ...props }: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return <RadioGroupPrimitive.Root data-slot="radio-group" className={cn("grid gap-3", className)} {...props} />;
}

function RadioGroupItem({ className, ...props }: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <div className="inline-flex size-6 items-center justify-center">
      <RadioGroupPrimitive.Item
        data-slot="radio-group-item"
        className={cn(
          // Layout & Typography
          "relative aspect-square size-4 shrink-0 rounded-full",

          // Interactive States
          "transition-all",
          "hover:cursor-pointer active:cursor-pointer",

          // Focus Management
          "focus-visible:outline-border-focused focus-visible:outline-2 focus-visible:outline-offset-2",

          // Border
          "border",

          // Default unchecked state
          "bg-background-input border-border-input",
          "hover:bg-background-input-hovered",
          "active:bg-background-input-pressed",

          // Checked state using data attributes
          "data-[state=checked]:bg-background-brand-bold data-[state=checked]:border-border-brand",
          "data-[state=checked]:text-text-inverse",
          "data-[state=checked]:hover:bg-background-brand-bold-hovered",
          "data-[state=checked]:active:bg-background-brand-bold-pressed",

          // Invalid/Error States
          "aria-invalid:border-border-danger aria-invalid:inset-ring-border-danger aria-invalid:data-[state=checked]:border-border-danger aria-invalid:inset-ring",

          // Disabled States
          "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
          "disabled:bg-background-disabled disabled:border-border-disabled",
          "data-[state=checked]:disabled:bg-background-disabled data-[state=checked]:disabled:border-border-disabled data-[state=checked]:disabled:text-text-disabled",
          className,
        )}
        {...props}
      >
        <RadioGroupPrimitive.Indicator data-slot="radio-group-indicator" className="absolute inset-0 flex items-center justify-center text-current">
          <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2" cy="2" r="2" className="fill-icon-inverse" />
          </svg>
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
    </div>
  );
}

export { RadioGroup, RadioGroupItem };
