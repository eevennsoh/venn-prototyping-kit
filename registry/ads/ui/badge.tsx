import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "focus:ring-ring font-body-small inline-flex h-4 items-center rounded-sm border-none px-1 text-(--ds-neutral1000) transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none",

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

interface BadgeProps extends React.ComponentProps<"span">, VariantProps<typeof badgeVariants> {
  asChild?: boolean;
  /** Visual style of the badge - maps to ADS appearance prop */
  appearance?: "default" | "primary" | "primaryInverted" | "added" | "removed" | "important";
  /** Maximum value before showing '+' (for count badges) */
  max?: number;
  /** Number to display (for count badges) */
  value?: number;
}

function Badge({ className, appearance = "default", asChild = false, max, value, children, ...props }: BadgeProps) {
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
