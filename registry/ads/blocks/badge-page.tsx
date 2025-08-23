"use client";

import { Badge } from "@/registry/ads/ui/badge";

function BadgeShowcase() {
  return (
    <div className="flex h-full flex-col gap-6">
      {/* Appearance Variants */}
      <div className="space-y-4">
        <h3>Appearance</h3>
        <div className="flex flex-wrap items-center gap-4">
          <div className="border-border flex flex-col items-start gap-1 rounded-sm border p-2">
            <Badge appearance="default">Default</Badge>
            <span className="font-body-small text-text-subtlest">default</span>
          </div>
          <div className="border-border flex flex-col items-start gap-1 rounded-sm border p-2">
            <Badge appearance="primary">Primary</Badge>
            <span className="font-body-small text-text-subtlest">primary</span>
          </div>
          <div className="border-border flex flex-col items-start gap-1 rounded-sm border p-2">
            <Badge appearance="added">Added</Badge>
            <span className="font-body-small text-text-subtlest">added</span>
          </div>
          <div className="border-border flex flex-col items-start gap-1 rounded-sm border p-2">
            <Badge appearance="removed">Removed</Badge>
            <span className="font-body-small text-text-subtlest">removed</span>
          </div>
          <div className="border-border flex flex-col items-start gap-1 rounded-sm border p-2">
            <Badge appearance="important">Important</Badge>
            <span className="font-body-small text-text-subtlest">important</span>
          </div>
          <div className="flex flex-col items-start gap-1 rounded-sm bg-(--darkneutral100) p-2">
            <Badge appearance="primaryInverted">Primary Inverted</Badge>
            <span className="font-body-small text-text-inverse">primaryInverted</span>
          </div>
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
