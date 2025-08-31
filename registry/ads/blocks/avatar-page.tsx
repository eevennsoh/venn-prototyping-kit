"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/registry/ads/ui/avatar";

function AvatarShowcase() {
  return (
    <div className="flex h-full w-full flex-col gap-6">
      {/* Basic Usage */}
      <div className="space-y-4">
        <h6>Basic Usage</h6>
        <div className="flex flex-wrap items-center gap-4">
          <div className="border-border flex flex-col items-start gap-2 rounded-sm border p-4">
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <span className="font-body-small text-text-subtlest">with image</span>
          </div>
          <div className="border-border flex flex-col items-start gap-2 rounded-sm border p-4">
            <Avatar>
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <span className="font-body-small text-text-subtlest">with fallback</span>
          </div>
        </div>
      </div>

      {/* Sizes */}
      <div className="space-y-4">
        <h6>Sizes</h6>
        <div className="flex flex-wrap items-center gap-4">
          <div className="border-border flex flex-col items-start gap-2 rounded-sm border p-4">
            <Avatar className="size-6">
              <AvatarFallback className="text-xs">XS</AvatarFallback>
            </Avatar>
            <span className="font-body-small text-text-subtlest">small</span>
          </div>
          <div className="border-border flex flex-col items-start gap-2 rounded-sm border p-4">
            <Avatar>
              <AvatarFallback>MD</AvatarFallback>
            </Avatar>
            <span className="font-body-small text-text-subtlest">default</span>
          </div>
          <div className="border-border flex flex-col items-start gap-2 rounded-sm border p-4">
            <Avatar className="size-12">
              <AvatarFallback>LG</AvatarFallback>
            </Avatar>
            <span className="font-body-small text-text-subtlest">large</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AvatarPage() {
  return (
    <div className="flex h-full w-full items-start justify-start">
      <AvatarShowcase />
    </div>
  );
}
