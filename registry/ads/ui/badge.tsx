import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  // Common Base Styles
  [
    // Typography & Layout
    "font-body-small inline-flex h-4 items-center rounded-sm",
    "px-1 text-(--ds-neutral1000)",

    // Interactive States
    "transition-colors",

    // Focus Management
    "focus-visible:outline-border-focused focus-visible:outline-2 focus-visible:outline-offset-2",

    // Border
    "border-none",
  ].join(" "),
  {
    variants: {
      appearance: {
        default: "bg-(--ds-neutral300)",
        primary: "bg-(--ds-blue300)",
        primaryInverted: "bg-elevation-surface text-text-brand",
        added: "bg-background-success text-text",
        removed: "bg-background-danger text-text",
        important: "bg-(--ds-red300)",
      },
    },
    defaultVariants: {
      appearance: "default",
    },
  },
);

function Badge({
  className,
  appearance = "default",
  asChild = false,
  max,
  value,
  children,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
    /* Maximum value before showing '+' (for count badges) */
    max?: number;
    /* Number to display (for count badges) */
    value?: number;
  }) {
  const Comp = asChild ? Slot : "span";

  // Handle count badge logic
  let displayContent = children;
  if (value !== undefined) {
    if (max !== undefined && value > max) {
      displayContent = `${max}+`;
    } else {
      displayContent = value.toString();
    }
  }

  return (
    <Comp data-slot="badge" className={cn(badgeVariants({ appearance }), className)} {...props}>
      {displayContent}
    </Comp>
  );
}

export { Badge, badgeVariants };
