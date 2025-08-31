"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

function Slider({ className, defaultValue, value, min = 0, max = 100, ...props }: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const _values = React.useMemo(() => (Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max]), [value, defaultValue, min, max]);

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        // Layout & Interaction
        "relative flex w-full touch-none items-center select-none",
        "data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",

        // Disabled States
        "data-[disabled]:opacity-50",
        className,
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cn(
          // Layout
          "relative grow overflow-hidden rounded-full",

          // Orientation Styles
          "data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full",
          "data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5",

          // Background & Border
          "bg-background-neutral-subtle border-border border",
        )}
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={cn(
            // Layout
            "absolute",

            // Orientation Styles
            "data-[orientation=horizontal]:h-full",
            "data-[orientation=vertical]:w-full",

            // Transitions & Colors
            "bg-background-brand-bold transition-colors",
          )}
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className={cn(
            // Layout & Appearance
            "block size-4 shrink-0 rounded-full border shadow-sm",
            "transition-[color,box-shadow]",

            // Interactive States
            "hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden",
            "disabled:pointer-events-none disabled:opacity-50",

            // Colors
            "border-border-brand bg-background-brand-bold ring-ring-border-brand",
          )}
        />
      ))}
    </SliderPrimitive.Root>
  );
}

export { Slider };
