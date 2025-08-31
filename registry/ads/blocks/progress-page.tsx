"use client";

import { Progress } from "@/registry/ads/ui/progress";

function ProgressShowcase() {
  return (
    <div className="flex h-full w-full flex-col gap-6">
      {/* Basic Usage */}
      <div className="space-y-4">
        <h6>Basic Usage</h6>
        <div className="flex flex-wrap items-center gap-4">
          <div className="border-border flex flex-col items-start gap-2 rounded-sm border p-4">
            <Progress value={33} className="w-32" />
            <span className="font-body-small text-text-subtlest">33% complete</span>
          </div>
          <div className="border-border flex flex-col items-start gap-2 rounded-sm border p-4">
            <Progress value={66} className="w-32" />
            <span className="font-body-small text-text-subtlest">66% complete</span>
          </div>
          <div className="border-border flex flex-col items-start gap-2 rounded-sm border p-4">
            <Progress value={100} className="w-32" />
            <span className="font-body-small text-text-subtlest">100% complete</span>
          </div>
        </div>
      </div>

      {/* Different Sizes */}
      <div className="space-y-4">
        <h6>Different Sizes</h6>
        <div className="flex flex-wrap items-center gap-4">
          <div className="border-border flex flex-col items-start gap-2 rounded-sm border p-4">
            <Progress value={50} className="h-1 w-24" />
            <span className="font-body-small text-text-subtlest">small (h-1)</span>
          </div>
          <div className="border-border flex flex-col items-start gap-2 rounded-sm border p-4">
            <Progress value={50} className="w-32" />
            <span className="font-body-small text-text-subtlest">default (h-2)</span>
          </div>
          <div className="border-border flex flex-col items-start gap-2 rounded-sm border p-4">
            <Progress value={50} className="h-3 w-40" />
            <span className="font-body-small text-text-subtlest">large (h-3)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProgressPage() {
  return (
    <div className="flex h-full w-full items-start justify-start">
      <ProgressShowcase />
    </div>
  );
}
