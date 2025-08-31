"use client";

import { Toggle } from "@/registry/ads/ui/toggle";

function ToggleShowcase() {
  return (
    <div className="flex h-full w-full flex-col gap-6">
      {/* Variants */}
      <div className="space-y-4">
        <h6>Variants</h6>
        <div className="flex flex-wrap items-center gap-4">
          <Toggle>Default</Toggle>
          <Toggle variant="outline">Outline</Toggle>
        </div>
      </div>

      {/* Sizes */}
      <div className="space-y-4">
        <h6>Sizes</h6>
        <div className="flex flex-wrap items-center gap-4">
          <Toggle size="sm">Small</Toggle>
          <Toggle size="default">Default</Toggle>
          <Toggle size="lg">Large</Toggle>
        </div>
      </div>

      {/* States */}
      <div className="space-y-4">
        <h6>States</h6>
        <div className="flex flex-wrap items-center gap-4">
          <Toggle>Normal</Toggle>
          <Toggle pressed>Pressed</Toggle>
          <Toggle disabled>Disabled</Toggle>
        </div>
      </div>
    </div>
  );
}

export default function TogglePage() {
  return (
    <div className="flex h-full w-full items-start justify-start">
      <ToggleShowcase />
    </div>
  );
}
