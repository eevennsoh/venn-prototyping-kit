"use client";

import { Slider } from "@/registry/ads/ui/slider";

function SliderShowcase() {
  return (
    <div className="flex h-full w-full flex-col gap-6">
      {/* Basic Usage */}
      <div className="space-y-4">
        <h6>Basic Usage</h6>
        <div className="flex flex-wrap items-center gap-4">
          <div className="border-border flex flex-col items-start gap-2 rounded-sm border p-4">
            <Slider defaultValue={[50]} className="w-32" />
            <span className="font-body-small text-text-subtlest">single value</span>
          </div>
        </div>
      </div>

      {/* State */}
      <div className="space-y-4">
        <h6>State</h6>
        <div className="flex flex-wrap items-center gap-4">
          <div className="border-border flex flex-col items-start gap-2 rounded-sm border p-4">
            <Slider disabled defaultValue={[50]} className="w-32" />
            <span className="font-body-small text-text-subtlest">disabled</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SliderPage() {
  return (
    <div className="flex h-full w-full items-start justify-start">
      <SliderShowcase />
    </div>
  );
}
