"use client";

import { useState, useMemo } from "react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { IconWrapper } from "@/registry/ads/lib/icon-wrapper";

import CopyIconCore from "@atlaskit/icon/core/copy";
import CheckMarkIconCore from "@atlaskit/icon/core/check-mark";

const CopyIcon = IconWrapper(CopyIconCore);
const CheckMarkIcon = IconWrapper(CheckMarkIconCore);

interface CopyButtonProps extends React.ComponentProps<typeof Button> {
  textToCopy?: string;
  registryName?: string;
  tooltipText?: string;
}

export default function CopyButton({ textToCopy, registryName, tooltipText = "Copy to clipboard", ...props }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const commandToCopy = useMemo(() => {
    if (textToCopy) return textToCopy;
    if (registryName) {
      const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.NEXT_LOCALHOST_URL || "registry-test-three.vercel.app";
      return `npx shadcn@latest add https://${baseUrl}/r/${registryName}.json`;
    }
    return "";
  }, [textToCopy, registryName]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(commandToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button onClick={handleCopy} spacing="icon" aria-label="Copy to clipboard" {...props}>
          {copied ? <CheckMarkIcon size="small" label="Copied" /> : <CopyIcon size="small" label="Copy" />}
        </Button>
      </TooltipTrigger>
      <TooltipContent className="font-mono">{tooltipText}</TooltipContent>
    </Tooltip>
  );
}
