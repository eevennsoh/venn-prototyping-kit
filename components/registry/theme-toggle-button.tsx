"use client";

import { useEffect, useState } from "react";
import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { IconWrapper } from "@/registry/ads/lib/icon-wrapper";

import ThemeIconCore from "@atlaskit/icon/core/theme";

const ThemeIcon = IconWrapper(ThemeIconCore);

export default function ThemeToggle({ ...props }: React.ComponentProps<typeof Button>) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <Button onClick={() => setTheme(isDark ? "light" : "dark")} spacing="icon" aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"} {...props}>
      <ThemeIcon size="small" label="Toggle theme" />
    </Button>
  );
}
