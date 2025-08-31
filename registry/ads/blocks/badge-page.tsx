"use client";

import { Badge } from "@/registry/ads/ui/badge";

function BadgeShowcase() {
  return (
    <div className="flex h-full w-full flex-col gap-6">
      {/* Appearance Variants */}
      <div className="space-y-4">
        <h6>Appearance</h6>
        <div className="flex flex-wrap items-center gap-4">
          <div className="border-border flex flex-col items-start gap-1 rounded-sm border p-2">
            <Badge appearance="default">999</Badge>
            <span className="font-body-small text-text-subtlest">default</span>
          </div>
          <div className="border-border flex flex-col items-start gap-1 rounded-sm border p-2">
            <Badge appearance="primary">999</Badge>
            <span className="font-body-small text-text-subtlest">primary</span>
          </div>
          <div className="border-border flex flex-col items-start gap-1 rounded-sm border p-2">
            <Badge appearance="added">999</Badge>
            <span className="font-body-small text-text-subtlest">added</span>
          </div>
          <div className="border-border flex flex-col items-start gap-1 rounded-sm border p-2">
            <Badge appearance="removed">999</Badge>
            <span className="font-body-small text-text-subtlest">removed</span>
          </div>
          <div className="border-border flex flex-col items-start gap-1 rounded-sm border p-2">
            <Badge appearance="important">999</Badge>
            <span className="font-body-small text-text-subtlest">important</span>
          </div>
          <div className="flex flex-col items-start gap-1 rounded-sm bg-(--darkneutral100) p-2">
            <Badge appearance="primaryInverted">999</Badge>
            <span className="font-body-small text-text-inverse">primaryInverted</span>
          </div>
        </div>
      </div>

      {/* Max value */}
      <div className="space-y-4">
        <h6>Max value</h6>
        <div className="flex flex-wrap items-center gap-4">
          <div className="border-border flex flex-col items-start gap-1 rounded-sm border p-2">
            <Badge value={150} max={99}>
              150
            </Badge>
            <span className="font-body-small text-text-subtlest">value: 150, max: 99 (shows 99+)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BadgePage() {
  return (
    <div className="flex h-full w-full items-start justify-start">
      <BadgeShowcase />
    </div>
  );
}
