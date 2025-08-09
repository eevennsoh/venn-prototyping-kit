"use client";

import * as React from "react";
import type { ComponentType } from "react";

interface LogoWrapperProps {
  size?: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge";
  showText?: boolean; // true: render Atlaskit Logo (with wordmark); false: render Atlaskit Icon (glyph only)
}

interface AtlaskitLogoProps {
  appearance?: "brand" | "neutral" | "inverse";
  shouldUseNewLogoDesign?: boolean;
  size?: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge";
}

export function LogoWrapper(IconComponent: ComponentType<AtlaskitLogoProps>, LogoComponent: ComponentType<AtlaskitLogoProps>) {
  return function WrappedLogo({ size = "medium", showText = true, ...logoProps }: LogoWrapperProps & AtlaskitLogoProps) {
    // Map our size props to Atlaskit logo sizes
    const atlaskitSizeMap = {
      xxsmall: "xxsmall" as const,
      xsmall: "xsmall" as const,
      small: "small" as const,
      medium: "medium" as const,
      large: "large" as const,
      xlarge: "xlarge" as const,
    };

    const shared: AtlaskitLogoProps = {
      shouldUseNewLogoDesign: true,
      size: atlaskitSizeMap[size],
    };

    const { appearance = "brand", ...restLogoProps } = logoProps;

    if (showText) {
      return (
        <div className="inline-flex items-center">
          <LogoComponent {...shared} {...restLogoProps} appearance={appearance} />
        </div>
      );
    }

    return (
      <div className="inline-flex items-center">
        <IconComponent {...shared} {...restLogoProps} appearance={appearance} />
      </div>
    );
  };
}
