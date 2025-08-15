import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// ADS-aligned Button variants & sizes using token-mapped Tailwind classes (see registry/ads/tokens-mapping.md)
const buttonVariants = cva(
  // Base styles
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium transition-all hover:cursor-pointer disabled:cursor-not-allowed disabled:pointer-events-none disabled:bg-slate-50a disabled:border-none disabled:text-slate-300a [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-2 focus-visible:border-blue-400 aria-invalid:border-1 aria-invalid:border-red-500",
  {
    variants: {
      appearance: {
        default: "border border-slate-200a bg-transparent text-slate-900 hover:bg-slate-100a active:bg-slate-200a",
        primary: "bg-blue-600 text-text-inverse hover:bg-blue-700 active:bg-blue-800",
        subtle: "bg-transparent text-slate-700 hover:bg-slate-100a active:bg-slate-200a",
        warning: "bg-background-warning-bold text-text-inverse hover:bg-background-warning-bold-hovered active:bg-background-warning-bold-pressed",
        danger: "bg-red-600 text-slate-0 hover:bg-red-700 active:bg-red-800",
        link: "bg-transparent text-blue-600 underline-offset-4 hover:underline",
      },
      spacing: {
        default: "h-8 px-3 has-[>svg]:px-2.5", // 32px height, 12px left/right padding, keep vertical padding minimal to center content
        compact: "h-6 px-3 gap-1.5 has-[>svg]:px-2.5", // 24px height, 12px left/right padding
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
