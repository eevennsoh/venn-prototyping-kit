"use client";

import { Skeleton } from "@/registry/ads/ui/skeleton";

function SkeletonShowcase() {
  return (
    <div className="flex h-full w-full flex-col gap-6">
      {/* Basic Shapes */}
      <div className="space-y-4">
        <h6>Basic Shapes</h6>
        <div className="flex flex-wrap items-center gap-4">
          <div className="border-border flex flex-col items-start gap-2 rounded-sm border p-4">
            <Skeleton className="h-4 w-32" />
            <span className="font-body-small text-text-subtlest">text line</span>
          </div>
          <div className="border-border flex flex-col items-start gap-2 rounded-sm border p-4">
            <Skeleton className="h-4 w-4 rounded-full" />
            <span className="font-body-small text-text-subtlest">circle</span>
          </div>
          <div className="border-border flex flex-col items-start gap-2 rounded-sm border p-4">
            <Skeleton className="h-8 w-8 rounded-md" />
            <span className="font-body-small text-text-subtlest">square</span>
          </div>
        </div>
      </div>

      {/* Content Skeletons */}
      <div className="space-y-4">
        <h6>Content Skeletons</h6>
        <div className="flex flex-wrap items-center gap-4">
          <div className="border-border flex flex-col items-start gap-2 rounded-sm border p-4">
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
            <span className="font-body-small text-text-subtlest">text content</span>
          </div>
          <div className="border-border flex flex-col items-start gap-2 rounded-sm border p-4">
            <div className="flex items-center space-x-2">
              <Skeleton className="h-8 w-8 rounded-full" />
              <div className="space-y-1">
                <Skeleton className="h-3 w-20" />
                <Skeleton className="h-3 w-16" />
              </div>
            </div>
            <span className="font-body-small text-text-subtlest">avatar with text</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SkeletonPage() {
  return (
    <div className="flex h-full w-full items-start justify-start">
      <SkeletonShowcase />
    </div>
  );
}
