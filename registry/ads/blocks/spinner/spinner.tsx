import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const spinnerVariants = cva("inline-block animate-spin", {
  variants: {
    size: {
      xsmall: "size-3", // 12px
      small: "size-4", // 16px
      medium: "size-6", // 24px
      large: "size-12", // 48px
      xlarge: "size-24", // 96px
    },
    appearance: {
      inherit: "",
      invert: "text-text-inverse",
    },
  },
  defaultVariants: {
    size: "medium",
    appearance: "inherit",
  },
});

const Spinner = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof spinnerVariants>>(({ className, size, appearance, ...props }, ref) => {
  return (
    <div ref={ref} className={cn(spinnerVariants({ size, appearance, className }))} role="status" aria-label="Loading" {...props}>
      {/* With a 1.5px stroke, the stroke extends 0.75px on each side of the path. By adding 0.75px padding on all sides (12 + 0.75 + 0.75 = 13.5), we ensure the stroke has room to render completely */}
      <svg width="100%" height="100%" viewBox="-0.75 -0.75 13.5 13.5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.560059 6C0.560059 4.80247 0.955206 3.6384 1.68422 2.68834C2.41323 1.73827 3.43536 1.05531 4.59208 0.745365" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </div>
  );
});

Spinner.displayName = "Spinner";

export { Spinner, spinnerVariants };
