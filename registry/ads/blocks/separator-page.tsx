"use client";

import { Separator } from "@/registry/ads/ui/separator";

function SeparatorShowcase() {
  return (
    <div className="flex h-full w-full flex-col gap-6">
      {/* Horizontal */}
      <div className="space-y-4">
        <h6>Horizontal</h6>
        <div className="flex flex-wrap items-center gap-4">
          <div className="border-border flex w-full flex-col items-start gap-4 rounded-sm border p-4">
            <div className="space-y-4">
              <p>Content above separator</p>
              <Separator />
              <p>Content below separator</p>
            </div>
            <span className="font-body-small text-text-subtlest">horizontal separator</span>
          </div>
        </div>
      </div>

      {/* Vertical */}
      <div className="space-y-4">
        <h6>Vertical</h6>
        <div className="flex flex-wrap items-center gap-4">
          <div className="border-border flex items-center gap-4 rounded-sm border p-4">
            <div className="text-center">
              <p>Left</p>
            </div>
            <Separator orientation="vertical" className="h-8" />
            <div className="text-center">
              <p>Right</p>
            </div>
            <span className="font-body-small text-text-subtlest">vertical separator</span>
          </div>
        </div>
      </div>

      {/* With Text */}
      <div className="space-y-4">
        <h6>With Text</h6>
        <div className="flex flex-wrap items-center gap-4">
          <div className="border-border flex w-full flex-col items-start gap-4 rounded-sm border p-4">
            <div className="space-y-4">
              <p>Section 1</p>
              <div className="relative">
                <Separator />
                <span className="bg-background absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 text-xs">OR</span>
              </div>
              <p>Section 2</p>
            </div>
            <span className="font-body-small text-text-subtlest">separator with text</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SeparatorPage() {
  return (
    <div className="flex h-full w-full items-start justify-start">
      <SeparatorShowcase />
    </div>
  );
}
