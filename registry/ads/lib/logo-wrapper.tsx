"use client";

import type { ComponentType } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

type LogoSize = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge";
type LogoAppearance = "brand" | "neutral" | "inverse";

const logoVariants = cva("inline-flex items-center", {
  variants: {
    size: {
      xxsmall: "" /* 12px */,
      xsmall: "" /* 16px */,
      small: "" /* 20px */,
      medium: "" /* 24px */,
      large: "" /* 32px */,
      xlarge: "" /* 40px */,
    },
    appearance: {
      brand: "",
      neutral: "",
      inverse: "",
    },
  },
  defaultVariants: {
    size: "medium",
    appearance: "brand",
  },
});

type AtlaskitLogoProps = {
  appearance?: LogoAppearance;
  shouldUseNewLogoDesign?: boolean;
  size?: LogoSize;
};

export function LogoWrapper(IconComponent: ComponentType<AtlaskitLogoProps>, LogoComponent: ComponentType<AtlaskitLogoProps>) {
  return function WrappedLogo({ size, appearance, showText = true, ...logoProps }: VariantProps<typeof logoVariants> & { showText?: boolean } & AtlaskitLogoProps) {
    const sharedProps: AtlaskitLogoProps = {
      shouldUseNewLogoDesign: true,
      size: (size as LogoSize) ?? "medium",
      appearance: (appearance as LogoAppearance) ?? "brand",
      ...logoProps,
    };

    const Component = showText ? LogoComponent : IconComponent;

    return (
      <span data-slot="logo" data-appearance={appearance} className={cn(logoVariants({ size, appearance }))}>
        <Component {...sharedProps} />
      </span>
    );
  };
}
