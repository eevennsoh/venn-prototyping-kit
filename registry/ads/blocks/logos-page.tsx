"use client";

import dynamic from "next/dynamic";
import { LogoWrapper } from "@/registry/ads/lib/logo-wrapper";

// Create specific logo components using the wrapper (glyph-only vs full wordmark)
const Confluence = dynamic(() => import("@atlaskit/logo").then((m) => LogoWrapper(m.ConfluenceIcon, m.ConfluenceLogo)), { ssr: false });
const Jira = dynamic(() => import("@atlaskit/logo").then((m) => LogoWrapper(m.JiraIcon, m.JiraLogo)), { ssr: false });

function LogoShowcase() {
  return (
    <div className="flex h-full flex-col gap-6 p-4">
      <div className="space-y-4">
        <h3 className="font-semibold">Different Sizes</h3>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-start gap-1">
            <Confluence size="xxsmall" />
            <span className="text-muted-foreground text-xs">xxsmall (16px)</span>
          </div>
          <div className="flex flex-col items-start gap-1">
            <Confluence size="xsmall" />
            <span className="text-muted-foreground text-xs">xsmall (20px)</span>
          </div>
          <div className="flex flex-col items-start gap-1">
            <Confluence size="small" />
            <span className="text-muted-foreground text-xs">small (24px)</span>
          </div>
          <div className="flex flex-col items-start gap-1">
            <Confluence size="medium" />
            <span className="text-muted-foreground text-xs">medium (32px)</span>
          </div>
          <div className="flex flex-col items-start gap-1">
            <Confluence size="large" />
            <span className="text-muted-foreground text-xs">large (40px)</span>
          </div>
          <div className="flex flex-col items-start gap-1">
            <Confluence size="xlarge" />
            <span className="text-muted-foreground text-xs">xlarge (48px)</span>
          </div>
        </div>
      </div>

      {/* With/without text */}
      <div className="space-y-4">
        <h3 className="dark:text-dark-slate-900 font-semibold text-slate-900">With/Without Text</h3>
        <div className="flex flex-col items-start gap-4">
          <Jira showText={false} />
          <Jira showText={true} />
        </div>
      </div>
    </div>
  );
}

export default function LogosPage() {
  return (
    <div className="flex h-full items-start justify-start">
      <LogoShowcase />
    </div>
  );
}
