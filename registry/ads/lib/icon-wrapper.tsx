import type { ComponentType } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

type IconSize = "small" | "medium";

const iconVariants = cva("inline-flex items-center justify-center", {
  variants: {
    appearance: {
      default: "text-slate-900",
      subtle: "text-slate-700",
      subtlest: "text-slate-600",
      inverse: "text-slate-0",
    },
    size: {
      small: "size-3", // 12px
      medium: "size-4", // 16px
    },
  },
  defaultVariants: {
    size: "medium",
    appearance: "default",
  },
});

interface IconProps extends VariantProps<typeof iconVariants> {
  label?: string;
}

interface AtlaskitIconProps {
  size?: IconSize;
  label: string;
}

export function IconWrapper<T extends AtlaskitIconProps>(IconComponent: ComponentType<T>) {
  return function WrappedIcon({ size, appearance, label = "", ...iconProps }: IconProps & T) {
    return (
      <span data-slot="icon" className={cn(iconVariants({ size, appearance }))} aria-hidden={label ? undefined : true}>
        <IconComponent {...(iconProps as T)} size={(size as IconSize) ?? "medium"} label={label} />
      </span>
    );
  };
}
