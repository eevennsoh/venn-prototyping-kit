import * as React from "react";
import type { ComponentType } from "react";

interface IconProps {
  size?: "small" | "medium";
  variant?: "default" | "subtle" | "subtlest";
}

interface AtlaskitIconProps {
  size?: "small" | "medium";
  color?: string;
}

export function IconWrapper<IconComponentProps extends AtlaskitIconProps>(IconComponent: ComponentType<IconComponentProps>) {
  return function WrappedIcon({ size = "medium", variant = "default", ...iconProps }: IconProps & IconComponentProps) {
    // Fixed dimensions based on size
    const dimensions = size === "small" ? 12 : 16;

    // Color variants based on CSS custom properties that match Atlassian Design System tokens
    const colorValues = {
      default: "text-slate-900 dark:text-dark-slate-900", // Strong contrast
      subtle: "text-slate-700 dark:text-dark-slate-700", // Medium contrast
      subtlest: "text-slate-600 dark:text-dark-slate-600", // Low contrast
    };

    return (
      <div
        className={`inline-flex items-center justify-center ${colorValues[variant]}`}
        style={{
          width: `${dimensions}px`,
          height: `${dimensions}px`,
        }}
      >
        <IconComponent size={size} {...(iconProps as IconComponentProps)} />
      </div>
    );
  };
}
