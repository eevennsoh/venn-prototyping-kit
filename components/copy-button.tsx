"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { IconWrapper } from "@/components/icon-wrapper";

// Import icons from Atlassian Design System
import CopyIconCore from "@atlaskit/icon/core/copy";
import CheckMarkIconCore from "@atlaskit/icon/core/check-mark";

// Wrap icons with IconWrapper
const CopyIcon = IconWrapper(CopyIconCore);
const CheckMarkIcon = IconWrapper(CheckMarkIconCore);

interface CopyButtonProps {
  textToCopy?: string;
  registryName?: string;
  tooltipText?: string;
  className?: string;
  variant?: "outline" | "default" | "destructive" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  ariaLabel?: string;
}

export function CopyButton({
  textToCopy,
  registryName,
  tooltipText = "Copy to clipboard",
  className = "border-slate-200a dark:border-dark-slate-200a shadow-none",
  variant = "outline",
  size = "sm",
  ariaLabel = "Copy to clipboard",
}: CopyButtonProps) {
  const [copied, setCopied] = React.useState(false);

  // Build registry command if registryName is provided, otherwise use textToCopy
  const commandToCopy = React.useMemo(() => {
    if (textToCopy) {
      return textToCopy;
    }

    if (registryName) {
      const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.NEXT_LOCALHOST_URL || "registry-test-three.vercel.app";
      const registryUrl = `https://${baseUrl}/r/${registryName}.json`;
      return `npx shadcn@latest add ${registryUrl}`;
    }

    return "";
  }, [textToCopy, registryName]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(commandToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button onClick={copyToClipboard} variant={variant} size={size} className={cn("h-8 w-8 p-3", className)} aria-label={ariaLabel}>
          {copied ? <CheckMarkIcon size="small" label="Copied" /> : <CopyIcon size="small" label="Copy" />}
        </Button>
      </TooltipTrigger>
      <TooltipContent className="font-mono">{tooltipText}</TooltipContent>
    </Tooltip>
  );
}
