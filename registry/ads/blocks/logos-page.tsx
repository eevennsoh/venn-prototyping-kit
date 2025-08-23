"use client";

import dynamic from "next/dynamic";
import { LogoWrapper } from "@/registry/ads/lib/logo-wrapper";

// Create specific logo components using the wrapper (glyph-only vs full wordmark)
const Confluence = dynamic(() => import("@atlaskit/logo").then((m) => LogoWrapper(m.ConfluenceIcon, m.ConfluenceLogo)), { ssr: false });
const Jira = dynamic(() => import("@atlaskit/logo").then((m) => LogoWrapper(m.JiraIcon, m.JiraLogo)), { ssr: false });

function LogoShowcase() {
  return (
    <div className="flex h-full flex-col gap-6">
      {/* Appearance */}
      <div className="space-y-4">
        <h3>Appearance</h3>
        <div className="flex flex-wrap items-center gap-4">
          <div className="border-border flex flex-col items-start gap-1 rounded-sm border p-2">
            <Jira appearance="brand" />
            <span className="font-body-small text-text-subtlest">brand</span>
          </div>
          <div className="border-border flex flex-col items-start gap-1 rounded-sm border p-2">
            <Jira appearance="neutral" />
            <span className="font-body-small text-text-subtlest">neutral</span>
          </div>
          <div className="flex flex-col items-start gap-1 rounded-sm bg-(--darkneutral100) p-2">
            <Jira appearance="inverse" />
            <span className="font-body-small text-text-inverse">inverse</span>
          </div>
        </div>
      </div>

      {/* With/Without Text */}
      <div className="space-y-4">
        <h3>With/Without Text</h3>
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-col items-start gap-1">
            <Jira showText={false} />
            <span className="font-body-small text-text-subtlest">Without text</span>
          </div>
          <div className="flex flex-col items-start gap-1">
            <Jira showText={true} />
            <span className="font-body-small text-text-subtlest">With text</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3>Sizes</h3>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-start gap-1">
            <Confluence size="xxsmall" />
            <span className="font-body-small text-text-subtlest">xxsmall (16px)</span>
          </div>
          <div className="flex flex-col items-start gap-1">
            <Confluence size="xsmall" />
            <span className="font-body-small text-text-subtlest">xsmall (20px)</span>
          </div>
          <div className="flex flex-col items-start gap-1">
            <Confluence size="small" />
            <span className="font-body-small text-text-subtlest">small (24px)</span>
          </div>
          <div className="flex flex-col items-start gap-1">
            <Confluence size="medium" />
            <span className="font-body-small text-text-subtlest">medium (32px)</span>
          </div>
          <div className="flex flex-col items-start gap-1">
            <Confluence size="large" />
            <span className="font-body-small text-text-subtlest">large (40px)</span>
          </div>
          <div className="flex flex-col items-start gap-1">
            <Confluence size="xlarge" />
            <span className="font-body-small text-text-subtlest">xlarge (48px)</span>
          </div>
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
