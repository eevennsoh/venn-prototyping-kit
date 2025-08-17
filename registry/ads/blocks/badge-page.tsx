"use client";

import { Badge } from "@/components/ui/badge";

function BadgeShowcase() {
  return (
    <div className="flex h-full flex-col gap-6 p-4">
      {/* Appearance Variants */}
      <div className="space-y-4">
        <h3 className="font-semibold">Appearance</h3>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex flex-col items-start gap-1 rounded-sm border p-2">
            <Badge appearance="default">Default</Badge>
            <span className="text-muted-foreground text-xs">default</span>
          </div>
          <div className="flex flex-col items-start gap-1 rounded-sm border p-2">
            <Badge appearance="primary">Primary</Badge>
            <span className="text-muted-foreground text-xs">primary</span>
          </div>
          <div className="flex flex-col items-start gap-1 rounded-sm border p-2">
            <Badge appearance="primaryInverted">Primary Inverted</Badge>
            <span className="text-muted-foreground text-xs">primaryInverted</span>
          </div>
          <div className="flex flex-col items-start gap-1 rounded-sm border p-2">
            <Badge appearance="added">Added</Badge>
            <span className="text-muted-foreground text-xs">added</span>
          </div>
          <div className="flex flex-col items-start gap-1 rounded-sm border p-2">
            <Badge appearance="removed">Removed</Badge>
            <span className="text-muted-foreground text-xs">removed</span>
          </div>
          <div className="flex flex-col items-start gap-1 rounded-sm border p-2">
            <Badge appearance="important">Important</Badge>
            <span className="text-muted-foreground text-xs">important</span>
          </div>
        </div>
      </div>

      {/* Status Badges */}
      <div className="space-y-4">
        <h3 className="font-semibold">Status Indicators</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Badge appearance="added">New</Badge>
          <Badge appearance="primary">Beta</Badge>
          <Badge appearance="primaryInverted">Featured</Badge>
          <Badge appearance="important">Critical</Badge>
          <Badge appearance="removed">Deprecated</Badge>
          <Badge appearance="default">Stable</Badge>
        </div>
      </div>

      {/* Count Badges */}
      <div className="space-y-4">
        <h3 className="font-semibold">Count Badges</h3>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex flex-col items-start gap-1 rounded-sm border p-2">
            <Badge appearance="primary" value={5} />
            <span className="text-muted-foreground text-xs">count: 5</span>
          </div>
          <div className="flex flex-col items-start gap-1 rounded-sm border p-2">
            <Badge appearance="important" value={99} />
            <span className="text-muted-foreground text-xs">count: 99</span>
          </div>
          <div className="flex flex-col items-start gap-1 rounded-sm border p-2">
            <Badge appearance="added" value={100} max={99} />
            <span className="text-muted-foreground text-xs">count: 100 (max: 99)</span>
          </div>
          <div className="flex flex-col items-start gap-1 rounded-sm border p-2">
            <Badge appearance="default" value={1234} max={999} />
            <span className="text-muted-foreground text-xs">count: 1234 (max: 999)</span>
          </div>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="space-y-4">
        <h3 className="font-semibold">Usage Examples</h3>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm">Feature Flag</span>
            <Badge appearance="primary">Enabled</Badge>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">Premium Feature</span>
            <Badge appearance="primaryInverted">Pro</Badge>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">Build Status</span>
            <Badge appearance="added">Passed</Badge>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">Notifications</span>
            <Badge appearance="important" value={3} />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">Version</span>
            <Badge appearance="default">v2.1.0</Badge>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">API Status</span>
            <Badge appearance="removed">Deprecated</Badge>
          </div>
        </div>
      </div>

      {/* Interactive Examples */}
      <div className="space-y-4">
        <h3 className="font-semibold">Interactive</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Badge asChild>
            <a href="#" className="cursor-pointer">
              Clickable Badge
            </a>
          </Badge>
          <Badge asChild appearance="primary">
            <button type="button" className="cursor-pointer">
              Button Badge
            </button>
          </Badge>
        </div>
      </div>
    </div>
  );
}

export default function BadgePage() {
  return (
    <div className="flex h-full items-start justify-start">
      <BadgeShowcase />
    </div>
  );
}
