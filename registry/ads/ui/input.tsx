import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const inputVariants = cva(
  // Common Base Styles
  [
    // Typography & Layout
    "font-body text-text placeholder:text-text-subtle",
    "relative flex w-full min-w-0 items-center gap-x-1.5",
    "rounded-sm border border-solid",

    // Interactive States
    "transition-all outline-none",

    // Focus Management
    "focus-visible:border-border-focused focus-visible:inset-ring-border-focused focus-visible:inset-ring",

    // Invalid/Error States
    "aria-invalid:border-border-danger aria-invalid:inset-ring-border-danger aria-invalid:inset-ring",

    // Disabled States
    "disabled:bg-background-disabled disabled:border-border-disabled disabled:text-text-disabled",
    "disabled:pointer-events-none disabled:cursor-not-allowed",

    // File Input Specific Styles
    "file:text-text file:border-none file:bg-transparent file:font-medium",

    // Selection Styles
    "selection:text-text-inverse selection:bg-background-brand-bold",
  ].join(" "),
  {
    variants: {
      appearance: {
        standard: "bg-background-input border-border-input hover:bg-background-input-hovered",
        subtle: "bg-background-neutral-subtle border-border hover:bg-background-neutral-subtle-hovered",
        none: "hover:bg-background-neutral-subtle border-transparent bg-transparent",
      },
      size: {
        default: "h-10 px-2", // 40px height, 8px left/right padding
        compact: "h-8 px-2", // 32px height, 8px left/right padding
      },
      hasIconBefore: {
        true: "pl-[38px]", // 38px container for 24px icon. 8px left margin + 24px icon + 6px gap
        false: "",
      },
      hasIconAfter: {
        true: "pr-[38px]", // 38px container for 24px icon. 8px right margin + 24px icon + 6px gap
        false: "",
      },
    },
    defaultVariants: {
      appearance: "standard",
      size: "default",
      hasIconBefore: false,
      hasIconAfter: false,
    },
  },
);

const iconContainerVariants = cva("pointer-events-none absolute inset-y-0 z-10 flex items-center", {
  variants: {
    position: {
      before: "left-[7px]", // 7px margin + 24px icon + 7px margin = 38px container
      after: "right-[7px]", // 7px margin + 24px icon + 7px margin = 38px container
    },
  },
});

const inputWrapperVariants = cva("relative flex w-full items-center");

function Input({
  className,
  type = "text",
  appearance,
  size,
  iconBefore,
  iconAfter,
  ...props
}: Omit<React.ComponentProps<"input">, "size"> &
  VariantProps<typeof inputVariants> & {
    /** Icon to display before the input content */
    iconBefore?: React.ReactNode;
    /** Icon to display after the input content */
    iconAfter?: React.ReactNode;
  }) {
  const inputElement = <input type={type} data-slot="input" className={cn(inputVariants({ appearance, size, hasIconBefore: !!iconBefore, hasIconAfter: !!iconAfter }), className)} {...props} />;

  // If no icons, return the input directly
  if (!iconBefore && !iconAfter) {
    return inputElement;
  }

  // If icons are present, wrap in a container with icon positioning
  return (
    <div className={inputWrapperVariants()}>
      {iconBefore && <div className={iconContainerVariants({ position: "before" })}>{iconBefore}</div>}
      {inputElement}
      {iconAfter && <div className={iconContainerVariants({ position: "after" })}>{iconAfter}</div>}
    </div>
  );
}

export { Input, inputVariants };
