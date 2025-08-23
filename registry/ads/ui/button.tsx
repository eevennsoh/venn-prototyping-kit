import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// ADS-aligned Button variants & sizes using token-mapped Tailwind classes (see registry/ads/tokens-mapping.md)
const buttonVariants = cva(
  // Base styles using ADS tokens
  [
    // Typography & Layout
    "font-body font-medium",
    "inline-flex shrink-0 items-center justify-center",
    "gap-2 rounded-sm whitespace-nowrap",

    // Interactive States
    "transition-all outline-none",
    "hover:cursor-pointer",
    "disabled:pointer-events-none disabled:cursor-not-allowed",

    // Focus Management
    "focus-visible:ring-border-focused focus-visible:ring-2 focus-visible:ring-offset-2",

    // State-specific Styling
    "aria-pressed:border-border-selected aria-pressed:border",
    "aria-pressed:text-text-selected aria-pressed:bg-background-selected aria-pressed:hover:bg-background-selected-hovered",

    // Icon Handling
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ].join(" "),
  {
    variants: {
      appearance: {
        default:
          "border-border bg-background-neutral-subtle hover:bg-background-neutral-subtle-hovered active:bg-background-neutral-subtle-pressed text-text-subtle disabled:border-border-disabled disabled:bg-background-neutral-subtle disabled:text-text-disabled border",
        primary:
          "text-text-inverse bg-background-brand-bold hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed disabled:bg-background-disabled disabled:text-text-disabled",
        warning: "bg-background-warning-bold text-text hover:bg-background-warning-bold-hovered active:bg-background-warning-bold-pressed disabled:bg-background-disabled disabled:text-text-disabled",
        danger:
          "text-text-inverse bg-background-danger-bold hover:bg-background-danger-bold-hovered active:bg-background-danger-bold-pressed disabled:bg-background-disabled disabled:text-text-disabled",
        link: "disabled:text-text-disabled text-link active:text-link-pressed bg-transparent underline-offset-2 hover:underline",
        subtle: "hover:bg-background-neutral-subtle-hovered active:bg-background-neutral-subtle-pressed text-text-subtle disabled:text-text-disabled bg-transparent",
      },
      spacing: {
        default: "h-8 px-3 has-[>svg]:px-2.5", // 32px height, 12px left/right padding, keep vertical padding minimal to center content
        compact: "h-6 gap-1.5 px-3 has-[>svg]:px-2.5", // 24px height, 12px left/right padding
        icon: "size-8", // 32x32
        iconSm: "size-6", // 24x24
      },
    },
    defaultVariants: {
      appearance: "default",
      spacing: "default",
    },
  },
);

function Button({
  className,
  appearance,
  spacing,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return <Comp data-slot="button" className={cn(buttonVariants({ appearance, spacing, className }))} {...props} />;
}

export { Button, buttonVariants };
