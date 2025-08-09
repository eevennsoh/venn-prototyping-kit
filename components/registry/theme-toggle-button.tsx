"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IconWrapper } from "@/registry/ads/lib/icon-wrapper";

// Import theme icon from Atlassian Design System
import ThemeIconCore from "@atlaskit/icon/core/theme";

// Wrap icon with IconWrapper
const ThemeIcon = IconWrapper(ThemeIconCore);

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Applies or removes a global CSS rule using the universal selector
  // Change logo text color in dark mode
  const applyDarkModeLogoText = (enabled: boolean) => {
    const STYLE_ID = "global-text-color-var";
    const existing = document.getElementById(STYLE_ID) as HTMLStyleElement | null;
    if (enabled) {
      const css = `* { --text-color: var(--ds-darkneutral1100) }`;
      if (existing) {
        existing.textContent = css;
        return;
      }
      const styleEl = document.createElement("style");
      styleEl.id = STYLE_ID;
      styleEl.textContent = css;
      document.head.appendChild(styleEl);
    } else if (existing) {
      existing.remove();
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  // Keep logo text color in sync with active theme
  useEffect(() => {
    if (!mounted) return;
    applyDarkModeLogoText(resolvedTheme === "dark");
  }, [mounted, resolvedTheme]);

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  if (!mounted) {
    return null;
  }

  return (
    <Button
      onClick={toggleTheme}
      variant="outline"
      size="icon"
      className={cn("border-slate-200a dark:border-dark-slate-200a h-8 w-8 p-3 shadow-none")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <ThemeIcon size="small" label="Toggle theme" variant="default" />
    </Button>
  );
}
