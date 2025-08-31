import type { ComponentType } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

type IconSize = "small" | "medium";

const iconVariants = cva(
  [
    // Layout
    "inline-flex items-center justify-center",

    // Disabled state
    "[*:disabled_&]:text-text-disabled",
  ].join(" "),
  {
    variants: {
      appearance: {
        default: "text-text",
        subtle: "text-text-subtle",
        subtlest: "text-text-subtlest",
        inverse: "text-text-inverse",
      },
      size: {
        small: "size-3", // 12px
        medium: "size-4", // 16px
      },
      spacing: {
        default: "", // 0x0px - no additional spacing
        spacious: "size-6", // 24x24px container with centered icon
      },
    },
    defaultVariants: {
      size: "medium",
      appearance: "default",
      spacing: "default",
    },
  },
);

type AtlaskitIconProps = {
  size?: IconSize;
  label: string;
};

export function IconWrapper<T extends AtlaskitIconProps>(IconComponent: ComponentType<T>) {
  return function WrappedIcon({ size, appearance, spacing, label = "", className, ...iconProps }: VariantProps<typeof iconVariants> & { label?: string; className?: string } & T) {
    return (
      <span data-slot="icon" className={cn(iconVariants({ size, appearance, spacing }), className)} aria-hidden={label ? undefined : true}>
        <IconComponent {...(iconProps as T)} size={(size as IconSize) ?? "medium"} label={label} />
      </span>
    );
  };
}
