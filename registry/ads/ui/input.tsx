import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // Base styles using ADS tokens
        "bg-slate-0 border-slate-400 text-slate-900 placeholder:text-slate-600",
        "flex h-9 w-full min-w-0 rounded-sm border px-3 py-1 text-sm transition-all outline-none",
        // Hover states
        "hover:bg-slate-50",
        // Focus states using ADS focus tokens
        "focus-visible:border-blue-400 focus-visible:ring-2 focus-visible:ring-blue-400/20",
        // Invalid/error states using ADS danger tokens
        "aria-invalid:border-red-500 aria-invalid:ring-2 aria-invalid:ring-red-500/20",
        // Disabled states using ADS disabled tokens
        "disabled:bg-slate-50a disabled:border-slate-100a disabled:text-slate-300a disabled:pointer-events-none disabled:cursor-not-allowed",
        // File input specific styles
        "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-slate-900",
        // Selection styles using ADS brand colors
        "selection:text-slate-0 selection:bg-blue-600",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
