"use client";

import { AspectRatio } from "@/registry/ads/ui/aspect-ratio";

function AspectRatioShowcase() {
  return (
    <div className="flex h-full w-full flex-col gap-6">
      {/* Different Ratios */}
      <div className="space-y-4">
        <h6>Aspect Ratios</h6>
        <div className="flex flex-wrap items-start gap-4">
          <div className="flex flex-col items-start gap-2">
            <div className="w-48">
              <AspectRatio ratio={16 / 9}>
                <div className="bg-background-accent flex h-full w-full items-center justify-center rounded-md">
                  <span className="font-body-small text-text">16:9</span>
                </div>
              </AspectRatio>
            </div>
            <span className="font-body-small text-text-subtlest">16:9 ratio</span>
          </div>
          <div className="flex flex-col items-start gap-2">
            <div className="w-48">
              <AspectRatio ratio={4 / 3}>
                <div className="bg-background-accent flex h-full w-full items-center justify-center rounded-md">
                  <span className="font-body-small text-text">4:3</span>
                </div>
              </AspectRatio>
            </div>
            <span className="font-body-small text-text-subtlest">4:3 ratio</span>
          </div>
          <div className="flex flex-col items-start gap-2">
            <div className="w-48">
              <AspectRatio ratio={1}>
                <div className="bg-background-accent flex h-full w-full items-center justify-center rounded-md">
                  <span className="font-body-small text-text">1:1</span>
                </div>
              </AspectRatio>
            </div>
            <span className="font-body-small text-text-subtlest">1:1 ratio</span>
          </div>
        </div>
      </div>

      {/* With Image */}
      <div className="space-y-4">
        <h6>With Content</h6>
        <div className="w-64">
          <AspectRatio ratio={16 / 9}>
            <div className="bg-background-brand flex h-full w-full items-center justify-center rounded-md">
              <span className="text-text-inverse font-body">Image placeholder</span>
            </div>
          </AspectRatio>
        </div>
      </div>
    </div>
  );
}

export default function AspectRatioPage() {
  return (
    <div className="flex h-full w-full items-start justify-start">
      <AspectRatioShowcase />
    </div>
  );
}
