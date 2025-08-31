"use client";

import { Textarea } from "@/registry/ads/ui/textarea";

function TextareaShowcase() {
  return (
    <div className="flex h-full w-full flex-col gap-6">
      {/* Basic Usage */}
      <div className="space-y-4">
        <h6>Basic Usage</h6>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex-1">
            <Textarea placeholder="Enter your message..." />
          </div>
        </div>
      </div>

      {/* States */}
      <div className="space-y-4">
        <h6>States</h6>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex-1">
            <Textarea disabled placeholder="Disabled textarea" />
          </div>
          <div className="flex-1">
            <Textarea className="border-border-focused inset-ring-border-focused inset-ring" placeholder="Focused textarea" />
          </div>
          <div className="flex-1">
            <Textarea aria-invalid="true" placeholder="Invalid textarea" />
          </div>
        </div>
      </div>

      {/* With Content */}
      <div className="space-y-4">
        <h6>With Content</h6>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex-1">
            <Textarea defaultValue="This is a textarea with some pre-filled content. You can edit this text as needed." rows={4} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TextareaPage() {
  return (
    <div className="flex h-full w-full items-start justify-start">
      <TextareaShowcase />
    </div>
  );
}
