"use client";

import type { ComponentType } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

type LogoSize = "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge";
type LogoAppearance = "brand" | "neutral" | "inverse";

const logoVariants = cva("inline-flex items-center", {
  variants: {
    size: {
      xxsmall: "",
      xsmall: "",
      small: "",
      medium: "",
      large: "",
      xlarge: "",
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

interface LogoWrapperProps extends VariantProps<typeof logoVariants> {
  showText?: boolean;
}

interface AtlaskitLogoProps {
  appearance?: LogoAppearance;
  shouldUseNewLogoDesign?: boolean;
  size?: LogoSize;
}

export function LogoWrapper(IconComponent: ComponentType<AtlaskitLogoProps>, LogoComponent: ComponentType<AtlaskitLogoProps>) {
  return function WrappedLogo({ size, appearance, showText = true, ...logoProps }: LogoWrapperProps & AtlaskitLogoProps) {
    const sharedProps: AtlaskitLogoProps = {
      shouldUseNewLogoDesign: true,
      size: (size as LogoSize) ?? "medium",
      appearance: (appearance as LogoAppearance) ?? "brand",
      ...logoProps,
    };

    const Component = showText ? LogoComponent : IconComponent;

    return (
      <span data-slot="logo" className={cn(logoVariants({ size, appearance }))}>
        <Component {...sharedProps} />
      </span>
    );
  };
}
