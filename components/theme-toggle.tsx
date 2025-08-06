"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IconWrapper } from "@/components/icon-wrapper";

// Import theme icon from Atlassian Design System
import ThemeIconCore from "@atlaskit/icon/core/theme";

// Wrap icon with IconWrapper
const ThemeIcon = IconWrapper(ThemeIconCore);

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // On page load, check the current theme
    const isDarkMode = localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);

    setIsDark(isDarkMode);

    // Apply the theme to the document
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);

    // Update localStorage
    if (newIsDark) {
      localStorage.theme = "dark";
    } else {
      localStorage.theme = "light";
    }

    // Update the document class
    document.documentElement.classList.toggle("dark", newIsDark);
  };

  return (
    <Button
      onClick={toggleTheme}
      variant="outline"
      size="icon"
      className={cn("border-slate-200a dark:border-dark-slate-200a fixed top-4 right-4 z-50 h-8 w-8 p-3 shadow-none")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <ThemeIcon size="small" label="Toggle theme" variant="default" />
    </Button>
  );
}
