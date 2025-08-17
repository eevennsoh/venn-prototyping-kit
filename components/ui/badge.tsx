import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center h-6 rounded-md border px-1 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",

  {
    variants: {
      appearance: {
        default: "bg-(--neutral300) text-text",
        primary: "bg-background-accent-blue-subtler text-text hover:bg-background-accent-blue-subtler-hovered",
        primaryInverted: "bg-elevation-surface text-text-brand hover:bg-background-brand-bold-hovered",
        added: "bg-background-accent-green-subtler text-text-accent-green hover:bg-background-accent-green-subtler-hovered",
        removed: "bg-background-accent-red-subtler text-text-accent-red hover:bg-background-accent-red-subtler-hovered",
        important: "bg-background-accent-red-subtle text-text-accent-red hover:bg-background-accent-red-subtle-hovered",
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
