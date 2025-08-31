"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const checkboxVariants = cva(
  // Common Base Styles
  [
    // Layout & Typography
    "relative size-3.5 shrink-0 rounded-xs",

    // Interactive States
    "transition-all",
    "hover:cursor-pointer active:cursor-pointer",

    // Focus Management
    "focus-visible:outline-border-focused focus-visible:outline-2 focus-visible:outline-offset-2",

    // Invalid/Error States
    "aria-invalid:border-border-danger aria-invalid:inset-ring-border-danger aria-invalid:inset-ring",

    // Disabled States
    "disabled:bg-background-disabled disabled:text-text-disabled disabled:pointer-events-none disabled:cursor-not-allowed disabled:border-none",

    // Border
    "border",
  ].join(" "),
  {
    variants: {
      appearance: {
        unchecked: ["bg-background-input border-border-input", "hover:bg-background-input-hovered", "active:bg-background-input-pressed"].join(" "),
        checked: ["bg-background-brand-bold border-border-brand", "text-text-inverse", "hover:bg-background-brand-bold-hovered", "active:bg-background-brand-bold-pressed"].join(" "),
        indeterminate: ["bg-background-brand-bold border-border-brand", "text-text-inverse", "hover:bg-background-brand-bold-hovered", "active:bg-background-brand-bold-pressed"].join(" "),
      },
    },
    defaultVariants: {
      appearance: "unchecked",
    },
  },
);

function Checkbox({
  className,
  appearance,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root> &
  VariantProps<typeof checkboxVariants> & {
    appearance?: "unchecked" | "checked" | "indeterminate";
  }) {
  return (
    <div className="inline-flex size-6 items-center justify-center">
      <CheckboxPrimitive.Root data-slot="checkbox" className={cn(checkboxVariants({ appearance }), className)} {...props}>
        <CheckboxPrimitive.Indicator data-slot="checkbox-indicator" className="absolute inset-0 flex items-center justify-center text-current">
          {(appearance === "checked" || appearance === "indeterminate") && (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Checkmark path - shown when checked appearance */}
              {appearance === "checked" && (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.3262 4.48005L10.1738 3.51978L5.74999 8.82838L3.82616 6.51978L2.67383 7.48005L5.17383 10.4801C5.31632 10.651 5.52741 10.7499 5.74999 10.7499C5.97258 10.7499 6.18366 10.651 6.32616 10.4801L11.3262 4.48005Z"
                  className="fill-current"
                />
              )}
              {/* Indeterminate line - shown when indeterminate appearance */}
              {appearance === "indeterminate" && <path fillRule="evenodd" clipRule="evenodd" d="M2.75 7.75H11.25V6.25H2.75V7.75Z" className="fill-current" />}
            </svg>
          )}
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    </div>
  );
}

export { Checkbox, checkboxVariants };
